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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_maximo_nextproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_maximo_nextproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_maximo_nextproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cointeiner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cointeiner */ \"./components/cointeiner.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/User */ \"./components/User.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar Index = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \" Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                users: props.users\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_cointeiner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\pages\\\\index.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\maximo\\\\nextproject\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, _this);\n};\n_c = Index;\nIndex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_maximo_nextproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, resJSON;\n        return C_Users_maximo_nextproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"https://reqres.in/api/users?page\");\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    resJSON = _ctx.sent;\n                    re;\n                    return _ctx.abrupt(\"return\", {\n                        users: data\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUE2QjtBQUNvQjtBQUNaO0FBQ0k7QUFFekMsSUFBTUksS0FBSyxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUVyQixxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNOLGtEQUFJOzBCQUNELDRFQUFDTyxPQUFLOzhCQUFDLE9BQUs7Ozs7O3lCQUFROzs7OztxQkFDakI7MEJBQ1gsOERBQUNKLHdEQUFLO2dCQUFDSyxLQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBSzs7Ozs7cUJBQUc7MEJBQzVCLDhEQUFDUCw4REFBUzswQkFFWiw0RUFBQ1EsSUFBRTs7Ozt5QkFFSTs7Ozs7cUJBRU87Ozs7OzthQUNOLENBQ1I7Q0FHQTtBQW5CQUwsS0FBQUEsS0FBSztBQW9CTkEsS0FBSyxDQUFDTSxlQUFlO2VBQUcsMk9BQU9DLEdBQUcsRUFBRztZQUM1QkMsR0FBRyxFQUNIQyxPQUFPOzs7OzsyQkFESVgsdURBQUssQ0FBQyxrQ0FBa0MsQ0FBQzs7b0JBQXBEVSxHQUFHLFlBQWlEOzsyQkFDckNBLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFOztvQkFBekJELE9BQU8sWUFBa0I7b0JBQy9CRSxFQUFFO2lEQUNJO3dCQUFDUCxLQUFLLEVBQUNRLElBQUk7cUJBQUM7Ozs7OztLQUt6QjtvQkFUbUNMLEdBQUc7OztHQVN0QyxDQUFDO0FBQ0YsK0RBQWVQLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29pbnRlaW5lclwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0ICBVc2VycyAgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlclwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHsgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+IEhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPFVzZXJzIHVzZXJzPXtwcm9wcy51c2Vyc30vPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcblxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9saT4gICBcclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKVxyXG5cclxuICAgIFxyXG4gICAgIH1cclxuICAgICBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KT0+e1xyXG4gICAgICAgIGNvbnN0IHJlcz0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycz9wYWdlJyk7XHJcbiAgICAgICAgY29uc3QgcmVzSlNPTj0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZVxyXG4gICAgICAgIHJldHVybnt1c2VyczpkYXRhfVxyXG5cclxuXHJcbiAgIFxyXG4gICAgXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sIm5hbWVzIjpbIkhlYWQiLCJDb250YWluZXIiLCJmZXRjaCIsIlVzZXJzIiwiSW5kZXgiLCJwcm9wcyIsImRpdiIsInRpdGxlIiwidXNlcnMiLCJsaSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsInJlc0pTT04iLCJqc29uIiwicmUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});