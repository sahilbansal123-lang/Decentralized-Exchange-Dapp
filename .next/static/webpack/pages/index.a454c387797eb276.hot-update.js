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

/***/ "./utils/contract.js":
/*!***************************!*\
  !*** ./utils/contract.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contract\": function() { return /* binding */ contract; },\n/* harmony export */   \"tokenContract\": function() { return /* binding */ tokenContract; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_CustomDEX_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CustomDEX.json */ \"./utils/CustomDEX.json\");\n/* harmony import */ var _utils_CustomToken_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CustomToken.json */ \"./utils/CustomToken.json\");\n\n\n\n\n\nvar tokenContract = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(address) {\n        var provider, ethereum, signer, contractReader;\n        return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                    ethereum = window.ethereum;\n                    if (!ethereum) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    signer = provider.getSigner();\n                    contractReader = new ethereum.contract(address, _utils_CustomToken_json__WEBPACK_IMPORTED_MODULE_2__.abi, signer);\n                    return _ctx.abrupt(\"return\", contractReader);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function tokenContract(address) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar contract = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, ethereum, signer, contractReader;\n        return C_Users_Sahil_Dropbox_PC_Desktop_ALL_IN_ONE_Blockchain_Tutorials_Blockchain_projects_TokenSwapping_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n                    ethereum = window.ethereum;\n                    if (!ethereum) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    signer = provider.getSigner();\n                    contractReader = new ethereum.contract(\"0x1776893d9973262154d0b18C27ceeeFc6865bA47\", _utils_CustomDEX_json__WEBPACK_IMPORTED_MODULE_1__.abi, signer);\n                    return _ctx.abrupt(\"return\", contractReader);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function contract() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb250cmFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFnQztBQUNtQjtBQUNJO0FBRWhELElBQU1HLGFBQWE7ZUFBRyxtVEFBT0MsT0FBTyxFQUFLO1lBQ3hDQyxRQUFRLEVBQ05DLFFBQVEsRUFHUkMsTUFBTSxFQUVOQyxjQUFjOzs7O29CQU5oQkgsUUFBUSxHQUFHLElBQUlMLGlFQUE2QixDQUFDVyxNQUFNLENBQUNMLFFBQVEsQ0FBQyxDQUFDO29CQUM5RCxRQUFVLEdBQUtLLE1BQU0sQ0FBbkJMLFFBQVEsQ0FBWTt3QkFFeEJBLENBQUFBLFFBQVE7Ozs7b0JBQ0pDLE1BQU0sR0FBR0YsUUFBUSxDQUFDTyxTQUFTLEVBQUUsQ0FBQztvQkFFOUJKLGNBQWMsR0FBRyxJQUFJRixRQUFRLENBQUNPLFFBQVEsQ0FDMUNULE9BQU8sRUFDUEYsd0RBQWtCLEVBQ2xCSyxNQUFNLENBQ1AsQ0FBQztpREFFS0MsY0FBYzs7Ozs7O0tBRXhCO29CQWZZTCxhQUFhLENBQVVDLE9BQU87OztHQWUxQyxDQUFDO0FBRUssSUFBTVMsUUFBUTtlQUFHLHFUQUFZO1lBQzVCUixRQUFRLEVBQ05DLFFBQVEsRUFHUkMsTUFBTSxFQUVOQyxjQUFjOzs7O29CQU5oQkgsUUFBUSxHQUFHLElBQUlMLGlFQUE2QixDQUFDVyxNQUFNLENBQUNMLFFBQVEsQ0FBQyxDQUFDO29CQUM5RCxRQUFVLEdBQUtLLE1BQU0sQ0FBbkJMLFFBQVEsQ0FBWTt3QkFFeEJBLENBQUFBLFFBQVE7Ozs7b0JBQ0pDLE1BQU0sR0FBR0YsUUFBUSxDQUFDTyxTQUFTLEVBQUUsQ0FBQztvQkFFOUJKLGNBQWMsR0FBRyxJQUFJRixRQUFRLENBQUNPLFFBQVEsQ0FDMUMsNENBQTRDLEVBQzVDWixzREFBZ0IsRUFDaEJNLE1BQU0sQ0FDUCxDQUFDO2lEQUVLQyxjQUFjOzs7Ozs7S0FFeEI7b0JBZllLLFFBQVE7OztHQWVwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2NvbnRyYWN0LmpzPzg5YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgQ3VzdG9tREVYQUJJIGZyb20gXCIuLi91dGlscy9DdXN0b21ERVguanNvblwiO1xyXG5pbXBvcnQgQ3VzdG9tVG9rZW5BQkkgZnJvbSBcIi4uL3V0aWxzL0N1c3RvbVRva2VuLmpzb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2tlbkNvbnRyYWN0ID0gYXN5bmMgKGFkZHJlc3MpID0+IHtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgaWYgKGV0aGVyZXVtKSB7XHJcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuXHJcbiAgICBjb25zdCBjb250cmFjdFJlYWRlciA9IG5ldyBldGhlcmV1bS5jb250cmFjdChcclxuICAgICAgYWRkcmVzcyxcclxuICAgICAgQ3VzdG9tVG9rZW5BQkkuYWJpLFxyXG4gICAgICBzaWduZXJcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRyYWN0UmVhZGVyO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cmFjdCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xyXG4gIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgaWYgKGV0aGVyZXVtKSB7XHJcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuXHJcbiAgICBjb25zdCBjb250cmFjdFJlYWRlciA9IG5ldyBldGhlcmV1bS5jb250cmFjdChcclxuICAgICAgXCIweDE3NzY4OTNkOTk3MzI2MjE1NGQwYjE4QzI3Y2VlZUZjNjg2NWJBNDdcIixcclxuICAgICAgQ3VzdG9tREVYQUJJLmFiaSxcclxuICAgICAgc2lnbmVyXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBjb250cmFjdFJlYWRlcjtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJDdXN0b21ERVhBQkkiLCJDdXN0b21Ub2tlbkFCSSIsInRva2VuQ29udHJhY3QiLCJhZGRyZXNzIiwicHJvdmlkZXIiLCJldGhlcmV1bSIsInNpZ25lciIsImNvbnRyYWN0UmVhZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJhYmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/contract.js\n"));

/***/ })

});