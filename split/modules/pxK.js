// Module: pxK
// Dependencies: JKz, OKz, XKz, UxK, $C1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pxK = k(() => {
  __$.JKz = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  }, __$.OKz = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  }, __$.XKz = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  }, __$.UxK = {
    date: __$.$C1({
      formats: __$.JKz,
      defaultWidth: "full"
    }),
    time: __$.$C1({
      formats: __$.OKz,
      defaultWidth: "full"
    }),
    dateTime: __$.$C1({
      formats: __$.XKz,
      defaultWidth: "full"
    })
  };
});

// Register to shared state
__$.pxK = pxK;
