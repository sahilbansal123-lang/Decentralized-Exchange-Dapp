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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    var handleReverseExchange = function handleReverseExchange(e) {\n        isReversed.current = true;\n        setInputValue(outputValue);\n        setOutputValue(inputValue);\n        setSrcToken(destToken);\n        setDestToken(srcToken);\n    };\n    var getSwapBtnClassName = function getSwapBtnClassName() {\n        var className = \"p-4 w-full my-2 rounded-xl\";\n        className += swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET ? \"text-zinc-400 bg-zinc-800 pointer-events-none\" : \"bg-blue-700\";\n        clas;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase Allowance\";\n    var ENTER_AMOUNT = \"Enter the Amount\";\n    var CONNECT_WALLET = \"Connect Wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySucess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Transaction Completed\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement !== outputValueRef.current && document.activeElement !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n            lineNumber: 80,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement !== inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) populateInputValue(outputValue);\n        setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: destTokenObj,\n            ref: outputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n            lineNumber: 93,\n            columnNumber: 22\n        }, _this));\n        if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n        if (isReversed.current) isReversed.current = false;\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#7765F3] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"SWAP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.CogIcon, {\n                        className: \"h-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ArrowSmDownIcon, {\n                        className: \"absolute left-1/2 -transalate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: destTokenComp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: getSwapBtnClassName(),\n                onClick: function() {\n                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();\n                    else if (swapBtnText === SWAP) handleSwap();\n                },\n                children: [\n                    \" \",\n                    swapBtnText\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, _this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 141,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapComponent.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n    function handleSwap() {\n        return _handleSwap.apply(this, arguments);\n    }\n    function _handleSwap() {\n        _handleSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        {\n                            performSwap();\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 4:\n                        setTxPending(true);\n                        _ctx.next = 7;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.hasValidAllowance)(address, srcToken, inputValue);\n                    case 7:\n                        result = _ctx.sent;\n                        setTxPending(false);\n                        if (result) performSwap();\n                        else handleInsufficientAllowance();\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSwap.apply(this, arguments);\n    }\n    function handleIncreaseAllowance() {\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n    function _handleIncreaseAllowance() {\n        _handleIncreaseAllowance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setTxPending(true);\n                        _ctx.next = 3;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.increraseAllowance)(srcToken, inputValue);\n                    case 3:\n                        setTxPending(false);\n                        setSwapBtnText(SWAP);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n};\n_s(SwapComponent, \"1082vP4cCXDbY0OEFTby5eDS7IM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkMsMkJBQTJCLEVBQUUsQ0FBQzs7Ozs7O1NBRXRDO2VBWGNILFdBQVU7O2FBYVZELHVCQUF1QjtlQUF2QkEsd0JBQXVCOzthQUF2QkEsd0JBQXVCO1FBQXZCQSx3QkFBdUIsR0FBdEMsc1RBQXlDOzs7O3dCQUN2Q3BCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7K0JBQ2J2RCxrRUFBa0IsQ0FBQzhCLFFBQVEsRUFBRUosVUFBVSxDQUFDOzt3QkFDOUM2QixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBRXBCRixjQUFjLENBQUNiLElBQUksQ0FBQyxDQUFDOzs7Ozs7U0FDdEI7ZUFOY21DLHdCQUF1Qjs7Q0E0QnZDO0dBdEtLekQsYUFBYTs7UUEyQ0dILDhDQUFVOzs7QUEzQzFCRyxLQUFBQSxhQUFhO0FBd0tuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcENvbXBvbmVudC5qcz85MmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgaGFzVmFsaWRBbGxvd2FuY2UsXHJcbiAgaW5jcmVyYXNlQWxsb3dhbmNlLFxyXG4gIHN3YXBFdGhUb1Rva2VuLFxyXG4gIHN3YXBUb2tlblRvRXRoLFxyXG4gIHN3YXBUb2tlblRvVG9rZW4sXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcclxuXHJcbmltcG9ydCB7IENvZ0ljb24sIEFycm93U21Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBERUZBVUxUX1ZBTFVFLCBFVEggfSBmcm9tIFwiLi4vdXRpbHMvc2FsZVRva2VuXCI7XHJcbmltcG9ydCB7IHRvRXRoLCB0b1dlaSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBBZGRDaGFpbkVycm9yLCB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlIH0gZnJvbSBcImRvdGVudlwiO1xyXG5pbXBvcnQgU3dhcEZpZWxkIGZyb20gXCIuL1N3YXBGaWVsZFwiO1xyXG5cclxuY29uc3QgU3dhcENvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbc3JjVG9rZW4sIHNldFNyY1Rva2VuXSA9IHVzZVN0YXRlKEVUSCk7XHJcbiAgY29uc3QgW2Rlc3RUb2tlbiwgc2V0RGVzdFRva2VuXSA9IHVzZVN0YXRlKERFRkFVTFRfVkFMVUUpO1xyXG5cclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtvdXRwdXRWYWx1ZSwgc2V0T3V0cHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgaW5wdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG91dHB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gIGNvbnN0IElOQ1JFQVNFX0FMTE9XQU5DRSA9IFwiSW5jcmVhc2UgQWxsb3dhbmNlXCI7XHJcbiAgY29uc3QgRU5URVJfQU1PVU5UID0gXCJFbnRlciB0aGUgQW1vdW50XCI7XHJcbiAgY29uc3QgQ09OTkVDVF9XQUxMRVQgPSBcIkNvbm5lY3QgV2FsbGV0XCI7XHJcbiAgY29uc3QgU1dBUCA9IFwiU3dhcFwiO1xyXG5cclxuICBjb25zdCBzcmNUb2tlbk9iaiA9IHtcclxuICAgIGlkOiBcInNyY1Rva2VuXCIsXHJcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcclxuICAgIHNldFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBzcmNUb2tlbixcclxuICAgIGlnbm9yZVZhbHVlOiBkZXN0VG9rZW4sXHJcbiAgICBzZXRUb2tlbjogc2V0U3JjVG9rZW4sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVzdFRva2VuT2JqID0ge1xyXG4gICAgaWQ6IFwiZGVzdFRva2VuXCIsXHJcbiAgICB2YWx1ZTogb3V0cHV0VmFsdWUsXHJcbiAgICBzZXRWYWx1ZTogc2V0T3V0cHV0VmFsdWUsXHJcbiAgICBkZWZhdWx0VmFsdWU6IGRlc3RUb2tlbixcclxuICAgIGlnbm9yZVZhbHVlOiBzcmNUb2tlbixcclxuICAgIHNldFRva2VuOiBzZXREZXN0VG9rZW4sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NyY1Rva2VuQ29tcCwgc2V0U3JjVG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Rlc3RUb2tlbkNvbXAsIHNldERlc3RUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3N3YXBCdG5UZXh0LCBzZXRTd2FwQnRuVGV4dF0gPSB1c2VTdGF0ZShFTlRFUl9BTU9VTlQpO1xyXG4gIGNvbnN0IFt0eFBlbmRpbmcsIHNldFR4UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7IGR1cmF0aW9uOiA2MDAwIH0pO1xyXG4gIGNvbnN0IG5vdGlmeVN1Y2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBDb21wbGV0ZWRcIik7XHJcblxyXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhZGRyZXNzKSBzZXRTd2FwQnRuVGV4dChDT05ORUNUX1dBTExFVCk7XHJcbiAgICBlbHNlIGlmICghaW5wdXRWYWx1ZSB8fCAhb3V0cHV0VmFsdWUpIHNldFN3YXBCdG5UZXh0KEVOVEVSX0FNT1VOVCk7XHJcbiAgICBlbHNlIHNldFN3YXBCdG5UZXh0KFNXQVApO1xyXG4gIH0sIFtpbnB1dFZhbHVlLCBvdXRwdXRWYWx1ZSwgYWRkcmVzc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBvdXRwdXRWYWx1ZVJlZi5jdXJyZW50ICYmXHJcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IFwic3JjVG9rZW5cIiAmJlxyXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XHJcbiAgICApXHJcbiAgICAgIHBvcHVsYXRlT3V0cHV0VmFsdWUoaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgc2V0U3JjVG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtzcmNUb2tlbk9ian0gcmVmPXtpbnB1dFZhbHVlUmVmfSAvPik7XHJcblxyXG4gICAgaWYgKGlucHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCkgc2V0T3V0cHV0VmFsdWUoXCJcIik7XHJcbiAgfSwgW2lucHV0VmFsdWUsIGRlc3RUb2tlbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dFZhbHVlUmVmLmN1cnJlbnQgJiZcclxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5hcmlhTGFiZWwgIT09IFwiZGVzdFRva2VuXCIgJiZcclxuICAgICAgIWlzUmV2ZXJzZWQuY3VycmVudFxyXG4gICAgKVxyXG4gICAgICBwb3B1bGF0ZUlucHV0VmFsdWUob3V0cHV0VmFsdWUpO1xyXG5cclxuICAgIHNldERlc3RUb2tlbkNvbXAoPFN3YXBGaWVsZCBvYmo9e2Rlc3RUb2tlbk9ian0gcmVmPXtvdXRwdXRWYWx1ZVJlZn0gLz4pO1xyXG5cclxuICAgIGlmIChvdXRwdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG5cclxuICAgIGlmIChpc1JldmVyc2VkLmN1cnJlbnQpIGlzUmV2ZXJzZWQuY3VycmVudCA9IGZhbHNlO1xyXG4gIH0sIFtvdXRwdXRWYWx1ZSwgc3JjVG9rZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIHJvdW5kZWQtbCBib3JkZXItWyM3NzY1RjNdIHctWzEwMCVdIHAtNFxyXG4gICAgcHgtNiByb3VuZGVkLXhsXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNCBweC0xXCI+XHJcbiAgICAgICAgPHA+U1dBUDwvcD5cclxuICAgICAgICA8Q29nSWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1bIzIxMjQyOV0gcC00IHB5LTYgcm91bmRlZC14bCBtYi0yIGJvcmRlci1bMnB4XSBcclxuICAgICAgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci16aW5jLTYwMFwiXHJcbiAgICAgID5cclxuICAgICAgICB7c3JjVG9rZW5Db21wfVxyXG4gICAgICAgIDxBcnJvd1NtRG93bkljb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMS8yIC10cmFuc2FsYXRlLXgtMS8yIC1ib3R0b20tNiBoLTEwIHAtMSBcclxuICAgICAgICBiZy1bIzIxMjQyOV0gYm9yZGVyLTQgYm9yZGVyLXppbmMtOTAwIHRleHQtemluYy0zMDAgcm91bmRlZC14bCBjdXJzb3ItcG9pbnRlclxyXG4gICAgICAgIGhvdmVyOnNjYWxlLTExMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXZlcnNlRXhjaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIGJnLVsjMjEyNDI5XSBwLTQgcHktNiByb3VuZGVkLXhsIG10LTIgYm9yZGVyLVsycHhdIFxyXG4gICAgICBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXppbmMtNjAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtkZXN0VG9rZW5Db21wfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2dldFN3YXBCdG5DbGFzc05hbWUoKX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3dhcEJ0blRleHQgPT09IElOQ1JFQVNFX0FMTE9XQU5DRSkgaGFuZGxlSW5jcmVhc2VBbGxvd2FuY2UoKTtcclxuICAgICAgICAgIGVsc2UgaWYgKHN3YXBCdG5UZXh0ID09PSBTV0FQKSBoYW5kbGVTd2FwKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgICB7c3dhcEJ0blRleHR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAge3R4UGVuZGluZyAmJiA8VHJhbnNhY3Rpb25TdGF0dXMgLz59XHJcbiAgICAgIDxUb2FzdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTd2FwKCkge1xyXG4gICAgaWYgKHNyY1Rva2VuID09PSBFVEggJiYgZGVzdFRva2VuICE9PSBFVEgpIHtcclxuICAgICAgcGVyZm9ybVN3YXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFR4UGVuZGluZyh0cnVlKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFzVmFsaWRBbGxvd2FuY2UoYWRkcmVzcywgc3JjVG9rZW4sIGlucHV0VmFsdWUpO1xyXG4gICAgICBzZXRUeFBlbmRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkgcGVyZm9ybVN3YXAoKTtcclxuICAgICAgZWxzZSBoYW5kbGVJbnN1ZmZpY2llbnRBbGxvd2FuY2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUluY3JlYXNlQWxsb3dhbmNlKCkge1xyXG4gICAgc2V0VHhQZW5kaW5nKHRydWUpO1xyXG4gICAgYXdhaXQgaW5jcmVyYXNlQWxsb3dhbmNlKHNyY1Rva2VuLCBpbnB1dFZhbHVlKTtcclxuICAgIHNldFR4UGVuZGluZyhmYWxzZSk7XHJcblxyXG4gICAgc2V0U3dhcEJ0blRleHQoU1dBUCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVSZXZlcnNlRXhjaGFuZ2UoZSkge1xyXG4gICAgaXNSZXZlcnNlZC5jdXJyZW50ID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRJbnB1dFZhbHVlKG91dHB1dFZhbHVlKTtcclxuICAgIHNldE91dHB1dFZhbHVlKGlucHV0VmFsdWUpO1xyXG5cclxuICAgIHNldFNyY1Rva2VuKGRlc3RUb2tlbik7XHJcbiAgICBzZXREZXN0VG9rZW4oc3JjVG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U3dhcEJ0bkNsYXNzTmFtZSgpIHtcclxuICAgIGxldCBjbGFzc05hbWUgPSBcInAtNCB3LWZ1bGwgbXktMiByb3VuZGVkLXhsXCI7XHJcblxyXG4gICAgY2xhc3NOYW1lICs9IFxyXG4gICAgICBzd2FwQnRuVGV4dCA9PT0gRU5URVJfQU1PVU5UIHx8IHN3YXBCdG5UZXh0ID09PSBDT05ORUNUX1dBTExFVCBcclxuICAgICAgICA/IFwidGV4dC16aW5jLTQwMCBiZy16aW5jLTgwMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcclxuICAgICAgICA6IFwiYmctYmx1ZS03MDBcIlxyXG4gICAgICBjbGFzXHJcblxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaGFzVmFsaWRBbGxvd2FuY2UiLCJpbmNyZXJhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJzd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwiQWRkQ2hhaW5FcnJvciIsInVzZUFjY291bnQiLCJwb3B1bGF0ZSIsIlN3YXBGaWVsZCIsIlN3YXBDb21wb25lbnQiLCJoYW5kbGVSZXZlcnNlRXhjaGFuZ2UiLCJlIiwiaXNSZXZlcnNlZCIsImN1cnJlbnQiLCJzZXRJbnB1dFZhbHVlIiwib3V0cHV0VmFsdWUiLCJzZXRPdXRwdXRWYWx1ZSIsImlucHV0VmFsdWUiLCJzZXRTcmNUb2tlbiIsImRlc3RUb2tlbiIsInNldERlc3RUb2tlbiIsInNyY1Rva2VuIiwiZ2V0U3dhcEJ0bkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsInN3YXBCdG5UZXh0IiwiRU5URVJfQU1PVU5UIiwiQ09OTkVDVF9XQUxMRVQiLCJjbGFzIiwiaW5wdXRWYWx1ZVJlZiIsIm91dHB1dFZhbHVlUmVmIiwiSU5DUkVBU0VfQUxMT1dBTkNFIiwiU1dBUCIsInNyY1Rva2VuT2JqIiwiaWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWdub3JlVmFsdWUiLCJzZXRUb2tlbiIsImRlc3RUb2tlbk9iaiIsInNyY1Rva2VuQ29tcCIsInNldFNyY1Rva2VuQ29tcCIsImRlc3RUb2tlbkNvbXAiLCJzZXREZXN0VG9rZW5Db21wIiwic2V0U3dhcEJ0blRleHQiLCJ0eFBlbmRpbmciLCJzZXRUeFBlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iLCJub3RpZnlTdWNlc3MiLCJzdWNjZXNzIiwiYWRkcmVzcyIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInBvcHVsYXRlT3V0cHV0VmFsdWUiLCJvYmoiLCJyZWYiLCJsZW5ndGgiLCJhcmlhTGFiZWwiLCJwb3B1bGF0ZUlucHV0VmFsdWUiLCJkaXYiLCJwIiwib25DbGljayIsImJ1dHRvbiIsImhhbmRsZUluY3JlYXNlQWxsb3dhbmNlIiwiaGFuZGxlU3dhcCIsInJlc3VsdCIsInBlcmZvcm1Td2FwIiwiaGFuZGxlSW5zdWZmaWNpZW50QWxsb3dhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});