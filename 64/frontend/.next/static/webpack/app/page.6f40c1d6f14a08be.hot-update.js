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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const access = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"accessToken\");\n        const refresh = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"refreshToken\");\n        if (!access || !refresh) return router.push(\"/login\");\n        fetch(\"http://localhost:8080/api/accounts\", {\n            headers: {\n                Authorization: \"Bearer \".concat(access)\n            }\n        }).then((res)=>res.json()).then((data)=>{\n            setUser(data.data);\n        }).catch((e)=>console.error(e));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: \"Google: \"\n        }, void 0, false, {\n            fileName: \"F:\\\\f8-offline\\\\back-end\\\\homeworks\\\\64\\\\frontend\\\\src\\\\app\\\\page.js\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"j9OvWbTsFvYyMqBaspp4ct74Be0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQjtBQUNZO0FBQ0E7QUFHM0MsU0FBU0k7O0lBQ0wsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUE7SUFFaENELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU0sU0FBU1IsaURBQU9BLENBQUNTLEdBQUcsQ0FBQztRQUMzQixNQUFNQyxVQUFVVixpREFBT0EsQ0FBQ1MsR0FBRyxDQUFDO1FBQzVCLElBQUcsQ0FBQ0QsVUFBVSxDQUFDRSxTQUFTLE9BQU9MLE9BQU9NLElBQUksQ0FBQztRQUMzQ0MsTUFBTSxzQ0FBc0M7WUFDeENDLFNBQVM7Z0JBQUVDLGVBQWUsVUFBaUIsT0FBUE47WUFBUTtRQUNoRCxHQUNLTyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUE7WUFDRlgsUUFBUVcsS0FBS0EsSUFBSTtRQUNyQixHQUNDQyxLQUFLLENBQUNDLENBQUFBLElBQUtDLFFBQVFDLEtBQUssQ0FBQ0Y7SUFDbEMsR0FBRyxFQUFFO0lBRUwscUJBQU87a0JBQ0gsNEVBQUNHO1lBQUlDLFdBQVU7c0JBQUc7Ozs7Ozs7QUFFMUI7R0FyQlNwQjs7UUFDVUgsc0RBQVNBOzs7S0FEbkJHO0FBdUJULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY2VzcyA9IENvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIilcclxuICAgICAgICBjb25zdCByZWZyZXNoID0gQ29va2llcy5nZXQoXCJyZWZyZXNoVG9rZW5cIilcclxuICAgICAgICBpZighYWNjZXNzIHx8ICFyZWZyZXNoKSByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYWNjb3VudHNcIiwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3N9YH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKGRhdGEuZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+R29vZ2xlOiB7fTwvZGl2PlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImFjY2VzcyIsImdldCIsInJlZnJlc2giLCJwdXNoIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});