/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Particle */ "./src/utils/Particle.ts");
/* harmony import */ var _utils_ParticlesGround__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ParticlesGround */ "./src/utils/ParticlesGround.ts");


var width = document.body.clientWidth;
var height = document.body.clientHeight;
var maxFrame = Infinity;
var frame = 0;
var particlesGround = new _utils_ParticlesGround__WEBPACK_IMPORTED_MODULE_1__["default"](width, height);
for (var i = 0; i < 5; i++) {
    particlesGround.createParticle(_utils_Particle__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
(function updateFrame() {
    particlesGround.update();
    particlesGround.clear();
    if (frame < maxFrame)
        requestAnimationFrame(function () {
            frame++;
            updateFrame();
        });
})();


/***/ }),

/***/ "./src/utils/Particle.ts":
/*!*******************************!*\
  !*** ./src/utils/Particle.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Particle = (function () {
    function Particle(ctx) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        var random = Math.random();
        this.x = this.canvas.width / 2 + (Math.random() * 2 - 1) * 200;
        this.y = this.canvas.height / 2 + (Math.random() * 2 - 1) * 200;
        this.vector = [Math.cos(random * Math.PI * 2), Math.sin(random * Math.PI * 2)];
        this.radius = 2;
        this.color = ['#f3abfd', '#8bc3f7', '#f8ed93', '#abfdb9'][Math.floor(Math.random() * 4)];
    }
    Particle.prototype.render = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    Particle.prototype.move = function (particles) {
        this.prevX = this.x;
        this.prevY = this.y;
        var attraction = particles.reduce(function (acc, particle) { return [acc[0] + particle.x, acc[1] + particle.y]; }, [0, 0]).map(function (val) { return val / particles.length; });
        var rawAttractionVector = [attraction[0] - this.x, attraction[1] - this.y];
        var norm = Math.sqrt(Math.pow(rawAttractionVector[0], 2) + Math.pow(rawAttractionVector[1], 2));
        var attractionVector = rawAttractionVector.map(function (val) { return norm ? val / norm : val; });
        this.vector = [
            this.vector[0] + attractionVector[0],
            this.vector[1] + attractionVector[1]
        ];
        this.x += this.vector[0];
        this.y += this.vector[1];
        if ((this.x < 0 || this.x > this.canvas.width) || (this.y < 0 || this.y > this.canvas.height)) {
            return false;
        }
        this.render();
        return true;
    };
    return Particle;
}());
/* harmony default export */ __webpack_exports__["default"] = (Particle);


/***/ }),

