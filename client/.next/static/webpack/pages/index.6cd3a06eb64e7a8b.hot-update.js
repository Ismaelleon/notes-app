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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Note(param) {\n    var title = param.title, content = param.content, id = param.id, setNotes = param.setNotes;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"column is-12-mobile is-6-tablet is-3-desktop\",\n        __source: {\n            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n            lineNumber: 5,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"card\",\n            __source: {\n                fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                lineNumber: 6,\n                columnNumber: 4\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"card-content\",\n                    __source: {\n                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                        lineNumber: 7,\n                        columnNumber: 5\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        className: \"content\",\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                            lineNumber: 8,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                className: \"title is-size-5\",\n                                __source: {\n                                    fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                                    lineNumber: 9,\n                                    columnNumber: 7\n                                },\n                                __self: this,\n                                children: title\n                            }),\n                            content\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"footer\", {\n                    className: \"card-footer\",\n                    __source: {\n                        fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                        className: \"card-footer-item\",\n                        href: \"#\",\n                        onClick: _asyncToGenerator(_home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            var data;\n                            return _home_ismael_Escritorio_notes_app_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return deleteNote({\n                                            variables: {\n                                                id: id\n                                            }\n                                        });\n                                    case 2:\n                                        data = _ctx.sent.data;\n                                        console.log(data.deleteNote);\n                                        setNotes(data.deleteNote);\n                                    case 5:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })),\n                        __source: {\n                            fileName: \"/home/ismael/Escritorio/notes-app/client/pages/components/Note.js\",\n                            lineNumber: 14,\n                            columnNumber: 6\n                        },\n                        __self: this,\n                        children: \"Delete\"\n                    })\n                })\n            ]\n        })\n    }));\n}\n_c = Note;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\nvar _c;\n$RefreshReg$(_c, \"Note\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05vdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUV4Q0UsSUFBSSxDQUFFLEtBQWdDLEVBQUUsQ0FBQztRQUFqQ0MsS0FBSyxHQUFQLEtBQWdDLENBQTlCQSxLQUFLLEVBQUVDLE9BQU8sR0FBaEIsS0FBZ0MsQ0FBdkJBLE9BQU8sRUFBRUMsRUFBRSxHQUFwQixLQUFnQyxDQUFkQSxFQUFFLEVBQUVDLFFBQVEsR0FBOUIsS0FBZ0MsQ0FBVkEsUUFBUTtJQUM1QyxNQUFNLHNFQUNKQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUE4Qzs7Ozs7Ozt3RkFDM0RELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQU07Ozs7Ozs7O3FGQUNuQkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7b0dBQzNCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7aUdBQ3RCQyxDQUFDO2dDQUFDRCxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7MENBQUVMLEtBQUs7OzRCQUNwQ0MsT0FBTzs7OztxRkFHVE0sQ0FBTTtvQkFBQ0YsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7bUdBQzdCRyxDQUFDO3dCQUFDSCxTQUFTLEVBQUMsQ0FBa0I7d0JBQUNJLElBQUksRUFBQyxDQUFHO3dCQUFDQyxPQUFPLHFKQUFFLFFBQVEsV0FBSSxDQUFDO2dDQUN4REMsSUFBSTs7Ozs7K0NBQVdDLFVBQVUsQ0FBQyxDQUFDOzRDQUFDQyxTQUFTLEVBQUUsQ0FBQztnREFBQ1gsRUFBRSxFQUFGQSxFQUFFOzRDQUFDLENBQUM7d0NBQUMsQ0FBQzs7d0NBQS9DUyxJQUFJLGFBQUpBLElBQUk7d0NBRVZHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUNDLFVBQVU7d0NBQzNCVCxRQUFRLENBQUNRLElBQUksQ0FBQ0MsVUFBVTs7Ozs7O3dCQUN6QixDQUFDOzs7Ozs7O2tDQUFFLENBQU07Ozs7OztBQUtkLENBQUM7S0FyQlFiLElBQUk7QUF1QmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL05vdGUuanM/MDA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5mdW5jdGlvbiBOb3RlICh7IHRpdGxlLCBjb250ZW50LCBpZCwgc2V0Tm90ZXMgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTEyLW1vYmlsZSBpcy02LXRhYmxldCBpcy0zLWRlc2t0b3BcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0bGUgaXMtc2l6ZS01XCI+e3RpdGxlfTwvcD5cblx0XHRcdFx0XHRcdHtjb250ZW50fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyLWl0ZW1cIiBocmVmPVwiI1wiIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdGxldCB7IGRhdGEgfSA9IGF3YWl0IGRlbGV0ZU5vdGUoeyB2YXJpYWJsZXM6IHsgaWQgfSB9KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5kZWxldGVOb3RlKVxuXHRcdFx0XHRcdFx0c2V0Tm90ZXMoZGF0YS5kZWxldGVOb3RlKVxuXHRcdFx0XHRcdH19PkRlbGV0ZTwvYT5cblx0XHRcdFx0PC9mb290ZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xuIl0sIm5hbWVzIjpbImdxbCIsInVzZU11dGF0aW9uIiwiTm90ZSIsInRpdGxlIiwiY29udGVudCIsImlkIiwic2V0Tm90ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiZm9vdGVyIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZGF0YSIsImRlbGV0ZU5vdGUiLCJ2YXJpYWJsZXMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Note.js\n");

/***/ })

});