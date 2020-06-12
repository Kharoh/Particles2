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
/* harmony import */ var _utils_classes_Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/classes/Particle */ "./src/utils/classes/Particle.ts");
/* harmony import */ var _utils_classes_ParticlesCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/classes/ParticlesCanvas */ "./src/utils/classes/ParticlesCanvas.ts");


var width = document.body.clientWidth;
var height = document.body.clientHeight;
var maxFrame = -1;
var frame = 0;
var particlesCanvas = new _utils_classes_ParticlesCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](width, height);
for (var i = 0; i < 10; i++) {
    particlesCanvas.createParticle(_utils_classes_Particle__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
(function updateFrame() {
    particlesCanvas.update();
    particlesCanvas.clear();
    if (maxFrame === -1 || frame < maxFrame)
        requestAnimationFrame(function () {
            frame++;
            updateFrame();
        });
})();


/***/ }),

/***/ "./src/utils/classes/Particle.ts":
/*!***************************************!*\
  !*** ./src/utils/classes/Particle.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Particle = (function () {
    function Particle(ctx) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        var random = Math.random();
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.radius = 3;
        this.color = '#f3abfd';
    }
    Particle.prototype.render = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    Particle.prototype.move = function () {
        this.prevX = this.x;
        this.prevY = this.y;
        this.x += 0.5;
        this.y += 0.5;
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

/***/ "./src/utils/classes/ParticlesCanvas.ts":
/*!**********************************************!*\
  !*** ./src/utils/classes/ParticlesCanvas.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ParticlesCanvas = (function () {
    function ParticlesCanvas(width, height) {
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
    ParticlesCanvas.prototype.clear = function () {
        var gradient = this.context.createRadialGradient(this.width / 2, this.height / 2, 0, this.width / 2, this.height / 2, this.width);
        gradient.addColorStop(0, "rgba(18,18,18,0.1)");
        gradient.addColorStop(1, "rgba(18,18,18,0.1)");
        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.width, this.height);
    };
    ParticlesCanvas.prototype.update = function () {
        this.particles = this.particles.filter(function (particle) { return particle.move(); });
    };
    ParticlesCanvas.prototype.createParticle = function (particleConstructor) {
        this.particles.push(new particleConstructor(this.context));
    };
    return ParticlesCanvas;
}());
/* harmony default export */ __webpack_exports__["default"] = (ParticlesCanvas);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jbGFzc2VzL1BhcnRpY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jbGFzc2VzL1BhcnRpY2xlc0NhbnZhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUErQztBQUNjO0FBRTdELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVztBQUN2QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVk7QUFFekMsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLElBQUksS0FBSyxHQUFHLENBQUM7QUFFYixJQUFNLGVBQWUsR0FBRyxJQUFJLHNFQUFl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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4vdXRpbHMvY2xhc3Nlcy9QYXJ0aWNsZSdcclxuaW1wb3J0IFBhcnRpY2xlc0NhbnZhcyBmcm9tICcuL3V0aWxzL2NsYXNzZXMvUGFydGljbGVzQ2FudmFzJ1xyXG5cclxuY29uc3Qgd2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXHJcbmNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XHJcblxyXG5jb25zdCBtYXhGcmFtZSA9IC0xXHJcbmxldCBmcmFtZSA9IDBcclxuXHJcbmNvbnN0IHBhcnRpY2xlc0NhbnZhcyA9IG5ldyBQYXJ0aWNsZXNDYW52YXMod2lkdGgsIGhlaWdodClcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gIHBhcnRpY2xlc0NhbnZhcy5jcmVhdGVQYXJ0aWNsZShQYXJ0aWNsZSlcclxufVxyXG5cclxuKGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKCkge1xyXG4gIC8qIFVwZGF0ZSB0aGUgY2FudmFzICovXHJcbiAgcGFydGljbGVzQ2FudmFzLnVwZGF0ZSgpXHJcbiAgcGFydGljbGVzQ2FudmFzLmNsZWFyKClcclxuXHJcbiAgaWYgKG1heEZyYW1lID09PSAtMSB8fCBmcmFtZSA8IG1heEZyYW1lKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgZnJhbWUrK1xyXG4gICAgdXBkYXRlRnJhbWUoKVxyXG4gIH0pXHJcbn0pKClcclxuIiwiLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBQYXJ0aWNsZSBnaXZlbiB0aGUgY29udGV4dCBvZiB0aGUgY2FudmFzIHNoZSB3aWxsIGJlIG9uXHJcbiAqIEBwYXJhbSBjdHggLSBUaGUgY29udGV4dCBvZiB0aGUgY2FudmFzIHRoZSBwYXJ0aWNsZSB3aWxsIGJlIG9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBQYXJ0aWNsZSBnaXZlbiB0aGUgY29udGV4dCBvZiB0aGUgY2FudmFzIHNoZSB3aWxsIGJlIG9uXHJcbiAgICogQHBhcmFtIGN0eCAtIFRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXMgdGhlIHBhcnRpY2xlIHdpbGwgYmUgb25cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb250ZXh0IG9mIHRoZSBjYW52YXMgdGhhdCB0aGUgcGFydGljbGUgd2lsbCBiZSBvblxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuXHJcbiAgKSB7XHJcblxyXG4gICAgLyogUmV0cmlldmUgdGhlIGNhbnZhcyBmcm9tIHRoZSBjb250ZXh0ICovXHJcbiAgICB0aGlzLmNhbnZhcyA9IGN0eC5jYW52YXNcclxuXHJcbiAgICAvKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXIgdG8gdXNlIGl0IGxhdGVyIHRvIGNyZWF0ZSByYW5kb20gcGFydGljbGVzICovXHJcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbSgpXHJcblxyXG4gICAgLyogU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcGFydGljbGUgb24gdGhlIGNhbnZhcyAqL1xyXG4gICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyXHJcbiAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgLyogU2V0IHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBwYXJ0aWNsZSAqL1xyXG4gICAgdGhpcy5yYWRpdXMgPSAzXHJcbiAgICB0aGlzLmNvbG9yID0gJyNmM2FiZmQnXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlciB0aGUgcGFydGljbGUgb24gdGhlIGNvbnRleHRcclxuICAgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxyXG4gICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXHJcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyXHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXHJcbiAgICB0aGlzLmN0eC5maWxsKClcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIHRoZSBwYXJ0aWNsZSBhbmQgcmV0dXJuIGZhbHNlIGlmIGl0IHdvbnQgZXhpc3QgYW55bW9yZVxyXG4gICAqL1xyXG4gIG1vdmUoKTogYm9vbGVhbiB7XHJcbiAgICAvKiBTYXZlIHRoZSBvbGQgcG9zaXRpb25zICovXHJcbiAgICB0aGlzLnByZXZYID0gdGhpcy54XHJcbiAgICB0aGlzLnByZXZZID0gdGhpcy55XHJcblxyXG4gICAgLyogTW92ZSB0aGUgcGFydGljbGUgKi9cclxuICAgIHRoaXMueCArPSAwLjVcclxuICAgIHRoaXMueSArPSAwLjVcclxuXHJcbiAgICAvKiBJZiBpdCBpcyBub3cgb3V0c2lkZSB0aGUgYm9yZGVycyBvZiB0aGUgY3R4LCByZXR1cm4gZmFsc2UgKi9cclxuICAgIGlmICgodGhpcy54IDwgMCB8fCB0aGlzLnggPiB0aGlzLmNhbnZhcy53aWR0aCkgfHwgKHRoaXMueSA8IDAgfHwgdGhpcy55ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW5kZXIgdGhlIHBhcnRpY2xlIGF0IHRoZSBuZXcgcG9zaXRpb24gKi9cclxuICAgIHRoaXMucmVuZGVyKClcclxuXHJcbiAgICAvKiBSZXR1cm4gdHJ1ZSBzbyB0byB0ZWxsIHRoZSBwYXJ0aWNsZSBpcyBuaWNlbHkgb24gdGhlIGNvbnRleHQgKi9cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjYW52YXMgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gY29udGV4dFxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB4IHBvc2l0aW9uIG9mIHRoZSBwYXJ0aWNsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyB4OiBudW1iZXJcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHkgcG9zaXRpb24gb2YgdGhlIHBhcnRpY2xlXHJcbiAgICovXHJcbiAgcHVibGljIHk6IG51bWJlclxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGF0ZXN0IHggcG9zaXRpb24gb2YgdGhlIHBhcnRpY2xlXHJcbiAgICovXHJcbiAgcHVibGljIHByZXZYOiBudW1iZXJcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhdGVzdCB5IHBvc2l0aW9uIG9mIHRoZSBwYXJ0aWNsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBwcmV2WTogbnVtYmVyXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByYWRpdXMgb2YgdGhlIHBhcnRpY2xlXHJcbiAgICovXHJcbiAgcHVibGljIHJhZGl1czogbnVtYmVyXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgcGFydGljbGUgKGhleClcclxuICAgKi9cclxuICBwdWJsaWMgY29sb3I6IHN0cmluZ1xyXG5cclxufSIsImltcG9ydCBQYXJ0aWNsZSBmcm9tIFwiLi9QYXJ0aWNsZVwiXHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGNhbnZhcyB0byBtYW5pcHVsYXRlIHBhcnRpY2xlc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGVzQ2FudmFzIHtcclxuICBjb25zdHJ1Y3RvcihcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgY2FudmFzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB3aWR0aDogbnVtYmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgY2FudmFzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBoZWlnaHQ6IG51bWJlclxyXG5cclxuICApIHtcclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIG5ldyBjYW52YXMgZWxlbWVudCAqL1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aFxyXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKVxyXG5cclxuICAgIC8qIFJldHJpZXZlIHRoZSBjb250ZXh0ICovXHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSBhcnJheSBvZiBwYXJ0aWNsZXMgdGhlIGNhbnZhcyBjb250YWlucyAqL1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBbXVxyXG5cclxuICAgIC8qIENsZWFyIHRoZSBjYW52YXMgKi9cclxuICAgIHRoaXMuY2xlYXIoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGNhbnZhcyBhbmQgYWRkIHRoZSBncmFkaWVudCB0byBpdCwgbmVlZGVkIGJlZm9yZSBpbml0aWFsaXphdGlvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIC8qIENyZWF0ZSB0aGUgZ3JhZGllbnQgKi9cclxuICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIDAsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgpXHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDE4LDE4LDE4LDAuMSlcIilcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMTgsMTgsMTgsMC4xKVwiKVxyXG5cclxuICAgIC8qIEFkZCB0aGUgZ3JhZGllbnQgdG8gdGhlIGNhbnZhcyAqL1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgYWxsIHRoZSBwYXJ0aWNsZXMgdG8gbWFrZSB0aGVtIG1vdmUgb24gdGhlIGNhbnZhc1xyXG4gICAqL1xyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAvKiBNb3ZlIHRoZSBwYXJ0aWNsZXMgYW5kIHJlbW92ZSB0aGUgb25lcyBvdXRzaWRlIHRoZSBib2FyZCAqL1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5maWx0ZXIocGFydGljbGUgPT4gcGFydGljbGUubW92ZSgpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IHBhcnRpY2xlIG9uIHRoZSBjYW52YXNcclxuICAgKiBAcGFyYW0gcGFydGljbGVDb25zdHJ1Y3RvciAtIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgbmV3IHBhcnRpY2xlIHRvIGFkZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVQYXJ0aWNsZShwYXJ0aWNsZUNvbnN0cnVjdG9yOiB0eXBlb2YgUGFydGljbGUpOiB2b2lkIHtcclxuICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IHBhcnRpY2xlQ29uc3RydWN0b3IodGhpcy5jb250ZXh0KSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjYW52YXMgZWxlbWVudCBvZiB0aGlzIHBhcnRpY2xlIGNhbnZhc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSAyZCBjb250ZXh0IG9mIHRoZSBjdXJyZW50IGNhbnZhc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFycmF5IG9mIHBhcnRpY2xlcyBvbiB0aGUgY2FudmFzXHJcbiAgICovXHJcbiAgcHVibGljIHBhcnRpY2xlczogUGFydGljbGVbXVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=