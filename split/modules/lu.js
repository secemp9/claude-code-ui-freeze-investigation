// Module: lu
// Dependencies: B5, CK, Z1, Ki, cuA, _X1, $jY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lu = k(() => {
  __$.B5();
  __$.CK();
  __$.Z1();
  __$.Ki();
  __$.cuA = {
    chrome: {
      name: "Google Chrome",
      macos: {
        appName: "Google Chrome",
        dataPath: ["Library", "Application Support", "Google", "Chrome"],
        nativeMessagingPath: ["Library", "Application Support", "Google", "Chrome", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["google-chrome", "google-chrome-stable"],
        dataPath: [".config", "google-chrome"],
        nativeMessagingPath: [".config", "google-chrome", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Google", "Chrome", "User Data"],
        registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts"
      }
    },
    brave: {
      name: "Brave",
      macos: {
        appName: "Brave Browser",
        dataPath: ["Library", "Application Support", "BraveSoftware", "Brave-Browser"],
        nativeMessagingPath: ["Library", "Application Support", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["brave-browser", "brave"],
        dataPath: [".config", "BraveSoftware", "Brave-Browser"],
        nativeMessagingPath: [".config", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["BraveSoftware", "Brave-Browser", "User Data"],
        registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts"
      }
    },
    arc: {
      name: "Arc",
      macos: {
        appName: "Arc",
        dataPath: ["Library", "Application Support", "Arc", "User Data"],
        nativeMessagingPath: ["Library", "Application Support", "Arc", "User Data", "NativeMessagingHosts"]
      },
      linux: {
        binaries: [],
        dataPath: [],
        nativeMessagingPath: []
      },
      windows: {
        dataPath: ["Arc", "User Data"],
        registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts"
      }
    },
    chromium: {
      name: "Chromium",
      macos: {
        appName: "Chromium",
        dataPath: ["Library", "Application Support", "Chromium"],
        nativeMessagingPath: ["Library", "Application Support", "Chromium", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["chromium", "chromium-browser"],
        dataPath: [".config", "chromium"],
        nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Chromium", "User Data"],
        registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts"
      }
    },
    edge: {
      name: "Microsoft Edge",
      macos: {
        appName: "Microsoft Edge",
        dataPath: ["Library", "Application Support", "Microsoft Edge"],
        nativeMessagingPath: ["Library", "Application Support", "Microsoft Edge", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["microsoft-edge", "microsoft-edge-stable"],
        dataPath: [".config", "microsoft-edge"],
        nativeMessagingPath: [".config", "microsoft-edge", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Microsoft", "Edge", "User Data"],
        registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts"
      }
    },
    vivaldi: {
      name: "Vivaldi",
      macos: {
        appName: "Vivaldi",
        dataPath: ["Library", "Application Support", "Vivaldi"],
        nativeMessagingPath: ["Library", "Application Support", "Vivaldi", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["vivaldi", "vivaldi-stable"],
        dataPath: [".config", "vivaldi"],
        nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Vivaldi", "User Data"],
        registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts"
      }
    },
    opera: {
      name: "Opera",
      macos: {
        appName: "Opera",
        dataPath: ["Library", "Application Support", "com.operasoftware.Opera"],
        nativeMessagingPath: ["Library", "Application Support", "com.operasoftware.Opera", "NativeMessagingHosts"]
      },
      linux: {
        binaries: ["opera"],
        dataPath: [".config", "opera"],
        nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Opera Software", "Opera Stable"],
        registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
        useRoaming: !0
      }
    }
  }, __$._X1 = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"];
  __$.$jY = new Set();
});

// Register to shared state
__$.lu = lu;
