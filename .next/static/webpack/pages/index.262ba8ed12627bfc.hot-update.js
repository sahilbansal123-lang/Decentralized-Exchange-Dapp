"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SwapComponent.js":
/*!*************************************!*\
  !*** ./components/SwapComponent.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase Allowance\";\n    var ENTER_AMOUNT = \"Enter the Amount\";\n    var CONNECT_WALLET = \"Connect Wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySucess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Transaction Completed\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount)().address;\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect;\n};\n_s(SwapComponent, \"5G4n/SamcOQLj6fB1nbX2NCJ56Y=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVOzs7QUEzQ3hCQyxLQUFBQSxhQUFhO0FBZ0RuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcENvbXBvbmVudC5qcz85MmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgaGFzVmFsaWRBbGxvd2FuY2UsXHJcbiAgaW5jcmVyYXNlQWxsb3dhbmNlLFxyXG4gIHN3YXBFdGhUb1Rva2VuLFxyXG4gIHN3YXBUb2tlblRvRXRoLFxyXG4gIHN3YXBUb2tlblRvVG9rZW4sXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcclxuXHJcbmltcG9ydCB7IENvZ0ljb24sIEFycm93U21Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBERUZBVUxUX1ZBTFVFLCBFVEggfSBmcm9tIFwiLi4vdXRpbHMvc2FsZVRva2VuXCI7XHJcbmltcG9ydCB7IHRvRXRoLCB0b1dlaSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XHJcblxyXG5jb25zdCBTd2FwQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzcmNUb2tlbiwgc2V0U3JjVG9rZW5dID0gdXNlU3RhdGUoRVRIKTtcclxuICBjb25zdCBbZGVzdFRva2VuLCBzZXREZXN0VG9rZW5dID0gdXNlU3RhdGUoREVGQVVMVF9WQUxVRSk7XHJcblxyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW291dHB1dFZhbHVlLCBzZXRPdXRwdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBpbnB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb3V0cHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgaXNSZXZlcnNlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgY29uc3QgSU5DUkVBU0VfQUxMT1dBTkNFID0gXCJJbmNyZWFzZSBBbGxvd2FuY2VcIjtcclxuICBjb25zdCBFTlRFUl9BTU9VTlQgPSBcIkVudGVyIHRoZSBBbW91bnRcIjtcclxuICBjb25zdCBDT05ORUNUX1dBTExFVCA9IFwiQ29ubmVjdCBXYWxsZXRcIjtcclxuICBjb25zdCBTV0FQID0gXCJTd2FwXCI7XHJcblxyXG4gIGNvbnN0IHNyY1Rva2VuT2JqID0ge1xyXG4gICAgaWQ6IFwic3JjVG9rZW5cIixcclxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxyXG4gICAgc2V0VmFsdWU6IHNldElucHV0VmFsdWUsXHJcbiAgICBkZWZhdWx0VmFsdWU6IHNyY1Rva2VuLFxyXG4gICAgaWdub3JlVmFsdWU6IGRlc3RUb2tlbixcclxuICAgIHNldFRva2VuOiBzZXRTcmNUb2tlbixcclxuICB9O1xyXG5cclxuICBjb25zdCBkZXN0VG9rZW5PYmogPSB7XHJcbiAgICBpZDogXCJkZXN0VG9rZW5cIixcclxuICAgIHZhbHVlOiBvdXRwdXRWYWx1ZSxcclxuICAgIHNldFZhbHVlOiBzZXRPdXRwdXRWYWx1ZSxcclxuICAgIGRlZmF1bHRWYWx1ZTogZGVzdFRva2VuLFxyXG4gICAgaWdub3JlVmFsdWU6IHNyY1Rva2VuLFxyXG4gICAgc2V0VG9rZW46IHNldERlc3RUb2tlbixcclxuICB9O1xyXG5cclxuICBjb25zdCBbc3JjVG9rZW5Db21wLCBzZXRTcmNUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGVzdFRva2VuQ29tcCwgc2V0RGVzdFRva2VuQ29tcF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbc3dhcEJ0blRleHQsIHNldFN3YXBCdG5UZXh0XSA9IHVzZVN0YXRlKEVOVEVSX0FNT1VOVCk7XHJcbiAgY29uc3QgW3R4UGVuZGluZywgc2V0VHhQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHsgZHVyYXRpb246IDYwMDAgfSk7XHJcbiAgY29uc3Qgbm90aWZ5U3VjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIENvbXBsZXRlZFwiKTtcclxuXHJcbiAgY29uc3Qge2FkZHJlc3N9ID0gdXNlQWNjb3VudCgpO1xyXG5cclxuICB1c2VFZmZlY3RcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaGFzVmFsaWRBbGxvd2FuY2UiLCJpbmNyZXJhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJzd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwidXNlQWNjb3VudCIsIlN3YXBDb21wb25lbnQiLCJzcmNUb2tlbiIsInNldFNyY1Rva2VuIiwiZGVzdFRva2VuIiwic2V0RGVzdFRva2VuIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJvdXRwdXRWYWx1ZSIsInNldE91dHB1dFZhbHVlIiwiaW5wdXRWYWx1ZVJlZiIsIm91dHB1dFZhbHVlUmVmIiwiaXNSZXZlcnNlZCIsIklOQ1JFQVNFX0FMTE9XQU5DRSIsIkVOVEVSX0FNT1VOVCIsIkNPTk5FQ1RfV0FMTEVUIiwiU1dBUCIsInNyY1Rva2VuT2JqIiwiaWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWdub3JlVmFsdWUiLCJzZXRUb2tlbiIsImRlc3RUb2tlbk9iaiIsInNyY1Rva2VuQ29tcCIsInNldFNyY1Rva2VuQ29tcCIsImRlc3RUb2tlbkNvbXAiLCJzZXREZXN0VG9rZW5Db21wIiwic3dhcEJ0blRleHQiLCJzZXRTd2FwQnRuVGV4dCIsInR4UGVuZGluZyIsInNldFR4UGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2VzcyIsInN1Y2Nlc3MiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});