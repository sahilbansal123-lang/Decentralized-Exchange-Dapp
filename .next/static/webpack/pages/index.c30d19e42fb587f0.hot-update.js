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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {\n        return menu.filter(function(item) {\n            return item[\"key\"] !== ignoreValue;\n        });\n    };\n    _s();\n    var menu = [\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getFilteredItems(ignoreValue)), menuItem = ref1[0], setMenuItem = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedItem(defaultValue);\n    }, [\n        defaultValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMenuItem(getFilteredItems(ignoreValue));\n    }, [\n        ignoreValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Button, {\n                css: {\n                    backgroundColor: selectedItem === _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VALUE ? \"#7765F3\" : \"#2c2ff36\"\n                },\n                children: selectedItem\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Menu, {\n                \"aria-label\": \"Dynamic Actions\",\n                items: menuItem,\n                onAction: function(key) {\n                    setSelectedItem(key);\n                    setToken();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sahil\\\\Dropbox\\\\PC\\\\Desktop\\\\ALL-IN-ONE\\\\Blockchain Tutorials\\\\Blockchain projects\\\\TokenSwapping\\\\components\\\\Selector.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Selector, \"KJwGDZDNgOUOTlfsHdijX8cURsU=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ09JTl8xLFxyXG4gIENPSU5fMixcclxuICBDT0lOXzMsXHJcbiAgQ09JTl80LFxyXG4gIENPSU5fNSxcclxuICBDT0lOXzYsXHJcbiAgQ09JTl83LFxyXG4gIENPSU5fOCxcclxuICBERUZBVUxUX1ZBTFVFLFxyXG4gIEVUSCxcclxufSBmcm9tIFwiLi4vdXRpbHMvc2FsZVRva2VuXCI7XHJcblxyXG5jb25zdCBTZWxlY3RvciA9ICh7IGRlZmF1bHRWYWx1ZSwgaWdub3JlVmFsdWUsIHNldFRva2VuLCBpZCB9KSA9PiB7XHJcbiAgY29uc3QgbWVudSA9IFtcclxuICAgIHsga2V5OiBFVEgsIG5hbWU6IEVUSCB9LFxyXG4gICAgeyBrZXk6IENPSU5fMSwgbmFtZTogQ09JTl8xIH0sXHJcbiAgICB7IGtleTogQ09JTl8yLCBuYW1lOiBDT0lOXzIgfSxcclxuICAgIHsga2V5OiBDT0lOXzMsIG5hbWU6IENPSU5fMyB9LFxyXG4gICAgeyBrZXk6IENPSU5fNCwgbmFtZTogQ09JTl80IH0sXHJcbiAgICB7IGtleTogQ09JTl81LCBuYW1lOiBDT0lOXzUgfSxcclxuICAgIHsga2V5OiBDT0lOXzYsIG5hbWU6IENPSU5fNiB9LFxyXG4gICAgeyBrZXk6IENPSU5fNywgbmFtZTogQ09JTl83IH0sXHJcbiAgICB7IGtleTogQ09JTl84LCBuYW1lOiBDT0lOXzggfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbWVudUl0ZW0sIHNldE1lbnVJdGVtXSA9IHVzZVN0YXRlKGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpKTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSkge1xyXG4gICAgcmV0dXJuIG1lbnUuZmlsdGVyKChpdGVtKSA9PiBpdGVtW1wia2V5XCJdICE9PSBpZ25vcmVWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJdGVtKGRlZmF1bHRWYWx1ZSk7XHJcbiAgfSwgW2RlZmF1bHRWYWx1ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TWVudUl0ZW0oZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSkpO1xyXG4gIH0sIFtpZ25vcmVWYWx1ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duPlxyXG4gICAgICA8RHJvcGRvd24uQnV0dG9uXHJcbiAgICAgICAgY3NzPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9PT0gREVGQVVMVF9WQUxVRSA/IFwiIzc3NjVGM1wiIDogXCIjMmMyZmYzNlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7c2VsZWN0ZWRJdGVtfVxyXG4gICAgICA8L0Ryb3Bkb3duLkJ1dHRvbj5cclxuICAgICAgPERyb3Bkb3duLk1lbnVcclxuICAgICAgICBhcmlhLWxhYmVsPVwiRHluYW1pYyBBY3Rpb25zXCJcclxuICAgICAgICBpdGVtcz17bWVudUl0ZW19XHJcbiAgICAgICAgb25BY3Rpb249eyhrZXkpID0+IHtcclxuICAgICAgICAgIHNldFNlbGVjdGVkSXRlbShrZXkpO1xyXG4gICAgICAgICAgc2V0VG9rZW4oKVxyXG4gICAgICAgIH19XHJcbiAgICAgID48L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICA8L0Ryb3Bkb3duPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjtcclxuIl0sIm5hbWVzIjpbIkRyb3Bkb3duIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNPSU5fMSIsIkNPSU5fMiIsIkNPSU5fMyIsIkNPSU5fNCIsIkNPSU5fNSIsIkNPSU5fNiIsIkNPSU5fNyIsIkNPSU5fOCIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJTZWxlY3RvciIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJpZCIsImdldEZpbHRlcmVkSXRlbXMiLCJtZW51IiwiZmlsdGVyIiwiaXRlbSIsImtleSIsIm5hbWUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJtZW51SXRlbSIsInNldE1lbnVJdGVtIiwiQnV0dG9uIiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwiTWVudSIsImFyaWEtbGFiZWwiLCJpdGVtcyIsIm9uQWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});