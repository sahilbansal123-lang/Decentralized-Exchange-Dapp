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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase Allowance\";\n    var ENTER_AMOUNT = \"Enter the Amount\";\n    var CONNECT_WALLET = \"Connect Wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySucess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Transaction Completed\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement !== outputValueRef.current && document.activeElement !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n            lineNumber: 80,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement !== inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) populateInputValue(outputValue);\n        setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: destTokenObj,\n            ref: outputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n            lineNumber: 93,\n            columnNumber: 22\n        }, _this));\n        if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n        if (isReversed.current) isReversed.current = false;\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#7765F3] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"SWAP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.CogIcon, {\n                        className: \"h-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ArrowSmDownIcon, {\n                        className: \"absolute left-1/2 -transalate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: destTokenComp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: getSwapBtnClassName(),\n                onClick: function() {\n                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();\n                    else if (swapBtnText === SWAP) handleSwap();\n                },\n                children: [\n                    \" \",\n                    swapBtnText\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, _this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 141,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n    function handleSwap() {\n        return _handleSwap.apply(this, arguments);\n    }\n    function _handleSwap() {\n        _handleSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        {\n                            performSwap();\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 4:\n                        setTxPending(true);\n                        _ctx.next = 7;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.hasValidAllowance)(address, srcToken, inputValue);\n                    case 7:\n                        result = _ctx.sent;\n                        setTxPending(false);\n                        if (result) performSwap();\n                        else handleInsufficientAllowance();\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSwap.apply(this, arguments);\n    }\n    function handleIncreaseAllowance() {\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n    function _handleIncreaseAllowance() {\n        _handleIncreaseAllowance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setTxPending(true);\n                        _ctx.next = 3;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.increraseAllowance)(srcToken, inputValue);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n};\n_s(SwapComponent, \"1082vP4cCXDbY0OEFTby5eDS7IM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7b0JBRUEsR0FBRztvQkFDSDVCLFdBQVc7Ozs7OztxQkFDTDtZQUVSRSxTQUFTLGtCQUFJLDhEQUFDekMsMERBQWlCOzs7O3FCQUFHOzBCQUNuQyw4REFBQ0Usb0RBQU87Ozs7cUJBQUc7Ozs7OzthQUNQLENBQ047YUFFYWlFLFVBQVU7ZUFBVkEsV0FBVTs7YUFBVkEsV0FBVTtRQUFWQSxXQUFVLEdBQXpCLHNUQUE0QjtnQkFLbEJDLE1BQU07Ozs7NEJBSlZ4RCxDQUFBQSxDQUFBQSxRQUFRLEtBQUtSLGlEQUFHLElBQUlVLFNBQVMsS0FBS1YsaURBQUc7Ozs7d0JBQUU7NEJBQ3pDaUUsV0FBVyxFQUFFLENBQUM7eUJBQ2Y7Ozs7d0JBQ0MzQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7OytCQUNFbEQsaUVBQWlCLENBQUN5RCxPQUFPLEVBQUVyQyxRQUFRLEVBQUVJLFVBQVUsQ0FBQzs7d0JBQS9Eb0QsTUFBTSxZQUF5RDt3QkFDckUxQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBRXBCLElBQUkwQixNQUFNLEVBQUVDLFdBQVcsRUFBRSxDQUFDOzZCQUNyQkMsMkJBQTJCLEVBQUUsQ0FBQzs7Ozs7O1NBRXRDO2VBWGNILFdBQVU7O2FBYVZELHVCQUF1QjtlQUF2QkEsd0JBQXVCOzthQUF2QkEsd0JBQXVCO1FBQXZCQSx3QkFBdUIsR0FBdEMsc1RBQXlDOzs7O3dCQUN2Q3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7K0JBQ2JqRCxrRUFBa0IsQ0FBQ21CLFFBQVEsRUFBRUksVUFBVSxDQUFDOzs7Ozs7U0FFL0M7ZUFKY2tELHdCQUF1Qjs7Q0FLdkM7R0EvSUt2RCxhQUFhOztRQTJDR0gsOENBQVU7OztBQTNDMUJHLEtBQUFBLGFBQWE7QUFpSm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwQ29tcG9uZW50LmpzPzkyZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBoYXNWYWxpZEFsbG93YW5jZSxcclxuICBpbmNyZXJhc2VBbGxvd2FuY2UsXHJcbiAgc3dhcEV0aFRvVG9rZW4sXHJcbiAgc3dhcFRva2VuVG9FdGgsXHJcbiAgc3dhcFRva2VuVG9Ub2tlbixcclxufSBmcm9tIFwiLi4vdXRpbHMvY29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHsgQ29nSWNvbiwgQXJyb3dTbURvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgc3dhcEZpZWxkIGZyb20gXCIuL1N3YXBGaWVsZFwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IERFRkFVTFRfVkFMVUUsIEVUSCB9IGZyb20gXCIuLi91dGlscy9zYWxlVG9rZW5cIjtcclxuaW1wb3J0IHsgdG9FdGgsIHRvV2VpIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IEFkZENoYWluRXJyb3IsIHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGUgfSBmcm9tIFwiZG90ZW52XCI7XHJcbmltcG9ydCBTd2FwRmllbGQgZnJvbSBcIi4vU3dhcEZpZWxkXCI7XHJcblxyXG5jb25zdCBTd2FwQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzcmNUb2tlbiwgc2V0U3JjVG9rZW5dID0gdXNlU3RhdGUoRVRIKTtcclxuICBjb25zdCBbZGVzdFRva2VuLCBzZXREZXN0VG9rZW5dID0gdXNlU3RhdGUoREVGQVVMVF9WQUxVRSk7XHJcblxyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW291dHB1dFZhbHVlLCBzZXRPdXRwdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBpbnB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb3V0cHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgaXNSZXZlcnNlZCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgY29uc3QgSU5DUkVBU0VfQUxMT1dBTkNFID0gXCJJbmNyZWFzZSBBbGxvd2FuY2VcIjtcclxuICBjb25zdCBFTlRFUl9BTU9VTlQgPSBcIkVudGVyIHRoZSBBbW91bnRcIjtcclxuICBjb25zdCBDT05ORUNUX1dBTExFVCA9IFwiQ29ubmVjdCBXYWxsZXRcIjtcclxuICBjb25zdCBTV0FQID0gXCJTd2FwXCI7XHJcblxyXG4gIGNvbnN0IHNyY1Rva2VuT2JqID0ge1xyXG4gICAgaWQ6IFwic3JjVG9rZW5cIixcclxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxyXG4gICAgc2V0VmFsdWU6IHNldElucHV0VmFsdWUsXHJcbiAgICBkZWZhdWx0VmFsdWU6IHNyY1Rva2VuLFxyXG4gICAgaWdub3JlVmFsdWU6IGRlc3RUb2tlbixcclxuICAgIHNldFRva2VuOiBzZXRTcmNUb2tlbixcclxuICB9O1xyXG5cclxuICBjb25zdCBkZXN0VG9rZW5PYmogPSB7XHJcbiAgICBpZDogXCJkZXN0VG9rZW5cIixcclxuICAgIHZhbHVlOiBvdXRwdXRWYWx1ZSxcclxuICAgIHNldFZhbHVlOiBzZXRPdXRwdXRWYWx1ZSxcclxuICAgIGRlZmF1bHRWYWx1ZTogZGVzdFRva2VuLFxyXG4gICAgaWdub3JlVmFsdWU6IHNyY1Rva2VuLFxyXG4gICAgc2V0VG9rZW46IHNldERlc3RUb2tlbixcclxuICB9O1xyXG5cclxuICBjb25zdCBbc3JjVG9rZW5Db21wLCBzZXRTcmNUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGVzdFRva2VuQ29tcCwgc2V0RGVzdFRva2VuQ29tcF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbc3dhcEJ0blRleHQsIHNldFN3YXBCdG5UZXh0XSA9IHVzZVN0YXRlKEVOVEVSX0FNT1VOVCk7XHJcbiAgY29uc3QgW3R4UGVuZGluZywgc2V0VHhQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHsgZHVyYXRpb246IDYwMDAgfSk7XHJcbiAgY29uc3Qgbm90aWZ5U3VjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIENvbXBsZXRlZFwiKTtcclxuXHJcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWFkZHJlc3MpIHNldFN3YXBCdG5UZXh0KENPTk5FQ1RfV0FMTEVUKTtcclxuICAgIGVsc2UgaWYgKCFpbnB1dFZhbHVlIHx8ICFvdXRwdXRWYWx1ZSkgc2V0U3dhcEJ0blRleHQoRU5URVJfQU1PVU5UKTtcclxuICAgIGVsc2Ugc2V0U3dhcEJ0blRleHQoU1dBUCk7XHJcbiAgfSwgW2lucHV0VmFsdWUsIG91dHB1dFZhbHVlLCBhZGRyZXNzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IG91dHB1dFZhbHVlUmVmLmN1cnJlbnQgJiZcclxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gXCJzcmNUb2tlblwiICYmXHJcbiAgICAgICFpc1JldmVyc2VkLmN1cnJlbnRcclxuICAgIClcclxuICAgICAgcG9wdWxhdGVPdXRwdXRWYWx1ZShpbnB1dFZhbHVlKTtcclxuXHJcbiAgICBzZXRTcmNUb2tlbkNvbXAoPFN3YXBGaWVsZCBvYmo9e3NyY1Rva2VuT2JqfSByZWY9e2lucHV0VmFsdWVSZWZ9IC8+KTtcclxuXHJcbiAgICBpZiAoaW5wdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRPdXRwdXRWYWx1ZShcIlwiKTtcclxuICB9LCBbaW5wdXRWYWx1ZSwgZGVzdFRva2VuXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0VmFsdWVSZWYuY3VycmVudCAmJlxyXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmFyaWFMYWJlbCAhPT0gXCJkZXN0VG9rZW5cIiAmJlxyXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XHJcbiAgICApXHJcbiAgICAgIHBvcHVsYXRlSW5wdXRWYWx1ZShvdXRwdXRWYWx1ZSk7XHJcblxyXG4gICAgc2V0RGVzdFRva2VuQ29tcCg8U3dhcEZpZWxkIG9iaj17ZGVzdFRva2VuT2JqfSByZWY9e291dHB1dFZhbHVlUmVmfSAvPik7XHJcblxyXG4gICAgaWYgKG91dHB1dFZhbHVlPy5sZW5ndGggPT09IDApIHNldElucHV0VmFsdWUoXCJcIik7XHJcblxyXG4gICAgaWYgKGlzUmV2ZXJzZWQuY3VycmVudCkgaXNSZXZlcnNlZC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgfSwgW291dHB1dFZhbHVlLCBzcmNUb2tlbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gcm91bmRlZC1sIGJvcmRlci1bIzc3NjVGM10gdy1bMTAwJV0gcC00XHJcbiAgICBweC02IHJvdW5kZWQteGxcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTFcIj5cclxuICAgICAgICA8cD5TV0FQPC9wPlxyXG4gICAgICAgIDxDb2dJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLVsjMjEyNDI5XSBwLTQgcHktNiByb3VuZGVkLXhsIG1iLTIgYm9yZGVyLVsycHhdIFxyXG4gICAgICBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXppbmMtNjAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtzcmNUb2tlbkNvbXB9XHJcbiAgICAgICAgPEFycm93U21Eb3duSWNvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgLXRyYW5zYWxhdGUteC0xLzIgLWJvdHRvbS02IGgtMTAgcC0xIFxyXG4gICAgICAgIGJnLVsjMjEyNDI5XSBib3JkZXItNCBib3JkZXItemluYy05MDAgdGV4dC16aW5jLTMwMCByb3VuZGVkLXhsIGN1cnNvci1wb2ludGVyXHJcbiAgICAgICAgaG92ZXI6c2NhbGUtMTEwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJldmVyc2VFeGNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCIgYmctWyMyMTI0MjldIHAtNCBweS02IHJvdW5kZWQteGwgbXQtMiBib3JkZXItWzJweF0gXHJcbiAgICAgIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItemluYy02MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2Rlc3RUb2tlbkNvbXB9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U3dhcEJ0bkNsYXNzTmFtZSgpfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGlmIChzd2FwQnRuVGV4dCA9PT0gSU5DUkVBU0VfQUxMT1dBTkNFKSBoYW5kbGVJbmNyZWFzZUFsbG93YW5jZSgpO1xyXG4gICAgICAgICAgZWxzZSBpZiAoc3dhcEJ0blRleHQgPT09IFNXQVApIGhhbmRsZVN3YXAoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgIHtzd2FwQnRuVGV4dH1cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7dHhQZW5kaW5nICYmIDxUcmFuc2FjdGlvblN0YXR1cyAvPn1cclxuICAgICAgPFRvYXN0ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN3YXAoKSB7XHJcbiAgICBpZiAoc3JjVG9rZW4gPT09IEVUSCAmJiBkZXN0VG9rZW4gIT09IEVUSCkge1xyXG4gICAgICBwZXJmb3JtU3dhcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VHhQZW5kaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBoYXNWYWxpZEFsbG93YW5jZShhZGRyZXNzLCBzcmNUb2tlbiwgaW5wdXRWYWx1ZSk7XHJcbiAgICAgIHNldFR4UGVuZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0KSBwZXJmb3JtU3dhcCgpO1xyXG4gICAgICBlbHNlIGhhbmRsZUluc3VmZmljaWVudEFsbG93YW5jZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlSW5jcmVhc2VBbGxvd2FuY2UoKSB7XHJcbiAgICBzZXRUeFBlbmRpbmcodHJ1ZSk7XHJcbiAgICBhd2FpdCBpbmNyZXJhc2VBbGxvd2FuY2Uoc3JjVG9rZW4sIGlucHV0VmFsdWUpO1xyXG4gICAgXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dhcENvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJoYXNWYWxpZEFsbG93YW5jZSIsImluY3JlcmFzZUFsbG93YW5jZSIsInN3YXBFdGhUb1Rva2VuIiwic3dhcFRva2VuVG9FdGgiLCJzd2FwVG9rZW5Ub1Rva2VuIiwiQ29nSWNvbiIsIkFycm93U21Eb3duSWNvbiIsInN3YXBGaWVsZCIsIlRyYW5zYWN0aW9uU3RhdHVzIiwidG9hc3QiLCJUb2FzdGVyIiwiREVGQVVMVF9WQUxVRSIsIkVUSCIsInRvRXRoIiwidG9XZWkiLCJBZGRDaGFpbkVycm9yIiwidXNlQWNjb3VudCIsInBvcHVsYXRlIiwiU3dhcEZpZWxkIiwiU3dhcENvbXBvbmVudCIsInNyY1Rva2VuIiwic2V0U3JjVG9rZW4iLCJkZXN0VG9rZW4iLCJzZXREZXN0VG9rZW4iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm91dHB1dFZhbHVlIiwic2V0T3V0cHV0VmFsdWUiLCJpbnB1dFZhbHVlUmVmIiwib3V0cHV0VmFsdWVSZWYiLCJpc1JldmVyc2VkIiwiSU5DUkVBU0VfQUxMT1dBTkNFIiwiRU5URVJfQU1PVU5UIiwiQ09OTkVDVF9XQUxMRVQiLCJTV0FQIiwic3JjVG9rZW5PYmoiLCJpZCIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiZGVzdFRva2VuT2JqIiwic3JjVG9rZW5Db21wIiwic2V0U3JjVG9rZW5Db21wIiwiZGVzdFRva2VuQ29tcCIsInNldERlc3RUb2tlbkNvbXAiLCJzd2FwQnRuVGV4dCIsInNldFN3YXBCdG5UZXh0IiwidHhQZW5kaW5nIiwic2V0VHhQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjZXNzIiwic3VjY2VzcyIsImFkZHJlc3MiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjdXJyZW50IiwicG9wdWxhdGVPdXRwdXRWYWx1ZSIsIm9iaiIsInJlZiIsImxlbmd0aCIsImFyaWFMYWJlbCIsInBvcHVsYXRlSW5wdXRWYWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwiaGFuZGxlUmV2ZXJzZUV4Y2hhbmdlIiwiYnV0dG9uIiwiZ2V0U3dhcEJ0bkNsYXNzTmFtZSIsImhhbmRsZUluY3JlYXNlQWxsb3dhbmNlIiwiaGFuZGxlU3dhcCIsInJlc3VsdCIsInBlcmZvcm1Td2FwIiwiaGFuZGxlSW5zdWZmaWNpZW50QWxsb3dhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});