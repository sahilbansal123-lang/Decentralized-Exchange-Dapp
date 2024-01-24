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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {\n        return menu.filter(function(item) {\n            return item[\"key\"] !== ignoreValue;\n        });\n    };\n    _s();\n    var menu = [\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getFilteredItems(ignoreValue)), menuItem = ref1[0], setMenuItem = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedItem(defaultValue);\n    }, [\n        defaultValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMenuItem(getFilteredItems(ignoreValue));\n    }, [\n        ignoreValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Button, {\n                css: {\n                    backgroundColor: selectedItem === _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VALUE ? \"#7765F3\" : \"#2c2ff36\"\n                },\n                children: selectedItem\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Menu, {\n                \"aria-label\": \"Dynamic Actions\",\n                items: menuItem,\n                onAction: function(key) {\n                    setSelectedItem(key);\n                    setToken(key);\n                },\n                children: function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Item, {\n                        \"aria-label\": id,\n                        color: \"item.\"\n                    }, item.key, false, {\n                        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, _this);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Selector, \"KJwGDZDNgOUOTlfsHdijX8cURsU=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3FCQUNhOzs7Ozs7YUFDUCxDQUNYO0NBQ0g7R0F6REtULFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQTJEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VsZWN0b3IuanM/Nzc1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENPSU5fMSxcclxuICBDT0lOXzIsXHJcbiAgQ09JTl8zLFxyXG4gIENPSU5fNCxcclxuICBDT0lOXzUsXHJcbiAgQ09JTl82LFxyXG4gIENPSU5fNyxcclxuICBDT0lOXzgsXHJcbiAgREVGQVVMVF9WQUxVRSxcclxuICBFVEgsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xyXG5cclxuY29uc3QgU2VsZWN0b3IgPSAoeyBkZWZhdWx0VmFsdWUsIGlnbm9yZVZhbHVlLCBzZXRUb2tlbiwgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IG1lbnUgPSBbXHJcbiAgICB7IGtleTogRVRILCBuYW1lOiBFVEggfSxcclxuICAgIHsga2V5OiBDT0lOXzEsIG5hbWU6IENPSU5fMSB9LFxyXG4gICAgeyBrZXk6IENPSU5fMiwgbmFtZTogQ09JTl8yIH0sXHJcbiAgICB7IGtleTogQ09JTl8zLCBuYW1lOiBDT0lOXzMgfSxcclxuICAgIHsga2V5OiBDT0lOXzQsIG5hbWU6IENPSU5fNCB9LFxyXG4gICAgeyBrZXk6IENPSU5fNSwgbmFtZTogQ09JTl81IH0sXHJcbiAgICB7IGtleTogQ09JTl82LCBuYW1lOiBDT0lOXzYgfSxcclxuICAgIHsga2V5OiBDT0lOXzcsIG5hbWU6IENPSU5fNyB9LFxyXG4gICAgeyBrZXk6IENPSU5fOCwgbmFtZTogQ09JTl84IH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21lbnVJdGVtLCBzZXRNZW51SXRlbV0gPSB1c2VTdGF0ZShnZXRGaWx0ZXJlZEl0ZW1zKGlnbm9yZVZhbHVlKSk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpIHtcclxuICAgIHJldHVybiBtZW51LmZpbHRlcigoaXRlbSkgPT4gaXRlbVtcImtleVwiXSAhPT0gaWdub3JlVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkSXRlbShkZWZhdWx0VmFsdWUpO1xyXG4gIH0sIFtkZWZhdWx0VmFsdWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE1lbnVJdGVtKGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpKTtcclxuICB9LCBbaWdub3JlVmFsdWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93bj5cclxuICAgICAgPERyb3Bkb3duLkJ1dHRvblxyXG4gICAgICAgIGNzcz17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPT09IERFRkFVTFRfVkFMVUUgPyBcIiM3NzY1RjNcIiA6IFwiIzJjMmZmMzZcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3NlbGVjdGVkSXRlbX1cclxuICAgICAgPC9Ecm9wZG93bi5CdXR0b24+XHJcbiAgICAgIDxEcm9wZG93bi5NZW51XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkR5bmFtaWMgQWN0aW9uc1wiXHJcbiAgICAgICAgaXRlbXM9e21lbnVJdGVtfVxyXG4gICAgICAgIG9uQWN0aW9uPXsoa2V5KSA9PiB7XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgIHNldFRva2VuKGtleSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPERyb3Bkb3duLkl0ZW1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17aWR9XHJcbiAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XHJcbiAgICAgICAgICAgIGNvbG9yPVwiaXRlbS5cIlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA+PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgIDwvRHJvcGRvd24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yO1xyXG4iXSwibmFtZXMiOlsiRHJvcGRvd24iLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ09JTl8xIiwiQ09JTl8yIiwiQ09JTl8zIiwiQ09JTl80IiwiQ09JTl81IiwiQ09JTl82IiwiQ09JTl83IiwiQ09JTl84IiwiREVGQVVMVF9WQUxVRSIsIkVUSCIsIlNlbGVjdG9yIiwiZGVmYXVsdFZhbHVlIiwiaWdub3JlVmFsdWUiLCJzZXRUb2tlbiIsImlkIiwiZ2V0RmlsdGVyZWRJdGVtcyIsIm1lbnUiLCJmaWx0ZXIiLCJpdGVtIiwia2V5IiwibmFtZSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIm1lbnVJdGVtIiwic2V0TWVudUl0ZW0iLCJCdXR0b24iLCJjc3MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNZW51IiwiYXJpYS1sYWJlbCIsIml0ZW1zIiwib25BY3Rpb24iLCJJdGVtIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});