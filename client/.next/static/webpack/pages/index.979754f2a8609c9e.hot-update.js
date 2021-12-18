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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\tmutation NewNote($title: String!, $content: String!) {\\n\\t\\tnewNote(title: $title, content: $content) {\\n\\t\\t\\ttitle\\n\\t\\t\\tcontent\\n\\t\\t}\\n\\t}\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar NEW_NOTE_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nfunction Navbar(param) {\n    var setNotes = param.setNotes;\n    var toggleModal = function toggleModal() {\n        newNoteModal.current.classList.toggle('is-active');\n    };\n    _s1();\n    var newNoteModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteTitle = ref[0], setNoteTitle = ref[1], ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteContent = ref1[0], setNoteContent = ref1[1];\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(NEW_NOTE_MUTATION), 2), newNote = ref2[0], ref3 = ref2[1], loading = ref3.loading, error = ref3.error, data = ref3.data;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n            lineNumber: 27,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                className: \"navbar is-flex flex-direction-row\",\n                role: \"navigation\",\n                \"aria-label\": \"main navigation\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 28,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"navbar-brand\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 29,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"navbar-item has-text-weight-semibold is-size-4\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Notes\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"ml-auto navbar-end\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"navbar-item\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 34,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"button is-primary\",\n                                onClick: toggleModal,\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: \"New Note\"\n                            })\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"modal\",\n                ref: newNoteModal,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 40,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal-background\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 41,\n                            columnNumber: 5\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"modal-card\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 43,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                                className: \"modal-card-head\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"modal-card-title\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"New Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"delete\",\n                                        \"aria-label\": \"close\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 7\n                                        },\n                                        __self: this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                                className: \"modal-card-body\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-title\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Title\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    className: \"input\",\n                                                    type: \"text\",\n                                                    id: \"note-title\",\n                                                    placeholder: \"Do something ...\",\n                                                    onInput: function(e) {\n                                                        return setNoteTitle(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-content\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Content\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                                                    className: \"textarea\",\n                                                    id: \"note-content\",\n                                                    placeholder: \"Bla bla bla\",\n                                                    onInput: function(e) {\n                                                        return setNoteContent(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                                className: \"modal-card-foot\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button is-success\",\n                                        onClick: function() {\n                                            var notes = newNote({\n                                                variables: {\n                                                    title: noteTitle,\n                                                    content: noteContent\n                                                }\n                                            });\n                                            console.log(notes);\n                                            setNotes(notes.value.data.newNote);\n                                        },\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Save Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button\",\n                                        onClick: function() {\n                                            toggleModal();\n                                        },\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Cancel\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s1(Navbar, \"parObVNGnxNFyqcXiYVC1tNGoWY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVzt3Q0FDWixDQUFDOzs7Ozs7O2tEQUFFLENBQU07Ozs7Ozs7Ozs7QUFNZixDQUFDO0lBeEVRRixNQUFNOztRQUs0QkgsdURBQVc7OztLQUw3Q0csTUFBTTtBQTBFZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTmF2YmFyLmpzPzk0ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBORVdfTk9URV9NVVRBVElPTiA9IGdxbGBcblx0bXV0YXRpb24gTmV3Tm90ZSgkdGl0bGU6IFN0cmluZyEsICRjb250ZW50OiBTdHJpbmchKSB7XG5cdFx0bmV3Tm90ZSh0aXRsZTogJHRpdGxlLCBjb250ZW50OiAkY29udGVudCkge1xuXHRcdFx0dGl0bGVcblx0XHRcdGNvbnRlbnRcblx0XHR9XG5cdH1cbmA7XG5cbmZ1bmN0aW9uIE5hdmJhciAoeyBzZXROb3RlcyB9KSB7XG5cdGxldCBuZXdOb3RlTW9kYWwgPSBjcmVhdGVSZWYoKTtcblxuXHRsZXQgW25vdGVUaXRsZSwgc2V0Tm90ZVRpdGxlXSA9IHVzZVN0YXRlKCcnKSxcblx0XHRbbm90ZUNvbnRlbnQsIHNldE5vdGVDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcblx0bGV0IFtuZXdOb3RlLCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH1dID0gdXNlTXV0YXRpb24oTkVXX05PVEVfTVVUQVRJT04pO1xuXG5cblx0ZnVuY3Rpb24gdG9nZ2xlTW9kYWwgKCkge1xuXHRcdG5ld05vdGVNb2RhbC5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBpcy1mbGV4IGZsZXgtZGlyZWN0aW9uLXJvd1wiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLXRleHQtd2VpZ2h0LXNlbWlib2xkIGlzLXNpemUtNFwiPk5vdGVzPC9hPjwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIG5hdmJhci1lbmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgb25DbGljaz17dG9nZ2xlTW9kYWx9Pk5ldyBOb3RlPC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByZWY9e25ld05vdGVNb2RhbH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY2FyZFwiPlxuXHRcdFx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwibW9kYWwtY2FyZC1oZWFkXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLXRpdGxlXCI+TmV3IE5vdGU8L3A+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT48L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJub3RlLXRpdGxlXCIgY2xhc3NOYW1lPVwibGFiZWxcIj5UaXRsZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwibm90ZS10aXRsZVwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJEbyBzb21ldGhpbmcgLi4uXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uSW5wdXQ9e2UgPT4gc2V0Tm90ZVRpdGxlKGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibm90ZS1jb250ZW50XCIgY2xhc3NOYW1lPVwibGFiZWxcIj5Db250ZW50PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm5vdGUtY29udGVudFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJCbGEgYmxhIGJsYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbklucHV0PXtlID0+IHNldE5vdGVDb250ZW50KGUudGFyZ2V0LnZhbHVlKX0+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtZm9vdFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc3VjY2Vzc1wiIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IG5vdGVzID0gbmV3Tm90ZSh7IHZhcmlhYmxlczogeyB0aXRsZTogbm90ZVRpdGxlLCBjb250ZW50OiBub3RlQ29udGVudCB9IH0pO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhub3Rlcylcblx0XHRcdFx0XHRcdFx0c2V0Tm90ZXMobm90ZXMudmFsdWUuZGF0YS5uZXdOb3RlKVxuXHRcdFx0XHRcdFx0fX0+U2F2ZSBOb3RlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWwoKVxuXHRcdFx0XHRcdFx0fX0+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdFx0PC9mb290ZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWYiLCJ1c2VTdGF0ZSIsImdxbCIsInVzZU11dGF0aW9uIiwiTGluayIsIk5FV19OT1RFX01VVEFUSU9OIiwiTmF2YmFyIiwic2V0Tm90ZXMiLCJ0b2dnbGVNb2RhbCIsIm5ld05vdGVNb2RhbCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJub3RlVGl0bGUiLCJzZXROb3RlVGl0bGUiLCJub3RlQ29udGVudCIsInNldE5vdGVDb250ZW50IiwibmV3Tm90ZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJkaXYiLCJuYXYiLCJjbGFzc05hbWUiLCJyb2xlIiwiYXJpYS1sYWJlbCIsImhyZWYiLCJhIiwiYnV0dG9uIiwib25DbGljayIsInJlZiIsImhlYWRlciIsInAiLCJzZWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsImZvb3RlciIsIm5vdGVzIiwidmFyaWFibGVzIiwidGl0bGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Navbar.js\n");

/***/ })

});