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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_HTMLHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HTMLHeader */ \"./pages/components/HTMLHeader.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar */ \"./pages/components/Navbar.js\");\n/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Note */ \"./pages/components/Note.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\t\\tquery {\\n\\t\\t\\tnotes {\\n\\t\\t\\t\\ttitle\\n\\t\\t\\t\\tcontent\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject())), loading = ref.loading, error = ref.error, data = ref.data;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n            lineNumber: 17,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HTMLHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 4\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 4\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"columns p-3\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: !loading ? data.notes.map(function(note, index) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: note.title,\n                        content: note.content,\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 7\n                        },\n                        __self: _this\n                    }, index);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    },\n                    __self: this\n                })\n            })\n        ]\n    }));\n}\n_s(Home, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFDRTtBQUNSO0FBQ0o7Ozs7Ozs7Ozs7Ozs7UUFHUyxDQU81Qzs7Ozs7Ozs7U0FSUUssSUFBSSxHQUFJLENBQUM7OztJQUNqQixHQUFHLENBQTRCSixHQU83QixHQVA2QkEsd0RBQVEsQ0FBQ0QsbURBQUcsc0JBQXJDTSxPQUFPLEdBQWtCTCxHQU83QixDQVBJSyxPQUFPLEVBQUVDLEtBQUssR0FBV04sR0FPN0IsQ0FQYU0sS0FBSyxFQUFFQyxJQUFJLEdBQUtQLEdBTzdCLENBUG9CTyxJQUFJO0lBUzFCLE1BQU0sdUVBQ0pDLENBQUc7Ozs7Ozs7O2lGQUNGUCw4REFBVTs7Ozs7Ozs7aUZBQ1ZDLDBEQUFNOzs7Ozs7OztpRkFFTk8sQ0FBSTtnQkFBQ0MsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7MkJBQzFCTCxPQUFPLEdBQ1JFLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLEtBQUs7a0NBQzFCLE1BQU1DLENBQUFBLHNEQUFBQSxDQUFMWix3REFBSTt3QkFBQ1ksS0FBSyxFQUFFRixJQUFJLENBQUNFLEtBQUs7d0JBQUVDLE9BQU8sRUFBRUgsSUFBSSxDQUFDRyxPQUFPOzs7Ozs7O3VCQUFPRixLQUFLOzBGQUV6REcsQ0FBQzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0dBeEJRYixJQUFJOztRQUNtQkosb0RBQVE7OztLQUQvQkksSUFBSTtBQTBCYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBIVE1MSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IVE1MSGVhZGVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgTm90ZSBmcm9tICcuL2NvbXBvbmVudHMvTm90ZSc7XG5cbmZ1bmN0aW9uIEhvbWUgKCkge1xuXHRsZXQgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoZ3FsYFxuXHRcdHF1ZXJ5IHtcblx0XHRcdG5vdGVzIHtcblx0XHRcdFx0dGl0bGVcblx0XHRcdFx0Y29udGVudFxuXHRcdFx0fVxuXHRcdH1cblx0YCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhUTUxIZWFkZXIgLz5cblx0XHRcdDxOYXZiYXIgLz5cblx0XHRcdFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29sdW1ucyBwLTNcIj5cblx0XHRcdFx0eyFsb2FkaW5nID9cblx0XHRcdFx0XHRkYXRhLm5vdGVzLm1hcCgobm90ZSwgaW5kZXgpID0+IFxuXHRcdFx0XHRcdFx0PE5vdGUgdGl0bGU9e25vdGUudGl0bGV9IGNvbnRlbnQ9e25vdGUuY29udGVudH0ga2V5PXtpbmRleH0gLz5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdDogPHA+PC9wPn1cblx0XHRcdDwvbWFpbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIkhUTUxIZWFkZXIiLCJOYXZiYXIiLCJOb3RlIiwiSG9tZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwibm90ZXMiLCJtYXAiLCJub3RlIiwiaW5kZXgiLCJ0aXRsZSIsImNvbnRlbnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});