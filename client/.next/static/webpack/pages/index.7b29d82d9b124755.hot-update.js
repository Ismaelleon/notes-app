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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\t\\t\\t\\n\\t\\t\\tmutation newNote($title: String!, $content: String!) {\\n\\t\\t\\t\\tnewNote(\\n\\t\\t\\t\\t\\ttitle: \",\n        \"\\n\\t\\t\\t\\t\\tcontent: \",\n        \"\\n\\t\\t\\t\\t) {\\n\\t\\t\\t\\t\\ttitle\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\n\\t\\t\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nfunction Navbar() {\n    var toggleModal = function toggleModal() {\n        newNoteModal.current.classList.toggle('is-active');\n    };\n    var saveNote = function saveNote() {\n        _s();\n        var ref = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject(), noteTitle, noteContent)), 2), newNote = ref[0], ref2 = ref[1], data = ref2.data, loading = ref2.loading, error = ref2.error;\n        console.log(mutation);\n    };\n    _s1();\n    var _s = $RefreshSig$();\n    var newNoteModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteTitle = ref3[0], setNoteTitle = ref3[1], ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteContent = ref1[0], setNoteContent = ref1[1];\n    _s(saveNote, \"7o+LSkm4qc1U78ArM2kPTEN2ctw=\", false, function() {\n        return [\n            _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n        ];\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n            lineNumber: 32,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                className: \"navbar is-flex flex-direction-row\",\n                role: \"navigation\",\n                \"aria-label\": \"main navigation\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 33,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"navbar-brand\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 34,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"navbar-item has-text-weight-semibold is-size-4\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Notes\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"ml-auto navbar-end\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 38,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"navbar-item\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 39,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"button is-primary\",\n                                onClick: toggleModal,\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: \"New Note\"\n                            })\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"modal\",\n                ref: newNoteModal,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 45,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal-background\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 5\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"modal-card\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 48,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                                className: \"modal-card-head\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"modal-card-title\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"New Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"delete\",\n                                        \"aria-label\": \"close\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 7\n                                        },\n                                        __self: this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                                className: \"modal-card-body\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-title\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Title\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    className: \"input\",\n                                                    type: \"text\",\n                                                    id: \"note-title\",\n                                                    placeholder: \"Do something ...\",\n                                                    onInput: function(e) {\n                                                        return setNoteTitle(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-content\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Content\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                                                    className: \"textarea\",\n                                                    id: \"note-content\",\n                                                    placeholder: \"Bla bla bla\",\n                                                    onInput: function(e) {\n                                                        return setNoteContent(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                                className: \"modal-card-foot\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button is-success\",\n                                        onClick: saveNote,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Save Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Cancel\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s1(Navbar, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBQyxDQUFPO29EQUN2QmMsSUFBSSxFQUFDLENBQU07b0RBQ1hDLEVBQUUsRUFBQyxDQUFZO29EQUNmQyxXQUFXLEVBQUMsQ0FBa0I7b0RBQzlCQyxPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3REFBSXRCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDc0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OzswR0FJM0N0QixDQUFHO3dDQUFDRSxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7aUhBQ3BCVyxDQUFLO2dEQUFDQyxPQUFPLEVBQUMsQ0FBYztnREFBQ1osU0FBUyxFQUFDLENBQU87Ozs7Ozs7MERBQUMsQ0FBTzs7aUhBQ3RERixDQUFHO2dEQUFDRSxTQUFTLEVBQUMsQ0FBUzs7Ozs7OzsrSEFDdEJxQixDQUFRO29EQUFDckIsU0FBUyxFQUFDLENBQVU7b0RBQzdCZSxFQUFFLEVBQUMsQ0FBYztvREFDakJDLFdBQVcsRUFBQyxDQUFhO29EQUN6QkMsT0FBTyxFQUFFQyxRQUFRLENBQVJBLENBQUM7d0RBQUlyQixNQUFNLENBQU5BLGNBQWMsQ0FBQ3FCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7OztrR0FLOUNFLENBQU07Z0NBQUN0QixTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7O3lHQUNqQ0ssQ0FBTTt3Q0FBQ0wsU0FBUyxFQUFDLENBQW1CO3dDQUFDTSxPQUFPLEVBQUVwQixRQUFROzs7Ozs7O2tEQUFFLENBQVM7O3lHQUNqRW1CLENBQU07d0NBQUNMLFNBQVMsRUFBQyxDQUFRO3dDQUFDTSxPQUFPLEVBQUV6QixXQUFXOzs7Ozs7O2tEQUFFLENBQU07Ozs7Ozs7Ozs7QUFNN0QsQ0FBQztJQWhGUUQsTUFBTTtLQUFOQSxNQUFNO0FBa0ZmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9OYXZiYXIuanM/OTRlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIE5hdmJhciAoKSB7XG5cdGxldCBuZXdOb3RlTW9kYWwgPSBjcmVhdGVSZWYoKTtcblx0bGV0IFtub3RlVGl0bGUsIHNldE5vdGVUaXRsZV0gPSB1c2VTdGF0ZSgnJyksXG5cdFx0W25vdGVDb250ZW50LCBzZXROb3RlQ29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0ZnVuY3Rpb24gdG9nZ2xlTW9kYWwgKCkge1xuXHRcdG5ld05vdGVNb2RhbC5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG5cdH1cblxuXHRmdW5jdGlvbiBzYXZlTm90ZSAoKSB7XG5cdFx0bGV0IFtuZXdOb3RlLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oZ3FsYFxuXHRcdFx0XG5cdFx0XHRtdXRhdGlvbiBuZXdOb3RlKCR0aXRsZTogU3RyaW5nISwgJGNvbnRlbnQ6IFN0cmluZyEpIHtcblx0XHRcdFx0bmV3Tm90ZShcblx0XHRcdFx0XHR0aXRsZTogJHtub3RlVGl0bGV9XG5cdFx0XHRcdFx0Y29udGVudDogJHtub3RlQ29udGVudH1cblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGl0bGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0YCk7XG5cblx0XHRjb25zb2xlLmxvZyhtdXRhdGlvbilcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIGlzLWZsZXggZmxleC1kaXJlY3Rpb24tcm93XCIgcm9sZT1cIm5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwibWFpbiBuYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtdGV4dC13ZWlnaHQtc2VtaWJvbGQgaXMtc2l6ZS00XCI+Tm90ZXM8L2E+PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gbmF2YmFyLWVuZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+TmV3IE5vdGU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L25hdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHJlZj17bmV3Tm90ZU1vZGFsfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1iYWNrZ3JvdW5kXCI+PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jYXJkXCI+XG5cdFx0XHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLWhlYWRcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtdGl0bGVcIj5OZXcgTm90ZTwvcD5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiZGVsZXRlXCIgYXJpYS1sYWJlbD1cImNsb3NlXCIgb25DbGljaz17dG9nZ2xlTW9kYWx9PjwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtYm9keVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5vdGUtdGl0bGVcIiBjbGFzc05hbWU9XCJsYWJlbFwiPlRpdGxlPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJub3RlLXRpdGxlXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkRvIHNvbWV0aGluZyAuLi5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25JbnB1dD17ZSA9PiBzZXROb3RlVGl0bGUoZS50YXJnZXQudmFsdWUpfS8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJub3RlLWNvbnRlbnRcIiBjbGFzc05hbWU9XCJsYWJlbFwiPkNvbnRlbnQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3NOYW1lPVwidGV4dGFyZWFcIiBcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwibm90ZS1jb250ZW50XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkJsYSBibGEgYmxhXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uSW5wdXQ9e2UgPT4gc2V0Tm90ZUNvbnRlbnQoZS50YXJnZXQudmFsdWUpfT48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwibW9kYWwtY2FyZC1mb290XCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zdWNjZXNzXCIgb25DbGljaz17c2F2ZU5vdGV9PlNhdmUgTm90ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdFx0PC9mb290ZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWYiLCJ1c2VTdGF0ZSIsImdxbCIsInVzZU11dGF0aW9uIiwiTGluayIsIk5hdmJhciIsInRvZ2dsZU1vZGFsIiwibmV3Tm90ZU1vZGFsIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNhdmVOb3RlIiwibm90ZVRpdGxlIiwibm90ZUNvbnRlbnQiLCJuZXdOb3RlIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtdXRhdGlvbiIsInNldE5vdGVUaXRsZSIsInNldE5vdGVDb250ZW50IiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwicm9sZSIsImFyaWEtbGFiZWwiLCJocmVmIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJoZWFkZXIiLCJwIiwic2VjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbklucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dGFyZWEiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Navbar.js\n");

/***/ })

});