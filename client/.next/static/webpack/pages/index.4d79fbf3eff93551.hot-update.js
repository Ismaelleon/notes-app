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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\t\\t\\t\\n\\t\\t\\tmutation {\\n\\t\\t\\t\\taddNote(\\n\\t\\t\\t\\t\\ttitle: \",\n        \"\\n\\t\\t\\t\\t\\tcontent: \",\n        \"\\n\\t\\t\\t\\t) {\\n\\t\\t\\t\\t\\tBoolean\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\n\\t\\t\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nfunction Navbar() {\n    var toggleModal = function toggleModal() {\n        newNoteModal.current.classList.toggle('is-active');\n    };\n    var saveNote = function saveNote() {\n        _s();\n        var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject(), noteTitle, noteContent)), loading = ref.loading, error = ref.error, data = ref.data;\n    };\n    _s1();\n    var _s = $RefreshSig$();\n    var newNoteModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteTitle = ref2[0], setNoteTitle = ref2[1], ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteContent = ref1[0], setNoteContent = ref1[1];\n    _s(saveNote, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n        return [\n            _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery\n        ];\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n            lineNumber: 30,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                className: \"navbar is-flex flex-direction-row\",\n                role: \"navigation\",\n                \"aria-label\": \"main navigation\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 31,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"navbar-brand\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 32,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 33,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"navbar-item has-text-weight-semibold is-size-4\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Notes\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"ml-auto navbar-end\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 36,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"navbar-item\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 37,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"button is-primary\",\n                                onClick: toggleModal,\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: \"New Note\"\n                            })\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"modal\",\n                ref: newNoteModal,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 43,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal-background\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 44,\n                            columnNumber: 5\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"modal-card\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                                className: \"modal-card-head\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"modal-card-title\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"New Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"delete\",\n                                        \"aria-label\": \"close\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 7\n                                        },\n                                        __self: this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                                className: \"modal-card-body\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-title\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Title\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    className: \"input\",\n                                                    type: \"text\",\n                                                    id: \"note-title\",\n                                                    placeholder: \"Do something ...\",\n                                                    onInput: function(e) {\n                                                        return setNoteTitle(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-content\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Content\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                                                    className: \"textarea\",\n                                                    id: \"note-content\",\n                                                    placeholder: \"Bla bla bla\",\n                                                    onInput: function(e) {\n                                                        return setNoteContent(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                                className: \"modal-card-foot\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button is-success\",\n                                        onClick: saveNote,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Save Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Cancel\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s1(Navbar, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEVBQUMsQ0FBa0I7b0RBQzlCQyxPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3REFBSXRCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDc0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OzswR0FJM0N0QixDQUFHO3dDQUFDRSxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7aUhBQ3BCVyxDQUFLO2dEQUFDQyxPQUFPLEVBQUMsQ0FBYztnREFBQ1osU0FBUyxFQUFDLENBQU87Ozs7Ozs7MERBQUMsQ0FBTzs7aUhBQ3RERixDQUFHO2dEQUFDRSxTQUFTLEVBQUMsQ0FBUzs7Ozs7OzsrSEFDdEJxQixDQUFRO29EQUFDckIsU0FBUyxFQUFDLENBQVU7b0RBQzdCZSxFQUFFLEVBQUMsQ0FBYztvREFDakJDLFdBQVcsRUFBQyxDQUFhO29EQUN6QkMsT0FBTyxFQUFFQyxRQUFRLENBQVJBLENBQUM7d0RBQUlyQixNQUFNLENBQU5BLGNBQWMsQ0FBQ3FCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7OztrR0FLOUNFLENBQU07Z0NBQUN0QixTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7O3lHQUNqQ0ssQ0FBTTt3Q0FBQ0wsU0FBUyxFQUFDLENBQW1CO3dDQUFDTSxPQUFPLEVBQUVoQixRQUFROzs7Ozs7O2tEQUFFLENBQVM7O3lHQUNqRWUsQ0FBTTt3Q0FBQ0wsU0FBUyxFQUFDLENBQVE7d0NBQUNNLE9BQU8sRUFBRXJCLFdBQVc7Ozs7Ozs7a0RBQUUsQ0FBTTs7Ozs7Ozs7OztBQU03RCxDQUFDO0lBOUVRRCxNQUFNO0tBQU5BLE1BQU07QUFnRmYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL05hdmJhci5qcz85NGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZnVuY3Rpb24gTmF2YmFyICgpIHtcblx0bGV0IG5ld05vdGVNb2RhbCA9IGNyZWF0ZVJlZigpO1xuXHRsZXQgW25vdGVUaXRsZSwgc2V0Tm90ZVRpdGxlXSA9IHVzZVN0YXRlKCcnKSxcblx0XHRbbm90ZUNvbnRlbnQsIHNldE5vdGVDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcblxuXHRmdW5jdGlvbiB0b2dnbGVNb2RhbCAoKSB7XG5cdFx0bmV3Tm90ZU1vZGFsLmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcblx0fVxuXG5cdGZ1bmN0aW9uIHNhdmVOb3RlICgpIHtcblx0XHRsZXQgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoZ3FsYFxuXHRcdFx0XG5cdFx0XHRtdXRhdGlvbiB7XG5cdFx0XHRcdGFkZE5vdGUoXG5cdFx0XHRcdFx0dGl0bGU6ICR7bm90ZVRpdGxlfVxuXHRcdFx0XHRcdGNvbnRlbnQ6ICR7bm90ZUNvbnRlbnR9XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdEJvb2xlYW5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0YCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBpcy1mbGV4IGZsZXgtZGlyZWN0aW9uLXJvd1wiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLXRleHQtd2VpZ2h0LXNlbWlib2xkIGlzLXNpemUtNFwiPk5vdGVzPC9hPjwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIG5hdmJhci1lbmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgb25DbGljaz17dG9nZ2xlTW9kYWx9Pk5ldyBOb3RlPC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByZWY9e25ld05vdGVNb2RhbH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY2FyZFwiPlxuXHRcdFx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwibW9kYWwtY2FyZC1oZWFkXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLXRpdGxlXCI+TmV3IE5vdGU8L3A+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT48L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJub3RlLXRpdGxlXCIgY2xhc3NOYW1lPVwibGFiZWxcIj5UaXRsZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwibm90ZS10aXRsZVwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJEbyBzb21ldGhpbmcgLi4uXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uSW5wdXQ9e2UgPT4gc2V0Tm90ZVRpdGxlKGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibm90ZS1jb250ZW50XCIgY2xhc3NOYW1lPVwibGFiZWxcIj5Db250ZW50PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm5vdGUtY29udGVudFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJCbGEgYmxhIGJsYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbklucHV0PXtlID0+IHNldE5vdGVDb250ZW50KGUudGFyZ2V0LnZhbHVlKX0+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtZm9vdFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc3VjY2Vzc1wiIG9uQ2xpY2s9e3NhdmVOb3RlfT5TYXZlIE5vdGU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlTW9kYWx9PkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVmIiwidXNlU3RhdGUiLCJncWwiLCJ1c2VRdWVyeSIsIkxpbmsiLCJOYXZiYXIiLCJ0b2dnbGVNb2RhbCIsIm5ld05vdGVNb2RhbCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzYXZlTm90ZSIsIm5vdGVUaXRsZSIsIm5vdGVDb250ZW50IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInNldE5vdGVUaXRsZSIsInNldE5vdGVDb250ZW50IiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwicm9sZSIsImFyaWEtbGFiZWwiLCJocmVmIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJoZWFkZXIiLCJwIiwic2VjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbklucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dGFyZWEiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Navbar.js\n");

/***/ })

});