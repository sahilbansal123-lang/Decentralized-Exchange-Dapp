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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var index = param.index, name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"-\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), txPending = ref3[0], setTcPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Transaction Completed.\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBakan;\n        }\n    });\n};\n_s(SingleCard, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyRDtBQUtqQztBQUNNO0FBQ2lCO0FBS2Y7QUFDa0I7O0FBRXBELElBQU1jLFVBQVUsR0FBRyxnQkFBb0M7UUFBakNDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsYUFBYSxTQUFiQSxhQUFhOztJQUM5QyxJQUE4QmhCLEdBQWEsR0FBYkEsK0NBQVEsQ0FBQyxHQUFHLENBQUMsRUFBcENpQixPQUFPLEdBQWdCakIsR0FBYSxHQUE3QixFQUFFa0IsVUFBVSxHQUFJbEIsR0FBYSxHQUFqQjtJQUMxQixJQUF3Q0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNDbUIsWUFBWSxHQUFxQm5CLElBQVUsR0FBL0IsRUFBRW9CLGVBQWUsR0FBSXBCLElBQVUsR0FBZDtJQUNwQyxJQUFnQ0EsSUFBaUMsR0FBakNBLCtDQUFRLENBQUM7UUFBRXFCLElBQUksRUFBRVosbUVBQWE7S0FBRSxDQUFDLEVBQTFEYSxRQUFRLEdBQWlCdEIsSUFBaUMsR0FBbEQsRUFBRXVCLFdBQVcsR0FBSXZCLElBQWlDLEdBQXJDO0lBRTVCLElBQWtDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDd0IsU0FBUyxHQUFrQnhCLElBQWUsR0FBakMsRUFBRXlCLFlBQVksR0FBSXpCLElBQWUsR0FBbkI7SUFFOUIsSUFBTTBCLFdBQVcsR0FBRyxTQUFDQyxHQUFHO2VBQUtwQiw2REFBVyxDQUFDb0IsR0FBRyxFQUFFO1lBQUVFLFFBQVEsRUFBRSxJQUFJO1NBQUUsQ0FBQztLQUFBO0lBQ2pFLElBQU1DLGFBQWEsR0FBRztlQUFNdkIsK0RBQWEsQ0FBQyx3QkFBd0IsQ0FBQztLQUFBO0lBRW5FTixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFHYyxJQUFJLElBQUlDLGFBQWEsRUFBRTtZQUN4QmdCLGVBQWU7U0FDaEI7S0FDRixDQUFDO0NBQ0g7R0FmS25CLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQWlCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanM/MjNlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0VG9rZW5BZGRyZXNzLFxyXG4gIGdldFRva2VuQmFsYW5jZSxcclxuICBpbmNyZXJhc2VBbGxvd2FuY2UsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHtcclxuICBDbGlwYm9hcmRJY29uLFxyXG4gIENsaXBib2FyZENoZWNrSWNvbixcclxuICBQbHVzSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xyXG5cclxuY29uc3QgU2luZ2xlQ2FyZCA9ICh7IGluZGV4LCBuYW1lLCB3YWxsZXRBZGRyZXNzIH0pID0+IHtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIi1cIik7XHJcbiAgY29uc3QgW3Rva2VuQWRkcmVzcywgc2V0VG9rZW5BZGRyZXNzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NvcHlJY29uLCBzZXRDb3B5SWNvbl0gPSB1c2VTdGF0ZSh7IGljb246IENsaXBib2FyZEljb24gfSk7XHJcblxyXG4gIGNvbnN0IFt0eFBlbmRpbmcsIHNldFRjUGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7IGR1cmF0aW9uOiA2MDAwIH0pO1xyXG4gIGNvbnN0IG5vdGlmeVN1Y2Nlc3MgPSAoKSA9PiB0b2FzdC5zdWNjZXNzKFwiVHJhbnNhY3Rpb24gQ29tcGxldGVkLlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKG5hbWUgJiYgd2FsbGV0QWRkcmVzcykge1xyXG4gICAgICBmZXRjaFRva2VuQmFrYW5cclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnZXRUb2tlbkFkZHJlc3MiLCJnZXRUb2tlbkJhbGFuY2UiLCJpbmNyZXJhc2VBbGxvd2FuY2UiLCJldGhlcnMiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJDbGlwYm9hcmRJY29uIiwiQ2xpcGJvYXJkQ2hlY2tJY29uIiwiUGx1c0ljb24iLCJUcmFuc2FjdGlvblN0YXR1cyIsIlNpbmdsZUNhcmQiLCJpbmRleCIsIm5hbWUiLCJ3YWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJzZXRUb2tlbkFkZHJlc3MiLCJpY29uIiwiY29weUljb24iLCJzZXRDb3B5SWNvbiIsInR4UGVuZGluZyIsInNldFRjUGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwiZmV0Y2hUb2tlbkJha2FuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});