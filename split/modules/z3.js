// Module: z3
// Dependencies: p7, n3, e6, Jz, l6, uz, Ki, W28, Nb1, pZq
//   ... and 17 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var z3 = k(() => {
  __$.p7();
  __$.n3();
  __$.e6();
  __$.Jz();
  __$.l6();
  __$.uz();
  __$.Ki();
  __$.W28 = o(__$.Nb1(), 1);
  __$.pZq = __$.z6(async () => {
    try {
      let A = __$.e7(),
        K = setTimeout(() => A.abort(), 1000);
      return await __$.A8.head("http://1.1.1.1", {
        signal: A.signal
      }), clearTimeout(K), !0;
    } catch {
      return !1;
    }
  });
  __$.dZq = __$.z6(async () => {
    let A = [];
    if (await __$.RwA("npm")) A.push("npm");
    if (await __$.RwA("yarn")) A.push("yarn");
    if (await __$.RwA("pnpm")) A.push("pnpm");
    return A;
  }), __$.cZq = __$.z6(async () => {
    let A = [];
    if (await __$.RwA("bun")) A.push("bun");
    if (await __$.RwA("deno")) A.push("deno");
    if (await __$.RwA("node")) A.push("node");
    return A;
  }), __$.D28 = __$.z6(() => {
    try {
      return __$.BA().existsSync("/proc/sys/fs/binfmt_misc/WSLInterop");
    } catch (A) {
      return !1;
    }
  }), __$.lZq = __$.z6(() => {
    try {
      if (!__$.D28()) return !1;
      let {
        cmd: A
      } = __$.W28.findActualExecutable("npm", []);
      return A.startsWith("/mnt/c/");
    } catch (A) {
      return !1;
    }
  }), __$.Eb1 = ["pycharm", "intellij", "webstorm", "phpstorm", "rubymine", "clion", "goland", "rider", "datagrip", "appcode", "dataspell", "aqua", "gateway", "fleet", "jetbrains", "androidstudio"];
  __$.rZq = __$.z6(() => {
    if (__$.P1(process.env.CODESPACES)) return "codespaces";
    if (process.env.GITPOD_WORKSPACE_ID) return "gitpod";
    if (process.env.REPL_ID || process.env.REPL_SLUG) return "replit";
    if (process.env.PROJECT_DOMAIN) return "glitch";
    if (__$.P1(process.env.VERCEL)) return "vercel";
    if (process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_SERVICE_NAME) return "railway";
    if (__$.P1(process.env.RENDER)) return "render";
    if (__$.P1(process.env.NETLIFY)) return "netlify";
    if (process.env.DYNO) return "heroku";
    if (process.env.FLY_APP_NAME || process.env.FLY_MACHINE_ID) return "fly.io";
    if (__$.P1(process.env.CF_PAGES)) return "cloudflare-pages";
    if (process.env.DENO_DEPLOYMENT_ID) return "deno-deploy";
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) return "aws-lambda";
    if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_FARGATE") return "aws-fargate";
    if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_EC2") return "aws-ecs";
    try {
      if (__$.BA().existsSync("/sys/hypervisor/uuid")) {
        if (__$.BA().readFileSync("/sys/hypervisor/uuid", {
          encoding: "utf8"
        }).trim().toLowerCase().startsWith("ec2")) return "aws-ec2";
      }
    } catch {}
    if (process.env.K_SERVICE) return "gcp-cloud-run";
    if (process.env.GOOGLE_CLOUD_PROJECT) return "gcp";
    if (process.env.WEBSITE_SITE_NAME || process.env.WEBSITE_SKU) return "azure-app-service";
    if (process.env.AZURE_FUNCTIONS_ENVIRONMENT) return "azure-functions";
    if (process.env.APP_URL?.includes("ondigitalocean.app")) return "digitalocean-app-platform";
    if (process.env.SPACE_CREATOR_USER_ID) return "huggingface-spaces";
    if (__$.P1(process.env.GITHUB_ACTIONS)) return "github-actions";
    if (__$.P1(process.env.GITLAB_CI)) return "gitlab-ci";
    if (process.env.CIRCLECI) return "circleci";
    if (process.env.BUILDKITE) return "buildkite";
    if (__$.P1(!1)) return "ci";
    if (process.env.KUBERNETES_SERVICE_HOST) return "kubernetes";
    try {
      if (__$.BA().existsSync("/.dockerenv")) return "docker";
    } catch {}
    if (__$.m6.platform === "darwin") return "unknown-darwin";
    if (__$.m6.platform === "linux") return "unknown-linux";
    if (__$.m6.platform === "win32") return "unknown-win32";
    return "unknown";
  });
  __$.m6 = {
    hasInternetAccess: __$.pZq,
    isCI: __$.P1(!1),
    platform: ["win32", "darwin"].includes(process.platform) ? process.platform : "linux",
    arch: process.arch,
    nodeVersion: process.version,
    terminal: __$.nZq(),
    isSSH: __$.j28,
    getPackageManagers: __$.dZq,
    getRuntimes: __$.cZq,
    isRunningWithBun: __$.z6(__$.R1A),
    isWslEnvironment: __$.D28,
    isNpmFromWindowsPath: __$.lZq,
    isConductor: __$.iZq,
    detectDeploymentEnvironment: __$.rZq
  };
});

// Register to shared state
__$.z3 = z3;
