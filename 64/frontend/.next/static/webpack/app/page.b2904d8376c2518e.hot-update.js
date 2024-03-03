"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _user_accounts_google, _user_accounts, _user_accounts_github, _user_accounts1, _user_accounts_local, _user_accounts2;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const access = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"accessToken\");\n        const refresh = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"refreshToken\");\n        if (!access || !refresh) return router.push(\"/login\");\n        fetch(\"http://localhost:8080/api/accounts\", {\n            headers: {\n                Authorization: \"Bearer \".concat(access)\n            }\n        }).then((res)=>res.json()).then((data)=>{\n            setUser(data.data);\n        }).catch((e)=>console.error(e));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    \"Google: \",\n                    (user === null || user === void 0 ? void 0 : (_user_accounts = user.accounts) === null || _user_accounts === void 0 ? void 0 : (_user_accounts_google = _user_accounts.google) === null || _user_accounts_google === void 0 ? void 0 : _user_accounts_google.name) ? \"Chưa đăng k\\xed\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-success\",\n                        children: \"Đăng nhập\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 28,\n                        columnNumber: 74\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    \"Github: \",\n                    (user === null || user === void 0 ? void 0 : (_user_accounts1 = user.accounts) === null || _user_accounts1 === void 0 ? void 0 : (_user_accounts_github = _user_accounts1.github) === null || _user_accounts_github === void 0 ? void 0 : _user_accounts_github.name) ? \"Chưa đăng k\\xed\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-dark\",\n                        children: \"Đăng nhập\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 31,\n                        columnNumber: 74\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    \"Local: \",\n                    (user === null || user === void 0 ? void 0 : (_user_accounts2 = user.accounts) === null || _user_accounts2 === void 0 ? void 0 : (_user_accounts_local = _user_accounts2.local) === null || _user_accounts_local === void 0 ? void 0 : _user_accounts_local.name) ? \"Chưa đăng k\\xed\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-warning\",\n                        children: \"Đăng nhập\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 34,\n                        columnNumber: 72\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"j9OvWbTsFvYyMqBaspp4ct74Be0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQjtBQUNZO0FBQ0E7QUFFM0MsU0FBU0k7UUFxQmdCQyx1QkFBQUEsZ0JBR0FBLHVCQUFBQSxpQkFHREEsc0JBQUFBOztJQTFCcEIsTUFBTUMsU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksTUFBTUUsUUFBUSxHQUFHSiwrQ0FBUUE7SUFFaENELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU0sU0FBU1IsaURBQU9BLENBQUNTLEdBQUcsQ0FBQztRQUMzQixNQUFNQyxVQUFVVixpREFBT0EsQ0FBQ1MsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQ0QsVUFBVSxDQUFDRSxTQUFTLE9BQU9KLE9BQU9LLElBQUksQ0FBQztRQUM1Q0MsTUFBTSxzQ0FBc0M7WUFDeENDLFNBQVM7Z0JBQUVDLGVBQWUsVUFBaUIsT0FBUE47WUFBUztRQUNqRCxHQUNLTyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHO1lBQ0hYLFFBQVFXLEtBQUtBLElBQUk7UUFDckIsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLElBQU1DLFFBQVFDLEtBQUssQ0FBQ0Y7SUFDcEMsR0FBRyxFQUFFO0lBRUwscUJBQ0k7OzBCQUNJLDhEQUFDRztnQkFBSUMsV0FBVTs7b0JBQUc7b0JBQ0xuQixDQUFBQSxpQkFBQUEsNEJBQUFBLGlCQUFBQSxLQUFNb0IsUUFBUSxjQUFkcEIsc0NBQUFBLHdCQUFBQSxlQUFnQnFCLE1BQU0sY0FBdEJyQiw0Q0FBQUEsc0JBQXdCc0IsSUFBSSxJQUFHLGtDQUFpQiw4REFBQ0M7d0JBQU9KLFdBQVU7a0NBQWtCOzs7Ozs7Ozs7Ozs7MEJBRWpHLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQUc7b0JBQ0xuQixDQUFBQSxpQkFBQUEsNEJBQUFBLGtCQUFBQSxLQUFNb0IsUUFBUSxjQUFkcEIsdUNBQUFBLHdCQUFBQSxnQkFBZ0J3QixNQUFNLGNBQXRCeEIsNENBQUFBLHNCQUF3QnNCLElBQUksSUFBRyxrQ0FBaUIsOERBQUNDO3dCQUFPSixXQUFVO2tDQUFlOzs7Ozs7Ozs7Ozs7MEJBRTlGLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQUc7b0JBQ05uQixDQUFBQSxpQkFBQUEsNEJBQUFBLGtCQUFBQSxLQUFNb0IsUUFBUSxjQUFkcEIsdUNBQUFBLHVCQUFBQSxnQkFBZ0J5QixLQUFLLGNBQXJCekIsMkNBQUFBLHFCQUF1QnNCLElBQUksSUFBRyxrQ0FBaUIsOERBQUNDO3dCQUFPSixXQUFVO2tDQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUFJM0c7R0EvQlNwQjs7UUFDVUgsc0RBQVNBOzs7S0FEbkJHO0FBaUNULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhY2Nlc3MgPSBDb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpXHJcbiAgICAgICAgY29uc3QgcmVmcmVzaCA9IENvb2tpZXMuZ2V0KFwicmVmcmVzaFRva2VuXCIpXHJcbiAgICAgICAgaWYgKCFhY2Nlc3MgfHwgIXJlZnJlc2gpIHJldHVybiByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hY2NvdW50c1wiLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc31gIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICBHb29nbGU6IHt1c2VyPy5hY2NvdW50cz8uZ29vZ2xlPy5uYW1lID8gXCJDaMawYSDEkcSDbmcga8OtXCIgOiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPsSQxINuZyBuaOG6rXA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgR2l0aHViOiB7dXNlcj8uYWNjb3VudHM/LmdpdGh1Yj8ubmFtZSA/IFwiQ2jGsGEgxJHEg25nIGvDrVwiIDogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIj7EkMSDbmcgbmjhuq1wPC9idXR0b24+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIExvY2FsOiB7dXNlcj8uYWNjb3VudHM/LmxvY2FsPy5uYW1lID8gXCJDaMawYSDEkcSDbmcga8OtXCIgOiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiPsSQxINuZyBuaOG6rXA8L2J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJDb29raWVzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwidXNlciIsInJvdXRlciIsInNldFVzZXIiLCJhY2Nlc3MiLCJnZXQiLCJyZWZyZXNoIiwicHVzaCIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJhY2NvdW50cyIsImdvb2dsZSIsIm5hbWUiLCJidXR0b24iLCJnaXRodWIiLCJsb2NhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});