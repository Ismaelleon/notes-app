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

/***/ "./pages/components/Navbar.js":
/*!************************************!*\
  !*** ./pages/components/Navbar.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\tmutation NewNote(\\n\\t\\t$title: String!\\n\\t\\t$content: String!\\n\\t) {\\n\\t\\tnewNote(title: $title, content: $content) {\\n\\t\\t\\tNote\\n\\t\\t}\\n\\t}\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar NEW_NOTE_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nfunction Navbar() {\n    var toggleModal = function toggleModal() {\n        newNoteModal.current.classList.toggle('is-active');\n    };\n    _s1();\n    var newNoteModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(), titleInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(), contentInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteTitle = ref[0], setNoteTitle = ref[1], ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteContent = ref1[0], setNoteContent = ref1[1];\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(NEW_NOTE_MUTATION), 2), newNote = ref2[0], ref3 = ref2[1], loading = ref3.loading, error = ref3.error, data = ref3.data;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n            lineNumber: 31,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                className: \"navbar is-flex flex-direction-row\",\n                role: \"navigation\",\n                \"aria-label\": \"main navigation\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 32,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"navbar-brand\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 34,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"navbar-item has-text-weight-semibold is-size-4\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Notes\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"ml-auto navbar-end\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 37,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"navbar-item\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"button is-primary\",\n                                onClick: toggleModal,\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: \"New Note\"\n                            })\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"modal\",\n                ref: newNoteModal,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 44,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal-background\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 45,\n                            columnNumber: 5\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"modal-card\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 47,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                                className: \"modal-card-head\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"modal-card-title\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"New Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"delete\",\n                                        \"aria-label\": \"close\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 7\n                                        },\n                                        __self: this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                                className: \"modal-card-body\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-title\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Title\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    className: \"input\",\n                                                    ref: titleInput,\n                                                    type: \"text\",\n                                                    id: \"note-title\",\n                                                    placeholder: \"Do something ...\",\n                                                    onInput: function(e) {\n                                                        return setNoteTitle(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-content\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Content\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                                                    className: \"textarea\",\n                                                    ref: contentInput,\n                                                    id: \"note-content\",\n                                                    placeholder: \"Bla bla bla\",\n                                                    onInput: function(e) {\n                                                        return setNoteContent(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                                className: \"modal-card-foot\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button is-success\",\n                                        onClick: function() {\n                                            newNote({\n                                                variables: {\n                                                    title: noteTitle,\n                                                    content: noteContent\n                                                }\n                                            });\n                                        },\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Save Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button\",\n                                        onClick: function() {\n                                            toggleModal();\n                                            titleInput.current.value = '';\n                                            contentInput.current.value = '';\n                                        },\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Cancel\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s1(Navbar, \"parObVNGnxNFyqcXiYVC1tNGoWY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQ0osT0FBTyxDQUFDbUMsS0FBSyxHQUFHLENBQUU7d0NBQ2hDLENBQUM7Ozs7Ozs7a0RBQUUsQ0FBTTs7Ozs7Ozs7OztBQU1mLENBQUM7SUE3RVF0QyxNQUFNOztRQU80QkgsdURBQVc7OztLQVA3Q0csTUFBTTtBQStFZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTmF2YmFyLmpzPzk0ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBORVdfTk9URV9NVVRBVElPTiA9IGdxbGBcblx0bXV0YXRpb24gTmV3Tm90ZShcblx0XHQkdGl0bGU6IFN0cmluZyFcblx0XHQkY29udGVudDogU3RyaW5nIVxuXHQpIHtcblx0XHRuZXdOb3RlKHRpdGxlOiAkdGl0bGUsIGNvbnRlbnQ6ICRjb250ZW50KSB7XG5cdFx0XHROb3RlXG5cdFx0fVxuXHR9XG5gO1xuXG5mdW5jdGlvbiBOYXZiYXIgKCkge1xuXHRsZXQgbmV3Tm90ZU1vZGFsID0gY3JlYXRlUmVmKCksXG5cdFx0dGl0bGVJbnB1dCA9IGNyZWF0ZVJlZigpLFxuXHRcdGNvbnRlbnRJbnB1dCA9IGNyZWF0ZVJlZigpO1xuXG5cdGxldCBbbm90ZVRpdGxlLCBzZXROb3RlVGl0bGVdID0gdXNlU3RhdGUoJycpLFxuXHRcdFtub3RlQ29udGVudCwgc2V0Tm90ZUNvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuXHRsZXQgW25ld05vdGUsIHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfV0gPSB1c2VNdXRhdGlvbihORVdfTk9URV9NVVRBVElPTik7XG5cblxuXHRmdW5jdGlvbiB0b2dnbGVNb2RhbCAoKSB7XG5cdFx0bmV3Tm90ZU1vZGFsLmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGlzLWZsZXggZmxleC1kaXJlY3Rpb24tcm93XCIgcm9sZT1cIm5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwibWFpbiBuYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtdGV4dC13ZWlnaHQtc2VtaWJvbGQgaXMtc2l6ZS00XCI+Tm90ZXM8L2E+PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gbmF2YmFyLWVuZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+TmV3IE5vdGU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L25hdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHJlZj17bmV3Tm90ZU1vZGFsfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1iYWNrZ3JvdW5kXCI+PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jYXJkXCI+XG5cdFx0XHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLWhlYWRcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtdGl0bGVcIj5OZXcgTm90ZTwvcD5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlXCIgYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17dG9nZ2xlTW9kYWx9PjwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtYm9keVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5vdGUtdGl0bGVcIiBjbGFzc05hbWU9XCJsYWJlbFwiPlRpdGxlPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3RpdGxlSW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJub3RlLXRpdGxlXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkRvIHNvbWV0aGluZyAuLi5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25JbnB1dD17ZSA9PiBzZXROb3RlVGl0bGUoZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJub3RlLWNvbnRlbnRcIiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbnRlbnQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3NOYW1lPVwidGV4dGFyZWFcIiBcblx0XHRcdFx0XHRcdFx0XHRcdHJlZj17Y29udGVudElucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJub3RlLWNvbnRlbnRcIiBcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQmxhIGJsYSBibGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25JbnB1dD17ZSA9PiBzZXROb3RlQ29udGVudChlLnRhcmdldC52YWx1ZSl9PjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLWZvb3RcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG5ld05vdGUoeyB2YXJpYWJsZXM6IHsgdGl0bGU6IG5vdGVUaXRsZSwgY29udGVudDogbm90ZUNvbnRlbnQgfSB9KVxuXHRcdFx0XHRcdFx0fX0+U2F2ZSBOb3RlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWwoKVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0dGl0bGVJbnB1dC5jdXJyZW50LnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnRJbnB1dC5jdXJyZW50LnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0XHR9fT5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJlZiIsInVzZVN0YXRlIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJMaW5rIiwiTkVXX05PVEVfTVVUQVRJT04iLCJOYXZiYXIiLCJ0b2dnbGVNb2RhbCIsIm5ld05vdGVNb2RhbCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0aXRsZUlucHV0IiwiY29udGVudElucHV0Iiwibm90ZVRpdGxlIiwic2V0Tm90ZVRpdGxlIiwibm90ZUNvbnRlbnQiLCJzZXROb3RlQ29udGVudCIsIm5ld05vdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwicm9sZSIsImFyaWEtbGFiZWwiLCJocmVmIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJoZWFkZXIiLCJwIiwic2VjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbklucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dGFyZWEiLCJmb290ZXIiLCJ2YXJpYWJsZXMiLCJ0aXRsZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Navbar.js\n");

/***/ })

});