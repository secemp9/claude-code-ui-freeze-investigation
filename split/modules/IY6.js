// Module: IY6
// Dependencies: Nb4, vY6, tb4, TY1, RY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IY6 = v((Sjw, Ox4) => {
  var {
      spawnSync: SY1
    } = CA("node:child_process"),
    {
      createHash: cE9
    } = CA("node:crypto"),
    qx4 = __$.Nb4(),
    lE9 = __$.vY6(),
    iE9 = __$.tb4(),
    eb4 = __$.TY1(),
    {
      config: nE9,
      engines: Ax4,
      optionalDependencies: rE9
    } = __$.RY6(),
    oE9 = process.env.npm_package_config_libvips || nE9.libvips,
    Yx4 = qx4(oE9).version,
    aE9 = ["darwin-arm64", "darwin-x64", "linux-arm", "linux-arm64", "linux-s390x", "linux-x64", "linuxmusl-arm64", "linuxmusl-x64", "win32-ia32", "win32-x64"],
    hY1 = {
      encoding: "utf8",
      shell: !0
    },
    sE9 = A => {
      if (A instanceof Error) console.error(`sharp: Installation error: ${A.message}`);else console.log(`sharp: ${A}`);
    },
    zx4 = () => eb4.isNonGlibcLinuxSync() ? eb4.familySync() : "",
    tE9 = () => `${process.platform}${zx4()}-${process.arch}`,
    y$A = () => {
      if (wx4()) return "wasm32";
      let {
          npm_config_arch: A,
          npm_config_platform: K,
          npm_config_libc: q
        } = process.env,
        Y = typeof q === "string" ? q : zx4();
      return `${K || process.platform}${Y}-${A || process.arch}`;
    },
    eE9 = () => {
      try {
        return CA(`@img/sharp-libvips-dev-${y$A()}/include`);
      } catch {
        try {
          return (() => {
            throw new Error("Cannot require module " + "@img/sharp-libvips-dev/include");
          })();
        } catch {}
      }
      return "";
    },
    Ak9 = () => {
      try {
        return (() => {
          throw new Error("Cannot require module " + "@img/sharp-libvips-dev/cplusplus");
        })();
      } catch {}
      return "";
    },
    Kk9 = () => {
      try {
        return CA(`@img/sharp-libvips-dev-${y$A()}/lib`);
      } catch {
        try {
          return CA(`@img/sharp-libvips-${y$A()}/lib`);
        } catch {}
      }
      return "";
    },
    qk9 = () => {
      if (process.release?.name === "node" && process.versions) {
        if (!iE9(process.versions.node, Ax4.node)) return {
          found: process.versions.node,
          expected: Ax4.node
        };
      }
    },
    wx4 = () => {
      let {
        CC: A
      } = process.env;
      return Boolean(A && A.endsWith("/emcc"));
    },
    Yk9 = () => {
      if (process.platform === "darwin" && process.arch === "x64") return (SY1("sysctl sysctl.proc_translated", hY1).stdout || "").trim() === "sysctl.proc_translated: 1";
      return !1;
    },
    Kx4 = A => cE9("sha512").update(A).digest("hex"),
    zk9 = () => {
      try {
        let A = Kx4(`imgsharp-libvips-${y$A()}`),
          K = qx4(rE9[`@img/sharp-libvips-${y$A()}`]).version;
        return Kx4(`${A}npm:${K}`).slice(0, 10);
      } catch {}
      return "";
    },
    wk9 = () => SY1(`node-gyp rebuild --directory=src ${wx4() ? "--nodedir=emscripten" : ""}`, {
      ...hY1,
      stdio: "inherit"
    }).status,
    Hx4 = () => {
      if (process.platform !== "win32") return (SY1("pkg-config --modversion vips-cpp", {
        ...hY1,
        env: {
          ...process.env,
          PKG_CONFIG_PATH: Jx4()
        }
      }).stdout || "").trim();else return "";
    },
    Jx4 = () => {
      if (process.platform !== "win32") return [(SY1('which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2', hY1).stdout || "").trim(), process.env.PKG_CONFIG_PATH, "/usr/local/lib/pkgconfig", "/usr/lib/pkgconfig", "/usr/local/libdata/pkgconfig", "/usr/libdata/pkgconfig"].filter(Boolean).join(":");else return "";
    },
    yY6 = (A, K, q) => {
      if (q) q(`Detected ${K}, skipping search for globally-installed libvips`);
      return A;
    },
    Hk9 = A => {
      if (Boolean(process.env.SHARP_IGNORE_GLOBAL_LIBVIPS) === !0) return yY6(!1, "SHARP_IGNORE_GLOBAL_LIBVIPS", A);
      if (Boolean(process.env.SHARP_FORCE_GLOBAL_LIBVIPS) === !0) return yY6(!0, "SHARP_FORCE_GLOBAL_LIBVIPS", A);
      if (Yk9()) return yY6(!1, "Rosetta", A);
      let K = Hx4();
      return !!K && lE9(K, Yx4);
    };
  Ox4.exports = {
    minimumLibvipsVersion: Yx4,
    prebuiltPlatforms: aE9,
    buildPlatformArch: y$A,
    buildSharpLibvipsIncludeDir: eE9,
    buildSharpLibvipsCPlusPlusDir: Ak9,
    buildSharpLibvipsLibDir: Kk9,
    isUnsupportedNodeRuntime: qk9,
    runtimePlatformArch: tE9,
    log: sE9,
    yarnLocator: zk9,
    spawnRebuild: wk9,
    globalLibvipsVersion: Hx4,
    pkgConfigPath: Jx4,
    useGlobalLibvips: Hk9
  };
});

// Register to shared state
__$.IY6 = IY6;
