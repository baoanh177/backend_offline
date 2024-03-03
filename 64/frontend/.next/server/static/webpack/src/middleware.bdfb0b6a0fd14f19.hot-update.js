"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(middleware)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\"use client\";\n\nfunction middleware(request) {\n    const access = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"accessToken\");\n    const refresh = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"refreshToken\");\n    console.log(access);\n    console.log(refresh);\n}\nconst config = {\n    matcher: \"\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFK0I7QUFFeEIsU0FBU0MsV0FBV0MsT0FBTztJQUMxQixNQUFNQyxTQUFTSCxpREFBT0EsQ0FBQ0ksR0FBRyxDQUFDO0lBQzNCLE1BQU1DLFVBQVVMLGlEQUFPQSxDQUFDSSxHQUFHLENBQUM7SUFDNUJFLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWkcsUUFBUUMsR0FBRyxDQUFDRjtBQUNwQjtBQUVPLE1BQU1HLFNBQVM7SUFDbEJDLFNBQVM7QUFDYixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLmpzP2E0OWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdCkge1xyXG4gICAgICAgIGNvbnN0IGFjY2VzcyA9IENvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIilcclxuICAgICAgICBjb25zdCByZWZyZXNoID0gQ29va2llcy5nZXQoXCJyZWZyZXNoVG9rZW5cIilcclxuICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3MpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVmcmVzaClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIG1hdGNoZXI6IFwiXCJcclxufSJdLCJuYW1lcyI6WyJDb29raWVzIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJhY2Nlc3MiLCJnZXQiLCJyZWZyZXNoIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});