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

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_cointeiner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cointeiner */ \"./components/cointeiner.js\");\nvar _this = undefined;\n\n\n\nvar Users = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"list-group\",\n        children: props.users.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-group-item list-group-item-action\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            user.first_name,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\components\\\\User.js\",\n                        lineNumber: 13,\n                        columnNumber: 12\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"EMAIL:\",\n                            user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\components\\\\User.js\",\n                        lineNumber: 14,\n                        columnNumber: 12\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\components\\\\User.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\components\\\\User.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTZCO0FBQ29CO0FBRWpELElBQU1FLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUk7SUFDeEIscUJBRUksOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFDLFlBQVk7a0JBRXRCRixLQUFLLENBQUNHLEtBQUssQ0FBQ0MsR0FBRyxDQUFFQyxTQUFBQSxJQUFJO2lDQUV6Qiw4REFBQ0MsSUFBRTtnQkFBQ0osU0FBUyxFQUFDLHdDQUF3Qzs7a0NBRS9DLDhEQUFDSyxHQUFDOzs0QkFBRUYsSUFBSSxDQUFDRyxVQUFVOzRCQUFDLEdBQUM7Ozs7Ozs2QkFBSTtrQ0FDekIsOERBQUNELEdBQUM7OzRCQUFDLFFBQU07NEJBQUNGLElBQUksQ0FBQ0ksS0FBSzs7Ozs7OzZCQUFLOzs7Ozs7cUJBRXZCO1NBQ0osQ0FBQzs7Ozs7YUFFRCxDQUdSO0NBRUE7QUFwQktWLEtBQUFBLEtBQUs7QUFzQlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXIuanM/ZDZmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29pbnRlaW5lclwiO1xyXG5cclxuY29uc3QgVXNlcnMgPSAocHJvcHMpID0+eyBcclxucmV0dXJuIChcclxuXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPiAgXHJcbiAgICAgICB7ICBcclxuICAgICAgICBwcm9wcy51c2Vycy5tYXAgKHVzZXIgPT4gKFxyXG4gICAgXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8cD57dXNlci5maXJzdF9uYW1lfSA8L3A+XHJcbiAgICAgICAgICAgPHA+RU1BSUw6e3VzZXIuZW1haWx9PC9wPiAgICAgIFxyXG5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpXHJcbn1cclxuICAgIDwvdWw+XHJcbiAgICBcclxuXHJcbilcclxuXHJcbn1cclxuICAgICAgICBcclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sIm5hbWVzIjpbIkhlYWQiLCJDb250YWluZXIiLCJVc2VycyIsInByb3BzIiwidWwiLCJjbGFzc05hbWUiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJsaSIsInAiLCJmaXJzdF9uYW1lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/User.js\n"));

/***/ })

});