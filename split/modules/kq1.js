// Module: kq1
// Dependencies: Ck, l1, rJA, K7, A4A, Tq1, vq1, c46, l46, i46
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kq1 = k(() => {
  __$.Ck();
  __$.l1();
  __$.rJA();
  __$.K7();
  __$.A4A = {
    inputTokens: 3,
    outputTokens: 15,
    promptCacheWriteTokens: 3.75,
    promptCacheReadTokens: 0.3,
    webSearchRequests: 0.01
  }, __$.Tq1 = {
    inputTokens: 15,
    outputTokens: 75,
    promptCacheWriteTokens: 18.75,
    promptCacheReadTokens: 1.5,
    webSearchRequests: 0.01
  }, __$.vq1 = {
    inputTokens: 5,
    outputTokens: 25,
    promptCacheWriteTokens: 6.25,
    promptCacheReadTokens: 0.5,
    webSearchRequests: 0.01
  }, __$.c46 = {
    inputTokens: 6,
    outputTokens: 22.5,
    promptCacheWriteTokens: 7.5,
    promptCacheReadTokens: 0.6,
    webSearchRequests: 0.01
  }, __$.l46 = {
    inputTokens: 0.8,
    outputTokens: 4,
    promptCacheWriteTokens: 1,
    promptCacheReadTokens: 0.08,
    webSearchRequests: 0.01
  }, __$.i46 = {
    inputTokens: 1,
    outputTokens: 5,
    promptCacheWriteTokens: 1.25,
    promptCacheReadTokens: 0.1,
    webSearchRequests: 0.01
  }, __$.IH4 = {
    [__$.wM(__$.wCA.firstParty)]: __$.l46,
    [__$.wM(__$.HCA.firstParty)]: __$.i46,
    [__$.wM(__$.zCA.firstParty)]: __$.A4A,
    [__$.wM(__$.YCA.firstParty)]: __$.A4A,
    [__$.wM(__$.c6A.firstParty)]: __$.A4A,
    [__$.wM(__$.JCA.firstParty)]: __$.Tq1,
    [__$.wM(__$.OCA.firstParty)]: __$.Tq1,
    [__$.wM(__$.l6A.firstParty)]: __$.vq1,
    ...{}
  };
});

// Register to shared state
__$.kq1 = kq1;
