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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\t\\t\\t\\n\\t\\t\\tmutation {\\n\\t\\t\\t\\tnewNote(\\n\\t\\t\\t\\t\\ttitle: $title\\n\\t\\t\\t\\t\\tcontent: $content\\n\\t\\t\\t\\t)\\n\\t\\t\\t}\\n\\n\\t\\t\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nfunction Navbar() {\n    var toggleModal = function toggleModal() {\n        newNoteModal.current.classList.toggle('is-active');\n    };\n    var saveNote = function saveNote() {\n        _s();\n        var ref = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject())), 2), newNote = ref[0], ref2 = ref[1], data = ref2.data, loading = ref2.loading, error = ref2.error;\n        console.log(mutation);\n    };\n    _s1();\n    var _s = $RefreshSig$();\n    var newNoteModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteTitle = ref3[0], setNoteTitle = ref3[1], ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteContent = ref1[0], setNoteContent = ref1[1];\n    _s(saveNote, \"7o+LSkm4qc1U78ArM2kPTEN2ctw=\", false, function() {\n        return [\n            _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n        ];\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n            lineNumber: 30,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                className: \"navbar is-flex flex-direction-row\",\n                role: \"navigation\",\n                \"aria-label\": \"main navigation\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 31,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"navbar-brand\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 32,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 33,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"navbar-item has-text-weight-semibold is-size-4\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Notes\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"ml-auto navbar-end\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 36,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"navbar-item\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 37,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"button is-primary\",\n                                onClick: toggleModal,\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: \"New Note\"\n                            })\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"modal\",\n                ref: newNoteModal,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 43,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal-background\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 44,\n                            columnNumber: 5\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"modal-card\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                                className: \"modal-card-head\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"modal-card-title\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"New Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"delete\",\n                                        \"aria-label\": \"close\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 7\n                                        },\n                                        __self: this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                                className: \"modal-card-body\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-title\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Title\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    className: \"input\",\n                                                    type: \"text\",\n                                                    id: \"note-title\",\n                                                    placeholder: \"Do something ...\",\n                                                    onInput: function(e) {\n                                                        return setNoteTitle(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-content\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Content\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                                                    className: \"textarea\",\n                                                    id: \"note-content\",\n                                                    placeholder: \"Bla bla bla\",\n                                                    onInput: function(e) {\n                                                        return setNoteContent(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                                className: \"modal-card-foot\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button is-success\",\n                                        onClick: saveNote,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Save Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Cancel\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s1(Navbar, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYQyxFQUFFLEVBQUMsQ0FBWTtvREFDZkMsV0FBVyxFQUFDLENBQWtCO29EQUM5QkMsT0FBTyxFQUFFQyxRQUFRLENBQVJBLENBQUM7d0RBQUl2QixNQUFNLENBQU5BLFlBQVksQ0FBQ3VCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7MEdBSTNDdEIsQ0FBRzt3Q0FBQ0UsU0FBUyxFQUFDLENBQU87Ozs7Ozs7O2lIQUNwQlcsQ0FBSztnREFBQ0MsT0FBTyxFQUFDLENBQWM7Z0RBQUNaLFNBQVMsRUFBQyxDQUFPOzs7Ozs7OzBEQUFDLENBQU87O2lIQUN0REYsQ0FBRztnREFBQ0UsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7K0hBQ3RCcUIsQ0FBUTtvREFBQ3JCLFNBQVMsRUFBQyxDQUFVO29EQUM3QmUsRUFBRSxFQUFDLENBQWM7b0RBQ2pCQyxXQUFXLEVBQUMsQ0FBYTtvREFDekJDLE9BQU8sRUFBRUMsUUFBUSxDQUFSQSxDQUFDO3dEQUFJckIsTUFBTSxDQUFOQSxjQUFjLENBQUNxQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7a0dBSzlDRSxDQUFNO2dDQUFDdEIsU0FBUyxFQUFDLENBQWlCOzs7Ozs7Ozt5R0FDakNLLENBQU07d0NBQUNMLFNBQVMsRUFBQyxDQUFtQjt3Q0FBQ00sT0FBTyxFQUFFcEIsUUFBUTs7Ozs7OztrREFBRSxDQUFTOzt5R0FDakVtQixDQUFNO3dDQUFDTCxTQUFTLEVBQUMsQ0FBUTt3Q0FBQ00sT0FBTyxFQUFFekIsV0FBVzs7Ozs7OztrREFBRSxDQUFNOzs7Ozs7Ozs7O0FBTTdELENBQUM7SUE5RVFELE1BQU07S0FBTkEsTUFBTTtBQWdGZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTmF2YmFyLmpzPzk0ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5mdW5jdGlvbiBOYXZiYXIgKCkge1xuXHRsZXQgbmV3Tm90ZU1vZGFsID0gY3JlYXRlUmVmKCk7XG5cdGxldCBbbm90ZVRpdGxlLCBzZXROb3RlVGl0bGVdID0gdXNlU3RhdGUoJycpLFxuXHRcdFtub3RlQ29udGVudCwgc2V0Tm90ZUNvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuXG5cdGZ1bmN0aW9uIHRvZ2dsZU1vZGFsICgpIHtcblx0XHRuZXdOb3RlTW9kYWwuY3VycmVudC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxuXHR9XG5cblx0ZnVuY3Rpb24gc2F2ZU5vdGUgKCkge1xuXHRcdGxldCBbbmV3Tm90ZSwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKGdxbGBcblx0XHRcdFxuXHRcdFx0bXV0YXRpb24ge1xuXHRcdFx0XHRuZXdOb3RlKFxuXHRcdFx0XHRcdHRpdGxlOiAkdGl0bGVcblx0XHRcdFx0XHRjb250ZW50OiAkY29udGVudFxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cblx0XHRgKTtcblxuXHRcdGNvbnNvbGUubG9nKG11dGF0aW9uKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgaXMtZmxleCBmbGV4LWRpcmVjdGlvbi1yb3dcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJtYWluIG5hdmlnYXRpb25cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGhhcy10ZXh0LXdlaWdodC1zZW1pYm9sZCBpcy1zaXplLTRcIj5Ob3RlczwvYT48L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBuYXZiYXItZW5kXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5OZXcgTm90ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbmF2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcmVmPXtuZXdOb3RlTW9kYWx9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJhY2tncm91bmRcIj48L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNhcmRcIj5cblx0XHRcdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtaGVhZFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibW9kYWwtY2FyZC10aXRsZVwiPk5ldyBOb3RlPC9wPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGVcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+PC9idXR0b24+XG5cdFx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibm90ZS10aXRsZVwiIGNsYXNzTmFtZT1cImxhYmVsXCI+VGl0bGU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiBcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm5vdGUtdGl0bGVcIiBcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRG8gc29tZXRoaW5nIC4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbklucHV0PXtlID0+IHNldE5vdGVUaXRsZShlLnRhcmdldC52YWx1ZSl9Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm5vdGUtY29udGVudFwiIGNsYXNzTmFtZT1cImxhYmVsXCI+Q29udGVudDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0YXJlYVwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJub3RlLWNvbnRlbnRcIiBcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQmxhIGJsYSBibGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25JbnB1dD17ZSA9PiBzZXROb3RlQ29udGVudChlLnRhcmdldC52YWx1ZSl9PjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLWZvb3RcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiBvbkNsaWNrPXtzYXZlTm90ZX0+U2F2ZSBOb3RlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Zvb3Rlcj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJlZiIsInVzZVN0YXRlIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJMaW5rIiwiTmF2YmFyIiwidG9nZ2xlTW9kYWwiLCJuZXdOb3RlTW9kYWwiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2F2ZU5vdGUiLCJuZXdOb3RlIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtdXRhdGlvbiIsIm5vdGVUaXRsZSIsInNldE5vdGVUaXRsZSIsIm5vdGVDb250ZW50Iiwic2V0Tm90ZUNvbnRlbnQiLCJkaXYiLCJuYXYiLCJjbGFzc05hbWUiLCJyb2xlIiwiYXJpYS1sYWJlbCIsImhyZWYiLCJhIiwiYnV0dG9uIiwib25DbGljayIsInJlZiIsImhlYWRlciIsInAiLCJzZWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Navbar.js\n");

/***/ })

});