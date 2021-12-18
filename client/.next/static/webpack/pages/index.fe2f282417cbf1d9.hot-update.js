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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Navbar() {\n    var toggleModal = function toggleModal() {\n        newNoteModal.current.classList.toggle('is-active');\n    };\n    var newNoteModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n            lineNumber: 12,\n            columnNumber: 3\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                className: \"navbar\",\n                role: \"navigation\",\n                \"aria-label\": \"main navigation\",\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 13,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"navbar-brand\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 14,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 15,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"navbar-item has-text-weight-semibold is-size-4\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Notes\"\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"navbar-end\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 18,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"navbar-item\",\n                            __source: {\n                                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                lineNumber: 19,\n                                columnNumber: 6\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                className: \"button is-primary\",\n                                onClick: toggleModal,\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: \"New Note\"\n                            })\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"modal\",\n                ref: newNoteModal,\n                __source: {\n                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                    lineNumber: 25,\n                    columnNumber: 4\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal-background\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 5\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"modal-card\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                            lineNumber: 28,\n                            columnNumber: 5\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"header\", {\n                                className: \"modal-card-head\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"modal-card-title\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"New Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"delete\",\n                                        \"aria-label\": \"close\",\n                                        onClick: toggleModal,\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 7\n                                        },\n                                        __self: this\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                                className: \"modal-card-boy\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                                    htmlFor: \"note-title\",\n                                    __source: {\n                                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 7\n                                    },\n                                    __self: this,\n                                    children: \"Title\"\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n                                className: \"modal-card-foot\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 6\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button is-success\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Save Note\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        className: \"button\",\n                                        __source: {\n                                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Navbar.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 7\n                                        },\n                                        __self: this,\n                                        children: \"Cancel\"\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDTDtTQUVuQkUsTUFBTSxHQUFJLENBQUM7UUFHVkMsV0FBVyxHQUFwQixRQUFRLENBQUNBLFdBQVcsR0FBSSxDQUFDO1FBQ3hCQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsQ0FBVztJQUNsRCxDQUFDO0lBSkQsR0FBRyxDQUFDSCxZQUFZLGlCQUFHSixnREFBUztJQU01QixNQUFNLHVFQUNKUSxDQUFHOzs7Ozs7OztrRkFDRkMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVE7Z0JBQUNDLElBQUksRUFBQyxDQUFZO2dCQUFDQyxDQUFVLGFBQUMsQ0FBaUI7Ozs7Ozs7O3lGQUNwRUosQ0FBRzt3QkFBQ0UsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7dUdBQzNCVCxrREFBSTs0QkFBQ1ksSUFBSSxFQUFDLENBQUc7Ozs7Ozs7MkdBQUVDLENBQUM7Z0NBQUNKLFNBQVMsRUFBQyxDQUFnRDs7Ozs7OzswQ0FBQyxDQUFLOzs7O3lGQUdsRkYsQ0FBRzt3QkFBQ0UsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7dUdBQ3pCRixDQUFHOzRCQUFDRSxTQUFTLEVBQUMsQ0FBYTs7Ozs7OzsyR0FDMUJLLENBQU07Z0NBQUNMLFNBQVMsRUFBQyxDQUFtQjtnQ0FBQ00sT0FBTyxFQUFFYixXQUFXOzs7Ozs7OzBDQUFFLENBQVE7Ozs7OztrRkFLdEVLLENBQUc7Z0JBQUNFLFNBQVMsRUFBQyxDQUFPO2dCQUFDTyxHQUFHLEVBQUViLFlBQVk7Ozs7Ozs7O3lGQUN0Q0ksQ0FBRzt3QkFBQ0UsU0FBUyxFQUFDLENBQWtCOzs7Ozs7OzswRkFFaENGLENBQUc7d0JBQUNFLFNBQVMsRUFBQyxDQUFZOzs7Ozs7OztrR0FDekJRLENBQU07Z0NBQUNSLFNBQVMsRUFBQyxDQUFpQjs7Ozs7Ozs7eUdBQ2pDUyxDQUFDO3dDQUFDVCxTQUFTLEVBQUMsQ0FBa0I7Ozs7Ozs7a0RBQUMsQ0FBUTs7eUdBQ3ZDSyxDQUFNO3dDQUFDTCxTQUFTLEVBQUMsQ0FBUTt3Q0FBQ0UsQ0FBVSxhQUFDLENBQU87d0NBQUNJLE9BQU8sRUFBRWIsV0FBVzs7Ozs7Ozs7OztpR0FHbEVpQixDQUFPO2dDQUFDVixTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7K0dBQ2pDVyxDQUFLO29DQUFDQyxPQUFPLEVBQUMsQ0FBWTs7Ozs7Ozs4Q0FBQyxDQUFLOzs7a0dBSWpDQyxDQUFNO2dDQUFDYixTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7O3lHQUNqQ0ssQ0FBTTt3Q0FBQ0wsU0FBUyxFQUFDLENBQW1COzs7Ozs7O2tEQUFDLENBQVM7O3lHQUM5Q0ssQ0FBTTt3Q0FBQ0wsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7a0RBQUMsQ0FBTTs7Ozs7Ozs7OztBQU12QyxDQUFDO0tBM0NRUixNQUFNO0FBNkNmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9OYXZiYXIuanM/OTRlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5mdW5jdGlvbiBOYXZiYXIgKCkge1xuXHRsZXQgbmV3Tm90ZU1vZGFsID0gY3JlYXRlUmVmKCk7XG5cblx0ZnVuY3Rpb24gdG9nZ2xlTW9kYWwgKCkge1xuXHRcdG5ld05vdGVNb2RhbC5jdXJyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLXRleHQtd2VpZ2h0LXNlbWlib2xkIGlzLXNpemUtNFwiPk5vdGVzPC9hPjwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5OZXcgTm90ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbmF2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcmVmPXtuZXdOb3RlTW9kYWx9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJhY2tncm91bmRcIj48L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNhcmRcIj5cblx0XHRcdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cIm1vZGFsLWNhcmQtaGVhZFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibW9kYWwtY2FyZC10aXRsZVwiPk5ldyBOb3RlPC9wPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJkZWxldGVcIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+PC9idXR0b24+XG5cdFx0XHRcdFx0PC9oZWFkZXI+XG5cdFx0XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtY2FyZC1ib3lcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibm90ZS10aXRsZVwiPlRpdGxlPC9sYWJlbD5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwibW9kYWwtY2FyZC1mb290XCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1zdWNjZXNzXCI+U2F2ZSBOb3RlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlUmVmIiwiTGluayIsIk5hdmJhciIsInRvZ2dsZU1vZGFsIiwibmV3Tm90ZU1vZGFsIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRpdiIsIm5hdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwiaHJlZiIsImEiLCJidXR0b24iLCJvbkNsaWNrIiwicmVmIiwiaGVhZGVyIiwicCIsInNlY3Rpb24iLCJsYWJlbCIsImh0bWxGb3IiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Navbar.js\n");

/***/ })

});