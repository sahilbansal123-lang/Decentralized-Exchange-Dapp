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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var index = param.index, name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"-\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), txPending = ref3[0], setTcPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Transaction Completed.\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBalance();\n            fetchTokenAddress();\n        } else setBalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenBalance() {\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function _fetchTokenBalance() {\n        _fetchTokenBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var bal, fBal;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        bal = _ctx.sent;\n                        fBal = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.formatUnits(bal.toString(), 18);\n                        setBalance(fBal.toString);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var bal;\n            return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.getTokenAddress)(name);\n                    case 2:\n                        bal = _ctx.sent;\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n};\n_s(SingleCard, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkQ7QUFLakM7QUFDTTtBQUNpQjtBQUtmO0FBQ2tCOztBQUVwRCxJQUFNYyxVQUFVLEdBQUcsZ0JBQW9DO1FBQWpDQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLGFBQWEsU0FBYkEsYUFBYTs7SUFDOUMsSUFBOEJoQixHQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQXBDaUIsT0FBTyxHQUFnQmpCLEdBQWEsR0FBN0IsRUFBRWtCLFVBQVUsR0FBSWxCLEdBQWEsR0FBakI7SUFDMUIsSUFBd0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQ21CLFlBQVksR0FBcUJuQixJQUFVLEdBQS9CLEVBQUVvQixlQUFlLEdBQUlwQixJQUFVLEdBQWQ7SUFDcEMsSUFBZ0NBLElBQWlDLEdBQWpDQSwrQ0FBUSxDQUFDO1FBQUVxQixJQUFJLEVBQUVaLG1FQUFhO0tBQUUsQ0FBQyxFQUExRGEsUUFBUSxHQUFpQnRCLElBQWlDLEdBQWxELEVBQUV1QixXQUFXLEdBQUl2QixJQUFpQyxHQUFyQztJQUU1QixJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ3dCLFNBQVMsR0FBa0J4QixJQUFlLEdBQWpDLEVBQUV5QixZQUFZLEdBQUl6QixJQUFlLEdBQW5CO0lBRTlCLElBQU0wQixXQUFXLEdBQUcsU0FBQ0MsR0FBRztlQUFLcEIsNkRBQVcsQ0FBQ29CLEdBQUcsRUFBRTtZQUFFRSxRQUFRLEVBQUUsSUFBSTtTQUFFLENBQUM7S0FBQTtJQUNqRSxJQUFNQyxhQUFhLEdBQUc7ZUFBTXZCLCtEQUFhLENBQUMsd0JBQXdCLENBQUM7S0FBQTtJQUVuRU4sZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSWMsSUFBSSxJQUFJQyxhQUFhLEVBQUU7WUFDekJnQixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3JCLE1BQU1mLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4QixFQUFFO1FBQUNILElBQUk7UUFBRUMsYUFBYTtLQUFDLENBQUMsQ0FBQzthQUVYZ0IsaUJBQWlCO2VBQWpCQSxrQkFBaUI7O2FBQWpCQSxrQkFBaUI7UUFBakJBLGtCQUFpQixHQUFoQyxxVEFBbUM7Z0JBQzNCRSxHQUFHLEVBRUhDLElBQUk7Ozs7OytCQUZRL0IsK0RBQWUsQ0FBQ1csSUFBSSxFQUFFQyxhQUFhLENBQUM7O3dCQUFoRGtCLEdBQUcsWUFBNkM7d0JBRWhEQyxJQUFJLEdBQUc3Qiw0REFBd0IsQ0FBQzRCLEdBQUcsQ0FBQ0ksUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQzFEcEIsVUFBVSxDQUFDaUIsSUFBSSxDQUFDRyxRQUFRLENBQUMsQ0FBQzs7Ozs7O1NBQzNCO2VBTGNOLGtCQUFpQjs7YUFNakJDLGlCQUFpQjtlQUFqQkEsa0JBQWlCOzthQUFqQkEsa0JBQWlCO1FBQWpCQSxrQkFBaUIsR0FBaEMscVRBQW1DO2dCQUMzQkMsR0FBRzs7Ozs7K0JBQVMvQiwrREFBZSxDQUFDWSxJQUFJLENBQUM7O3dCQUFqQ21CLEdBQUcsWUFBOEI7Ozs7OztTQUd4QztlQUpjRCxrQkFBaUI7O0NBS2pDO0dBNUJLcEIsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBOEJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2luZ2xlQ2FyZC5qcz8yM2U2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBnZXRUb2tlbkFkZHJlc3MsXHJcbiAgZ2V0VG9rZW5CYWxhbmNlLFxyXG4gIGluY3JlcmFzZUFsbG93YW5jZSxcclxufSBmcm9tIFwiLi4vdXRpbHMvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQge1xyXG4gIENsaXBib2FyZEljb24sXHJcbiAgQ2xpcGJvYXJkQ2hlY2tJY29uLFxyXG4gIFBsdXNJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcblxyXG5jb25zdCBTaW5nbGVDYXJkID0gKHsgaW5kZXgsIG5hbWUsIHdhbGxldEFkZHJlc3MgfSkgPT4ge1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiLVwiKTtcclxuICBjb25zdCBbdG9rZW5BZGRyZXNzLCBzZXRUb2tlbkFkZHJlc3NdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY29weUljb24sIHNldENvcHlJY29uXSA9IHVzZVN0YXRlKHsgaWNvbjogQ2xpcGJvYXJkSWNvbiB9KTtcclxuXHJcbiAgY29uc3QgW3R4UGVuZGluZywgc2V0VGNQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHsgZHVyYXRpb246IDYwMDAgfSk7XHJcbiAgY29uc3Qgbm90aWZ5U3VjY2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBDb21wbGV0ZWQuXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5hbWUgJiYgd2FsbGV0QWRkcmVzcykge1xyXG4gICAgICBmZXRjaFRva2VuQmFsYW5jZSgpO1xyXG4gICAgICBmZXRjaFRva2VuQWRkcmVzcygpO1xyXG4gICAgfSBlbHNlIHNldEJhbGFuY2UoXCItXCIpO1xyXG4gIH0sIFtuYW1lLCB3YWxsZXRBZGRyZXNzXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9rZW5CYWxhbmNlKCkge1xyXG4gICAgY29uc3QgYmFsID0gYXdhaXQgZ2V0VG9rZW5CYWxhbmNlKG5hbWUsIHdhbGxldEFkZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IGZCYWwgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoYmFsLnRvU3RyaW5nKCksIDE4KTtcclxuICAgIHNldEJhbGFuY2UoZkJhbC50b1N0cmluZyk7XHJcbiAgfVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9rZW5BZGRyZXNzKCkge1xyXG4gICAgY29uc3QgYmFsID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpO1xyXG5cclxuICBcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdldFRva2VuQWRkcmVzcyIsImdldFRva2VuQmFsYW5jZSIsImluY3JlcmFzZUFsbG93YW5jZSIsImV0aGVycyIsInRvYXN0IiwiVG9hc3RlciIsIkNsaXBib2FyZEljb24iLCJDbGlwYm9hcmRDaGVja0ljb24iLCJQbHVzSWNvbiIsIlRyYW5zYWN0aW9uU3RhdHVzIiwiU2luZ2xlQ2FyZCIsImluZGV4IiwibmFtZSIsIndhbGxldEFkZHJlc3MiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInRva2VuQWRkcmVzcyIsInNldFRva2VuQWRkcmVzcyIsImljb24iLCJjb3B5SWNvbiIsInNldENvcHlJY29uIiwidHhQZW5kaW5nIiwic2V0VGNQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJmZXRjaFRva2VuQmFsYW5jZSIsImZldGNoVG9rZW5BZGRyZXNzIiwiYmFsIiwiZkJhbCIsInV0aWxzIiwiZm9ybWF0VW5pdHMiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});