/***/ "./src/utils/ParticlesGround.ts":
/*!**************************************!*\
  !*** ./src/utils/ParticlesGround.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ParticlesGround = (function () {
    function ParticlesGround(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.particles = [];
        this.clear();
    }
    ParticlesGround.prototype.clear = function () {
        var gradient = this.context.createRadialGradient(this.width / 2, this.height / 2, 0, this.width / 2, this.height / 2, this.width);
        gradient.addColorStop(0, "rgba(18,18,18,0.1)");
        gradient.addColorStop(1, "rgba(18,18,18,0.1)");
        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.width, this.height);
    };
    ParticlesGround.prototype.update = function () {
        var _this = this;
        this.particles = this.particles.filter(function (particle) { return particle.move(_this.particles); });
    };
    ParticlesGround.prototype.createParticle = function (particleConstructor) {
        this.particles.push(new particleConstructor(this.context));
    };
    return ParticlesGround;
}());
/* harmony default export */ __webpack_exports__["default"] = (ParticlesGround);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9QYXJ0aWNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFydGljbGVzR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQXVDO0FBQ2M7QUFFckQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXO0FBQ3ZDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWTtBQUV6QyxJQUFNLFFBQVEsR0FBRyxRQUFRO0FBQ3pCLElBQUksS0FBSyxHQUFHLENBQUM7QUFFYixJQUFNLGVBQWUsR0FBRyxJQUFJLDhEQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0s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YjtRQUFBLGlCQUdDO1FBREMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxrQkFBUSxJQUFJLGVBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUE3QixDQUE2QixDQUFDO0lBQ25GLENBQUM7SUFNTSx3Q0FBYyxHQUFyQixVQUFzQixtQkFBb0M7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQWdCSCxzQkFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgUGFydGljbGUgZnJvbSAnLi91dGlscy9QYXJ0aWNsZSdcclxuaW1wb3J0IFBhcnRpY2xlc0dyb3VuZCBmcm9tICcuL3V0aWxzL1BhcnRpY2xlc0dyb3VuZCdcclxuXHJcbmNvbnN0IHdpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aFxyXG5jb25zdCBoZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxyXG5cclxuY29uc3QgbWF4RnJhbWUgPSBJbmZpbml0eVxyXG5sZXQgZnJhbWUgPSAwXHJcblxyXG5jb25zdCBwYXJ0aWNsZXNHcm91bmQgPSBuZXcgUGFydGljbGVzR3JvdW5kKHdpZHRoLCBoZWlnaHQpXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gIHBhcnRpY2xlc0dyb3VuZC5jcmVhdGVQYXJ0aWNsZShQYXJ0aWNsZSlcclxufVxyXG5cclxuKGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKCkge1xyXG4gIC8qIFVwZGF0ZSB0aGUgY2FudmFzICovXHJcbiAgcGFydGljbGVzR3JvdW5kLnVwZGF0ZSgpXHJcbiAgcGFydGljbGVzR3JvdW5kLmNsZWFyKClcclxuXHJcbiAgaWYgKGZyYW1lIDwgbWF4RnJhbWUpIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICBmcmFtZSsrXHJcbiAgICB1cGRhdGVGcmFtZSgpXHJcbiAgfSlcclxufSkoKVxyXG4iLCIvKipcclxuICogQ3JlYXRlIGEgbmV3IFBhcnRpY2xlIGdpdmVuIHRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXMgc2hlIHdpbGwgYmUgb25cclxuICogQHBhcmFtIGN0eCAtIFRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXMgdGhlIHBhcnRpY2xlIHdpbGwgYmUgb25cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXMgdGhhdCB0aGUgcGFydGljbGUgd2lsbCBiZSBvblxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuXHJcbiAgKSB7XHJcblxyXG4gICAgLyogUmV0cmlldmUgdGhlIGNhbnZhcyBmcm9tIHRoZSBjb250ZXh0ICovXHJcbiAgICB0aGlzLmNhbnZhcyA9IGN0eC5jYW52YXNcclxuXHJcbiAgICAvKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXIgdG8gdXNlIGl0IGxhdGVyIHRvIGNyZWF0ZSByYW5kb20gcGFydGljbGVzICovXHJcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbSgpXHJcblxyXG4gICAgLyogU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcGFydGljbGUgb24gdGhlIGNhbnZhcyAqL1xyXG4gICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyICsgKE1hdGgucmFuZG9tKCkgKiAyIC0gMSkgKiAyMDBcclxuICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIDIwMFxyXG5cclxuICAgIHRoaXMudmVjdG9yID0gW01hdGguY29zKHJhbmRvbSAqIE1hdGguUEkgKiAyKSwgTWF0aC5zaW4ocmFuZG9tICogTWF0aC5QSSAqIDIpXVxyXG5cclxuICAgIC8qIFNldCB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgcGFydGljbGUgKi9cclxuICAgIHRoaXMucmFkaXVzID0gMlxyXG4gICAgdGhpcy5jb2xvciA9IFsnI2YzYWJmZCcsICcjOGJjM2Y3JywgJyNmOGVkOTMnLCAnI2FiZmRiOSddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXVxyXG5cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXIgdGhlIHBhcnRpY2xlIG9uIHRoZSBjb250ZXh0XHJcbiAgICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKClcclxuICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxyXG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMlxyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxyXG4gICAgdGhpcy5jdHguZmlsbCgpXHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZSB0aGUgcGFydGljbGUgYW5kIHJldHVybiBmYWxzZSBpZiBpdCB3b250IGV4aXN0IGFueW1vcmVcclxuICAgKi9cclxuICBtb3ZlKHBhcnRpY2xlczogUGFydGljbGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgLyogU2F2ZSB0aGUgb2xkIHBvc2l0aW9ucyAqL1xyXG4gICAgdGhpcy5wcmV2WCA9IHRoaXMueFxyXG4gICAgdGhpcy5wcmV2WSA9IHRoaXMueVxyXG5cclxuICAgIC8qIFdvcmtpbmcgdGhlIGF0dHJhY3Rpb24gY2VudGVyIGZvciB0aGUgcGFydGljbGVzICovXHJcbiAgICBjb25zdCBhdHRyYWN0aW9uID0gcGFydGljbGVzLnJlZHVjZSgoYWNjLCBwYXJ0aWNsZSkgPT4gW2FjY1swXSArIHBhcnRpY2xlLngsIGFjY1sxXSArIHBhcnRpY2xlLnldLCBbMCwgMF0pLm1hcCh2YWwgPT4gdmFsIC8gcGFydGljbGVzLmxlbmd0aClcclxuICAgIC8qIFdoZXJlIHRoZSBwYXJ0aWNsZSBzaG91bGQgZ28gcmVsYXRpdmUgdG8gaXRzIGNvb3JkaW5hdGVzIHRvIGpvaW4gdGhlIGF0dHJhdGlvbiBjZW50ZXIgKi9cclxuICAgIGNvbnN0IHJhd0F0dHJhY3Rpb25WZWN0b3IgPSBbYXR0cmFjdGlvblswXSAtIHRoaXMueCwgYXR0cmFjdGlvblsxXSAtIHRoaXMueV1cclxuICAgIC8qIFdvcmtpbmcgdGhlIG5vcm0gb2YgdGhlIHZlY3RvciBzbyB3ZSBjYW4ga25vdyB0aGUgZGlzdGFuY2Ugb2YgdGhlIHBhcnRpY2xlIGZyb20gdGhlIGNlbnRlciBhbmQgcmVzaXplIHRoZSB2ZWN0b3IgKi9cclxuICAgIGNvbnN0IG5vcm0gPSBNYXRoLnNxcnQocmF3QXR0cmFjdGlvblZlY3RvclswXSAqKiAyICsgcmF3QXR0cmFjdGlvblZlY3RvclsxXSAqKiAyKVxyXG4gICAgLyogUmVzaXppbmcgdGhlIHJhdyBhdHRyYWN0aW9uIHZlY3RvciAqL1xyXG4gICAgY29uc3QgYXR0cmFjdGlvblZlY3RvciA9IHJhd0F0dHJhY3Rpb25WZWN0b3IubWFwKHZhbCA9PiBub3JtID8gdmFsIC8gbm9ybSA6IHZhbClcclxuXHJcbiAgICAvKiBDaGFuZ2luZyB0aGUgZGlyZWN0aW9uIHZlY3RvciBvZiB0aGUgcGFydGljbGUgKi9cclxuICAgIHRoaXMudmVjdG9yID0gW1xyXG4gICAgICB0aGlzLnZlY3RvclswXSArIGF0dHJhY3Rpb25WZWN0b3JbMF0sXHJcbiAgICAgIHRoaXMudmVjdG9yWzFdICsgYXR0cmFjdGlvblZlY3RvclsxXVxyXG4gICAgXVxyXG5cclxuICAgIC8qIE1vdmUgdGhlIHBhcnRpY2xlICovXHJcbiAgICB0aGlzLnggKz0gdGhpcy52ZWN0b3JbMF1cclxuICAgIHRoaXMueSArPSB0aGlzLnZlY3RvclsxXVxyXG5cclxuICAgIC8qIElmIGl0IGlzIG5vdyBvdXRzaWRlIHRoZSBib3JkZXJzIG9mIHRoZSBjdHgsIHJldHVybiBmYWxzZSAqL1xyXG4gICAgaWYgKCh0aGlzLnggPCAwIHx8IHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoKSB8fCAodGhpcy55IDwgMCB8fCB0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbmRlciB0aGUgcGFydGljbGUgYXQgdGhlIG5ldyBwb3NpdGlvbiAqL1xyXG4gICAgdGhpcy5yZW5kZXIoKVxyXG5cclxuICAgIC8qIFJldHVybiB0cnVlIHNvIHRvIHRlbGwgdGhlIHBhcnRpY2xlIGlzIG5pY2VseSBvbiB0aGUgY29udGV4dCAqL1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNhbnZhcyBlbGVtZW50IG9mIHRoZSBnaXZlbiBjb250ZXh0XHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHggcG9zaXRpb24gb2YgdGhlIHBhcnRpY2xlXHJcbiAgICovXHJcbiAgcHVibGljIHg6IG51bWJlclxyXG5cclxuICAvKipcclxuICAgKiBUaGUgeSBwb3NpdGlvbiBvZiB0aGUgcGFydGljbGVcclxuICAgKi9cclxuICBwdWJsaWMgeTogbnVtYmVyXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXRlc3QgeCBwb3NpdGlvbiBvZiB0aGUgcGFydGljbGVcclxuICAgKi9cclxuICBwdWJsaWMgcHJldlg6IG51bWJlclxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGF0ZXN0IHkgcG9zaXRpb24gb2YgdGhlIHBhcnRpY2xlXHJcbiAgICovXHJcbiAgcHVibGljIHByZXZZOiBudW1iZXJcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNwZWVkIHZlY3RvciwgbWFwcGluZyB0aGUgc3BlZWQgYW5kIGRpcmVjdGlvbiBvZiB0aGUgcGFydGljbGUsIGZpcnN0IHZhbHVlIGlzIHggbW9kaWZpZXIgYW5kIHNlY29uZCBpcyB5XHJcbiAgICovXHJcbiAgcHVibGljIHZlY3RvcjogbnVtYmVyW11cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHJhZGl1cyBvZiB0aGUgcGFydGljbGVcclxuICAgKi9cclxuICBwdWJsaWMgcmFkaXVzOiBudW1iZXJcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBwYXJ0aWNsZSAoaGV4KVxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nXHJcblxyXG59IiwiaW1wb3J0IFBhcnRpY2xlIGZyb20gXCIuL1BhcnRpY2xlXCJcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgY2FudmFzIHRvIG1hbmlwdWxhdGUgcGFydGljbGVzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZXNHcm91bmQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBjYW52YXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBjYW52YXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyXHJcblxyXG4gICkge1xyXG5cclxuICAgIC8qIENyZWF0ZSB0aGUgbmV3IGNhbnZhcyBlbGVtZW50ICovXHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoXHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpXHJcblxyXG4gICAgLyogUmV0cmlldmUgdGhlIGNvbnRleHQgKi9cclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIGFycmF5IG9mIHBhcnRpY2xlcyB0aGUgY2FudmFzIGNvbnRhaW5zICovXHJcbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdXHJcblxyXG4gICAgLyogQ2xlYXIgdGhlIGNhbnZhcyAqL1xyXG4gICAgdGhpcy5jbGVhcigpXHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGNhbnZhcyBhbmQgYWRkIHRoZSBncmFkaWVudCB0byBpdCwgbmVlZGVkIGJlZm9yZSBpbml0aWFsaXphdGlvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIC8qIENyZWF0ZSB0aGUgZ3JhZGllbnQgKi9cclxuICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIDAsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgpXHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDE4LDE4LDE4LDAuMSlcIilcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMTgsMTgsMTgsMC4xKVwiKVxyXG5cclxuICAgIC8qIEFkZCB0aGUgZ3JhZGllbnQgdG8gdGhlIGNhbnZhcyAqL1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgYWxsIHRoZSBwYXJ0aWNsZXMgdG8gbWFrZSB0aGVtIG1vdmUgb24gdGhlIGNhbnZhc1xyXG4gICAqL1xyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvKiBNb3ZlIHRoZSBwYXJ0aWNsZXMgYW5kIHJlbW92ZSB0aGUgb25lcyBvdXRzaWRlIHRoZSBib2FyZCAqL1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4gcGFydGljbGUubW92ZSh0aGlzLnBhcnRpY2xlcykpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgcGFydGljbGUgb24gdGhlIGNhbnZhc1xyXG4gICAqIEBwYXJhbSBwYXJ0aWNsZUNvbnN0cnVjdG9yIC0gVGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBuZXcgcGFydGljbGUgdG8gYWRkXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZVBhcnRpY2xlKHBhcnRpY2xlQ29uc3RydWN0b3I6IHR5cGVvZiBQYXJ0aWNsZSk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgcGFydGljbGVDb25zdHJ1Y3Rvcih0aGlzLmNvbnRleHQpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNhbnZhcyBlbGVtZW50IG9mIHRoaXMgcGFydGljbGUgY2FudmFzXHJcbiAgICovXHJcbiAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIDJkIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgY2FudmFzXHJcbiAgICovXHJcbiAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxyXG5cclxuICAvKipcclxuICAgKiBUaGUgYXJyYXkgb2YgcGFydGljbGVzIG9uIHRoZSBjYW52YXNcclxuICAgKi9cclxuICBwdWJsaWMgcGFydGljbGVzOiBQYXJ0aWNsZVtdXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==