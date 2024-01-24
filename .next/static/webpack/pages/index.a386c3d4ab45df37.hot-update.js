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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    var handleReverseExchange = function handleReverseExchange(e) {\n        isReversed.current = true;\n        setInputValue(outputValue);\n        setOutputValue(inputValue);\n        setSrcToken(destToken);\n        setDestToken(srcToken);\n    };\n    var getSwapBtnClassName = function getSwapBtnClassName() {\n        var className = \"p-4 w-full my\";\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase Allowance\";\n    var ENTER_AMOUNT = \"Enter the Amount\";\n    var CONNECT_WALLET = \"Connect Wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySucess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Transaction Completed\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement !== outputValueRef.current && document.activeElement !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n            lineNumber: 80,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement !== inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) populateInputValue(outputValue);\n        setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: destTokenObj,\n            ref: outputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n            lineNumber: 93,\n            columnNumber: 22\n        }, _this));\n        if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n        if (isReversed.current) isReversed.current = false;\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#7765F3] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"SWAP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.CogIcon, {\n                        className: \"h-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ArrowSmDownIcon, {\n                        className: \"absolute left-1/2 -transalate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: destTokenComp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: getSwapBtnClassName(),\n                onClick: function() {\n                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();\n                    else if (swapBtnText === SWAP) handleSwap();\n                },\n                children: [\n                    \" \",\n                    swapBtnText\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, _this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 141,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n    function handleSwap() {\n        return _handleSwap.apply(this, arguments);\n    }\n    function _handleSwap() {\n        _handleSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        {\n                            performSwap();\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 4:\n                        setTxPending(true);\n                        _ctx.next = 7;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.hasValidAllowance)(address, srcToken, inputValue);\n                    case 7:\n                        result = _ctx.sent;\n                        setTxPending(false);\n                        if (result) performSwap();\n                        else handleInsufficientAllowance();\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSwap.apply(this, arguments);\n    }\n    function handleIncreaseAllowance() {\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n    function _handleIncreaseAllowance() {\n        _handleIncreaseAllowance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setTxPending(true);\n                        _ctx.next = 3;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.increraseAllowance)(srcToken, inputValue);\n                    case 3:\n                        setTxPending(false);\n                        setSwapBtnText(SWAP);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n};\n_s(SwapComponent, \"1082vP4cCXDbY0OEFTby5eDS7IM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXRDLHNUQUF5Qzs7Ozt3QkFDdkNwQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7OytCQUNidEQsa0VBQWtCLENBQUM4QixRQUFRLEVBQUVKLFVBQVUsQ0FBQzs7d0JBQzlDNEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUVwQkYsY0FBYyxDQUFDZCxJQUFJLENBQUMsQ0FBQzs7Ozs7O1NBQ3RCO2VBTmNvQyx3QkFBdUI7O0NBcUJ2QztHQS9KS3hELGFBQWE7O1FBMkNHSCw4Q0FBVTs7O0FBM0MxQkcsS0FBQUEsYUFBYTtBQWlLbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanM/OTJlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGhhc1ZhbGlkQWxsb3dhbmNlLFxyXG4gIGluY3JlcmFzZUFsbG93YW5jZSxcclxuICBzd2FwRXRoVG9Ub2tlbixcclxuICBzd2FwVG9rZW5Ub0V0aCxcclxuICBzd2FwVG9rZW5Ub1Rva2VuLFxyXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgeyBDb2dJY29uLCBBcnJvd1NtRG93bkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCBzd2FwRmllbGQgZnJvbSBcIi4vU3dhcEZpZWxkXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgREVGQVVMVF9WQUxVRSwgRVRIIH0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xyXG5pbXBvcnQgeyB0b0V0aCwgdG9XZWkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgQWRkQ2hhaW5FcnJvciwgdXNlQWNjb3VudCB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyBwb3B1bGF0ZSB9IGZyb20gXCJkb3RlbnZcIjtcclxuaW1wb3J0IFN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcclxuXHJcbmNvbnN0IFN3YXBDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NyY1Rva2VuLCBzZXRTcmNUb2tlbl0gPSB1c2VTdGF0ZShFVEgpO1xyXG4gIGNvbnN0IFtkZXN0VG9rZW4sIHNldERlc3RUb2tlbl0gPSB1c2VTdGF0ZShERUZBVUxUX1ZBTFVFKTtcclxuXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbb3V0cHV0VmFsdWUsIHNldE91dHB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGlucHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvdXRwdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBpc1JldmVyc2VkID0gdXNlUmVmKGZhbHNlKTtcclxuICBjb25zdCBJTkNSRUFTRV9BTExPV0FOQ0UgPSBcIkluY3JlYXNlIEFsbG93YW5jZVwiO1xyXG4gIGNvbnN0IEVOVEVSX0FNT1VOVCA9IFwiRW50ZXIgdGhlIEFtb3VudFwiO1xyXG4gIGNvbnN0IENPTk5FQ1RfV0FMTEVUID0gXCJDb25uZWN0IFdhbGxldFwiO1xyXG4gIGNvbnN0IFNXQVAgPSBcIlN3YXBcIjtcclxuXHJcbiAgY29uc3Qgc3JjVG9rZW5PYmogPSB7XHJcbiAgICBpZDogXCJzcmNUb2tlblwiLFxyXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICBzZXRWYWx1ZTogc2V0SW5wdXRWYWx1ZSxcclxuICAgIGRlZmF1bHRWYWx1ZTogc3JjVG9rZW4sXHJcbiAgICBpZ25vcmVWYWx1ZTogZGVzdFRva2VuLFxyXG4gICAgc2V0VG9rZW46IHNldFNyY1Rva2VuLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlc3RUb2tlbk9iaiA9IHtcclxuICAgIGlkOiBcImRlc3RUb2tlblwiLFxyXG4gICAgdmFsdWU6IG91dHB1dFZhbHVlLFxyXG4gICAgc2V0VmFsdWU6IHNldE91dHB1dFZhbHVlLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBkZXN0VG9rZW4sXHJcbiAgICBpZ25vcmVWYWx1ZTogc3JjVG9rZW4sXHJcbiAgICBzZXRUb2tlbjogc2V0RGVzdFRva2VuLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzcmNUb2tlbkNvbXAsIHNldFNyY1Rva2VuQ29tcF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkZXN0VG9rZW5Db21wLCBzZXREZXN0VG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFtzd2FwQnRuVGV4dCwgc2V0U3dhcEJ0blRleHRdID0gdXNlU3RhdGUoRU5URVJfQU1PVU5UKTtcclxuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUeFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+IHRvYXN0LmVycm9yKG1zZywgeyBkdXJhdGlvbjogNjAwMCB9KTtcclxuICBjb25zdCBub3RpZnlTdWNlc3MgPSAoKSA9PiB0b2FzdC5zdWNjZXNzKFwiVHJhbnNhY3Rpb24gQ29tcGxldGVkXCIpO1xyXG5cclxuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYWRkcmVzcykgc2V0U3dhcEJ0blRleHQoQ09OTkVDVF9XQUxMRVQpO1xyXG4gICAgZWxzZSBpZiAoIWlucHV0VmFsdWUgfHwgIW91dHB1dFZhbHVlKSBzZXRTd2FwQnRuVGV4dChFTlRFUl9BTU9VTlQpO1xyXG4gICAgZWxzZSBzZXRTd2FwQnRuVGV4dChTV0FQKTtcclxuICB9LCBbaW5wdXRWYWx1ZSwgb3V0cHV0VmFsdWUsIGFkZHJlc3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gb3V0cHV0VmFsdWVSZWYuY3VycmVudCAmJlxyXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBcInNyY1Rva2VuXCIgJiZcclxuICAgICAgIWlzUmV2ZXJzZWQuY3VycmVudFxyXG4gICAgKVxyXG4gICAgICBwb3B1bGF0ZU91dHB1dFZhbHVlKGlucHV0VmFsdWUpO1xyXG5cclxuICAgIHNldFNyY1Rva2VuQ29tcCg8U3dhcEZpZWxkIG9iaj17c3JjVG9rZW5PYmp9IHJlZj17aW5wdXRWYWx1ZVJlZn0gLz4pO1xyXG5cclxuICAgIGlmIChpbnB1dFZhbHVlPy5sZW5ndGggPT09IDApIHNldE91dHB1dFZhbHVlKFwiXCIpO1xyXG4gIH0sIFtpbnB1dFZhbHVlLCBkZXN0VG9rZW5dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXRWYWx1ZVJlZi5jdXJyZW50ICYmXHJcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYXJpYUxhYmVsICE9PSBcImRlc3RUb2tlblwiICYmXHJcbiAgICAgICFpc1JldmVyc2VkLmN1cnJlbnRcclxuICAgIClcclxuICAgICAgcG9wdWxhdGVJbnB1dFZhbHVlKG91dHB1dFZhbHVlKTtcclxuXHJcbiAgICBzZXREZXN0VG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtkZXN0VG9rZW5PYmp9IHJlZj17b3V0cHV0VmFsdWVSZWZ9IC8+KTtcclxuXHJcbiAgICBpZiAob3V0cHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCkgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuXHJcbiAgICBpZiAoaXNSZXZlcnNlZC5jdXJyZW50KSBpc1JldmVyc2VkLmN1cnJlbnQgPSBmYWxzZTtcclxuICB9LCBbb3V0cHV0VmFsdWUsIHNyY1Rva2VuXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSByb3VuZGVkLWwgYm9yZGVyLVsjNzc2NUYzXSB3LVsxMDAlXSBwLTRcclxuICAgIHB4LTYgcm91bmRlZC14bFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTQgcHgtMVwiPlxyXG4gICAgICAgIDxwPlNXQVA8L3A+XHJcbiAgICAgICAgPENvZ0ljb24gY2xhc3NOYW1lPVwiaC02XCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctWyMyMTI0MjldIHAtNCBweS02IHJvdW5kZWQteGwgbWItMiBib3JkZXItWzJweF0gXHJcbiAgICAgIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItemluYy02MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3NyY1Rva2VuQ29tcH1cclxuICAgICAgICA8QXJyb3dTbURvd25JY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiAtdHJhbnNhbGF0ZS14LTEvMiAtYm90dG9tLTYgaC0xMCBwLTEgXHJcbiAgICAgICAgYmctWyMyMTI0MjldIGJvcmRlci00IGJvcmRlci16aW5jLTkwMCB0ZXh0LXppbmMtMzAwIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgICBob3ZlcjpzY2FsZS0xMTBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmV2ZXJzZUV4Y2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiBiZy1bIzIxMjQyOV0gcC00IHB5LTYgcm91bmRlZC14bCBtdC0yIGJvcmRlci1bMnB4XSBcclxuICAgICAgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci16aW5jLTYwMFwiXHJcbiAgICAgID5cclxuICAgICAgICB7ZGVzdFRva2VuQ29tcH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtnZXRTd2FwQnRuQ2xhc3NOYW1lKCl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHN3YXBCdG5UZXh0ID09PSBJTkNSRUFTRV9BTExPV0FOQ0UpIGhhbmRsZUluY3JlYXNlQWxsb3dhbmNlKCk7XHJcbiAgICAgICAgICBlbHNlIGlmIChzd2FwQnRuVGV4dCA9PT0gU1dBUCkgaGFuZGxlU3dhcCgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAge3N3YXBCdG5UZXh0fVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHt0eFBlbmRpbmcgJiYgPFRyYW5zYWN0aW9uU3RhdHVzIC8+fVxyXG4gICAgICA8VG9hc3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3dhcCgpIHtcclxuICAgIGlmIChzcmNUb2tlbiA9PT0gRVRIICYmIGRlc3RUb2tlbiAhPT0gRVRIKSB7XHJcbiAgICAgIHBlcmZvcm1Td2FwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUeFBlbmRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhc1ZhbGlkQWxsb3dhbmNlKGFkZHJlc3MsIHNyY1Rva2VuLCBpbnB1dFZhbHVlKTtcclxuICAgICAgc2V0VHhQZW5kaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHBlcmZvcm1Td2FwKCk7XHJcbiAgICAgIGVsc2UgaGFuZGxlSW5zdWZmaWNpZW50QWxsb3dhbmNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVJbmNyZWFzZUFsbG93YW5jZSgpIHtcclxuICAgIHNldFR4UGVuZGluZyh0cnVlKTtcclxuICAgIGF3YWl0IGluY3JlcmFzZUFsbG93YW5jZShzcmNUb2tlbiwgaW5wdXRWYWx1ZSk7XHJcbiAgICBzZXRUeFBlbmRpbmcoZmFsc2UpO1xyXG5cclxuICAgIHNldFN3YXBCdG5UZXh0KFNXQVApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUmV2ZXJzZUV4Y2hhbmdlKGUpIHtcclxuICAgIGlzUmV2ZXJzZWQuY3VycmVudCA9IHRydWU7XHJcblxyXG4gICAgc2V0SW5wdXRWYWx1ZShvdXRwdXRWYWx1ZSk7XHJcbiAgICBzZXRPdXRwdXRWYWx1ZShpbnB1dFZhbHVlKTtcclxuXHJcbiAgICBzZXRTcmNUb2tlbihkZXN0VG9rZW4pO1xyXG4gICAgc2V0RGVzdFRva2VuKHNyY1Rva2VuKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFN3YXBCdG5DbGFzc05hbWUoKSB7XHJcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJwLTQgdy1mdWxsIG15XCJcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2FwQ29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImhhc1ZhbGlkQWxsb3dhbmNlIiwiaW5jcmVyYXNlQWxsb3dhbmNlIiwic3dhcEV0aFRvVG9rZW4iLCJzd2FwVG9rZW5Ub0V0aCIsInN3YXBUb2tlblRvVG9rZW4iLCJDb2dJY29uIiwiQXJyb3dTbURvd25JY29uIiwic3dhcEZpZWxkIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJERUZBVUxUX1ZBTFVFIiwiRVRIIiwidG9FdGgiLCJ0b1dlaSIsIkFkZENoYWluRXJyb3IiLCJ1c2VBY2NvdW50IiwicG9wdWxhdGUiLCJTd2FwRmllbGQiLCJTd2FwQ29tcG9uZW50IiwiaGFuZGxlUmV2ZXJzZUV4Y2hhbmdlIiwiZSIsImlzUmV2ZXJzZWQiLCJjdXJyZW50Iiwic2V0SW5wdXRWYWx1ZSIsIm91dHB1dFZhbHVlIiwic2V0T3V0cHV0VmFsdWUiLCJpbnB1dFZhbHVlIiwic2V0U3JjVG9rZW4iLCJkZXN0VG9rZW4iLCJzZXREZXN0VG9rZW4iLCJzcmNUb2tlbiIsImdldFN3YXBCdG5DbGFzc05hbWUiLCJjbGFzc05hbWUiLCJpbnB1dFZhbHVlUmVmIiwib3V0cHV0VmFsdWVSZWYiLCJJTkNSRUFTRV9BTExPV0FOQ0UiLCJFTlRFUl9BTU9VTlQiLCJDT05ORUNUX1dBTExFVCIsIlNXQVAiLCJzcmNUb2tlbk9iaiIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJkZXN0VG9rZW5PYmoiLCJzcmNUb2tlbkNvbXAiLCJzZXRTcmNUb2tlbkNvbXAiLCJkZXN0VG9rZW5Db21wIiwic2V0RGVzdFRva2VuQ29tcCIsInN3YXBCdG5UZXh0Iiwic2V0U3dhcEJ0blRleHQiLCJ0eFBlbmRpbmciLCJzZXRUeFBlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iLCJub3RpZnlTdWNlc3MiLCJzdWNjZXNzIiwiYWRkcmVzcyIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInBvcHVsYXRlT3V0cHV0VmFsdWUiLCJvYmoiLCJyZWYiLCJsZW5ndGgiLCJhcmlhTGFiZWwiLCJwb3B1bGF0ZUlucHV0VmFsdWUiLCJkaXYiLCJwIiwib25DbGljayIsImJ1dHRvbiIsImhhbmRsZUluY3JlYXNlQWxsb3dhbmNlIiwiaGFuZGxlU3dhcCIsInJlc3VsdCIsInBlcmZvcm1Td2FwIiwiaGFuZGxlSW5zdWZmaWNpZW50QWxsb3dhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});