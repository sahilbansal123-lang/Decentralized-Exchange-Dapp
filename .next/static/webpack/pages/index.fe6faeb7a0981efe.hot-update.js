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

/***/ "./components/Selector.js":
/*!********************************!*\
  !*** ./components/Selector.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {\n        return menu.filter(it);\n    };\n    _s();\n    var menu = [\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.ETH,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), selectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getFilteredItems(ignoreValue)), menuItem = ref1[0], setMenuItem = ref1[1];\n};\n_s(Selector, \"WygqW5Q8gjLbQ4vtCelkct1tzkA=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBNkM7QUFDTTtBQVl2Qjs7QUFFNUIsSUFBTWMsUUFBUSxHQUFHLGdCQUFpRDtRQUE5Q0MsWUFBWSxTQUFaQSxZQUFZLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsRUFBRSxTQUFGQSxFQUFFO1FBZ0JoREMsZ0JBQWdCLEdBQXpCLFNBQVNBLGdCQUFnQixDQUFDSCxXQUFXLEVBQUU7UUFDckMsT0FBT0ksSUFBSSxDQUFDQyxNQUFNLENBQUVDLEVBQUUsQ0FBRTtLQUN6Qjs7SUFqQkQsSUFBTUYsSUFBSSxHQUFHO1FBQ1g7WUFBRUcsR0FBRyxFQUFFVixpREFBRztZQUFFVyxJQUFJLEVBQUVYLGlEQUFHO1NBQUU7UUFDdkI7WUFBRVUsR0FBRyxFQUFFbkIsb0RBQU07WUFBRW9CLElBQUksRUFBRXBCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRW1CLEdBQUcsRUFBRWxCLG9EQUFNO1lBQUVtQixJQUFJLEVBQUVuQixvREFBTTtTQUFFO1FBQzdCO1lBQUVrQixHQUFHLEVBQUVqQixvREFBTTtZQUFFa0IsSUFBSSxFQUFFbEIsb0RBQU07U0FBRTtRQUM3QjtZQUFFaUIsR0FBRyxFQUFFaEIsb0RBQU07WUFBRWlCLElBQUksRUFBRWpCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWdCLEdBQUcsRUFBRWYsb0RBQU07WUFBRWdCLElBQUksRUFBRWhCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWUsR0FBRyxFQUFFZCxvREFBTTtZQUFFZSxJQUFJLEVBQUVmLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWMsR0FBRyxFQUFFYixvREFBTTtZQUFFYyxJQUFJLEVBQUVkLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWEsR0FBRyxFQUFFWixvREFBTTtZQUFFYSxJQUFJLEVBQUViLG9EQUFNO1NBQUU7S0FDOUI7SUFFRCxJQUF3Q1QsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNDdUIsWUFBWSxHQUFxQnZCLEdBQVUsR0FBL0IsRUFBRXdCLGVBQWUsR0FBSXhCLEdBQVUsR0FBZDtJQUNwQyxJQUFnQ0EsSUFBdUMsR0FBdkNBLCtDQUFRLENBQUNpQixnQkFBZ0IsQ0FBQ0gsV0FBVyxDQUFDLENBQUMsRUFBaEVXLFFBQVEsR0FBaUJ6QixJQUF1QyxHQUF4RCxFQUFFMEIsV0FBVyxHQUFJMUIsSUFBdUMsR0FBM0M7Q0FLN0I7R0FuQktZLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXFCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VsZWN0b3IuanM/Nzc1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENPSU5fMSxcclxuICBDT0lOXzIsXHJcbiAgQ09JTl8zLFxyXG4gIENPSU5fNCxcclxuICBDT0lOXzUsXHJcbiAgQ09JTl82LFxyXG4gIENPSU5fNyxcclxuICBDT0lOXzgsXHJcbiAgREVGQVVMVF9WQUxVRSxcclxuICBFVEgsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xyXG5cclxuY29uc3QgU2VsZWN0b3IgPSAoeyBkZWZhdWx0VmFsdWUsIGlnbm9yZVZhbHVlLCBzZXRUb2tlbiwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IG1lbnUgPSBbXHJcbiAgICB7IGtleTogRVRILCBuYW1lOiBFVEggfSxcclxuICAgIHsga2V5OiBDT0lOXzEsIG5hbWU6IENPSU5fMSB9LFxyXG4gICAgeyBrZXk6IENPSU5fMiwgbmFtZTogQ09JTl8yIH0sXHJcbiAgICB7IGtleTogQ09JTl8zLCBuYW1lOiBDT0lOXzMgfSxcclxuICAgIHsga2V5OiBDT0lOXzQsIG5hbWU6IENPSU5fNCB9LFxyXG4gICAgeyBrZXk6IENPSU5fNSwgbmFtZTogQ09JTl81IH0sXHJcbiAgICB7IGtleTogQ09JTl82LCBuYW1lOiBDT0lOXzYgfSxcclxuICAgIHsga2V5OiBDT0lOXzcsIG5hbWU6IENPSU5fNyB9LFxyXG4gICAgeyBrZXk6IENPSU5fOCwgbmFtZTogQ09JTl84IH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21lbnVJdGVtLCBzZXRNZW51SXRlbV0gPSB1c2VTdGF0ZShnZXRGaWx0ZXJlZEl0ZW1zKGlnbm9yZVZhbHVlKSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpIHtcclxuICAgIHJldHVybiBtZW51LmZpbHRlcigoaXQpKVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yO1xyXG4iXSwibmFtZXMiOlsiRHJvcGRvd24iLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ09JTl8xIiwiQ09JTl8yIiwiQ09JTl8zIiwiQ09JTl80IiwiQ09JTl81IiwiQ09JTl82IiwiQ09JTl83IiwiQ09JTl84IiwiREVGQVVMVF9WQUxVRSIsIkVUSCIsIlNlbGVjdG9yIiwiZGVmYXVsdFZhbHVlIiwiaWdub3JlVmFsdWUiLCJzZXRUb2tlbiIsImlkIiwiZ2V0RmlsdGVyZWRJdGVtcyIsIm1lbnUiLCJmaWx0ZXIiLCJpdCIsImtleSIsIm5hbWUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJtZW51SXRlbSIsInNldE1lbnVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});