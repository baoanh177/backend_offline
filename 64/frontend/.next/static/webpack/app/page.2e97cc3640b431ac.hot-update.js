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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _user_accounts_google, _user_accounts, _user_accounts_github, _user_accounts1, _user_accounts_local, _user_accounts2;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    console.log(js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"accessToken\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const access = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"accessToken\");\n        const refresh = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"refreshToken\");\n        if (!access || !refresh) return router.push(\"/login\");\n        fetch(\"http://localhost:8080/api/accounts\", {\n            headers: {\n                Authorization: \"Bearer \".concat(access)\n            }\n        }).then((res)=>res.json()).then((data)=>{\n            setUser(data.data);\n        }).catch((e)=>console.error(e));\n    }, []);\n    const handleLogout = async ()=>{\n        const access = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"accessToken\");\n        const refresh = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"refreshToken\");\n        const response = await fetch(\"http://localhost:8080/api/logout\", {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(access)\n            },\n            method: \"POST\",\n            body: JSON.stringify({\n                refresh_token: refresh\n            })\n        });\n        if (response.ok) {\n            js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(\"accessToken\");\n            js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(\"refreshToken\");\n            router.push(\"/login\");\n        }\n    };\n    var _user_accounts_google_name, _user_accounts_github_name, _user_accounts_local_name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            \"Google:\",\n                            (_user_accounts_google_name = user === null || user === void 0 ? void 0 : (_user_accounts = user.accounts) === null || _user_accounts === void 0 ? void 0 : (_user_accounts_google = _user_accounts.google) === null || _user_accounts_google === void 0 ? void 0 : _user_accounts_google.name) !== null && _user_accounts_google_name !== void 0 ? _user_accounts_google_name : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-success\",\n                                children: \"Đăng nhập\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            \"Github:\",\n                            (_user_accounts_github_name = user === null || user === void 0 ? void 0 : (_user_accounts1 = user.accounts) === null || _user_accounts1 === void 0 ? void 0 : (_user_accounts_github = _user_accounts1.github) === null || _user_accounts_github === void 0 ? void 0 : _user_accounts_github.name) !== null && _user_accounts_github_name !== void 0 ? _user_accounts_github_name : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-dark\",\n                                children: \"Đăng nhập\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            \"Local:\",\n                            (_user_accounts_local_name = user === null || user === void 0 ? void 0 : (_user_accounts2 = user.accounts) === null || _user_accounts2 === void 0 ? void 0 : (_user_accounts_local = _user_accounts2.local) === null || _user_accounts_local === void 0 ? void 0 : _user_accounts_local.name) !== null && _user_accounts_local_name !== void 0 ? _user_accounts_local_name : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-warning\",\n                                children: \"Đăng nhập\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-danger\",\n                onClick: handleLogout,\n                children: \"Đăng xuất\"\n            }, void 0, false, {\n                fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"j9OvWbTsFvYyMqBaspp4ct74Be0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrRVQsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnNvbGUubG9nKENvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIikpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhY2Nlc3MgPSBDb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpXHJcbiAgICAgICAgY29uc3QgcmVmcmVzaCA9IENvb2tpZXMuZ2V0KFwicmVmcmVzaFRva2VuXCIpXHJcbiAgICAgICAgaWYgKCFhY2Nlc3MgfHwgIXJlZnJlc2gpIHJldHVybiByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hY2NvdW50c1wiLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc31gIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIoZGF0YS5kYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzID0gQ29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKVxyXG4gICAgICAgIGNvbnN0IHJlZnJlc2ggPSBDb29raWVzLmdldChcInJlZnJlc2hUb2tlblwiKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ291dFwiLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc31gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHJlZnJlc2hfdG9rZW46IHJlZnJlc2ggfSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJhY2Nlc3NUb2tlblwiKVxyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInJlZnJlc2hUb2tlblwiKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEdvb2dsZTpcclxuICAgICAgICAgICAgICAgICAgICB7dXNlcj8uYWNjb3VudHM/Lmdvb2dsZT8ubmFtZSA/PyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+xJDEg25nIG5o4bqtcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l0aHViOlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyPy5hY2NvdW50cz8uZ2l0aHViPy5uYW1lID8/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIj7EkMSDbmcgbmjhuq1wPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICBMb2NhbDpcclxuICAgICAgICAgICAgICAgICAgICB7dXNlcj8uYWNjb3VudHM/LmxvY2FsPy5uYW1lID8/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIj7EkMSDbmcgbmjhuq1wPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICDEkMSDbmcgeHXhuqV0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJDb29raWVzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwidXNlciIsInJvdXRlciIsInNldFVzZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiYWNjZXNzIiwicmVmcmVzaCIsInB1c2giLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJoYW5kbGVMb2dvdXQiLCJyZXNwb25zZSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVmcmVzaF90b2tlbiIsIm9rIiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWNjb3VudHMiLCJnb29nbGUiLCJuYW1lIiwiYnV0dG9uIiwiZ2l0aHViIiwibG9jYWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});