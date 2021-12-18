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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_HTMLHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HTMLHeader */ \"./pages/components/HTMLHeader.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ \"./pages/components/Navbar.js\");\n/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Note */ \"./pages/components/Note.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\t\\tquery {\\n\\t\\t\\tnotes {\\n\\t\\t\\t\\ttitle\\n\\t\\t\\t\\tcontent\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), notes = ref[0], setNotes = ref[1];\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject())), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!loading) {\n            setNotes(data.notes);\n        }\n    }, [\n        loading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n            lineNumber: 26,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HTMLHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 4\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setNotes: setNotes,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 4\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"columns p-3 is-multiline\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: notes.map(function(note, index) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Note__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        title: note.title,\n                        content: note.content,\n                        id: note.id,\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        },\n                        __self: _this\n                    });\n                })\n            })\n        ]\n    }));\n}\n_s(Home, \"UWthDkJ0DayYbc9QRApq+OJ57hU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNHO0FBQ0U7QUFDUjtBQUNKOzs7Ozs7Ozs7Ozs7O1FBS1MsQ0FPNUM7Ozs7Ozs7O1NBVlFPLElBQUksR0FBSSxDQUFDOzs7SUFDakIsR0FBRyxDQUFxQk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE5Qk8sS0FBSyxHQUFjUCxHQUFZLEtBQXhCUSxRQUFRLEdBQUlSLEdBQVk7SUFFcEMsR0FBRyxDQUE0QkUsSUFPN0IsR0FQNkJBLHdEQUFRLENBQUNELG1EQUFHLHNCQUFyQ1EsT0FBTyxHQUFrQlAsSUFPN0IsQ0FQSU8sT0FBTyxFQUFFQyxLQUFLLEdBQVdSLElBTzdCLENBUGFRLEtBQUssRUFBRUMsSUFBSSxHQUFLVCxJQU83QixDQVBvQlMsSUFBSTtJQVMxQlosZ0RBQVMsQ0FBQyxRQUNYLEdBRGlCLENBQUM7UUFDaEIsRUFBRSxHQUFHVSxPQUFPLEVBQUUsQ0FBQztZQUNkRCxRQUFRLENBQUNHLElBQUksQ0FBQ0osS0FBSztRQUNwQixDQUFDO0lBQ0YsQ0FBQyxFQUFFLENBQUNFO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBRVosTUFBTSx1RUFDSkcsQ0FBRzs7Ozs7Ozs7aUZBQ0ZULDhEQUFVOzs7Ozs7OztpRkFDVkMsMERBQU07Z0JBQUNJLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7aUZBRXpCSyxDQUFJO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMEI7Ozs7Ozs7MEJBQ3hDUCxLQUFLLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSztrQ0FDdEIsTUFBTUMsQ0FBQUEsc0RBQUFBLENBQUxiLHdEQUFJO3dCQUFDYSxLQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FBSzt3QkFBRUMsT0FBTyxFQUFFSCxJQUFJLENBQUNHLE9BQU87d0JBQUVDLEVBQUUsRUFBRUosSUFBSSxDQUFDSSxFQUFFOzs7Ozs7Ozs7Ozs7QUFLaEUsQ0FBQztHQTlCUWQsSUFBSTs7UUFHbUJKLG9EQUFROzs7S0FIL0JJLElBQUk7QUFnQ2IsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IEhUTUxIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hUTUxIZWFkZXInO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBOb3RlIGZyb20gJy4vY29tcG9uZW50cy9Ob3RlJztcblxuZnVuY3Rpb24gSG9tZSAoKSB7XG5cdGxldCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuXHRsZXQgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoZ3FsYFxuXHRcdHF1ZXJ5IHtcblx0XHRcdG5vdGVzIHtcblx0XHRcdFx0dGl0bGVcblx0XHRcdFx0Y29udGVudFxuXHRcdFx0fVxuXHRcdH1cblx0YCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIWxvYWRpbmcpIHtcblx0XHRcdHNldE5vdGVzKGRhdGEubm90ZXMpXG5cdFx0fVxuXHR9LCBbbG9hZGluZ10pXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhUTUxIZWFkZXIgLz5cblx0XHRcdDxOYXZiYXIgc2V0Tm90ZXM9e3NldE5vdGVzfSAvPlxuXHRcdFx0XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb2x1bW5zIHAtMyBpcy1tdWx0aWxpbmVcIj5cblx0XHRcdFx0e25vdGVzLm1hcCgobm90ZSwgaW5kZXgpID0+IFxuXHRcdFx0XHRcdDxOb3RlIHRpdGxlPXtub3RlLnRpdGxlfSBjb250ZW50PXtub3RlLmNvbnRlbnR9IGlkPXtub3RlLmlkfSAvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9tYWluPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ3FsIiwidXNlUXVlcnkiLCJIVE1MSGVhZGVyIiwiTmF2YmFyIiwiTm90ZSIsIkhvbWUiLCJub3RlcyIsInNldE5vdGVzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJtYXAiLCJub3RlIiwiaW5kZXgiLCJ0aXRsZSIsImNvbnRlbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});