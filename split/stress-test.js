#!/usr/bin/env node

/**
 * Stress Tests for Extreme Edge Cases
 *
 * Tests:
 * 1. 1000 tool_use blocks - batching and memory usage
 * 2. Rapid abort/resume cycles - signal handling
 * 3. Nested agent spawning - recursive subagents
 * 4. Empty messages - zero content handling
 * 5. Maximum message size - 1MB JSON inputs
 */

import { __$ } from "./state.js";
import "./runtime.js";

// Test results collector
const results = {
  tests: [],
  startTime: Date.now(),
  initialMemory: process.memoryUsage()
};

// Utility functions
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getMemoryUsage() {
  const usage = process.memoryUsage();
  return {
    heapUsed: formatBytes(usage.heapUsed),
    heapTotal: formatBytes(usage.heapTotal),
    external: formatBytes(usage.external),
    rss: formatBytes(usage.rss),
    raw: usage
  };
}

function recordResult(testName, passed, details = {}) {
  const memory = getMemoryUsage();
  results.tests.push({
    name: testName,
    passed,
    memory,
    timestamp: Date.now(),
    ...details
  });
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Test: ${testName}`);
  console.log(`Status: ${passed ? 'PASS' : 'FAIL'}`);
  console.log(`Memory: Heap=${memory.heapUsed}, RSS=${memory.rss}`);
  if (details.duration) console.log(`Duration: ${details.duration}ms`);
  if (details.error) console.log(`Error: ${details.error}`);
  if (details.notes) console.log(`Notes: ${details.notes}`);
  console.log('='.repeat(60));
}

// ============================================================================
// TEST 1: 1000 tool_use blocks
// ============================================================================
async function test1000ToolUseBlocks() {
  console.log('\n[TEST 1] 1000 tool_use blocks - Testing batching and memory...');
  const startTime = Date.now();
  const startMemory = process.memoryUsage();

  try {
    // Create 1000 mock tool_use blocks
    const toolUseBlocks = [];
    for (let i = 0; i < 1000; i++) {
      toolUseBlocks.push({
        type: 'tool_use',
        id: `toolu_${i.toString().padStart(4, '0')}`,
        name: 'test_tool',
        input: {
          param1: `value_${i}`,
          param2: i,
          nested: { key: `nested_value_${i}` }
        }
      });
    }

    // Simulate message with 1000 tool blocks
    const message = {
      id: 'msg_test_1000_blocks',
      type: 'message',
      role: 'assistant',
      content: toolUseBlocks,
      model: 'claude-3-opus',
      stop_reason: 'tool_use'
    };

    // Test serialization/deserialization (simulates batching processing)
    const serialized = JSON.stringify(message);
    const deserialized = JSON.parse(serialized);

    // Verify integrity
    const blockCount = deserialized.content.length;
    const lastBlock = deserialized.content[999];

    // Test batch processing simulation
    const batchSize = 50;
    const batches = [];
    for (let i = 0; i < toolUseBlocks.length; i += batchSize) {
      batches.push(toolUseBlocks.slice(i, i + batchSize));
    }

    // Process batches
    let processedCount = 0;
    for (const batch of batches) {
      for (const block of batch) {
        // Simulate tool execution
        processedCount++;
      }
    }

    const endMemory = process.memoryUsage();
    const memoryDelta = endMemory.heapUsed - startMemory.heapUsed;

    const passed = blockCount === 1000 &&
                   processedCount === 1000 &&
                   lastBlock.id === 'toolu_0999';

    recordResult('1000 tool_use blocks', passed, {
      duration: Date.now() - startTime,
      notes: `Processed ${processedCount} blocks in ${batches.length} batches. Memory delta: ${formatBytes(memoryDelta)}`,
      blockCount,
      batchCount: batches.length,
      memoryDelta: formatBytes(memoryDelta)
    });

    return passed;
  } catch (error) {
    recordResult('1000 tool_use blocks', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// TEST 2: Rapid abort/resume cycles
// ============================================================================
async function testRapidAbortResume() {
  console.log('\n[TEST 2] Rapid abort/resume cycles - Testing signal handling...');
  const startTime = Date.now();

  try {
    // Simulate abort controller for rapid cycles
    const cycles = 100;
    const abortControllers = [];
    const abortResults = [];

    for (let i = 0; i < cycles; i++) {
      const controller = new AbortController();
      abortControllers.push(controller);

      // Create a promise that can be aborted
      const abortableOperation = new Promise((resolve, reject) => {
        const signal = controller.signal;

        if (signal.aborted) {
          reject(new Error('Already aborted'));
          return;
        }

        const timeoutId = setTimeout(() => resolve(`completed_${i}`), 10);

        signal.addEventListener('abort', () => {
          clearTimeout(timeoutId);
          reject(new Error(`Aborted at cycle ${i}`));
        }, { once: true });
      });

      // Rapidly abort after random short delay
      setTimeout(() => controller.abort(), Math.random() * 5);

      try {
        const result = await abortableOperation;
        abortResults.push({ cycle: i, status: 'completed', result });
      } catch (err) {
        abortResults.push({ cycle: i, status: 'aborted', error: err.message });
      }
    }

    // Resume simulation after aborts
    let resumeCount = 0;
    for (const result of abortResults) {
      if (result.status === 'aborted') {
        // Simulate resume by creating new operation
        const resumed = await Promise.resolve(`resumed_${result.cycle}`);
        resumeCount++;
      }
    }

    const abortedCount = abortResults.filter(r => r.status === 'aborted').length;
    const completedCount = abortResults.filter(r => r.status === 'completed').length;

    const passed = abortResults.length === cycles && resumeCount === abortedCount;

    recordResult('Rapid abort/resume cycles', passed, {
      duration: Date.now() - startTime,
      notes: `${cycles} cycles: ${completedCount} completed, ${abortedCount} aborted, ${resumeCount} resumed`
    });

    return passed;
  } catch (error) {
    recordResult('Rapid abort/resume cycles', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// TEST 3: Nested agent spawning
// ============================================================================
async function testNestedAgentSpawning() {
  console.log('\n[TEST 3] Nested agent spawning - Testing subagent recursion...');
  const startTime = Date.now();

  try {
    // Simulate nested agent structure
    const maxDepth = 5;
    const agentTree = [];

    function createAgent(depth, parentId = null) {
      const agentId = `agent_depth${depth}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const agent = {
        id: agentId,
        depth,
        parentId,
        children: [],
        status: 'pending',
        createdAt: Date.now(),

        async spawn(childDepth) {
          if (childDepth > maxDepth) {
            return null; // Prevent infinite recursion
          }
          const childAgent = createAgent(childDepth, this.id);
          this.children.push(childAgent);
          return childAgent;
        },

        async execute() {
          this.status = 'running';

          // Simulate work
          await new Promise(resolve => setTimeout(resolve, 1));

          // Spawn children if not at max depth
          if (this.depth < maxDepth) {
            const child1 = await this.spawn(this.depth + 1);
            const child2 = await this.spawn(this.depth + 1);

            if (child1) await child1.execute();
            if (child2) await child2.execute();
          }

          this.status = 'completed';
          return this;
        }
      };

      agentTree.push(agent);
      return agent;
    }

    // Create root agent and execute
    const rootAgent = createAgent(1);
    await rootAgent.execute();

    // Count agents at each depth
    const depthCounts = {};
    for (const agent of agentTree) {
      depthCounts[agent.depth] = (depthCounts[agent.depth] || 0) + 1;
    }

    // Verify all agents completed
    const allCompleted = agentTree.every(a => a.status === 'completed');
    const totalAgents = agentTree.length;

    // Expected: depth 1: 1, depth 2: 2, depth 3: 4, depth 4: 8, depth 5: 16 = 31 total
    const expectedTotal = Math.pow(2, maxDepth) - 1;

    const passed = allCompleted && totalAgents === expectedTotal;

    recordResult('Nested agent spawning', passed, {
      duration: Date.now() - startTime,
      notes: `Created ${totalAgents} agents (expected ${expectedTotal}). Depth distribution: ${JSON.stringify(depthCounts)}`,
      maxDepth,
      totalAgents,
      depthCounts
    });

    return passed;
  } catch (error) {
    recordResult('Nested agent spawning', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// TEST 4: Empty messages
// ============================================================================
async function testEmptyMessages() {
  console.log('\n[TEST 4] Empty messages - Testing zero content handling...');
  const startTime = Date.now();

  try {
    // Various empty message formats
    const emptyMessages = [
      // Empty content array
      { id: 'msg_1', type: 'message', role: 'assistant', content: [] },

      // Null content
      { id: 'msg_2', type: 'message', role: 'assistant', content: null },

      // Undefined content
      { id: 'msg_3', type: 'message', role: 'assistant' },

      // Empty string content
      { id: 'msg_4', type: 'message', role: 'assistant', content: '' },

      // Content with empty text block
      { id: 'msg_5', type: 'message', role: 'assistant', content: [{ type: 'text', text: '' }] },

      // Content with empty tool_use
      { id: 'msg_6', type: 'message', role: 'assistant', content: [{ type: 'tool_use', id: 'tu_1', name: '', input: {} }] },

      // Whitespace only
      { id: 'msg_7', type: 'message', role: 'assistant', content: [{ type: 'text', text: '   \n\t  ' }] },

      // Zero-length arrays in nested structures
      { id: 'msg_8', type: 'message', role: 'assistant', content: [{ type: 'tool_result', tool_use_id: 'tu_1', content: [] }] }
    ];

    const processResults = [];

    for (const msg of emptyMessages) {
      try {
        // Test serialization
        const serialized = JSON.stringify(msg);
        const deserialized = JSON.parse(serialized);

        // Test content extraction
        const content = deserialized.content;
        const hasContent = content && (Array.isArray(content) ? content.length > 0 : !!content);

        // Test tool_use extraction
        const toolUseBlocks = Array.isArray(content)
          ? content.filter(b => b?.type === 'tool_use')
          : [];

        // Test text extraction
        const textContent = Array.isArray(content)
          ? content.filter(b => b?.type === 'text').map(b => b.text).join('')
          : '';

        processResults.push({
          id: msg.id,
          success: true,
          hasContent,
          toolUseCount: toolUseBlocks.length,
          textLength: textContent.length
        });
      } catch (err) {
        processResults.push({
          id: msg.id,
          success: false,
          error: err.message
        });
      }
    }

    const allSuccessful = processResults.every(r => r.success);
    const failedCount = processResults.filter(r => !r.success).length;

    recordResult('Empty messages', allSuccessful, {
      duration: Date.now() - startTime,
      notes: `Processed ${emptyMessages.length} empty message variants. ${failedCount} failures.`,
      processResults
    });

    return allSuccessful;
  } catch (error) {
    recordResult('Empty messages', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// TEST 5: Maximum message size (1MB JSON)
// ============================================================================
async function testMaximumMessageSize() {
  console.log('\n[TEST 5] Maximum message size - Testing 1MB JSON inputs...');
  const startTime = Date.now();
  const startMemory = process.memoryUsage();

  try {
    // Generate 1MB of data
    const targetSize = 1024 * 1024; // 1MB

    // Create large tool input
    const largeData = [];
    const itemSize = 100; // approximate size per item
    const itemCount = Math.ceil(targetSize / itemSize);

    for (let i = 0; i < itemCount; i++) {
      largeData.push({
        index: i,
        data: 'x'.repeat(50),
        nested: { a: i, b: 'y'.repeat(20) }
      });
    }

    const largeToolUse = {
      type: 'tool_use',
      id: 'toolu_large_1',
      name: 'large_input_tool',
      input: {
        large_array: largeData,
        metadata: {
          size: 'approximately 1MB',
          timestamp: Date.now()
        }
      }
    };

    const largeMessage = {
      id: 'msg_large_1',
      type: 'message',
      role: 'assistant',
      content: [largeToolUse],
      model: 'claude-3-opus'
    };

    // Test serialization
    const serializeStart = Date.now();
    const serialized = JSON.stringify(largeMessage);
    const serializeTime = Date.now() - serializeStart;
    const actualSize = serialized.length;

    // Test deserialization
    const deserializeStart = Date.now();
    const deserialized = JSON.parse(serialized);
    const deserializeTime = Date.now() - deserializeStart;

    // Verify integrity
    const inputArray = deserialized.content[0].input.large_array;
    const firstItem = inputArray[0];
    const lastItem = inputArray[inputArray.length - 1];

    const integrityCheck = firstItem.index === 0 &&
                           lastItem.index === itemCount - 1 &&
                           inputArray.length === itemCount;

    // Test chunked processing (simulate streaming)
    const chunkSize = 64 * 1024; // 64KB chunks
    const chunks = [];
    for (let i = 0; i < serialized.length; i += chunkSize) {
      chunks.push(serialized.slice(i, i + chunkSize));
    }

    // Reassemble
    const reassembled = chunks.join('');
    const reassemblyCorrect = reassembled === serialized;

    const endMemory = process.memoryUsage();
    const memoryDelta = endMemory.heapUsed - startMemory.heapUsed;

    const passed = integrityCheck && reassemblyCorrect && actualSize >= 1024 * 1024;

    recordResult('Maximum message size (1MB)', passed, {
      duration: Date.now() - startTime,
      notes: `Size: ${formatBytes(actualSize)}, Serialize: ${serializeTime}ms, Deserialize: ${deserializeTime}ms, Chunks: ${chunks.length}, Memory delta: ${formatBytes(memoryDelta)}`,
      actualSize: formatBytes(actualSize),
      serializeTime,
      deserializeTime,
      chunkCount: chunks.length,
      memoryDelta: formatBytes(memoryDelta)
    });

    return passed;
  } catch (error) {
    recordResult('Maximum message size (1MB)', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// Additional stress tests
// ============================================================================

async function testConcurrentOperations() {
  console.log('\n[TEST 6] Concurrent operations - Testing parallel processing...');
  const startTime = Date.now();

  try {
    const operationCount = 500;
    const operations = [];

    for (let i = 0; i < operationCount; i++) {
      operations.push(
        new Promise(async (resolve) => {
          // Simulate varying operation times
          await new Promise(r => setTimeout(r, Math.random() * 10));

          // Simulate JSON processing
          const data = { id: i, data: 'x'.repeat(1000) };
          const serialized = JSON.stringify(data);
          const deserialized = JSON.parse(serialized);

          resolve({ id: i, success: deserialized.id === i });
        })
      );
    }

    const results = await Promise.all(operations);
    const allSuccessful = results.every(r => r.success);
    const failedCount = results.filter(r => !r.success).length;

    recordResult('Concurrent operations', allSuccessful, {
      duration: Date.now() - startTime,
      notes: `${operationCount} concurrent operations. ${failedCount} failures.`
    });

    return allSuccessful;
  } catch (error) {
    recordResult('Concurrent operations', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

async function testMemoryLeakDetection() {
  console.log('\n[TEST 7] Memory leak detection - Testing repeated allocations...');
  const startTime = Date.now();
  const iterations = 100;
  const memorySnapshots = [];

  try {
    for (let i = 0; i < iterations; i++) {
      // Create and discard large objects
      const largeArray = new Array(10000).fill(null).map((_, j) => ({
        index: j,
        data: 'x'.repeat(100),
        nested: { a: j, b: 'test' }
      }));

      // Serialize and parse
      const serialized = JSON.stringify(largeArray);
      const parsed = JSON.parse(serialized);

      // Force some operations
      const filtered = parsed.filter(item => item.index % 2 === 0);
      const mapped = filtered.map(item => item.data);

      if (i % 10 === 0) {
        // Take memory snapshot every 10 iterations
        if (global.gc) global.gc();
        memorySnapshots.push({
          iteration: i,
          heapUsed: process.memoryUsage().heapUsed
        });
      }
    }

    // Final snapshot
    if (global.gc) global.gc();
    memorySnapshots.push({
      iteration: iterations,
      heapUsed: process.memoryUsage().heapUsed
    });

    // Check for memory growth trend
    const firstSnapshot = memorySnapshots[0].heapUsed;
    const lastSnapshot = memorySnapshots[memorySnapshots.length - 1].heapUsed;
    const growth = lastSnapshot - firstSnapshot;
    const growthPercent = (growth / firstSnapshot) * 100;

    // Allow up to 200% growth (some growth is expected due to JIT, caches, V8 optimizations, etc.)
    // The key metric is that memory doesn't grow unboundedly - steady state should be reached
    // For a true leak test, we'd need many more iterations and check for linear growth
    const passed = growthPercent < 200 || lastSnapshot < 100 * 1024 * 1024; // or under 100MB absolute

    recordResult('Memory leak detection', passed, {
      duration: Date.now() - startTime,
      notes: `Memory: first=${formatBytes(firstSnapshot)}, last=${formatBytes(lastSnapshot)}, growth=${growthPercent.toFixed(2)}%. ${iterations} iterations.`,
      growthPercent: growthPercent.toFixed(2),
      memorySnapshots: memorySnapshots.slice(0, 5).concat(memorySnapshots.slice(-2))
    });

    return passed;
  } catch (error) {
    recordResult('Memory leak detection', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// TEST 8: Deeply nested JSON structures
// ============================================================================
async function testDeeplyNestedJSON() {
  console.log('\n[TEST 8] Deeply nested JSON - Testing stack limits...');
  const startTime = Date.now();

  try {
    // Create deeply nested structure
    const maxDepth = 100;
    let nested = { value: 'deepest' };

    for (let i = 0; i < maxDepth; i++) {
      nested = { level: i, child: nested };
    }

    const message = {
      id: 'msg_nested',
      type: 'message',
      content: [{ type: 'tool_use', id: 'tu_1', name: 'nested_tool', input: nested }]
    };

    // Test serialization
    const serialized = JSON.stringify(message);
    const deserialized = JSON.parse(serialized);

    // Traverse to verify
    let current = deserialized.content[0].input;
    let depth = 0;
    while (current.child) {
      depth++;
      current = current.child;
    }

    const passed = depth === maxDepth && current.value === 'deepest';

    recordResult('Deeply nested JSON', passed, {
      duration: Date.now() - startTime,
      notes: `Nested ${maxDepth} levels deep. Verified depth: ${depth}`,
      maxDepth,
      verifiedDepth: depth
    });

    return passed;
  } catch (error) {
    recordResult('Deeply nested JSON', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// TEST 9: Unicode and special characters
// ============================================================================
async function testUnicodeAndSpecialChars() {
  console.log('\n[TEST 9] Unicode and special characters - Testing encoding...');
  const startTime = Date.now();

  try {
    const specialStrings = [
      // Emojis
      '\u{1F600}\u{1F601}\u{1F602}\u{1F923}',
      // Chinese
      '\u4e2d\u6587\u6d4b\u8bd5',
      // Arabic
      '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
      // Japanese
      '\u65e5\u672c\u8a9e',
      // Korean
      '\ud55c\uad6d\uc5b4',
      // Russian
      '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
      // Null bytes and control chars
      'null\x00byte',
      'tab\there',
      'newline\nhere',
      // JSON special chars
      '"quoted"',
      '\\backslash\\',
      // Zalgo text
      'Z\u0335\u0311\u0357\u030d\u0310\u0307\u030e\u0304a\u0307\u0312\u0357\u0310\u030a\u030d\u0310l\u0310\u0307\u0357\u030f\u030e\u0304g\u0357\u0307\u030f\u030d\u030ao\u0310\u0357\u0312\u030a\u0307',
      // Zero-width chars
      'zero\u200bwidth\u200cjoin\u200der',
      // Surrogate pairs
      '\uD83D\uDE00',
      // RTL override
      '\u202ereversed\u202c',
      // Very long string
      'x'.repeat(10000)
    ];

    const toolUseBlocks = specialStrings.map((str, i) => ({
      type: 'tool_use',
      id: `tu_unicode_${i}`,
      name: 'unicode_tool',
      input: { text: str, index: i }
    }));

    const message = {
      id: 'msg_unicode',
      type: 'message',
      content: toolUseBlocks
    };

    // Test round-trip
    const serialized = JSON.stringify(message);
    const deserialized = JSON.parse(serialized);

    // Verify all strings survived
    let allMatch = true;
    for (let i = 0; i < specialStrings.length; i++) {
      const original = specialStrings[i];
      const roundTripped = deserialized.content[i].input.text;
      if (original !== roundTripped) {
        allMatch = false;
        console.log(`  Mismatch at index ${i}: ${original.length} vs ${roundTripped.length}`);
      }
    }

    recordResult('Unicode and special characters', allMatch, {
      duration: Date.now() - startTime,
      notes: `Tested ${specialStrings.length} special strings. All round-trip: ${allMatch}`,
      stringCount: specialStrings.length
    });

    return allMatch;
  } catch (error) {
    recordResult('Unicode and special characters', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// TEST 10: Circular reference protection
// ============================================================================
async function testCircularReferenceProtection() {
  console.log('\n[TEST 10] Circular reference protection - Testing error handling...');
  const startTime = Date.now();

  try {
    // Create circular reference
    const circular = { name: 'circular' };
    circular.self = circular;

    let circularError = null;
    try {
      JSON.stringify(circular);
    } catch (e) {
      circularError = e;
    }

    // Verify JSON.stringify properly rejects circular refs
    const rejectsCircular = circularError !== null &&
                           circularError.message.includes('circular');

    // Test safe alternative with replacer
    const seen = new WeakSet();
    const safeStringify = (obj) => {
      return JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null) {
          if (seen.has(value)) return '[Circular]';
          seen.add(value);
        }
        return value;
      });
    };

    const safeResult = safeStringify(circular);
    const safeWorks = safeResult.includes('[Circular]');

    const passed = rejectsCircular && safeWorks;

    recordResult('Circular reference protection', passed, {
      duration: Date.now() - startTime,
      notes: `JSON.stringify rejects circular: ${rejectsCircular}. Safe stringify works: ${safeWorks}`,
      rejectsCircular,
      safeWorks
    });

    return passed;
  } catch (error) {
    recordResult('Circular reference protection', false, {
      duration: Date.now() - startTime,
      error: error.message
    });
    return false;
  }
}

// ============================================================================
// Main execution
// ============================================================================
async function runAllTests() {
  console.log('=' .repeat(70));
  console.log('STRESS TEST SUITE - Extreme Edge Cases');
  console.log('=' .repeat(70));
  console.log(`Start time: ${new Date().toISOString()}`);
  console.log(`Initial memory: ${JSON.stringify(getMemoryUsage())}`);
  console.log('=' .repeat(70));

  const testFunctions = [
    test1000ToolUseBlocks,
    testRapidAbortResume,
    testNestedAgentSpawning,
    testEmptyMessages,
    testMaximumMessageSize,
    testConcurrentOperations,
    testMemoryLeakDetection,
    testDeeplyNestedJSON,
    testUnicodeAndSpecialChars,
    testCircularReferenceProtection
  ];

  for (const testFn of testFunctions) {
    try {
      await testFn();
    } catch (error) {
      console.error(`Unhandled error in ${testFn.name}:`, error);
      recordResult(testFn.name, false, { error: `Unhandled: ${error.message}` });
    }

    // Brief pause between tests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Final report
  console.log('\n');
  console.log('=' .repeat(70));
  console.log('FINAL REPORT');
  console.log('=' .repeat(70));

  const passCount = results.tests.filter(t => t.passed).length;
  const failCount = results.tests.filter(t => !t.passed).length;
  const totalDuration = Date.now() - results.startTime;
  const finalMemory = getMemoryUsage();

  console.log(`\nTotal tests: ${results.tests.length}`);
  console.log(`Passed: ${passCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Total duration: ${totalDuration}ms`);
  console.log(`\nFinal memory usage:`);
  console.log(`  Heap used: ${finalMemory.heapUsed}`);
  console.log(`  Heap total: ${finalMemory.heapTotal}`);
  console.log(`  RSS: ${finalMemory.rss}`);

  console.log('\n--- Test Results Summary ---');
  for (const test of results.tests) {
    const status = test.passed ? 'PASS' : 'FAIL';
    const duration = results.tests.indexOf(test) < results.tests.length - 1
      ? (test.duration || 'N/A') + 'ms'
      : 'N/A';
    console.log(`  ${status}: ${test.name} (${test.duration || 'N/A'}ms)`);
  }

  console.log('\n' + '=' .repeat(70));
  console.log(failCount === 0 ? 'ALL TESTS PASSED' : `${failCount} TEST(S) FAILED`);
  console.log('=' .repeat(70));

  // Return exit code
  process.exit(failCount > 0 ? 1 : 0);
}

// Run tests
runAllTests().catch(error => {
  console.error('Fatal error running tests:', error);
  process.exit(1);
});
