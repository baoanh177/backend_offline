"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/RegisterForm.js":
/*!***************************************!*\
  !*** ./src/app/login/RegisterForm.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction RegisterForm(param) {\n    let { setLogin } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleRegister = async (e)=>{\n        e.preventDefault();\n        const formData = Object.fromEntries([\n            ...new FormData(e.target)\n        ]);\n        console.log(formData);\n        if (formData.password != formData.confirm) return alert(\"Mật khẩu k khớp\");\n        const response = await fetch(\"http://localhost:8080/api/register\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        if (!response.ok) return alert(\"Something went wrong\");\n        const data = await response.json();\n        console.log(data);\n    // Object.keys(data.data).forEach(key => {\n    //     Cookies.set(key, data.data[key])\n    // })\n    // router.push(\"/\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-3 h5\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\login\\\\RegisterForm.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-50 flex mx-auto\",\n                onSubmit: handleRegister,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        required: true,\n                        className: \"form-control mt-3\",\n                        placeholder: \"Enter email...\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\login\\\\RegisterForm.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        required: true,\n                        className: \"form-control mt-3\",\n                        placeholder: \"Enter password...\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\login\\\\RegisterForm.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"confirm\",\n                        required: true,\n                        className: \"form-control mt-3\",\n                        placeholder: \"Confirm password...\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\login\\\\RegisterForm.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-warning w-100 mt-3\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\login\\\\RegisterForm.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\login\\\\RegisterForm.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary mt-3 w-50 mx-3\",\n                onClick: ()=>setLogin(true),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\login\\\\RegisterForm.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(RegisterForm, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vUmVnaXN0ZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUNZO0FBRTNDLFNBQVNFLGFBQWEsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNsQixNQUFNQyxTQUFTSCwwREFBU0E7SUFFeEIsTUFBTUksaUJBQWlCLE9BQU1DO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFdBQVdDLE9BQU9DLFdBQVcsQ0FBQztlQUFJLElBQUlDLFNBQVNMLEVBQUVNLE1BQU07U0FBRTtRQUMvREMsUUFBUUMsR0FBRyxDQUFDTjtRQUNaLElBQUdBLFNBQVNPLFFBQVEsSUFBSVAsU0FBU1EsT0FBTyxFQUFFLE9BQU9DLE1BQU07UUFDdkQsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHNDQUFzQztZQUMvREMsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNoQjtRQUN6QjtRQUNBLElBQUksQ0FBQ1UsU0FBU08sRUFBRSxFQUFFLE9BQU9SLE1BQU07UUFDL0IsTUFBTVMsT0FBTyxNQUFNUixTQUFTUyxJQUFJO1FBQ2hDZCxRQUFRQyxHQUFHLENBQUNZO0lBQ1osMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2QyxLQUFLO0lBQ0wsbUJBQW1CO0lBQ3ZCO0lBRUEscUJBQU87OzBCQUNILDhEQUFDRTtnQkFBSUMsV0FBVTswQkFBVTs7Ozs7OzBCQUN6Qiw4REFBQ0M7Z0JBQUtELFdBQVU7Z0JBQW9CRSxVQUFVMUI7O2tDQUMxQyw4REFBQzJCO3dCQUNHQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxRQUFRO3dCQUNSTixXQUFVO3dCQUNWTyxhQUFZOzs7Ozs7a0NBRWhCLDhEQUFDSjt3QkFDR0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsUUFBUTt3QkFDUk4sV0FBVTt3QkFDVk8sYUFBWTs7Ozs7O2tDQUVoQiw4REFBQ0o7d0JBQ0dDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLFFBQVE7d0JBQ1JOLFdBQVU7d0JBQ1ZPLGFBQVk7Ozs7OztrQ0FFaEIsOERBQUNDO3dCQUFPUixXQUFVO2tDQUE2Qjs7Ozs7Ozs7Ozs7OzBCQUVuRCw4REFBQ1E7Z0JBQ0dSLFdBQVU7Z0JBQ1ZTLFNBQVMsSUFBTW5DLFNBQVM7MEJBQzNCOzs7Ozs7OztBQUlUO0dBekRTRDs7UUFDVUQsc0RBQVNBOzs7S0FEbkJDO0FBMkRULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vUmVnaXN0ZXJGb3JtLmpzP2Q3M2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXJGb3JtKHsgc2V0TG9naW4gfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKFsuLi5uZXcgRm9ybURhdGEoZS50YXJnZXQpXSlcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcclxuICAgICAgICBpZihmb3JtRGF0YS5wYXNzd29yZCAhPSBmb3JtRGF0YS5jb25maXJtKSByZXR1cm4gYWxlcnQoXCJN4bqtdCBraOG6qXUgayBraOG7m3BcIilcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9yZWdpc3RlclwiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIilcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAvLyBPYmplY3Qua2V5cyhkYXRhLmRhdGEpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAvLyAgICAgQ29va2llcy5zZXQoa2V5LCBkYXRhLmRhdGFba2V5XSlcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBoNVwiPlJlZ2lzdGVyPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy01MCBmbGV4IG14LWF1dG9cIiBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXQtM1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsLi4uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTNcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZC4uLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTNcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkLi4uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmcgdy0xMDAgbXQtM1wiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTMgdy01MCBteC0zXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9naW4odHJ1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTsiXSwibmFtZXMiOlsiQ29va2llcyIsInVzZVJvdXRlciIsIlJlZ2lzdGVyRm9ybSIsInNldExvZ2luIiwicm91dGVyIiwiaGFuZGxlUmVnaXN0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwicGFzc3dvcmQiLCJjb25maXJtIiwiYWxlcnQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/RegisterForm.js\n"));

/***/ })

});