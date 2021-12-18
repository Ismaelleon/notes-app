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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_HTMLHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HTMLHeader */ \"./pages/components/HTMLHeader.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ \"./pages/components/Navbar.js\");\n/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Note */ \"./pages/components/Note.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\tquery {\\n\\t\\tnotes {\\n\\t\\t\\tid\\n\\t\\t\\ttitle\\n\\t\\t\\tcontent\\n\\t\\t}\\n\\t}\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\tmutation DeleteNote ($id: String!) {\\n\\t\\tdeleteNote (id: $id) {\\n\\t\\t\\tid\\n\\t\\t\\ttitle\\n\\t\\t\\tcontent\\n\\t\\t}\\n\\t}\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar GET_NOTES_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());\nvar DELETE_NOTE_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject1());\nfunction Home() {\n    var _this = this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), notes = ref[0], setNotes = ref[1];\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(GET_NOTES_QUERY), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(DELETE_NOTE_MUTATION), 1), deleteNote = ref2[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!loading && !error) {\n            setNotes(data.notes);\n            console.log(notes);\n        }\n    }, [\n        loading\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n            lineNumber: 41,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HTMLHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 4\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setNotes: setNotes,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 4\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"columns p-3 is-multiline\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: notes !== [] ? notes.map(function(note, index) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Note__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        title: note.title,\n                        content: note.content,\n                        id: note.id,\n                        setNotes: setNotes,\n                        deleteNote: deleteNote,\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 6\n                        },\n                        __self: _this\n                    }, note.id);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"No notes yet\"\n                })\n            })\n        ]\n    }));\n}\n_s1(Home, \"i0S1aPpDw9D/auzfmdZmEGTK89g=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNnQjtBQUNYO0FBQ1I7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFUixDQVE1Qjs7Ozs7Ozs7O1FBRWlDLENBUWpDOzs7Ozs7OztBQWxCQSxHQUFLLENBQUNRLGVBQWUsR0FBR04sbURBQUc7QUFVM0IsR0FBSyxDQUFDTyxvQkFBb0IsR0FBR1AsbURBQUc7U0FVdkJRLElBQUksR0FBSSxDQUFDOzs7SUFDakIsR0FBRyxDQUFxQlQsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE5QlUsS0FBSyxHQUFjVixHQUFZLEtBQXhCVyxRQUFRLEdBQUlYLEdBQVk7SUFFcEMsR0FBRyxDQUE0QkcsSUFBeUIsR0FBekJBLHdEQUFRLENBQUNJLGVBQWUsR0FBakRLLE9BQU8sR0FBa0JULElBQXlCLENBQWxEUyxPQUFPLEVBQUVDLEtBQUssR0FBV1YsSUFBeUIsQ0FBekNVLEtBQUssRUFBRUMsSUFBSSxHQUFLWCxJQUF5QixDQUFsQ1csSUFBSTtJQUMxQixHQUFHLENBQWdCWixJQUFpQyxrQkFBakNBLDJEQUFXLENBQUNNLG9CQUFvQixPQUE5Q08sVUFBVSxHQUFJYixJQUFpQztJQUVwREgsZ0RBQVMsQ0FBQyxRQUNYLEdBRGlCLENBQUM7UUFDaEIsRUFBRSxHQUFHYSxPQUFPLEtBQUtDLEtBQUssRUFBRSxDQUFDO1lBQ3hCRixRQUFRLENBQUNHLElBQUksQ0FBQ0osS0FBSztZQUNuQk0sT0FBTyxDQUFDQyxHQUFHLENBQUNQLEtBQUs7UUFDbEIsQ0FBQztJQUNGLENBQUMsRUFBRSxDQUFDRTtRQUFBQSxPQUFPO0lBQUEsQ0FBQztJQUVaLE1BQU0sdUVBQ0pNLENBQUc7Ozs7Ozs7O2lGQUNGZCw4REFBVTs7Ozs7Ozs7aUZBQ1ZDLDBEQUFNO2dCQUFDTSxRQUFRLEVBQUVBLFFBQVE7Ozs7Ozs7O2lGQUV6QlEsQ0FBSTtnQkFBQ0MsU0FBUyxFQUFDLENBQTBCOzs7Ozs7OzBCQUN4Q1YsS0FBSyxLQUFLLENBQUMsQ0FBQyxHQUFHQSxLQUFLLENBQUNXLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSztrQ0FDckMsTUFBTUMsQ0FBQUEsc0RBQUFBLENBQUxsQix3REFBSTt3QkFBQ2tCLEtBQUssRUFBRUYsSUFBSSxDQUFDRSxLQUFLO3dCQUFFQyxPQUFPLEVBQUVILElBQUksQ0FBQ0csT0FBTzt3QkFBRUMsRUFBRSxFQUFFSixJQUFJLENBQUNJLEVBQUU7d0JBQWdCZixRQUFRLEVBQUVBLFFBQVE7d0JBQUVJLFVBQVUsRUFBRUEsVUFBVTs7Ozs7Ozt1QkFBbkRPLElBQUksQ0FBQ0ksRUFBRTswRkFDckVDLENBQUM7Ozs7Ozs7OEJBQUMsQ0FBWTs7Ozs7QUFJdkIsQ0FBQztJQXpCUWxCLElBQUk7O1FBR21CTixvREFBUTtRQUNwQkQsdURBQVc7OztLQUp0Qk8sSUFBSTtBQTJCYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IEhUTUxIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hUTUxIZWFkZXInO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBOb3RlIGZyb20gJy4vY29tcG9uZW50cy9Ob3RlJztcblxuY29uc3QgR0VUX05PVEVTX1FVRVJZID0gZ3FsYFxuXHRxdWVyeSB7XG5cdFx0bm90ZXMge1xuXHRcdFx0aWRcblx0XHRcdHRpdGxlXG5cdFx0XHRjb250ZW50XG5cdFx0fVxuXHR9XG5gO1xuXG5jb25zdCBERUxFVEVfTk9URV9NVVRBVElPTiA9IGdxbGBcblx0bXV0YXRpb24gRGVsZXRlTm90ZSAoJGlkOiBTdHJpbmchKSB7XG5cdFx0ZGVsZXRlTm90ZSAoaWQ6ICRpZCkge1xuXHRcdFx0aWRcblx0XHRcdHRpdGxlXG5cdFx0XHRjb250ZW50XG5cdFx0fVxuXHR9XG5gO1xuXG5mdW5jdGlvbiBIb21lICgpIHtcblx0bGV0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoW10pO1xuXG5cdGxldCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfTk9URVNfUVVFUlkpO1xuXHRsZXQgW2RlbGV0ZU5vdGVdID0gdXNlTXV0YXRpb24oREVMRVRFX05PVEVfTVVUQVRJT04pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFsb2FkaW5nICYmICFlcnJvcikge1xuXHRcdFx0c2V0Tm90ZXMoZGF0YS5ub3Rlcylcblx0XHRcdGNvbnNvbGUubG9nKG5vdGVzKVxuXHRcdH1cblx0fSwgW2xvYWRpbmddKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIVE1MSGVhZGVyIC8+XG5cdFx0XHQ8TmF2YmFyIHNldE5vdGVzPXtzZXROb3Rlc30gLz5cblx0XHRcdFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29sdW1ucyBwLTMgaXMtbXVsdGlsaW5lXCI+XG5cdFx0XHRcdHtub3RlcyAhPT0gW10gPyBub3Rlcy5tYXAoKG5vdGUsIGluZGV4KSA9PiBcblx0XHRcdFx0XHQ8Tm90ZSB0aXRsZT17bm90ZS50aXRsZX0gY29udGVudD17bm90ZS5jb250ZW50fSBpZD17bm90ZS5pZH0ga2V5PXtub3RlLmlkfSBzZXROb3Rlcz17c2V0Tm90ZXN9IGRlbGV0ZU5vdGU9e2RlbGV0ZU5vdGV9IC8+XG5cdFx0XHRcdCkgOiA8cD5ObyBub3RlcyB5ZXQ8L3A+fVxuXHRcdFx0PC9tYWluPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsIkhUTUxIZWFkZXIiLCJOYXZiYXIiLCJOb3RlIiwiR0VUX05PVEVTX1FVRVJZIiwiREVMRVRFX05PVEVfTVVUQVRJT04iLCJIb21lIiwibm90ZXMiLCJzZXROb3RlcyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJkZWxldGVOb3RlIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJtYXAiLCJub3RlIiwiaW5kZXgiLCJ0aXRsZSIsImNvbnRlbnQiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});