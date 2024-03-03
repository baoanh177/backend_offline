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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(middleware)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nfunction middleware(request) {\n    const access = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"accessToken\");\n    const refresh = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"refreshToken\");\n    console.log(access);\n    console.log(refresh);\n}\nconst config = {\n    matcher: \"\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQytCO0FBRXhCLFNBQVNDLFdBQVdDLE9BQU87SUFDMUIsTUFBTUMsU0FBU0gsaURBQU9BLENBQUNJLEdBQUcsQ0FBQztJQUMzQixNQUFNQyxVQUFVTCxpREFBT0EsQ0FBQ0ksR0FBRyxDQUFDO0lBQzVCRSxRQUFRQyxHQUFHLENBQUNKO0lBQ1pHLFFBQVFDLEdBQUcsQ0FBQ0Y7QUFDcEI7QUFFTyxNQUFNRyxTQUFTO0lBQ2xCQyxTQUFTO0FBQ2IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS5qcz9hNDlhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcclxuICAgICAgICBjb25zdCBhY2Nlc3MgPSBDb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpXHJcbiAgICAgICAgY29uc3QgcmVmcmVzaCA9IENvb2tpZXMuZ2V0KFwicmVmcmVzaFRva2VuXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coYWNjZXNzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlZnJlc2gpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBcIlwiXHJcbn0iXSwibmFtZXMiOlsiQ29va2llcyIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiYWNjZXNzIiwiZ2V0IiwicmVmcmVzaCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});