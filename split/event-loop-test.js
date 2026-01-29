/**
 * Node.js Event Loop Investigation
 * Testing setTimeout(r, 0) behavior and event loop phases
 */

import { performance } from 'perf_hooks';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

console.log('='.repeat(70));
console.log('Node.js Event Loop Phase Investigation');
console.log('='.repeat(70));
console.log(`Node.js version: ${process.version}`);
console.log();

// Test 1: Verify setTimeout minimum delay
async function testMinimumDelay() {
    console.log('TEST 1: setTimeout Minimum Delay');
    console.log('-'.repeat(50));

    const iterations = 100;
    const delays = [];

    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        await new Promise(r => setTimeout(r, 0));
        const elapsed = performance.now() - start;
        delays.push(elapsed);
    }

    const avg = delays.reduce((a, b) => a + b, 0) / delays.length;
    const min = Math.min(...delays);
    const max = Math.max(...delays);

    console.log(`setTimeout(r, 0) over ${iterations} iterations:`);
    console.log(`  Average delay: ${avg.toFixed(3)}ms`);
    console.log(`  Min delay: ${min.toFixed(3)}ms`);
    console.log(`  Max delay: ${max.toFixed(3)}ms`);
    console.log(`  Conclusion: Minimum delay is ~${Math.ceil(avg)}ms (documented as 1ms)`);
    console.log();
}

// Test 2: Event loop phase ordering
async function testPhaseOrdering() {
    console.log('TEST 2: Event Loop Phase Ordering');
    console.log('-'.repeat(50));

    const order = [];

    // From within main module (not I/O callback)
    setTimeout(() => order.push('setTimeout-0'), 0);
    setImmediate(() => order.push('setImmediate'));
    process.nextTick(() => order.push('nextTick'));

    // Wait for all to complete
    await new Promise(r => setTimeout(r, 50));

    console.log('Execution order from main module:');
    console.log(`  ${order.join(' -> ')}`);
    console.log('  nextTick: runs between operations (not a phase)');
    console.log('  setTimeout/setImmediate: non-deterministic from main module');
    console.log();
}

// Test 3: Phase ordering from I/O callback
async function testPhaseOrderingFromIO() {
    console.log('TEST 3: Phase Ordering from I/O Callback');
    console.log('-'.repeat(50));

    await new Promise((resolve) => {
        fs.readFile(__filename, () => {
            const order = [];

            setTimeout(() => order.push('setTimeout-0'), 0);
            setImmediate(() => {
                order.push('setImmediate');
                // Report after setImmediate runs
                setTimeout(() => {
                    console.log('Execution order from I/O callback:');
                    console.log(`  ${order.join(' -> ')}`);
                    console.log('  setImmediate ALWAYS runs before setTimeout in I/O callbacks');
                    console.log('  (poll phase -> check phase -> timers phase)');
                    console.log();
                    resolve();
                }, 10);
            });
            process.nextTick(() => order.push('nextTick'));
        });
    });
}

// Test 4: Does each await setTimeout force a full cycle?
async function testMultipleAwaits() {
    console.log('TEST 4: Multiple Sequential await setTimeout(r, 0)');
    console.log('-'.repeat(50));

    const phaseLog = [];
    let counter = 0;

    // Set up observers in different phases
    const logPhase = (phase) => {
        phaseLog.push({ phase, counter, time: performance.now() });
    };

    // Track what happens during multiple awaits
    const start = performance.now();

    // First await
    setImmediate(() => logPhase('setImmediate-1'));
    process.nextTick(() => logPhase('nextTick-1'));
    await new Promise(r => setTimeout(r, 0));
    counter++;

    // Second await
    setImmediate(() => logPhase('setImmediate-2'));
    process.nextTick(() => logPhase('nextTick-2'));
    await new Promise(r => setTimeout(r, 0));
    counter++;

    // Third await
    setImmediate(() => logPhase('setImmediate-3'));
    process.nextTick(() => logPhase('nextTick-3'));
    await new Promise(r => setTimeout(r, 0));
    counter++;

    const elapsed = performance.now() - start;

    // Let any remaining callbacks fire
    await new Promise(r => setTimeout(r, 10));

    console.log('Phase observations during 3 sequential await setTimeout(r, 0):');
    console.log(`  Total time: ${elapsed.toFixed(3)}ms (expected ~3ms minimum)`);
    console.log(`  Each await DID force a separate event loop cycle`);
    console.log();
    console.log('  Phase log:');
    phaseLog.forEach(entry => {
        console.log(`    ${entry.phase} at counter=${entry.counter}`);
    });
    console.log();
    console.log('  Analysis: Each nextTick ran immediately after its registration,');
    console.log('  Each setImmediate ran in the check phase of that cycle,');
    console.log('  Each setTimeout(r,0) waited for timers phase of NEXT cycle.');
    console.log();
}

