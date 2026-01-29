// Module: D51
// Dependencies: tX, bO4, xO4, X4A, $4A, Y_, MXA, ks3, yQ, _4A
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var D51 = k(() => {
  __$.tX = function (A) {
    return A[A.Auto = 0] = "Auto", A[A.FlexStart = 1] = "FlexStart", A[A.Center = 2] = "Center", A[A.FlexEnd = 3] = "FlexEnd", A[A.Stretch = 4] = "Stretch", A[A.Baseline = 5] = "Baseline", A[A.SpaceBetween = 6] = "SpaceBetween", A[A.SpaceAround = 7] = "SpaceAround", A[A.SpaceEvenly = 8] = "SpaceEvenly", A;
  }({}), __$.bO4 = function (A) {
    return A[A.BorderBox = 0] = "BorderBox", A[A.ContentBox = 1] = "ContentBox", A;
  }({}), __$.xO4 = function (A) {
    return A[A.Width = 0] = "Width", A[A.Height = 1] = "Height", A;
  }({}), __$.X4A = function (A) {
    return A[A.Inherit = 0] = "Inherit", A[A.LTR = 1] = "LTR", A[A.RTL = 2] = "RTL", A;
  }({}), __$.$4A = function (A) {
    return A[A.Flex = 0] = "Flex", A[A.None = 1] = "None", A[A.Contents = 2] = "Contents", A;
  }({}), __$.Y_ = function (A) {
    return A[A.Left = 0] = "Left", A[A.Top = 1] = "Top", A[A.Right = 2] = "Right", A[A.Bottom = 3] = "Bottom", A[A.Start = 4] = "Start", A[A.End = 5] = "End", A[A.Horizontal = 6] = "Horizontal", A[A.Vertical = 7] = "Vertical", A[A.All = 8] = "All", A;
  }({}), __$.MXA = function (A) {
    return A[A.None = 0] = "None", A[A.StretchFlexBasis = 1] = "StretchFlexBasis", A[A.AbsolutePositionWithoutInsetsExcludesPadding = 2] = "AbsolutePositionWithoutInsetsExcludesPadding", A[A.AbsolutePercentAgainstInnerSize = 4] = "AbsolutePercentAgainstInnerSize", A[A.All = 2147483647] = "All", A[A.Classic = 2147483646] = "Classic", A;
  }({}), __$.ks3 = function (A) {
    return A[A.WebFlexBasis = 0] = "WebFlexBasis", A;
  }({}), __$.yQ = function (A) {
    return A[A.Column = 0] = "Column", A[A.ColumnReverse = 1] = "ColumnReverse", A[A.Row = 2] = "Row", A[A.RowReverse = 3] = "RowReverse", A;
  }({}), __$._4A = function (A) {
    return A[A.Column = 0] = "Column", A[A.Row = 1] = "Row", A[A.All = 2] = "All", A;
  }({}), __$.vT = function (A) {
    return A[A.FlexStart = 0] = "FlexStart", A[A.Center = 1] = "Center", A[A.FlexEnd = 2] = "FlexEnd", A[A.SpaceBetween = 3] = "SpaceBetween", A[A.SpaceAround = 4] = "SpaceAround", A[A.SpaceEvenly = 5] = "SpaceEvenly", A;
  }({}), __$.PXA = function (A) {
    return A[A.Error = 0] = "Error", A[A.Warn = 1] = "Warn", A[A.Info = 2] = "Info", A[A.Debug = 3] = "Debug", A[A.Verbose = 4] = "Verbose", A[A.Fatal = 5] = "Fatal", A;
  }({}), __$.VXA = function (A) {
    return A[A.Undefined = 0] = "Undefined", A[A.Exactly = 1] = "Exactly", A[A.AtMost = 2] = "AtMost", A;
  }({}), __$.uO4 = function (A) {
    return A[A.Default = 0] = "Default", A[A.Text = 1] = "Text", A;
  }({}), __$.s76 = function (A) {
    return A[A.Visible = 0] = "Visible", A[A.Hidden = 1] = "Hidden", A[A.Scroll = 2] = "Scroll", A;
  }({}), __$.fXA = function (A) {
    return A[A.Static = 0] = "Static", A[A.Relative = 1] = "Relative", A[A.Absolute = 2] = "Absolute", A;
  }({}), __$.Ly = function (A) {
    return A[A.Undefined = 0] = "Undefined", A[A.Point = 1] = "Point", A[A.Percent = 2] = "Percent", A[A.Auto = 3] = "Auto", A;
  }({}), __$.G4A = function (A) {
    return A[A.NoWrap = 0] = "NoWrap", A[A.Wrap = 1] = "Wrap", A[A.WrapReverse = 2] = "WrapReverse", A;
  }({}), __$.Cs3 = {
    ALIGN_AUTO: __$.tX.Auto,
    ALIGN_FLEX_START: __$.tX.FlexStart,
    ALIGN_CENTER: __$.tX.Center,
    ALIGN_FLEX_END: __$.tX.FlexEnd,
    ALIGN_STRETCH: __$.tX.Stretch,
    ALIGN_BASELINE: __$.tX.Baseline,
    ALIGN_SPACE_BETWEEN: __$.tX.SpaceBetween,
    ALIGN_SPACE_AROUND: __$.tX.SpaceAround,
    ALIGN_SPACE_EVENLY: __$.tX.SpaceEvenly,
    BOX_SIZING_BORDER_BOX: __$.bO4.BorderBox,
    BOX_SIZING_CONTENT_BOX: __$.bO4.ContentBox,
    DIMENSION_WIDTH: __$.xO4.Width,
    DIMENSION_HEIGHT: __$.xO4.Height,
    DIRECTION_INHERIT: __$.X4A.Inherit,
    DIRECTION_LTR: __$.X4A.LTR,
    DIRECTION_RTL: __$.X4A.RTL,
    DISPLAY_FLEX: __$.$4A.Flex,
    DISPLAY_NONE: __$.$4A.None,
    DISPLAY_CONTENTS: __$.$4A.Contents,
    EDGE_LEFT: __$.Y_.Left,
    EDGE_TOP: __$.Y_.Top,
    EDGE_RIGHT: __$.Y_.Right,
    EDGE_BOTTOM: __$.Y_.Bottom,
    EDGE_START: __$.Y_.Start,
    EDGE_END: __$.Y_.End,
    EDGE_HORIZONTAL: __$.Y_.Horizontal,
    EDGE_VERTICAL: __$.Y_.Vertical,
    EDGE_ALL: __$.Y_.All,
    ERRATA_NONE: __$.MXA.None,
    ERRATA_STRETCH_FLEX_BASIS: __$.MXA.StretchFlexBasis,
    ERRATA_ABSOLUTE_POSITION_WITHOUT_INSETS_EXCLUDES_PADDING: __$.MXA.AbsolutePositionWithoutInsetsExcludesPadding,
    ERRATA_ABSOLUTE_PERCENT_AGAINST_INNER_SIZE: __$.MXA.AbsolutePercentAgainstInnerSize,
    ERRATA_ALL: __$.MXA.All,
    ERRATA_CLASSIC: __$.MXA.Classic,
    EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: __$.ks3.WebFlexBasis,
    FLEX_DIRECTION_COLUMN: __$.yQ.Column,
    FLEX_DIRECTION_COLUMN_REVERSE: __$.yQ.ColumnReverse,
    FLEX_DIRECTION_ROW: __$.yQ.Row,
    FLEX_DIRECTION_ROW_REVERSE: __$.yQ.RowReverse,
    GUTTER_COLUMN: __$._4A.Column,
    GUTTER_ROW: __$._4A.Row,
    GUTTER_ALL: __$._4A.All,
    JUSTIFY_FLEX_START: __$.vT.FlexStart,
    JUSTIFY_CENTER: __$.vT.Center,
    JUSTIFY_FLEX_END: __$.vT.FlexEnd,
    JUSTIFY_SPACE_BETWEEN: __$.vT.SpaceBetween,
    JUSTIFY_SPACE_AROUND: __$.vT.SpaceAround,
    JUSTIFY_SPACE_EVENLY: __$.vT.SpaceEvenly,
    LOG_LEVEL_ERROR: __$.PXA.Error,
    LOG_LEVEL_WARN: __$.PXA.Warn,
    LOG_LEVEL_INFO: __$.PXA.Info,
    LOG_LEVEL_DEBUG: __$.PXA.Debug,
    LOG_LEVEL_VERBOSE: __$.PXA.Verbose,
    LOG_LEVEL_FATAL: __$.PXA.Fatal,
    MEASURE_MODE_UNDEFINED: __$.VXA.Undefined,
    MEASURE_MODE_EXACTLY: __$.VXA.Exactly,
    MEASURE_MODE_AT_MOST: __$.VXA.AtMost,
    NODE_TYPE_DEFAULT: __$.uO4.Default,
    NODE_TYPE_TEXT: __$.uO4.Text,
    OVERFLOW_VISIBLE: __$.s76.Visible,
    OVERFLOW_HIDDEN: __$.s76.Hidden,
    OVERFLOW_SCROLL: __$.s76.Scroll,
    POSITION_TYPE_STATIC: __$.fXA.Static,
    POSITION_TYPE_RELATIVE: __$.fXA.Relative,
    POSITION_TYPE_ABSOLUTE: __$.fXA.Absolute,
    UNIT_UNDEFINED: __$.Ly.Undefined,
    UNIT_POINT: __$.Ly.Point,
    UNIT_PERCENT: __$.Ly.Percent,
    UNIT_AUTO: __$.Ly.Auto,
    WRAP_NO_WRAP: __$.G4A.NoWrap,
    WRAP_WRAP: __$.G4A.Wrap,
    WRAP_WRAP_REVERSE: __$.G4A.WrapReverse
  }, __$.BO4 = __$.Cs3;
});

// Register to shared state
__$.D51 = D51;
