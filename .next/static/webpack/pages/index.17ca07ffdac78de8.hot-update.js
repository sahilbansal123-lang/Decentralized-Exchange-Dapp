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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var index = param.index, name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref3[0], setTcPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Transaction Completed.\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBalance();\n            fetchTokenAddress();\n        } else setBalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenBalance() {\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function _fetchTokenBalance() {\n        _fetchTokenBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var bal, fBal;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        bal = _ctx.sent;\n                        fBal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(bal.toString(), 18);\n                        setBalance(fBal.toString);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        setTokenAddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col bg-[@212429]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-aria-label\": \"Est labore do officia deserunt\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    alt: \"\",\n                    className: \"obect-cover w-full h-62 bg-gray-500\",\n                    src: \"img/\".concat(index + 1, \".png\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col flex-1 p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        rel: \"noopener noreferrer\",\n                        href: \"#\",\n                        \"aria-aria-label\": \"Est labore do officia deserunt\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        rel: \"noopener noreferrer\",\n                        href: \"#\",\n                        className: \"text-xs tracki uppercase hover:underline text-[#7765F3]\",\n                        children: [\n                            \" \",\n                            name,\n                            \" 10 M Supply\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        className: \"flex-1 py-2 text-lg font-semibold leadi\",\n                        children: [\n                            \"Set \",\n                            name,\n                            \" token, limited Supply available\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex mx-2 pt-[10px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex items-center bg-zinc-900 text-z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(SingleCard, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7cUJBQ0E7MEJBRUosOERBQUNtQyxLQUFHO2dCQUFDUixTQUFTLEVBQUMsMEJBQTBCOztrQ0FDdkMsOERBQUNDLEdBQUM7d0JBQ0FDLEdBQUcsRUFBQyxxQkFBcUI7d0JBQ3pCQyxJQUFJLEVBQUMsR0FBRzt3QkFDUkMsaUJBQWUsRUFBQyxnQ0FBZ0M7Ozs7OzZCQUM3QztrQ0FDTCw4REFBQ0gsR0FBQzt3QkFDQUMsR0FBRyxFQUFDLHFCQUFxQjt3QkFDekJDLElBQUksRUFBQyxHQUFHO3dCQUNSSCxTQUFTLEVBQUMseURBQXlEOzs0QkFFbEUsR0FBRzs0QkFDSDFCLElBQUk7NEJBQUMsY0FDUjs7Ozs7OzZCQUFJO2tDQUVKLDhEQUFDbUMsSUFBRTt3QkFBQ1QsU0FBUyxFQUFDLHlDQUF5Qzs7NEJBQUMsTUFDbEQ7NEJBQUMxQixJQUFJOzRCQUFDLGtDQUNaOzs7Ozs7NkJBQUs7a0NBRUwsOERBQUNrQyxLQUFHO3dCQUFDUixTQUFTLEVBQUMscUJBQXFCO2tDQUNsQyw0RUFBQ1EsS0FBRzs0QkFBQ1IsU0FBUyxFQUFDLHNDQUFzQzs7Ozs7aUNBQU87Ozs7OzZCQUN4RDs7Ozs7O3FCQUNGOzs7Ozs7YUFDRSxDQUNWO0NBQ0g7R0FuRUs1QixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFxRWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVDYXJkLmpzPzIzZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFRva2VuQWRkcmVzcyxcclxuICBnZXRUb2tlbkJhbGFuY2UsXHJcbiAgaW5jcmVyYXNlQWxsb3dhbmNlLFxyXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2xpcGJvYXJkSWNvbixcclxuICBDbGlwYm9hcmRDaGVja0ljb24sXHJcbiAgUGx1c0ljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcclxuXHJcbmNvbnN0IFNpbmdsZUNhcmQgPSAoeyBpbmRleCwgbmFtZSwgd2FsbGV0QWRkcmVzcyB9KSA9PiB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCItXCIpO1xyXG4gIGNvbnN0IFt0b2tlbkFkZHJlc3MsIHNldFRva2VuQWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3B5SWNvbiwgc2V0Q29weUljb25dID0gdXNlU3RhdGUoeyBpY29uOiBDbGlwYm9hcmRJY29uIH0pO1xyXG5cclxuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUY1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+IHRvYXN0LmVycm9yKG1zZywgeyBkdXJhdGlvbjogNjAwMCB9KTtcclxuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIENvbXBsZXRlZC5cIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmFtZSAmJiB3YWxsZXRBZGRyZXNzKSB7XHJcbiAgICAgIGZldGNoVG9rZW5CYWxhbmNlKCk7XHJcbiAgICAgIGZldGNoVG9rZW5BZGRyZXNzKCk7XHJcbiAgICB9IGVsc2Ugc2V0QmFsYW5jZShcIi1cIik7XHJcbiAgfSwgW25hbWUsIHdhbGxldEFkZHJlc3NdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkJhbGFuY2UoKSB7XHJcbiAgICBjb25zdCBiYWwgPSBhd2FpdCBnZXRUb2tlbkJhbGFuY2UobmFtZSwgd2FsbGV0QWRkcmVzcyk7XHJcblxyXG4gICAgY29uc3QgZkJhbCA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhiYWwudG9TdHJpbmcoKSwgMTgpO1xyXG4gICAgc2V0QmFsYW5jZShmQmFsLnRvU3RyaW5nKTtcclxuICB9XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkFkZHJlc3MoKSB7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpO1xyXG4gICAgc2V0VG9rZW5BZGRyZXNzKGFkZHJlc3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctW0AyMTI0MjldXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGFyaWEtYXJpYS1sYWJlbD1cIkVzdCBsYWJvcmUgZG8gb2ZmaWNpYSBkZXNlcnVudFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JlY3QtY292ZXIgdy1mdWxsIGgtNjIgYmctZ3JheS01MDBcIlxyXG4gICAgICAgICAgc3JjPXtgaW1nLyR7aW5kZXggKyAxfS5wbmdgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTEgcC02XCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgYXJpYS1hcmlhLWxhYmVsPVwiRXN0IGxhYm9yZSBkbyBvZmZpY2lhIGRlc2VydW50XCJcclxuICAgICAgICA+PC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdHJhY2tpIHVwcGVyY2FzZSBob3Zlcjp1bmRlcmxpbmUgdGV4dC1bIzc3NjVGM11cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIHtuYW1lfSAxMCBNIFN1cHBseVxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIHRleHQtbGcgZm9udC1zZW1pYm9sZCBsZWFkaVwiPlxyXG4gICAgICAgICAgU2V0IHtuYW1lfSB0b2tlbiwgbGltaXRlZCBTdXBwbHkgYXZhaWxhYmxlXHJcbiAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTIgcHQtWzEwcHhdXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXppbmMtOTAwIHRleHQtelwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnZXRUb2tlbkFkZHJlc3MiLCJnZXRUb2tlbkJhbGFuY2UiLCJpbmNyZXJhc2VBbGxvd2FuY2UiLCJldGhlcnMiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJDbGlwYm9hcmRJY29uIiwiQ2xpcGJvYXJkQ2hlY2tJY29uIiwiUGx1c0ljb24iLCJUcmFuc2FjdGlvblN0YXR1cyIsIlNpbmdsZUNhcmQiLCJpbmRleCIsIm5hbWUiLCJ3YWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJzZXRUb2tlbkFkZHJlc3MiLCJpY29uIiwiY29weUljb24iLCJzZXRDb3B5SWNvbiIsInR4UGVuZGluZyIsInNldFRjUGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwiZmV0Y2hUb2tlbkJhbGFuY2UiLCJmZXRjaFRva2VuQWRkcmVzcyIsImJhbCIsImZCYWwiLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJhZGRyZXNzIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImEiLCJyZWwiLCJocmVmIiwiYXJpYS1hcmlhLWxhYmVsIiwiaW1nIiwiYWx0Iiwic3JjIiwiZGl2IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});