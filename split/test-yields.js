/**
 * Test script to verify setTimeout yields work correctly at runtime
 *
 * This tests the yieldWithAbortCheck pattern used in dZ1.js for:
 * 1. Event loop cycling (via setImmediate detection)
 * 2. Abort signal detection mid-loop
 * 3. Timing measurements for batched yields
 */

// Simulated abort error class (matches __$.y2 in the codebase)
class AbortError extends Error {
  constructor() {
    super('Aborted');
    this.name = 'AbortError';
  }
}

// ============================================
// Test 1: Basic yieldWithAbortCheck behavior
// ============================================
async function testBasicYield() {
  console.log('\n=== Test 1: Basic yieldWithAbortCheck behavior ===\n');

  const abortController = new AbortController();

  // Recreate the exact pattern from dZ1.js
  const yieldWithAbortCheck = async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    if (abortController.signal.aborted) throw new AbortError();
  };

  let yieldCount = 0;
  const start = process.hrtime.bigint();

  // Run 100 iterations
  for (let i = 0; i < 100; i++) {
    await yieldWithAbortCheck();
    yieldCount++;
  }

  const end = process.hrtime.bigint();
  const totalMs = Number(end - start) / 1_000_000;
  const avgMs = totalMs / yieldCount;

  console.log(`Total yields: ${yieldCount}`);
  console.log(`Total time: ${totalMs.toFixed(2)}ms`);
  console.log(`Average time per yield: ${avgMs.toFixed(3)}ms`);
  console.log(`Expected: ~1ms per setTimeout(0) due to timer resolution`);
  console.log(`Result: ${avgMs >= 0.5 ? 'PASS - yields are actually async' : 'UNEXPECTED - yields too fast'}`);

  return { totalMs, avgMs, yieldCount };
}

// ============================================
// Test 2: Event loop cycling verification
// ============================================
async function testEventLoopCycling() {
  console.log('\n=== Test 2: Event loop cycling verification ===\n');

  const abortController = new AbortController();

  const yieldWithAbortCheck = async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    if (abortController.signal.aborted) throw new AbortError();
  };

  let setImmediateCallbacks = 0;
  let checksBetweenYields = [];

  // Schedule setImmediate callbacks that should run between yields
  const scheduleCheck = () => {
    setImmediate(() => {
      setImmediateCallbacks++;
      // Reschedule to keep checking
      if (setImmediateCallbacks < 50) {
        scheduleCheck();
      }
    });
  };

  // Start the setImmediate chain
  scheduleCheck();

  // Run yields and track how many setImmediate callbacks run
  const iterations = 20;
  for (let i = 0; i < iterations; i++) {
    const beforeYield = setImmediateCallbacks;
    await yieldWithAbortCheck();
    const afterYield = setImmediateCallbacks;
    checksBetweenYields.push(afterYield - beforeYield);
  }

  // Wait a bit for any remaining callbacks
  await new Promise(resolve => setTimeout(resolve, 10));

  console.log(`Total setImmediate callbacks that ran: ${setImmediateCallbacks}`);
  console.log(`Callbacks ran between yields: ${checksBetweenYields.filter(n => n > 0).length} out of ${iterations}`);
  console.log(`Event loop is cycling: ${setImmediateCallbacks > 0 ? 'PASS' : 'FAIL'}`);

  return { setImmediateCallbacks, checksBetweenYields };
}

// ============================================
// Test 3: Abort detection mid-loop
// ============================================
async function testAbortDetection() {
  console.log('\n=== Test 3: Abort detection mid-loop ===\n');

  const abortController = new AbortController();

  const yieldWithAbortCheck = async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    if (abortController.signal.aborted) throw new AbortError();
  };

  let iterationsCompleted = 0;
  let abortDetected = false;
  const targetAbortAt = 25;

  // Schedule abort after ~25 yields (25ms at ~1ms per yield)
  // Use setTimeout with delay to ensure it fires mid-loop
  const abortTimer = setTimeout(() => {
    abortController.abort();
  }, 25);

  try {
    for (let i = 0; i < 100; i++) {
      await yieldWithAbortCheck();
      iterationsCompleted++;
    }
  } catch (err) {
    if (err instanceof AbortError) {
      abortDetected = true;
    } else {
      clearTimeout(abortTimer);
      throw err;
    }
  }

  clearTimeout(abortTimer);

  console.log(`Iterations completed before abort: ${iterationsCompleted}`);
  console.log(`Target abort point: ~${targetAbortAt} (timing-based)`);
  console.log(`Abort detected: ${abortDetected ? 'YES' : 'NO'}`);
  // Success if abort was detected somewhere in the middle (not 0 and not 100)
  const midLoopAbort = abortDetected && iterationsCompleted > 10 && iterationsCompleted < 90;
  console.log(`Mid-loop abort: ${midLoopAbort ? 'YES' : 'NO'}`);
  console.log(`Result: ${abortDetected ? 'PASS' : 'FAIL'}`);

  return { iterationsCompleted, abortDetected, midLoopAbort };
}

