"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ 2352:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 6486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ 3544);
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';


var test = {
  getName: function getName() {
    return 'gia kiet';
  },
  getAge: function getAge() {
    return 22;
  },
  getGt4: function getGt4() {
    return Array.from([1, 2, 3], function (x) {
      return x + x;
    });
  }
};
console.log(test.getGt4());

var component = function component() {
  var element = document.createElement('div');
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');
  element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__.default.bind(null, 'Hello webpack!');
  return element;
};

document.body.appendChild(component());

/***/ }),

/***/ 3544:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
function print(text) {
  console.log(text);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(6981), __webpack_exec__(2352)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41Mjg1Y2ZhNzc5Mzk2NTkwYzljMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNRSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsT0FEVyxxQkFDRDtBQUNSLFdBQU8sVUFBUDtBQUNELEdBSFU7QUFJWEMsRUFBQUEsTUFKVyxvQkFJRjtBQUNQLFdBQU8sRUFBUDtBQUNELEdBTlU7QUFPWEMsRUFBQUEsTUFQVyxvQkFPRjtBQUNQLFdBQU9DLEtBQUssQ0FBQ0MsSUFBTixDQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVgsRUFBc0IsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsR0FBR0EsQ0FBWDtBQUFBLEtBQXRCLENBQVA7QUFDRDtBQVRVLENBQWI7QUFZQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQUksQ0FBQ0csTUFBTCxFQUFaOztBQUVBLElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFFQUYsRUFBQUEsT0FBTyxDQUFDRyxTQUFSLEdBQW9CZixrREFBQSxDQUFPLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FBUCxFQUE2QixHQUE3QixDQUFwQjtBQUNBWSxFQUFBQSxPQUFPLENBQUNLLE9BQVIsR0FBa0JoQixnREFBQSxDQUFXLElBQVgsRUFBaUIsZ0JBQWpCLENBQWxCO0FBRUEsU0FBT1csT0FBUDtBQUNELENBUEQ7O0FBU0FDLFFBQVEsQ0FBQ00sSUFBVCxDQUFjQyxXQUFkLENBQTBCVCxTQUFTLEVBQW5DOzs7Ozs7Ozs7Ozs7OztBQzVCZSxTQUFTVSxLQUFULENBQWVDLElBQWYsRUFBcUI7QUFDbENiLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxJQUFaO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xuLy8gaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcmludCBmcm9tICcuL3ByaW50JztcblxuY29uc3QgdGVzdCA9IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gJ2dpYSBraWV0JztcbiAgfSxcbiAgZ2V0QWdlKCkge1xuICAgIHJldHVybiAyMjtcbiAgfSxcbiAgZ2V0R3Q0KCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFsxLCAyLCAzXSwgKHgpID0+IHggKyB4KTtcbiAgfSxcbn07XG5cbmNvbnNvbGUubG9nKHRlc3QuZ2V0R3Q0KCkpO1xuXG5jb25zdCBjb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgZWxlbWVudC5vbmNsaWNrID0gUHJpbnQuYmluZChudWxsLCAnSGVsbG8gd2VicGFjayEnKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnQodGV4dCkge1xuICBjb25zb2xlLmxvZyh0ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJfIiwiUHJpbnQiLCJ0ZXN0IiwiZ2V0TmFtZSIsImdldEFnZSIsImdldEd0NCIsIkFycmF5IiwiZnJvbSIsIngiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImpvaW4iLCJvbmNsaWNrIiwiYmluZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInByaW50IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=