/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(25);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	  'use strict';

	  __webpack_require__(2);
	  __webpack_require__(6);
	  __webpack_require__(21);

	  var marked = __webpack_require__(23);
	  var Reveal = __webpack_require__(24);
	  Reveal.initialize();

	})();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!./reveal.css", function() {
				var newContent = require("!!../../css-loader/index.js!./reveal.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\n * reveal.js\n * http://revealjs.com\n * MIT licensed\n *\n * Copyright (C) 2019 Hakim El Hattab, http://hakim.se\n */\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nhtml {\n  width: 100%;\n  height: 100%;\n  height: 100vh;\n  height: calc( var(--vh, 1vh) * 100);\n  overflow: hidden; }\n\nbody {\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  line-height: 1;\n  margin: 0;\n  background-color: #fff;\n  color: #000; }\n\n/*********************************************\n * VIEW FRAGMENTS\n *********************************************/\n.reveal .slides section .fragment {\n  opacity: 0;\n  visibility: hidden;\n  transition: all .2s ease; }\n  .reveal .slides section .fragment.visible {\n    opacity: 1;\n    visibility: inherit; }\n\n.reveal .slides section .fragment.grow {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.grow.visible {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n\n.reveal .slides section .fragment.shrink {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.shrink.visible {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n\n.reveal .slides section .fragment.zoom-in {\n  -webkit-transform: scale(0.1);\n          transform: scale(0.1); }\n  .reveal .slides section .fragment.zoom-in.visible {\n    -webkit-transform: none;\n            transform: none; }\n\n.reveal .slides section .fragment.fade-out {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.fade-out.visible {\n    opacity: 0;\n    visibility: hidden; }\n\n.reveal .slides section .fragment.semi-fade-out {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.semi-fade-out.visible {\n    opacity: 0.5;\n    visibility: inherit; }\n\n.reveal .slides section .fragment.strike {\n  opacity: 1;\n  visibility: inherit; }\n  .reveal .slides section .fragment.strike.visible {\n    text-decoration: line-through; }\n\n.reveal .slides section .fragment.fade-up {\n  -webkit-transform: translate(0, 20%);\n          transform: translate(0, 20%); }\n  .reveal .slides section .fragment.fade-up.visible {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.reveal .slides section .fragment.fade-down {\n  -webkit-transform: translate(0, -20%);\n          transform: translate(0, -20%); }\n  .reveal .slides section .fragment.fade-down.visible {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.reveal .slides section .fragment.fade-right {\n  -webkit-transform: translate(-20%, 0);\n          transform: translate(-20%, 0); }\n  .reveal .slides section .fragment.fade-right.visible {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.reveal .slides section .fragment.fade-left {\n  -webkit-transform: translate(20%, 0);\n          transform: translate(20%, 0); }\n  .reveal .slides section .fragment.fade-left.visible {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.reveal .slides section .fragment.fade-in-then-out,\n.reveal .slides section .fragment.current-visible {\n  opacity: 0;\n  visibility: hidden; }\n  .reveal .slides section .fragment.fade-in-then-out.current-fragment,\n  .reveal .slides section .fragment.current-visible.current-fragment {\n    opacity: 1;\n    visibility: inherit; }\n\n.reveal .slides section .fragment.fade-in-then-semi-out {\n  opacity: 0;\n  visibility: hidden; }\n  .reveal .slides section .fragment.fade-in-then-semi-out.visible {\n    opacity: 0.5;\n    visibility: inherit; }\n  .reveal .slides section .fragment.fade-in-then-semi-out.current-fragment {\n    opacity: 1;\n    visibility: inherit; }\n\n.reveal .slides section .fragment.highlight-red,\n.reveal .slides section .fragment.highlight-current-red,\n.reveal .slides section .fragment.highlight-green,\n.reveal .slides section .fragment.highlight-current-green,\n.reveal .slides section .fragment.highlight-blue,\n.reveal .slides section .fragment.highlight-current-blue {\n  opacity: 1;\n  visibility: inherit; }\n\n.reveal .slides section .fragment.highlight-red.visible {\n  color: #ff2c2d; }\n\n.reveal .slides section .fragment.highlight-green.visible {\n  color: #17ff2e; }\n\n.reveal .slides section .fragment.highlight-blue.visible {\n  color: #1b91ff; }\n\n.reveal .slides section .fragment.highlight-current-red.current-fragment {\n  color: #ff2c2d; }\n\n.reveal .slides section .fragment.highlight-current-green.current-fragment {\n  color: #17ff2e; }\n\n.reveal .slides section .fragment.highlight-current-blue.current-fragment {\n  color: #1b91ff; }\n\n/*********************************************\n * DEFAULT ELEMENT STYLES\n *********************************************/\n/* Fixes issue in Chrome where italic fonts did not appear when printing to PDF */\n.reveal:after {\n  content: '';\n  font-style: italic; }\n\n.reveal iframe {\n  z-index: 1; }\n\n/** Prevents layering issues in certain browser/transition combinations */\n.reveal a {\n  position: relative; }\n\n.reveal .stretch {\n  max-width: none;\n  max-height: none; }\n\n.reveal pre.stretch code {\n  height: 100%;\n  max-height: 100%;\n  box-sizing: border-box; }\n\n/*********************************************\n * CONTROLS\n *********************************************/\n@-webkit-keyframes bounce-right {\n  0%, 10%, 25%, 40%, 50% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  20% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n  30% {\n    -webkit-transform: translateX(-5px);\n            transform: translateX(-5px); } }\n@keyframes bounce-right {\n  0%, 10%, 25%, 40%, 50% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  20% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n  30% {\n    -webkit-transform: translateX(-5px);\n            transform: translateX(-5px); } }\n\n@-webkit-keyframes bounce-down {\n  0%, 10%, 25%, 40%, 50% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  20% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  30% {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px); } }\n\n@keyframes bounce-down {\n  0%, 10%, 25%, 40%, 50% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  20% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  30% {\n    -webkit-transform: translateY(-5px);\n            transform: translateY(-5px); } }\n\n.reveal .controls {\n  display: none;\n  position: absolute;\n  top: auto;\n  bottom: 12px;\n  right: 12px;\n  left: auto;\n  z-index: 1;\n  color: #000;\n  pointer-events: none;\n  font-size: 10px; }\n  .reveal .controls button {\n    position: absolute;\n    padding: 0;\n    background-color: transparent;\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    color: currentColor;\n    -webkit-transform: scale(0.9999);\n            transform: scale(0.9999);\n    transition: color 0.2s ease, opacity 0.2s ease, -webkit-transform 0.2s ease;\n    transition: color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;\n    z-index: 2;\n    pointer-events: auto;\n    font-size: inherit;\n    visibility: hidden;\n    opacity: 0;\n    -webkit-appearance: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n  .reveal .controls .controls-arrow:before,\n  .reveal .controls .controls-arrow:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 2.6em;\n    height: 0.5em;\n    border-radius: 0.25em;\n    background-color: currentColor;\n    transition: all 0.15s ease, background-color 0.8s ease;\n    -webkit-transform-origin: 0.2em 50%;\n            transform-origin: 0.2em 50%;\n    will-change: transform; }\n  .reveal .controls .controls-arrow {\n    position: relative;\n    width: 3.6em;\n    height: 3.6em; }\n    .reveal .controls .controls-arrow:before {\n      -webkit-transform: translateX(0.5em) translateY(1.55em) rotate(45deg);\n              transform: translateX(0.5em) translateY(1.55em) rotate(45deg); }\n    .reveal .controls .controls-arrow:after {\n      -webkit-transform: translateX(0.5em) translateY(1.55em) rotate(-45deg);\n              transform: translateX(0.5em) translateY(1.55em) rotate(-45deg); }\n    .reveal .controls .controls-arrow:hover:before {\n      -webkit-transform: translateX(0.5em) translateY(1.55em) rotate(40deg);\n              transform: translateX(0.5em) translateY(1.55em) rotate(40deg); }\n    .reveal .controls .controls-arrow:hover:after {\n      -webkit-transform: translateX(0.5em) translateY(1.55em) rotate(-40deg);\n              transform: translateX(0.5em) translateY(1.55em) rotate(-40deg); }\n    .reveal .controls .controls-arrow:active:before {\n      -webkit-transform: translateX(0.5em) translateY(1.55em) rotate(36deg);\n              transform: translateX(0.5em) translateY(1.55em) rotate(36deg); }\n    .reveal .controls .controls-arrow:active:after {\n      -webkit-transform: translateX(0.5em) translateY(1.55em) rotate(-36deg);\n              transform: translateX(0.5em) translateY(1.55em) rotate(-36deg); }\n  .reveal .controls .navigate-left {\n    right: 6.4em;\n    bottom: 3.2em;\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px); }\n  .reveal .controls .navigate-right {\n    right: 0;\n    bottom: 3.2em;\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n    .reveal .controls .navigate-right .controls-arrow {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n    .reveal .controls .navigate-right.highlight {\n      -webkit-animation: bounce-right 2s 50 both ease-out;\n              animation: bounce-right 2s 50 both ease-out; }\n  .reveal .controls .navigate-up {\n    right: 3.2em;\n    bottom: 6.4em;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n    .reveal .controls .navigate-up .controls-arrow {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  .reveal .controls .navigate-down {\n    right: 3.2em;\n    bottom: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n    .reveal .controls .navigate-down .controls-arrow {\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg); }\n    .reveal .controls .navigate-down.highlight {\n      -webkit-animation: bounce-down 2s 50 both ease-out;\n              animation: bounce-down 2s 50 both ease-out; }\n  .reveal .controls[data-controls-back-arrows=\"faded\"] .navigate-left.enabled,\n  .reveal .controls[data-controls-back-arrows=\"faded\"] .navigate-up.enabled {\n    opacity: 0.3; }\n    .reveal .controls[data-controls-back-arrows=\"faded\"] .navigate-left.enabled:hover,\n    .reveal .controls[data-controls-back-arrows=\"faded\"] .navigate-up.enabled:hover {\n      opacity: 1; }\n  .reveal .controls[data-controls-back-arrows=\"hidden\"] .navigate-left.enabled,\n  .reveal .controls[data-controls-back-arrows=\"hidden\"] .navigate-up.enabled {\n    opacity: 0;\n    visibility: hidden; }\n  .reveal .controls .enabled {\n    visibility: visible;\n    opacity: 0.9;\n    cursor: pointer;\n    -webkit-transform: none;\n            transform: none; }\n  .reveal .controls .enabled.fragmented {\n    opacity: 0.5; }\n  .reveal .controls .enabled:hover,\n  .reveal .controls .enabled.fragmented:hover {\n    opacity: 1; }\n\n.reveal[data-navigation-mode=\"linear\"].has-horizontal-slides .navigate-up,\n.reveal[data-navigation-mode=\"linear\"].has-horizontal-slides .navigate-down {\n  display: none; }\n\n.reveal[data-navigation-mode=\"linear\"].has-horizontal-slides .navigate-left,\n.reveal:not(.has-vertical-slides) .controls .navigate-left {\n  bottom: 1.4em;\n  right: 5.5em; }\n\n.reveal[data-navigation-mode=\"linear\"].has-horizontal-slides .navigate-right,\n.reveal:not(.has-vertical-slides) .controls .navigate-right {\n  bottom: 1.4em;\n  right: 0.5em; }\n\n.reveal:not(.has-horizontal-slides) .controls .navigate-up {\n  right: 1.4em;\n  bottom: 5em; }\n\n.reveal:not(.has-horizontal-slides) .controls .navigate-down {\n  right: 1.4em;\n  bottom: 0.5em; }\n\n.reveal.has-dark-background .controls {\n  color: #fff; }\n\n.reveal.has-light-background .controls {\n  color: #000; }\n\n.reveal.no-hover .controls .controls-arrow:hover:before,\n.reveal.no-hover .controls .controls-arrow:active:before {\n  -webkit-transform: translateX(0.5em) translateY(1.55em) rotate(45deg);\n          transform: translateX(0.5em) translateY(1.55em) rotate(45deg); }\n\n.reveal.no-hover .controls .controls-arrow:hover:after,\n.reveal.no-hover .controls .controls-arrow:active:after {\n  -webkit-transform: translateX(0.5em) translateY(1.55em) rotate(-45deg);\n          transform: translateX(0.5em) translateY(1.55em) rotate(-45deg); }\n\n@media screen and (min-width: 500px) {\n  .reveal .controls[data-controls-layout=\"edges\"] {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n  .reveal .controls[data-controls-layout=\"edges\"] .navigate-left,\n  .reveal .controls[data-controls-layout=\"edges\"] .navigate-right,\n  .reveal .controls[data-controls-layout=\"edges\"] .navigate-up,\n  .reveal .controls[data-controls-layout=\"edges\"] .navigate-down {\n    bottom: auto;\n    right: auto; }\n  .reveal .controls[data-controls-layout=\"edges\"] .navigate-left {\n    top: 50%;\n    left: 8px;\n    margin-top: -1.8em; }\n  .reveal .controls[data-controls-layout=\"edges\"] .navigate-right {\n    top: 50%;\n    right: 8px;\n    margin-top: -1.8em; }\n  .reveal .controls[data-controls-layout=\"edges\"] .navigate-up {\n    top: 8px;\n    left: 50%;\n    margin-left: -1.8em; }\n  .reveal .controls[data-controls-layout=\"edges\"] .navigate-down {\n    bottom: 8px;\n    left: 50%;\n    margin-left: -1.8em; } }\n\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  position: absolute;\n  display: none;\n  height: 3px;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #fff; }\n\n.reveal .progress:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 10px;\n  width: 100%;\n  top: -10px; }\n\n.reveal .progress span {\n  display: block;\n  height: 100%;\n  width: 0px;\n  background-color: currentColor;\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n\n/*********************************************\n * SLIDE NUMBER\n *********************************************/\n.reveal .slide-number {\n  position: absolute;\n  display: block;\n  right: 8px;\n  bottom: 8px;\n  z-index: 31;\n  font-family: Helvetica, sans-serif;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 5px; }\n\n.reveal .slide-number a {\n  color: currentColor; }\n\n.reveal .slide-number-delimiter {\n  margin: 0 3px; }\n\n/*********************************************\n * SLIDES\n *********************************************/\n.reveal {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -ms-touch-action: pinch-zoom;\n      touch-action: pinch-zoom; }\n\n.reveal .slides {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  pointer-events: none;\n  overflow: visible;\n  z-index: 1;\n  text-align: center;\n  -webkit-perspective: 600px;\n          perspective: 600px;\n  -webkit-perspective-origin: 50% 40%;\n          perspective-origin: 50% 40%; }\n\n.reveal .slides > section {\n  -webkit-perspective: 600px;\n          perspective: 600px; }\n\n.reveal .slides > section,\n.reveal .slides > section > section {\n  display: none;\n  position: absolute;\n  width: 100%;\n  padding: 20px 0px;\n  pointer-events: auto;\n  z-index: 10;\n  -webkit-transform-style: flat;\n          transform-style: flat;\n  transition: -webkit-transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), -webkit-transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] .slides section {\n  transition-duration: 400ms; }\n\n.reveal[data-transition-speed=\"slow\"] .slides section {\n  transition-duration: 1200ms; }\n\n/* Slide-specific transition speed overrides */\n.reveal .slides section[data-transition-speed=\"fast\"] {\n  transition-duration: 400ms; }\n\n.reveal .slides section[data-transition-speed=\"slow\"] {\n  transition-duration: 1200ms; }\n\n.reveal .slides > section.stack {\n  padding-top: 0;\n  padding-bottom: 0;\n  pointer-events: none;\n  height: 100%; }\n\n.reveal .slides > section.present,\n.reveal .slides > section > section.present {\n  display: block;\n  z-index: 11;\n  opacity: 1; }\n\n.reveal .slides > section:empty,\n.reveal .slides > section > section:empty,\n.reveal .slides > section[data-background-interactive],\n.reveal .slides > section > section[data-background-interactive] {\n  pointer-events: none; }\n\n.reveal.center,\n.reveal.center .slides,\n.reveal.center .slides section {\n  min-height: 0 !important; }\n\n/* Don't allow interaction with invisible slides */\n.reveal .slides > section.future,\n.reveal .slides > section > section.future,\n.reveal .slides > section.past,\n.reveal .slides > section > section.past {\n  pointer-events: none; }\n\n.reveal.overview .slides > section,\n.reveal.overview .slides > section > section {\n  pointer-events: auto; }\n\n.reveal .slides > section.past,\n.reveal .slides > section.future,\n.reveal .slides > section > section.past,\n.reveal .slides > section > section.future {\n  opacity: 0; }\n\n/*********************************************\n * Mixins for readability of transitions\n *********************************************/\n/*********************************************\n * SLIDE TRANSITION\n * Aliased 'linear' for backwards compatibility\n *********************************************/\n.reveal.slide section {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.reveal .slides > section[data-transition=slide].past,\n.reveal .slides > section[data-transition~=slide-out].past,\n.reveal.slide .slides > section:not([data-transition]).past {\n  -webkit-transform: translate(-150%, 0);\n          transform: translate(-150%, 0); }\n\n.reveal .slides > section[data-transition=slide].future,\n.reveal .slides > section[data-transition~=slide-in].future,\n.reveal.slide .slides > section:not([data-transition]).future {\n  -webkit-transform: translate(150%, 0);\n          transform: translate(150%, 0); }\n\n.reveal .slides > section > section[data-transition=slide].past,\n.reveal .slides > section > section[data-transition~=slide-out].past,\n.reveal.slide .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n          transform: translate(0, -150%); }\n\n.reveal .slides > section > section[data-transition=slide].future,\n.reveal .slides > section > section[data-transition~=slide-in].future,\n.reveal.slide .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n          transform: translate(0, 150%); }\n\n.reveal.linear section {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.reveal .slides > section[data-transition=linear].past,\n.reveal .slides > section[data-transition~=linear-out].past,\n.reveal.linear .slides > section:not([data-transition]).past {\n  -webkit-transform: translate(-150%, 0);\n          transform: translate(-150%, 0); }\n\n.reveal .slides > section[data-transition=linear].future,\n.reveal .slides > section[data-transition~=linear-in].future,\n.reveal.linear .slides > section:not([data-transition]).future {\n  -webkit-transform: translate(150%, 0);\n          transform: translate(150%, 0); }\n\n.reveal .slides > section > section[data-transition=linear].past,\n.reveal .slides > section > section[data-transition~=linear-out].past,\n.reveal.linear .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n          transform: translate(0, -150%); }\n\n.reveal .slides > section > section[data-transition=linear].future,\n.reveal .slides > section > section[data-transition~=linear-in].future,\n.reveal.linear .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n          transform: translate(0, 150%); }\n\n/*********************************************\n * CONVEX TRANSITION\n * Aliased 'default' for backwards compatibility\n *********************************************/\n.reveal .slides section[data-transition=default].stack,\n.reveal.default .slides section.stack {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal .slides > section[data-transition=default].past,\n.reveal .slides > section[data-transition~=default-out].past,\n.reveal.default .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0); }\n\n.reveal .slides > section[data-transition=default].future,\n.reveal .slides > section[data-transition~=default-in].future,\n.reveal.default .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0); }\n\n.reveal .slides > section > section[data-transition=default].past,\n.reveal .slides > section > section[data-transition~=default-out].past,\n.reveal.default .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n          transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0); }\n\n.reveal .slides > section > section[data-transition=default].future,\n.reveal .slides > section > section[data-transition~=default-in].future,\n.reveal.default .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n          transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0); }\n\n.reveal .slides section[data-transition=convex].stack,\n.reveal.convex .slides section.stack {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal .slides > section[data-transition=convex].past,\n.reveal .slides > section[data-transition~=convex-out].past,\n.reveal.convex .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0); }\n\n.reveal .slides > section[data-transition=convex].future,\n.reveal .slides > section[data-transition~=convex-in].future,\n.reveal.convex .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0); }\n\n.reveal .slides > section > section[data-transition=convex].past,\n.reveal .slides > section > section[data-transition~=convex-out].past,\n.reveal.convex .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n          transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0); }\n\n.reveal .slides > section > section[data-transition=convex].future,\n.reveal .slides > section > section[data-transition~=convex-in].future,\n.reveal.convex .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n          transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0); }\n\n/*********************************************\n * CONCAVE TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=concave].stack,\n.reveal.concave .slides section.stack {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal .slides > section[data-transition=concave].past,\n.reveal .slides > section[data-transition~=concave-out].past,\n.reveal.concave .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0); }\n\n.reveal .slides > section[data-transition=concave].future,\n.reveal .slides > section[data-transition~=concave-in].future,\n.reveal.concave .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0); }\n\n.reveal .slides > section > section[data-transition=concave].past,\n.reveal .slides > section > section[data-transition~=concave-out].past,\n.reveal.concave .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n          transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0); }\n\n.reveal .slides > section > section[data-transition=concave].future,\n.reveal .slides > section > section[data-transition~=concave-in].future,\n.reveal.concave .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n          transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0); }\n\n/*********************************************\n * ZOOM TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=zoom],\n.reveal.zoom .slides section:not([data-transition]) {\n  transition-timing-function: ease; }\n\n.reveal .slides > section[data-transition=zoom].past,\n.reveal .slides > section[data-transition~=zoom-out].past,\n.reveal.zoom .slides > section:not([data-transition]).past {\n  visibility: hidden;\n  -webkit-transform: scale(16);\n          transform: scale(16); }\n\n.reveal .slides > section[data-transition=zoom].future,\n.reveal .slides > section[data-transition~=zoom-in].future,\n.reveal.zoom .slides > section:not([data-transition]).future {\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n.reveal .slides > section > section[data-transition=zoom].past,\n.reveal .slides > section > section[data-transition~=zoom-out].past,\n.reveal.zoom .slides > section > section:not([data-transition]).past {\n  -webkit-transform: scale(16);\n          transform: scale(16); }\n\n.reveal .slides > section > section[data-transition=zoom].future,\n.reveal .slides > section > section[data-transition~=zoom-in].future,\n.reveal.zoom .slides > section > section:not([data-transition]).future {\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n/*********************************************\n * CUBE TRANSITION\n *\n * WARNING:\n * this is deprecated and will be removed in a\n * future version.\n *********************************************/\n.reveal.cube .slides {\n  -webkit-perspective: 1300px;\n          perspective: 1300px; }\n\n.reveal.cube .slides section {\n  padding: 30px;\n  min-height: 700px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-sizing: border-box;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal.center.cube .slides section {\n  min-height: 0; }\n\n.reveal.cube .slides section:not(.stack):before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  -webkit-transform: translateZ(-20px);\n          transform: translateZ(-20px); }\n\n.reveal.cube .slides section:not(.stack):after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 90%;\n  height: 30px;\n  left: 5%;\n  bottom: 0;\n  background: none;\n  z-index: 1;\n  border-radius: 4px;\n  box-shadow: 0px 95px 25px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateZ(-90px) rotateX(65deg);\n          transform: translateZ(-90px) rotateX(65deg); }\n\n.reveal.cube .slides > section.stack {\n  padding: 0;\n  background: none; }\n\n.reveal.cube .slides > section.past {\n  -webkit-transform-origin: 100% 0%;\n          transform-origin: 100% 0%;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n          transform: translate3d(-100%, 0, 0) rotateY(-90deg); }\n\n.reveal.cube .slides > section.future {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg);\n          transform: translate3d(100%, 0, 0) rotateY(90deg); }\n\n.reveal.cube .slides > section > section.past {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(90deg);\n          transform: translate3d(0, -100%, 0) rotateX(90deg); }\n\n.reveal.cube .slides > section > section.future {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg);\n          transform: translate3d(0, 100%, 0) rotateX(-90deg); }\n\n/*********************************************\n * PAGE TRANSITION\n *\n * WARNING:\n * this is deprecated and will be removed in a\n * future version.\n *********************************************/\n.reveal.page .slides {\n  -webkit-perspective-origin: 0% 50%;\n          perspective-origin: 0% 50%;\n  -webkit-perspective: 3000px;\n          perspective: 3000px; }\n\n.reveal.page .slides section {\n  padding: 30px;\n  min-height: 700px;\n  box-sizing: border-box;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.reveal.page .slides section.past {\n  z-index: 12; }\n\n.reveal.page .slides section:not(.stack):before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateZ(-20px);\n          transform: translateZ(-20px); }\n\n.reveal.page .slides section:not(.stack):after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 90%;\n  height: 30px;\n  left: 5%;\n  bottom: 0;\n  background: none;\n  z-index: 1;\n  border-radius: 4px;\n  box-shadow: 0px 95px 25px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateZ(-90px) rotateX(65deg); }\n\n.reveal.page .slides > section.stack {\n  padding: 0;\n  background: none; }\n\n.reveal.page .slides > section.past {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n          transform: translate3d(-40%, 0, 0) rotateY(-80deg); }\n\n.reveal.page .slides > section.future {\n  -webkit-transform-origin: 100% 0%;\n          transform-origin: 100% 0%;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.reveal.page .slides > section > section.past {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-transform: translate3d(0, -40%, 0) rotateX(80deg);\n          transform: translate3d(0, -40%, 0) rotateX(80deg); }\n\n.reveal.page .slides > section > section.future {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n/*********************************************\n * FADE TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=fade],\n.reveal.fade .slides section:not([data-transition]),\n.reveal.fade .slides > section > section:not([data-transition]) {\n  -webkit-transform: none;\n          transform: none;\n  transition: opacity 0.5s; }\n\n.reveal.fade.overview .slides section,\n.reveal.fade.overview .slides > section > section {\n  transition: none; }\n\n/*********************************************\n * NO TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=none],\n.reveal.none .slides section:not([data-transition]) {\n  -webkit-transform: none;\n          transform: none;\n  transition: none; }\n\n/*********************************************\n * PAUSED MODE\n *********************************************/\n.reveal .pause-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  visibility: hidden;\n  opacity: 0;\n  z-index: 100;\n  transition: all 1s ease; }\n\n.reveal .pause-overlay .resume-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  color: #ccc;\n  border-radius: 2px;\n  padding: 6px 14px;\n  border: 2px solid #ccc;\n  font-size: 16px;\n  background: transparent;\n  cursor: pointer; }\n  .reveal .pause-overlay .resume-button:hover {\n    color: #fff;\n    border-color: #fff; }\n\n.reveal.paused .pause-overlay {\n  visibility: visible;\n  opacity: 1; }\n\n/*********************************************\n * FALLBACK\n *********************************************/\n.no-transforms {\n  overflow-y: auto; }\n\n.no-transforms .reveal {\n  overflow: visible; }\n\n.no-transforms .reveal .slides {\n  position: relative;\n  width: 80%;\n  max-width: 1280px;\n  height: auto;\n  top: 0;\n  margin: 0 auto;\n  text-align: center; }\n\n.no-transforms .reveal .controls,\n.no-transforms .reveal .progress {\n  display: none; }\n\n.no-transforms .reveal .slides section {\n  display: block;\n  opacity: 1;\n  position: relative;\n  height: auto;\n  min-height: 0;\n  top: 0;\n  left: 0;\n  margin: 10vh 0;\n  margin: 70px 0;\n  -webkit-transform: none;\n          transform: none; }\n\n.reveal .no-transition,\n.reveal .no-transition * {\n  transition: none !important; }\n\n/*********************************************\n * PER-SLIDE BACKGROUNDS\n *********************************************/\n.reveal .backgrounds {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-perspective: 600px;\n          perspective: 600px; }\n\n.reveal .slide-background {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  visibility: hidden;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  transition: all 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n\n.reveal .slide-background-content {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.reveal .slide-background.stack {\n  display: block; }\n\n.reveal .slide-background.present {\n  opacity: 1;\n  visibility: visible;\n  z-index: 2; }\n\n.print-pdf .reveal .slide-background {\n  opacity: 1 !important;\n  visibility: visible !important; }\n\n/* Video backgrounds */\n.reveal .slide-background video {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  max-height: none;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.reveal .slide-background[data-background-size=\"contain\"] video {\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n/* Immediate transition style */\n.reveal[data-background-transition=none] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=none] {\n  transition: none; }\n\n/* Slide */\n.reveal[data-background-transition=slide] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=slide] {\n  opacity: 1;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.reveal[data-background-transition=slide] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=slide] {\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0); }\n\n.reveal[data-background-transition=slide] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=slide] {\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0); }\n\n.reveal[data-background-transition=slide] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=slide] {\n  -webkit-transform: translate(0, -100%);\n          transform: translate(0, -100%); }\n\n.reveal[data-background-transition=slide] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=slide] {\n  -webkit-transform: translate(0, 100%);\n          transform: translate(0, 100%); }\n\n/* Convex */\n.reveal[data-background-transition=convex] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0); }\n\n.reveal[data-background-transition=convex] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0); }\n\n.reveal[data-background-transition=convex] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0); }\n\n.reveal[data-background-transition=convex] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0); }\n\n/* Concave */\n.reveal[data-background-transition=concave] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0); }\n\n.reveal[data-background-transition=concave] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0); }\n\n.reveal[data-background-transition=concave] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0); }\n\n.reveal[data-background-transition=concave] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0); }\n\n/* Zoom */\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=zoom] {\n  transition-timing-function: ease; }\n\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(16);\n          transform: scale(16); }\n\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(16);\n          transform: scale(16); }\n\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] > .backgrounds .slide-background {\n  transition-duration: 400ms; }\n\n.reveal[data-transition-speed=\"slow\"] > .backgrounds .slide-background {\n  transition-duration: 1200ms; }\n\n/*********************************************\n * OVERVIEW\n *********************************************/\n.reveal.overview {\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%;\n  -webkit-perspective: 700px;\n          perspective: 700px; }\n  .reveal.overview .slides {\n    -moz-transform-style: preserve-3d; }\n  .reveal.overview .slides section {\n    height: 100%;\n    top: 0 !important;\n    opacity: 1 !important;\n    overflow: hidden;\n    visibility: visible !important;\n    cursor: pointer;\n    box-sizing: border-box; }\n  .reveal.overview .slides section:hover,\n  .reveal.overview .slides section.present {\n    outline: 10px solid rgba(150, 150, 150, 0.4);\n    outline-offset: 10px; }\n  .reveal.overview .slides section .fragment {\n    opacity: 1;\n    transition: none; }\n  .reveal.overview .slides section:after,\n  .reveal.overview .slides section:before {\n    display: none !important; }\n  .reveal.overview .slides > section.stack {\n    padding: 0;\n    top: 0 !important;\n    background: none;\n    outline: none;\n    overflow: visible; }\n  .reveal.overview .backgrounds {\n    -webkit-perspective: inherit;\n            perspective: inherit;\n    -moz-transform-style: preserve-3d; }\n  .reveal.overview .backgrounds .slide-background {\n    opacity: 1;\n    visibility: visible;\n    outline: 10px solid rgba(150, 150, 150, 0.1);\n    outline-offset: 10px; }\n  .reveal.overview .backgrounds .slide-background.stack {\n    overflow: visible; }\n\n.reveal.overview .slides section,\n.reveal.overview-deactivating .slides section {\n  transition: none; }\n\n.reveal.overview .backgrounds .slide-background,\n.reveal.overview-deactivating .backgrounds .slide-background {\n  transition: none; }\n\n/*********************************************\n * RTL SUPPORT\n *********************************************/\n.reveal.rtl .slides,\n.reveal.rtl .slides h1,\n.reveal.rtl .slides h2,\n.reveal.rtl .slides h3,\n.reveal.rtl .slides h4,\n.reveal.rtl .slides h5,\n.reveal.rtl .slides h6 {\n  direction: rtl;\n  font-family: sans-serif; }\n\n.reveal.rtl pre,\n.reveal.rtl code {\n  direction: ltr; }\n\n.reveal.rtl ol,\n.reveal.rtl ul {\n  text-align: right; }\n\n.reveal.rtl .progress span {\n  float: right; }\n\n/*********************************************\n * PARALLAX BACKGROUND\n *********************************************/\n.reveal.has-parallax-background .backgrounds {\n  transition: all 0.8s ease; }\n\n/* Global transition speed settings */\n.reveal.has-parallax-background[data-transition-speed=\"fast\"] .backgrounds {\n  transition-duration: 400ms; }\n\n.reveal.has-parallax-background[data-transition-speed=\"slow\"] .backgrounds {\n  transition-duration: 1200ms; }\n\n/*********************************************\n * OVERLAY FOR LINK PREVIEWS AND HELP\n *********************************************/\n.reveal > .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.9);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease; }\n\n.reveal > .overlay.visible {\n  opacity: 1;\n  visibility: visible; }\n\n.reveal > .overlay .spinner {\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  width: 32px;\n  height: 32px;\n  margin: -16px 0 0 -16px;\n  z-index: 10;\n  background-image: url(data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D);\n  visibility: visible;\n  opacity: 0.6;\n  transition: all 0.3s ease; }\n\n.reveal > .overlay header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  z-index: 2;\n  border-bottom: 1px solid #222; }\n\n.reveal > .overlay header a {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 36px;\n  padding: 0 10px;\n  float: right;\n  opacity: 0.6;\n  box-sizing: border-box; }\n\n.reveal > .overlay header a:hover {\n  opacity: 1; }\n\n.reveal > .overlay header a .icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-position: 50% 50%;\n  background-size: 100%;\n  background-repeat: no-repeat; }\n\n.reveal > .overlay header a.close .icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkklEQVRYR8WX4VHDMAxG6wnoJrABZQPYBCaBTWAD2g1gE5gg6OOsXuxIlr40d81dfrSJ9V4c2VLK7spHuTJ/5wpM07QXuXc5X0opX2tEJcadjHuV80li/FgxTIEK/5QBCICBD6xEhSMGHgQPgBgLiYVAB1dpSqKDawxTohFw4JSEA3clzgIBPCURwE2JucBR7rhPJJv5OpJwDX+SfDjgx1wACQeJG1aChP9K/IMmdZ8DtESV1WyP3Bt4MwM6sj4NMxMYiqUWHQu4KYA/SYkIjOsm3BXYWMKFDwU2khjCQ4ELJUJ4SmClRArOCmSXGuKma0fYD5CbzHxFpCSGAhfAVSSUGDUk2BWZaff2g6GE15BsBQ9nwmpIGDiyHQddwNTMKkbZaf9fajXQca1EX44puJZUsnY0ObGmITE3GVLCbEhQUjGVt146j6oasWN+49Vph2w1pZ5EansNZqKBm1txbU57iRRcZ86RWMDdWtBJUHBHwoQPi1GV+JCbntmvok7iTX4/Up9mgyTc/FJYDTcndgH/AA5A/CHsyEkVAAAAAElFTkSuQmCC); }\n\n.reveal > .overlay header a.external .icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcElEQVRYR+2WSQoAIQwEzf8f7XiOMkUQxUPlGkM3hVmiQfQR9GYnH1SsAQlI4DiBqkCMoNb9y2e90IAEJPAcgdznU9+engMaeJ7Azh5Y1U67gAho4DqBqmB1buAf0MB1AlVBek83ZPkmJMGc1wAR+AAqod/B97TRpQAAAABJRU5ErkJggg==); }\n\n.reveal > .overlay .viewport {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 40px;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.reveal > .overlay.overlay-preview .viewport iframe {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease; }\n\n.reveal > .overlay.overlay-preview.loaded .viewport iframe {\n  opacity: 1;\n  visibility: visible; }\n\n.reveal > .overlay.overlay-preview.loaded .viewport-inner {\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 45%;\n  width: 100%;\n  text-align: center;\n  letter-spacing: normal; }\n\n.reveal > .overlay.overlay-preview .x-frame-error {\n  opacity: 0;\n  transition: opacity 0.3s ease 0.3s; }\n\n.reveal > .overlay.overlay-preview.loaded .x-frame-error {\n  opacity: 1; }\n\n.reveal > .overlay.overlay-preview.loaded .spinner {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2); }\n\n.reveal > .overlay.overlay-help .viewport {\n  overflow: auto;\n  color: #fff; }\n\n.reveal > .overlay.overlay-help .viewport .viewport-inner {\n  width: 600px;\n  margin: auto;\n  padding: 20px 20px 80px 20px;\n  text-align: center;\n  letter-spacing: normal; }\n\n.reveal > .overlay.overlay-help .viewport .viewport-inner .title {\n  font-size: 20px; }\n\n.reveal > .overlay.overlay-help .viewport .viewport-inner table {\n  border: 1px solid #fff;\n  border-collapse: collapse;\n  font-size: 16px; }\n\n.reveal > .overlay.overlay-help .viewport .viewport-inner table th,\n.reveal > .overlay.overlay-help .viewport .viewport-inner table td {\n  width: 200px;\n  padding: 14px;\n  border: 1px solid #fff;\n  vertical-align: middle; }\n\n.reveal > .overlay.overlay-help .viewport .viewport-inner table th {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n/*********************************************\n * PLAYBACK COMPONENT\n *********************************************/\n.reveal .playback {\n  position: absolute;\n  left: 15px;\n  bottom: 20px;\n  z-index: 30;\n  cursor: pointer;\n  transition: all 400ms ease;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n.reveal.overview .playback {\n  opacity: 0;\n  visibility: hidden; }\n\n/*********************************************\n * CODE HIGHLGIHTING\n *********************************************/\n.reveal .hljs table {\n  margin: initial; }\n\n.reveal .hljs-ln-code,\n.reveal .hljs-ln-numbers {\n  padding: 0;\n  border: 0; }\n\n.reveal .hljs-ln-numbers {\n  opacity: 0.6;\n  padding-right: 0.75em;\n  text-align: right;\n  vertical-align: top; }\n\n.reveal .hljs[data-line-numbers]:not([data-line-numbers=\"\"]) tr:not(.highlight-line) {\n  opacity: 0.4; }\n\n/*********************************************\n * ROLLING LINKS\n *********************************************/\n.reveal .roll {\n  display: inline-block;\n  line-height: 1.2;\n  overflow: hidden;\n  vertical-align: top;\n  -webkit-perspective: 400px;\n          perspective: 400px;\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%; }\n\n.reveal .roll:hover {\n  background: none;\n  text-shadow: none; }\n\n.reveal .roll span {\n  display: block;\n  position: relative;\n  padding: 0 2px;\n  pointer-events: none;\n  transition: all 400ms ease;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.reveal .roll:hover span {\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-transform: translate3d(0px, 0px, -45px) rotateX(90deg);\n          transform: translate3d(0px, 0px, -45px) rotateX(90deg); }\n\n.reveal .roll span:after {\n  content: attr(data-title);\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0 2px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  -webkit-transform: translate3d(0px, 110%, 0px) rotateX(-90deg);\n          transform: translate3d(0px, 110%, 0px) rotateX(-90deg); }\n\n/*********************************************\n * SPEAKER NOTES\n *********************************************/\n.reveal aside.notes {\n  display: none; }\n\n.reveal .speaker-notes {\n  display: none;\n  position: absolute;\n  width: 33.3333333333%;\n  height: 100%;\n  top: 0;\n  left: 100%;\n  padding: 14px 18px 14px 18px;\n  z-index: 1;\n  font-size: 18px;\n  line-height: 1.4;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  color: #222;\n  background-color: #f5f5f5;\n  overflow: auto;\n  box-sizing: border-box;\n  text-align: left;\n  font-family: Helvetica, sans-serif;\n  -webkit-overflow-scrolling: touch; }\n  .reveal .speaker-notes .notes-placeholder {\n    color: #ccc;\n    font-style: italic; }\n  .reveal .speaker-notes:focus {\n    outline: none; }\n  .reveal .speaker-notes:before {\n    content: 'Speaker notes';\n    display: block;\n    margin-bottom: 10px;\n    opacity: 0.5; }\n\n.reveal.show-notes {\n  max-width: 75%;\n  overflow: visible; }\n\n.reveal.show-notes .speaker-notes {\n  display: block; }\n\n@media screen and (min-width: 1600px) {\n  .reveal .speaker-notes {\n    font-size: 20px; } }\n\n@media screen and (max-width: 1024px) {\n  .reveal.show-notes {\n    border-left: 0;\n    max-width: none;\n    max-height: 70%;\n    max-height: 70vh;\n    overflow: visible; }\n  .reveal.show-notes .speaker-notes {\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 42.8571428571%;\n    height: 30vh;\n    border: 0; } }\n\n@media screen and (max-width: 600px) {\n  .reveal.show-notes {\n    max-height: 60%;\n    max-height: 60vh; }\n  .reveal.show-notes .speaker-notes {\n    top: 100%;\n    height: 66.6666666667%;\n    height: 40vh; }\n  .reveal .speaker-notes {\n    font-size: 14px; } }\n\n/*********************************************\n * ZOOM PLUGIN\n *********************************************/\n.zoomed .reveal *,\n.zoomed .reveal *:before,\n.zoomed .reveal *:after {\n  -webkit-backface-visibility: visible !important;\n          backface-visibility: visible !important; }\n\n.zoomed .reveal .progress,\n.zoomed .reveal .controls {\n  opacity: 0; }\n\n.zoomed .reveal .roll span {\n  background: none; }\n\n.zoomed .reveal .roll span:after {\n  visibility: hidden; }\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../css-loader/index.js!./black.css", function() {
				var newContent = require("!!../../../css-loader/index.js!./black.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	exports.i(__webpack_require__(8), "");

	// module
	exports.push([module.id, "/**\n * Black theme for reveal.js. This is the opposite of the 'white' theme.\n *\n * By Hakim El Hattab, http://hakim.se\n */\nsection.has-light-background, section.has-light-background h1, section.has-light-background h2, section.has-light-background h3, section.has-light-background h4, section.has-light-background h5, section.has-light-background h6 {\n  color: #222; }\n\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nbody {\n  background: #191919;\n  background-color: #191919; }\n\n.reveal {\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  font-size: 42px;\n  font-weight: normal;\n  color: #fff; }\n\n::selection {\n  color: #fff;\n  background: #bee4fd;\n  text-shadow: none; }\n\n::-moz-selection {\n  color: #fff;\n  background: #bee4fd;\n  text-shadow: none; }\n\n.reveal .slides section,\n.reveal .slides section > section {\n  line-height: 1.3;\n  font-weight: inherit; }\n\n/*********************************************\n * HEADERS\n *********************************************/\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6 {\n  margin: 0 0 20px 0;\n  color: #fff;\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  font-weight: 600;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-transform: uppercase;\n  text-shadow: none;\n  word-wrap: break-word; }\n\n.reveal h1 {\n  font-size: 2.5em; }\n\n.reveal h2 {\n  font-size: 1.6em; }\n\n.reveal h3 {\n  font-size: 1.3em; }\n\n.reveal h4 {\n  font-size: 1em; }\n\n.reveal h1 {\n  text-shadow: none; }\n\n/*********************************************\n * OTHER\n *********************************************/\n.reveal p {\n  margin: 20px 0;\n  line-height: 1.3; }\n\n/* Ensure certain elements are never larger than the slide itself */\n.reveal img,\n.reveal video,\n.reveal iframe {\n  max-width: 95%;\n  max-height: 95%; }\n\n.reveal strong,\n.reveal b {\n  font-weight: bold; }\n\n.reveal em {\n  font-style: italic; }\n\n.reveal ol,\n.reveal dl,\n.reveal ul {\n  display: inline-block;\n  text-align: left;\n  margin: 0 0 0 1em; }\n\n.reveal ol {\n  list-style-type: decimal; }\n\n.reveal ul {\n  list-style-type: disc; }\n\n.reveal ul ul {\n  list-style-type: square; }\n\n.reveal ul ul ul {\n  list-style-type: circle; }\n\n.reveal ul ul,\n.reveal ul ol,\n.reveal ol ol,\n.reveal ol ul {\n  display: block;\n  margin-left: 40px; }\n\n.reveal dt {\n  font-weight: bold; }\n\n.reveal dd {\n  margin-left: 40px; }\n\n.reveal blockquote {\n  display: block;\n  position: relative;\n  width: 70%;\n  margin: 20px auto;\n  padding: 5px;\n  font-style: italic;\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2); }\n\n.reveal blockquote p:first-child,\n.reveal blockquote p:last-child {\n  display: inline-block; }\n\n.reveal q {\n  font-style: italic; }\n\n.reveal pre {\n  display: block;\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n  text-align: left;\n  font-size: 0.55em;\n  font-family: monospace;\n  line-height: 1.2em;\n  word-wrap: break-word;\n  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15); }\n\n.reveal code {\n  font-family: monospace;\n  text-transform: none; }\n\n.reveal pre code {\n  display: block;\n  padding: 5px;\n  overflow: auto;\n  max-height: 400px;\n  word-wrap: normal; }\n\n.reveal table {\n  margin: auto;\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.reveal table th {\n  font-weight: bold; }\n\n.reveal table th,\n.reveal table td {\n  text-align: left;\n  padding: 0.2em 0.5em 0.2em 0.5em;\n  border-bottom: 1px solid; }\n\n.reveal table th[align=\"center\"],\n.reveal table td[align=\"center\"] {\n  text-align: center; }\n\n.reveal table th[align=\"right\"],\n.reveal table td[align=\"right\"] {\n  text-align: right; }\n\n.reveal table tbody tr:last-child th,\n.reveal table tbody tr:last-child td {\n  border-bottom: none; }\n\n.reveal sup {\n  vertical-align: super;\n  font-size: smaller; }\n\n.reveal sub {\n  vertical-align: sub;\n  font-size: smaller; }\n\n.reveal small {\n  display: inline-block;\n  font-size: 0.6em;\n  line-height: 1.2em;\n  vertical-align: top; }\n\n.reveal small * {\n  vertical-align: top; }\n\n/*********************************************\n * LINKS\n *********************************************/\n.reveal a {\n  color: #42affa;\n  text-decoration: none;\n  -webkit-transition: color .15s ease;\n  -moz-transition: color .15s ease;\n  transition: color .15s ease; }\n\n.reveal a:hover {\n  color: #8dcffc;\n  text-shadow: none;\n  border: none; }\n\n.reveal .roll span:after {\n  color: #fff;\n  background: #068de9; }\n\n/*********************************************\n * IMAGES\n *********************************************/\n.reveal section img {\n  margin: 15px 0px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 4px solid #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); }\n\n.reveal section img.plain {\n  border: 0;\n  box-shadow: none; }\n\n.reveal a img {\n  -webkit-transition: all .15s linear;\n  -moz-transition: all .15s linear;\n  transition: all .15s linear; }\n\n.reveal a:hover img {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: #42affa;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55); }\n\n/*********************************************\n * NAVIGATION CONTROLS\n *********************************************/\n.reveal .controls {\n  color: #42affa; }\n\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  background: rgba(0, 0, 0, 0.2);\n  color: #42affa; }\n\n.reveal .progress span {\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }\n\n/*********************************************\n * PRINT BACKGROUND\n *********************************************/\n@media print {\n  .backgrounds {\n    background-color: #191919; } }\n", ""]);

	// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n    font-family: 'Source Sans Pro';\n    src: url(" + __webpack_require__(9) + ");\n    src: url(" + __webpack_require__(9) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(10) + ") format('woff'),\n         url(" + __webpack_require__(11) + ") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Source Sans Pro';\n    src: url(" + __webpack_require__(12) + ");\n    src: url(" + __webpack_require__(12) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(13) + ") format('woff'),\n         url(" + __webpack_require__(14) + ") format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Source Sans Pro';\n    src: url(" + __webpack_require__(15) + ");\n    src: url(" + __webpack_require__(15) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(16) + ") format('woff'),\n         url(" + __webpack_require__(17) + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Source Sans Pro';\n    src: url(" + __webpack_require__(18) + ");\n    src: url(" + __webpack_require__(18) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(19) + ") format('woff'),\n         url(" + __webpack_require__(20) + ") format('truetype');\n    font-weight: 600;\n    font-style: italic;\n}", ""]);

	// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1d71438462d532b62b05cdd7e6d7197d.eot";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e7acc589bb558fe58936a853f570193c.woff";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2da39ecf9246383937da11b44b7bd9b4.ttf";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "72217712eb8d28872e7069322f3fda23.eot";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e74f0128884561828ce8c9cf5c284ab8.woff";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8256cfd7e4017a7690814879409212cd.ttf";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0f3da1edf1b5c6a94a6ad948a7664451.eot";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1cb8e94f1185f1131a0c895165998f2b.woff";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f3565095e6c9158140444970f5a2c5ed.ttf";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "58153ac7194e141d1e73ea88c6b63861.eot";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6b058fc2634b01d837c3432316c3141f.woff";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c7e698a4d0956f4a939f42a05685bbf5.ttf";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".presentation h1 {\n    color: #f7ff1c;\n    padding: 0;\n    margin: 0;\n    font-size:2em;\n}\n\n.presentation h2 {\n    color: #b3ff1c;\n}\n\n.presentation h3 {\n    color: #aa0881;\n    font-family: Monaco;\n    text-transform: none;\n}\n\n.presentation h1 {\n    text-transform: none;\n}\n\n.presentation p {\n    line-height: 1em;\n    font-size: 0.8em;\n}\n\n.presentation pre code {\n    font-size: 1rem;\n    font-family: Monaco;\n}\n\n.presentation strong {\n    color: #b3ff1c;\n}\n\n.presentation section img {\n    border: none;\n}", ""]);

	// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/markedjs/marked
	 */

	;(function(root) {
	'use strict';

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
	  table: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
	  text: /^[^\n]+/
	};

	block._label = /(?:\\[\[\]]|[^\[\]])+/;
	block._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;
	block.def = edit(block.def)
	  .replace('label', block._label)
	  .replace('title', block._title)
	  .getRegex();

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = edit(block.item, 'gm')
	  .replace(/bull/g, block.bullet)
	  .getRegex();

	block.list = edit(block.list)
	  .replace(/bull/g, block.bullet)
	  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
	  .replace('def', '\\n+(?=' + block.def.source + ')')
	  .getRegex();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';

	block.html = edit(block.html)
	  .replace('comment', /<!--[\s\S]*?-->/)
	  .replace('closed', /<(tag)[\s\S]+?<\/\1>/)
	  .replace('closing', /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/)
	  .replace(/tag/g, block._tag)
	  .getRegex();

	block.paragraph = edit(block.paragraph)
	  .replace('hr', block.hr)
	  .replace('heading', block.heading)
	  .replace('lheading', block.lheading)
	  .replace('tag', '<' + block._tag)
	  .getRegex();

	block.blockquote = edit(block.blockquote)
	  .replace('paragraph', block.paragraph)
	  .getRegex();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = edit(block.paragraph)
	  .replace('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  .getRegex();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top) {
	  src = src.replace(/^ +$/gm, '');
	  var next,
	      loose,
	      cap,
	      bull,
	      b,
	      item,
	      space,
	      i,
	      tag,
	      l,
	      isordered;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];
	      isordered = bull.length > 1;

	      this.tokens.push({
	        type: 'list_start',
	        ordered: isordered,
	        start: isordered ? +bull : ''
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if (top && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
	      tag = cap[1].toLowerCase();
	      if (!this.tokens.links[tag]) {
	        this.tokens.links[tag] = {
	          href: cap[2],
	          title: cap[3]
	        };
	      }
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
	};

	inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
	inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;

	inline.autolink = edit(inline.autolink)
	  .replace('scheme', inline._scheme)
	  .replace('email', inline._email)
	  .getRegex()

	inline._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = edit(inline.link)
	  .replace('inside', inline._inside)
	  .replace('href', inline._href)
	  .getRegex();

	inline.reflink = edit(inline.reflink)
	  .replace('inside', inline._inside)
	  .getRegex();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
	  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
	    .replace('email', inline._email)
	    .getRegex(),
	  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: edit(inline.text)
	    .replace(']|', '~]|')
	    .replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|')
	    .getRegex()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: edit(inline.br).replace('{2,}', '*').getRegex(),
	  text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer();
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = '',
	      link,
	      text,
	      href,
	      cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = escape(this.mangle(cap[1]));
	        href = 'mailto:' + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      cap[0] = this.rules._backpedal.exec(cap[0])[0];
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = escape(cap[0]);
	        href = 'mailto:' + text;
	      } else {
	        text = escape(cap[0]);
	        if (cap[1] === 'www.') {
	          href = 'http://' + text;
	        } else {
	          href = text;
	        }
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2].trim(), true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href),
	      title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = '',
	      l = text.length,
	      i = 0,
	      ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered, start) {
	  var type = ordered ? 'ol' : 'ul',
	      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
	  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return text;
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
	      return text;
	    }
	  }
	  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
	    href = resolveUrl(this.options.baseUrl, href);
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
	    href = resolveUrl(this.options.baseUrl, href);
	  }
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * TextRenderer
	 * returns only the textual part of the token
	 */

	function TextRenderer() {}

	// no need for block level renderers

	TextRenderer.prototype.strong =
	TextRenderer.prototype.em =
	TextRenderer.prototype.codespan =
	TextRenderer.prototype.del =
	TextRenderer.prototype.text = function (text) {
	  return text;
	}

	TextRenderer.prototype.link =
	TextRenderer.prototype.image = function(href, title, text) {
	  return '' + text;
	}

	TextRenderer.prototype.br = function() {
	  return '';
	}

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer();
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options) {
	  var parser = new Parser(options);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options);
	  // use an InlineLexer with a TextRenderer to extract pure text
	  this.inlineText = new InlineLexer(
	    src.links,
	    merge({}, this.options, {renderer: new TextRenderer()})
	  );
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        unescape(this.inlineText.output(this.token.text)));
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = '',
	          body = '',
	          i,
	          row,
	          cell,
	          j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      body = '';
	      var ordered = this.token.ordered,
	          start = this.token.start;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered, start);
	    }
	    case 'list_item_start': {
	      body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  // explicitly match decimal, hex, and named HTML entities
	  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function edit(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return {
	    replace: function(name, val) {
	      val = val.source || val;
	      val = val.replace(/(^|[^\[])\^/g, '$1');
	      regex = regex.replace(name, val);
	      return this;
	    },
	    getRegex: function() {
	      return new RegExp(regex, opt);
	    }
	  };
	}

	function resolveUrl(base, href) {
	  if (!baseUrls[' ' + base]) {
	    // we can ignore everything in base after the last slash of its path component,
	    // but we might need to add _that_
	    // https://tools.ietf.org/html/rfc3986#section-3
	    if (/^[^:]+:\/*[^/]*$/.test(base)) {
	      baseUrls[' ' + base] = base + '/';
	    } else {
	      baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
	    }
	  }
	  base = baseUrls[' ' + base];

	  if (href.slice(0, 2) === '//') {
	    return base.replace(/:[\s\S]*/, ':') + href;
	  } else if (href.charAt(0) === '/') {
	    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
	  } else {
	    return base + href;
	  }
	}
	var baseUrls = {};
	var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1,
	      target,
	      key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}

	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  // throw error in case of non string input
	  if (typeof src === 'undefined' || src === null) {
	    throw new Error('marked(): input parameter is undefined or null');
	  }
	  if (typeof src !== 'string') {
	    throw new Error('marked(): input parameter is of type '
	      + Object.prototype.toString.call(src) + ', string expected');
	  }

	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight,
	        tokens,
	        pending,
	        i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occurred:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer(),
	  xhtml: false,
	  baseUrl: null
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;
	marked.TextRenderer = TextRenderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  root.marked = marked;
	}
	})(this || (typeof window !== 'undefined' ? window : global));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * reveal.js
	 * http://revealjs.com
	 * MIT licensed
	 *
	 * Copyright (C) 2019 Hakim El Hattab, http://hakim.se
	 */
	(function( root, factory ) {
		if( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				root.Reveal = factory();
				return root.Reveal;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if( typeof exports === 'object' ) {
			// Node. Does not work with strict CommonJS.
			module.exports = factory();
		} else {
			// Browser globals.
			root.Reveal = factory();
		}
	}( this, function() {

		'use strict';

		var Reveal;

		// The reveal.js version
		var VERSION = '3.8.0';

		var SLIDES_SELECTOR = '.slides section',
			HORIZONTAL_SLIDES_SELECTOR = '.slides>section',
			VERTICAL_SLIDES_SELECTOR = '.slides>section.present>section',
			HOME_SLIDE_SELECTOR = '.slides>section:first-of-type',
			UA = navigator.userAgent,

			// Configuration defaults, can be overridden at initialization time
			config = {

				// The "normal" size of the presentation, aspect ratio will be preserved
				// when the presentation is scaled to fit different resolutions
				width: 960,
				height: 700,

				// Factor of the display size that should remain empty around the content
				margin: 0.04,

				// Bounds for smallest/largest possible scale to apply to content
				minScale: 0.2,
				maxScale: 2.0,

				// Display presentation control arrows
				controls: true,

				// Help the user learn the controls by providing hints, for example by
				// bouncing the down arrow when they first encounter a vertical slide
				controlsTutorial: true,

				// Determines where controls appear, "edges" or "bottom-right"
				controlsLayout: 'bottom-right',

				// Visibility rule for backwards navigation arrows; "faded", "hidden"
				// or "visible"
				controlsBackArrows: 'faded',

				// Display a presentation progress bar
				progress: true,

				// Display the page number of the current slide
				// - true:    Show slide number
				// - false:   Hide slide number
				//
				// Can optionally be set as a string that specifies the number formatting:
				// - "h.v":	  Horizontal . vertical slide number (default)
				// - "h/v":	  Horizontal / vertical slide number
				// - "c":	  Flattened slide number
				// - "c/t":	  Flattened slide number / total slides
				//
				// Alternatively, you can provide a function that returns the slide
				// number for the current slide. The function needs to return an array
				// with one string [slideNumber] or three strings [n1,delimiter,n2].
				// See #formatSlideNumber().
				slideNumber: false,

				// Can be used to limit the contexts in which the slide number appears
				// - "all":      Always show the slide number
				// - "print":    Only when printing to PDF
				// - "speaker":  Only in the speaker view
				showSlideNumber: 'all',

				// Use 1 based indexing for # links to match slide number (default is zero
				// based)
				hashOneBasedIndex: false,

				// Add the current slide number to the URL hash so that reloading the
				// page/copying the URL will return you to the same slide
				hash: false,

				// Push each slide change to the browser history.  Implies `hash: true`
				history: false,

				// Enable keyboard shortcuts for navigation
				keyboard: true,

				// Optional function that blocks keyboard events when retuning false
				keyboardCondition: null,

				// Enable the slide overview mode
				overview: true,

				// Disables the default reveal.js slide layout so that you can use
				// custom CSS layout
				disableLayout: false,

				// Vertical centering of slides
				center: true,

				// Enables touch navigation on devices with touch input
				touch: true,

				// Loop the presentation
				loop: false,

				// Change the presentation direction to be RTL
				rtl: false,

				// Changes the behavior of our navigation directions.
				//
				// "default"
				// Left/right arrow keys step between horizontal slides, up/down
				// arrow keys step between vertical slides. Space key steps through
				// all slides (both horizontal and vertical).
				//
				// "linear"
				// Removes the up/down arrows. Left/right arrows step through all
				// slides (both horizontal and vertical).
				//
				// "grid"
				// When this is enabled, stepping left/right from a vertical stack
				// to an adjacent vertical stack will land you at the same vertical
				// index.
				//
				// Consider a deck with six slides ordered in two vertical stacks:
				// 1.1    2.1
				// 1.2    2.2
				// 1.3    2.3
				//
				// If you're on slide 1.3 and navigate right, you will normally move
				// from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
				// from 1.3 -> 2.3.
				navigationMode: 'default',

				// Randomizes the order of slides each time the presentation loads
				shuffle: false,

				// Turns fragments on and off globally
				fragments: true,

				// Flags whether to include the current fragment in the URL,
				// so that reloading brings you to the same fragment position
				fragmentInURL: false,

				// Flags if the presentation is running in an embedded mode,
				// i.e. contained within a limited portion of the screen
				embedded: false,

				// Flags if we should show a help overlay when the question-mark
				// key is pressed
				help: true,

				// Flags if it should be possible to pause the presentation (blackout)
				pause: true,

				// Flags if speaker notes should be visible to all viewers
				showNotes: false,

				// Global override for autolaying embedded media (video/audio/iframe)
				// - null:   Media will only autoplay if data-autoplay is present
				// - true:   All media will autoplay, regardless of individual setting
				// - false:  No media will autoplay, regardless of individual setting
				autoPlayMedia: null,

				// Global override for preloading lazy-loaded iframes
				// - null:   Iframes with data-src AND data-preload will be loaded when within
				//           the viewDistance, iframes with only data-src will be loaded when visible
				// - true:   All iframes with data-src will be loaded when within the viewDistance
				// - false:  All iframes with data-src will be loaded only when visible
				preloadIframes: null,

				// Controls automatic progression to the next slide
				// - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
				//           is present on the current slide or fragment
				// - 1+:     All slides will progress automatically at the given interval
				// - false:  No auto-sliding, even if data-autoslide is present
				autoSlide: 0,

				// Stop auto-sliding after user input
				autoSlideStoppable: true,

				// Use this method for navigation when auto-sliding (defaults to navigateNext)
				autoSlideMethod: null,

				// Specify the average time in seconds that you think you will spend
				// presenting each slide. This is used to show a pacing timer in the
				// speaker view
				defaultTiming: null,

				// Enable slide navigation via mouse wheel
				mouseWheel: false,

				// Apply a 3D roll to links on hover
				rollingLinks: false,

				// Hides the address bar on mobile devices
				hideAddressBar: true,

				// Opens links in an iframe preview overlay
				// Add `data-preview-link` and `data-preview-link="false"` to customise each link
				// individually
				previewLinks: false,

				// Exposes the reveal.js API through window.postMessage
				postMessage: true,

				// Dispatches all reveal.js events to the parent window through postMessage
				postMessageEvents: false,

				// Focuses body when page changes visibility to ensure keyboard shortcuts work
				focusBodyOnPageVisibilityChange: true,

				// Transition style
				transition: 'slide', // none/fade/slide/convex/concave/zoom

				// Transition speed
				transitionSpeed: 'default', // default/fast/slow

				// Transition style for full page slide backgrounds
				backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

				// Parallax background image
				parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

				// Parallax background size
				parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

				// Parallax background repeat
				parallaxBackgroundRepeat: '', // repeat/repeat-x/repeat-y/no-repeat/initial/inherit

				// Parallax background position
				parallaxBackgroundPosition: '', // CSS syntax, e.g. "top left"

				// Amount of pixels to move the parallax background per slide step
				parallaxBackgroundHorizontal: null,
				parallaxBackgroundVertical: null,

				// The maximum number of pages a single slide can expand onto when printing
				// to PDF, unlimited by default
				pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

				// Prints each fragment on a separate slide
				pdfSeparateFragments: true,

				// Offset used to reduce the height of content within exported PDF pages.
				// This exists to account for environment differences based on how you
				// print to PDF. CLI printing options, like phantomjs and wkpdf, can end
				// on precisely the total height of the document whereas in-browser
				// printing has to end one pixel before.
				pdfPageHeightOffset: -1,

				// Number of slides away from the current that are visible
				viewDistance: 3,

				// The display mode that will be used to show slides
				display: 'block',

				// Hide cursor if inactive
				hideInactiveCursor: true,

				// Time before the cursor is hidden (in ms)
				hideCursorTime: 5000,

				// Script dependencies to load
				dependencies: []

			},

			// Flags if Reveal.initialize() has been called
			initialized = false,

			// Flags if reveal.js is loaded (has dispatched the 'ready' event)
			loaded = false,

			// Flags if the overview mode is currently active
			overview = false,

			// Holds the dimensions of our overview slides, including margins
			overviewSlideWidth = null,
			overviewSlideHeight = null,

			// The horizontal and vertical index of the currently active slide
			indexh,
			indexv,

			// The previous and current slide HTML elements
			previousSlide,
			currentSlide,

			previousBackground,

			// Remember which directions that the user has navigated towards
			hasNavigatedRight = false,
			hasNavigatedDown = false,

			// Slides may hold a data-state attribute which we pick up and apply
			// as a class to the body. This list contains the combined state of
			// all current slides.
			state = [],

			// The current scale of the presentation (see width/height config)
			scale = 1,

			// CSS transform that is currently applied to the slides container,
			// split into two groups
			slidesTransform = { layout: '', overview: '' },

			// Cached references to DOM elements
			dom = {},

			// A list of registered reveal.js plugins
			plugins = {},

			// List of asynchronously loaded reveal.js dependencies
			asyncDependencies = [],

			// Features supported by the browser, see #checkCapabilities()
			features = {},

			// Client is a mobile device, see #checkCapabilities()
			isMobileDevice,

			// Client is a desktop Chrome, see #checkCapabilities()
			isChrome,

			// Throttles mouse wheel navigation
			lastMouseWheelStep = 0,

			// Delays updates to the URL due to a Chrome thumbnailer bug
			writeURLTimeout = 0,

			// Is the mouse pointer currently hidden from view
			cursorHidden = false,

			// Timeout used to determine when the cursor is inactive
			cursorInactiveTimeout = 0,

			// Flags if the interaction event listeners are bound
			eventsAreBound = false,

			// The current auto-slide duration
			autoSlide = 0,

			// Auto slide properties
			autoSlidePlayer,
			autoSlideTimeout = 0,
			autoSlideStartTime = -1,
			autoSlidePaused = false,

			// Holds information about the currently ongoing touch input
			touch = {
				startX: 0,
				startY: 0,
				startCount: 0,
				captured: false,
				threshold: 40
			},

			// A key:value map of shortcut keyboard keys and descriptions of
			// the actions they trigger, generated in #configure()
			keyboardShortcuts = {},

			// Holds custom key code mappings
			registeredKeyBindings = {};

		/**
		 * Starts up the presentation if the client is capable.
		 */
		function initialize( options ) {

			// Make sure we only initialize once
			if( initialized === true ) return;

			initialized = true;

			checkCapabilities();

			if( !features.transforms2d && !features.transforms3d ) {
				document.body.setAttribute( 'class', 'no-transforms' );

				// Since JS won't be running any further, we load all lazy
				// loading elements upfront
				var images = toArray( document.getElementsByTagName( 'img' ) ),
					iframes = toArray( document.getElementsByTagName( 'iframe' ) );

				var lazyLoadable = images.concat( iframes );

				for( var i = 0, len = lazyLoadable.length; i < len; i++ ) {
					var element = lazyLoadable[i];
					if( element.getAttribute( 'data-src' ) ) {
						element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
						element.removeAttribute( 'data-src' );
					}
				}

				// If the browser doesn't support core features we won't be
				// using JavaScript to control the presentation
				return;
			}

			// Cache references to key DOM elements
			dom.wrapper = document.querySelector( '.reveal' );
			dom.slides = document.querySelector( '.reveal .slides' );

			// Force a layout when the whole page, incl fonts, has loaded
			window.addEventListener( 'load', layout, false );

			var query = Reveal.getQueryHash();

			// Do not accept new dependencies via query config to avoid
			// the potential of malicious script injection
			if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

			// Copy options over to our config object
			extend( config, options );
			extend( config, query );

			// Hide the address bar in mobile browsers
			hideAddressBar();

			// Loads dependencies and continues to #start() once done
			load();

		}

		/**
		 * Inspect the client to see what it's capable of, this
		 * should only happens once per runtime.
		 */
		function checkCapabilities() {

			isMobileDevice = /(iphone|ipod|ipad|android)/gi.test( UA );
			isChrome = /chrome/i.test( UA ) && !/edge/i.test( UA );

			var testElement = document.createElement( 'div' );

			features.transforms3d = 'WebkitPerspective' in testElement.style ||
									'MozPerspective' in testElement.style ||
									'msPerspective' in testElement.style ||
									'OPerspective' in testElement.style ||
									'perspective' in testElement.style;

			features.transforms2d = 'WebkitTransform' in testElement.style ||
									'MozTransform' in testElement.style ||
									'msTransform' in testElement.style ||
									'OTransform' in testElement.style ||
									'transform' in testElement.style;

			features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
			features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

			features.canvas = !!document.createElement( 'canvas' ).getContext;

			// Transitions in the overview are disabled in desktop and
			// Safari due to lag
			features.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test( UA );

			// Flags if we should use zoom instead of transform to scale
			// up slides. Zoom produces crisper results but has a lot of
			// xbrowser quirks so we only use it in whitelsited browsers.
			features.zoom = 'zoom' in testElement.style && !isMobileDevice &&
							( isChrome || /Version\/[\d\.]+.*Safari/.test( UA ) );

		}

		/**
		 * Loads the dependencies of reveal.js. Dependencies are
		 * defined via the configuration option 'dependencies'
		 * and will be loaded prior to starting/binding reveal.js.
		 * Some dependencies may have an 'async' flag, if so they
		 * will load after reveal.js has been started up.
		 */
		function load() {

			var scripts = [],
				scriptsToLoad = 0;

			config.dependencies.forEach( function( s ) {
				// Load if there's no condition or the condition is truthy
				if( !s.condition || s.condition() ) {
					if( s.async ) {
						asyncDependencies.push( s );
					}
					else {
						scripts.push( s );
					}
				}
			} );

			if( scripts.length ) {
				scriptsToLoad = scripts.length;

				// Load synchronous scripts
				scripts.forEach( function( s ) {
					loadScript( s.src, function() {

						if( typeof s.callback === 'function' ) s.callback();

						if( --scriptsToLoad === 0 ) {
							initPlugins();
						}

					} );
				} );
			}
			else {
				initPlugins();
			}

		}

		/**
		 * Initializes our plugins and waits for them to be ready
		 * before proceeding.
		 */
		function initPlugins() {

			var pluginsToInitialize = Object.keys( plugins ).length;

			// If there are no plugins, skip this step
			if( pluginsToInitialize === 0 ) {
				loadAsyncDependencies();
			}
			// ... otherwise initialize plugins
			else {

				var afterPlugInitialized = function() {
					if( --pluginsToInitialize === 0 ) {
						loadAsyncDependencies();
					}
				};

				for( var i in plugins ) {

					var plugin = plugins[i];

					// If the plugin has an 'init' method, invoke it
					if( typeof plugin.init === 'function' ) {
						var callback = plugin.init();

						// If the plugin returned a Promise, wait for it
						if( callback && typeof callback.then === 'function' ) {
							callback.then( afterPlugInitialized );
						}
						else {
							afterPlugInitialized();
						}
					}
					else {
						afterPlugInitialized();
					}

				}

			}

		}

		/**
		 * Loads all async reveal.js dependencies.
		 */
		function loadAsyncDependencies() {

			if( asyncDependencies.length ) {
				asyncDependencies.forEach( function( s ) {
					loadScript( s.src, s.callback );
				} );
			}

			start();

		}

		/**
		 * Loads a JavaScript file from the given URL and executes it.
		 *
		 * @param {string} url Address of the .js file to load
		 * @param {function} callback Method to invoke when the script
		 * has loaded and executed
		 */
		function loadScript( url, callback ) {

			var script = document.createElement( 'script' );
			script.type = 'text/javascript';
			script.async = false;
			script.defer = false;
			script.src = url;

			if( callback ) {

				// Success callback
				script.onload = script.onreadystatechange = function( event ) {
					if( event.type === "load" || (/loaded|complete/.test( script.readyState ) ) ) {

						// Kill event listeners
						script.onload = script.onreadystatechange = script.onerror = null;

						callback();

					}
				};

				// Error callback
				script.onerror = function( err ) {

					// Kill event listeners
					script.onload = script.onreadystatechange = script.onerror = null;

					callback( new Error( 'Failed loading script: ' + script.src + '\n' + err) );

				};

			}

			// Append the script at the end of <head>
			var head = document.querySelector( 'head' );
			head.insertBefore( script, head.lastChild );

		}

		/**
		 * Starts up reveal.js by binding input events and navigating
		 * to the current URL deeplink if there is one.
		 */
		function start() {

			loaded = true;

			// Make sure we've got all the DOM elements we need
			setupDOM();

			// Listen to messages posted to this window
			setupPostMessage();

			// Prevent the slides from being scrolled out of view
			setupScrollPrevention();

			// Resets all vertical slides so that only the first is visible
			resetVerticalSlides();

			// Updates the presentation to match the current configuration values
			configure();

			// Read the initial hash
			readURL();

			// Update all backgrounds
			updateBackground( true );

			// Notify listeners that the presentation is ready but use a 1ms
			// timeout to ensure it's not fired synchronously after #initialize()
			setTimeout( function() {
				// Enable transitions now that we're loaded
				dom.slides.classList.remove( 'no-transition' );

				dom.wrapper.classList.add( 'ready' );

				dispatchEvent( 'ready', {
					'indexh': indexh,
					'indexv': indexv,
					'currentSlide': currentSlide
				} );
			}, 1 );

			// Special setup and config is required when printing to PDF
			if( isPrintingPDF() ) {
				removeEventListeners();

				// The document needs to have loaded for the PDF layout
				// measurements to be accurate
				if( document.readyState === 'complete' ) {
					setupPDF();
				}
				else {
					window.addEventListener( 'load', setupPDF );
				}
			}

		}

		/**
		 * Finds and stores references to DOM elements which are
		 * required by the presentation. If a required element is
		 * not found, it is created.
		 */
		function setupDOM() {

			// Prevent transitions while we're loading
			dom.slides.classList.add( 'no-transition' );

			if( isMobileDevice ) {
				dom.wrapper.classList.add( 'no-hover' );
			}
			else {
				dom.wrapper.classList.remove( 'no-hover' );
			}

			if( /iphone/gi.test( UA ) ) {
				dom.wrapper.classList.add( 'ua-iphone' );
			}
			else {
				dom.wrapper.classList.remove( 'ua-iphone' );
			}

			// Background element
			dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

			// Progress bar
			dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
			dom.progressbar = dom.progress.querySelector( 'span' );

			// Arrow controls
			dom.controls = createSingletonNode( dom.wrapper, 'aside', 'controls',
				'<button class="navigate-left" aria-label="previous slide"><div class="controls-arrow"></div></button>' +
				'<button class="navigate-right" aria-label="next slide"><div class="controls-arrow"></div></button>' +
				'<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>' +
				'<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>' );

			// Slide number
			dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

			// Element containing notes that are visible to the audience
			dom.speakerNotes = createSingletonNode( dom.wrapper, 'div', 'speaker-notes', null );
			dom.speakerNotes.setAttribute( 'data-prevent-swipe', '' );
			dom.speakerNotes.setAttribute( 'tabindex', '0' );

			// Overlay graphic which is displayed during the paused mode
			dom.pauseOverlay = createSingletonNode( dom.wrapper, 'div', 'pause-overlay', config.controls ? '<button class="resume-button">Resume presentation</button>' : null );

			dom.wrapper.setAttribute( 'role', 'application' );

			// There can be multiple instances of controls throughout the page
			dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
			dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
			dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
			dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
			dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
			dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

			// The right and down arrows in the standard reveal.js controls
			dom.controlsRightArrow = dom.controls.querySelector( '.navigate-right' );
			dom.controlsDownArrow = dom.controls.querySelector( '.navigate-down' );

			dom.statusDiv = createStatusDiv();
		}

		/**
		 * Creates a hidden div with role aria-live to announce the
		 * current slide content. Hide the div off-screen to make it
		 * available only to Assistive Technologies.
		 *
		 * @return {HTMLElement}
		 */
		function createStatusDiv() {

			var statusDiv = document.getElementById( 'aria-status-div' );
			if( !statusDiv ) {
				statusDiv = document.createElement( 'div' );
				statusDiv.style.position = 'absolute';
				statusDiv.style.height = '1px';
				statusDiv.style.width = '1px';
				statusDiv.style.overflow = 'hidden';
				statusDiv.style.clip = 'rect( 1px, 1px, 1px, 1px )';
				statusDiv.setAttribute( 'id', 'aria-status-div' );
				statusDiv.setAttribute( 'aria-live', 'polite' );
				statusDiv.setAttribute( 'aria-atomic','true' );
				dom.wrapper.appendChild( statusDiv );
			}
			return statusDiv;

		}

		/**
		 * Converts the given HTML element into a string of text
		 * that can be announced to a screen reader. Hidden
		 * elements are excluded.
		 */
		function getStatusText( node ) {

			var text = '';

			// Text node
			if( node.nodeType === 3 ) {
				text += node.textContent;
			}
			// Element node
			else if( node.nodeType === 1 ) {

				var isAriaHidden = node.getAttribute( 'aria-hidden' );
				var isDisplayHidden = window.getComputedStyle( node )['display'] === 'none';
				if( isAriaHidden !== 'true' && !isDisplayHidden ) {

					toArray( node.childNodes ).forEach( function( child ) {
						text += getStatusText( child );
					} );

				}

			}

			return text;

		}

		/**
		 * Configures the presentation for printing to a static
		 * PDF.
		 */
		function setupPDF() {

			var slideSize = getComputedSlideSize( window.innerWidth, window.innerHeight );

			// Dimensions of the PDF pages
			var pageWidth = Math.floor( slideSize.width * ( 1 + config.margin ) ),
				pageHeight = Math.floor( slideSize.height * ( 1 + config.margin ) );

			// Dimensions of slides within the pages
			var slideWidth = slideSize.width,
				slideHeight = slideSize.height;

			// Let the browser know what page size we want to print
			injectStyleSheet( '@page{size:'+ pageWidth +'px '+ pageHeight +'px; margin: 0px;}' );

			// Limit the size of certain elements to the dimensions of the slide
			injectStyleSheet( '.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: '+ slideWidth +'px; max-height:'+ slideHeight +'px}' );

			document.body.classList.add( 'print-pdf' );
			document.body.style.width = pageWidth + 'px';
			document.body.style.height = pageHeight + 'px';

			// Make sure stretch elements fit on slide
			layoutSlideContents( slideWidth, slideHeight );

			// Add each slide's index as attributes on itself, we need these
			// indices to generate slide numbers below
			toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( hslide, h ) {
				hslide.setAttribute( 'data-index-h', h );

				if( hslide.classList.contains( 'stack' ) ) {
					toArray( hslide.querySelectorAll( 'section' ) ).forEach( function( vslide, v ) {
						vslide.setAttribute( 'data-index-h', h );
						vslide.setAttribute( 'data-index-v', v );
					} );
				}
			} );

			// Slide and slide background layout
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {

				// Vertical stacks are not centred since their section
				// children will be
				if( slide.classList.contains( 'stack' ) === false ) {
					// Center the slide inside of the page, giving the slide some margin
					var left = ( pageWidth - slideWidth ) / 2,
						top = ( pageHeight - slideHeight ) / 2;

					var contentHeight = slide.scrollHeight;
					var numberOfPages = Math.max( Math.ceil( contentHeight / pageHeight ), 1 );

					// Adhere to configured pages per slide limit
					numberOfPages = Math.min( numberOfPages, config.pdfMaxPagesPerSlide );

					// Center slides vertically
					if( numberOfPages === 1 && config.center || slide.classList.contains( 'center' ) ) {
						top = Math.max( ( pageHeight - contentHeight ) / 2, 0 );
					}

					// Wrap the slide in a page element and hide its overflow
					// so that no page ever flows onto another
					var page = document.createElement( 'div' );
					page.className = 'pdf-page';
					page.style.height = ( ( pageHeight + config.pdfPageHeightOffset ) * numberOfPages ) + 'px';
					slide.parentNode.insertBefore( page, slide );
					page.appendChild( slide );

					// Position the slide inside of the page
					slide.style.left = left + 'px';
					slide.style.top = top + 'px';
					slide.style.width = slideWidth + 'px';

					if( slide.slideBackgroundElement ) {
						page.insertBefore( slide.slideBackgroundElement, slide );
					}

					// Inject notes if `showNotes` is enabled
					if( config.showNotes ) {

						// Are there notes for this slide?
						var notes = getSlideNotes( slide );
						if( notes ) {

							var notesSpacing = 8;
							var notesLayout = typeof config.showNotes === 'string' ? config.showNotes : 'inline';
							var notesElement = document.createElement( 'div' );
							notesElement.classList.add( 'speaker-notes' );
							notesElement.classList.add( 'speaker-notes-pdf' );
							notesElement.setAttribute( 'data-layout', notesLayout );
							notesElement.innerHTML = notes;

							if( notesLayout === 'separate-page' ) {
								page.parentNode.insertBefore( notesElement, page.nextSibling );
							}
							else {
								notesElement.style.left = notesSpacing + 'px';
								notesElement.style.bottom = notesSpacing + 'px';
								notesElement.style.width = ( pageWidth - notesSpacing*2 ) + 'px';
								page.appendChild( notesElement );
							}

						}

					}

					// Inject slide numbers if `slideNumbers` are enabled
					if( config.slideNumber && /all|print/i.test( config.showSlideNumber ) ) {
						var slideNumberH = parseInt( slide.getAttribute( 'data-index-h' ), 10 ) + 1,
							slideNumberV = parseInt( slide.getAttribute( 'data-index-v' ), 10 ) + 1;

						var numberElement = document.createElement( 'div' );
						numberElement.classList.add( 'slide-number' );
						numberElement.classList.add( 'slide-number-pdf' );
						numberElement.innerHTML = formatSlideNumber( slideNumberH, '.', slideNumberV );
						page.appendChild( numberElement );
					}

					// Copy page and show fragments one after another
					if( config.pdfSeparateFragments ) {

						// Each fragment 'group' is an array containing one or more
						// fragments. Multiple fragments that appear at the same time
						// are part of the same group.
						var fragmentGroups = sortFragments( page.querySelectorAll( '.fragment' ), true );

						var previousFragmentStep;
						var previousPage;

						fragmentGroups.forEach( function( fragments ) {

							// Remove 'current-fragment' from the previous group
							if( previousFragmentStep ) {
								previousFragmentStep.forEach( function( fragment ) {
									fragment.classList.remove( 'current-fragment' );
								} );
							}

							// Show the fragments for the current index
							fragments.forEach( function( fragment ) {
								fragment.classList.add( 'visible', 'current-fragment' );
							} );

							// Create a separate page for the current fragment state
							var clonedPage = page.cloneNode( true );
							page.parentNode.insertBefore( clonedPage, ( previousPage || page ).nextSibling );

							previousFragmentStep = fragments;
							previousPage = clonedPage;

						} );

						// Reset the first/original page so that all fragments are hidden
						fragmentGroups.forEach( function( fragments ) {
							fragments.forEach( function( fragment ) {
								fragment.classList.remove( 'visible', 'current-fragment' );
							} );
						} );

					}
					// Show all fragments
					else {
						toArray( page.querySelectorAll( '.fragment:not(.fade-out)' ) ).forEach( function( fragment ) {
							fragment.classList.add( 'visible' );
						} );
					}

				}

			} );

			// Notify subscribers that the PDF layout is good to go
			dispatchEvent( 'pdf-ready' );

		}

		/**
		 * This is an unfortunate necessity. Some actions – such as
		 * an input field being focused in an iframe or using the
		 * keyboard to expand text selection beyond the bounds of
		 * a slide – can trigger our content to be pushed out of view.
		 * This scrolling can not be prevented by hiding overflow in
		 * CSS (we already do) so we have to resort to repeatedly
		 * checking if the slides have been offset :(
		 */
		function setupScrollPrevention() {

			setInterval( function() {
				if( dom.wrapper.scrollTop !== 0 || dom.wrapper.scrollLeft !== 0 ) {
					dom.wrapper.scrollTop = 0;
					dom.wrapper.scrollLeft = 0;
				}
			}, 1000 );

		}

		/**
		 * Creates an HTML element and returns a reference to it.
		 * If the element already exists the existing instance will
		 * be returned.
		 *
		 * @param {HTMLElement} container
		 * @param {string} tagname
		 * @param {string} classname
		 * @param {string} innerHTML
		 *
		 * @return {HTMLElement}
		 */
		function createSingletonNode( container, tagname, classname, innerHTML ) {

			// Find all nodes matching the description
			var nodes = container.querySelectorAll( '.' + classname );

			// Check all matches to find one which is a direct child of
			// the specified container
			for( var i = 0; i < nodes.length; i++ ) {
				var testNode = nodes[i];
				if( testNode.parentNode === container ) {
					return testNode;
				}
			}

			// If no node was found, create it now
			var node = document.createElement( tagname );
			node.className = classname;
			if( typeof innerHTML === 'string' ) {
				node.innerHTML = innerHTML;
			}
			container.appendChild( node );

			return node;

		}

		/**
		 * Creates the slide background elements and appends them
		 * to the background container. One element is created per
		 * slide no matter if the given slide has visible background.
		 */
		function createBackgrounds() {

			var printMode = isPrintingPDF();

			// Clear prior backgrounds
			dom.background.innerHTML = '';
			dom.background.classList.add( 'no-transition' );

			// Iterate over all horizontal slides
			toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

				var backgroundStack = createBackground( slideh, dom.background );

				// Iterate over all vertical slides
				toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

					createBackground( slidev, backgroundStack );

					backgroundStack.classList.add( 'stack' );

				} );

			} );

			// Add parallax background if specified
			if( config.parallaxBackgroundImage ) {

				dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
				dom.background.style.backgroundSize = config.parallaxBackgroundSize;
				dom.background.style.backgroundRepeat = config.parallaxBackgroundRepeat;
				dom.background.style.backgroundPosition = config.parallaxBackgroundPosition;

				// Make sure the below properties are set on the element - these properties are
				// needed for proper transitions to be set on the element via CSS. To remove
				// annoying background slide-in effect when the presentation starts, apply
				// these properties after short time delay
				setTimeout( function() {
					dom.wrapper.classList.add( 'has-parallax-background' );
				}, 1 );

			}
			else {

				dom.background.style.backgroundImage = '';
				dom.wrapper.classList.remove( 'has-parallax-background' );

			}

		}

		/**
		 * Creates a background for the given slide.
		 *
		 * @param {HTMLElement} slide
		 * @param {HTMLElement} container The element that the background
		 * should be appended to
		 * @return {HTMLElement} New background div
		 */
		function createBackground( slide, container ) {


			// Main slide background element
			var element = document.createElement( 'div' );
			element.className = 'slide-background ' + slide.className.replace( /present|past|future/, '' );

			// Inner background element that wraps images/videos/iframes
			var contentElement = document.createElement( 'div' );
			contentElement.className = 'slide-background-content';

			element.appendChild( contentElement );
			container.appendChild( element );

			slide.slideBackgroundElement = element;
			slide.slideBackgroundContentElement = contentElement;

			// Syncs the background to reflect all current background settings
			syncBackground( slide );

			return element;

		}

		/**
		 * Renders all of the visual properties of a slide background
		 * based on the various background attributes.
		 *
		 * @param {HTMLElement} slide
		 */
		function syncBackground( slide ) {

			var element = slide.slideBackgroundElement,
				contentElement = slide.slideBackgroundContentElement;

			// Reset the prior background state in case this is not the
			// initial sync
			slide.classList.remove( 'has-dark-background' );
			slide.classList.remove( 'has-light-background' );

			element.removeAttribute( 'data-loaded' );
			element.removeAttribute( 'data-background-hash' );
			element.removeAttribute( 'data-background-size' );
			element.removeAttribute( 'data-background-transition' );
			element.style.backgroundColor = '';

			contentElement.style.backgroundSize = '';
			contentElement.style.backgroundRepeat = '';
			contentElement.style.backgroundPosition = '';
			contentElement.style.backgroundImage = '';
			contentElement.style.opacity = '';
			contentElement.innerHTML = '';

			var data = {
				background: slide.getAttribute( 'data-background' ),
				backgroundSize: slide.getAttribute( 'data-background-size' ),
				backgroundImage: slide.getAttribute( 'data-background-image' ),
				backgroundVideo: slide.getAttribute( 'data-background-video' ),
				backgroundIframe: slide.getAttribute( 'data-background-iframe' ),
				backgroundColor: slide.getAttribute( 'data-background-color' ),
				backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
				backgroundPosition: slide.getAttribute( 'data-background-position' ),
				backgroundTransition: slide.getAttribute( 'data-background-transition' ),
				backgroundOpacity: slide.getAttribute( 'data-background-opacity' )
			};

			if( data.background ) {
				// Auto-wrap image urls in url(...)
				if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test( data.background ) ) {
					slide.setAttribute( 'data-background-image', data.background );
				}
				else {
					element.style.background = data.background;
				}
			}

			// Create a hash for this combination of background settings.
			// This is used to determine when two slide backgrounds are
			// the same.
			if( data.background || data.backgroundColor || data.backgroundImage || data.backgroundVideo || data.backgroundIframe ) {
				element.setAttribute( 'data-background-hash', data.background +
																data.backgroundSize +
																data.backgroundImage +
																data.backgroundVideo +
																data.backgroundIframe +
																data.backgroundColor +
																data.backgroundRepeat +
																data.backgroundPosition +
																data.backgroundTransition +
																data.backgroundOpacity );
			}

			// Additional and optional background properties
			if( data.backgroundSize ) element.setAttribute( 'data-background-size', data.backgroundSize );
			if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
			if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

			// Background image options are set on the content wrapper
			if( data.backgroundSize ) contentElement.style.backgroundSize = data.backgroundSize;
			if( data.backgroundRepeat ) contentElement.style.backgroundRepeat = data.backgroundRepeat;
			if( data.backgroundPosition ) contentElement.style.backgroundPosition = data.backgroundPosition;
			if( data.backgroundOpacity ) contentElement.style.opacity = data.backgroundOpacity;

			// If this slide has a background color, we add a class that
			// signals if it is light or dark. If the slide has no background
			// color, no class will be added
			var contrastColor = data.backgroundColor;

			// If no bg color was found, check the computed background
			if( !contrastColor ) {
				var computedBackgroundStyle = window.getComputedStyle( element );
				if( computedBackgroundStyle && computedBackgroundStyle.backgroundColor ) {
					contrastColor = computedBackgroundStyle.backgroundColor;
				}
			}

			if( contrastColor ) {
				var rgb = colorToRgb( contrastColor );

				// Ignore fully transparent backgrounds. Some browsers return
				// rgba(0,0,0,0) when reading the computed background color of
				// an element with no background
				if( rgb && rgb.a !== 0 ) {
					if( colorBrightness( contrastColor ) < 128 ) {
						slide.classList.add( 'has-dark-background' );
					}
					else {
						slide.classList.add( 'has-light-background' );
					}
				}
			}

		}

		/**
		 * Registers a listener to postMessage events, this makes it
		 * possible to call all reveal.js API methods from another
		 * window. For example:
		 *
		 * revealWindow.postMessage( JSON.stringify({
		 *   method: 'slide',
		 *   args: [ 2 ]
		 * }), '*' );
		 */
		function setupPostMessage() {

			if( config.postMessage ) {
				window.addEventListener( 'message', function ( event ) {
					var data = event.data;

					// Make sure we're dealing with JSON
					if( typeof data === 'string' && data.charAt( 0 ) === '{' && data.charAt( data.length - 1 ) === '}' ) {
						data = JSON.parse( data );

						// Check if the requested method can be found
						if( data.method && typeof Reveal[data.method] === 'function' ) {
							Reveal[data.method].apply( Reveal, data.args );
						}
					}
				}, false );
			}

		}

		/**
		 * Applies the configuration settings from the config
		 * object. May be called multiple times.
		 *
		 * @param {object} options
		 */
		function configure( options ) {

			var oldTransition = config.transition;

			// New config options may be passed when this method
			// is invoked through the API after initialization
			if( typeof options === 'object' ) extend( config, options );

			// Abort if reveal.js hasn't finished loading, config
			// changes will be applied automatically once loading
			// finishes
			if( loaded === false ) return;

			var numberOfSlides = dom.wrapper.querySelectorAll( SLIDES_SELECTOR ).length;

			// Remove the previously configured transition class
			dom.wrapper.classList.remove( oldTransition );

			// Force linear transition based on browser capabilities
			if( features.transforms3d === false ) config.transition = 'linear';

			dom.wrapper.classList.add( config.transition );

			dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
			dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

			dom.controls.style.display = config.controls ? 'block' : 'none';
			dom.progress.style.display = config.progress ? 'block' : 'none';

			dom.controls.setAttribute( 'data-controls-layout', config.controlsLayout );
			dom.controls.setAttribute( 'data-controls-back-arrows', config.controlsBackArrows );

			if( config.shuffle ) {
				shuffle();
			}

			if( config.rtl ) {
				dom.wrapper.classList.add( 'rtl' );
			}
			else {
				dom.wrapper.classList.remove( 'rtl' );
			}

			if( config.center ) {
				dom.wrapper.classList.add( 'center' );
			}
			else {
				dom.wrapper.classList.remove( 'center' );
			}

			// Exit the paused mode if it was configured off
			if( config.pause === false ) {
				resume();
			}

			if( config.showNotes ) {
				dom.speakerNotes.setAttribute( 'data-layout', typeof config.showNotes === 'string' ? config.showNotes : 'inline' );
			}

			if( config.mouseWheel ) {
				document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
				document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
			}
			else {
				document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
				document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
			}

			// Rolling 3D links
			if( config.rollingLinks ) {
				enableRollingLinks();
			}
			else {
				disableRollingLinks();
			}

			// Auto-hide the mouse pointer when its inactive
			if( config.hideInactiveCursor ) {
				document.addEventListener( 'mousemove', onDocumentCursorActive, false );
				document.addEventListener( 'mousedown', onDocumentCursorActive, false );
			}
			else {
				showCursor();

				document.removeEventListener( 'mousemove', onDocumentCursorActive, false );
				document.removeEventListener( 'mousedown', onDocumentCursorActive, false );
			}

			// Iframe link previews
			if( config.previewLinks ) {
				enablePreviewLinks();
				disablePreviewLinks( '[data-preview-link=false]' );
			}
			else {
				disablePreviewLinks();
				enablePreviewLinks( '[data-preview-link]:not([data-preview-link=false])' );
			}

			// Remove existing auto-slide controls
			if( autoSlidePlayer ) {
				autoSlidePlayer.destroy();
				autoSlidePlayer = null;
			}

			// Generate auto-slide controls if needed
			if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
				autoSlidePlayer = new Playback( dom.wrapper, function() {
					return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
				} );

				autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
				autoSlidePaused = false;
			}

			// When fragments are turned off they should be visible
			if( config.fragments === false ) {
				toArray( dom.slides.querySelectorAll( '.fragment' ) ).forEach( function( element ) {
					element.classList.add( 'visible' );
					element.classList.remove( 'current-fragment' );
				} );
			}

			// Slide numbers
			var slideNumberDisplay = 'none';
			if( config.slideNumber && !isPrintingPDF() ) {
				if( config.showSlideNumber === 'all' ) {
					slideNumberDisplay = 'block';
				}
				else if( config.showSlideNumber === 'speaker' && isSpeakerNotes() ) {
					slideNumberDisplay = 'block';
				}
			}

			dom.slideNumber.style.display = slideNumberDisplay;

			// Add the navigation mode to the DOM so we can adjust styling
			if( config.navigationMode !== 'default' ) {
				dom.wrapper.setAttribute( 'data-navigation-mode', config.navigationMode );
			}
			else {
				dom.wrapper.removeAttribute( 'data-navigation-mode' );
			}

			// Define our contextual list of keyboard shortcuts
			if( config.navigationMode === 'linear' ) {
				keyboardShortcuts['&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J'] = 'Next slide';
				keyboardShortcuts['&#8592;  ,  &#8593;  ,  P  ,  H  ,  K']           = 'Previous slide';
			}
			else {
				keyboardShortcuts['N  ,  SPACE']   = 'Next slide';
				keyboardShortcuts['P']             = 'Previous slide';
				keyboardShortcuts['&#8592;  ,  H'] = 'Navigate left';
				keyboardShortcuts['&#8594;  ,  L'] = 'Navigate right';
				keyboardShortcuts['&#8593;  ,  K'] = 'Navigate up';
				keyboardShortcuts['&#8595;  ,  J'] = 'Navigate down';
			}

			keyboardShortcuts['Home  ,  &#8984;/CTRL &#8592;'] = 'First slide';
			keyboardShortcuts['End  ,  &#8984;/CTRL &#8594;']  = 'Last slide';
			keyboardShortcuts['B  ,  .']                       = 'Pause';
			keyboardShortcuts['F']                             = 'Fullscreen';
			keyboardShortcuts['ESC, O']                        = 'Slide overview';

			sync();

		}

		/**
		 * Binds all event listeners.
		 */
		function addEventListeners() {

			eventsAreBound = true;

			window.addEventListener( 'hashchange', onWindowHashChange, false );
			window.addEventListener( 'resize', onWindowResize, false );

			if( config.touch ) {
				if( 'onpointerdown' in window ) {
					// Use W3C pointer events
					dom.wrapper.addEventListener( 'pointerdown', onPointerDown, false );
					dom.wrapper.addEventListener( 'pointermove', onPointerMove, false );
					dom.wrapper.addEventListener( 'pointerup', onPointerUp, false );
				}
				else if( window.navigator.msPointerEnabled ) {
					// IE 10 uses prefixed version of pointer events
					dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
					dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
					dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
				}
				else {
					// Fall back to touch events
					dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
					dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
					dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );
				}
			}

			if( config.keyboard ) {
				document.addEventListener( 'keydown', onDocumentKeyDown, false );
				document.addEventListener( 'keypress', onDocumentKeyPress, false );
			}

			if( config.progress && dom.progress ) {
				dom.progress.addEventListener( 'click', onProgressClicked, false );
			}

			dom.pauseOverlay.addEventListener( 'click', resume, false );

			if( config.focusBodyOnPageVisibilityChange ) {
				var visibilityChange;

				if( 'hidden' in document ) {
					visibilityChange = 'visibilitychange';
				}
				else if( 'msHidden' in document ) {
					visibilityChange = 'msvisibilitychange';
				}
				else if( 'webkitHidden' in document ) {
					visibilityChange = 'webkitvisibilitychange';
				}

				if( visibilityChange ) {
					document.addEventListener( visibilityChange, onPageVisibilityChange, false );
				}
			}

			// Listen to both touch and click events, in case the device
			// supports both
			var pointerEvents = [ 'touchstart', 'click' ];

			// Only support touch for Android, fixes double navigations in
			// stock browser
			if( UA.match( /android/gi ) ) {
				pointerEvents = [ 'touchstart' ];
			}

			pointerEvents.forEach( function( eventName ) {
				dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
				dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
				dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
				dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
				dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
				dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
			} );

		}

		/**
		 * Unbinds all event listeners.
		 */
		function removeEventListeners() {

			eventsAreBound = false;

			document.removeEventListener( 'keydown', onDocumentKeyDown, false );
			document.removeEventListener( 'keypress', onDocumentKeyPress, false );
			window.removeEventListener( 'hashchange', onWindowHashChange, false );
			window.removeEventListener( 'resize', onWindowResize, false );

			dom.wrapper.removeEventListener( 'pointerdown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'pointermove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'pointerup', onPointerUp, false );

			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );

			dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

			dom.pauseOverlay.removeEventListener( 'click', resume, false );

			if ( config.progress && dom.progress ) {
				dom.progress.removeEventListener( 'click', onProgressClicked, false );
			}

			[ 'touchstart', 'click' ].forEach( function( eventName ) {
				dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
				dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
				dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
				dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
				dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
				dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
			} );

		}

		/**
		 * Registers a new plugin with this reveal.js instance.
		 *
		 * reveal.js waits for all regisered plugins to initialize
		 * before considering itself ready, as long as the plugin
		 * is registered before calling `Reveal.initialize()`.
		 */
		function registerPlugin( id, plugin ) {

			if( plugins[id] === undefined ) {
				plugins[id] = plugin;

				// If a plugin is registered after reveal.js is loaded,
				// initialize it right away
				if( loaded && typeof plugin.init === 'function' ) {
					plugin.init();
				}
			}
			else {
				console.warn( 'reveal.js: "'+ id +'" plugin has already been registered' );
			}

		}

		/**
		 * Checks if a specific plugin has been registered.
		 *
		 * @param {String} id Unique plugin identifier
		 */
		function hasPlugin( id ) {

			return !!plugins[id];

		}

		/**
		 * Returns the specific plugin instance, if a plugin
		 * with the given ID has been registered.
		 *
		 * @param {String} id Unique plugin identifier
		 */
		function getPlugin( id ) {

			return plugins[id];

		}

		/**
		 * Add a custom key binding with optional description to
		 * be added to the help screen.
		 */
		function addKeyBinding( binding, callback ) {

			if( typeof binding === 'object' && binding.keyCode ) {
				registeredKeyBindings[binding.keyCode] = {
					callback: callback,
					key: binding.key,
					description: binding.description
				};
			}
			else {
				registeredKeyBindings[binding] = {
					callback: callback,
					key: null,
					description: null
				};
			}

		}

		/**
		 * Removes the specified custom key binding.
		 */
		function removeKeyBinding( keyCode ) {

			delete registeredKeyBindings[keyCode];

		}

		/**
		 * Extend object a with the properties of object b.
		 * If there's a conflict, object b takes precedence.
		 *
		 * @param {object} a
		 * @param {object} b
		 */
		function extend( a, b ) {

			for( var i in b ) {
				a[ i ] = b[ i ];
			}

			return a;

		}

		/**
		 * Converts the target object to an array.
		 *
		 * @param {object} o
		 * @return {object[]}
		 */
		function toArray( o ) {

			return Array.prototype.slice.call( o );

		}

		/**
		 * Utility for deserializing a value.
		 *
		 * @param {*} value
		 * @return {*}
		 */
		function deserialize( value ) {

			if( typeof value === 'string' ) {
				if( value === 'null' ) return null;
				else if( value === 'true' ) return true;
				else if( value === 'false' ) return false;
				else if( value.match( /^-?[\d\.]+$/ ) ) return parseFloat( value );
			}

			return value;

		}

		/**
		 * Measures the distance in pixels between point a
		 * and point b.
		 *
		 * @param {object} a point with x/y properties
		 * @param {object} b point with x/y properties
		 *
		 * @return {number}
		 */
		function distanceBetween( a, b ) {

			var dx = a.x - b.x,
				dy = a.y - b.y;

			return Math.sqrt( dx*dx + dy*dy );

		}

		/**
		 * Applies a CSS transform to the target element.
		 *
		 * @param {HTMLElement} element
		 * @param {string} transform
		 */
		function transformElement( element, transform ) {

			element.style.WebkitTransform = transform;
			element.style.MozTransform = transform;
			element.style.msTransform = transform;
			element.style.transform = transform;

		}

		/**
		 * Applies CSS transforms to the slides container. The container
		 * is transformed from two separate sources: layout and the overview
		 * mode.
		 *
		 * @param {object} transforms
		 */
		function transformSlides( transforms ) {

			// Pick up new transforms from arguments
			if( typeof transforms.layout === 'string' ) slidesTransform.layout = transforms.layout;
			if( typeof transforms.overview === 'string' ) slidesTransform.overview = transforms.overview;

			// Apply the transforms to the slides container
			if( slidesTransform.layout ) {
				transformElement( dom.slides, slidesTransform.layout + ' ' + slidesTransform.overview );
			}
			else {
				transformElement( dom.slides, slidesTransform.overview );
			}

		}

		/**
		 * Injects the given CSS styles into the DOM.
		 *
		 * @param {string} value
		 */
		function injectStyleSheet( value ) {

			var tag = document.createElement( 'style' );
			tag.type = 'text/css';
			if( tag.styleSheet ) {
				tag.styleSheet.cssText = value;
			}
			else {
				tag.appendChild( document.createTextNode( value ) );
			}
			document.getElementsByTagName( 'head' )[0].appendChild( tag );

		}

		/**
		 * Find the closest parent that matches the given
		 * selector.
		 *
		 * @param {HTMLElement} target The child element
		 * @param {String} selector The CSS selector to match
		 * the parents against
		 *
		 * @return {HTMLElement} The matched parent or null
		 * if no matching parent was found
		 */
		function closestParent( target, selector ) {

			var parent = target.parentNode;

			while( parent ) {

				// There's some overhead doing this each time, we don't
				// want to rewrite the element prototype but should still
				// be enough to feature detect once at startup...
				var matchesMethod = parent.matches || parent.matchesSelector || parent.msMatchesSelector;

				// If we find a match, we're all set
				if( matchesMethod && matchesMethod.call( parent, selector ) ) {
					return parent;
				}

				// Keep searching
				parent = parent.parentNode;

			}

			return null;

		}

		/**
		 * Converts various color input formats to an {r:0,g:0,b:0} object.
		 *
		 * @param {string} color The string representation of a color
		 * @example
		 * colorToRgb('#000');
		 * @example
		 * colorToRgb('#000000');
		 * @example
		 * colorToRgb('rgb(0,0,0)');
		 * @example
		 * colorToRgb('rgba(0,0,0)');
		 *
		 * @return {{r: number, g: number, b: number, [a]: number}|null}
		 */
		function colorToRgb( color ) {

			var hex3 = color.match( /^#([0-9a-f]{3})$/i );
			if( hex3 && hex3[1] ) {
				hex3 = hex3[1];
				return {
					r: parseInt( hex3.charAt( 0 ), 16 ) * 0x11,
					g: parseInt( hex3.charAt( 1 ), 16 ) * 0x11,
					b: parseInt( hex3.charAt( 2 ), 16 ) * 0x11
				};
			}

			var hex6 = color.match( /^#([0-9a-f]{6})$/i );
			if( hex6 && hex6[1] ) {
				hex6 = hex6[1];
				return {
					r: parseInt( hex6.substr( 0, 2 ), 16 ),
					g: parseInt( hex6.substr( 2, 2 ), 16 ),
					b: parseInt( hex6.substr( 4, 2 ), 16 )
				};
			}

			var rgb = color.match( /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i );
			if( rgb ) {
				return {
					r: parseInt( rgb[1], 10 ),
					g: parseInt( rgb[2], 10 ),
					b: parseInt( rgb[3], 10 )
				};
			}

			var rgba = color.match( /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i );
			if( rgba ) {
				return {
					r: parseInt( rgba[1], 10 ),
					g: parseInt( rgba[2], 10 ),
					b: parseInt( rgba[3], 10 ),
					a: parseFloat( rgba[4] )
				};
			}

			return null;

		}

		/**
		 * Calculates brightness on a scale of 0-255.
		 *
		 * @param {string} color See colorToRgb for supported formats.
		 * @see {@link colorToRgb}
		 */
		function colorBrightness( color ) {

			if( typeof color === 'string' ) color = colorToRgb( color );

			if( color ) {
				return ( color.r * 299 + color.g * 587 + color.b * 114 ) / 1000;
			}

			return null;

		}

		/**
		 * Returns the remaining height within the parent of the
		 * target element.
		 *
		 * remaining height = [ configured parent height ] - [ current parent height ]
		 *
		 * @param {HTMLElement} element
		 * @param {number} [height]
		 */
		function getRemainingHeight( element, height ) {

			height = height || 0;

			if( element ) {
				var newHeight, oldHeight = element.style.height;

				// Change the .stretch element height to 0 in order find the height of all
				// the other elements
				element.style.height = '0px';

				// In Overview mode, the parent (.slide) height is set of 700px.
				// Restore it temporarily to its natural height.
				element.parentNode.style.height = 'auto';

				newHeight = height - element.parentNode.offsetHeight;

				// Restore the old height, just in case
				element.style.height = oldHeight + 'px';

				// Clear the parent (.slide) height. .removeProperty works in IE9+
				element.parentNode.style.removeProperty('height');

				return newHeight;
			}

			return height;

		}

		/**
		 * Checks if this instance is being used to print a PDF.
		 */
		function isPrintingPDF() {

			return ( /print-pdf/gi ).test( window.location.search );

		}

		/**
		 * Hides the address bar if we're on a mobile device.
		 */
		function hideAddressBar() {

			if( config.hideAddressBar && isMobileDevice ) {
				// Events that should trigger the address bar to hide
				window.addEventListener( 'load', removeAddressBar, false );
				window.addEventListener( 'orientationchange', removeAddressBar, false );
			}

		}

		/**
		 * Causes the address bar to hide on mobile devices,
		 * more vertical space ftw.
		 */
		function removeAddressBar() {

			setTimeout( function() {
				window.scrollTo( 0, 1 );
			}, 10 );

		}

		/**
		 * Dispatches an event of the specified type from the
		 * reveal DOM element.
		 */
		function dispatchEvent( type, args ) {

			var event = document.createEvent( 'HTMLEvents', 1, 2 );
			event.initEvent( type, true, true );
			extend( event, args );
			dom.wrapper.dispatchEvent( event );

			// If we're in an iframe, post each reveal.js event to the
			// parent window. Used by the notes plugin
			if( config.postMessageEvents && window.parent !== window.self ) {
				window.parent.postMessage( JSON.stringify({ namespace: 'reveal', eventName: type, state: getState() }), '*' );
			}

		}

		/**
		 * Wrap all links in 3D goodness.
		 */
		function enableRollingLinks() {

			if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
				var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a' );

				for( var i = 0, len = anchors.length; i < len; i++ ) {
					var anchor = anchors[i];

					if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
						var span = document.createElement('span');
						span.setAttribute('data-title', anchor.text);
						span.innerHTML = anchor.innerHTML;

						anchor.classList.add( 'roll' );
						anchor.innerHTML = '';
						anchor.appendChild(span);
					}
				}
			}

		}

		/**
		 * Unwrap all 3D links.
		 */
		function disableRollingLinks() {

			var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];
				var span = anchor.querySelector( 'span' );

				if( span ) {
					anchor.classList.remove( 'roll' );
					anchor.innerHTML = span.innerHTML;
				}
			}

		}

		/**
		 * Bind preview frame links.
		 *
		 * @param {string} [selector=a] - selector for anchors
		 */
		function enablePreviewLinks( selector ) {

			var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

			anchors.forEach( function( element ) {
				if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
					element.addEventListener( 'click', onPreviewLinkClicked, false );
				}
			} );

		}

		/**
		 * Unbind preview frame links.
		 */
		function disablePreviewLinks( selector ) {

			var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

			anchors.forEach( function( element ) {
				if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
					element.removeEventListener( 'click', onPreviewLinkClicked, false );
				}
			} );

		}

		/**
		 * Opens a preview window for the target URL.
		 *
		 * @param {string} url - url for preview iframe src
		 */
		function showPreview( url ) {

			closeOverlay();

			dom.overlay = document.createElement( 'div' );
			dom.overlay.classList.add( 'overlay' );
			dom.overlay.classList.add( 'overlay-preview' );
			dom.wrapper.appendChild( dom.overlay );

			dom.overlay.innerHTML = [
				'<header>',
					'<a class="close" href="#"><span class="icon"></span></a>',
					'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
				'</header>',
				'<div class="spinner"></div>',
				'<div class="viewport">',
					'<iframe src="'+ url +'"></iframe>',
					'<small class="viewport-inner">',
						'<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>',
					'</small>',
				'</div>'
			].join('');

			dom.overlay.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
				dom.overlay.classList.add( 'loaded' );
			}, false );

			dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
				closeOverlay();
				event.preventDefault();
			}, false );

			dom.overlay.querySelector( '.external' ).addEventListener( 'click', function( event ) {
				closeOverlay();
			}, false );

			setTimeout( function() {
				dom.overlay.classList.add( 'visible' );
			}, 1 );

		}

		/**
		 * Open or close help overlay window.
		 *
		 * @param {Boolean} [override] Flag which overrides the
		 * toggle logic and forcibly sets the desired state. True means
		 * help is open, false means it's closed.
		 */
		function toggleHelp( override ){

			if( typeof override === 'boolean' ) {
				override ? showHelp() : closeOverlay();
			}
			else {
				if( dom.overlay ) {
					closeOverlay();
				}
				else {
					showHelp();
				}
			}
		}

		/**
		 * Opens an overlay window with help material.
		 */
		function showHelp() {

			if( config.help ) {

				closeOverlay();

				dom.overlay = document.createElement( 'div' );
				dom.overlay.classList.add( 'overlay' );
				dom.overlay.classList.add( 'overlay-help' );
				dom.wrapper.appendChild( dom.overlay );

				var html = '<p class="title">Keyboard Shortcuts</p><br/>';

				html += '<table><th>KEY</th><th>ACTION</th>';
				for( var key in keyboardShortcuts ) {
					html += '<tr><td>' + key + '</td><td>' + keyboardShortcuts[ key ] + '</td></tr>';
				}

				// Add custom key bindings that have associated descriptions
				for( var binding in registeredKeyBindings ) {
					if( registeredKeyBindings[binding].key && registeredKeyBindings[binding].description ) {
						html += '<tr><td>' + registeredKeyBindings[binding].key + '</td><td>' + registeredKeyBindings[binding].description + '</td></tr>';
					}
				}

				html += '</table>';

				dom.overlay.innerHTML = [
					'<header>',
						'<a class="close" href="#"><span class="icon"></span></a>',
					'</header>',
					'<div class="viewport">',
						'<div class="viewport-inner">'+ html +'</div>',
					'</div>'
				].join('');

				dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
					closeOverlay();
					event.preventDefault();
				}, false );

				setTimeout( function() {
					dom.overlay.classList.add( 'visible' );
				}, 1 );

			}

		}

		/**
		 * Closes any currently open overlay.
		 */
		function closeOverlay() {

			if( dom.overlay ) {
				dom.overlay.parentNode.removeChild( dom.overlay );
				dom.overlay = null;
			}

		}

		/**
		 * Applies JavaScript-controlled layout rules to the
		 * presentation.
		 */
		function layout() {

			if( dom.wrapper && !isPrintingPDF() ) {

				if( !config.disableLayout ) {

					// On some mobile devices '100vh' is taller than the visible
					// viewport which leads to part of the presentation being
					// cut off. To work around this we define our own '--vh' custom
					// property where 100x adds up to the correct height.
					//
					// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
					if( isMobileDevice ) {
						document.documentElement.style.setProperty( '--vh', ( window.innerHeight * 0.01 ) + 'px' );
					}

					var size = getComputedSlideSize();

					var oldScale = scale;

					// Layout the contents of the slides
					layoutSlideContents( config.width, config.height );

					dom.slides.style.width = size.width + 'px';
					dom.slides.style.height = size.height + 'px';

					// Determine scale of content to fit within available space
					scale = Math.min( size.presentationWidth / size.width, size.presentationHeight / size.height );

					// Respect max/min scale settings
					scale = Math.max( scale, config.minScale );
					scale = Math.min( scale, config.maxScale );

					// Don't apply any scaling styles if scale is 1
					if( scale === 1 ) {
						dom.slides.style.zoom = '';
						dom.slides.style.left = '';
						dom.slides.style.top = '';
						dom.slides.style.bottom = '';
						dom.slides.style.right = '';
						transformSlides( { layout: '' } );
					}
					else {
						// Prefer zoom for scaling up so that content remains crisp.
						// Don't use zoom to scale down since that can lead to shifts
						// in text layout/line breaks.
						if( scale > 1 && features.zoom ) {
							dom.slides.style.zoom = scale;
							dom.slides.style.left = '';
							dom.slides.style.top = '';
							dom.slides.style.bottom = '';
							dom.slides.style.right = '';
							transformSlides( { layout: '' } );
						}
						// Apply scale transform as a fallback
						else {
							dom.slides.style.zoom = '';
							dom.slides.style.left = '50%';
							dom.slides.style.top = '50%';
							dom.slides.style.bottom = 'auto';
							dom.slides.style.right = 'auto';
							transformSlides( { layout: 'translate(-50%, -50%) scale('+ scale +')' } );
						}
					}

					// Select all slides, vertical and horizontal
					var slides = toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) );

					for( var i = 0, len = slides.length; i < len; i++ ) {
						var slide = slides[ i ];

						// Don't bother updating invisible slides
						if( slide.style.display === 'none' ) {
							continue;
						}

						if( config.center || slide.classList.contains( 'center' ) ) {
							// Vertical stacks are not centred since their section
							// children will be
							if( slide.classList.contains( 'stack' ) ) {
								slide.style.top = 0;
							}
							else {
								slide.style.top = Math.max( ( size.height - slide.scrollHeight ) / 2, 0 ) + 'px';
							}
						}
						else {
							slide.style.top = '';
						}

					}

					if( oldScale !== scale ) {
						dispatchEvent( 'resize', {
							'oldScale': oldScale,
							'scale': scale,
							'size': size
						} );
					}
				}

				updateProgress();
				updateParallax();

				if( isOverview() ) {
					updateOverview();
				}

			}

		}

		/**
		 * Applies layout logic to the contents of all slides in
		 * the presentation.
		 *
		 * @param {string|number} width
		 * @param {string|number} height
		 */
		function layoutSlideContents( width, height ) {

			// Handle sizing of elements with the 'stretch' class
			toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

				// Determine how much vertical space we can use
				var remainingHeight = getRemainingHeight( element, height );

				// Consider the aspect ratio of media elements
				if( /(img|video)/gi.test( element.nodeName ) ) {
					var nw = element.naturalWidth || element.videoWidth,
						nh = element.naturalHeight || element.videoHeight;

					var es = Math.min( width / nw, remainingHeight / nh );

					element.style.width = ( nw * es ) + 'px';
					element.style.height = ( nh * es ) + 'px';

				}
				else {
					element.style.width = width + 'px';
					element.style.height = remainingHeight + 'px';
				}

			} );

		}

		/**
		 * Calculates the computed pixel size of our slides. These
		 * values are based on the width and height configuration
		 * options.
		 *
		 * @param {number} [presentationWidth=dom.wrapper.offsetWidth]
		 * @param {number} [presentationHeight=dom.wrapper.offsetHeight]
		 */
		function getComputedSlideSize( presentationWidth, presentationHeight ) {

			var size = {
				// Slide size
				width: config.width,
				height: config.height,

				// Presentation size
				presentationWidth: presentationWidth || dom.wrapper.offsetWidth,
				presentationHeight: presentationHeight || dom.wrapper.offsetHeight
			};

			// Reduce available space by margin
			size.presentationWidth -= ( size.presentationWidth * config.margin );
			size.presentationHeight -= ( size.presentationHeight * config.margin );

			// Slide width may be a percentage of available width
			if( typeof size.width === 'string' && /%$/.test( size.width ) ) {
				size.width = parseInt( size.width, 10 ) / 100 * size.presentationWidth;
			}

			// Slide height may be a percentage of available height
			if( typeof size.height === 'string' && /%$/.test( size.height ) ) {
				size.height = parseInt( size.height, 10 ) / 100 * size.presentationHeight;
			}

			return size;

		}

		/**
		 * Stores the vertical index of a stack so that the same
		 * vertical slide can be selected when navigating to and
		 * from the stack.
		 *
		 * @param {HTMLElement} stack The vertical stack element
		 * @param {string|number} [v=0] Index to memorize
		 */
		function setPreviousVerticalIndex( stack, v ) {

			if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
				stack.setAttribute( 'data-previous-indexv', v || 0 );
			}

		}

		/**
		 * Retrieves the vertical index which was stored using
		 * #setPreviousVerticalIndex() or 0 if no previous index
		 * exists.
		 *
		 * @param {HTMLElement} stack The vertical stack element
		 */
		function getPreviousVerticalIndex( stack ) {

			if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
				// Prefer manually defined start-indexv
				var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

				return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
			}

			return 0;

		}

		/**
		 * Displays the overview of slides (quick nav) by scaling
		 * down and arranging all slide elements.
		 */
		function activateOverview() {

			// Only proceed if enabled in config
			if( config.overview && !isOverview() ) {

				overview = true;

				dom.wrapper.classList.add( 'overview' );
				dom.wrapper.classList.remove( 'overview-deactivating' );

				if( features.overviewTransitions ) {
					setTimeout( function() {
						dom.wrapper.classList.add( 'overview-animated' );
					}, 1 );
				}

				// Don't auto-slide while in overview mode
				cancelAutoSlide();

				// Move the backgrounds element into the slide container to
				// that the same scaling is applied
				dom.slides.appendChild( dom.background );

				// Clicking on an overview slide navigates to it
				toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
					if( !slide.classList.contains( 'stack' ) ) {
						slide.addEventListener( 'click', onOverviewSlideClicked, true );
					}
				} );

				// Calculate slide sizes
				var margin = 70;
				var slideSize = getComputedSlideSize();
				overviewSlideWidth = slideSize.width + margin;
				overviewSlideHeight = slideSize.height + margin;

				// Reverse in RTL mode
				if( config.rtl ) {
					overviewSlideWidth = -overviewSlideWidth;
				}

				updateSlidesVisibility();
				layoutOverview();
				updateOverview();

				layout();

				// Notify observers of the overview showing
				dispatchEvent( 'overviewshown', {
					'indexh': indexh,
					'indexv': indexv,
					'currentSlide': currentSlide
				} );

			}

		}

		/**
		 * Uses CSS transforms to position all slides in a grid for
		 * display inside of the overview mode.
		 */
		function layoutOverview() {

			// Layout slides
			toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( hslide, h ) {
				hslide.setAttribute( 'data-index-h', h );
				transformElement( hslide, 'translate3d(' + ( h * overviewSlideWidth ) + 'px, 0, 0)' );

				if( hslide.classList.contains( 'stack' ) ) {

					toArray( hslide.querySelectorAll( 'section' ) ).forEach( function( vslide, v ) {
						vslide.setAttribute( 'data-index-h', h );
						vslide.setAttribute( 'data-index-v', v );

						transformElement( vslide, 'translate3d(0, ' + ( v * overviewSlideHeight ) + 'px, 0)' );
					} );

				}
			} );

			// Layout slide backgrounds
			toArray( dom.background.childNodes ).forEach( function( hbackground, h ) {
				transformElement( hbackground, 'translate3d(' + ( h * overviewSlideWidth ) + 'px, 0, 0)' );

				toArray( hbackground.querySelectorAll( '.slide-background' ) ).forEach( function( vbackground, v ) {
					transformElement( vbackground, 'translate3d(0, ' + ( v * overviewSlideHeight ) + 'px, 0)' );
				} );
			} );

		}

		/**
		 * Moves the overview viewport to the current slides.
		 * Called each time the current slide changes.
		 */
		function updateOverview() {

			var vmin = Math.min( window.innerWidth, window.innerHeight );
			var scale = Math.max( vmin / 5, 150 ) / vmin;

			transformSlides( {
				overview: [
					'scale('+ scale +')',
					'translateX('+ ( -indexh * overviewSlideWidth ) +'px)',
					'translateY('+ ( -indexv * overviewSlideHeight ) +'px)'
				].join( ' ' )
			} );

		}

		/**
		 * Exits the slide overview and enters the currently
		 * active slide.
		 */
		function deactivateOverview() {

			// Only proceed if enabled in config
			if( config.overview ) {

				overview = false;

				dom.wrapper.classList.remove( 'overview' );
				dom.wrapper.classList.remove( 'overview-animated' );

				// Temporarily add a class so that transitions can do different things
				// depending on whether they are exiting/entering overview, or just
				// moving from slide to slide
				dom.wrapper.classList.add( 'overview-deactivating' );

				setTimeout( function () {
					dom.wrapper.classList.remove( 'overview-deactivating' );
				}, 1 );

				// Move the background element back out
				dom.wrapper.appendChild( dom.background );

				// Clean up changes made to slides
				toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
					transformElement( slide, '' );

					slide.removeEventListener( 'click', onOverviewSlideClicked, true );
				} );

				// Clean up changes made to backgrounds
				toArray( dom.background.querySelectorAll( '.slide-background' ) ).forEach( function( background ) {
					transformElement( background, '' );
				} );

				transformSlides( { overview: '' } );

				slide( indexh, indexv );

				layout();

				cueAutoSlide();

				// Notify observers of the overview hiding
				dispatchEvent( 'overviewhidden', {
					'indexh': indexh,
					'indexv': indexv,
					'currentSlide': currentSlide
				} );

			}
		}

		/**
		 * Toggles the slide overview mode on and off.
		 *
		 * @param {Boolean} [override] Flag which overrides the
		 * toggle logic and forcibly sets the desired state. True means
		 * overview is open, false means it's closed.
		 */
		function toggleOverview( override ) {

			if( typeof override === 'boolean' ) {
				override ? activateOverview() : deactivateOverview();
			}
			else {
				isOverview() ? deactivateOverview() : activateOverview();
			}

		}

		/**
		 * Checks if the overview is currently active.
		 *
		 * @return {Boolean} true if the overview is active,
		 * false otherwise
		 */
		function isOverview() {

			return overview;

		}

		/**
		 * Return a hash URL that will resolve to the current slide location.
		 */
		function locationHash() {

			var url = '/';

			// Attempt to create a named link based on the slide's ID
			var id = currentSlide ? currentSlide.getAttribute( 'id' ) : null;
			if( id ) {
				id = encodeURIComponent( id );
			}

			var indexf;
			if( config.fragmentInURL ) {
				indexf = getIndices().f;
			}

			// If the current slide has an ID, use that as a named link,
			// but we don't support named links with a fragment index
			if( typeof id === 'string' && id.length && indexf === undefined ) {
				url = '/' + id;
			}
			// Otherwise use the /h/v index
			else {
				var hashIndexBase = config.hashOneBasedIndex ? 1 : 0;
				if( indexh > 0 || indexv > 0 || indexf !== undefined ) url += indexh + hashIndexBase;
				if( indexv > 0 || indexf !== undefined ) url += '/' + (indexv + hashIndexBase );
				if( indexf !== undefined ) url += '/' + indexf;
			}

			return url;

		}

		/**
		 * Checks if the current or specified slide is vertical
		 * (nested within another slide).
		 *
		 * @param {HTMLElement} [slide=currentSlide] The slide to check
		 * orientation of
		 * @return {Boolean}
		 */
		function isVerticalSlide( slide ) {

			// Prefer slide argument, otherwise use current slide
			slide = slide ? slide : currentSlide;

			return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

		}

		/**
		 * Handling the fullscreen functionality via the fullscreen API
		 *
		 * @see http://fullscreen.spec.whatwg.org/
		 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
		 */
		function enterFullscreen() {

			var element = document.documentElement;

			// Check which implementation is available
			var requestMethod = element.requestFullscreen ||
								element.webkitRequestFullscreen ||
								element.webkitRequestFullScreen ||
								element.mozRequestFullScreen ||
								element.msRequestFullscreen;

			if( requestMethod ) {
				requestMethod.apply( element );
			}

		}

		/**
		 * Shows the mouse pointer after it has been hidden with
		 * #hideCursor.
		 */
		function showCursor() {

			if( cursorHidden ) {
				cursorHidden = false;
				dom.wrapper.style.cursor = '';
			}

		}

		/**
		 * Hides the mouse pointer when it's on top of the .reveal
		 * container.
		 */
		function hideCursor() {

			if( cursorHidden === false ) {
				cursorHidden = true;
				dom.wrapper.style.cursor = 'none';
			}

		}

		/**
		 * Enters the paused mode which fades everything on screen to
		 * black.
		 */
		function pause() {

			if( config.pause ) {
				var wasPaused = dom.wrapper.classList.contains( 'paused' );

				cancelAutoSlide();
				dom.wrapper.classList.add( 'paused' );

				if( wasPaused === false ) {
					dispatchEvent( 'paused' );
				}
			}

		}

		/**
		 * Exits from the paused mode.
		 */
		function resume() {

			var wasPaused = dom.wrapper.classList.contains( 'paused' );
			dom.wrapper.classList.remove( 'paused' );

			cueAutoSlide();

			if( wasPaused ) {
				dispatchEvent( 'resumed' );
			}

		}

		/**
		 * Toggles the paused mode on and off.
		 */
		function togglePause( override ) {

			if( typeof override === 'boolean' ) {
				override ? pause() : resume();
			}
			else {
				isPaused() ? resume() : pause();
			}

		}

		/**
		 * Checks if we are currently in the paused mode.
		 *
		 * @return {Boolean}
		 */
		function isPaused() {

			return dom.wrapper.classList.contains( 'paused' );

		}

		/**
		 * Toggles the auto slide mode on and off.
		 *
		 * @param {Boolean} [override] Flag which sets the desired state.
		 * True means autoplay starts, false means it stops.
		 */

		function toggleAutoSlide( override ) {

			if( typeof override === 'boolean' ) {
				override ? resumeAutoSlide() : pauseAutoSlide();
			}

			else {
				autoSlidePaused ? resumeAutoSlide() : pauseAutoSlide();
			}

		}

		/**
		 * Checks if the auto slide mode is currently on.
		 *
		 * @return {Boolean}
		 */
		function isAutoSliding() {

			return !!( autoSlide && !autoSlidePaused );

		}

		/**
		 * Steps from the current point in the presentation to the
		 * slide which matches the specified horizontal and vertical
		 * indices.
		 *
		 * @param {number} [h=indexh] Horizontal index of the target slide
		 * @param {number} [v=indexv] Vertical index of the target slide
		 * @param {number} [f] Index of a fragment within the
		 * target slide to activate
		 * @param {number} [o] Origin for use in multimaster environments
		 */
		function slide( h, v, f, o ) {

			// Remember where we were at before
			previousSlide = currentSlide;

			// Query all horizontal slides in the deck
			var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

			// Abort if there are no slides
			if( horizontalSlides.length === 0 ) return;

			// If no vertical index is specified and the upcoming slide is a
			// stack, resume at its previous vertical index
			if( v === undefined && !isOverview() ) {
				v = getPreviousVerticalIndex( horizontalSlides[ h ] );
			}

			// If we were on a vertical stack, remember what vertical index
			// it was on so we can resume at the same position when returning
			if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
				setPreviousVerticalIndex( previousSlide.parentNode, indexv );
			}

			// Remember the state before this slide
			var stateBefore = state.concat();

			// Reset the state array
			state.length = 0;

			var indexhBefore = indexh || 0,
				indexvBefore = indexv || 0;

			// Activate and transition to the new slide
			indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
			indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

			// Update the visibility of slides now that the indices have changed
			updateSlidesVisibility();

			layout();

			// Update the overview if it's currently active
			if( isOverview() ) {
				updateOverview();
			}

			// Find the current horizontal slide and any possible vertical slides
			// within it
			var currentHorizontalSlide = horizontalSlides[ indexh ],
				currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

			// Store references to the previous and current slides
			currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

			// Show fragment, if specified
			if( typeof f !== 'undefined' ) {
				navigateFragment( f );
			}

			// Dispatch an event if the slide changed
			var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
			if (!slideChanged) {
				// Ensure that the previous slide is never the same as the current
				previousSlide = null;
			}

			// Solves an edge case where the previous slide maintains the
			// 'present' class when navigating between adjacent vertical
			// stacks
			if( previousSlide && previousSlide !== currentSlide ) {
				previousSlide.classList.remove( 'present' );
				previousSlide.setAttribute( 'aria-hidden', 'true' );

				// Reset all slides upon navigate to home
				// Issue: #285
				if ( dom.wrapper.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
					// Launch async task
					setTimeout( function () {
						var slides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
						for( i in slides ) {
							if( slides[i] ) {
								// Reset stack
								setPreviousVerticalIndex( slides[i], 0 );
							}
						}
					}, 0 );
				}
			}

			// Apply the new state
			stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
				// Check if this state existed on the previous slide. If it
				// did, we will avoid adding it repeatedly
				for( var j = 0; j < stateBefore.length; j++ ) {
					if( stateBefore[j] === state[i] ) {
						stateBefore.splice( j, 1 );
						continue stateLoop;
					}
				}

				document.documentElement.classList.add( state[i] );

				// Dispatch custom event matching the state's name
				dispatchEvent( state[i] );
			}

			// Clean up the remains of the previous state
			while( stateBefore.length ) {
				document.documentElement.classList.remove( stateBefore.pop() );
			}

			if( slideChanged ) {
				dispatchEvent( 'slidechanged', {
					'indexh': indexh,
					'indexv': indexv,
					'previousSlide': previousSlide,
					'currentSlide': currentSlide,
					'origin': o
				} );
			}

			// Handle embedded content
			if( slideChanged || !previousSlide ) {
				stopEmbeddedContent( previousSlide );
				startEmbeddedContent( currentSlide );
			}

			// Announce the current slide contents, for screen readers
			dom.statusDiv.textContent = getStatusText( currentSlide );

			updateControls();
			updateProgress();
			updateBackground();
			updateParallax();
			updateSlideNumber();
			updateNotes();
			updateFragments();

			// Update the URL hash
			writeURL();

			cueAutoSlide();

		}

		/**
		 * Syncs the presentation with the current DOM. Useful
		 * when new slides or control elements are added or when
		 * the configuration has changed.
		 */
		function sync() {

			// Subscribe to input
			removeEventListeners();
			addEventListeners();

			// Force a layout to make sure the current config is accounted for
			layout();

			// Reflect the current autoSlide value
			autoSlide = config.autoSlide;

			// Start auto-sliding if it's enabled
			cueAutoSlide();

			// Re-create the slide backgrounds
			createBackgrounds();

			// Write the current hash to the URL
			writeURL();

			sortAllFragments();

			updateControls();
			updateProgress();
			updateSlideNumber();
			updateSlidesVisibility();
			updateBackground( true );
			updateNotesVisibility();
			updateNotes();

			formatEmbeddedContent();

			// Start or stop embedded content depending on global config
			if( config.autoPlayMedia === false ) {
				stopEmbeddedContent( currentSlide, { unloadIframes: false } );
			}
			else {
				startEmbeddedContent( currentSlide );
			}

			if( isOverview() ) {
				layoutOverview();
			}

		}

		/**
		 * Updates reveal.js to keep in sync with new slide attributes. For
		 * example, if you add a new `data-background-image` you can call
		 * this to have reveal.js render the new background image.
		 *
		 * Similar to #sync() but more efficient when you only need to
		 * refresh a specific slide.
		 *
		 * @param {HTMLElement} slide
		 */
		function syncSlide( slide ) {

			// Default to the current slide
			slide = slide || currentSlide;

			syncBackground( slide );
			syncFragments( slide );

			updateBackground();
			updateNotes();

			loadSlide( slide );

		}

		/**
		 * Formats the fragments on the given slide so that they have
		 * valid indices. Call this if fragments are changed in the DOM
		 * after reveal.js has already initialized.
		 *
		 * @param {HTMLElement} slide
		 * @return {Array} a list of the HTML fragments that were synced
		 */
		function syncFragments( slide ) {

			// Default to the current slide
			slide = slide || currentSlide;

			return sortFragments( slide.querySelectorAll( '.fragment' ) );

		}

		/**
		 * Resets all vertical slides so that only the first
		 * is visible.
		 */
		function resetVerticalSlides() {

			var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
			horizontalSlides.forEach( function( horizontalSlide ) {

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
				verticalSlides.forEach( function( verticalSlide, y ) {

					if( y > 0 ) {
						verticalSlide.classList.remove( 'present' );
						verticalSlide.classList.remove( 'past' );
						verticalSlide.classList.add( 'future' );
						verticalSlide.setAttribute( 'aria-hidden', 'true' );
					}

				} );

			} );

		}

		/**
		 * Sorts and formats all of fragments in the
		 * presentation.
		 */
		function sortAllFragments() {

			var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
			horizontalSlides.forEach( function( horizontalSlide ) {

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
				verticalSlides.forEach( function( verticalSlide, y ) {

					sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

				} );

				if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

			} );

		}

		/**
		 * Randomly shuffles all slides in the deck.
		 */
		function shuffle() {

			var slides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			slides.forEach( function( slide ) {

				// Insert this slide next to another random slide. This may
				// cause the slide to insert before itself but that's fine.
				dom.slides.insertBefore( slide, slides[ Math.floor( Math.random() * slides.length ) ] );

			} );

		}

		/**
		 * Updates one dimension of slides by showing the slide
		 * with the specified index.
		 *
		 * @param {string} selector A CSS selector that will fetch
		 * the group of slides we are working with
		 * @param {number} index The index of the slide that should be
		 * shown
		 *
		 * @return {number} The index of the slide that is now shown,
		 * might differ from the passed in index if it was out of
		 * bounds.
		 */
		function updateSlides( selector, index ) {

			// Select all slides and convert the NodeList result to
			// an array
			var slides = toArray( dom.wrapper.querySelectorAll( selector ) ),
				slidesLength = slides.length;

			var printMode = isPrintingPDF();

			if( slidesLength ) {

				// Should the index loop?
				if( config.loop ) {
					index %= slidesLength;

					if( index < 0 ) {
						index = slidesLength + index;
					}
				}

				// Enforce max and minimum index bounds
				index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

				for( var i = 0; i < slidesLength; i++ ) {
					var element = slides[i];

					var reverse = config.rtl && !isVerticalSlide( element );

					element.classList.remove( 'past' );
					element.classList.remove( 'present' );
					element.classList.remove( 'future' );

					// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
					element.setAttribute( 'hidden', '' );
					element.setAttribute( 'aria-hidden', 'true' );

					// If this element contains vertical slides
					if( element.querySelector( 'section' ) ) {
						element.classList.add( 'stack' );
					}

					// If we're printing static slides, all slides are "present"
					if( printMode ) {
						element.classList.add( 'present' );
						continue;
					}

					if( i < index ) {
						// Any element previous to index is given the 'past' class
						element.classList.add( reverse ? 'future' : 'past' );

						if( config.fragments ) {
							// Show all fragments in prior slides
							toArray( element.querySelectorAll( '.fragment' ) ).forEach( function( fragment ) {
								fragment.classList.add( 'visible' );
								fragment.classList.remove( 'current-fragment' );
							} );
						}
					}
					else if( i > index ) {
						// Any element subsequent to index is given the 'future' class
						element.classList.add( reverse ? 'past' : 'future' );

						if( config.fragments ) {
							// Hide all fragments in future slides
							toArray( element.querySelectorAll( '.fragment.visible' ) ).forEach( function( fragment ) {
								fragment.classList.remove( 'visible' );
								fragment.classList.remove( 'current-fragment' );
							} );
						}
					}
				}

				// Mark the current slide as present
				slides[index].classList.add( 'present' );
				slides[index].removeAttribute( 'hidden' );
				slides[index].removeAttribute( 'aria-hidden' );

				// If this slide has a state associated with it, add it
				// onto the current state of the deck
				var slideState = slides[index].getAttribute( 'data-state' );
				if( slideState ) {
					state = state.concat( slideState.split( ' ' ) );
				}

			}
			else {
				// Since there are no slides we can't be anywhere beyond the
				// zeroth index
				index = 0;
			}

			return index;

		}

		/**
		 * Optimization method; hide all slides that are far away
		 * from the present slide.
		 */
		function updateSlidesVisibility() {

			// Select all slides and convert the NodeList result to
			// an array
			var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
				horizontalSlidesLength = horizontalSlides.length,
				distanceX,
				distanceY;

			if( horizontalSlidesLength && typeof indexh !== 'undefined' ) {

				// The number of steps away from the present slide that will
				// be visible
				var viewDistance = isOverview() ? 10 : config.viewDistance;

				// Limit view distance on weaker devices
				if( isMobileDevice ) {
					viewDistance = isOverview() ? 6 : 2;
				}

				// All slides need to be visible when exporting to PDF
				if( isPrintingPDF() ) {
					viewDistance = Number.MAX_VALUE;
				}

				for( var x = 0; x < horizontalSlidesLength; x++ ) {
					var horizontalSlide = horizontalSlides[x];

					var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
						verticalSlidesLength = verticalSlides.length;

					// Determine how far away this slide is from the present
					distanceX = Math.abs( ( indexh || 0 ) - x ) || 0;

					// If the presentation is looped, distance should measure
					// 1 between the first and last slides
					if( config.loop ) {
						distanceX = Math.abs( ( ( indexh || 0 ) - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;
					}

					// Show the horizontal slide if it's within the view distance
					if( distanceX < viewDistance ) {
						loadSlide( horizontalSlide );
					}
					else {
						unloadSlide( horizontalSlide );
					}

					if( verticalSlidesLength ) {

						var oy = getPreviousVerticalIndex( horizontalSlide );

						for( var y = 0; y < verticalSlidesLength; y++ ) {
							var verticalSlide = verticalSlides[y];

							distanceY = x === ( indexh || 0 ) ? Math.abs( ( indexv || 0 ) - y ) : Math.abs( y - oy );

							if( distanceX + distanceY < viewDistance ) {
								loadSlide( verticalSlide );
							}
							else {
								unloadSlide( verticalSlide );
							}
						}

					}
				}

				// Flag if there are ANY vertical slides, anywhere in the deck
				if( dom.wrapper.querySelectorAll( '.slides>section>section' ).length ) {
					dom.wrapper.classList.add( 'has-vertical-slides' );
				}
				else {
					dom.wrapper.classList.remove( 'has-vertical-slides' );
				}

				// Flag if there are ANY horizontal slides, anywhere in the deck
				if( dom.wrapper.querySelectorAll( '.slides>section' ).length > 1 ) {
					dom.wrapper.classList.add( 'has-horizontal-slides' );
				}
				else {
					dom.wrapper.classList.remove( 'has-horizontal-slides' );
				}

			}

		}

		/**
		 * Pick up notes from the current slide and display them
		 * to the viewer.
		 *
		 * @see {@link config.showNotes}
		 */
		function updateNotes() {

			if( config.showNotes && dom.speakerNotes && currentSlide && !isPrintingPDF() ) {

				dom.speakerNotes.innerHTML = getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>';

			}

		}

		/**
		 * Updates the visibility of the speaker notes sidebar that
		 * is used to share annotated slides. The notes sidebar is
		 * only visible if showNotes is true and there are notes on
		 * one or more slides in the deck.
		 */
		function updateNotesVisibility() {

			if( config.showNotes && hasNotes() ) {
				dom.wrapper.classList.add( 'show-notes' );
			}
			else {
				dom.wrapper.classList.remove( 'show-notes' );
			}

		}

		/**
		 * Checks if there are speaker notes for ANY slide in the
		 * presentation.
		 */
		function hasNotes() {

			return dom.slides.querySelectorAll( '[data-notes], aside.notes' ).length > 0;

		}

		/**
		 * Updates the progress bar to reflect the current slide.
		 */
		function updateProgress() {

			// Update progress if enabled
			if( config.progress && dom.progressbar ) {

				dom.progressbar.style.width = getProgress() * dom.wrapper.offsetWidth + 'px';

			}

		}


		/**
		 * Updates the slide number to match the current slide.
		 */
		function updateSlideNumber() {

			// Update slide number if enabled
			if( config.slideNumber && dom.slideNumber ) {

				var value;
				var format = 'h.v';

				if( typeof config.slideNumber === 'function' ) {
					value = config.slideNumber();
				}
				else {
					// Check if a custom number format is available
					if( typeof config.slideNumber === 'string' ) {
						format = config.slideNumber;
					}

					// If there are ONLY vertical slides in this deck, always use
					// a flattened slide number
					if( !/c/.test( format ) && dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ).length === 1 ) {
						format = 'c';
					}

					value = [];
					switch( format ) {
						case 'c':
							value.push( getSlidePastCount() + 1 );
							break;
						case 'c/t':
							value.push( getSlidePastCount() + 1, '/', getTotalSlides() );
							break;
						case 'h/v':
							value.push( indexh + 1 );
							if( isVerticalSlide() ) value.push( '/', indexv + 1 );
							break;
						default:
							value.push( indexh + 1 );
							if( isVerticalSlide() ) value.push( '.', indexv + 1 );
					}
				}

				dom.slideNumber.innerHTML = formatSlideNumber( value[0], value[1], value[2] );
			}

		}

		/**
		 * Applies HTML formatting to a slide number before it's
		 * written to the DOM.
		 *
		 * @param {number} a Current slide
		 * @param {string} delimiter Character to separate slide numbers
		 * @param {(number|*)} b Total slides
		 * @return {string} HTML string fragment
		 */
		function formatSlideNumber( a, delimiter, b ) {

			var url = '#' + locationHash();
			if( typeof b === 'number' && !isNaN( b ) ) {
				return  '<a href="' + url + '">' +
						'<span class="slide-number-a">'+ a +'</span>' +
						'<span class="slide-number-delimiter">'+ delimiter +'</span>' +
						'<span class="slide-number-b">'+ b +'</span>' +
						'</a>';
			}
			else {
				return '<a href="' + url + '">' +
				       '<span class="slide-number-a">'+ a +'</span>' +
				       '</a>';
			}

		}

		/**
		 * Updates the state of all control/navigation arrows.
		 */
		function updateControls() {

			var routes = availableRoutes();
			var fragments = availableFragments();

			// Remove the 'enabled' class from all directions
			dom.controlsLeft.concat( dom.controlsRight )
							.concat( dom.controlsUp )
							.concat( dom.controlsDown )
							.concat( dom.controlsPrev )
							.concat( dom.controlsNext ).forEach( function( node ) {
				node.classList.remove( 'enabled' );
				node.classList.remove( 'fragmented' );

				// Set 'disabled' attribute on all directions
				node.setAttribute( 'disabled', 'disabled' );
			} );

			// Add the 'enabled' class to the available routes; remove 'disabled' attribute to enable buttons
			if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );
			if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );
			if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );
			if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );

			// Prev/next buttons
			if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );
			if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); el.removeAttribute( 'disabled' ); } );

			// Highlight fragment directions
			if( currentSlide ) {

				// Always apply fragment decorator to prev/next buttons
				if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
				if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );

				// Apply fragment decorators to directional buttons based on
				// what slide axis they are in
				if( isVerticalSlide( currentSlide ) ) {
					if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
					if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
				}
				else {
					if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
					if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); el.removeAttribute( 'disabled' ); } );
				}

			}

			if( config.controlsTutorial ) {

				// Highlight control arrows with an animation to ensure
				// that the viewer knows how to navigate
				if( !hasNavigatedDown && routes.down ) {
					dom.controlsDownArrow.classList.add( 'highlight' );
				}
				else {
					dom.controlsDownArrow.classList.remove( 'highlight' );

					if( !hasNavigatedRight && routes.right && indexv === 0 ) {
						dom.controlsRightArrow.classList.add( 'highlight' );
					}
					else {
						dom.controlsRightArrow.classList.remove( 'highlight' );
					}
				}

			}

		}

		/**
		 * Updates the background elements to reflect the current
		 * slide.
		 *
		 * @param {boolean} includeAll If true, the backgrounds of
		 * all vertical slides (not just the present) will be updated.
		 */
		function updateBackground( includeAll ) {

			var currentBackground = null;

			// Reverse past/future classes when in RTL mode
			var horizontalPast = config.rtl ? 'future' : 'past',
				horizontalFuture = config.rtl ? 'past' : 'future';

			// Update the classes of all backgrounds to match the
			// states of their slides (past/present/future)
			toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

				backgroundh.classList.remove( 'past' );
				backgroundh.classList.remove( 'present' );
				backgroundh.classList.remove( 'future' );

				if( h < indexh ) {
					backgroundh.classList.add( horizontalPast );
				}
				else if ( h > indexh ) {
					backgroundh.classList.add( horizontalFuture );
				}
				else {
					backgroundh.classList.add( 'present' );

					// Store a reference to the current background element
					currentBackground = backgroundh;
				}

				if( includeAll || h === indexh ) {
					toArray( backgroundh.querySelectorAll( '.slide-background' ) ).forEach( function( backgroundv, v ) {

						backgroundv.classList.remove( 'past' );
						backgroundv.classList.remove( 'present' );
						backgroundv.classList.remove( 'future' );

						if( v < indexv ) {
							backgroundv.classList.add( 'past' );
						}
						else if ( v > indexv ) {
							backgroundv.classList.add( 'future' );
						}
						else {
							backgroundv.classList.add( 'present' );

							// Only if this is the present horizontal and vertical slide
							if( h === indexh ) currentBackground = backgroundv;
						}

					} );
				}

			} );

			// Stop content inside of previous backgrounds
			if( previousBackground ) {

				stopEmbeddedContent( previousBackground );

			}

			// Start content in the current background
			if( currentBackground ) {

				startEmbeddedContent( currentBackground );

				var currentBackgroundContent = currentBackground.querySelector( '.slide-background-content' );
				if( currentBackgroundContent ) {

					var backgroundImageURL = currentBackgroundContent.style.backgroundImage || '';

					// Restart GIFs (doesn't work in Firefox)
					if( /\.gif/i.test( backgroundImageURL ) ) {
						currentBackgroundContent.style.backgroundImage = '';
						window.getComputedStyle( currentBackgroundContent ).opacity;
						currentBackgroundContent.style.backgroundImage = backgroundImageURL;
					}

				}

				// Don't transition between identical backgrounds. This
				// prevents unwanted flicker.
				var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
				var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
				if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
					dom.background.classList.add( 'no-transition' );
				}

				previousBackground = currentBackground;

			}

			// If there's a background brightness flag for this slide,
			// bubble it to the .reveal container
			if( currentSlide ) {
				[ 'has-light-background', 'has-dark-background' ].forEach( function( classToBubble ) {
					if( currentSlide.classList.contains( classToBubble ) ) {
						dom.wrapper.classList.add( classToBubble );
					}
					else {
						dom.wrapper.classList.remove( classToBubble );
					}
				} );
			}

			// Allow the first background to apply without transition
			setTimeout( function() {
				dom.background.classList.remove( 'no-transition' );
			}, 1 );

		}

		/**
		 * Updates the position of the parallax background based
		 * on the current slide index.
		 */
		function updateParallax() {

			if( config.parallaxBackgroundImage ) {

				var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
					verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

				var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
					backgroundWidth, backgroundHeight;

				if( backgroundSize.length === 1 ) {
					backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
				}
				else {
					backgroundWidth = parseInt( backgroundSize[0], 10 );
					backgroundHeight = parseInt( backgroundSize[1], 10 );
				}

				var slideWidth = dom.background.offsetWidth,
					horizontalSlideCount = horizontalSlides.length,
					horizontalOffsetMultiplier,
					horizontalOffset;

				if( typeof config.parallaxBackgroundHorizontal === 'number' ) {
					horizontalOffsetMultiplier = config.parallaxBackgroundHorizontal;
				}
				else {
					horizontalOffsetMultiplier = horizontalSlideCount > 1 ? ( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) : 0;
				}

				horizontalOffset = horizontalOffsetMultiplier * indexh * -1;

				var slideHeight = dom.background.offsetHeight,
					verticalSlideCount = verticalSlides.length,
					verticalOffsetMultiplier,
					verticalOffset;

				if( typeof config.parallaxBackgroundVertical === 'number' ) {
					verticalOffsetMultiplier = config.parallaxBackgroundVertical;
				}
				else {
					verticalOffsetMultiplier = ( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 );
				}

				verticalOffset = verticalSlideCount > 0 ?  verticalOffsetMultiplier * indexv : 0;

				dom.background.style.backgroundPosition = horizontalOffset + 'px ' + -verticalOffset + 'px';

			}

		}

		/**
		 * Should the given element be preloaded?
		 * Decides based on local element attributes and global config.
		 *
		 * @param {HTMLElement} element
		 */
		function shouldPreload( element ) {

			// Prefer an explicit global preload setting
			var preload = config.preloadIframes;

			// If no global setting is available, fall back on the element's
			// own preload setting
			if( typeof preload !== 'boolean' ) {
				preload = element.hasAttribute( 'data-preload' );
			}

			return preload;
		}

		/**
		 * Called when the given slide is within the configured view
		 * distance. Shows the slide element and loads any content
		 * that is set to load lazily (data-src).
		 *
		 * @param {HTMLElement} slide Slide to show
		 */
		function loadSlide( slide, options ) {

			options = options || {};

			// Show the slide element
			slide.style.display = config.display;

			// Media elements with data-src attributes
			toArray( slide.querySelectorAll( 'img[data-src], video[data-src], audio[data-src], iframe[data-src]' ) ).forEach( function( element ) {
				if( element.tagName !== 'IFRAME' || shouldPreload( element ) ) {
					element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
					element.setAttribute( 'data-lazy-loaded', '' );
					element.removeAttribute( 'data-src' );
				}
			} );

			// Media elements with <source> children
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( media ) {
				var sources = 0;

				toArray( media.querySelectorAll( 'source[data-src]' ) ).forEach( function( source ) {
					source.setAttribute( 'src', source.getAttribute( 'data-src' ) );
					source.removeAttribute( 'data-src' );
					source.setAttribute( 'data-lazy-loaded', '' );
					sources += 1;
				} );

				// If we rewrote sources for this video/audio element, we need
				// to manually tell it to load from its new origin
				if( sources > 0 ) {
					media.load();
				}
			} );


			// Show the corresponding background element
			var background = slide.slideBackgroundElement;
			if( background ) {
				background.style.display = 'block';

				var backgroundContent = slide.slideBackgroundContentElement;

				// If the background contains media, load it
				if( background.hasAttribute( 'data-loaded' ) === false ) {
					background.setAttribute( 'data-loaded', 'true' );

					var backgroundImage = slide.getAttribute( 'data-background-image' ),
						backgroundVideo = slide.getAttribute( 'data-background-video' ),
						backgroundVideoLoop = slide.hasAttribute( 'data-background-video-loop' ),
						backgroundVideoMuted = slide.hasAttribute( 'data-background-video-muted' ),
						backgroundIframe = slide.getAttribute( 'data-background-iframe' );

					// Images
					if( backgroundImage ) {
						backgroundContent.style.backgroundImage = 'url('+ encodeURI( backgroundImage ) +')';
					}
					// Videos
					else if ( backgroundVideo && !isSpeakerNotes() ) {
						var video = document.createElement( 'video' );

						if( backgroundVideoLoop ) {
							video.setAttribute( 'loop', '' );
						}

						if( backgroundVideoMuted ) {
							video.muted = true;
						}

						// Inline video playback works (at least in Mobile Safari) as
						// long as the video is muted and the `playsinline` attribute is
						// present
						if( isMobileDevice ) {
							video.muted = true;
							video.autoplay = true;
							video.setAttribute( 'playsinline', '' );
						}

						// Support comma separated lists of video sources
						backgroundVideo.split( ',' ).forEach( function( source ) {
							video.innerHTML += '<source src="'+ source +'">';
						} );

						backgroundContent.appendChild( video );
					}
					// Iframes
					else if( backgroundIframe && options.excludeIframes !== true ) {
						var iframe = document.createElement( 'iframe' );
						iframe.setAttribute( 'allowfullscreen', '' );
						iframe.setAttribute( 'mozallowfullscreen', '' );
						iframe.setAttribute( 'webkitallowfullscreen', '' );

						// Only load autoplaying content when the slide is shown to
						// avoid having it play in the background
						if( /autoplay=(1|true|yes)/gi.test( backgroundIframe ) ) {
							iframe.setAttribute( 'data-src', backgroundIframe );
						}
						else {
							iframe.setAttribute( 'src', backgroundIframe );
						}

						iframe.style.width  = '100%';
						iframe.style.height = '100%';
						iframe.style.maxHeight = '100%';
						iframe.style.maxWidth = '100%';

						backgroundContent.appendChild( iframe );
					}
				}

			}

		}

		/**
		 * Unloads and hides the given slide. This is called when the
		 * slide is moved outside of the configured view distance.
		 *
		 * @param {HTMLElement} slide
		 */
		function unloadSlide( slide ) {

			// Hide the slide element
			slide.style.display = 'none';

			// Hide the corresponding background element
			var background = getSlideBackground( slide );
			if( background ) {
				background.style.display = 'none';
			}

			// Reset lazy-loaded media elements with src attributes
			toArray( slide.querySelectorAll( 'video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]' ) ).forEach( function( element ) {
				element.setAttribute( 'data-src', element.getAttribute( 'src' ) );
				element.removeAttribute( 'src' );
			} );

			// Reset lazy-loaded media elements with <source> children
			toArray( slide.querySelectorAll( 'video[data-lazy-loaded] source[src], audio source[src]' ) ).forEach( function( source ) {
				source.setAttribute( 'data-src', source.getAttribute( 'src' ) );
				source.removeAttribute( 'src' );
			} );

		}

		/**
		 * Determine what available routes there are for navigation.
		 *
		 * @return {{left: boolean, right: boolean, up: boolean, down: boolean}}
		 */
		function availableRoutes() {

			var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var routes = {
				left: indexh > 0,
				right: indexh < horizontalSlides.length - 1,
				up: indexv > 0,
				down: indexv < verticalSlides.length - 1
			};

			// Looped presentations can always be navigated as long as
			// there are slides available
			if( config.loop ) {
				if( horizontalSlides.length > 1 ) {
					routes.left = true;
					routes.right = true;
				}

				if( verticalSlides.length > 1 ) {
					routes.up = true;
					routes.down = true;
				}
			}

			// Reverse horizontal controls for rtl
			if( config.rtl ) {
				var left = routes.left;
				routes.left = routes.right;
				routes.right = left;
			}

			return routes;

		}

		/**
		 * Returns an object describing the available fragment
		 * directions.
		 *
		 * @return {{prev: boolean, next: boolean}}
		 */
		function availableFragments() {

			if( currentSlide && config.fragments ) {
				var fragments = currentSlide.querySelectorAll( '.fragment' );
				var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

				return {
					prev: fragments.length - hiddenFragments.length > 0,
					next: !!hiddenFragments.length
				};
			}
			else {
				return { prev: false, next: false };
			}

		}

		/**
		 * Enforces origin-specific format rules for embedded media.
		 */
		function formatEmbeddedContent() {

			var _appendParamToIframeSource = function( sourceAttribute, sourceURL, param ) {
				toArray( dom.slides.querySelectorAll( 'iframe['+ sourceAttribute +'*="'+ sourceURL +'"]' ) ).forEach( function( el ) {
					var src = el.getAttribute( sourceAttribute );
					if( src && src.indexOf( param ) === -1 ) {
						el.setAttribute( sourceAttribute, src + ( !/\?/.test( src ) ? '?' : '&' ) + param );
					}
				});
			};

			// YouTube frames must include "?enablejsapi=1"
			_appendParamToIframeSource( 'src', 'youtube.com/embed/', 'enablejsapi=1' );
			_appendParamToIframeSource( 'data-src', 'youtube.com/embed/', 'enablejsapi=1' );

			// Vimeo frames must include "?api=1"
			_appendParamToIframeSource( 'src', 'player.vimeo.com/', 'api=1' );
			_appendParamToIframeSource( 'data-src', 'player.vimeo.com/', 'api=1' );

		}

		/**
		 * Start playback of any embedded content inside of
		 * the given element.
		 *
		 * @param {HTMLElement} element
		 */
		function startEmbeddedContent( element ) {

			if( element && !isSpeakerNotes() ) {

				// Restart GIFs
				toArray( element.querySelectorAll( 'img[src$=".gif"]' ) ).forEach( function( el ) {
					// Setting the same unchanged source like this was confirmed
					// to work in Chrome, FF & Safari
					el.setAttribute( 'src', el.getAttribute( 'src' ) );
				} );

				// HTML5 media elements
				toArray( element.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( closestParent( el, '.fragment' ) && !closestParent( el, '.fragment.visible' ) ) {
						return;
					}

					// Prefer an explicit global autoplay setting
					var autoplay = config.autoPlayMedia;

					// If no global setting is available, fall back on the element's
					// own autoplay setting
					if( typeof autoplay !== 'boolean' ) {
						autoplay = el.hasAttribute( 'data-autoplay' ) || !!closestParent( el, '.slide-background' );
					}

					if( autoplay && typeof el.play === 'function' ) {

						// If the media is ready, start playback
						if( el.readyState > 1 ) {
							startEmbeddedMedia( { target: el } );
						}
						// Mobile devices never fire a loaded event so instead
						// of waiting, we initiate playback
						else if( isMobileDevice ) {
							var promise = el.play();

							// If autoplay does not work, ensure that the controls are visible so
							// that the viewer can start the media on their own
							if( promise && typeof promise.catch === 'function' && el.controls === false ) {
								promise.catch( function() {
									el.controls = true;

									// Once the video does start playing, hide the controls again
									el.addEventListener( 'play', function() {
										el.controls = false;
									} );
								} );
							}
						}
						// If the media isn't loaded, wait before playing
						else {
							el.removeEventListener( 'loadeddata', startEmbeddedMedia ); // remove first to avoid dupes
							el.addEventListener( 'loadeddata', startEmbeddedMedia );
						}

					}
				} );

				// Normal iframes
				toArray( element.querySelectorAll( 'iframe[src]' ) ).forEach( function( el ) {
					if( closestParent( el, '.fragment' ) && !closestParent( el, '.fragment.visible' ) ) {
						return;
					}

					startEmbeddedIframe( { target: el } );
				} );

				// Lazy loading iframes
				toArray( element.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
					if( closestParent( el, '.fragment' ) && !closestParent( el, '.fragment.visible' ) ) {
						return;
					}

					if( el.getAttribute( 'src' ) !== el.getAttribute( 'data-src' ) ) {
						el.removeEventListener( 'load', startEmbeddedIframe ); // remove first to avoid dupes
						el.addEventListener( 'load', startEmbeddedIframe );
						el.setAttribute( 'src', el.getAttribute( 'data-src' ) );
					}
				} );

			}

		}

		/**
		 * Starts playing an embedded video/audio element after
		 * it has finished loading.
		 *
		 * @param {object} event
		 */
		function startEmbeddedMedia( event ) {

			var isAttachedToDOM = !!closestParent( event.target, 'html' ),
				isVisible  		= !!closestParent( event.target, '.present' );

			if( isAttachedToDOM && isVisible ) {
				event.target.currentTime = 0;
				event.target.play();
			}

			event.target.removeEventListener( 'loadeddata', startEmbeddedMedia );

		}

		/**
		 * "Starts" the content of an embedded iframe using the
		 * postMessage API.
		 *
		 * @param {object} event
		 */
		function startEmbeddedIframe( event ) {

			var iframe = event.target;

			if( iframe && iframe.contentWindow ) {

				var isAttachedToDOM = !!closestParent( event.target, 'html' ),
					isVisible  		= !!closestParent( event.target, '.present' );

				if( isAttachedToDOM && isVisible ) {

					// Prefer an explicit global autoplay setting
					var autoplay = config.autoPlayMedia;

					// If no global setting is available, fall back on the element's
					// own autoplay setting
					if( typeof autoplay !== 'boolean' ) {
						autoplay = iframe.hasAttribute( 'data-autoplay' ) || !!closestParent( iframe, '.slide-background' );
					}

					// YouTube postMessage API
					if( /youtube\.com\/embed\//.test( iframe.getAttribute( 'src' ) ) && autoplay ) {
						iframe.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
					}
					// Vimeo postMessage API
					else if( /player\.vimeo\.com\//.test( iframe.getAttribute( 'src' ) ) && autoplay ) {
						iframe.contentWindow.postMessage( '{"method":"play"}', '*' );
					}
					// Generic postMessage API
					else {
						iframe.contentWindow.postMessage( 'slide:start', '*' );
					}

				}

			}

		}

		/**
		 * Stop playback of any embedded content inside of
		 * the targeted slide.
		 *
		 * @param {HTMLElement} element
		 */
		function stopEmbeddedContent( element, options ) {

			options = extend( {
				// Defaults
				unloadIframes: true
			}, options || {} );

			if( element && element.parentNode ) {
				// HTML5 media elements
				toArray( element.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( !el.hasAttribute( 'data-ignore' ) && typeof el.pause === 'function' ) {
						el.setAttribute('data-paused-by-reveal', '');
						el.pause();
					}
				} );

				// Generic postMessage API for non-lazy loaded iframes
				toArray( element.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
					if( el.contentWindow ) el.contentWindow.postMessage( 'slide:stop', '*' );
					el.removeEventListener( 'load', startEmbeddedIframe );
				});

				// YouTube postMessage API
				toArray( element.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
					if( !el.hasAttribute( 'data-ignore' ) && el.contentWindow && typeof el.contentWindow.postMessage === 'function' ) {
						el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
					}
				});

				// Vimeo postMessage API
				toArray( element.querySelectorAll( 'iframe[src*="player.vimeo.com/"]' ) ).forEach( function( el ) {
					if( !el.hasAttribute( 'data-ignore' ) && el.contentWindow && typeof el.contentWindow.postMessage === 'function' ) {
						el.contentWindow.postMessage( '{"method":"pause"}', '*' );
					}
				});

				if( options.unloadIframes === true ) {
					// Unload lazy-loaded iframes
					toArray( element.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
						// Only removing the src doesn't actually unload the frame
						// in all browsers (Firefox) so we set it to blank first
						el.setAttribute( 'src', 'about:blank' );
						el.removeAttribute( 'src' );
					} );
				}
			}

		}

		/**
		 * Returns the number of past slides. This can be used as a global
		 * flattened index for slides.
		 *
		 * @return {number} Past slide count
		 */
		function getSlidePastCount() {

			var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// The number of past slides
			var pastCount = 0;

			// Step through all slides and count the past ones
			mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

				var horizontalSlide = horizontalSlides[i];
				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

				for( var j = 0; j < verticalSlides.length; j++ ) {

					// Stop as soon as we arrive at the present
					if( verticalSlides[j].classList.contains( 'present' ) ) {
						break mainLoop;
					}

					pastCount++;

				}

				// Stop as soon as we arrive at the present
				if( horizontalSlide.classList.contains( 'present' ) ) {
					break;
				}

				// Don't count the wrapping section for vertical slides
				if( horizontalSlide.classList.contains( 'stack' ) === false ) {
					pastCount++;
				}

			}

			return pastCount;

		}

		/**
		 * Returns a value ranging from 0-1 that represents
		 * how far into the presentation we have navigated.
		 *
		 * @return {number}
		 */
		function getProgress() {

			// The number of past and total slides
			var totalCount = getTotalSlides();
			var pastCount = getSlidePastCount();

			if( currentSlide ) {

				var allFragments = currentSlide.querySelectorAll( '.fragment' );

				// If there are fragments in the current slide those should be
				// accounted for in the progress.
				if( allFragments.length > 0 ) {
					var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );

					// This value represents how big a portion of the slide progress
					// that is made up by its fragments (0-1)
					var fragmentWeight = 0.9;

					// Add fragment progress to the past slide count
					pastCount += ( visibleFragments.length / allFragments.length ) * fragmentWeight;
				}

			}

			return Math.min( pastCount / ( totalCount - 1 ), 1 );

		}

		/**
		 * Checks if this presentation is running inside of the
		 * speaker notes window.
		 *
		 * @return {boolean}
		 */
		function isSpeakerNotes() {

			return !!window.location.search.match( /receiver/gi );

		}

		/**
		 * Reads the current URL (hash) and navigates accordingly.
		 */
		function readURL() {

			var hash = window.location.hash;

			// Attempt to parse the hash as either an index or name
			var bits = hash.slice( 2 ).split( '/' ),
				name = hash.replace( /#|\//gi, '' );

			// If the first bit is not fully numeric and there is a name we
			// can assume that this is a named link
			if( !/^[0-9]*$/.test( bits[0] ) && name.length ) {
				var element;

				// Ensure the named link is a valid HTML ID attribute
				try {
					element = document.getElementById( decodeURIComponent( name ) );
				}
				catch ( error ) { }

				// Ensure that we're not already on a slide with the same name
				var isSameNameAsCurrentSlide = currentSlide ? currentSlide.getAttribute( 'id' ) === name : false;

				if( element ) {
					// If the slide exists and is not the current slide...
					if ( !isSameNameAsCurrentSlide ) {
						// ...find the position of the named slide and navigate to it
						var indices = Reveal.getIndices(element);
						slide(indices.h, indices.v);
					}
				}
				// If the slide doesn't exist, navigate to the current slide
				else {
					slide( indexh || 0, indexv || 0 );
				}
			}
			else {
				var hashIndexBase = config.hashOneBasedIndex ? 1 : 0;

				// Read the index components of the hash
				var h = ( parseInt( bits[0], 10 ) - hashIndexBase ) || 0,
					v = ( parseInt( bits[1], 10 ) - hashIndexBase ) || 0,
					f;

				if( config.fragmentInURL ) {
					f = parseInt( bits[2], 10 );
					if( isNaN( f ) ) {
						f = undefined;
					}
				}

				if( h !== indexh || v !== indexv || f !== undefined ) {
					slide( h, v, f );
				}
			}

		}

		/**
		 * Updates the page URL (hash) to reflect the current
		 * state.
		 *
		 * @param {number} delay The time in ms to wait before
		 * writing the hash
		 */
		function writeURL( delay ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else if( currentSlide ) {
				// If we're configured to push to history OR the history
				// API is not avaialble.
				if( config.history || !window.history ) {
					window.location.hash = locationHash();
				}
				// If we're configured to reflect the current slide in the
				// URL without pushing to history.
				else if( config.hash ) {
					window.history.replaceState( null, null, '#' + locationHash() );
				}
				// If history and hash are both disabled, a hash may still
				// be added to the URL by clicking on a href with a hash
				// target. Counter this by always removing the hash.
				else {
					window.history.replaceState( null, null, window.location.pathname + window.location.search );
				}
			}

		}
		/**
		 * Retrieves the h/v location and fragment of the current,
		 * or specified, slide.
		 *
		 * @param {HTMLElement} [slide] If specified, the returned
		 * index will be for this slide rather than the currently
		 * active one
		 *
		 * @return {{h: number, v: number, f: number}}
		 */
		function getIndices( slide ) {

			// By default, return the current indices
			var h = indexh,
				v = indexv,
				f;

			// If a slide is specified, return the indices of that slide
			if( slide ) {
				var isVertical = isVerticalSlide( slide );
				var slideh = isVertical ? slide.parentNode : slide;

				// Select all horizontal slides
				var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

				// Now that we know which the horizontal slide is, get its index
				h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

				// Assume we're not vertical
				v = undefined;

				// If this is a vertical slide, grab the vertical index
				if( isVertical ) {
					v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
				}
			}

			if( !slide && currentSlide ) {
				var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
				if( hasFragments ) {
					var currentFragment = currentSlide.querySelector( '.current-fragment' );
					if( currentFragment && currentFragment.hasAttribute( 'data-fragment-index' ) ) {
						f = parseInt( currentFragment.getAttribute( 'data-fragment-index' ), 10 );
					}
					else {
						f = currentSlide.querySelectorAll( '.fragment.visible' ).length - 1;
					}
				}
			}

			return { h: h, v: v, f: f };

		}

		/**
		 * Retrieves all slides in this presentation.
		 */
		function getSlides() {

			return toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ));

		}

		/**
		 * Returns an array of objects where each object represents the
		 * attributes on its respective slide.
		 */
		function getSlidesAttributes() {

			return getSlides().map( function( slide ) {

				var attributes = {};
				for( var i = 0; i < slide.attributes.length; i++ ) {
					var attribute = slide.attributes[ i ];
					attributes[ attribute.name ] = attribute.value;
				}
				return attributes;

			} );

		}

		/**
		 * Retrieves the total number of slides in this presentation.
		 *
		 * @return {number}
		 */
		function getTotalSlides() {

			return getSlides().length;

		}

		/**
		 * Returns the slide element matching the specified index.
		 *
		 * @return {HTMLElement}
		 */
		function getSlide( x, y ) {

			var horizontalSlide = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
			var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

			if( verticalSlides && verticalSlides.length && typeof y === 'number' ) {
				return verticalSlides ? verticalSlides[ y ] : undefined;
			}

			return horizontalSlide;

		}

		/**
		 * Returns the background element for the given slide.
		 * All slides, even the ones with no background properties
		 * defined, have a background element so as long as the
		 * index is valid an element will be returned.
		 *
		 * @param {mixed} x Horizontal background index OR a slide
		 * HTML element
		 * @param {number} y Vertical background index
		 * @return {(HTMLElement[]|*)}
		 */
		function getSlideBackground( x, y ) {

			var slide = typeof x === 'number' ? getSlide( x, y ) : x;
			if( slide ) {
				return slide.slideBackgroundElement;
			}

			return undefined;

		}

		/**
		 * Retrieves the speaker notes from a slide. Notes can be
		 * defined in two ways:
		 * 1. As a data-notes attribute on the slide <section>
		 * 2. As an <aside class="notes"> inside of the slide
		 *
		 * @param {HTMLElement} [slide=currentSlide]
		 * @return {(string|null)}
		 */
		function getSlideNotes( slide ) {

			// Default to the current slide
			slide = slide || currentSlide;

			// Notes can be specified via the data-notes attribute...
			if( slide.hasAttribute( 'data-notes' ) ) {
				return slide.getAttribute( 'data-notes' );
			}

			// ... or using an <aside class="notes"> element
			var notesElement = slide.querySelector( 'aside.notes' );
			if( notesElement ) {
				return notesElement.innerHTML;
			}

			return null;

		}

		/**
		 * Retrieves the current state of the presentation as
		 * an object. This state can then be restored at any
		 * time.
		 *
		 * @return {{indexh: number, indexv: number, indexf: number, paused: boolean, overview: boolean}}
		 */
		function getState() {

			var indices = getIndices();

			return {
				indexh: indices.h,
				indexv: indices.v,
				indexf: indices.f,
				paused: isPaused(),
				overview: isOverview()
			};

		}

		/**
		 * Restores the presentation to the given state.
		 *
		 * @param {object} state As generated by getState()
		 * @see {@link getState} generates the parameter `state`
		 */
		function setState( state ) {

			if( typeof state === 'object' ) {
				slide( deserialize( state.indexh ), deserialize( state.indexv ), deserialize( state.indexf ) );

				var pausedFlag = deserialize( state.paused ),
					overviewFlag = deserialize( state.overview );

				if( typeof pausedFlag === 'boolean' && pausedFlag !== isPaused() ) {
					togglePause( pausedFlag );
				}

				if( typeof overviewFlag === 'boolean' && overviewFlag !== isOverview() ) {
					toggleOverview( overviewFlag );
				}
			}

		}

		/**
		 * Return a sorted fragments list, ordered by an increasing
		 * "data-fragment-index" attribute.
		 *
		 * Fragments will be revealed in the order that they are returned by
		 * this function, so you can use the index attributes to control the
		 * order of fragment appearance.
		 *
		 * To maintain a sensible default fragment order, fragments are presumed
		 * to be passed in document order. This function adds a "fragment-index"
		 * attribute to each node if such an attribute is not already present,
		 * and sets that attribute to an integer value which is the position of
		 * the fragment within the fragments list.
		 *
		 * @param {object[]|*} fragments
		 * @param {boolean} grouped If true the returned array will contain
		 * nested arrays for all fragments with the same index
		 * @return {object[]} sorted Sorted array of fragments
		 */
		function sortFragments( fragments, grouped ) {

			fragments = toArray( fragments );

			var ordered = [],
				unordered = [],
				sorted = [];

			// Group ordered and unordered elements
			fragments.forEach( function( fragment, i ) {
				if( fragment.hasAttribute( 'data-fragment-index' ) ) {
					var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

					if( !ordered[index] ) {
						ordered[index] = [];
					}

					ordered[index].push( fragment );
				}
				else {
					unordered.push( [ fragment ] );
				}
			} );

			// Append fragments without explicit indices in their
			// DOM order
			ordered = ordered.concat( unordered );

			// Manually count the index up per group to ensure there
			// are no gaps
			var index = 0;

			// Push all fragments in their sorted order to an array,
			// this flattens the groups
			ordered.forEach( function( group ) {
				group.forEach( function( fragment ) {
					sorted.push( fragment );
					fragment.setAttribute( 'data-fragment-index', index );
				} );

				index ++;
			} );

			return grouped === true ? ordered : sorted;

		}

		/**
		 * Refreshes the fragments on the current slide so that they
		 * have the appropriate classes (.visible + .current-fragment).
		 *
		 * @param {number} [index] The index of the current fragment
		 * @param {array} [fragments] Array containing all fragments
		 * in the current slide
		 *
		 * @return {{shown: array, hidden: array}}
		 */
		function updateFragments( index, fragments ) {

			var changedFragments = {
				shown: [],
				hidden: []
			};

			if( currentSlide && config.fragments ) {

				fragments = fragments || sortFragments( currentSlide.querySelectorAll( '.fragment' ) );

				if( fragments.length ) {

					if( typeof index !== 'number' ) {
						var currentFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();
						if( currentFragment ) {
							index = parseInt( currentFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
						}
					}

					toArray( fragments ).forEach( function( el, i ) {

						if( el.hasAttribute( 'data-fragment-index' ) ) {
							i = parseInt( el.getAttribute( 'data-fragment-index' ), 10 );
						}

						// Visible fragments
						if( i <= index ) {
							if( !el.classList.contains( 'visible' ) ) changedFragments.shown.push( el );
							el.classList.add( 'visible' );
							el.classList.remove( 'current-fragment' );

							// Announce the fragments one by one to the Screen Reader
							dom.statusDiv.textContent = getStatusText( el );

							if( i === index ) {
								el.classList.add( 'current-fragment' );
								startEmbeddedContent( el );
							}
						}
						// Hidden fragments
						else {
							if( el.classList.contains( 'visible' ) ) changedFragments.hidden.push( el );
							el.classList.remove( 'visible' );
							el.classList.remove( 'current-fragment' );
						}

					} );

				}

			}

			return changedFragments;

		}

		/**
		 * Navigate to the specified slide fragment.
		 *
		 * @param {?number} index The index of the fragment that
		 * should be shown, -1 means all are invisible
		 * @param {number} offset Integer offset to apply to the
		 * fragment index
		 *
		 * @return {boolean} true if a change was made in any
		 * fragments visibility as part of this call
		 */
		function navigateFragment( index, offset ) {

			if( currentSlide && config.fragments ) {

				var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
				if( fragments.length ) {

					// If no index is specified, find the current
					if( typeof index !== 'number' ) {
						var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

						if( lastVisibleFragment ) {
							index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
						}
						else {
							index = -1;
						}
					}

					// If an offset is specified, apply it to the index
					if( typeof offset === 'number' ) {
						index += offset;
					}

					var changedFragments = updateFragments( index, fragments );

					if( changedFragments.hidden.length ) {
						dispatchEvent( 'fragmenthidden', { fragment: changedFragments.hidden[0], fragments: changedFragments.hidden } );
					}

					if( changedFragments.shown.length ) {
						dispatchEvent( 'fragmentshown', { fragment: changedFragments.shown[0], fragments: changedFragments.shown } );
					}

					updateControls();
					updateProgress();

					if( config.fragmentInURL ) {
						writeURL();
					}

					return !!( changedFragments.shown.length || changedFragments.hidden.length );

				}

			}

			return false;

		}

		/**
		 * Navigate to the next slide fragment.
		 *
		 * @return {boolean} true if there was a next fragment,
		 * false otherwise
		 */
		function nextFragment() {

			return navigateFragment( null, 1 );

		}

		/**
		 * Navigate to the previous slide fragment.
		 *
		 * @return {boolean} true if there was a previous fragment,
		 * false otherwise
		 */
		function previousFragment() {

			return navigateFragment( null, -1 );

		}

		/**
		 * Cues a new automated slide if enabled in the config.
		 */
		function cueAutoSlide() {

			cancelAutoSlide();

			if( currentSlide && config.autoSlide !== false ) {

				var fragment = currentSlide.querySelector( '.current-fragment' );

				// When the slide first appears there is no "current" fragment so
				// we look for a data-autoslide timing on the first fragment
				if( !fragment ) fragment = currentSlide.querySelector( '.fragment' );

				var fragmentAutoSlide = fragment ? fragment.getAttribute( 'data-autoslide' ) : null;
				var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
				var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

				// Pick value in the following priority order:
				// 1. Current fragment's data-autoslide
				// 2. Current slide's data-autoslide
				// 3. Parent slide's data-autoslide
				// 4. Global autoSlide setting
				if( fragmentAutoSlide ) {
					autoSlide = parseInt( fragmentAutoSlide, 10 );
				}
				else if( slideAutoSlide ) {
					autoSlide = parseInt( slideAutoSlide, 10 );
				}
				else if( parentAutoSlide ) {
					autoSlide = parseInt( parentAutoSlide, 10 );
				}
				else {
					autoSlide = config.autoSlide;
				}

				// If there are media elements with data-autoplay,
				// automatically set the autoSlide duration to the
				// length of that media. Not applicable if the slide
				// is divided up into fragments.
				// playbackRate is accounted for in the duration.
				if( currentSlide.querySelectorAll( '.fragment' ).length === 0 ) {
					toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
						if( el.hasAttribute( 'data-autoplay' ) ) {
							if( autoSlide && (el.duration * 1000 / el.playbackRate ) > autoSlide ) {
								autoSlide = ( el.duration * 1000 / el.playbackRate ) + 1000;
							}
						}
					} );
				}

				// Cue the next auto-slide if:
				// - There is an autoSlide value
				// - Auto-sliding isn't paused by the user
				// - The presentation isn't paused
				// - The overview isn't active
				// - The presentation isn't over
				if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || availableFragments().next || config.loop === true ) ) {
					autoSlideTimeout = setTimeout( function() {
						typeof config.autoSlideMethod === 'function' ? config.autoSlideMethod() : navigateNext();
						cueAutoSlide();
					}, autoSlide );
					autoSlideStartTime = Date.now();
				}

				if( autoSlidePlayer ) {
					autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
				}

			}

		}

		/**
		 * Cancels any ongoing request to auto-slide.
		 */
		function cancelAutoSlide() {

			clearTimeout( autoSlideTimeout );
			autoSlideTimeout = -1;

		}

		function pauseAutoSlide() {

			if( autoSlide && !autoSlidePaused ) {
				autoSlidePaused = true;
				dispatchEvent( 'autoslidepaused' );
				clearTimeout( autoSlideTimeout );

				if( autoSlidePlayer ) {
					autoSlidePlayer.setPlaying( false );
				}
			}

		}

		function resumeAutoSlide() {

			if( autoSlide && autoSlidePaused ) {
				autoSlidePaused = false;
				dispatchEvent( 'autoslideresumed' );
				cueAutoSlide();
			}

		}

		function navigateLeft() {

			// Reverse for RTL
			if( config.rtl ) {
				if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
					slide( indexh + 1, config.navigationMode === 'grid' ? indexv : undefined );
				}
			}
			// Normal navigation
			else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
				slide( indexh - 1, config.navigationMode === 'grid' ? indexv : undefined );
			}

		}

		function navigateRight() {

			hasNavigatedRight = true;

			// Reverse for RTL
			if( config.rtl ) {
				if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
					slide( indexh - 1, config.navigationMode === 'grid' ? indexv : undefined );
				}
			}
			// Normal navigation
			else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
				slide( indexh + 1, config.navigationMode === 'grid' ? indexv : undefined );
			}

		}

		function navigateUp() {

			// Prioritize hiding fragments
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
				slide( indexh, indexv - 1 );
			}

		}

		function navigateDown() {

			hasNavigatedDown = true;

			// Prioritize revealing fragments
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
				slide( indexh, indexv + 1 );
			}

		}

		/**
		 * Navigates backwards, prioritized in the following order:
		 * 1) Previous fragment
		 * 2) Previous vertical slide
		 * 3) Previous horizontal slide
		 */
		function navigatePrev() {

			// Prioritize revealing fragments
			if( previousFragment() === false ) {
				if( availableRoutes().up ) {
					navigateUp();
				}
				else {
					// Fetch the previous horizontal slide, if there is one
					var previousSlide;

					if( config.rtl ) {
						previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.future' ) ).pop();
					}
					else {
						previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.past' ) ).pop();
					}

					if( previousSlide ) {
						var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
						var h = indexh - 1;
						slide( h, v );
					}
				}
			}

		}

		/**
		 * The reverse of #navigatePrev().
		 */
		function navigateNext() {

			hasNavigatedRight = true;
			hasNavigatedDown = true;

			// Prioritize revealing fragments
			if( nextFragment() === false ) {

				var routes = availableRoutes();

				// When looping is enabled `routes.down` is always available
				// so we need a separate check for when we've reached the
				// end of a stack and should move horizontally
				if( routes.down && routes.right && config.loop && Reveal.isLastVerticalSlide( currentSlide ) ) {
					routes.down = false;
				}

				if( routes.down ) {
					navigateDown();
				}
				else if( config.rtl ) {
					navigateLeft();
				}
				else {
					navigateRight();
				}
			}

		}

		/**
		 * Checks if the target element prevents the triggering of
		 * swipe navigation.
		 */
		function isSwipePrevented( target ) {

			while( target && typeof target.hasAttribute === 'function' ) {
				if( target.hasAttribute( 'data-prevent-swipe' ) ) return true;
				target = target.parentNode;
			}

			return false;

		}


		// --------------------------------------------------------------------//
		// ----------------------------- EVENTS -------------------------------//
		// --------------------------------------------------------------------//

		/**
		 * Called by all event handlers that are based on user
		 * input.
		 *
		 * @param {object} [event]
		 */
		function onUserInput( event ) {

			if( config.autoSlideStoppable ) {
				pauseAutoSlide();
			}

		}

		/**
		 * Called whenever there is mouse input at the document level
		 * to determine if the cursor is active or not.
		 *
		 * @param {object} event
		 */
		function onDocumentCursorActive( event ) {

			showCursor();

			clearTimeout( cursorInactiveTimeout );

			cursorInactiveTimeout = setTimeout( hideCursor, config.hideCursorTime );

		}

		/**
		 * Handler for the document level 'keypress' event.
		 *
		 * @param {object} event
		 */
		function onDocumentKeyPress( event ) {

			// Check if the pressed key is question mark
			if( event.shiftKey && event.charCode === 63 ) {
				toggleHelp();
			}

		}

		/**
		 * Handler for the document level 'keydown' event.
		 *
		 * @param {object} event
		 */
		function onDocumentKeyDown( event ) {

			// If there's a condition specified and it returns false,
			// ignore this event
			if( typeof config.keyboardCondition === 'function' && config.keyboardCondition(event) === false ) {
				return true;
			}

			// Shorthand
			var keyCode = event.keyCode;

			// Remember if auto-sliding was paused so we can toggle it
			var autoSlideWasPaused = autoSlidePaused;

			onUserInput( event );

			// Is there a focused element that could be using the keyboard?
			var activeElementIsCE = document.activeElement && document.activeElement.contentEditable !== 'inherit';
			var activeElementIsInput = document.activeElement && document.activeElement.tagName && /input|textarea/i.test( document.activeElement.tagName );
			var activeElementIsNotes = document.activeElement && document.activeElement.className && /speaker-notes/i.test( document.activeElement.className);

			// Whitelist specific modified + keycode combinations
			var prevSlideShortcut = event.shiftKey && event.keyCode === 32;
			var firstSlideShortcut = ( event.metaKey || event.ctrlKey ) && keyCode === 37;
			var lastSlideShortcut = ( event.metaKey || event.ctrlKey ) && keyCode === 39;

			// Prevent all other events when a modifier is pressed
			var unusedModifier = 	!prevSlideShortcut && !firstSlideShortcut && !lastSlideShortcut &&
									( event.shiftKey || event.altKey || event.ctrlKey || event.metaKey );

			// Disregard the event if there's a focused element or a
			// keyboard modifier key is present
			if( activeElementIsCE || activeElementIsInput || activeElementIsNotes || unusedModifier ) return;

			// While paused only allow resume keyboard events; 'b', 'v', '.'
			var resumeKeyCodes = [66,86,190,191];
			var key;

			// Custom key bindings for togglePause should be able to resume
			if( typeof config.keyboard === 'object' ) {
				for( key in config.keyboard ) {
					if( config.keyboard[key] === 'togglePause' ) {
						resumeKeyCodes.push( parseInt( key, 10 ) );
					}
				}
			}

			if( isPaused() && resumeKeyCodes.indexOf( keyCode ) === -1 ) {
				return false;
			}

			var triggered = false;

			// 1. User defined key bindings
			if( typeof config.keyboard === 'object' ) {

				for( key in config.keyboard ) {

					// Check if this binding matches the pressed key
					if( parseInt( key, 10 ) === keyCode ) {

						var value = config.keyboard[ key ];

						// Callback function
						if( typeof value === 'function' ) {
							value.apply( null, [ event ] );
						}
						// String shortcuts to reveal.js API
						else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
							Reveal[ value ].call();
						}

						triggered = true;

					}

				}

			}

			// 2. Registered custom key bindings
			if( triggered === false ) {

				for( key in registeredKeyBindings ) {

					// Check if this binding matches the pressed key
					if( parseInt( key, 10 ) === keyCode ) {

						var action = registeredKeyBindings[ key ].callback;

						// Callback function
						if( typeof action === 'function' ) {
							action.apply( null, [ event ] );
						}
						// String shortcuts to reveal.js API
						else if( typeof action === 'string' && typeof Reveal[ action ] === 'function' ) {
							Reveal[ action ].call();
						}

						triggered = true;
					}
				}
			}

			// 3. System defined key bindings
			if( triggered === false ) {

				// Assume true and try to prove false
				triggered = true;

				// P, PAGE UP
				if( keyCode === 80 || keyCode === 33 ) {
					navigatePrev();
				}
				// N, PAGE DOWN
				else if( keyCode === 78 || keyCode === 34 ) {
					navigateNext();
				}
				// H, LEFT
				else if( keyCode === 72 || keyCode === 37 ) {
					if( firstSlideShortcut ) {
						slide( 0 );
					}
					else if( !isOverview() && config.navigationMode === 'linear' ) {
						navigatePrev();
					}
					else {
						navigateLeft();
					}
				}
				// L, RIGHT
				else if( keyCode === 76 || keyCode === 39 ) {
					if( lastSlideShortcut ) {
						slide( Number.MAX_VALUE );
					}
					else if( !isOverview() && config.navigationMode === 'linear' ) {
						navigateNext();
					}
					else {
						navigateRight();
					}
				}
				// K, UP
				else if( keyCode === 75 || keyCode === 38 ) {
					if( !isOverview() && config.navigationMode === 'linear' ) {
						navigatePrev();
					}
					else {
						navigateUp();
					}
				}
				// J, DOWN
				else if( keyCode === 74 || keyCode === 40 ) {
					if( !isOverview() && config.navigationMode === 'linear' ) {
						navigateNext();
					}
					else {
						navigateDown();
					}
				}
				// HOME
				else if( keyCode === 36 ) {
					slide( 0 );
				}
				// END
				else if( keyCode === 35 ) {
					slide( Number.MAX_VALUE );
				}
				// SPACE
				else if( keyCode === 32 ) {
					if( isOverview() ) {
						deactivateOverview();
					}
					if( event.shiftKey ) {
						navigatePrev();
					}
					else {
						navigateNext();
					}
				}
				// TWO-SPOT, SEMICOLON, B, V, PERIOD, LOGITECH PRESENTER TOOLS "BLACK SCREEN" BUTTON
				else if( keyCode === 58 || keyCode === 59 || keyCode === 66 || keyCode === 86 || keyCode === 190 || keyCode === 191 ) {
					togglePause();
				}
				// F
				else if( keyCode === 70 ) {
					enterFullscreen();
				}
				// A
				else if( keyCode === 65 ) {
					if ( config.autoSlideStoppable ) {
						toggleAutoSlide( autoSlideWasPaused );
					}
				}
				else {
					triggered = false;
				}

			}

			// If the input resulted in a triggered action we should prevent
			// the browsers default behavior
			if( triggered ) {
				event.preventDefault && event.preventDefault();
			}
			// ESC or O key
			else if ( ( keyCode === 27 || keyCode === 79 ) && features.transforms3d ) {
				if( dom.overlay ) {
					closeOverlay();
				}
				else {
					toggleOverview();
				}

				event.preventDefault && event.preventDefault();
			}

			// If auto-sliding is enabled we need to cue up
			// another timeout
			cueAutoSlide();

		}

		/**
		 * Handler for the 'touchstart' event, enables support for
		 * swipe and pinch gestures.
		 *
		 * @param {object} event
		 */
		function onTouchStart( event ) {

			if( isSwipePrevented( event.target ) ) return true;

			touch.startX = event.touches[0].clientX;
			touch.startY = event.touches[0].clientY;
			touch.startCount = event.touches.length;

		}

		/**
		 * Handler for the 'touchmove' event.
		 *
		 * @param {object} event
		 */
		function onTouchMove( event ) {

			if( isSwipePrevented( event.target ) ) return true;

			// Each touch should only trigger one action
			if( !touch.captured ) {
				onUserInput( event );

				var currentX = event.touches[0].clientX;
				var currentY = event.touches[0].clientY;

				// There was only one touch point, look for a swipe
				if( event.touches.length === 1 && touch.startCount !== 2 ) {

					var deltaX = currentX - touch.startX,
						deltaY = currentY - touch.startY;

					if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
						touch.captured = true;
						navigateLeft();
					}
					else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
						touch.captured = true;
						navigateRight();
					}
					else if( deltaY > touch.threshold ) {
						touch.captured = true;
						navigateUp();
					}
					else if( deltaY < -touch.threshold ) {
						touch.captured = true;
						navigateDown();
					}

					// If we're embedded, only block touch events if they have
					// triggered an action
					if( config.embedded ) {
						if( touch.captured || isVerticalSlide( currentSlide ) ) {
							event.preventDefault();
						}
					}
					// Not embedded? Block them all to avoid needless tossing
					// around of the viewport in iOS
					else {
						event.preventDefault();
					}

				}
			}
			// There's a bug with swiping on some Android devices unless
			// the default action is always prevented
			else if( UA.match( /android/gi ) ) {
				event.preventDefault();
			}

		}

		/**
		 * Handler for the 'touchend' event.
		 *
		 * @param {object} event
		 */
		function onTouchEnd( event ) {

			touch.captured = false;

		}

		/**
		 * Convert pointer down to touch start.
		 *
		 * @param {object} event
		 */
		function onPointerDown( event ) {

			if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" ) {
				event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
				onTouchStart( event );
			}

		}

		/**
		 * Convert pointer move to touch move.
		 *
		 * @param {object} event
		 */
		function onPointerMove( event ) {

			if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
				event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
				onTouchMove( event );
			}

		}

		/**
		 * Convert pointer up to touch end.
		 *
		 * @param {object} event
		 */
		function onPointerUp( event ) {

			if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
				event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
				onTouchEnd( event );
			}

		}

		/**
		 * Handles mouse wheel scrolling, throttled to avoid skipping
		 * multiple slides.
		 *
		 * @param {object} event
		 */
		function onDocumentMouseScroll( event ) {

			if( Date.now() - lastMouseWheelStep > 600 ) {

				lastMouseWheelStep = Date.now();

				var delta = event.detail || -event.wheelDelta;
				if( delta > 0 ) {
					navigateNext();
				}
				else if( delta < 0 ) {
					navigatePrev();
				}

			}

		}

		/**
		 * Clicking on the progress bar results in a navigation to the
		 * closest approximate horizontal slide using this equation:
		 *
		 * ( clickX / presentationWidth ) * numberOfSlides
		 *
		 * @param {object} event
		 */
		function onProgressClicked( event ) {

			onUserInput( event );

			event.preventDefault();

			var slidesTotal = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
			var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

			if( config.rtl ) {
				slideIndex = slidesTotal - slideIndex;
			}

			slide( slideIndex );

		}

		/**
		 * Event handler for navigation control buttons.
		 */
		function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); config.navigationMode === 'linear' ? navigatePrev() : navigateLeft(); }
		function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); config.navigationMode === 'linear' ? navigateNext() : navigateRight(); }
		function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
		function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
		function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
		function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

		/**
		 * Handler for the window level 'hashchange' event.
		 *
		 * @param {object} [event]
		 */
		function onWindowHashChange( event ) {

			readURL();

		}

		/**
		 * Handler for the window level 'resize' event.
		 *
		 * @param {object} [event]
		 */
		function onWindowResize( event ) {

			layout();

		}

		/**
		 * Handle for the window level 'visibilitychange' event.
		 *
		 * @param {object} [event]
		 */
		function onPageVisibilityChange( event ) {

			var isHidden =  document.webkitHidden ||
							document.msHidden ||
							document.hidden;

			// If, after clicking a link or similar and we're coming back,
			// focus the document.body to ensure we can use keyboard shortcuts
			if( isHidden === false && document.activeElement !== document.body ) {
				// Not all elements support .blur() - SVGs among them.
				if( typeof document.activeElement.blur === 'function' ) {
					document.activeElement.blur();
				}
				document.body.focus();
			}

		}

		/**
		 * Invoked when a slide is and we're in the overview.
		 *
		 * @param {object} event
		 */
		function onOverviewSlideClicked( event ) {

			// TODO There's a bug here where the event listeners are not
			// removed after deactivating the overview.
			if( eventsAreBound && isOverview() ) {
				event.preventDefault();

				var element = event.target;

				while( element && !element.nodeName.match( /section/gi ) ) {
					element = element.parentNode;
				}

				if( element && !element.classList.contains( 'disabled' ) ) {

					deactivateOverview();

					if( element.nodeName.match( /section/gi ) ) {
						var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
							v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

						slide( h, v );
					}

				}
			}

		}

		/**
		 * Handles clicks on links that are set to preview in the
		 * iframe overlay.
		 *
		 * @param {object} event
		 */
		function onPreviewLinkClicked( event ) {

			if( event.currentTarget && event.currentTarget.hasAttribute( 'href' ) ) {
				var url = event.currentTarget.getAttribute( 'href' );
				if( url ) {
					showPreview( url );
					event.preventDefault();
				}
			}

		}

		/**
		 * Handles click on the auto-sliding controls element.
		 *
		 * @param {object} [event]
		 */
		function onAutoSlidePlayerClick( event ) {

			// Replay
			if( Reveal.isLastSlide() && config.loop === false ) {
				slide( 0, 0 );
				resumeAutoSlide();
			}
			// Resume
			else if( autoSlidePaused ) {
				resumeAutoSlide();
			}
			// Pause
			else {
				pauseAutoSlide();
			}

		}


		// --------------------------------------------------------------------//
		// ------------------------ PLAYBACK COMPONENT ------------------------//
		// --------------------------------------------------------------------//


		/**
		 * Constructor for the playback component, which displays
		 * play/pause/progress controls.
		 *
		 * @param {HTMLElement} container The component will append
		 * itself to this
		 * @param {function} progressCheck A method which will be
		 * called frequently to get the current progress on a range
		 * of 0-1
		 */
		function Playback( container, progressCheck ) {

			// Cosmetics
			this.diameter = 100;
			this.diameter2 = this.diameter/2;
			this.thickness = 6;

			// Flags if we are currently playing
			this.playing = false;

			// Current progress on a 0-1 range
			this.progress = 0;

			// Used to loop the animation smoothly
			this.progressOffset = 1;

			this.container = container;
			this.progressCheck = progressCheck;

			this.canvas = document.createElement( 'canvas' );
			this.canvas.className = 'playback';
			this.canvas.width = this.diameter;
			this.canvas.height = this.diameter;
			this.canvas.style.width = this.diameter2 + 'px';
			this.canvas.style.height = this.diameter2 + 'px';
			this.context = this.canvas.getContext( '2d' );

			this.container.appendChild( this.canvas );

			this.render();

		}

		/**
		 * @param value
		 */
		Playback.prototype.setPlaying = function( value ) {

			var wasPlaying = this.playing;

			this.playing = value;

			// Start repainting if we weren't already
			if( !wasPlaying && this.playing ) {
				this.animate();
			}
			else {
				this.render();
			}

		};

		Playback.prototype.animate = function() {

			var progressBefore = this.progress;

			this.progress = this.progressCheck();

			// When we loop, offset the progress so that it eases
			// smoothly rather than immediately resetting
			if( progressBefore > 0.8 && this.progress < 0.2 ) {
				this.progressOffset = this.progress;
			}

			this.render();

			if( this.playing ) {
				features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
			}

		};

		/**
		 * Renders the current progress and playback state.
		 */
		Playback.prototype.render = function() {

			var progress = this.playing ? this.progress : 0,
				radius = ( this.diameter2 ) - this.thickness,
				x = this.diameter2,
				y = this.diameter2,
				iconSize = 28;

			// Ease towards 1
			this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

			var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
			var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

			this.context.save();
			this.context.clearRect( 0, 0, this.diameter, this.diameter );

			// Solid background color
			this.context.beginPath();
			this.context.arc( x, y, radius + 4, 0, Math.PI * 2, false );
			this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
			this.context.fill();

			// Draw progress track
			this.context.beginPath();
			this.context.arc( x, y, radius, 0, Math.PI * 2, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = 'rgba( 255, 255, 255, 0.2 )';
			this.context.stroke();

			if( this.playing ) {
				// Draw progress on top of track
				this.context.beginPath();
				this.context.arc( x, y, radius, startAngle, endAngle, false );
				this.context.lineWidth = this.thickness;
				this.context.strokeStyle = '#fff';
				this.context.stroke();
			}

			this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

			// Draw play/pause icons
			if( this.playing ) {
				this.context.fillStyle = '#fff';
				this.context.fillRect( 0, 0, iconSize / 2 - 4, iconSize );
				this.context.fillRect( iconSize / 2 + 4, 0, iconSize / 2 - 4, iconSize );
			}
			else {
				this.context.beginPath();
				this.context.translate( 4, 0 );
				this.context.moveTo( 0, 0 );
				this.context.lineTo( iconSize - 4, iconSize / 2 );
				this.context.lineTo( 0, iconSize );
				this.context.fillStyle = '#fff';
				this.context.fill();
			}

			this.context.restore();

		};

		Playback.prototype.on = function( type, listener ) {
			this.canvas.addEventListener( type, listener, false );
		};

		Playback.prototype.off = function( type, listener ) {
			this.canvas.removeEventListener( type, listener, false );
		};

		Playback.prototype.destroy = function() {

			this.playing = false;

			if( this.canvas.parentNode ) {
				this.container.removeChild( this.canvas );
			}

		};


		// --------------------------------------------------------------------//
		// ------------------------------- API --------------------------------//
		// --------------------------------------------------------------------//


		Reveal = {
			VERSION: VERSION,

			initialize: initialize,
			configure: configure,

			sync: sync,
			syncSlide: syncSlide,
			syncFragments: syncFragments,

			// Navigation methods
			slide: slide,
			left: navigateLeft,
			right: navigateRight,
			up: navigateUp,
			down: navigateDown,
			prev: navigatePrev,
			next: navigateNext,

			// Fragment methods
			navigateFragment: navigateFragment,
			prevFragment: previousFragment,
			nextFragment: nextFragment,

			// Deprecated aliases
			navigateTo: slide,
			navigateLeft: navigateLeft,
			navigateRight: navigateRight,
			navigateUp: navigateUp,
			navigateDown: navigateDown,
			navigatePrev: navigatePrev,
			navigateNext: navigateNext,

			// Forces an update in slide layout
			layout: layout,

			// Randomizes the order of slides
			shuffle: shuffle,

			// Returns an object with the available routes as booleans (left/right/top/bottom)
			availableRoutes: availableRoutes,

			// Returns an object with the available fragments as booleans (prev/next)
			availableFragments: availableFragments,

			// Toggles a help overlay with keyboard shortcuts
			toggleHelp: toggleHelp,

			// Toggles the overview mode on/off
			toggleOverview: toggleOverview,

			// Toggles the "black screen" mode on/off
			togglePause: togglePause,

			// Toggles the auto slide mode on/off
			toggleAutoSlide: toggleAutoSlide,

			// State checks
			isOverview: isOverview,
			isPaused: isPaused,
			isAutoSliding: isAutoSliding,
			isSpeakerNotes: isSpeakerNotes,

			// Slide preloading
			loadSlide: loadSlide,
			unloadSlide: unloadSlide,

			// Adds or removes all internal event listeners (such as keyboard)
			addEventListeners: addEventListeners,
			removeEventListeners: removeEventListeners,

			// Facility for persisting and restoring the presentation state
			getState: getState,
			setState: setState,

			// Presentation progress
			getSlidePastCount: getSlidePastCount,

			// Presentation progress on range of 0-1
			getProgress: getProgress,

			// Returns the indices of the current, or specified, slide
			getIndices: getIndices,

			// Returns an Array of all slides
			getSlides: getSlides,

			// Returns an Array of objects representing the attributes on
			// the slides
			getSlidesAttributes: getSlidesAttributes,

			// Returns the total number of slides
			getTotalSlides: getTotalSlides,

			// Returns the slide element at the specified index
			getSlide: getSlide,

			// Returns the slide background element at the specified index
			getSlideBackground: getSlideBackground,

			// Returns the speaker notes string for a slide, or null
			getSlideNotes: getSlideNotes,

			// Returns the previous slide element, may be null
			getPreviousSlide: function() {
				return previousSlide;
			},

			// Returns the current slide element
			getCurrentSlide: function() {
				return currentSlide;
			},

			// Returns the current scale of the presentation content
			getScale: function() {
				return scale;
			},

			// Returns the current configuration object
			getConfig: function() {
				return config;
			},

			// Helper method, retrieves query string as a key/value hash
			getQueryHash: function() {
				var query = {};

				location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
					query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
				} );

				// Basic deserialization
				for( var i in query ) {
					var value = query[ i ];

					query[ i ] = deserialize( unescape( value ) );
				}

				return query;
			},

			// Returns the top-level DOM element
			getRevealElement: function() {
				return dom.wrapper || document.querySelector( '.reveal' );
			},

			// Returns a hash with all registered plugins
			getPlugins: function() {
				return plugins;
			},

			// Returns true if we're currently on the first slide
			isFirstSlide: function() {
				return ( indexh === 0 && indexv === 0 );
			},

			// Returns true if we're currently on the last slide
			isLastSlide: function() {
				if( currentSlide ) {
					// Does this slide have a next sibling?
					if( currentSlide.nextElementSibling ) return false;

					// If it's vertical, does its parent have a next sibling?
					if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

					return true;
				}

				return false;
			},

			// Returns true if we're on the last slide in the current
			// vertical stack
			isLastVerticalSlide: function() {
				if( currentSlide && isVerticalSlide( currentSlide ) ) {
					// Does this slide have a next sibling?
					if( currentSlide.nextElementSibling ) return false;

					return true;
				}

				return false;
			},

			// Checks if reveal.js has been loaded and is ready for use
			isReady: function() {
				return loaded;
			},

			// Forward event binding to the reveal DOM element
			addEventListener: function( type, listener, useCapture ) {
				if( 'addEventListener' in window ) {
					Reveal.getRevealElement().addEventListener( type, listener, useCapture );
				}
			},
			removeEventListener: function( type, listener, useCapture ) {
				if( 'addEventListener' in window ) {
					Reveal.getRevealElement().removeEventListener( type, listener, useCapture );
				}
			},

			// Adds/removes a custom key binding
			addKeyBinding: addKeyBinding,
			removeKeyBinding: removeKeyBinding,

			// API for registering and retrieving plugins
			registerPlugin: registerPlugin,
			hasPlugin: hasPlugin,
			getPlugin: getPlugin,

			// Programmatically triggers a keyboard event
			triggerKey: function( keyCode ) {
				onDocumentKeyDown( { keyCode: keyCode } );
			},

			// Registers a new shortcut to include in the help overlay
			registerKeyboardShortcut: function( key, value ) {
				keyboardShortcuts[key] = value;
			}
		};

		return Reveal;

	}));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ })
/******/ ]);