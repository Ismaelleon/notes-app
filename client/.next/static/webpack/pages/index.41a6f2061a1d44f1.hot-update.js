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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Navbar() {\n    var toggleModal = function toggleModal() {\n        newNoteModal.current.classList.toggle('is-active');\n    };\n    _s();\n    var newNoteModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteTitle = ref[0], setNoteTitle = ref[1], ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), noteContent = ref1[0], setNoteContent = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n            lineNumber: 15,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                className: \"navbar is-flex flex-direction-row\",\n                role: \"navigation\",\n                \"aria-label\": \"main navigation\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 16,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"navbar-brand\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 17,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 18,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"navbar-item has-text-weight-semibold is-size-4\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Notes\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"ml-auto navbar-end\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 21,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"navbar-item\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 22,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"button is-primary\",\n                                onClick: toggleModal,\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: \"New Note\"\n                            })\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"modal\",\n                ref: newNoteModal,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 28,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal-background\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 29,\n                            columnNumber: 5\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"modal-card\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                                className: \"modal-card-head\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"modal-card-title\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"New Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"delete\",\n                                        \"aria-label\": \"close\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 7\n                                        },\n                                        __self: this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                                className: \"modal-card-body\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-title\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Title\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                                    className: \"input\",\n                                                    type: \"text\",\n                                                    id: \"note-title\",\n                                                    placeholder: \"Do something ...\",\n                                                    onInput: function(e) {\n                                                        return setNoteTitle(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"field\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                                htmlFor: \"note-content\",\n                                                className: \"label\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: \"Content\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                className: \"control\",\n                                                __source: {\n                                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 8\n                                                },\n                                                __self: this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                                                    className: \"textarea\",\n                                                    id: \"note-content\",\n                                                    placeholder: \"Bla bla bla\",\n                                                    onInput: function(e) {\n                                                        return setNoteContent(e.target.value);\n                                                    },\n                                                    __source: {\n                                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 9\n                                                    },\n                                                    __self: this\n                                                })\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                                className: \"modal-card-foot\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button is-success\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Save Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Cancel\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Navbar, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmUsRUFBRSxFQUFDLENBQWM7b0RBQ2pCQyxXQUFXLEVBQUMsQ0FBYTtvREFDekJDLE9BQU8sRUFBRUMsUUFBUSxDQUFSQSxDQUFDO3dEQUFJckIsTUFBTSxDQUFOQSxjQUFjLENBQUNxQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7a0dBSzlDRSxDQUFNO2dDQUFDdEIsU0FBUyxFQUFDLENBQWlCOzs7Ozs7Ozt5R0FDakNLLENBQU07d0NBQUNMLFNBQVMsRUFBQyxDQUFtQjs7Ozs7OztrREFBQyxDQUFTOzt5R0FDOUNLLENBQU07d0NBQUNMLFNBQVMsRUFBQyxDQUFRO3dDQUFDTSxPQUFPLEVBQUVqQixXQUFXOzs7Ozs7O2tEQUFFLENBQU07Ozs7Ozs7Ozs7QUFNN0QsQ0FBQztHQS9EUUQsTUFBTTtLQUFOQSxNQUFNO0FBaUVmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9OYXZiYXIuanM/OTRlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIE5hdmJhciAoKSB7XG5cdGxldCBuZXdOb3RlTW9kYWwgPSBjcmVhdGVSZWYoKTtcblx0bGV0IFtub3RlVGl0bGUsIHNldE5vdGVUaXRsZV0gPSB1c2VTdGF0ZSgnJyksXG5cdFx0W25vdGVDb250ZW50LCBzZXROb3RlQ29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0ZnVuY3Rpb24gdG9nZ2xlTW9kYWwgKCkge1xuXHRcdG5ld05vdGVNb2RhbC5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBpcy1mbGV4IGZsZXgtZGlyZWN0aW9uLXJvd1wiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLXRleHQtd2VpZ2h0LXNlbWlib2xkIGlzLXNpemUtNFwiPk5vdGVzPC9hPjwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIG5hdmJhci1lbmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgb25DbGljaz17dG9nZ2xlTW9kYWx9Pk5ldyBOb3RlPC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9uYXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByZWY9e25ld05vdGVNb2RhbH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY2FyZFwiPlxuXHRcdFx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwibW9kYWwtY2FyZC1oZWFkXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLXRpdGxlXCI+TmV3IE5vdGU8L3A+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImRlbGV0ZVwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT48L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2hlYWRlcj5cblx0XHRcblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbC1jYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJub3RlLXRpdGxlXCIgY2xhc3NOYW1lPVwibGFiZWxcIj5UaXRsZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwibm90ZS10aXRsZVwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJEbyBzb21ldGhpbmcgLi4uXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uSW5wdXQ9e2UgPT4gc2V0Tm90ZVRpdGxlKGUudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibm90ZS1jb250ZW50XCIgY2xhc3NOYW1lPVwibGFiZWxcIj5Db250ZW50PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm5vdGUtY29udGVudFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJCbGEgYmxhIGJsYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbklucHV0PXtlID0+IHNldE5vdGVDb250ZW50KGUudGFyZ2V0LnZhbHVlKX0+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtZm9vdFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc3VjY2Vzc1wiPlNhdmUgTm90ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdFx0PC9mb290ZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWYiLCJ1c2VTdGF0ZSIsImdxbCIsInVzZVF1ZXJ5IiwiTGluayIsIk5hdmJhciIsInRvZ2dsZU1vZGFsIiwibmV3Tm90ZU1vZGFsIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm5vdGVUaXRsZSIsInNldE5vdGVUaXRsZSIsIm5vdGVDb250ZW50Iiwic2V0Tm90ZUNvbnRlbnQiLCJkaXYiLCJuYXYiLCJjbGFzc05hbWUiLCJyb2xlIiwiYXJpYS1sYWJlbCIsImhyZWYiLCJhIiwiYnV0dG9uIiwib25DbGljayIsInJlZiIsImhlYWRlciIsInAiLCJzZWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Navbar.js\n");

/***/ })

});