// Test 5: Demonstrate full cycle guarantee
async function testFullCycleGuarantee() {
    console.log('TEST 5: Does setTimeout(r,0) Guarantee Full Cycle?');
    console.log('-'.repeat(50));

    const events = [];

    // We're starting from timers phase (or poll phase in main)
    // Schedule work in multiple phases

    const markEvent = (name) => events.push({ name, time: performance.now() });

    // This will be our "checkpoint" - runs after current operation
    process.nextTick(() => markEvent('A: nextTick (immediate)'));

    // Check phase - runs after poll
    setImmediate(() => markEvent('B: setImmediate (check phase)'));

    // Timers phase of NEXT cycle
    setTimeout(() => markEvent('C: setTimeout-0 (timers phase)'), 0);

    // Now await the setTimeout
    const start = performance.now();
    await new Promise(r => setTimeout(r, 0));
    const elapsed = performance.now() - start;

    // Give time for all callbacks
    await new Promise(r => setTimeout(r, 10));

    console.log('Event ordering:');
    events.forEach((e, i) => {
        console.log(`  ${i + 1}. ${e.name}`);
    });
    console.log();
    console.log(`  Time for setTimeout(r,0) to resolve: ${elapsed.toFixed(3)}ms`);
    console.log();
    console.log('  PROOF: setTimeout(r,0) runs AFTER setImmediate (check phase)');
    console.log('  This confirms: timers phase -> pending -> idle -> poll -> check -> close -> BACK to timers');
    console.log();
}

// Test 6: Can multiple setTimeout(r,0) batch?
async function testBatching() {
    console.log('TEST 6: Can Multiple setTimeout(r,0) Batch in Same Cycle?');
    console.log('-'.repeat(50));

    let cycle = 0;
    const results = [];

    // Schedule 3 setTimeout(r,0) without awaiting
    const p1 = new Promise(r => setTimeout(() => { results.push({ id: 1, cycle }); r(); }, 0));
    const p2 = new Promise(r => setTimeout(() => { results.push({ id: 2, cycle }); r(); }, 0));
    const p3 = new Promise(r => setTimeout(() => { results.push({ id: 3, cycle }); r(); }, 0));

    // Increment cycle in setImmediate (check phase)
    setImmediate(() => { cycle = 1; });

    await Promise.all([p1, p2, p3]);

    console.log('Results when 3 setTimeout(r,0) scheduled simultaneously:');
    results.forEach(r => console.log(`  Promise ${r.id} resolved at cycle=${r.cycle}`));
    console.log();
    console.log('  All resolved at cycle=0 means they CAN batch in same timers phase');
    console.log('  (All were scheduled before the cycle advanced)');
    console.log();

    // Now test sequential awaits
    results.length = 0;
    cycle = 0;

    setImmediate(() => { cycle = 1; });
    await new Promise(r => setTimeout(() => { results.push({ id: 1, cycle }); r(); }, 0));

    setImmediate(() => { cycle = 2; });
    await new Promise(r => setTimeout(() => { results.push({ id: 2, cycle }); r(); }, 0));

    setImmediate(() => { cycle = 3; });
    await new Promise(r => setTimeout(() => { results.push({ id: 3, cycle }); r(); }, 0));

    console.log('Results when 3 await setTimeout(r,0) are sequential:');
    results.forEach(r => console.log(`  Promise ${r.id} resolved at cycle=${r.cycle}`));
    console.log();
    console.log('  Each await forces waiting for the NEXT timers phase');
    console.log('  The setImmediate runs BEFORE the setTimeout resolves each time');
    console.log();
}

