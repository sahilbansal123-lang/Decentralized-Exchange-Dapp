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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {};\n    _s();\n    var menu = [\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.ETH,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), selectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getFilteredItems(ignoreValue)), menuItem = ref1[0], setMenuItem = ref1[1];\n};\n_s(Selector, \"WygqW5Q8gjLbQ4vtCelkct1tzkA=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBNkM7QUFDTTtBQVl2Qjs7QUFFNUIsSUFBTWMsUUFBUSxHQUFHLGdCQUFpRDtRQUE5Q0MsWUFBWSxTQUFaQSxZQUFZLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsRUFBRSxTQUFGQSxFQUFFO1FBZ0JoREMsZ0JBQWdCLEdBQXpCLFNBQVNBLGdCQUFnQixDQUFDSCxXQUFXLEVBQUUsRUFBRTs7SUFmekMsSUFBTUksSUFBSSxHQUFHO1FBQ1g7WUFBRUMsR0FBRyxFQUFFUixpREFBRztZQUFFUyxJQUFJLEVBQUVULGlEQUFHO1NBQUU7UUFDdkI7WUFBRVEsR0FBRyxFQUFFakIsb0RBQU07WUFBRWtCLElBQUksRUFBRWxCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWlCLEdBQUcsRUFBRWhCLG9EQUFNO1lBQUVpQixJQUFJLEVBQUVqQixvREFBTTtTQUFFO1FBQzdCO1lBQUVnQixHQUFHLEVBQUVmLG9EQUFNO1lBQUVnQixJQUFJLEVBQUVoQixvREFBTTtTQUFFO1FBQzdCO1lBQUVlLEdBQUcsRUFBRWQsb0RBQU07WUFBRWUsSUFBSSxFQUFFZixvREFBTTtTQUFFO1FBQzdCO1lBQUVjLEdBQUcsRUFBRWIsb0RBQU07WUFBRWMsSUFBSSxFQUFFZCxvREFBTTtTQUFFO1FBQzdCO1lBQUVhLEdBQUcsRUFBRVosb0RBQU07WUFBRWEsSUFBSSxFQUFFYixvREFBTTtTQUFFO1FBQzdCO1lBQUVZLEdBQUcsRUFBRVgsb0RBQU07WUFBRVksSUFBSSxFQUFFWixvREFBTTtTQUFFO1FBQzdCO1lBQUVXLEdBQUcsRUFBRVYsb0RBQU07WUFBRVcsSUFBSSxFQUFFWCxvREFBTTtTQUFFO0tBQzlCO0lBRUQsSUFBd0NULEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQ3FCLFlBQVksR0FBcUJyQixHQUFVLEdBQS9CLEVBQUVzQixlQUFlLEdBQUl0QixHQUFVLEdBQWQ7SUFDcEMsSUFBZ0NBLElBQXVDLEdBQXZDQSwrQ0FBUSxDQUFDaUIsZ0JBQWdCLENBQUNILFdBQVcsQ0FBQyxDQUFDLEVBQWhFUyxRQUFRLEdBQWlCdkIsSUFBdUMsR0FBeEQsRUFBRXdCLFdBQVcsR0FBSXhCLElBQXVDLEdBQTNDO0NBRzdCO0dBakJLWSxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtQmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzPzc3NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDT0lOXzEsXHJcbiAgQ09JTl8yLFxyXG4gIENPSU5fMyxcclxuICBDT0lOXzQsXHJcbiAgQ09JTl81LFxyXG4gIENPSU5fNixcclxuICBDT0lOXzcsXHJcbiAgQ09JTl84LFxyXG4gIERFRkFVTFRfVkFMVUUsXHJcbiAgRVRILFxyXG59IGZyb20gXCIuLi91dGlscy9zYWxlVG9rZW5cIjtcclxuXHJcbmNvbnN0IFNlbGVjdG9yID0gKHsgZGVmYXVsdFZhbHVlLCBpZ25vcmVWYWx1ZSwgc2V0VG9rZW4sIGlkIH0pID0+IHtcclxuICBjb25zdCBtZW51ID0gW1xyXG4gICAgeyBrZXk6IEVUSCwgbmFtZTogRVRIIH0sXHJcbiAgICB7IGtleTogQ09JTl8xLCBuYW1lOiBDT0lOXzEgfSxcclxuICAgIHsga2V5OiBDT0lOXzIsIG5hbWU6IENPSU5fMiB9LFxyXG4gICAgeyBrZXk6IENPSU5fMywgbmFtZTogQ09JTl8zIH0sXHJcbiAgICB7IGtleTogQ09JTl80LCBuYW1lOiBDT0lOXzQgfSxcclxuICAgIHsga2V5OiBDT0lOXzUsIG5hbWU6IENPSU5fNSB9LFxyXG4gICAgeyBrZXk6IENPSU5fNiwgbmFtZTogQ09JTl82IH0sXHJcbiAgICB7IGtleTogQ09JTl83LCBuYW1lOiBDT0lOXzcgfSxcclxuICAgIHsga2V5OiBDT0lOXzgsIG5hbWU6IENPSU5fOCB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFttZW51SXRlbSwgc2V0TWVudUl0ZW1dID0gdXNlU3RhdGUoZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSkpO1xyXG5cclxuICBmdW5jdGlvbiBnZXRGaWx0ZXJlZEl0ZW1zKGlnbm9yZVZhbHVlKSB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3I7XHJcbiJdLCJuYW1lcyI6WyJEcm9wZG93biIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDT0lOXzEiLCJDT0lOXzIiLCJDT0lOXzMiLCJDT0lOXzQiLCJDT0lOXzUiLCJDT0lOXzYiLCJDT0lOXzciLCJDT0lOXzgiLCJERUZBVUxUX1ZBTFVFIiwiRVRIIiwiU2VsZWN0b3IiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiaWQiLCJnZXRGaWx0ZXJlZEl0ZW1zIiwibWVudSIsImtleSIsIm5hbWUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJtZW51SXRlbSIsInNldE1lbnVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});