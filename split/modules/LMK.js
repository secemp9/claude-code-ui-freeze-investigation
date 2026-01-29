// Module: LMK
// Dependencies: mA, gZ, g4, y4, x4, IH, K7, xm6, iH, yM6
//   ... and 45 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LMK = k(() => {
  __$.mA();
  __$.gZ();
  __$.g4();
  __$.y4();
  __$.x4();
  __$.IH();
  __$.K7();
  __$.xm6();
  __$.iH();
  __$.yM6();
  __$.B7();
  __$.ZF6();
  __$.i6();
  __$.N4 = o(__$.$A(), 1), __$.Zd2 = {
    id: "large-memory-files",
    type: "warning",
    isActive: () => {
      return __$.k7A().length > 0;
    },
    render: () => {
      let A = __$.k7A();
      return __$.N4.createElement(__$.N4.Fragment, null, A.map(K => {
        let q = K.path.startsWith(__$.x1()) ? __$.Gd2(__$.x1(), K.path) : K.path;
        return __$.N4.createElement(__$.S, {
          key: K.path,
          flexDirection: "row"
        }, __$.N4.createElement(__$.V, {
          color: "warning"
        }, __$.eA.warning), __$.N4.createElement(__$.V, {
          color: "warning"
        }, "Large ", __$.N4.createElement(__$.V, {
          bold: !0
        }, q), " will impact performance (", __$.g5(K.content.length), " chars >", " ", __$.g5(__$.wU), ")", __$.N4.createElement(__$.V, {
          dimColor: !0
        }, " • /memory to edit")));
      }));
    }
  }, __$.Wd2 = {
    id: "ultra-claude-md",
    type: "warning",
    isActive: () => {
      let A = __$.C7A();
      return A !== null && A.content.length > __$.Q$A;
    },
    render: () => {
      let A = __$.C7A();
      if (!A) return null;
      let K = A.content.length;
      return __$.N4.createElement(__$.S, {
        flexDirection: "row",
        gap: 1
      }, __$.N4.createElement(__$.V, {
        color: "warning"
      }, __$.eA.warning), __$.N4.createElement(__$.V, {
        color: "warning"
      }, "CLAUDE.md entries marked as IMPORTANT exceed", " ", __$.Q$A, " chars (", K, " chars)", __$.N4.createElement(__$.V, {
        dimColor: !0
      }, " • /memory to edit")));
    }
  }, __$.Dd2 = {
    id: "claude-ai-external-token",
    type: "warning",
    isActive: () => {
      let A = __$.be();
      return __$.Z4() && (A.source === "ANTHROPIC_AUTH_TOKEN" || A.source === "apiKeyHelper");
    },
    render: () => {
      let A = __$.be();
      return __$.N4.createElement(__$.S, {
        flexDirection: "row",
        marginTop: 1
      }, __$.N4.createElement(__$.V, {
        color: "warning"
      }, __$.eA.warning), __$.N4.createElement(__$.V, {
        color: "warning"
      }, "Auth conflict: Using ", A.source, " instead of Claude account subscription token. Either unset ", A.source, ", or run `claude /logout`."));
    }
  }, __$.jd2 = {
    id: "api-key-conflict",
    type: "warning",
    isActive: () => {
      let {
        source: A
      } = __$.z0({
        skipRetrievingKeyFromApiKeyHelper: !0
      });
      return !!__$.udA() && (A === "ANTHROPIC_API_KEY" || A === "apiKeyHelper");
    },
    render: () => {
      let {
        source: A
      } = __$.z0({
        skipRetrievingKeyFromApiKeyHelper: !0
      });
      return __$.N4.createElement(__$.S, {
        flexDirection: "row",
        marginTop: 1
      }, __$.N4.createElement(__$.V, {
        color: "warning"
      }, __$.eA.warning), __$.N4.createElement(__$.V, {
        color: "warning"
      }, "Auth conflict: Using ", A, " instead of Anthropic Console key. Either unset ", A, ", or run `claude /logout`."));
    }
  }, __$.Md2 = {
    id: "both-auth-methods",
    type: "warning",
    isActive: () => {
      let {
          source: A
        } = __$.z0({
          skipRetrievingKeyFromApiKeyHelper: !0
        }),
        K = __$.be();
      return A !== "none" && K.source !== "none" && !(A === "apiKeyHelper" && K.source === "apiKeyHelper");
    },
    render: () => {
      let {
          source: A
        } = __$.z0({
          skipRetrievingKeyFromApiKeyHelper: !0
        }),
        K = __$.be();
      return __$.N4.createElement(__$.S, {
        flexDirection: "column",
        marginTop: 1
      }, __$.N4.createElement(__$.S, {
        flexDirection: "row"
      }, __$.N4.createElement(__$.V, {
        color: "warning"
      }, __$.eA.warning), __$.N4.createElement(__$.V, {
        color: "warning"
      }, "Auth conflict: Both a token (", K.source, ") and an API key (", A, ") are set. This may lead to unexpected behavior.")), __$.N4.createElement(__$.S, {
        flexDirection: "column",
        marginLeft: 3
      }, __$.N4.createElement(__$.V, {
        color: "warning"
      }, "• Trying to use", " ", K.source === "claude.ai" ? "claude.ai" : K.source, "?", " ", A === "ANTHROPIC_API_KEY" ? 'Unset the ANTHROPIC_API_KEY environment variable, or claude /logout then say "No" to the API key approval before login.' : A === "apiKeyHelper" ? "Unset the apiKeyHelper setting." : "claude /logout"), __$.N4.createElement(__$.V, {
        color: "warning"
      }, "• Trying to use ", A, "?", " ", K.source === "claude.ai" ? "claude /logout to sign out of claude.ai." : `Unset the ${K.source} environment variable.`)));
    }
  }, __$.Pd2 = {
    id: "sonnet-1m-welcome",
    type: "info",
    isActive: A => A.showSonnet1MNotice === !0,
    render: () => {
      return __$.N4.createElement(__$.S, {
        flexDirection: "column",
        marginTop: 1
      }, __$.N4.createElement(__$.V, {
        bold: !0
      }, "You now have access to Sonnet 4.5 with 1M context (uses more rate limits than Sonnet on long requests) • Update in /model"));
    }
  }, __$.Vd2 = {
    id: "opus-4.5-available",
    type: "info",
    isActive: A => A.showOpus45Notice === !0,
    render: () => {
      let K = __$.c7() !== "firstParty",
        q = __$.Uq(),
        Y = q === "max",
        z = q === "team",
        w = q === "pro",
        H = __$.J3().toLowerCase().includes("opus-4-5"),
        J;
      if (Y || z || w || H) J = __$.N4.createElement(__$.V, {
        dimColor: !0
      }, "Welcome to Opus 4.5");else if (K) J = __$.N4.createElement(__$.V, {
        dimColor: !0
      }, "/model to try Opus 4.5. Note: you may need to request access from your cloud provider");else J = __$.N4.createElement(__$.V, {
        dimColor: !0
      }, "/model to try Opus 4.5");
      return __$.N4.createElement(__$.S, {
        marginLeft: 1
      }, J);
    }
  }, __$.fd2 = {
    id: "large-agent-descriptions",
    type: "warning",
    isActive: A => {
      return __$.JdA(A.agentDefinitions) > __$.B9A;
    },
    render: A => {
      let K = __$.JdA(A.agentDefinitions);
      return __$.N4.createElement(__$.S, {
        flexDirection: "row"
      }, __$.N4.createElement(__$.V, {
        color: "warning"
      }, __$.eA.warning), __$.N4.createElement(__$.V, {
        color: "warning"
      }, "Large cumulative agent descriptions will impact performance (~", __$.g5(K), " tokens >", " ", __$.g5(__$.B9A), ")", __$.N4.createElement(__$.V, {
        dimColor: !0
      }, " • /agents to manage")));
    }
  }, __$.Nd2 = {
    id: "jetbrains-plugin-install",
    type: "info",
    isActive: A => {
      if (!__$.oBA()) return !1;
      if (!(A.config.autoInstallIdeExtension ?? !0)) return !1;
      let q = __$.eZA();
      return q !== null && !__$.kD7(q);
    },
    render: () => {
      let A = __$.eZA(),
        K = __$.O0(A);
      return __$.N4.createElement(__$.S, {
        flexDirection: "row",
        gap: 1,
        marginLeft: 1
      }, __$.N4.createElement(__$.V, {
        color: "ide"
      }, __$.eA.arrowUp), __$.N4.createElement(__$.V, null, "Install the ", __$.N4.createElement(__$.V, {
        color: "ide"
      }, K), " plugin from the JetBrains Marketplace:", " ", __$.N4.createElement(__$.V, {
        bold: !0
      }, "https://docs.claude.com/s/claude-code-jetbrains")));
    }
  }, __$.Ed2 = {
    id: "react-vulnerability",
    type: "warning",
    isActive: () => {
      if (!__$.aY(__$.vd2)) return !1;
      if ((__$.Z2().reactVulnerabilityWarningCount ?? 0) >= __$.Td2) return !1;
      return __$.GF6()?.detected === !0;
    },
    render: () => {
      let A = __$.GF6();
      if (!A?.detected || !A.packageManager || !A.packageName) return null;
      let K = __$.EMK(A.packageManager, A.packageName),
        q = A.package === "next",
        Y = q ? "CVE-2025-66478" : "CVE-2025-55182",
        z = q ? `Next.js ${A.version}` : `${A.packageName}@${A.version}`;
      return __$.N4.createElement(__$.S, {
        flexDirection: "row",
        gap: 1
      }, __$.N4.createElement(__$.V, {
        color: "warning"
      }, __$.eA.warning), __$.N4.createElement(__$.V, {
        color: "warning"
      }, z, " has a critical vulnerability (", Y, ") that could allow attackers to execute arbitrary code on your server. Run `", K, "` to update."));
    }
  }, __$.kd2 = [__$.Ed2, __$.Zd2, __$.Wd2, __$.fd2, __$.Dd2, __$.jd2, __$.Md2, __$.Pd2, __$.Vd2, __$.Nd2];
});

// Register to shared state
__$.LMK = LMK;