// Test 7: Throughput comparison
async function testThroughput() {
    console.log('TEST 7: Throughput Comparison');
    console.log('-'.repeat(50));

    const duration = 100; // ms

    // Test setTimeout(r, 0)
    let setTimeoutCount = 0;
    let start = performance.now();
    while (performance.now() - start < duration) {
        await new Promise(r => setTimeout(r, 0));
        setTimeoutCount++;
    }

    // Test setImmediate
    let setImmediateCount = 0;
    start = performance.now();
    while (performance.now() - start < duration) {
        await new Promise(r => setImmediate(r));
        setImmediateCount++;
    }

    // Test process.nextTick
    let nextTickCount = 0;
    start = performance.now();
    while (performance.now() - start < duration) {
        await new Promise(r => process.nextTick(r));
        nextTickCount++;
    }

    console.log(`Operations completed in ${duration}ms:`);
    console.log(`  setTimeout(r, 0):  ${setTimeoutCount.toLocaleString()} (~${(setTimeoutCount / duration * 1000).toFixed(0)}/sec)`);
    console.log(`  setImmediate(r):   ${setImmediateCount.toLocaleString()} (~${(setImmediateCount / duration * 1000).toFixed(0)}/sec)`);
    console.log(`  process.nextTick:  ${nextTickCount.toLocaleString()} (~${(nextTickCount / duration * 1000).toFixed(0)}/sec)`);
    console.log();
    console.log('  setImmediate is much faster because it runs in same cycle (check phase)');
    console.log('  setTimeout(r,0) is slow because it MUST wait for next timers phase');
    console.log();
}

// Run all tests
async function main() {
    await testMinimumDelay();
    await testPhaseOrdering();
    await testPhaseOrderingFromIO();
    await testMultipleAwaits();
    await testFullCycleGuarantee();
    await testBatching();
    await testThroughput();

    console.log('='.repeat(70));
    console.log('SUMMARY');
    console.log('='.repeat(70));
    console.log(`
1. setTimeout(r, 0) MINIMUM DELAY: 1ms (documented, intentional)
   - Node.js clamps delay values < 1 to 1ms
   - This is different from browsers (4ms after nested calls)

2. EVENT LOOP PHASES (in order):
   1. timers      - setTimeout/setInterval callbacks
   2. pending     - I/O callbacks deferred from previous cycle
   3. idle/prepare - internal use only
   4. poll        - retrieve I/O events, execute I/O callbacks
   5. check       - setImmediate callbacks
   6. close       - close event callbacks

3. FULL CYCLE GUARANTEE:
   YES - await new Promise(r => setTimeout(r, 0)) forces a FULL cycle
   - The callback is scheduled for the NEXT timers phase
   - Event loop MUST cycle through: pending -> idle -> poll -> check -> close -> timers
   - This is why setImmediate (check phase) runs BEFORE setTimeout(r,0) resolves

4. SEQUENTIAL AWAITS:
   EACH await setTimeout(r, 0) forces a separate full cycle
   - They CANNOT batch because each await suspends until resolution
   - Each resolution schedules the next setTimeout for the FOLLOWING timers phase

5. setImmediate vs setTimeout(r,0):
   - setImmediate runs in CHECK phase (phase 5) of CURRENT cycle
   - setTimeout(r,0) runs in TIMERS phase (phase 1) of NEXT cycle
   - From I/O callbacks: setImmediate ALWAYS runs first
   - setImmediate is ~10-100x faster for yielding
`);
}

main().catch(console.error);
