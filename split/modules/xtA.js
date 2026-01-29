// Module: xtA
// Dependencies: H8, sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xtA = v(Ev8 => {
  var {
    _optionalChain: H6A
  } = __$.H8();
  Object.defineProperty(Ev8, "__esModule", {
    value: !0
  });
  var bsq = CA("child_process"),
    jv8 = CA("fs"),
    BE = CA("os"),
    xsq = CA("path"),
    Mv8 = CA("util"),
    Pv8 = __$.sq(),
    Vv8 = Mv8.promisify(jv8.readFile),
    fv8 = Mv8.promisify(jv8.readdir),
    Nv8 = "Context",
    usq = (A = {}) => {
      let K,
        q = {
          app: !0,
          os: !0,
          device: !0,
          culture: !0,
          cloudResource: !0,
          ...A
        };
      async function Y(w) {
        if (K === void 0) K = z();
        let H = msq(await K);
        return w.contexts = {
          ...w.contexts,
          app: {
            ...H.app,
            ...H6A([w, "access", J => J.contexts, "optionalAccess", J => J.app])
          },
          os: {
            ...H.os,
            ...H6A([w, "access", J => J.contexts, "optionalAccess", J => J.os])
          },
          device: {
            ...H.device,
            ...H6A([w, "access", J => J.contexts, "optionalAccess", J => J.device])
          },
          culture: {
            ...H.culture,
            ...H6A([w, "access", J => J.contexts, "optionalAccess", J => J.culture])
          },
          cloud_resource: {
            ...H.cloud_resource,
            ...H6A([w, "access", J => J.contexts, "optionalAccess", J => J.cloud_resource])
          }
        }, w;
      }
      async function z() {
        let w = {};
        if (q.os) w.os = await gsq();
        if (q.app) w.app = Qsq();
        if (q.device) w.device = vv8(q.device);
        if (q.culture) {
          let H = Fsq();
          if (H) w.culture = H;
        }
        if (q.cloudResource) w.cloud_resource = isq();
        return w;
      }
      return {
        name: Nv8,
        setupOnce() {},
        processEvent(w) {
          return Y(w);
        }
      };
    },
    Tv8 = Pv8.defineIntegration(usq),
    Bsq = Pv8.convertIntegrationFnToClass(Nv8, Tv8);
  function msq(A) {
    if (H6A([A, "optionalAccess", K => K.app, "optionalAccess", K => K.app_memory])) A.app.app_memory = process.memoryUsage().rss;
    if (H6A([A, "optionalAccess", K => K.device, "optionalAccess", K => K.free_memory])) A.device.free_memory = BE.freemem();
    return A;
  }
  async function gsq() {
    let A = BE.platform();
    switch (A) {
      case "darwin":
        return csq();
      case "linux":
        return lsq();
      default:
        return {
          name: Usq[A] || A,
          version: BE.release()
        };
    }
  }
  function Fsq() {
    try {
      if (typeof process.versions.icu !== "string") return;
      let A = new Date(900000000);
      if (new Intl.DateTimeFormat("es", {
        month: "long"
      }).format(A) === "enero") {
        let q = Intl.DateTimeFormat().resolvedOptions();
        return {
          locale: q.locale,
          timezone: q.timeZone
        };
      }
    } catch (A) {}
    return;
  }
  function Qsq() {
    let A = process.memoryUsage().rss;
    return {
      app_start_time: new Date(Date.now() - process.uptime() * 1000).toISOString(),
      app_memory: A
    };
  }
  function vv8(A) {
    let K = {},
      q;
    try {
      q = BE.uptime && BE.uptime();
    } catch (Y) {}
    if (typeof q === "number") K.boot_time = new Date(Date.now() - q * 1000).toISOString();
    if (K.arch = BE.arch(), A === !0 || A.memory) K.memory_size = BE.totalmem(), K.free_memory = BE.freemem();
    if (A === !0 || A.cpu) {
      let Y = BE.cpus();
      if (Y && Y.length) {
        let z = Y[0];
        K.processor_count = Y.length, K.cpu_description = z.model, K.processor_frequency = z.speed;
      }
    }
    return K;
  }
  var Usq = {
      aix: "IBM AIX",
      freebsd: "FreeBSD",
      openbsd: "OpenBSD",
      sunos: "SunOS",
      win32: "Windows"
    },
    psq = [{
      name: "fedora-release",
      distros: ["Fedora"]
    }, {
      name: "redhat-release",
      distros: ["Red Hat Linux", "Centos"]
    }, {
      name: "redhat_version",
      distros: ["Red Hat Linux"]
    }, {
      name: "SuSE-release",
      distros: ["SUSE Linux"]
    }, {
      name: "lsb-release",
      distros: ["Ubuntu Linux", "Arch Linux"]
    }, {
      name: "debian_version",
      distros: ["Debian"]
    }, {
      name: "debian_release",
      distros: ["Debian"]
    }, {
      name: "arch-release",
      distros: ["Arch Linux"]
    }, {
      name: "gentoo-release",
      distros: ["Gentoo Linux"]
    }, {
      name: "novell-release",
      distros: ["SUSE Linux"]
    }, {
      name: "alpine-release",
      distros: ["Alpine Linux"]
    }],
    dsq = {
      alpine: A => A,
      arch: A => fb(/distrib_release=(.*)/, A),
      centos: A => fb(/release ([^ ]+)/, A),
      debian: A => A,
      fedora: A => fb(/release (..)/, A),
      mint: A => fb(/distrib_release=(.*)/, A),
      red: A => fb(/release ([^ ]+)/, A),
      suse: A => fb(/VERSION = (.*)\n/, A),
      ubuntu: A => fb(/distrib_release=(.*)/, A)
    };
  function fb(A, K) {
    let q = A.exec(K);
    return q ? q[1] : void 0;
  }
  async function csq() {
    let A = {
      kernel_version: BE.release(),
      name: "Mac OS X",
      version: `10.${Number(BE.release().split(".")[0]) - 4}`
    };
    try {
      let K = await new Promise((q, Y) => {
        bsq.execFile("/usr/bin/sw_vers", (z, w) => {
          if (z) {
            Y(z);
            return;
          }
          q(w);
        });
      });
      A.name = fb(/^ProductName:\s+(.*)$/m, K), A.version = fb(/^ProductVersion:\s+(.*)$/m, K), A.build = fb(/^BuildVersion:\s+(.*)$/m, K);
    } catch (K) {}
    return A;
  }
  function Dv8(A) {
    return A.split(" ")[0].toLowerCase();
  }
  async function lsq() {
    let A = {
      kernel_version: BE.release(),
      name: "Linux"
    };
    try {
      let K = await fv8("/etc"),
        q = psq.find(J => K.includes(J.name));
      if (!q) return A;
      let Y = xsq.join("/etc", q.name),
        z = (await Vv8(Y, {
          encoding: "utf-8"
        })).toLowerCase(),
        {
          distros: w
        } = q;
      A.name = w.find(J => z.indexOf(Dv8(J)) >= 0) || w[0];
      let H = Dv8(A.name);
      A.version = dsq[H](z);
    } catch (K) {}
    return A;
  }
  function isq() {
    if (process.env.VERCEL) return {
      "cloud.provider": "vercel",
      "cloud.region": process.env.VERCEL_REGION
    };else if (process.env.AWS_REGION) return {
      "cloud.provider": "aws",
      "cloud.region": process.env.AWS_REGION,
      "cloud.platform": process.env.AWS_EXECUTION_ENV
    };else if (process.env.GCP_PROJECT) return {
      "cloud.provider": "gcp"
    };else if (process.env.ALIYUN_REGION_ID) return {
      "cloud.provider": "alibaba_cloud",
      "cloud.region": process.env.ALIYUN_REGION_ID
    };else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) return {
      "cloud.provider": "azure",
      "cloud.region": process.env.REGION_NAME
    };else if (process.env.IBM_CLOUD_REGION) return {
      "cloud.provider": "ibm_cloud",
      "cloud.region": process.env.IBM_CLOUD_REGION
    };else if (process.env.TENCENTCLOUD_REGION) return {
      "cloud.provider": "tencent_cloud",
      "cloud.region": process.env.TENCENTCLOUD_REGION,
      "cloud.account.id": process.env.TENCENTCLOUD_APPID,
      "cloud.availability_zone": process.env.TENCENTCLOUD_ZONE
    };else if (process.env.NETLIFY) return {
      "cloud.provider": "netlify"
    };else if (process.env.FLY_REGION) return {
      "cloud.provider": "fly.io",
      "cloud.region": process.env.FLY_REGION
    };else if (process.env.DYNO) return {
      "cloud.provider": "heroku"
    };else return;
  }
  Ev8.Context = Bsq;
  Ev8.getDeviceContext = vv8;
  Ev8.nodeContextIntegration = Tv8;
  Ev8.readDirAsync = fv8;
  Ev8.readFileAsync = Vv8;
});

// Register to shared state
__$.xtA = xtA;
