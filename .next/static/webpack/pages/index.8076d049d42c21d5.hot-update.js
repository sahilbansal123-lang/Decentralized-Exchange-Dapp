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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var index = param.index, name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref3[0], setTcPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Transaction Completed.\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBalance();\n            fetchTokenAddress();\n        } else setBalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenBalance() {\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function _fetchTokenBalance() {\n        _fetchTokenBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var bal, fBal;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        bal = _ctx.sent;\n                        fBal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(bal.toString(), 18);\n                        setBalance(fBal.toString);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        setTokenAddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col bg-[@212429]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n            rel: \"noopener noreferrer\",\n            href: \"#\",\n            aria: true\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SingleCard.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(SingleCard, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTJEO0FBS2pDO0FBQ007QUFDaUI7QUFLZjtBQUNrQjs7QUFFcEQsSUFBTWMsVUFBVSxHQUFHLGdCQUFvQztRQUFqQ0MsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxhQUFhLFNBQWJBLGFBQWE7O0lBQzlDLElBQThCaEIsR0FBYSxHQUFiQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFwQ2lCLE9BQU8sR0FBZ0JqQixHQUFhLEdBQTdCLEVBQUVrQixVQUFVLEdBQUlsQixHQUFhLEdBQWpCO0lBQzFCLElBQXdDQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0NtQixZQUFZLEdBQXFCbkIsSUFBVSxHQUEvQixFQUFFb0IsZUFBZSxHQUFJcEIsSUFBVSxHQUFkO0lBQ3BDLElBQWdDQSxJQUFpQyxHQUFqQ0EsK0NBQVEsQ0FBQztRQUFFcUIsSUFBSSxFQUFFWixtRUFBYTtLQUFFLENBQUMsRUFBMURhLFFBQVEsR0FBaUJ0QixJQUFpQyxHQUFsRCxFQUFFdUIsV0FBVyxHQUFJdkIsSUFBaUMsR0FBckM7SUFFNUIsSUFBa0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUN3QixTQUFTLEdBQWtCeEIsSUFBZSxHQUFqQyxFQUFFeUIsWUFBWSxHQUFJekIsSUFBZSxHQUFuQjtJQUU5QixJQUFNMEIsV0FBVyxHQUFHLFNBQUNDLEdBQUc7ZUFBS3BCLDZEQUFXLENBQUNvQixHQUFHLEVBQUU7WUFBRUUsUUFBUSxFQUFFLElBQUk7U0FBRSxDQUFDO0tBQUE7SUFDakUsSUFBTUMsYUFBYSxHQUFHO2VBQU12QiwrREFBYSxDQUFDLHdCQUF3QixDQUFDO0tBQUE7SUFFbkVOLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUljLElBQUksSUFBSUMsYUFBYSxFQUFFO1lBQ3pCZ0IsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQkMsaUJBQWlCLEVBQUUsQ0FBQztTQUNyQixNQUFNZixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEIsRUFBRTtRQUFDSCxJQUFJO1FBQUVDLGFBQWE7S0FBQyxDQUFDLENBQUM7YUFFWGdCLGlCQUFpQjtlQUFqQkEsa0JBQWlCOzthQUFqQkEsa0JBQWlCO1FBQWpCQSxrQkFBaUIsR0FBaEMscVRBQW1DO2dCQUMzQkUsR0FBRyxFQUVIQyxJQUFJOzs7OzsrQkFGUS9CLCtEQUFlLENBQUNXLElBQUksRUFBRUMsYUFBYSxDQUFDOzt3QkFBaERrQixHQUFHLFlBQTZDO3dCQUVoREMsSUFBSSxHQUFHN0IsNERBQXdCLENBQUM0QixHQUFHLENBQUNJLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRHBCLFVBQVUsQ0FBQ2lCLElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUM7Ozs7OztTQUMzQjtlQUxjTixrQkFBaUI7O2FBTWpCQyxpQkFBaUI7ZUFBakJBLGtCQUFpQjs7YUFBakJBLGtCQUFpQjtRQUFqQkEsa0JBQWlCLEdBQWhDLHFUQUFtQztnQkFDM0JNLE9BQU87Ozs7OytCQUFTcEMsK0RBQWUsQ0FBQ1ksSUFBSSxDQUFDOzt3QkFBckN3QixPQUFPLFlBQThCO3dCQUMzQ25CLGVBQWUsQ0FBQ21CLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7U0FDMUI7ZUFIY04sa0JBQWlCOztJQUtoQyxxQkFDRSw4REFBQ08sU0FBTztRQUFDQyxTQUFTLEVBQUMsNEJBQTRCO2tCQUM3Qyw0RUFBQ0MsR0FBQztZQUNGQyxHQUFHLEVBQUMscUJBQXFCO1lBQ3pCQyxJQUFJLEVBQUMsR0FBRztZQUNSQyxJQUFJOzs7OztpQkFDQzs7Ozs7YUFDRyxDQUNWO0NBQ0g7R0FyQ0toQyxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUF1Q2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVDYXJkLmpzPzIzZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldFRva2VuQWRkcmVzcyxcclxuICBnZXRUb2tlbkJhbGFuY2UsXHJcbiAgaW5jcmVyYXNlQWxsb3dhbmNlLFxyXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2xpcGJvYXJkSWNvbixcclxuICBDbGlwYm9hcmRDaGVja0ljb24sXHJcbiAgUGx1c0ljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcclxuXHJcbmNvbnN0IFNpbmdsZUNhcmQgPSAoeyBpbmRleCwgbmFtZSwgd2FsbGV0QWRkcmVzcyB9KSA9PiB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCItXCIpO1xyXG4gIGNvbnN0IFt0b2tlbkFkZHJlc3MsIHNldFRva2VuQWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3B5SWNvbiwgc2V0Q29weUljb25dID0gdXNlU3RhdGUoeyBpY29uOiBDbGlwYm9hcmRJY29uIH0pO1xyXG5cclxuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUY1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+IHRvYXN0LmVycm9yKG1zZywgeyBkdXJhdGlvbjogNjAwMCB9KTtcclxuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIENvbXBsZXRlZC5cIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmFtZSAmJiB3YWxsZXRBZGRyZXNzKSB7XHJcbiAgICAgIGZldGNoVG9rZW5CYWxhbmNlKCk7XHJcbiAgICAgIGZldGNoVG9rZW5BZGRyZXNzKCk7XHJcbiAgICB9IGVsc2Ugc2V0QmFsYW5jZShcIi1cIik7XHJcbiAgfSwgW25hbWUsIHdhbGxldEFkZHJlc3NdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkJhbGFuY2UoKSB7XHJcbiAgICBjb25zdCBiYWwgPSBhd2FpdCBnZXRUb2tlbkJhbGFuY2UobmFtZSwgd2FsbGV0QWRkcmVzcyk7XHJcblxyXG4gICAgY29uc3QgZkJhbCA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhiYWwudG9TdHJpbmcoKSwgMTgpO1xyXG4gICAgc2V0QmFsYW5jZShmQmFsLnRvU3RyaW5nKTtcclxuICB9XHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkFkZHJlc3MoKSB7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpO1xyXG4gICAgc2V0VG9rZW5BZGRyZXNzKGFkZHJlc3MpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctW0AyMTI0MjldXCI+XHJcbiAgICAgIDxhIFxyXG4gICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICBhcmlhXHJcbiAgICAgID48L2E+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZ2V0VG9rZW5BZGRyZXNzIiwiZ2V0VG9rZW5CYWxhbmNlIiwiaW5jcmVyYXNlQWxsb3dhbmNlIiwiZXRoZXJzIiwidG9hc3QiLCJUb2FzdGVyIiwiQ2xpcGJvYXJkSWNvbiIsIkNsaXBib2FyZENoZWNrSWNvbiIsIlBsdXNJY29uIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJTaW5nbGVDYXJkIiwiaW5kZXgiLCJuYW1lIiwid2FsbGV0QWRkcmVzcyIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwidG9rZW5BZGRyZXNzIiwic2V0VG9rZW5BZGRyZXNzIiwiaWNvbiIsImNvcHlJY29uIiwic2V0Q29weUljb24iLCJ0eFBlbmRpbmciLCJzZXRUY1BlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iLCJub3RpZnlTdWNjZXNzIiwic3VjY2VzcyIsImZldGNoVG9rZW5CYWxhbmNlIiwiZmV0Y2hUb2tlbkFkZHJlc3MiLCJiYWwiLCJmQmFsIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiYWRkcmVzcyIsImFydGljbGUiLCJjbGFzc05hbWUiLCJhIiwicmVsIiwiaHJlZiIsImFyaWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"FaceBook\": function() { return /* reexport safe */ _SVG_Facebook__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; },\n/* harmony export */   \"Footer\": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"Header\": function() { return /* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   \"HeroSection\": function() { return /* reexport safe */ _HeroSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   \"Insta\": function() { return /* reexport safe */ _SVG_Insta__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; },\n/* harmony export */   \"Logo\": function() { return /* reexport safe */ _SVG_Logo__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; },\n/* harmony export */   \"Menu\": function() { return /* reexport safe */ _SVG_Menu__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; },\n/* harmony export */   \"Selector\": function() { return /* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   \"SingleCard\": function() { return /* reexport safe */ _SingleCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; },\n/* harmony export */   \"SwapComponent\": function() { return /* reexport safe */ _SwapComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   \"SwapField\": function() { return /* reexport safe */ _SwapField__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   \"Table\": function() { return /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   \"TokenBalance\": function() { return /* reexport safe */ _TokenBalance__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; },\n/* harmony export */   \"TransactionStatus\": function() { return /* reexport safe */ _TransactionStatus__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; },\n/* harmony export */   \"Twitter\": function() { return /* reexport safe */ _SVG_Twitter__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./components/Card.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroSection */ \"./components/HeroSection.js\");\n/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Selector */ \"./components/Selector.js\");\n/* harmony import */ var _SingleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleCard */ \"./components/SingleCard.js\");\n/* harmony import */ var _SwapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwapComponent */ \"./components/SwapComponent.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Table */ \"./components/Table.js\");\n/* harmony import */ var _TokenBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TokenBalance */ \"./components/TokenBalance.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var _SVG_Facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SVG/Facebook */ \"./components/SVG/Facebook.js\");\n/* harmony import */ var _SVG_Insta__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SVG/Insta */ \"./components/SVG/Insta.js\");\n/* harmony import */ var _SVG_Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SVG/Logo */ \"./components/SVG/Logo.js\");\n/* harmony import */ var _SVG_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SVG/Menu */ \"./components/SVG/Menu.js\");\n/* harmony import */ var _SVG_Twitter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SVG/Twitter */ \"./components/SVG/Twitter.js\");\n\n\n\n\n\n\n\n\n\n\n\n// SVG ICONS\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0k7QUFDQTtBQUNVO0FBQ047QUFDSTtBQUNNO0FBQ1I7QUFDUjtBQUNjO0FBQ1U7QUFDcEQsWUFBWTtBQUMwQjtBQUNOO0FBQ0Y7QUFDQTtBQUNNO0FBbUJsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4LmpzPzUwZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vSGVyb1NlY3Rpb25cIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCBTaW5nbGVDYXJkIGZyb20gXCIuL1NpbmdsZUNhcmRcIjtcclxuaW1wb3J0IFN3YXBDb21wb25lbnQgZnJvbSBcIi4vU3dhcENvbXBvbmVudFwiO1xyXG5pbXBvcnQgU3dhcEZpZWxkIGZyb20gXCIuL1N3YXBGaWVsZFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vVGFibGVcIjtcclxuaW1wb3J0IFRva2VuQmFsYW5jZSBmcm9tIFwiLi9Ub2tlbkJhbGFuY2VcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcbi8vIFNWRyBJQ09OU1xyXG5pbXBvcnQgRmFjZUJvb2sgZnJvbSBcIi4vU1ZHL0ZhY2Vib29rXCI7XHJcbmltcG9ydCBJbnN0YSBmcm9tIFwiLi9TVkcvSW5zdGFcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vU1ZHL0xvZ29cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vU1ZHL01lbnVcIjtcclxuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4vU1ZHL1R3aXR0ZXJcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ2FyZCxcclxuICBGb290ZXIsXHJcbiAgSGVhZGVyLFxyXG4gIEhlcm9TZWN0aW9uLFxyXG4gIFNlbGVjdG9yLFxyXG4gIFNpbmdsZUNhcmQsXHJcbiAgU3dhcENvbXBvbmVudCxcclxuICBTd2FwRmllbGQsXHJcbiAgVGFibGUsXHJcbiAgVG9rZW5CYWxhbmNlLFxyXG4gIFRyYW5zYWN0aW9uU3RhdHVzLFxyXG4gIEZhY2VCb29rLFxyXG4gIEluc3RhLFxyXG4gIExvZ28sXHJcbiAgTWVudSxcclxuICBUd2l0dGVyLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIkZvb3RlciIsIkhlYWRlciIsIkhlcm9TZWN0aW9uIiwiU2VsZWN0b3IiLCJTaW5nbGVDYXJkIiwiU3dhcENvbXBvbmVudCIsIlN3YXBGaWVsZCIsIlRhYmxlIiwiVG9rZW5CYWxhbmNlIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJGYWNlQm9vayIsIkluc3RhIiwiTG9nbyIsIk1lbnUiLCJUd2l0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});