// Module: MSA
// Dependencies: TY1, IY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MSA = v((bjw, $x4) => {
  var {
      familySync: Jk9,
      versionSync: Ok9
    } = __$.TY1(),
    {
      runtimePlatformArch: Xk9,
      isUnsupportedNodeRuntime: Xx4,
      prebuiltPlatforms: $k9,
      minimumLibvipsVersion: _k9
    } = __$.IY6(),
    D7A = Xk9(),
    Gk9 = [`../src/build/Release/sharp-${D7A}.node`, "../src/build/Release/sharp-wasm32.node", `@img/sharp-${D7A}/sharp.node`, "@img/sharp-wasm32/sharp.node"],
    SY6,
    bY1 = [];
  for (let A of Gk9) try {
    SY6 = CA(A);
    break;
  } catch (K) {
    bY1.push(K);
  }
  if (SY6) $x4.exports = SY6;else {
    let [A, K, q] = ["linux", "darwin", "win32"].map(w => D7A.startsWith(w)),
      Y = [`Could not load the "sharp" module using the ${D7A} runtime`];
    bY1.forEach(w => {
      if (w.code !== "MODULE_NOT_FOUND") Y.push(`${w.code}: ${w.message}`);
    });
    let z = bY1.map(w => w.message).join(" ");
    if (Y.push("Possible solutions:"), Xx4()) {
      let {
        found: w,
        expected: H
      } = Xx4();
      Y.push("- Please upgrade Node.js:", `    Found ${w}`, `    Requires ${H}`);
    } else if ($k9.includes(D7A)) {
      let [w, H] = D7A.split("-"),
        J = w.endsWith("musl") ? " --libc=musl" : "";
      Y.push("- Ensure optional dependencies can be installed:", "    npm install --include=optional sharp", "- Ensure your package manager supports multi-platform installation:", "    See https://sharp.pixelplumbing.com/install#cross-platform", "- Add platform-specific dependencies:", `    npm install --os=${w.replace("musl", "")}${J} --cpu=${H} sharp`);
    } else Y.push(`- Manually install libvips >= ${_k9}`, "- Add experimental WebAssembly-based dependencies:", "    npm install --cpu=wasm32 sharp", "    npm install @img/sharp-wasm32");
    if (A && /(symbol not found|CXXABI_)/i.test(z)) try {
      let {
          config: w
        } = CA(`@img/sharp-libvips-${D7A}/package`),
        H = `${Jk9()} ${Ok9()}`,
        J = `${w.musl ? "musl" : "glibc"} ${w.musl || w.glibc}`;
      Y.push("- Update your OS:", `    Found ${H}`, `    Requires ${J}`);
    } catch (w) {}
    if (A && /\/snap\/core[0-9]{2}/.test(z)) Y.push("- Remove the Node.js Snap, which does not support native modules", "    snap remove node");
    if (K && /Incompatible library version/.test(z)) Y.push("- Update Homebrew:", "    brew update && brew upgrade vips");
    if (bY1.some(w => w.code === "ERR_DLOPEN_DISABLED")) Y.push("- Run Node.js without using the --no-addons flag");
    if (q && /The specified procedure could not be found/.test(z)) Y.push("- Using the canvas package on Windows?", "    See https://sharp.pixelplumbing.com/install#canvas-and-windows", "- Check for outdated versions of sharp in the dependency tree:", "    npm ls sharp");
    throw Y.push("- Consult the installation documentation:", "    See https://sharp.pixelplumbing.com/install"), Error(Y.join(`
`));
  }
});

// Register to shared state
__$.MSA = MSA;
