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

/***/ "./components/SwapField.js":
/*!*********************************!*\
  !*** ./components/SwapField.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Selector */ \"./components/Selector.js\");\nvar _this = undefined;\n\n\n\nvar SwapField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = function(param, inputRef) {\n    var obj = param.obj;\n    var getInputClassname = function getInputClassname() {\n        var className = \"w-full \";\n    };\n    var id = obj.id, _value = obj.value, value = _value === void 0 ? \"\" : _value, setValue = obj.setValue, defaultValue = obj.defaultValue, setToken = obj.setToken, ignoreValue = obj.ignoreValue;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: inputRef,\n                className: getInputClassname(),\n                type: \"number\",\n                placeholder: \"0.0\",\n                onChange: function(e) {\n                    setValue(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapField.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Selector__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: id,\n                setToken: setToken,\n                defaultValue: defaultValue,\n                ignoreValue: ignoreValue\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapField.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapField.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n});\n_c1 = SwapField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapField);\nvar _c, _c1;\n$RefreshReg$(_c, \"SwapField$React.forwardRef\");\n$RefreshReg$(_c1, \"SwapField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBGaWVsZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDUTtBQUVsQyxJQUFNRSxTQUFTLGlCQUFHRix1REFBZ0IsQ0FBQyxxQkFBVUksUUFBUSxFQUFLO1FBQXBCQyxHQUFHLFNBQUhBLEdBQUc7UUF3QjlCQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCLEdBQUc7UUFDM0IsSUFBSUMsU0FBUyxHQUNYLFNBQVM7S0FDWjtJQTFCRCxJQUFRQyxFQUFFLEdBQWdFSCxHQUFHLENBQXJFRyxFQUFFLFdBQWdFSCxHQUFHLENBQWpFSSxLQUFLLEVBQUxBLEtBQUssdUJBQUcsRUFBRSxXQUFFQyxRQUFRLEdBQTBDTCxHQUFHLENBQXJESyxRQUFRLEVBQUVDLFlBQVksR0FBNEJOLEdBQUcsQ0FBM0NNLFlBQVksRUFBRUMsUUFBUSxHQUFrQlAsR0FBRyxDQUE3Qk8sUUFBUSxFQUFFQyxXQUFXLEdBQUtSLEdBQUcsQ0FBbkJRLFdBQVc7SUFFckUscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ1AsU0FBUyxFQUFDLDhCQUE4Qjs7MEJBQzNDLDhEQUFDUSxPQUFLO2dCQUNOQyxHQUFHLEVBQUVaLFFBQVE7Z0JBQ2JHLFNBQVMsRUFBRUQsaUJBQWlCLEVBQUU7Z0JBQzlCVyxJQUFJLEVBQUUsUUFBUTtnQkFDZEMsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCQyxRQUFRLEVBQUVDLFNBQUFBLENBQUMsRUFBSTtvQkFDYlYsUUFBUSxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ1osS0FBSyxDQUFDO2lCQUN6Qjs7Ozs7cUJBQ0M7MEJBRUYsOERBQUNSLGlEQUFRO2dCQUNQTyxFQUFFLEVBQUVBLEVBQUU7Z0JBQ05JLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJELFlBQVksRUFBRUEsWUFBWTtnQkFDMUJFLFdBQVcsRUFBRUEsV0FBVzs7Ozs7cUJBQ3hCOzs7Ozs7YUFDRSxDQUNOO0NBTUgsQ0FBQzs7QUFFRiwrREFBZVgsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcEZpZWxkLmpzP2ViOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuXHJcbmNvbnN0IFN3YXBGaWVsZCA9IFJlYWN0LmZvcndhcmRSZWYoKHsgb2JqIH0sIGlucHV0UmVmKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgdmFsdWUgPSBcIlwiLCBzZXRWYWx1ZSwgZGVmYXVsdFZhbHVlLCBzZXRUb2tlbiwgaWdub3JlVmFsdWUgfSA9IG9iajtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC14bFwiPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgIHJlZj17aW5wdXRSZWZ9IFxyXG4gICAgICBjbGFzc05hbWU9e2dldElucHV0Q2xhc3NuYW1lKCl9XHJcbiAgICAgIHR5cGU9eydudW1iZXInfVxyXG4gICAgICBwbGFjZWhvbGRlcj17JzAuMCd9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBzZXRUb2tlbj17c2V0VG9rZW59XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XHJcbiAgICAgICAgaWdub3JlVmFsdWU9e2lnbm9yZVZhbHVlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SW5wdXRDbGFzc25hbWUoKSB7XHJcbiAgICBsZXQgY2xhc3NOYW1lID0gXHJcbiAgICAgICd3LWZ1bGwgJ1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2FwRmllbGQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlbGVjdG9yIiwiU3dhcEZpZWxkIiwiZm9yd2FyZFJlZiIsImlucHV0UmVmIiwib2JqIiwiZ2V0SW5wdXRDbGFzc25hbWUiLCJjbGFzc05hbWUiLCJpZCIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJzZXRUb2tlbiIsImlnbm9yZVZhbHVlIiwiZGl2IiwiaW5wdXQiLCJyZWYiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SwapField.js\n"));

/***/ })

});