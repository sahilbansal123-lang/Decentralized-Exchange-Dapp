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

/***/ "./components/SingleCard.js":
/*!**********************************!*\
  !*** ./components/SingleCard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var index = param.index, name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref3[0], setTPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Transaction Completed.\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBalance();\n            fetchTokenAddress();\n        } else setBalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenBalance() {\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function _fetchTokenBalance() {\n        _fetchTokenBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var bal, fBal;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        bal = _ctx.sent;\n                        fBal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(bal.toString(), 18);\n                        setBalance(fBal.toString);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        setTokenAddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col bg-[@212429]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-aria-label\": \"Est labore do officia deserunt\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    alt: \"\",\n                    className: \"obect-cover w-full h-62 bg-gray-500\",\n                    src: \"img/\".concat(index + 1, \".png\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col flex-1 p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        rel: \"noopener noreferrer\",\n                        href: \"#\",\n                        \"aria-aria-label\": \"Est labore do officia deserunt\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        rel: \"noopener noreferrer\",\n                        href: \"#\",\n                        className: \"text-xs tracki uppercase hover:underline text-[#7765F3]\",\n                        children: [\n                            \" \",\n                            name,\n                            \" 10 M Supply\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        className: \"flex-1 py-2 text-lg font-semibold leadi\",\n                        children: [\n                            \"Set \",\n                            name,\n                            \" token, limited Supply available\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex mx-2 pt-[10px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"text-sm\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        className: \"bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100\",\n                                        children: balance\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(copyIcon.icon, {\n                                    className: \"h-6 cursor-pointer\",\n                                    onClick: function() {\n                                        navigator.clipboard.writeText(tokenAddress);\n                                        setCopyIcon({\n                                            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardCheckIcon\n                                        });\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(SingleCard, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2FBQ0UsQ0FDVjtDQUNIO0dBckZLRyxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUF1RmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVDYXJkLmpzPzIzZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFRva2VuQWRkcmVzcyxcclxuICBnZXRUb2tlbkJhbGFuY2UsXHJcbiAgaW5jcmVyYXNlQWxsb3dhbmNlLFxyXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2xpcGJvYXJkSWNvbixcclxuICBDbGlwYm9hcmRDaGVja0ljb24sXHJcbiAgUGx1c0ljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcclxuXHJcbmNvbnN0IFNpbmdsZUNhcmQgPSAoeyBpbmRleCwgbmFtZSwgd2FsbGV0QWRkcmVzcyB9KSA9PiB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCItXCIpO1xyXG4gIGNvbnN0IFt0b2tlbkFkZHJlc3MsIHNldFRva2VuQWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3B5SWNvbiwgc2V0Q29weUljb25dID0gdXNlU3RhdGUoeyBpY29uOiBDbGlwYm9hcmRJY29uIH0pO1xyXG5cclxuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7IGR1cmF0aW9uOiA2MDAwIH0pO1xyXG4gIGNvbnN0IG5vdGlmeVN1Y2Nlc3MgPSAoKSA9PiB0b2FzdC5zdWNjZXNzKFwiVHJhbnNhY3Rpb24gQ29tcGxldGVkLlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuYW1lICYmIHdhbGxldEFkZHJlc3MpIHtcclxuICAgICAgZmV0Y2hUb2tlbkJhbGFuY2UoKTtcclxuICAgICAgZmV0Y2hUb2tlbkFkZHJlc3MoKTtcclxuICAgIH0gZWxzZSBzZXRCYWxhbmNlKFwiLVwiKTtcclxuICB9LCBbbmFtZSwgd2FsbGV0QWRkcmVzc10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRva2VuQmFsYW5jZSgpIHtcclxuICAgIGNvbnN0IGJhbCA9IGF3YWl0IGdldFRva2VuQmFsYW5jZShuYW1lLCB3YWxsZXRBZGRyZXNzKTtcclxuXHJcbiAgICBjb25zdCBmQmFsID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGJhbC50b1N0cmluZygpLCAxOCk7XHJcbiAgICBzZXRCYWxhbmNlKGZCYWwudG9TdHJpbmcpO1xyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRva2VuQWRkcmVzcygpIHtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBnZXRUb2tlbkFkZHJlc3MobmFtZSk7XHJcbiAgICBzZXRUb2tlbkFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1bQDIxMjQyOV1cIj5cclxuICAgICAgPGFcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgYXJpYS1hcmlhLWxhYmVsPVwiRXN0IGxhYm9yZSBkbyBvZmZpY2lhIGRlc2VydW50XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmVjdC1jb3ZlciB3LWZ1bGwgaC02MiBiZy1ncmF5LTUwMFwiXHJcbiAgICAgICAgICBzcmM9e2BpbWcvJHtpbmRleCArIDF9LnBuZ2B9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtMSBwLTZcIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBhcmlhLWFyaWEtbGFiZWw9XCJFc3QgbGFib3JlIGRvIG9mZmljaWEgZGVzZXJ1bnRcIlxyXG4gICAgICAgID48L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0cmFja2kgdXBwZXJjYXNlIGhvdmVyOnVuZGVybGluZSB0ZXh0LVsjNzc2NUYzXVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAge25hbWV9IDEwIE0gU3VwcGx5XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIgdGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpXCI+XHJcbiAgICAgICAgICBTZXQge25hbWV9IHRva2VuLCBsaW1pdGVkIFN1cHBseSBhdmFpbGFibGVcclxuICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMiBwdC1bMTBweF1cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctemluYy05MDAgdGV4dC16aW5jLTMwMCB3LWZpdCBwLTIgcHgtMyBcclxuICAgICAgICAgIHJvdW5kZWQtbC1sZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57bmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJnLXppbmMtODAwIHAtMC41IHB4LTMgbWwtMyByb3VuZGVkLWxnIHRleHQtemluYy0xMDBcIj5cclxuICAgICAgICAgICAgICB7YmFsYW5jZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgcHgtMiBiZy1bIzc3NjVGM10gcm91bmRlZC1yLWxnXCI+XHJcbiAgICAgICAgICAgIDxjb3B5SWNvbi5pY29uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0b2tlbkFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29weUljb24oeyBpY29uOiBDbGlwYm9hcmRDaGVja0ljb24gfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnZXRUb2tlbkFkZHJlc3MiLCJnZXRUb2tlbkJhbGFuY2UiLCJpbmNyZXJhc2VBbGxvd2FuY2UiLCJldGhlcnMiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJDbGlwYm9hcmRJY29uIiwiQ2xpcGJvYXJkQ2hlY2tJY29uIiwiUGx1c0ljb24iLCJUcmFuc2FjdGlvblN0YXR1cyIsIlNpbmdsZUNhcmQiLCJpbmRleCIsIm5hbWUiLCJ3YWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJzZXRUb2tlbkFkZHJlc3MiLCJpY29uIiwiY29weUljb24iLCJzZXRDb3B5SWNvbiIsInR4UGVuZGluZyIsInNldFRQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJmZXRjaFRva2VuQmFsYW5jZSIsImZldGNoVG9rZW5BZGRyZXNzIiwiYmFsIiwiZkJhbCIsInV0aWxzIiwiZm9ybWF0VW5pdHMiLCJ0b1N0cmluZyIsImFkZHJlc3MiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiYSIsInJlbCIsImhyZWYiLCJhcmlhLWFyaWEtbGFiZWwiLCJpbWciLCJhbHQiLCJzcmMiLCJkaXYiLCJoMyIsInAiLCJvbkNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});