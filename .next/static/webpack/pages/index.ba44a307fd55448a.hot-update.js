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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_6__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase Allowance\";\n    var ENTER_AMOUNT = \"Enter the Amount\";\n    var CONNECT_WALLET = \"Connect Wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySucess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction Completed\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (document.activeElement !== outputValueRef.current && document.activeElement !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n            lineNumber: 80,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        desk\n    ]);\n};\n_s(SwapComponent, \"b42mUJjoxyWIQxMc8zh7vmdubjc=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtRQUNkLElBQUksQ0FBQzJELE9BQU8sRUFBRVQsY0FBYyxDQUFDZixjQUFjLENBQUMsQ0FBQzthQUN4QyxJQUFJLENBQUNULFVBQVUsSUFBSSxDQUFDRSxXQUFXLEVBQUVzQixjQUFjLENBQUNoQixZQUFZLENBQUMsQ0FBQzthQUM5RGdCLGNBQWMsQ0FBQ2QsSUFBSSxDQUFDLENBQUM7S0FDM0IsRUFBRTtRQUFDVixVQUFVO1FBQUVFLFdBQVc7UUFBRStCLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFdkMzRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUNFNEQsUUFBUSxDQUFDQyxhQUFhLEtBQUs5QixjQUFjLENBQUMrQixPQUFPLElBQ2pERixRQUFRLENBQUNDLGFBQWEsS0FBSyxVQUFVLElBQ3JDLENBQUM3QixVQUFVLENBQUM4QixPQUFPLEVBRW5CQyxtQkFBbUIsQ0FBQ3JDLFVBQVUsQ0FBQyxDQUFDO1FBRWxDb0IsZUFBZSxlQUFDLDhEQUFDMUIsa0RBQVM7WUFBQzRDLEdBQUcsRUFBRTNCLFdBQVc7WUFBRTRCLEdBQUcsRUFBRW5DLGFBQWE7Ozs7O2lCQUFJLENBQUMsQ0FBQztRQUVyRSxJQUFJSixDQUFBQSxVQUFVLGFBQVZBLFVBQVUsV0FBUSxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLFVBQVUsQ0FBRXdDLE1BQU0sTUFBSyxDQUFDLEVBQUVyQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEQsRUFBRTtRQUFDSCxVQUFVO1FBQUV5QyxJQUFJO0tBQUMsQ0FBQyxDQUFDO0NBQ3hCO0dBL0RLOUMsYUFBYTs7UUEyQ0dILDZDQUFVOzs7QUEzQzFCRyxLQUFBQSxhQUFhO0FBaUVuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcENvbXBvbmVudC5qcz85MmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgaGFzVmFsaWRBbGxvd2FuY2UsXHJcbiAgaW5jcmVyYXNlQWxsb3dhbmNlLFxyXG4gIHN3YXBFdGhUb1Rva2VuLFxyXG4gIHN3YXBUb2tlblRvRXRoLFxyXG4gIHN3YXBUb2tlblRvVG9rZW4sXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcclxuXHJcbmltcG9ydCB7IENvZ0ljb24sIEFycm93U21Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBERUZBVUxUX1ZBTFVFLCBFVEggfSBmcm9tIFwiLi4vdXRpbHMvc2FsZVRva2VuXCI7XHJcbmltcG9ydCB7IHRvRXRoLCB0b1dlaSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlIH0gZnJvbSBcImRvdGVudlwiO1xyXG5pbXBvcnQgU3dhcEZpZWxkIGZyb20gXCIuL1N3YXBGaWVsZFwiO1xyXG5cclxuY29uc3QgU3dhcENvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbc3JjVG9rZW4sIHNldFNyY1Rva2VuXSA9IHVzZVN0YXRlKEVUSCk7XHJcbiAgY29uc3QgW2Rlc3RUb2tlbiwgc2V0RGVzdFRva2VuXSA9IHVzZVN0YXRlKERFRkFVTFRfVkFMVUUpO1xyXG5cclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtvdXRwdXRWYWx1ZSwgc2V0T3V0cHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgaW5wdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG91dHB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IElOQ1JFQVNFX0FMTE9XQU5DRSA9IFwiSW5jcmVhc2UgQWxsb3dhbmNlXCI7XHJcbiAgY29uc3QgRU5URVJfQU1PVU5UID0gXCJFbnRlciB0aGUgQW1vdW50XCI7XHJcbiAgY29uc3QgQ09OTkVDVF9XQUxMRVQgPSBcIkNvbm5lY3QgV2FsbGV0XCI7XHJcbiAgY29uc3QgU1dBUCA9IFwiU3dhcFwiO1xyXG5cclxuICBjb25zdCBzcmNUb2tlbk9iaiA9IHtcclxuICAgIGlkOiBcInNyY1Rva2VuXCIsXHJcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcclxuICAgIHNldFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBzcmNUb2tlbixcclxuICAgIGlnbm9yZVZhbHVlOiBkZXN0VG9rZW4sXHJcbiAgICBzZXRUb2tlbjogc2V0U3JjVG9rZW4sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVzdFRva2VuT2JqID0ge1xyXG4gICAgaWQ6IFwiZGVzdFRva2VuXCIsXHJcbiAgICB2YWx1ZTogb3V0cHV0VmFsdWUsXHJcbiAgICBzZXRWYWx1ZTogc2V0T3V0cHV0VmFsdWUsXHJcbiAgICBkZWZhdWx0VmFsdWU6IGRlc3RUb2tlbixcclxuICAgIGlnbm9yZVZhbHVlOiBzcmNUb2tlbixcclxuICAgIHNldFRva2VuOiBzZXREZXN0VG9rZW4sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NyY1Rva2VuQ29tcCwgc2V0U3JjVG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Rlc3RUb2tlbkNvbXAsIHNldERlc3RUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3N3YXBCdG5UZXh0LCBzZXRTd2FwQnRuVGV4dF0gPSB1c2VTdGF0ZShFTlRFUl9BTU9VTlQpO1xyXG4gIGNvbnN0IFt0eFBlbmRpbmcsIHNldFR4UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7IGR1cmF0aW9uOiA2MDAwIH0pO1xyXG4gIGNvbnN0IG5vdGlmeVN1Y2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBDb21wbGV0ZWRcIik7XHJcblxyXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhZGRyZXNzKSBzZXRTd2FwQnRuVGV4dChDT05ORUNUX1dBTExFVCk7XHJcbiAgICBlbHNlIGlmICghaW5wdXRWYWx1ZSB8fCAhb3V0cHV0VmFsdWUpIHNldFN3YXBCdG5UZXh0KEVOVEVSX0FNT1VOVCk7XHJcbiAgICBlbHNlIHNldFN3YXBCdG5UZXh0KFNXQVApO1xyXG4gIH0sIFtpbnB1dFZhbHVlLCBvdXRwdXRWYWx1ZSwgYWRkcmVzc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBvdXRwdXRWYWx1ZVJlZi5jdXJyZW50ICYmXHJcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IFwic3JjVG9rZW5cIiAmJlxyXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XHJcbiAgICApXHJcbiAgICAgIHBvcHVsYXRlT3V0cHV0VmFsdWUoaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgc2V0U3JjVG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtzcmNUb2tlbk9ian0gcmVmPXtpbnB1dFZhbHVlUmVmfSAvPik7XHJcblxyXG4gICAgaWYgKGlucHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCkgc2V0T3V0cHV0VmFsdWUoXCJcIik7XHJcbiAgfSwgW2lucHV0VmFsdWUsIGRlc2tdKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaGFzVmFsaWRBbGxvd2FuY2UiLCJpbmNyZXJhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJzd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwidXNlQWNjb3VudCIsInBvcHVsYXRlIiwiU3dhcEZpZWxkIiwiU3dhcENvbXBvbmVudCIsInNyY1Rva2VuIiwic2V0U3JjVG9rZW4iLCJkZXN0VG9rZW4iLCJzZXREZXN0VG9rZW4iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm91dHB1dFZhbHVlIiwic2V0T3V0cHV0VmFsdWUiLCJpbnB1dFZhbHVlUmVmIiwib3V0cHV0VmFsdWVSZWYiLCJpc1JldmVyc2VkIiwiSU5DUkVBU0VfQUxMT1dBTkNFIiwiRU5URVJfQU1PVU5UIiwiQ09OTkVDVF9XQUxMRVQiLCJTV0FQIiwic3JjVG9rZW5PYmoiLCJpZCIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiZGVzdFRva2VuT2JqIiwic3JjVG9rZW5Db21wIiwic2V0U3JjVG9rZW5Db21wIiwiZGVzdFRva2VuQ29tcCIsInNldERlc3RUb2tlbkNvbXAiLCJzd2FwQnRuVGV4dCIsInNldFN3YXBCdG5UZXh0IiwidHhQZW5kaW5nIiwic2V0VHhQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjZXNzIiwic3VjY2VzcyIsImFkZHJlc3MiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjdXJyZW50IiwicG9wdWxhdGVPdXRwdXRWYWx1ZSIsIm9iaiIsInJlZiIsImxlbmd0aCIsImRlc2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});