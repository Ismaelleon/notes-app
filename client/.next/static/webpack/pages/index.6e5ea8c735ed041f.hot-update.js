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

/***/ "./pages/components/Note.js":
/*!**********************************!*\
  !*** ./pages/components/Note.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\tmutation DeleteNote ($id: String!) {\\n\\t\\tdeleteNote (id: $id) {\\n\\t\\t\\tid\\n\\t\\t\\ttitle\\n\\t\\t\\tcontent\\n\\t\\t}\\n\\t}\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar DELETE_NOTE_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\nfunction Note(param) {\n    var title = param.title, content = param.content, id = param.id, setNotes = param.setNotes;\n    _s1();\n    var ref = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(DELETE_NOTE_MUTATION), 1), deleteNote = ref[0];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"column is-12-mobile is-6-tablet is-3-desktop\",\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n            lineNumber: 18,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"card\",\n            __source: {\n                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"card-content\",\n                    __source: {\n                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: \"content\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                            lineNumber: 21,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                className: \"title is-size-5\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: title\n                            }),\n                            content\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"footer\", {\n                    className: \"card-footer\",\n                    __source: {\n                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                        className: \"card-footer-item\",\n                        href: \"#\",\n                        onClick: _asyncToGenerator(_home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var data;\n                            return _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return deleteNote({\n                                            variables: {\n                                                id: id\n                                            }\n                                        });\n                                    case 2:\n                                        data = _ctx.sent.data;\n                                        console.log(data.deleteNote);\n                                        setNotes(data.deleteNote);\n                                    case 5:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })),\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                            lineNumber: 27,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: \"Delete\"\n                    })\n                })\n            ]\n        })\n    }, id));\n}\n_s1(Note, \"CpymeNP7JhX9uE0HaP2GD+5j4QU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation\n    ];\n});\n_c = Note;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\nvar _c;\n$RefreshReg$(_c, \"Note\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05vdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRWxCLENBUS9COzs7Ozs7OztBQVJBLEdBQUcsQ0FBQ0Usb0JBQW9CLEdBQUdGLG1EQUFHO1NBVXJCRyxJQUFJLENBQUUsS0FBZ0MsRUFBRSxDQUFDO1FBQWpDQyxLQUFLLEdBQVAsS0FBZ0MsQ0FBOUJBLEtBQUssRUFBRUMsT0FBTyxHQUFoQixLQUFnQyxDQUF2QkEsT0FBTyxFQUFFQyxFQUFFLEdBQXBCLEtBQWdDLENBQWRBLEVBQUUsRUFBRUMsUUFBUSxHQUE5QixLQUFnQyxDQUFWQSxRQUFROztJQUU1QyxHQUFHLENBQWdCTixHQUFpQyxrQkFBakNBLDJEQUFXLENBQUNDLG9CQUFvQixPQUE5Q00sVUFBVSxHQUFJUCxHQUFpQztJQUVwRCxNQUFNLHNFQUNKUSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE4Qzs7Ozs7Ozt3RkFDM0RELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQU07Ozs7Ozs7O3FGQUNuQkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7b0dBQzNCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7aUdBQ3RCQyxDQUFDO2dDQUFDRCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7MENBQUVOLEtBQUs7OzRCQUNwQ0MsT0FBTzs7OztxRkFHVE8sQ0FBTTtvQkFBQ0YsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7bUdBQzdCRyxDQUFDO3dCQUFDSCxTQUFTLEVBQUMsQ0FBa0I7d0JBQUNJLElBQUksRUFBQyxDQUFHO3dCQUFDQyxPQUFPLHFKQUFFLFFBQVEsV0FBSSxDQUFDO2dDQUN4REMsSUFBSTs7Ozs7K0NBQVdSLFVBQVUsQ0FBQyxDQUFDOzRDQUFDUyxTQUFTLEVBQUUsQ0FBQztnREFBQ1gsRUFBRSxFQUFGQSxFQUFFOzRDQUFDLENBQUM7d0NBQUMsQ0FBQzs7d0NBQS9DVSxJQUFJLGFBQUpBLElBQUk7d0NBRVZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUNSLFVBQVU7d0NBQzNCRCxRQUFRLENBQUNTLElBQUksQ0FBQ1IsVUFBVTs7Ozs7O3dCQUN6QixDQUFDOzs7Ozs7O2tDQUFFLENBQU07Ozs7O09BZHVERixFQUFFO0FBbUJ2RSxDQUFDO0lBeEJRSCxJQUFJOztRQUVPRix1REFBVzs7O0tBRnRCRSxJQUFJO0FBMEJiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Ob3RlLmpzPzAwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxubGV0IERFTEVURV9OT1RFX01VVEFUSU9OID0gZ3FsYFxuXHRtdXRhdGlvbiBEZWxldGVOb3RlICgkaWQ6IFN0cmluZyEpIHtcblx0XHRkZWxldGVOb3RlIChpZDogJGlkKSB7XG5cdFx0XHRpZFxuXHRcdFx0dGl0bGVcblx0XHRcdGNvbnRlbnRcblx0XHR9XG5cdH1cbmA7XG5cbmZ1bmN0aW9uIE5vdGUgKHsgdGl0bGUsIGNvbnRlbnQsIGlkLCBzZXROb3RlcyB9KSB7XG5cblx0bGV0IFtkZWxldGVOb3RlXSA9IHVzZU11dGF0aW9uKERFTEVURV9OT1RFX01VVEFUSU9OKTtcblx0XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtMTItbW9iaWxlIGlzLTYtdGFibGV0IGlzLTMtZGVza3RvcFwiIGtleT17aWR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy1zaXplLTVcIj57dGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0e2NvbnRlbnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXItaXRlbVwiIGhyZWY9XCIjXCIgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IHsgZGF0YSB9ID0gYXdhaXQgZGVsZXRlTm90ZSh7IHZhcmlhYmxlczogeyBpZCB9IH0pO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmRlbGV0ZU5vdGUpXG5cdFx0XHRcdFx0XHRzZXROb3RlcyhkYXRhLmRlbGV0ZU5vdGUpXG5cdFx0XHRcdFx0fX0+RGVsZXRlPC9hPlxuXHRcdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGU7XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlTXV0YXRpb24iLCJERUxFVEVfTk9URV9NVVRBVElPTiIsIk5vdGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJpZCIsInNldE5vdGVzIiwiZGVsZXRlTm90ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJmb290ZXIiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJkYXRhIiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Note.js\n");

/***/ })

});