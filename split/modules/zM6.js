// Module: zM6
// Dependencies: YM6, BkY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zM6 = k(() => {
  __$.YM6 = {
    src: "sourcegraph",
    cody: "cody",
    aider: "aider",
    tabby: "tabby",
    tabnine: "tabnine",
    augment: "augment",
    pieces: "pieces",
    qodo: "qodo",
    aide: "aide",
    hound: "hound",
    seagoat: "seagoat",
    bloop: "bloop",
    gitloop: "gitloop",
    q: "amazon-q",
    gemini: "gemini"
  }, __$.BkY = [{
    pattern: /^sourcegraph$/i,
    tool: "sourcegraph"
  }, {
    pattern: /^cody$/i,
    tool: "cody"
  }, {
    pattern: /^openctx$/i,
    tool: "openctx"
  }, {
    pattern: /^aider$/i,
    tool: "aider"
  }, {
    pattern: /^continue$/i,
    tool: "continue"
  }, {
    pattern: /^github[-_]?copilot$/i,
    tool: "github-copilot"
  }, {
    pattern: /^copilot$/i,
    tool: "github-copilot"
  }, {
    pattern: /^cursor$/i,
    tool: "cursor"
  }, {
    pattern: /^tabby$/i,
    tool: "tabby"
  }, {
    pattern: /^codeium$/i,
    tool: "codeium"
  }, {
    pattern: /^tabnine$/i,
    tool: "tabnine"
  }, {
    pattern: /^augment[-_]?code$/i,
    tool: "augment"
  }, {
    pattern: /^augment$/i,
    tool: "augment"
  }, {
    pattern: /^windsurf$/i,
    tool: "windsurf"
  }, {
    pattern: /^aide$/i,
    tool: "aide"
  }, {
    pattern: /^codestory$/i,
    tool: "aide"
  }, {
    pattern: /^pieces$/i,
    tool: "pieces"
  }, {
    pattern: /^qodo$/i,
    tool: "qodo"
  }, {
    pattern: /^amazon[-_]?q$/i,
    tool: "amazon-q"
  }, {
    pattern: /^gemini[-_]?code[-_]?assist$/i,
    tool: "gemini"
  }, {
    pattern: /^gemini$/i,
    tool: "gemini"
  }, {
    pattern: /^hound$/i,
    tool: "hound"
  }, {
    pattern: /^seagoat$/i,
    tool: "seagoat"
  }, {
    pattern: /^bloop$/i,
    tool: "bloop"
  }, {
    pattern: /^gitloop$/i,
    tool: "gitloop"
  }, {
    pattern: /^claude[-_]?context$/i,
    tool: "claude-context"
  }, {
    pattern: /^code[-_]?index[-_]?mcp$/i,
    tool: "code-index-mcp"
  }, {
    pattern: /^code[-_]?index$/i,
    tool: "code-index-mcp"
  }, {
    pattern: /^local[-_]?code[-_]?search$/i,
    tool: "local-code-search"
  }, {
    pattern: /^codebase$/i,
    tool: "autodev-codebase"
  }, {
    pattern: /^autodev[-_]?codebase$/i,
    tool: "autodev-codebase"
  }, {
    pattern: /^code[-_]?context$/i,
    tool: "claude-context"
  }];
});

// Register to shared state
__$.zM6 = zM6;
