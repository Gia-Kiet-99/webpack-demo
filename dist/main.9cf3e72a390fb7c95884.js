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
  } // getGt4() {
  //   return Array.from([1, 2, 3]);
  // },

};
console.log(test.getAge());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45Y2YzZTcyYTM5MGZiN2M5NTg4NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNRSxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsT0FEVyxxQkFDRDtBQUNSLFdBQU8sVUFBUDtBQUNELEdBSFU7QUFJWEMsRUFBQUEsTUFKVyxvQkFJRjtBQUNQLFdBQU8sRUFBUDtBQUNELEdBTlUsQ0FPWDtBQUNBO0FBQ0E7O0FBVFcsQ0FBYjtBQVlBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBSSxDQUFDRSxNQUFMLEVBQVo7O0FBRUEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUVBRixFQUFBQSxPQUFPLENBQUNHLFNBQVIsR0FBb0JYLGtEQUFBLENBQU8sQ0FBQyxPQUFELEVBQVUsU0FBVixDQUFQLEVBQTZCLEdBQTdCLENBQXBCO0FBQ0FRLEVBQUFBLE9BQU8sQ0FBQ0ssT0FBUixHQUFrQlosZ0RBQUEsQ0FBVyxJQUFYLEVBQWlCLGdCQUFqQixDQUFsQjtBQUVBLFNBQU9PLE9BQVA7QUFDRCxDQVBEOztBQVNBQyxRQUFRLENBQUNNLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlQsU0FBUyxFQUFuQzs7Ozs7Ozs7Ozs7Ozs7QUM1QmUsU0FBU1UsS0FBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ2xDYixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBWjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcbi8vIGltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnLi9wcmludCc7XG5cbmNvbnN0IHRlc3QgPSB7XG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuICdnaWEga2lldCc7XG4gIH0sXG4gIGdldEFnZSgpIHtcbiAgICByZXR1cm4gMjI7XG4gIH0sXG4gIC8vIGdldEd0NCgpIHtcbiAgLy8gICByZXR1cm4gQXJyYXkuZnJvbShbMSwgMiwgM10pO1xuICAvLyB9LFxufTtcblxuY29uc29sZS5sb2codGVzdC5nZXRBZ2UoKSk7XG5cbmNvbnN0IGNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuICBlbGVtZW50Lm9uY2xpY2sgPSBQcmludC5iaW5kKG51bGwsICdIZWxsbyB3ZWJwYWNrIScpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludCh0ZXh0KSB7XG4gIGNvbnNvbGUubG9nKHRleHQpO1xufVxuIl0sIm5hbWVzIjpbIl8iLCJQcmludCIsInRlc3QiLCJnZXROYW1lIiwiZ2V0QWdlIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJqb2luIiwib25jbGljayIsImJpbmQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJwcmludCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9