// Module: vpA
// Dependencies: p7, e6, s0, Z1, qDA, aQ, nQ, l6, M$1, K7
//   ... and 17 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vpA = k(() => {
  __$.p7();
  __$.e6();
  __$.s0();
  __$.Z1();
  __$.qDA();
  __$.aQ();
  __$.nQ();
  __$.l6();
  __$.M$1();
  __$.K7();
  __$.q6();
  __$.PmA();
  __$.P9A = __$.z6(async () => {
    let {
        enabled: A,
        errors: K
      } = await __$.SY(),
      q = [];
    if (K.length > 0) __$.h(`Plugin loading errors: ${K.map(Y => __$._M(Y)).join(", ")}`);
    for (let Y of A) {
      let z = new Set();
      if (Y.commandsPath) try {
        let w = await __$.tOK(Y.commandsPath, Y.name, Y.source, Y.manifest, Y.path, {
          isSkillMode: !1
        }, z);
        if (q.push(...w), w.length > 0) __$.h(`Loaded ${w.length} commands from plugin ${Y.name} default directory`);
      } catch (w) {
        __$.h(`Failed to load commands from plugin ${Y.name} default directory: ${w}`, {
          level: "error"
        });
      }
      if (Y.commandsPaths) {
        __$.h(`Plugin ${Y.name} has commandsPaths: ${Y.commandsPaths.join(", ")}`);
        for (let w of Y.commandsPaths) try {
          let H = __$.BA(),
            J = H.statSync(w);
          if (__$.h(`Checking commandPath ${w} - isDirectory: ${J.isDirectory()}, isFile: ${J.isFile()}`), J.isDirectory()) {
            let O = await __$.tOK(w, Y.name, Y.source, Y.manifest, Y.path, {
              isSkillMode: !1
            }, z);
            if (q.push(...O), O.length > 0) __$.h(`Loaded ${O.length} commands from plugin ${Y.name} custom path: ${w}`);else __$.h(`Warning: No commands found in plugin ${Y.name} custom directory: ${w}. Expected .md files or SKILL.md in subdirectories.`, {
              level: "warn"
            });
          } else if (J.isFile() && w.endsWith(".md")) {
            if (__$.Uh(H, w, z)) continue;
            let O = H.readFileSync(w, {
                encoding: "utf-8"
              }),
              {
                frontmatter: X,
                content: $
              } = __$.J_(O),
              _,
              G;
            if (Y.commandsMetadata) {
              for (let [j, M] of Object.entries(Y.commandsMetadata)) if (M.source) {
                let P = __$.MPA(Y.path, M.source);
                if (w === P) {
                  _ = `${Y.name}:${j}`, G = M;
                  break;
                }
              }
            }
            if (!_) _ = `${Y.name}:${__$.PPA(w).replace(/\.md$/, "")}`;
            let Z = G ? {
                ...X,
                ...(G.description && {
                  description: G.description
                }),
                ...(G.argumentHint && {
                  "argument-hint": G.argumentHint
                }),
                ...(G.model && {
                  model: G.model
                }),
                ...(G.allowedTools && {
                  "allowed-tools": G.allowedTools.join(",")
                })
              } : X,
              W = {
                filePath: w,
                baseDir: __$.Oe(w),
                frontmatter: Z,
                content: $
              },
              D = __$.TpA(_, W, Y.source, Y.manifest, Y.path, !1);
            if (D) q.push(D), __$.h(`Loaded command from plugin ${Y.name} custom file: ${w}${G ? " (with metadata override)" : ""}`);
          }
        } catch (H) {
          __$.h(`Failed to load commands from plugin ${Y.name} custom path ${w}: ${H}`, {
            level: "error"
          });
        }
      }
      if (Y.commandsMetadata) {
        for (let [w, H] of Object.entries(Y.commandsMetadata)) if (H.content && !H.source) try {
          let {
              frontmatter: J,
              content: O
            } = __$.J_(H.content),
            X = {
              ...J,
              ...(H.description && {
                description: H.description
              }),
              ...(H.argumentHint && {
                "argument-hint": H.argumentHint
              }),
              ...(H.model && {
                model: H.model
              }),
              ...(H.allowedTools && {
                "allowed-tools": H.allowedTools.join(",")
              })
            },
            $ = `${Y.name}:${w}`,
            _ = {
              filePath: `<inline:${$}>`,
              baseDir: Y.path,
              frontmatter: X,
              content: O
            },
            G = __$.TpA($, _, Y.source, Y.manifest, Y.path, !1);
          if (G) q.push(G), __$.h(`Loaded inline content command from plugin ${Y.name}: ${$}`);
        } catch (J) {
          __$.h(`Failed to load inline content command ${w} from plugin ${Y.name}: ${J}`, {
            level: "error"
          });
        }
      }
    }
    return __$.h(`Total plugin commands loaded: ${q.length}`), q;
  });
  __$.du6 = __$.z6(async () => {
    let {
        enabled: A,
        errors: K
      } = await __$.SY(),
      q = [];
    if (K.length > 0) __$.h(`Plugin loading errors: ${K.map(Y => __$._M(Y)).join(", ")}`);
    __$.h(`getPluginSkills: Processing ${A.length} enabled plugins`);
    for (let Y of A) {
      let z = new Set();
      if (__$.h(`Checking plugin ${Y.name}: skillsPath=${Y.skillsPath ? "exists" : "none"}, skillsPaths=${Y.skillsPaths ? Y.skillsPaths.length : 0} paths`), Y.skillsPath) {
        __$.h(`Attempting to load skills from plugin ${Y.name} default skillsPath: ${Y.skillsPath}`);
        try {
          let w = await __$.eOK(Y.skillsPath, Y.name, Y.source, Y.manifest, Y.path, z);
          q.push(...w), __$.h(`Loaded ${w.length} skills from plugin ${Y.name} default directory`);
        } catch (w) {
          __$.h(`Failed to load skills from plugin ${Y.name} default directory: ${w}`, {
            level: "error"
          });
        }
      }
      if (Y.skillsPaths) {
        __$.h(`Attempting to load skills from plugin ${Y.name} skillsPaths: ${Y.skillsPaths.join(", ")}`);
        for (let w of Y.skillsPaths) try {
          __$.h(`Loading from skillPath: ${w} for plugin ${Y.name}`);
          let H = await __$.eOK(w, Y.name, Y.source, Y.manifest, Y.path, z);
          q.push(...H), __$.h(`Loaded ${H.length} skills from plugin ${Y.name} custom path: ${w}`);
        } catch (H) {
          __$.h(`Failed to load skills from plugin ${Y.name} custom path ${w}: ${H}`, {
            level: "error"
          });
        }
      }
    }
    return __$.h(`Total plugin skills loaded: ${q.length}`), q;
  });
});

// Register to shared state
__$.vpA = vpA;
