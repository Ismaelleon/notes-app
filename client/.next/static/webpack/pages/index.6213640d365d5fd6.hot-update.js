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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Note(param) {\n    var title = param.title, content = param.content, id = param.id, setNotes = param.setNotes, deleteNote = param.deleteNote;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"column is-12-mobile is-6-tablet is-3-desktop\",\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n            lineNumber: 3,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"card\",\n            __source: {\n                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                lineNumber: 4,\n                columnNumber: 4\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"card-content\",\n                    __source: {\n                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                        lineNumber: 5,\n                        columnNumber: 5\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: \"content\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                            lineNumber: 6,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                className: \"title is-size-5\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                                    lineNumber: 7,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: title\n                            }),\n                            content\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"footer\", {\n                    className: \"card-footer\",\n                    __source: {\n                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                        className: \"card-footer-item\",\n                        href: \"#\",\n                        onClick: _asyncToGenerator(_home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var data;\n                            return _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return deleteNote({\n                                            variables: {\n                                                id: id\n                                            }\n                                        });\n                                    case 2:\n                                        data = _ctx.sent.data;\n                                        setNotes(data.deleteNote);\n                                    case 4:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })),\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                            lineNumber: 12,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: \"Delete\"\n                    })\n                })\n            ]\n        })\n    }));\n}\n_c = Note;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\nvar _c;\n$RefreshReg$(_c, \"Note\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05vdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUFTQSxJQUFJLENBQUUsS0FBNEMsRUFBRSxDQUFDO1FBQTdDQyxLQUFLLEdBQVAsS0FBNEMsQ0FBMUNBLEtBQUssRUFBRUMsT0FBTyxHQUFoQixLQUE0QyxDQUFuQ0EsT0FBTyxFQUFFQyxFQUFFLEdBQXBCLEtBQTRDLENBQTFCQSxFQUFFLEVBQUVDLFFBQVEsR0FBOUIsS0FBNEMsQ0FBdEJBLFFBQVEsRUFBRUMsVUFBVSxHQUExQyxLQUE0QyxDQUFaQSxVQUFVO0lBQ3hELE1BQU0sc0VBQ0pDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQThDOzs7Ozs7O3dGQUMzREQsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7cUZBQ25CRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBYzs7Ozs7OztvR0FDM0JELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OztpR0FDdEJDLENBQUM7Z0NBQUNELFNBQVMsRUFBQyxDQUFpQjs7Ozs7OzswQ0FBRU4sS0FBSzs7NEJBQ3BDQyxPQUFPOzs7O3FGQUdUTyxDQUFNO29CQUFDRixTQUFTLEVBQUMsQ0FBYTs7Ozs7OzttR0FDN0JHLENBQUM7d0JBQUNILFNBQVMsRUFBQyxDQUFrQjt3QkFBQ0ksSUFBSSxFQUFDLENBQUc7d0JBQUNDLE9BQU8scUpBQUUsUUFBUSxXQUFJLENBQUM7Z0NBQ3hEQyxJQUFJOzs7OzsrQ0FBV1IsVUFBVSxDQUFDLENBQUM7NENBQUNTLFNBQVMsRUFBRSxDQUFDO2dEQUFDWCxFQUFFLEVBQUZBLEVBQUU7NENBQUMsQ0FBQzt3Q0FBQyxDQUFDOzt3Q0FBL0NVLElBQUksYUFBSkEsSUFBSTt3Q0FFVlQsUUFBUSxDQUFDUyxJQUFJLENBQUNSLFVBQVU7Ozs7Ozt3QkFDekIsQ0FBQzs7Ozs7OztrQ0FBRSxDQUFNOzs7Ozs7QUFLZCxDQUFDO0tBcEJRTCxJQUFJO0FBc0JiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Ob3RlLmpzPzAwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTm90ZSAoeyB0aXRsZSwgY29udGVudCwgaWQsIHNldE5vdGVzLCBkZWxldGVOb3RlIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy0xMi1tb2JpbGUgaXMtNi10YWJsZXQgaXMtMy1kZXNrdG9wXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlIGlzLXNpemUtNVwiPnt0aXRsZX08L3A+XG5cdFx0XHRcdFx0XHR7Y29udGVudH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjYXJkLWZvb3Rlci1pdGVtXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgeyBkYXRhIH0gPSBhd2FpdCBkZWxldGVOb3RlKHsgdmFyaWFibGVzOiB7IGlkIH0gfSk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHNldE5vdGVzKGRhdGEuZGVsZXRlTm90ZSlcblx0XHRcdFx0XHR9fT5EZWxldGU8L2E+XG5cdFx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcbiJdLCJuYW1lcyI6WyJOb3RlIiwidGl0bGUiLCJjb250ZW50IiwiaWQiLCJzZXROb3RlcyIsImRlbGV0ZU5vdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiZm9vdGVyIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZGF0YSIsInZhcmlhYmxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Note.js\n");

/***/ })

});