// ============================================
// Test 4: Batched yields (every 16 iterations)
// ============================================
async function testBatchedYields() {
  console.log('\n=== Test 4: Batched yields (every 16 iterations) ===\n');

  const abortController = new AbortController();

  const yieldWithAbortCheck = async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    if (abortController.signal.aborted) throw new AbortError();
  };

  const batchSize = 16;
  const totalIterations = 100;
  let yieldCounter = 0;
  let actualYields = 0;
  const yieldTimes = [];

  const start = process.hrtime.bigint();

  // Simulate the batched pattern from dZ1.js
  for (let i = 0; i < totalIterations; i++) {
    // Do some simulated work
    const dummy = Math.random() * Math.random();

    // Batched yield every 16 iterations
    if (++yieldCounter % batchSize === 0) {
      const yieldStart = process.hrtime.bigint();
      await yieldWithAbortCheck();
      const yieldEnd = process.hrtime.bigint();
      yieldTimes.push(Number(yieldEnd - yieldStart) / 1_000_000);
      actualYields++;
    }
  }

  const end = process.hrtime.bigint();
  const totalMs = Number(end - start) / 1_000_000;

  console.log(`Total iterations: ${totalIterations}`);
  console.log(`Batch size: ${batchSize}`);
  console.log(`Expected yields: ${Math.floor(totalIterations / batchSize)}`);
  console.log(`Actual yields: ${actualYields}`);
  console.log(`Total time: ${totalMs.toFixed(2)}ms`);
  console.log(`Average time per yield: ${(yieldTimes.reduce((a, b) => a + b, 0) / yieldTimes.length).toFixed(3)}ms`);
  console.log(`Yield times: ${yieldTimes.map(t => t.toFixed(2)).join('ms, ')}ms`);

  // Compare to non-batched
  const nonBatchedStart = process.hrtime.bigint();
  for (let i = 0; i < totalIterations; i++) {
    await yieldWithAbortCheck();
  }
  const nonBatchedEnd = process.hrtime.bigint();
  const nonBatchedMs = Number(nonBatchedEnd - nonBatchedStart) / 1_000_000;

  console.log(`\nComparison (non-batched 100 yields): ${nonBatchedMs.toFixed(2)}ms`);
  console.log(`Batched improvement: ${((nonBatchedMs - totalMs) / nonBatchedMs * 100).toFixed(1)}% faster`);

  return { totalMs, actualYields, yieldTimes, nonBatchedMs };
}

// ============================================
// Test 5: React render simulation
// ============================================
async function testReactRenderSimulation() {
  console.log('\n=== Test 5: React render simulation ===\n');

  const abortController = new AbortController();

  const yieldWithAbortCheck = async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    if (abortController.signal.aborted) throw new AbortError();
  };

  let renderCount = 0;
  let pendingRender = false;

  // Simulate React's render scheduling
  const scheduleRender = () => {
    if (pendingRender) return;
    pendingRender = true;
    setImmediate(() => {
      renderCount++;
      pendingRender = false;
    });
  };

  // Simulate processing messages with tool_use blocks
  const messages = Array(20).fill(null).map((_, i) => ({
    content: Array(5).fill(null).map((_, j) => ({
      type: j % 2 === 0 ? 'tool_use' : 'text',
      id: `tool_${i}_${j}`
    }))
  }));

  let yieldCounter = 0;
  const batchSize = 16;

  for (const msg of messages) {
    await yieldWithAbortCheck(); // Yield before processing each message
    scheduleRender();

    for (const content of msg.content) {
      if (content.type !== 'tool_use') continue;

      // Simulate progress callback
      scheduleRender();

      if (++yieldCounter % batchSize === 0) {
        await yieldWithAbortCheck();
      }
    }
  }

  // Wait for final renders
  await new Promise(resolve => setTimeout(resolve, 20));

  console.log(`Messages processed: ${messages.length}`);
  console.log(`Tool_use blocks: ${messages.reduce((sum, m) => sum + m.content.filter(c => c.type === 'tool_use').length, 0)}`);
  console.log(`React renders that occurred: ${renderCount}`);
  console.log(`Result: ${renderCount > 0 ? 'PASS - UI would stay responsive' : 'FAIL'}`);

  return { renderCount, messageCount: messages.length };
}

// ============================================
// Run all tests
// ============================================
async function runAllTests() {
  console.log('================================================');
  console.log('  setTimeout Yield Verification Test Suite');
  console.log('================================================');
  console.log(`Node.js version: ${process.version}`);
  console.log(`Platform: ${process.platform}`);
  console.log(`Date: ${new Date().toISOString()}`);

  const results = {};

  try {
    results.basicYield = await testBasicYield();
    results.eventLoopCycling = await testEventLoopCycling();
    results.abortDetection = await testAbortDetection();
    results.batchedYields = await testBatchedYields();
    results.reactRenderSimulation = await testReactRenderSimulation();

    console.log('\n================================================');
    console.log('  SUMMARY');
    console.log('================================================\n');

    const tests = [
      { name: 'Basic yield timing', pass: results.basicYield.avgMs >= 0.5 },
      { name: 'Event loop cycling', pass: results.eventLoopCycling.setImmediateCallbacks > 0 },
      { name: 'Abort detection', pass: results.abortDetection.abortDetected },
      { name: 'Batched yields efficiency', pass: results.batchedYields.totalMs < results.batchedYields.nonBatchedMs },
      { name: 'React render simulation', pass: results.reactRenderSimulation.renderCount > 0 }
    ];

    for (const test of tests) {
      console.log(`${test.pass ? 'PASS' : 'FAIL'} - ${test.name}`);
    }

    const allPassed = tests.every(t => t.pass);
    console.log(`\nOverall: ${allPassed ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}`);

    process.exit(allPassed ? 0 : 1);
  } catch (err) {
    console.error('\nTest suite error:', err);
    process.exit(1);
  }
}

runAllTests();
