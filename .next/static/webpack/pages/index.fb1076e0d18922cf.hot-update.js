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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {\n        return menu.filter(function(item) {\n            return item[\"key\"] !== ignoreValue;\n        });\n    };\n    _s();\n    var menu = [\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getFilteredItems(ignoreValue)), menuItem = ref1[0], setMenuItem = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedItem(defaultValue);\n    }, [\n        defaultValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMenuItem(getFilteredItems(ignoreValue));\n    }, [\n        ignoreValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Button, {\n            children: [\n                \"css=\",\n                {\n                    backgroun: backgroun\n                }\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Selector, \"KJwGDZDNgOUOTlfsHdijX8cURsU=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBNkM7QUFDTTtBQVl2Qjs7QUFFNUIsSUFBTWMsUUFBUSxHQUFHLGdCQUFpRDtRQUE5Q0MsWUFBWSxTQUFaQSxZQUFZLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsRUFBRSxTQUFGQSxFQUFFO1FBZ0JoREMsZ0JBQWdCLEdBQXpCLFNBQVNBLGdCQUFnQixDQUFDSCxXQUFXLEVBQUU7UUFDckMsT0FBT0ksSUFBSSxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsSUFBSTttQkFBS0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLTixXQUFXO1NBQUEsQ0FBQyxDQUFDO0tBQzNEOztJQWpCRCxJQUFNSSxJQUFJLEdBQUc7UUFDWDtZQUFFRyxHQUFHLEVBQUVWLGlEQUFHO1lBQUVXLElBQUksRUFBRVgsaURBQUc7U0FBRTtRQUN2QjtZQUFFVSxHQUFHLEVBQUVuQixvREFBTTtZQUFFb0IsSUFBSSxFQUFFcEIsb0RBQU07U0FBRTtRQUM3QjtZQUFFbUIsR0FBRyxFQUFFbEIsb0RBQU07WUFBRW1CLElBQUksRUFBRW5CLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWtCLEdBQUcsRUFBRWpCLG9EQUFNO1lBQUVrQixJQUFJLEVBQUVsQixvREFBTTtTQUFFO1FBQzdCO1lBQUVpQixHQUFHLEVBQUVoQixvREFBTTtZQUFFaUIsSUFBSSxFQUFFakIsb0RBQU07U0FBRTtRQUM3QjtZQUFFZ0IsR0FBRyxFQUFFZixvREFBTTtZQUFFZ0IsSUFBSSxFQUFFaEIsb0RBQU07U0FBRTtRQUM3QjtZQUFFZSxHQUFHLEVBQUVkLG9EQUFNO1lBQUVlLElBQUksRUFBRWYsb0RBQU07U0FBRTtRQUM3QjtZQUFFYyxHQUFHLEVBQUViLG9EQUFNO1lBQUVjLElBQUksRUFBRWQsb0RBQU07U0FBRTtRQUM3QjtZQUFFYSxHQUFHLEVBQUVaLG9EQUFNO1lBQUVhLElBQUksRUFBRWIsb0RBQU07U0FBRTtLQUM5QjtJQUVELElBQXdDVCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0N1QixZQUFZLEdBQXFCdkIsR0FBVSxHQUEvQixFQUFFd0IsZUFBZSxHQUFJeEIsR0FBVSxHQUFkO0lBQ3BDLElBQWdDQSxJQUF1QyxHQUF2Q0EsK0NBQVEsQ0FBQ2lCLGdCQUFnQixDQUFDSCxXQUFXLENBQUMsQ0FBQyxFQUFoRVcsUUFBUSxHQUFpQnpCLElBQXVDLEdBQXhELEVBQUUwQixXQUFXLEdBQUkxQixJQUF1QyxHQUEzQztJQU01QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2R1QixlQUFlLENBQUNYLFlBQVksQ0FBQyxDQUFDO0tBQy9CLEVBQUU7UUFBQ0EsWUFBWTtLQUFDLENBQUMsQ0FBQztJQUVuQlosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2R5QixXQUFXLENBQUNULGdCQUFnQixDQUFDSCxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQzVDLEVBQUU7UUFBQ0EsV0FBVztLQUFDLENBQUMsQ0FBQztJQUVsQixxQkFDRSw4REFBQ2hCLHVEQUFRO2tCQUNQLDRFQUFDQSw4REFBZTs7Z0JBQUMsTUFDWDtnQkFBQztvQkFDSDhCLFNBQVMsRUFBVEEsU0FBUztpQkFDVjs7Ozs7O2lCQUNlOzs7OzthQUNULENBQ1o7Q0FDRjtHQXJDS2hCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXVDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VsZWN0b3IuanM/Nzc1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENPSU5fMSxcclxuICBDT0lOXzIsXHJcbiAgQ09JTl8zLFxyXG4gIENPSU5fNCxcclxuICBDT0lOXzUsXHJcbiAgQ09JTl82LFxyXG4gIENPSU5fNyxcclxuICBDT0lOXzgsXHJcbiAgREVGQVVMVF9WQUxVRSxcclxuICBFVEgsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xyXG5cclxuY29uc3QgU2VsZWN0b3IgPSAoeyBkZWZhdWx0VmFsdWUsIGlnbm9yZVZhbHVlLCBzZXRUb2tlbiwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IG1lbnUgPSBbXHJcbiAgICB7IGtleTogRVRILCBuYW1lOiBFVEggfSxcclxuICAgIHsga2V5OiBDT0lOXzEsIG5hbWU6IENPSU5fMSB9LFxyXG4gICAgeyBrZXk6IENPSU5fMiwgbmFtZTogQ09JTl8yIH0sXHJcbiAgICB7IGtleTogQ09JTl8zLCBuYW1lOiBDT0lOXzMgfSxcclxuICAgIHsga2V5OiBDT0lOXzQsIG5hbWU6IENPSU5fNCB9LFxyXG4gICAgeyBrZXk6IENPSU5fNSwgbmFtZTogQ09JTl81IH0sXHJcbiAgICB7IGtleTogQ09JTl82LCBuYW1lOiBDT0lOXzYgfSxcclxuICAgIHsga2V5OiBDT0lOXzcsIG5hbWU6IENPSU5fNyB9LFxyXG4gICAgeyBrZXk6IENPSU5fOCwgbmFtZTogQ09JTl84IH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21lbnVJdGVtLCBzZXRNZW51SXRlbV0gPSB1c2VTdGF0ZShnZXRGaWx0ZXJlZEl0ZW1zKGlnbm9yZVZhbHVlKSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpIHtcclxuICAgIHJldHVybiBtZW51LmZpbHRlcigoaXRlbSkgPT4gaXRlbVtcImtleVwiXSAhPT0gaWdub3JlVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkSXRlbShkZWZhdWx0VmFsdWUpO1xyXG4gIH0sIFtkZWZhdWx0VmFsdWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE1lbnVJdGVtKGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpKTtcclxuICB9LCBbaWdub3JlVmFsdWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bj5cclxuICAgICAgPERyb3Bkb3duLkJ1dHRvbj5cclxuICAgICAgICBjc3M9e3tcclxuICAgICAgICAgIGJhY2tncm91blxyXG4gICAgICAgIH19XHJcbiAgICAgIDwvRHJvcGRvd24uQnV0dG9uPlxyXG4gICAgPC9Ecm9wZG93bj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjtcclxuIl0sIm5hbWVzIjpbIkRyb3Bkb3duIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNPSU5fMSIsIkNPSU5fMiIsIkNPSU5fMyIsIkNPSU5fNCIsIkNPSU5fNSIsIkNPSU5fNiIsIkNPSU5fNyIsIkNPSU5fOCIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJTZWxlY3RvciIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJpZCIsImdldEZpbHRlcmVkSXRlbXMiLCJtZW51IiwiZmlsdGVyIiwiaXRlbSIsImtleSIsIm5hbWUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJtZW51SXRlbSIsInNldE1lbnVJdGVtIiwiQnV0dG9uIiwiYmFja2dyb3VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ }),

/***/ "./components/SwapField.js":
/*!*********************************!*\
  !*** ./components/SwapField.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Selector */ \"./components/Selector.js\");\nvar _this = undefined;\n\n\n\nvar SwapField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = function(param, inputRef) {\n    var obj = param.obj;\n    var getInputClassname = function getInputClassname() {\n        var className = \"w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent\";\n        return className;\n    };\n    var id = obj.id, _value = obj.value, value = _value === void 0 ? \"\" : _value, setValue = obj.setValue, defaultValue = obj.defaultValue, setToken = obj.setToken, ignoreValue = obj.ignoreValue;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: inputRef,\n                className: getInputClassname(),\n                type: \"number\",\n                value: value,\n                placeholder: \"0.0\",\n                onChange: function(e) {\n                    setValue(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapField.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Selector__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: id,\n                setToken: setToken,\n                defaultValue: defaultValue,\n                ignoreValue: ignoreValue\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapField.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\SwapField.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n});\n_c1 = SwapField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapField);\nvar _c, _c1;\n$RefreshReg$(_c, \"SwapField$React.forwardRef\");\n$RefreshReg$(_c1, \"SwapField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBGaWVsZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDUTtBQUVsQyxJQUFNRSxTQUFTLGlCQUFHRix1REFBZ0IsQ0FBQyxxQkFBVUksUUFBUSxFQUFLO1FBQXBCQyxHQUFHLFNBQUhBLEdBQUc7UUF5QjlCQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCLEdBQUc7UUFDM0IsSUFBSUMsU0FBUyxHQUNYLHNFQUFzRTtRQUN4RSxPQUFPQSxTQUFTLENBQUM7S0FDbEI7SUE1QkQsSUFBUUMsRUFBRSxHQUFnRUgsR0FBRyxDQUFyRUcsRUFBRSxXQUFnRUgsR0FBRyxDQUFqRUksS0FBSyxFQUFMQSxLQUFLLHVCQUFHLEVBQUUsV0FBRUMsUUFBUSxHQUEwQ0wsR0FBRyxDQUFyREssUUFBUSxFQUFFQyxZQUFZLEdBQTRCTixHQUFHLENBQTNDTSxZQUFZLEVBQUVDLFFBQVEsR0FBa0JQLEdBQUcsQ0FBN0JPLFFBQVEsRUFBRUMsV0FBVyxHQUFLUixHQUFHLENBQW5CUSxXQUFXO0lBRXJFLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNQLFNBQVMsRUFBQyw4QkFBOEI7OzBCQUMzQyw4REFBQ1EsT0FBSztnQkFDSkMsR0FBRyxFQUFFWixRQUFRO2dCQUNiRyxTQUFTLEVBQUVELGlCQUFpQixFQUFFO2dCQUM5QlcsSUFBSSxFQUFFLFFBQVE7Z0JBQ2RSLEtBQUssRUFBRUEsS0FBSztnQkFDWlMsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLO29CQUNmVixRQUFRLENBQUNVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDWixLQUFLLENBQUMsQ0FBQztpQkFDMUI7Ozs7O3FCQUNEOzBCQUVGLDhEQUFDUixpREFBUTtnQkFDUE8sRUFBRSxFQUFFQSxFQUFFO2dCQUNOSSxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCRCxZQUFZLEVBQUVBLFlBQVk7Z0JBQzFCRSxXQUFXLEVBQUVBLFdBQVc7Ozs7O3FCQUN4Qjs7Ozs7O2FBQ0UsQ0FDTjtDQU9ILENBQUM7O0FBRUYsK0RBQWVYLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N3YXBGaWVsZC5qcz9lYjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcblxyXG5jb25zdCBTd2FwRmllbGQgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IG9iaiB9LCBpbnB1dFJlZikgPT4ge1xyXG4gIGNvbnN0IHsgaWQsIHZhbHVlID0gXCJcIiwgc2V0VmFsdWUsIGRlZmF1bHRWYWx1ZSwgc2V0VG9rZW4sIGlnbm9yZVZhbHVlIH0gPSBvYmo7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQteGxcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICBjbGFzc05hbWU9e2dldElucHV0Q2xhc3NuYW1lKCl9XHJcbiAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e1wiMC4wXCJ9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBzZXRUb2tlbj17c2V0VG9rZW59XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XHJcbiAgICAgICAgaWdub3JlVmFsdWU9e2lnbm9yZVZhbHVlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0SW5wdXRDbGFzc25hbWUoKSB7XHJcbiAgICBsZXQgY2xhc3NOYW1lID1cclxuICAgICAgXCJ3LWZ1bGwgb3V0bGluZS1ub25lIGgtOCBweC0yIGFwcGVhcmFuY2Utbm9uZSB0ZXh0LTN4bCBiZy10cmFuc3BhcmVudFwiO1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dhcEZpZWxkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTZWxlY3RvciIsIlN3YXBGaWVsZCIsImZvcndhcmRSZWYiLCJpbnB1dFJlZiIsIm9iaiIsImdldElucHV0Q2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwic2V0VG9rZW4iLCJpZ25vcmVWYWx1ZSIsImRpdiIsImlucHV0IiwicmVmIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapField.js\n"));

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": function() { return /* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"FaceBook\": function() { return /* reexport safe */ _SVG_Facebook__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; },\n/* harmony export */   \"Footer\": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"Header\": function() { return /* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   \"HeroSection\": function() { return /* reexport safe */ _HeroSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   \"Insta\": function() { return /* reexport safe */ _SVG_Insta__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; },\n/* harmony export */   \"Logo\": function() { return /* reexport safe */ _SVG_Logo__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; },\n/* harmony export */   \"Menu\": function() { return /* reexport safe */ _SVG_Menu__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; },\n/* harmony export */   \"Selector\": function() { return /* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   \"SingleCard\": function() { return /* reexport safe */ _SingleCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; },\n/* harmony export */   \"SwapComponent\": function() { return /* reexport safe */ _SwapComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   \"SwapField\": function() { return /* reexport safe */ _SwapField__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   \"Table\": function() { return /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   \"TokenBalance\": function() { return /* reexport safe */ _TokenBalance__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; },\n/* harmony export */   \"TransactionStatus\": function() { return /* reexport safe */ _TransactionStatus__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; },\n/* harmony export */   \"Twitter\": function() { return /* reexport safe */ _SVG_Twitter__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./components/Card.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroSection */ \"./components/HeroSection.js\");\n/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Selector */ \"./components/Selector.js\");\n/* harmony import */ var _SingleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingleCard */ \"./components/SingleCard.js\");\n/* harmony import */ var _SwapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwapComponent */ \"./components/SwapComponent.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Table */ \"./components/Table.js\");\n/* harmony import */ var _TokenBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TokenBalance */ \"./components/TokenBalance.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var _SVG_Facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SVG/Facebook */ \"./components/SVG/Facebook.js\");\n/* harmony import */ var _SVG_Insta__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SVG/Insta */ \"./components/SVG/Insta.js\");\n/* harmony import */ var _SVG_Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SVG/Logo */ \"./components/SVG/Logo.js\");\n/* harmony import */ var _SVG_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SVG/Menu */ \"./components/SVG/Menu.js\");\n/* harmony import */ var _SVG_Twitter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SVG/Twitter */ \"./components/SVG/Twitter.js\");\n\n\n\n\n\n\n\n\n\n\n\n// SVG ICONS\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0k7QUFDQTtBQUNVO0FBQ047QUFDSTtBQUNNO0FBQ1I7QUFDUjtBQUNjO0FBQ1U7QUFDcEQsWUFBWTtBQUMwQjtBQUNOO0FBQ0Y7QUFDQTtBQUNNO0FBbUJsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4LmpzPzUwZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIi4vSGVyb1NlY3Rpb25cIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCBTaW5nbGVDYXJkIGZyb20gXCIuL1NpbmdsZUNhcmRcIjtcclxuaW1wb3J0IFN3YXBDb21wb25lbnQgZnJvbSBcIi4vU3dhcENvbXBvbmVudFwiO1xyXG5pbXBvcnQgU3dhcEZpZWxkIGZyb20gXCIuL1N3YXBGaWVsZFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vVGFibGVcIjtcclxuaW1wb3J0IFRva2VuQmFsYW5jZSBmcm9tIFwiLi9Ub2tlbkJhbGFuY2VcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcbi8vIFNWRyBJQ09OU1xyXG5pbXBvcnQgRmFjZUJvb2sgZnJvbSBcIi4vU1ZHL0ZhY2Vib29rXCI7XHJcbmltcG9ydCBJbnN0YSBmcm9tIFwiLi9TVkcvSW5zdGFcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vU1ZHL0xvZ29cIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vU1ZHL01lbnVcIjtcclxuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4vU1ZHL1R3aXR0ZXJcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ2FyZCxcclxuICBGb290ZXIsXHJcbiAgSGVhZGVyLFxyXG4gIEhlcm9TZWN0aW9uLFxyXG4gIFNlbGVjdG9yLFxyXG4gIFNpbmdsZUNhcmQsXHJcbiAgU3dhcENvbXBvbmVudCxcclxuICBTd2FwRmllbGQsXHJcbiAgVGFibGUsXHJcbiAgVG9rZW5CYWxhbmNlLFxyXG4gIFRyYW5zYWN0aW9uU3RhdHVzLFxyXG4gIEZhY2VCb29rLFxyXG4gIEluc3RhLFxyXG4gIExvZ28sXHJcbiAgTWVudSxcclxuICBUd2l0dGVyLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIkZvb3RlciIsIkhlYWRlciIsIkhlcm9TZWN0aW9uIiwiU2VsZWN0b3IiLCJTaW5nbGVDYXJkIiwiU3dhcENvbXBvbmVudCIsIlN3YXBGaWVsZCIsIlRhYmxlIiwiVG9rZW5CYWxhbmNlIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJGYWNlQm9vayIsIkluc3RhIiwiTG9nbyIsIk1lbnUiLCJUd2l0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});