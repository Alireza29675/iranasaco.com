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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = function (query) {
    return document.querySelector(query);
};
window.$$ = function (query) {
    return document.querySelectorAll(query);
};

window.onload = function () {
    $('body').classList.add('loading-finished');
    setTimeout(function () {
        $('body > .loading').remove();
    }, 1000);
};

window.app = new _App2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?-url!../../node_modules/sass-loader/lib/loader.js!./index.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?-url!../../node_modules/sass-loader/lib/loader.js!./index.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: #ffffff; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body .full-view-slider {\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.6);\n    transition-duration: 0.3s; }\n    body .full-view-slider.active {\n      opacity: 1;\n      pointer-events: auto; }\n    body .full-view-slider > img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      max-width: 80%;\n      max-height: 70%;\n      z-index: 1000; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    overflow: hidden; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n      @media (max-width: 1000px) {\n        body header h1 {\n          font-size: 20px;\n          width: 80%;\n          top: 70%;\n          text-align: center;\n          white-space: normal;\n          box-shadow: none; } }\n      @media (max-width: 460px) {\n        body header h1 {\n          background: linear-gradient(rgba(56, 56, 56, 0), rgba(56, 56, 56, 0.3), #383838, #383838);\n          top: 80%;\n          font-weight: normal;\n          font-size: 22px;\n          padding: 200px 200px; } }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    @media (max-width: 650px) {\n      body nav {\n        background: linear-gradient(#383838, #2b2b2b, #2b2b2b, #3a3a3a); } }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 20%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n      @media (max-width: 650px) {\n        body nav .select-highlight {\n          display: none; } }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      @media (max-width: 650px) {\n        body nav ul {\n          flex-direction: column; } }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 16px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        @media (max-width: 1000px) {\n          body nav ul li {\n            flex-basis: auto;\n            flex-grow: 1;\n            font-size: 13px; } }\n        @media (max-width: 650px) {\n          body nav ul li {\n            border-bottom: 1px solid #333; } }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF);\n    padding: 70px 0; }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: auto;\n      padding: 55px 0;\n      clear: both; }\n      @media (max-width: 1000px) {\n        body main section {\n          width: 80%; } }\n      @media (max-width: 750px) {\n        body main section {\n          text-align: center; }\n          body main section ul {\n            text-align: right; } }\n      body main section > img {\n        float: left;\n        width: 305px; }\n        @media (max-width: 900px) {\n          body main section > img {\n            width: 190px;\n            margin: auto; } }\n        @media (max-width: 750px) {\n          body main section > img {\n            float: none; } }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        @media (max-width: 900px) {\n          body main section article {\n            top: 0; } }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 27px; }\n      body main section[data-title='portfolio'] {\n        padding-top: 40px; }\n        body main section[data-title='portfolio'] > img {\n          margin-top: 80px;\n          margin-right: 15px; }\n      body main section[data-title='teaching'] {\n        padding-top: 30px; }\n      body main section[data-title='gallery'] {\n        height: 400px; }\n        @media (max-width: 650px) {\n          body main section[data-title='gallery'] {\n            width: 100%; } }\n        body main section[data-title='gallery'] .gallery {\n          background: #222;\n          margin-top: 20px;\n          overflow: hidden;\n          position: relative; }\n          @media (max-width: 650px) {\n            body main section[data-title='gallery'] .gallery {\n              height: 200px; } }\n          body main section[data-title='gallery'] .gallery .container {\n            position: relative;\n            flex-wrap: nowrap;\n            display: flex;\n            flex-direction: row;\n            right: 0;\n            transition-duration: 0.5s; }\n            @media (max-width: 650px) {\n              body main section[data-title='gallery'] .gallery .container {\n                position: absolute;\n                right: 0 !important;\n                width: 100%;\n                overflow-x: scroll; } }\n          body main section[data-title='gallery'] .gallery img {\n            cursor: pointer;\n            height: 200px;\n            transition-duration: 0.2s;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            -webkit-user-drag: none;\n            -moz-user-drag: none;\n            -ms-user-drag: none;\n            user-drag: none; }\n            body main section[data-title='gallery'] .gallery img:hover {\n              opacity: 0.85;\n              transform: scale(0.95); }\n            body main section[data-title='gallery'] .gallery img:active {\n              opacity: 0.5;\n              transition-duration: 0.1s;\n              transform: scale(0.9); }\n          body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n            width: 50px;\n            height: 100px;\n            background: rgba(0, 0, 0, 0.6);\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            opacity: 0.3; }\n            body main section[data-title='gallery'] .gallery .left-button.active, body main section[data-title='gallery'] .gallery .right-button.active {\n              cursor: pointer;\n              opacity: 0.8;\n              transition-duration: 0.3s; }\n            body main section[data-title='gallery'] .gallery .left-button:hover, body main section[data-title='gallery'] .gallery .right-button:hover {\n              opacity: 1; }\n            @media (max-width: 650px) {\n              body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n                display: none; } }\n            body main section[data-title='gallery'] .gallery .left-button i, body main section[data-title='gallery'] .gallery .right-button i {\n              position: absolute;\n              background: white;\n              width: 5px;\n              height: 30px;\n              top: 50%;\n              left: 18px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%); }\n              body main section[data-title='gallery'] .gallery .left-button i:before, body main section[data-title='gallery'] .gallery .right-button i:before {\n                content: ' ';\n                position: absolute;\n                background: white;\n                width: 6px;\n                height: 30px;\n                transform: rotate(90deg) translate(-12px, 12px); }\n          body main section[data-title='gallery'] .gallery .left-button {\n            left: 0; }\n            body main section[data-title='gallery'] .gallery .left-button i {\n              top: 39%;\n              left: 16px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%) rotateZ(180deg); }\n          body main section[data-title='gallery'] .gallery .right-button {\n            right: 0; }\n      body main section[data-title='contact'] {\n        padding-top: 20px;\n        height: 650px; }\n        @media (max-width: 650px) {\n          body main section[data-title='contact'] {\n            width: 100%; } }\n        body main section[data-title='contact'] iframe {\n          margin-top: 20px; }\n        body main section[data-title='contact'] .details {\n          margin-top: 40px; }\n          @media (max-width: 650px) {\n            body main section[data-title='contact'] .details {\n              margin: auto;\n              width: 80%;\n              margin-top: 35px; } }\n          body main section[data-title='contact'] .details p {\n            margin: 6px;\n            font-size: 16px; }\n            body main section[data-title='contact'] .details p a {\n              text-decoration: none;\n              color: #000; }\n              body main section[data-title='contact'] .details p a:hover {\n                color: #AAA; }\n            body main section[data-title='contact'] .details p i.fa {\n              margin-left: 10px; }\n              body main section[data-title='contact'] .details p i.fa.fa-map-marker {\n                margin-right: 2px;\n                color: #ff0000; }\n              body main section[data-title='contact'] .details p i.fa.fa-phone {\n                color: #33aae0; }\n              body main section[data-title='contact'] .details p i.fa.fa-fax {\n                color: #1eaa6d; }\n              body main section[data-title='contact'] .details p i.fa.fa-envelope {\n                color: #e6be1b; }\n  body footer {\n    background: #333;\n    width: 100%;\n    height: 100px;\n    text-align: center;\n    color: #d4d4d4;\n    font-weight: 100;\n    font-size: 13px;\n    position: relative; }\n    body footer span {\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: 2px;\n      transform: translate(-50%, -50%);\n      cursor: default; }\n      body footer span i {\n        color: #fff833; }\n      body footer span a {\n        text-decoration: none;\n        color: #FFF;\n        cursor: pointer;\n        display: inline-block;\n        font-weight: normal;\n        transition-duration: 0.2s;\n        transform: translateZ(1px);\n        text-shadow: 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1); }\n        body footer span a:hover {\n          opacity: 0.8;\n          color: yellow;\n          transform: translateZ(1px) translateY(-5px) scale(1.02);\n          text-shadow: 0 10px 5px rgba(255, 255, 0, 0.1), 0 5px 5px rgba(255, 255, 0, 0.25), 0 2px 5px rgba(255, 255, 0, 0.8); }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RoboScene = __webpack_require__(7);

var _RoboScene2 = _interopRequireDefault(_RoboScene);

var _Navigation = __webpack_require__(10);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Gallery = __webpack_require__(11);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        var _this = this;

        _classCallCheck(this, App);

        this.roboScene = new _RoboScene2.default('body > header');
        this.navigation = new _Navigation2.default('body > nav');
        this.gallery = new _Gallery2.default('body .gallery');
        this.robot = this.roboScene.robot;
        // Moving robot listeners
        window.addEventListener('mousemove', this.onMove.bind(this));
        window.addEventListener('touchmove', this.onMove.bind(this));
        // Grabbing listeners
        window.addEventListener('mousedown', this.onMouseDown.bind(this));
        window.addEventListener('mouseup', this.onMouseUp.bind(this));
        // Focusing listeners
        $('body').addEventListener('mouseleave', function () {
            return _this.focus = false;
        });
        $('body').addEventListener('mouseenter', function () {
            return _this.focus = true;
        });
        window.addEventListener('touchend', function () {
            return _this.focus = false;
        });
        window.addEventListener('touchstart', function () {
            return _this.focus = true;
        });
        this.focusingTimeout = null;
        this.autoRotationRenderer = window.framesFlow.render(this.autoRotate.bind(this));
    }

    _createClass(App, [{
        key: 'onMove',
        value: function onMove(event) {
            this.focus = true;
            this.focused = true;
            try {
                event = event.touches[0];
            } catch (e) {/* nothing */}
            this.moveRobotTo(event.pageX, event.pageY);
        }
    }, {
        key: 'moveRobotTo',
        value: function moveRobotTo(x, y) {
            var xRate = x / window.innerWidth - 0.5;
            var yRate = y / window.innerHeight - 0.5;
            this.robot.rotateY = xRate * Math.PI;
            this.robot.rotateX = yRate * Math.PI / 3 - Math.PI / 6;
            this.robot.armAngle = yRate * Math.PI / 2 + 0.05;
            this.robot.wristAngle = yRate * -Math.PI / 3;
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown() {
            this.robot.closeGrab();
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp() {
            this.robot.grabAngle = 0.5;
        }
    }, {
        key: 'autoRotate',
        value: function autoRotate(frame) {
            var theta = frame.index / 250;
            this.moveRobotTo((window.innerWidth + Math.cos(theta) * window.innerWidth) / 2, (window.innerHeight + Math.sin(theta) * window.innerHeight) / 2);
        }
    }, {
        key: 'focus',
        set: function set(isFocused) {
            var _this2 = this;

            if (isFocused) {
                clearTimeout(this.focusingTimeout);
                this.autoRotationRenderer.pause();
            } else {
                this.focusingTimeout = setTimeout(function () {
                    _this2.autoRotationRenderer.play();
                }, 2000);
            }
        }
    }]);

    return App;
}();

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(8);

var _Robot = __webpack_require__(9);

var _Robot2 = _interopRequireDefault(_Robot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var postprocessing = {};
var bokeh_params = {
    znear: 0.1,
    zfar: 10,
    shaderFocus: false,
    fstop: 20,
    maxblur: 2,
    showFocus: false,
    focalDepth: 1.4,
    manualdof: false,
    vignetting: false,
    depthblur: true,
    threshold: 0.5,
    gain: 0.2,
    bias: 2,
    fringe: 3,
    focalLength: 20,
    noise: true,
    pentagon: false,
    dithering: 0
};

var RoboScene = function () {
    function RoboScene(query) {
        _classCallCheck(this, RoboScene);

        this.container = $(query);
        this.width = window.innerWidth;
        this.height = 600;
        this.init();
        window.addEventListener('resize', this.onResize.bind(this));
        window.framesFlow.render(this.render.bind(this));
    }

    _createClass(RoboScene, [{
        key: 'init',
        value: function init() {
            // Creating Scene
            this.scene = new THREE.Scene();
            var fogColor = 0xf3f3f3;
            this.scene.background = new THREE.Color(fogColor);
            this.scene.fog = new THREE.Fog(fogColor, 4, 50);
            // Creating Camera
            this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 300);
            this.camera.position.z = 13;
            this.camera.position.y = 1;
            this.camera.rotation.x = 0.25;
            this.scene.add(this.camera);
            // Post Proccessing
            this.material_depth = new THREE.MeshDepthMaterial();
            this.initPostProcessing();
            this.updateBookehParams();
            // Creating Renderer
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(this.width, this.height);
            this.renderer.gammaInput = true;
            this.renderer.gammaOutput = true;
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.renderReverseSided = false;
            this.container.appendChild(this.renderer.domElement);
            // Creating Lights
            this.pointLight = new THREE.PointLight(0xffffff, 0.5); // Point
            this.pointLight.position.z = 10;
            this.scene.add(this.pointLight);
            this.hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
            this.scene.add(this.hemisphereLight);
            // Creating ground
            this.gridHelper = new THREE.GridHelper(70, 45);
            this.scene.add(this.gridHelper);
            // Creating Robot
            this.robot = new _Robot2.default(this);
        }
    }, {
        key: 'setBookehParam',
        value: function setBookehParam(changes) {
            Object.assign(bokeh_params, changes);
            this.updateBookehParams();
        }
    }, {
        key: 'updateBookehParams',
        value: function updateBookehParams() {
            for (var e in bokeh_params) {
                if (e in postprocessing.bokeh_uniforms) postprocessing.bokeh_uniforms[e].value = bokeh_params[e];
            }postprocessing.enabled = true;
            postprocessing.bokeh_uniforms["znear"].value = bokeh_params.znear;
            postprocessing.bokeh_uniforms["zfar"].value = bokeh_params.zfar;
            this.camera.setFocalLength(bokeh_params.focalLength);
        }
    }, {
        key: 'initPostProcessing',
        value: function initPostProcessing() {
            postprocessing.scene = new THREE.Scene();
            postprocessing.camera = new THREE.OrthographicCamera(-this.width / 2, this.width / 2, this.height / 2, -this.height / 2, -60, 60);
            postprocessing.scene.add(postprocessing.camera);
            var params = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBFormat
            };
            postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget(this.width, this.height, params);
            postprocessing.rtTextureColor = new THREE.WebGLRenderTarget(this.width, this.height, params);
            var bokeh_shader = THREE.BokehShader;
            postprocessing.bokeh_uniforms = THREE.UniformsUtils.clone(bokeh_shader.uniforms);
            postprocessing.bokeh_uniforms["tColor"].value = postprocessing.rtTextureColor.texture;
            postprocessing.bokeh_uniforms["tDepth"].value = postprocessing.rtTextureDepth.texture;
            postprocessing.bokeh_uniforms["textureWidth"].value = this.width;
            postprocessing.bokeh_uniforms["textureHeight"].value = this.height;
            postprocessing.materialBokeh = new THREE.ShaderMaterial({
                uniforms: postprocessing.bokeh_uniforms,
                vertexShader: bokeh_shader.vertexShader,
                fragmentShader: bokeh_shader.fragmentShader,
                defines: { RINGS: 3, SAMPLES: 2 }
            });
            postprocessing.quad = new THREE.Mesh(new THREE.PlaneGeometry(this.width, this.height), postprocessing.materialBokeh);
            postprocessing.scene.add(postprocessing.quad);
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            this.width = window.innerWidth;
            this.camera.aspect = postprocessing.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
            postprocessing.camera.updateProjectionMatrix();
            this.renderer.setSize(this.width, this.height);
        }
    }, {
        key: 'render',
        value: function render() {
            this.robot.render();
            this.renderer.clear();
            this.scene.overrideMaterial = null;
            this.renderer.render(this.scene, this.camera, postprocessing.rtTextureColor, true);
            this.scene.overrideMaterial = this.material_depth;
            this.renderer.render(this.scene, this.camera, postprocessing.rtTextureDepth, true);
            this.renderer.render(postprocessing.scene, postprocessing.camera);
        }
    }]);

    return RoboScene;
}();

exports.default = RoboScene;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _FramesFlow = __webpack_require__(1);

	var _FramesFlow2 = _interopRequireDefault(_FramesFlow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// defining framesFlow as a global object
	if (!(window.framesFlow instanceof _FramesFlow2.default)) {
	    // if it didn't define before
	    window.framesFlow = new _FramesFlow2.default();
	}

	// export
	exports.default = window.framesFlow;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RendererArray = __webpack_require__(3);

	var _RendererArray2 = _interopRequireDefault(_RendererArray);

	var _Renderer = __webpack_require__(2);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Compatibility for all browsers - Paul Irish version
	window.requestAnimFrame = function () {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };
	}

	// FramesFlow
	();
	var FramesFlow = function () {
	    function FramesFlow() {
	        _classCallCheck(this, FramesFlow);

	        this.frames = 0;
	        this._fps = 30;
	        this.options = {
	            minimumAcceptableFPS: 30
	        };
	        this.renderers = new _RendererArray2.default();
	        this.performance = {
	            logs: new Array(100),
	            logsPointer: 0,
	            lastTimeStamp: undefined,
	            lastFrameFPS: 30,
	            ratio: 1,
	            status: 0,
	            average: {
	                fps: 30,
	                ratio: 1,
	                status: 0
	            }
	        };
	        this.requestLoop();
	    }

	    _createClass(FramesFlow, [{
	        key: 'get',
	        value: function get(id) {
	            return this.renderers.get(id);
	        }
	    }, {
	        key: 'getAll',
	        value: function getAll() {
	            return this.renderers;
	        }
	    }, {
	        key: 'getAllByClass',
	        value: function getAllByClass(className) {
	            return this.renderers.filter(function (renderer) {
	                return renderer.class == className;
	            });
	        }
	    }, {
	        key: 'removeRendererById',
	        value: function removeRendererById(id) {
	            this.renderers.remove(id);
	        }
	    }, {
	        key: 'checkValidationOfFrameRate',
	        value: function checkValidationOfFrameRate(rate) {
	            var isGlobalCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            var error = null;
	            var pointer = isGlobalCheck ? 'any' : 'this';
	            if (rate < 0) error = 'FPS must not be a negative number!';else if (rate < 30 && rate > 0 && 30 / rate % 1 !== 0) error = 'if FPS is less than 30fps, it have to be like this: (30 / FPS) should be integer';else if (rate > 30 && rate % 30 !== 0) error = 'if FPS is more than 30fps, it have to be like this: (FPS % 30 == 0)';
	            if (error !== null) throw 'can\'t set ' + rate + 'fps for this renderer. REASON: <' + error + '>';
	        }
	    }, {
	        key: 'playAll',
	        value: function playAll() {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.getAllRenderers()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var renderer = _step.value;
	                    renderer.play();
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'pauseAll',
	        value: function pauseAll() {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = this.getAllRenderers()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var renderer = _step2.value;
	                    renderer.pause();
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render(className, func) {
	            if (typeof className == 'function') {
	                func = className;
	                className = '';
	            }
	            var renderer = new _Renderer2.default(this, {
	                id: this.renderers.length,
	                class: className
	            }, func);
	            this.renderers.push(renderer);
	            return renderer;
	        }
	    }, {
	        key: 'onLag',
	        value: function onLag(minimumFPS, callback) {
	            if (typeof minimumFPS == 'function') callback = minimumFPS;else this.options.minimumAcceptableFPS = minimumFPS;
	            this.onLagCallback = callback;
	        }
	    }, {
	        key: 'registerPerformanceLog',
	        value: function registerPerformanceLog(renderTime) {
	            // Calculating fps
	            this.performance.lastFrameFPS = 1000 / renderTime;
	            // Calculating lags
	            if (this.performance.lastFrameFPS < this.options.minimumAcceptableFPS) if (typeof this.onLagCallback === 'function') this.onLagCallback(this.performance.lastFrameFPS
	            // logging
	            );this.performance.logs[this.performance.logsPointer] = this.performance.lastFrameFPS;
	            this.performance.logsPointer = (this.performance.logsPointer + 1) % 100;
	            // analyzing logs
	            this.analyzePerformance();
	        }
	    }, {
	        key: 'analyzePerformance',
	        value: function analyzePerformance() {
	            var allData = this.performance.logs.filter(function (data) {
	                return typeof data == 'number';
	            }
	            // Calculating average of data
	            );var FPSSum = 0;
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = allData[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var data = _step3.value;
	                    FPSSum += data;
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            this.performance.average.fps = FPSSum / allData.length;
	            // Calculating performance percentage
	            this.performance.ratio = this.performance.lastFrameFPS / 30;
	            this.performance.average.ratio = this.performance.average.fps / 30;
	            // defining status
	            this.performance.status = this._getStatusOfFPS(this.performance.lastFrameFPS);
	            this.performance.average.status = this._getStatusOfFPS(this.performance.average.fps);
	        }
	    }, {
	        key: '_getStatusOfFPS',
	        value: function _getStatusOfFPS(fps) {
	            var ratio = fps / this.fps;
	            var status = -3; // WORST
	            if (ratio > 0.3) status = -2; // BAD
	            if (ratio > 0.6) status = -1; // NOT BAD
	            if (ratio > 0.9) status = 0; // OK
	            if (ratio > 1.3) status = 1; // GOOD
	            if (ratio > 1.6) status = 2; // EXCELLENT
	            if (ratio > 2) status = 3; // BEST
	            return status;
	        }
	    }, {
	        key: 'requestLoop',
	        value: function requestLoop() {
	            requestAnimFrame(this.requestLoop.bind(this));
	            this.frames++;
	            this.renderers.each(function (renderer) {
	                return renderer.render();
	            });
	            if (this.performance.lastTimeStamp !== undefined) this.registerPerformanceLog(Date.now() - this.performance.lastTimeStamp);
	            this.performance.lastTimeStamp = Date.now();
	        }
	    }, {
	        key: 'fps',
	        get: function get() {
	            return this._fps;
	        },
	        set: function set(newFPS) {
	            try {
	                this.checkValidationOfFrameRate(rate, true);
	                this._fps = newFPS;
	            } catch (e) {
	                console.error(e);
	            }
	        }
	    }]);

	    return FramesFlow;
	}();

	exports.default = FramesFlow;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Renderer = function () {
	    function Renderer(framesFlow, options, func) {
	        _classCallCheck(this, Renderer);

	        this.id = options.id;
	        this.class = options.class || '';
	        this.props = {
	            isDebuging: false
	        };
	        this.framesFlow = framesFlow;
	        this._fps = undefined;
	        this.func = func;
	        this.frames = 0;
	        this.shouldGoNext = false;
	        this.render();
	    }
	    // Render next frame


	    _createClass(Renderer, [{
	        key: 'next',
	        value: function next() {
	            this.shouldGoNext = true;
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            this.framesFlow.removeRendererById(this.id);
	        }
	    }, {
	        key: 'pause',
	        value: function pause() {
	            this.props.isDebuging = true;
	        }
	    }, {
	        key: 'play',
	        value: function play() {
	            this.props.isDebuging = false;
	        }
	    }, {
	        key: 'shouldRenderThisFrame',
	        value: function shouldRenderThisFrame() {
	            // all conditions to pause or play rendering
	            var conditions = [!this.props.isDebuging, this.framesFlow.frames % (30 / Math.min(this.fps, 30)) == 0];
	            var ret = true;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = conditions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var cond = _step.value;
	                    ret = ret && cond;
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return ret;
	        }
	    }, {
	        key: 'getFrameObjectToReturn',
	        value: function getFrameObjectToReturn() {
	            return {
	                renderer: this,
	                index: this.frames,
	                fps: this.fps,
	                performance: {
	                    fps: this.framesFlow.performance.lastFrameFPS,
	                    ratio: this.framesFlow.performance.ratio,
	                    status: this.framesFlow.performance.status,
	                    average: this.framesFlow.performance.average
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.shouldRenderThisFrame() || this.shouldGoNext) {
	                var iteration = 0;
	                if (this.fps > 30) iteration = Math.max(this.fps, 30) / 30;else iteration = 30 / this.fps;
	                for (var i = 0; i < iteration; i++) {
	                    this.frames++;
	                    this.shouldGoNext = false;
	                    this.func(this.getFrameObjectToReturn());
	                }
	            }
	        }
	    }, {
	        key: 'fps',
	        set: function set(newFPS) {
	            if (newFPS == undefined) return this._fps = newFPS;
	            try {
	                this.framesFlow.checkValidationOfFrameRate(newFPS);
	                this._fps = newFPS;
	            } catch (e) {
	                console.error(e);
	            }
	        },
	        get: function get() {
	            return this._fps || this.framesFlow.fps;
	        }
	    }]);

	    return Renderer;
	}();

	exports.default = Renderer;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RendererArray = function () {
	    function RendererArray() {
	        _classCallCheck(this, RendererArray);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        if (typeof args[0] === 'array') this.arr = args[0];else this.arr = new (Function.prototype.bind.apply(Array, [null].concat(args)))();
	    }

	    _createClass(RendererArray, [{
	        key: 'get',
	        value: function get(i) {
	            return this.arr[i];
	        }
	    }, {
	        key: 'set',
	        value: function set(i, val) {
	            this.arr[i] = val;
	            return this;
	        }
	    }, {
	        key: 'push',
	        value: function push(val) {
	            this.arr.push(val);
	            return this;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(i) {
	            this.arr[i] = undefined;
	            this.arr.splice(i, 1);
	            return this;
	        }
	    }, {
	        key: 'filter',
	        value: function filter(condFunc) {
	            return new RendererArray(this.arr.filter(condFunc));
	        }
	    }, {
	        key: 'each',
	        value: function each(cb) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;
	                    cb(item);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'toArray',
	        value: function toArray() {
	            return this.arr;
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            this.each(function (renderer) {
	                return renderer.remove();
	            });
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            this.each(function (renderer) {
	                return renderer.next();
	            });
	        }
	    }, {
	        key: 'pause',
	        value: function pause() {
	            this.each(function (renderer) {
	                return renderer.pause();
	            });
	        }
	    }, {
	        key: 'play',
	        value: function play() {
	            this.each(function (renderer) {
	                return renderer.play();
	            });
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this.arr.length;
	        }
	    }, {
	        key: 'fps',
	        set: function set(newFPS) {
	            this.each(function (renderer) {
	                return renderer.fps = newFPS;
	            });
	        }
	    }]);

	    return RendererArray;
	}();

	exports.default = RendererArray;

/***/ })
/******/ ]);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loader = new THREE.JSONLoader();

var blackMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, shininess: 0 });
var darkMaterial = new THREE.MeshPhongMaterial({ color: 0x999999, shininess: 100 });
var lightMaterial = new THREE.MeshPhongMaterial({ color: 0xeeeeee, shininess: 70 });

var objectsNames = ['arm1', 'arm2', 'finger', 'hand', 'rest', 'rotator', 'wrist', 'wristbone'];
var load = function load(objectName) {
    var url = './assets/objects/' + objectName + '.json';
    return new Promise(function (resolve, reject, err) {
        loader.load(url, function (geometry, material) {
            material = lightMaterial;
            if (objectName === 'finger') material = blackMaterial;
            if (['wristbone', 'hand', 'arm1', 'rest'].includes(objectName)) material = darkMaterial;
            resolve(new THREE.Mesh(geometry, material));
        });
    });
};
var loadAllObjectsAndPutIn = function loadAllObjectsAndPutIn(objects) {
    return new Promise(function (resolve, reject, err) {
        var loadedCount = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            var _loop = function _loop() {
                var objectName = _step.value;

                load(objectName).then(function (mesh) {
                    objects[objectName] = mesh;
                    loadedCount++;
                    if (loadedCount === objectsNames.length) resolve();
                });
            };

            for (var _iterator = objectsNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _loop();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
};

var Robot = function () {
    function Robot(roboScene) {
        _classCallCheck(this, Robot);

        this.roboScene = roboScene;
        this.scene = roboScene.scene;
        this.isReady = false;
        this.parts = {};
        loadAllObjectsAndPutIn(this.parts).then(this.ready.bind(this));
    }

    _createClass(Robot, [{
        key: 'ready',
        value: function ready() {
            // Combining things together
            this.parts.rest.add(this.parts.rotator);
            this.parts.rotator.position.y = 3;
            this.parts.rotator.add(this.parts.arm1);
            this.parts.arm1.position.y = 2;
            this.parts.arm1.add(this.parts.arm2);
            this.parts.arm2.position.y = 4.5;
            this.parts.arm2.add(this.parts.wrist);
            this.parts.wrist.add(this.parts.wristbone);
            this.parts.wristbone.position.y = 7.5;
            this.parts.wristbone.position.x = -0.06;
            this.parts.wristbone.add(this.parts.hand);
            this.parts.hand.add(this.parts.finger);
            this.parts.finger.position.y = 1.4;
            this.parts.finger.position.x = 0.2;
            this.parts.finger.position.z = 0.35;
            this.parts.finger.rotation.x = 0.2;
            this.parts.finger2 = this.parts.finger.clone();
            this.parts.hand.add(this.parts.finger2);
            this.parts.finger2.rotation.y = Math.PI;
            this.parts.finger2.position.x = -0.4;

            // adding rest to scene
            this.scene.add(this.parts.rest);

            // Hidden parameters
            this.rotateY = -0.4;
            this.rotateX = 0;
            this.armAngle = 0;
            this.wristAngle = -Math.PI / 8;
            this.grabAngle = Math.PI / 6;

            // Set inital values
            this.parts.rotator.rotation.y = this._rotateY;
            this.parts.arm1.rotation.x = this._rotateX;
            this.parts.arm2.rotation.x = this._armAngle;
            this.parts.wristbone.rotation.x = this._wristAngle;
            this.parts.finger.rotation.z = this._grabAngle;
            this.parts.finger2.rotation.z = this._grabAngle;

            this.isReady = true;
        }
    }, {
        key: 'closeGrab',
        value: function closeGrab() {
            this.grabAngle = 0;
        }
    }, {
        key: 'openGrab',
        value: function openGrab() {
            this.grabAngle = Math.PI / 2;
        }
    }, {
        key: 'toggleGrab',
        value: function toggleGrab() {
            if (this.grabAngle > Math.PI / 3) this.closeGrab();else this.openGrab();
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.isReady) {
                this.parts.rotator.rotation.y += (this._rotateY - this.parts.rotator.rotation.y) / 30;
                this.parts.arm1.rotation.x += (this._rotateX - this.parts.arm1.rotation.x) / 30;
                this.parts.arm2.rotation.x += (this._armAngle - this.parts.arm2.rotation.x) / 30;
                this.parts.wristbone.rotation.x += (this._wristAngle - this.parts.wristbone.rotation.x) / 30;
                this.parts.finger.rotation.z += (this._grabAngle - this.parts.finger.rotation.z) / 3;
                this.parts.finger2.rotation.z += (this._grabAngle - this.parts.finger2.rotation.z) / 3;
            }
        }
    }, {
        key: 'rotateY',
        set: function set(deg) {
            this._rotateY = deg;
        },
        get: function get() {
            return this._rotateY;
        }
    }, {
        key: 'rotateX',
        set: function set(deg) {
            deg = Math.max(deg, -Math.PI / 3);
            deg = Math.min(deg, 7 * Math.PI / 12);
            this._rotateX = deg;
        },
        get: function get() {
            return this._rotateX;
        }
    }, {
        key: 'armAngle',
        set: function set(deg) {
            deg = Math.PI - deg;
            deg = Math.max(deg, -Math.PI / 12);
            deg = Math.min(deg, 5 * Math.PI / 6);
            this._armAngle = deg;
        },
        get: function get() {
            return this._armAngle;
        }
    }, {
        key: 'wristAngle',
        set: function set(deg) {
            deg = Math.max(deg, -Math.PI / 2);
            deg = Math.min(deg, Math.PI / 2);
            this._wristAngle = deg;
        },
        get: function get() {
            return this._wristAngle;
        }
    }, {
        key: 'grabAngle',
        set: function set(deg) {
            deg = Math.max(deg, 0);
            deg = Math.min(deg, Math.PI);
            deg -= Math.PI / 6;
            this._grabAngle = -deg / 2;
        },
        get: function get() {
            return -(2 * this._grabAngle - Math.PI / 6);
        }
    }]);

    return Robot;
}();

exports.default = Robot;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function () {
    function Navigation(query) {
        var _this = this;

        _classCallCheck(this, Navigation);

        this.container = $(query);
        this.highlight = $(query + ' .select-highlight');
        this.items = $$(query + ' li');
        this.scrollTarget = 0;
        this.scrollingRenderer = window.framesFlow.render(this.scrollingRendererMethod.bind(this));
        window.addEventListener('mousewheel', function () {
            return _this.scrollingRenderer.pause();
        });
        this.init();
    }

    _createClass(Navigation, [{
        key: 'init',
        value: function init() {
            var that = this;
            this.scrollingRenderer.pause();
            this.highlight.style.width = 100 / this.items.length + '%';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    item.onmouseover = function () {
                        that.onMouseOverItem(this);
                    };
                    item.onclick = function () {
                        that.onClickOnItem(this);
                    };
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'onMouseOverItem',
        value: function onMouseOverItem(element) {
            this.highlight.style.left = element.offsetLeft + 'px';
        }
    }, {
        key: 'onClickOnItem',
        value: function onClickOnItem(element) {
            var section = $('[data-title=' + element.getAttribute('data-link') + ']');
            this.scrollTarget = section.offsetTop;
            this.scrollingRenderer.play();
        }
    }, {
        key: 'scrollingRendererMethod',
        value: function scrollingRendererMethod(frame) {
            var distance = Math.min(this.scrollTarget, document.body.offsetHeight - window.innerHeight) - window.scrollY;
            window.scrollTo(0, window.scrollY + distance / 10);
            if (distance < 10) frame.renderer.pause();
        }
    }]);

    return Navigation;
}();

exports.default = Navigation;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Slider = __webpack_require__(12);

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var setBetween = function setBetween(number, min, max) {
    return Math.max(Math.min(number, max), min);
};

var imagesNames = ['ABB-Robot.png', 'DurrRobot.jpg', 'MotomanRobot.jpg', 'Rodip.jpg'];

var Gallery = function () {
    function Gallery(query) {
        _classCallCheck(this, Gallery);

        this.element = $(query);
        this.leftButton = $(query + ' > .left-button');
        this.rightButton = $(query + ' > .right-button');
        this.container = $(query + ' > .container');
        this.images = [];
        this.containerRight = 0;
        this.loadImages();
    }

    _createClass(Gallery, [{
        key: 'loadImages',
        value: function loadImages() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = imagesNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var name = _step.value;

                    var img = document.createElement('img');
                    img.src = './assets/images/gallery/' + name;
                    img.alt = 'اتوماسیون صنعتی آریانا';
                    this.images.push(img);
                    this.container.appendChild(img);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.slider = new _Slider2.default('body > .full-view-slider', this);
            this.init();
        }
    }, {
        key: 'init',
        value: function init() {
            var _this = this;

            var that = this;
            this.leftButton.onclick = function () {
                return _this.move(-300);
            };
            this.rightButton.onclick = function () {
                return _this.move(300);
            };
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.images[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var image = _step2.value;
                    image.onclick = function () {
                        that.onRequestForSlides(this);
                    };
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: 'disableButton',
        value: function disableButton(which) {
            this[which + 'Button'].classList.remove('active');
        }
    }, {
        key: 'enableAllButtons',
        value: function enableAllButtons() {
            this.leftButton.classList.add('active');
            this.rightButton.classList.add('active');
        }
    }, {
        key: 'move',
        value: function move(step) {
            var maxRight = this.maxRight;
            this.containerRight = setBetween(this.containerRight + step, maxRight, 0);
            this.container.style.right = this.containerRight + 'px';
            this.enableAllButtons();
            if (this.containerRight === maxRight) this.disableButton('left');
            if (this.containerRight === 0) this.disableButton('right');
        }
    }, {
        key: 'onRequestForSlides',
        value: function onRequestForSlides(image) {
            for (var i in this.images) {
                if (this.images[i] === image) {
                    this.slider.show(i);
                    break;
                }
            }
        }
    }, {
        key: 'width',
        get: function get() {
            var sum = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.images[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var image = _step3.value;
                    sum += image.clientWidth;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return sum;
        }
    }, {
        key: 'maxRight',
        get: function get() {
            return -(this.width - this.element.offsetWidth);
        }
    }]);

    return Gallery;
}();

exports.default = Gallery;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var setBetween = function setBetween(number, min, max) {
    return Math.max(Math.min(number, max), min);
};

var Slider = function () {
    function Slider(query, gallery) {
        _classCallCheck(this, Slider);

        this.container = $(query);
        this.image = $(query + ' img');
        this.gallery = gallery;
        this.isActive = false;
        this.index = 0;
        this.init();
    }

    _createClass(Slider, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.container.addEventListener('click', function (event) {
                if (event.target === _this.container) _this.hidden();
            });
            window.addEventListener('keydown', function (event) {
                if (event.code === 'Escape' && _this.isActive) _this.hidden();
                if (event.code === 'ArrowRight' && _this.isActive) _this.imageIndex--;
                if (event.code === 'ArrowLeft' && _this.isActive) _this.imageIndex++;
            });
        }
    }, {
        key: 'show',
        value: function show(index) {
            this.imageIndex = index;
            this.isActive = true;
            this.container.classList.add('active');
        }
    }, {
        key: 'hidden',
        value: function hidden() {
            this.isActive = false;
            this.container.classList.remove('active');
        }
    }, {
        key: 'imageIndex',
        set: function set(index) {
            this.index = setBetween(index, 0, this.gallery.images.length - 1);
            this.image.src = this.gallery.images[this.index].src;
        },
        get: function get() {
            return this.index;
        }
    }]);

    return Slider;
}();

exports.default = Slider;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDQ0MzU0NzA5NGE5ZGI3YWYyYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsIm9ubG9hZCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJhcHAiLCJBcHAiLCJyb2JvU2NlbmUiLCJuYXZpZ2F0aW9uIiwiZ2FsbGVyeSIsInJvYm90IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsImJpbmQiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsImZvY3VzIiwiZm9jdXNpbmdUaW1lb3V0IiwiYXV0b1JvdGF0aW9uUmVuZGVyZXIiLCJmcmFtZXNGbG93IiwicmVuZGVyIiwiYXV0b1JvdGF0ZSIsImV2ZW50IiwiZm9jdXNlZCIsInRvdWNoZXMiLCJlIiwibW92ZVJvYm90VG8iLCJwYWdlWCIsInBhZ2VZIiwieCIsInkiLCJ4UmF0ZSIsImlubmVyV2lkdGgiLCJ5UmF0ZSIsImlubmVySGVpZ2h0Iiwicm90YXRlWSIsIk1hdGgiLCJQSSIsInJvdGF0ZVgiLCJhcm1BbmdsZSIsIndyaXN0QW5nbGUiLCJjbG9zZUdyYWIiLCJncmFiQW5nbGUiLCJmcmFtZSIsInRoZXRhIiwiaW5kZXgiLCJjb3MiLCJzaW4iLCJpc0ZvY3VzZWQiLCJjbGVhclRpbWVvdXQiLCJwYXVzZSIsInBsYXkiLCJwb3N0cHJvY2Vzc2luZyIsImJva2VoX3BhcmFtcyIsInpuZWFyIiwiemZhciIsInNoYWRlckZvY3VzIiwiZnN0b3AiLCJtYXhibHVyIiwic2hvd0ZvY3VzIiwiZm9jYWxEZXB0aCIsIm1hbnVhbGRvZiIsInZpZ25ldHRpbmciLCJkZXB0aGJsdXIiLCJ0aHJlc2hvbGQiLCJnYWluIiwiYmlhcyIsImZyaW5nZSIsImZvY2FsTGVuZ3RoIiwibm9pc2UiLCJwZW50YWdvbiIsImRpdGhlcmluZyIsIlJvYm9TY2VuZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdCIsIm9uUmVzaXplIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiZm9nQ29sb3IiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJmb2ciLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsInJvdGF0aW9uIiwibWF0ZXJpYWxfZGVwdGgiLCJNZXNoRGVwdGhNYXRlcmlhbCIsImluaXRQb3N0UHJvY2Vzc2luZyIsInVwZGF0ZUJvb2tlaFBhcmFtcyIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJnYW1tYUlucHV0IiwiZ2FtbWFPdXRwdXQiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwicmVuZGVyUmV2ZXJzZVNpZGVkIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJoZW1pc3BoZXJlTGlnaHQiLCJIZW1pc3BoZXJlTGlnaHQiLCJncmlkSGVscGVyIiwiR3JpZEhlbHBlciIsImNoYW5nZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2tlaF91bmlmb3JtcyIsInZhbHVlIiwic2V0Rm9jYWxMZW5ndGgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwYXJhbXMiLCJtaW5GaWx0ZXIiLCJMaW5lYXJGaWx0ZXIiLCJtYWdGaWx0ZXIiLCJmb3JtYXQiLCJSR0JGb3JtYXQiLCJydFRleHR1cmVEZXB0aCIsIldlYkdMUmVuZGVyVGFyZ2V0IiwicnRUZXh0dXJlQ29sb3IiLCJib2tlaF9zaGFkZXIiLCJCb2tlaFNoYWRlciIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsInVuaWZvcm1zIiwidGV4dHVyZSIsIm1hdGVyaWFsQm9rZWgiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiZGVmaW5lcyIsIlJJTkdTIiwiU0FNUExFUyIsInF1YWQiLCJNZXNoIiwiUGxhbmVHZW9tZXRyeSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsIm92ZXJyaWRlTWF0ZXJpYWwiLCJsb2FkZXIiLCJKU09OTG9hZGVyIiwiYmxhY2tNYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwiY29sb3IiLCJzaGluaW5lc3MiLCJkYXJrTWF0ZXJpYWwiLCJsaWdodE1hdGVyaWFsIiwib2JqZWN0c05hbWVzIiwibG9hZCIsIm9iamVjdE5hbWUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJpbmNsdWRlcyIsImxvYWRBbGxPYmplY3RzQW5kUHV0SW4iLCJvYmplY3RzIiwibG9hZGVkQ291bnQiLCJ0aGVuIiwibWVzaCIsImxlbmd0aCIsIlJvYm90IiwiaXNSZWFkeSIsInBhcnRzIiwicmVhZHkiLCJyZXN0Iiwicm90YXRvciIsImFybTEiLCJhcm0yIiwid3Jpc3QiLCJ3cmlzdGJvbmUiLCJoYW5kIiwiZmluZ2VyIiwiZmluZ2VyMiIsIl9yb3RhdGVZIiwiX3JvdGF0ZVgiLCJfYXJtQW5nbGUiLCJfd3Jpc3RBbmdsZSIsIl9ncmFiQW5nbGUiLCJvcGVuR3JhYiIsImRlZyIsIm1heCIsIm1pbiIsIk5hdmlnYXRpb24iLCJoaWdobGlnaHQiLCJpdGVtcyIsInNjcm9sbFRhcmdldCIsInNjcm9sbGluZ1JlbmRlcmVyIiwic2Nyb2xsaW5nUmVuZGVyZXJNZXRob2QiLCJ0aGF0Iiwic3R5bGUiLCJpdGVtIiwib25tb3VzZW92ZXIiLCJvbk1vdXNlT3Zlckl0ZW0iLCJvbmNsaWNrIiwib25DbGlja09uSXRlbSIsImVsZW1lbnQiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsInNlY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJvZmZzZXRUb3AiLCJkaXN0YW5jZSIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJzZXRCZXR3ZWVuIiwibnVtYmVyIiwiaW1hZ2VzTmFtZXMiLCJHYWxsZXJ5IiwibGVmdEJ1dHRvbiIsInJpZ2h0QnV0dG9uIiwiaW1hZ2VzIiwiY29udGFpbmVyUmlnaHQiLCJsb2FkSW1hZ2VzIiwibmFtZSIsImltZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhbHQiLCJwdXNoIiwic2xpZGVyIiwibW92ZSIsImltYWdlIiwib25SZXF1ZXN0Rm9yU2xpZGVzIiwid2hpY2giLCJzdGVwIiwibWF4UmlnaHQiLCJyaWdodCIsImVuYWJsZUFsbEJ1dHRvbnMiLCJkaXNhYmxlQnV0dG9uIiwiaSIsInNob3ciLCJzdW0iLCJjbGllbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwiU2xpZGVyIiwiaXNBY3RpdmUiLCJ0YXJnZXQiLCJoaWRkZW4iLCJjb2RlIiwiaW1hZ2VJbmRleCJdLCJtYXBwaW5n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O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDL1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7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ZCxtQkFBTyxLQUFLMUwsS0FBWjtBQUNIOzs7Ozs7a0JBWVU0TSxNIiwiZmlsZSI6Ii4vcHVibGljL3NjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDQ0MzU0NzA5NGE5ZGI3YWYyYzkiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvaW5kZXguc2FzcydcclxuaW1wb3J0IEFwcCBmcm9tICcuL3NjcmlwdHMvQXBwJ1xyXG5cclxud2luZG93LiQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG53aW5kb3cuJCQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLWZpbmlzaGVkJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgJCgnYm9keSA+IC5sb2FkaW5nJykucmVtb3ZlKCkgfSwgMTAwMClcclxufTtcclxuXHJcbndpbmRvdy5hcHAgPSBuZXcgQXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX0xpZ2h0LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX01lZGl1bS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYi53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWJfQm9sZC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnSVJBTlNhbnMnLCBzZXJpZjsgfVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmZmZmY7IH1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzOyB9XFxuICAgIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIuYWN0aXZlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XFxuICAgIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIgPiBpbWcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgICAgbWF4LWhlaWdodDogNzAlO1xcbiAgICAgIHotaW5kZXg6IDEwMDA7IH1cXG4gIGJvZHkgaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIGJvZHkgaGVhZGVyIGgxIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1NSU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNyksIHRyYW5zcGFyZW50KTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XFxuICAgICAgYm94LXNoYWRvdzogMCAtMTlweCAyMXB4IC0yNXB4ICNmNWY1ZjUsIDAgMTlweCAyMXB4IC0yNXB4ICNmNWY1ZjU7XFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAgICAgYm9keSBoZWFkZXIgaDEge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgIHRvcDogNzAlO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH0gfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAgICAgYm9keSBoZWFkZXIgaDEge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg1NiwgNTYsIDU2LCAwKSwgcmdiYSg1NiwgNTYsIDU2LCAwLjMpLCAjMzgzODM4LCAjMzgzODM4KTtcXG4gICAgICAgICAgdG9wOiA4MCU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgcGFkZGluZzogMjAwcHggMjAwcHg7IH0gfVxcbiAgICBib2R5IGhlYWRlciBjYW52YXMge1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjNjY2KTsgfVxcbiAgYm9keSBuYXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IC00cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYmFja2dyb3VuZDogIzJiMmIyYjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNTU1LCAjMmIyYjJiLCAjMmIyYjJiLCAjNTU1KTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICBib2R5IG5hdiB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzM4MzgzOCwgIzJiMmIyYiwgIzJiMmIyYiwgIzNhM2EzYSk7IH0gfVxcbiAgICBib2R5IG5hdiAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogIzQ0NDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICBib2R5IG5hdiAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcbiAgICBib2R5IG5hdjpob3ZlciAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICBib2R5IG5hdiB1bCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICBib2R5IG5hdiB1bCB7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxcbiAgICAgIGJvZHkgbmF2IHVsIGxpIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICAgICAgY29sb3I6ICNEREQ7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDsgfSB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzOyB9IH1cXG4gICAgICAgIGJvZHkgbmF2IHVsIGxpOmFjdGl2ZSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuNjsgfVxcbiAgYm9keSBtYWluIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGRkYsICNFRUUsICNGRkYpO1xcbiAgICBwYWRkaW5nOiA3MHB4IDA7IH1cXG4gICAgYm9keSBtYWluIHNlY3Rpb24ge1xcbiAgICAgIGRpcmVjdGlvbjogcnRsO1xcbiAgICAgIHdpZHRoOiA5MDBweDtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDU1cHggMDtcXG4gICAgICBjbGVhcjogYm90aDsgfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIHtcXG4gICAgICAgICAgd2lkdGg6IDgwJTsgfSB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbiB1bCB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH0gfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgd2lkdGg6IDMwNXB4OyB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gPiBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87IH0gfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgICAgICBmbG9hdDogbm9uZTsgfSB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA1MHB4OyB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSB7XFxuICAgICAgICAgICAgdG9wOiAwOyB9IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUgaDIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIHAge1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J3BvcnRmb2xpbyddIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdwb3J0Zm9saW8nXSA+IGltZyB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J3RlYWNoaW5nJ10ge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10ge1xcbiAgICAgICAgaGVpZ2h0OiA0MDBweDsgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSB7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4OyB9IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5jb250YWluZXIge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgfVxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7IH0gfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgaW1nIHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxuICAgICAgICAgICAgLW1vei11c2VyLWRyYWc6IG5vbmU7XFxuICAgICAgICAgICAgLW1zLXVzZXItZHJhZzogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLWRyYWc6IG5vbmU7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgaW1nOmhvdmVyIHtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODU7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IGltZzphY3RpdmUge1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uLmFjdGl2ZSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24uYWN0aXZlIHtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uOmhvdmVyLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24gaSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24gaSB7XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICAgICAgICAgIHdpZHRoOiA1cHg7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICAgIGxlZnQ6IDE4cHg7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24gaTpiZWZvcmUsIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIGk6YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyAnO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNnB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTEycHgsIDEycHgpOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24ge1xcbiAgICAgICAgICAgIGxlZnQ6IDA7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uIGkge1xcbiAgICAgICAgICAgICAgdG9wOiAzOSU7XFxuICAgICAgICAgICAgICBsZWZ0OiAxNnB4O1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZVooMTgwZGVnKTsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10ge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDY1MHB4OyB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgfSB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gaWZyYW1lIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDsgfVxcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMge1xcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7IH0gfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCB7XFxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgYSB7XFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgYTpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQUFBOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgaS5mYSB7XFxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgaS5mYS5mYS1tYXAtbWFya2VyIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhLmZhLXBob25lIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzM2FhZTA7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGkuZmEuZmEtZmF4IHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxZWFhNmQ7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGkuZmEuZmEtZW52ZWxvcGUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2U2YmUxYjsgfVxcbiAgYm9keSBmb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgYm9keSBmb290ZXIgc3BhbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgICAgYm9keSBmb290ZXIgc3BhbiBpIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmODMzOyB9XFxuICAgICAgYm9keSBmb290ZXIgc3BhbiBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMXB4KTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XFxuICAgICAgICBib2R5IGZvb3RlciBzcGFuIGE6aG92ZXIge1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxcHgpIHRyYW5zbGF0ZVkoLTVweCkgc2NhbGUoMS4wMik7XFxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDEwcHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuMSksIDAgNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAwLCAwLjI1KSwgMCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuOCk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyPy11cmwhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvYm9TY2VuZSBmcm9tICcuL1JvYm9TY2VuZSdcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknXHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib1NjZW5lID0gbmV3IFJvYm9TY2VuZSgnYm9keSA+IGhlYWRlcicpO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKCdib2R5ID4gbmF2Jyk7XHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5ID0gbmV3IEdhbGxlcnkoJ2JvZHkgLmdhbGxlcnknKTtcclxuICAgICAgICB0aGlzLnJvYm90ID0gdGhpcy5yb2JvU2NlbmUucm9ib3Q7XHJcbiAgICAgICAgLy8gTW92aW5nIHJvYm90IGxpc3RlbmVyc1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vbk1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gR3JhYmJpbmcgbGlzdGVuZXJzXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBGb2N1c2luZyBsaXN0ZW5lcnNcclxuICAgICAgICAkKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHRoaXMuZm9jdXMgPSBmYWxzZSk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLmZvY3VzID0gdHJ1ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4gdGhpcy5mb2N1cyA9IGZhbHNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHRoaXMuZm9jdXMgPSB0cnVlKTtcclxuICAgICAgICB0aGlzLmZvY3VzaW5nVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdXRvUm90YXRpb25SZW5kZXJlciA9IHdpbmRvdy5mcmFtZXNGbG93LnJlbmRlcih0aGlzLmF1dG9Sb3RhdGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBvbk1vdmUgKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICB0cnkgeyBldmVudCA9IGV2ZW50LnRvdWNoZXNbMF0gfSBjYXRjaCAoZSkgeyAvKiBub3RoaW5nICovIH1cclxuICAgICAgICB0aGlzLm1vdmVSb2JvdFRvKGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSlcclxuICAgIH1cclxuICAgIG1vdmVSb2JvdFRvICh4LCB5KSB7XHJcbiAgICAgICAgY29uc3QgeFJhdGUgPSB4IC8gd2luZG93LmlubmVyV2lkdGggLSAwLjU7XHJcbiAgICAgICAgY29uc3QgeVJhdGUgPSB5IC8gd2luZG93LmlubmVySGVpZ2h0IC0gMC41O1xyXG4gICAgICAgIHRoaXMucm9ib3Qucm90YXRlWSA9IHhSYXRlICogTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVggPSB5UmF0ZSAqIE1hdGguUEkvMyAtIE1hdGguUEkvNjtcclxuICAgICAgICB0aGlzLnJvYm90LmFybUFuZ2xlID0geVJhdGUgKiBNYXRoLlBJLzIgKyAwLjA1O1xyXG4gICAgICAgIHRoaXMucm9ib3Qud3Jpc3RBbmdsZSA9IHlSYXRlICogLU1hdGguUEkvM1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZURvd24gKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QuY2xvc2VHcmFiKClcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5ncmFiQW5nbGUgPSAwLjVcclxuICAgIH1cclxuICAgIHNldCBmb2N1cyAoaXNGb2N1c2VkKSB7XHJcbiAgICAgICAgaWYgKGlzRm9jdXNlZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c2luZ1RpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9Sb3RhdGlvblJlbmRlcmVyLnBhdXNlKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzaW5nVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmF1dG9Sb3RhdGlvblJlbmRlcmVyLnBsYXkoKSB9LCAyMDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGF1dG9Sb3RhdGUgKGZyYW1lKSB7XHJcbiAgICAgICAgY29uc3QgdGhldGEgPSBmcmFtZS5pbmRleC8yNTA7XHJcbiAgICAgICAgdGhpcy5tb3ZlUm9ib3RUbyhcclxuICAgICAgICAgICAgKHdpbmRvdy5pbm5lcldpZHRoICsgTWF0aC5jb3ModGhldGEpICogd2luZG93LmlubmVyV2lkdGgpLzIsXHJcbiAgICAgICAgICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgKyBNYXRoLnNpbih0aGV0YSkgKiB3aW5kb3cuaW5uZXJIZWlnaHQpLzJcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL0FwcC5qcyIsImltcG9ydCAnZnJhbWVzZmxvdydcclxuaW1wb3J0IFJvYm90IGZyb20gJy4vUm9ib3QnXHJcblxyXG52YXIgcG9zdHByb2Nlc3NpbmcgPSB7fTtcclxudmFyIGJva2VoX3BhcmFtcyA9IHtcclxuICAgIHpuZWFyOiAwLjEsXHJcbiAgICB6ZmFyOiAxMCxcclxuICAgIHNoYWRlckZvY3VzOiBmYWxzZSxcclxuICAgIGZzdG9wOiAyMCxcclxuICAgIG1heGJsdXI6IDIsXHJcbiAgICBzaG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgZm9jYWxEZXB0aDogMS40LFxyXG4gICAgbWFudWFsZG9mOiBmYWxzZSxcclxuICAgIHZpZ25ldHRpbmc6IGZhbHNlLFxyXG4gICAgZGVwdGhibHVyOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkIDogMC41LFxyXG4gICAgZ2FpbjogMC4yLFxyXG4gICAgYmlhczogMixcclxuICAgIGZyaW5nZTogMyxcclxuICAgIGZvY2FsTGVuZ3RoOiAyMCxcclxuICAgIG5vaXNlOiB0cnVlLFxyXG4gICAgcGVudGFnb246IGZhbHNlLFxyXG4gICAgZGl0aGVyaW5nOiAwXHJcbn07XHJcblxyXG5jbGFzcyBSb2JvU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDA7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmZyYW1lc0Zsb3cucmVuZGVyKHRoaXMucmVuZGVyLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICAvLyBDcmVhdGluZyBTY2VuZVxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICBjb25zdCBmb2dDb2xvciA9IDB4ZjNmM2YzO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcihmb2dDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKGZvZ0NvbG9yLCA0LCA1MCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgQ2FtZXJhXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMSwgMzAwKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTM7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDE7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucm90YXRpb24ueCA9IDAuMjU7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jYW1lcmEpO1xyXG4gICAgICAgIC8vIFBvc3QgUHJvY2Nlc3NpbmdcclxuICAgICAgICB0aGlzLm1hdGVyaWFsX2RlcHRoID0gbmV3IFRIUkVFLk1lc2hEZXB0aE1hdGVyaWFsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UG9zdFByb2Nlc3NpbmcoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tlaFBhcmFtcygpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIFJlbmRlcmVyXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5nYW1tYUlucHV0ICA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmdhbW1hT3V0cHV0ID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnJlbmRlclJldmVyc2VTaWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgTGlnaHRzXHJcbiAgICAgICAgdGhpcy5wb2ludExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDAuNSk7IC8vIFBvaW50XHJcbiAgICAgICAgdGhpcy5wb2ludExpZ2h0LnBvc2l0aW9uLnogPSAxMDtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBvaW50TGlnaHQpO1xyXG4gICAgICAgIHRoaXMuaGVtaXNwaGVyZUxpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCggMHhmZmZmZmYsIDB4MDAwMDAwLCAxICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5oZW1pc3BoZXJlTGlnaHQpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIGdyb3VuZFxyXG4gICAgICAgIHRoaXMuZ3JpZEhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKCA3MCwgNDUgKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdyaWRIZWxwZXIpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIFJvYm90XHJcbiAgICAgICAgdGhpcy5yb2JvdCA9IG5ldyBSb2JvdCh0aGlzKVxyXG4gICAgfVxyXG4gICAgc2V0Qm9va2VoUGFyYW0gKGNoYW5nZXMpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGJva2VoX3BhcmFtcywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb29rZWhQYXJhbXMoKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQm9va2VoUGFyYW1zICgpIHtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGJva2VoX3BhcmFtcykgaWYoZSBpbiBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3JtcykgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbZV0udmFsdWUgPSBib2tlaF9wYXJhbXNbZV07XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ6bmVhclwiXS52YWx1ZSA9IGJva2VoX3BhcmFtcy56bmVhcjtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInpmYXJcIl0udmFsdWUgPSBib2tlaF9wYXJhbXMuemZhcjtcclxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRGb2NhbExlbmd0aCggYm9rZWhfcGFyYW1zLmZvY2FsTGVuZ3RoIClcclxuICAgIH1cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZyAoKSB7XHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmcuc2NlbmUgID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSggLXRoaXMud2lkdGggLyAyLCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCAtNjAsIDYwICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmcuc2NlbmUuYWRkKCBwb3N0cHJvY2Vzc2luZy5jYW1lcmEgKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxyXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcclxuICAgICAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JGb3JtYXRcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlRGVwdGggPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHBhcmFtcyApO1xyXG4gICAgICAgIGxldCBib2tlaF9zaGFkZXIgPSBUSFJFRS5Cb2tlaFNoYWRlcjtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGJva2VoX3NoYWRlci51bmlmb3JtcyApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widENvbG9yXCJdLnZhbHVlID0gcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IudGV4dHVyZTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInREZXB0aFwiXS52YWx1ZSA9IHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoLnRleHR1cmU7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0ZXh0dXJlV2lkdGhcIiBdLnZhbHVlID0gdGhpcy53aWR0aDtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRleHR1cmVIZWlnaHRcIl0udmFsdWUgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5tYXRlcmlhbEJva2VoID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIHVuaWZvcm1zOiBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3JtcyxcclxuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBib2tlaF9zaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogYm9rZWhfc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgICAgICBkZWZpbmVzOiB7IFJJTkdTOiAzLCBTQU1QTEVTOiAyfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLCBwb3N0cHJvY2Vzc2luZy5tYXRlcmlhbEJva2VoICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmcuc2NlbmUuYWRkKCBwb3N0cHJvY2Vzc2luZy5xdWFkICk7XHJcblx0fVxyXG4gICAgb25SZXNpemUgKCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSBwb3N0cHJvY2Vzc2luZy5jYW1lcmEuYXNwZWN0ID0gdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcblx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yLCB0cnVlKTtcclxuXHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxfZGVwdGg7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlRGVwdGgsIHRydWUpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIocG9zdHByb2Nlc3Npbmcuc2NlbmUsIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9ib1NjZW5lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvUm9ib1NjZW5lLmpzIiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX0ZyYW1lc0Zsb3cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdHZhciBfRnJhbWVzRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GcmFtZXNGbG93KTtcblxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cdC8vIGRlZmluaW5nIGZyYW1lc0Zsb3cgYXMgYSBnbG9iYWwgb2JqZWN0XG5cdGlmICghKHdpbmRvdy5mcmFtZXNGbG93IGluc3RhbmNlb2YgX0ZyYW1lc0Zsb3cyLmRlZmF1bHQpKSB7XG5cdCAgICAvLyBpZiBpdCBkaWRuJ3QgZGVmaW5lIGJlZm9yZVxuXHQgICAgd2luZG93LmZyYW1lc0Zsb3cgPSBuZXcgX0ZyYW1lc0Zsb3cyLmRlZmF1bHQoKTtcblx0fVxuXG5cdC8vIGV4cG9ydFxuXHRleHBvcnRzLmRlZmF1bHQgPSB3aW5kb3cuZnJhbWVzRmxvdztcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHR2YXIgX1JlbmRlcmVyQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5cdHZhciBfUmVuZGVyZXJBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJlckFycmF5KTtcblxuXHR2YXIgX1JlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgX1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyKTtcblxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0Ly8gQ29tcGF0aWJpbGl0eSBmb3IgYWxsIGJyb3dzZXJzIC0gUGF1bCBJcmlzaCB2ZXJzaW9uXG5cdHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuXHQgICAgfTtcblx0fVxuXG5cdC8vIEZyYW1lc0Zsb3dcblx0KCk7XG5cdHZhciBGcmFtZXNGbG93ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gRnJhbWVzRmxvdygpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRnJhbWVzRmxvdyk7XG5cblx0ICAgICAgICB0aGlzLmZyYW1lcyA9IDA7XG5cdCAgICAgICAgdGhpcy5fZnBzID0gMzA7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuXHQgICAgICAgICAgICBtaW5pbXVtQWNjZXB0YWJsZUZQUzogMzBcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMucmVuZGVyZXJzID0gbmV3IF9SZW5kZXJlckFycmF5Mi5kZWZhdWx0KCk7XG5cdCAgICAgICAgdGhpcy5wZXJmb3JtYW5jZSA9IHtcblx0ICAgICAgICAgICAgbG9nczogbmV3IEFycmF5KDEwMCksXG5cdCAgICAgICAgICAgIGxvZ3NQb2ludGVyOiAwLFxuXHQgICAgICAgICAgICBsYXN0VGltZVN0YW1wOiB1bmRlZmluZWQsXG5cdCAgICAgICAgICAgIGxhc3RGcmFtZUZQUzogMzAsXG5cdCAgICAgICAgICAgIHJhdGlvOiAxLFxuXHQgICAgICAgICAgICBzdGF0dXM6IDAsXG5cdCAgICAgICAgICAgIGF2ZXJhZ2U6IHtcblx0ICAgICAgICAgICAgICAgIGZwczogMzAsXG5cdCAgICAgICAgICAgICAgICByYXRpbzogMSxcblx0ICAgICAgICAgICAgICAgIHN0YXR1czogMFxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnJlcXVlc3RMb29wKCk7XG5cdCAgICB9XG5cblx0ICAgIF9jcmVhdGVDbGFzcyhGcmFtZXNGbG93LCBbe1xuXHQgICAgICAgIGtleTogJ2dldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChpZCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZ2V0KGlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0QWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEFsbEJ5Q2xhc3MnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxCeUNsYXNzKGNsYXNzTmFtZSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZmlsdGVyKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmNsYXNzID09IGNsYXNzTmFtZTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZVJlbmRlcmVyQnlJZCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVJlbmRlcmVyQnlJZChpZCkge1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5yZW1vdmUoaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdjaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKHJhdGUpIHtcblx0ICAgICAgICAgICAgdmFyIGlzR2xvYmFsQ2hlY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG5cdCAgICAgICAgICAgIHZhciBlcnJvciA9IG51bGw7XG5cdCAgICAgICAgICAgIHZhciBwb2ludGVyID0gaXNHbG9iYWxDaGVjayA/ICdhbnknIDogJ3RoaXMnO1xuXHQgICAgICAgICAgICBpZiAocmF0ZSA8IDApIGVycm9yID0gJ0ZQUyBtdXN0IG5vdCBiZSBhIG5lZ2F0aXZlIG51bWJlciEnO2Vsc2UgaWYgKHJhdGUgPCAzMCAmJiByYXRlID4gMCAmJiAzMCAvIHJhdGUgJSAxICE9PSAwKSBlcnJvciA9ICdpZiBGUFMgaXMgbGVzcyB0aGFuIDMwZnBzLCBpdCBoYXZlIHRvIGJlIGxpa2UgdGhpczogKDMwIC8gRlBTKSBzaG91bGQgYmUgaW50ZWdlcic7ZWxzZSBpZiAocmF0ZSA+IDMwICYmIHJhdGUgJSAzMCAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIG1vcmUgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6IChGUFMgJSAzMCA9PSAwKSc7XG5cdCAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkgdGhyb3cgJ2NhblxcJ3Qgc2V0ICcgKyByYXRlICsgJ2ZwcyBmb3IgdGhpcyByZW5kZXJlci4gUkVBU09OOiA8JyArIGVycm9yICsgJz4nO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5QWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheUFsbCgpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmdldEFsbFJlbmRlcmVycygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBsYXkoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZUFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlQWxsKCkge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB0aGlzLmdldEFsbFJlbmRlcmVycygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gX3N0ZXAyLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBhdXNlKCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihjbGFzc05hbWUsIGZ1bmMpIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgZnVuYyA9IGNsYXNzTmFtZTtcblx0ICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICcnO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfUmVuZGVyZXIyLmRlZmF1bHQodGhpcywge1xuXHQgICAgICAgICAgICAgICAgaWQ6IHRoaXMucmVuZGVyZXJzLmxlbmd0aCxcblx0ICAgICAgICAgICAgICAgIGNsYXNzOiBjbGFzc05hbWVcblx0ICAgICAgICAgICAgfSwgZnVuYyk7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuXHQgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXI7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ29uTGFnJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25MYWcobWluaW11bUZQUywgY2FsbGJhY2spIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBtaW5pbXVtRlBTID09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gbWluaW11bUZQUztlbHNlIHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUyA9IG1pbmltdW1GUFM7XG5cdCAgICAgICAgICAgIHRoaXMub25MYWdDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZWdpc3RlclBlcmZvcm1hbmNlTG9nJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyhyZW5kZXJUaW1lKSB7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGZwc1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA9IDEwMDAgLyByZW5kZXJUaW1lO1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBsYWdzXG5cdCAgICAgICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA8IHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUykgaWYgKHR5cGVvZiB0aGlzLm9uTGFnQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHRoaXMub25MYWdDYWxsYmFjayh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQU1xuXHQgICAgICAgICAgICAvLyBsb2dnaW5nXG5cdCAgICAgICAgICAgICk7dGhpcy5wZXJmb3JtYW5jZS5sb2dzW3RoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXJdID0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFM7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgPSAodGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlciArIDEpICUgMTAwO1xuXHQgICAgICAgICAgICAvLyBhbmFseXppbmcgbG9nc1xuXHQgICAgICAgICAgICB0aGlzLmFuYWx5emVQZXJmb3JtYW5jZSgpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdhbmFseXplUGVyZm9ybWFuY2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmFseXplUGVyZm9ybWFuY2UoKSB7XG5cdCAgICAgICAgICAgIHZhciBhbGxEYXRhID0gdGhpcy5wZXJmb3JtYW5jZS5sb2dzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBkYXRhID09ICdudW1iZXInO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGF2ZXJhZ2Ugb2YgZGF0YVxuXHQgICAgICAgICAgICApO3ZhciBGUFNTdW0gPSAwO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBhbGxEYXRhW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfc3RlcDMudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgRlBTU3VtICs9IGRhdGE7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyA9IEZQU1N1bSAvIGFsbERhdGEubGVuZ3RoO1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBwZXJmb3JtYW5jZSBwZXJjZW50YWdlXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyAvIDMwO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzIC8gMzA7XG5cdCAgICAgICAgICAgIC8vIGRlZmluaW5nIHN0YXR1c1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTKTtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdfZ2V0U3RhdHVzT2ZGUFMnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0U3RhdHVzT2ZGUFMoZnBzKSB7XG5cdCAgICAgICAgICAgIHZhciByYXRpbyA9IGZwcyAvIHRoaXMuZnBzO1xuXHQgICAgICAgICAgICB2YXIgc3RhdHVzID0gLTM7IC8vIFdPUlNUXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuMykgc3RhdHVzID0gLTI7IC8vIEJBRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjYpIHN0YXR1cyA9IC0xOyAvLyBOT1QgQkFEXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuOSkgc3RhdHVzID0gMDsgLy8gT0tcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMS4zKSBzdGF0dXMgPSAxOyAvLyBHT09EXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDEuNikgc3RhdHVzID0gMjsgLy8gRVhDRUxMRU5UXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDIpIHN0YXR1cyA9IDM7IC8vIEJFU1Rcblx0ICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVxdWVzdExvb3AnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0TG9vcCgpIHtcblx0ICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnJlcXVlc3RMb29wLmJpbmQodGhpcykpO1xuXHQgICAgICAgICAgICB0aGlzLmZyYW1lcysrO1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcigpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCAhPT0gdW5kZWZpbmVkKSB0aGlzLnJlZ2lzdGVyUGVyZm9ybWFuY2VMb2coRGF0ZS5ub3coKSAtIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCk7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcHM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUocmF0ZSwgdHJ1ZSk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBGcmFtZXNGbG93O1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gRnJhbWVzRmxvdztcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdHZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFJlbmRlcmVyKGZyYW1lc0Zsb3csIG9wdGlvbnMsIGZ1bmMpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG5cdCAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG5cdCAgICAgICAgdGhpcy5jbGFzcyA9IG9wdGlvbnMuY2xhc3MgfHwgJyc7XG5cdCAgICAgICAgdGhpcy5wcm9wcyA9IHtcblx0ICAgICAgICAgICAgaXNEZWJ1Z2luZzogZmFsc2Vcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMuZnJhbWVzRmxvdyA9IGZyYW1lc0Zsb3c7XG5cdCAgICAgICAgdGhpcy5fZnBzID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XG5cdCAgICAgICAgdGhpcy5mcmFtZXMgPSAwO1xuXHQgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gZmFsc2U7XG5cdCAgICAgICAgdGhpcy5yZW5kZXIoKTtcblx0ICAgIH1cblx0ICAgIC8vIFJlbmRlciBuZXh0IGZyYW1lXG5cblxuXHQgICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyLCBbe1xuXHQgICAgICAgIGtleTogJ25leHQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5mcmFtZXNGbG93LnJlbW92ZVJlbmRlcmVyQnlJZCh0aGlzLmlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlYnVnaW5nID0gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWJ1Z2luZyA9IGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdzaG91bGRSZW5kZXJUaGlzRnJhbWUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRSZW5kZXJUaGlzRnJhbWUoKSB7XG5cdCAgICAgICAgICAgIC8vIGFsbCBjb25kaXRpb25zIHRvIHBhdXNlIG9yIHBsYXkgcmVuZGVyaW5nXG5cdCAgICAgICAgICAgIHZhciBjb25kaXRpb25zID0gWyF0aGlzLnByb3BzLmlzRGVidWdpbmcsIHRoaXMuZnJhbWVzRmxvdy5mcmFtZXMgJSAoMzAgLyBNYXRoLm1pbih0aGlzLmZwcywgMzApKSA9PSAwXTtcblx0ICAgICAgICAgICAgdmFyIHJldCA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gY29uZGl0aW9uc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldCAmJiBjb25kO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0RnJhbWVPYmplY3RUb1JldHVybicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICByZW5kZXJlcjogdGhpcyxcblx0ICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmZyYW1lcyxcblx0ICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcHMsXG5cdCAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZToge1xuXHQgICAgICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyxcblx0ICAgICAgICAgICAgICAgICAgICByYXRpbzogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnJhdGlvLFxuXHQgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnN0YXR1cyxcblx0ICAgICAgICAgICAgICAgICAgICBhdmVyYWdlOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UuYXZlcmFnZVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHx8IHRoaXMuc2hvdWxkR29OZXh0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaXRlcmF0aW9uID0gMDtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmZwcyA+IDMwKSBpdGVyYXRpb24gPSBNYXRoLm1heCh0aGlzLmZwcywgMzApIC8gMzA7ZWxzZSBpdGVyYXRpb24gPSAzMCAvIHRoaXMuZnBzO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb247IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVzKys7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bmModGhpcy5nZXRGcmFtZU9iamVjdFRvUmV0dXJuKCkpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIGlmIChuZXdGUFMgPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXNGbG93LmNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKG5ld0ZQUyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnBzIHx8IHRoaXMuZnJhbWVzRmxvdy5mcHM7XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gUmVuZGVyZXI7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdHZhciBSZW5kZXJlckFycmF5ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gUmVuZGVyZXJBcnJheSgpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXJBcnJheSk7XG5cblx0ICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2FycmF5JykgdGhpcy5hcnIgPSBhcmdzWzBdO2Vsc2UgdGhpcy5hcnIgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KEFycmF5LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcblx0ICAgIH1cblxuXHQgICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyQXJyYXksIFt7XG5cdCAgICAgICAga2V5OiAnZ2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdzZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoaSwgdmFsKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyW2ldID0gdmFsO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncHVzaCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2godmFsKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyLnB1c2godmFsKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShpKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyW2ldID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB0aGlzLmFyci5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmaWx0ZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXIoY29uZEZ1bmMpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBSZW5kZXJlckFycmF5KHRoaXMuYXJyLmZpbHRlcihjb25kRnVuYykpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdlYWNoJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaChjYikge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgY2IoaXRlbSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAndG9BcnJheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFycjtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVtb3ZlKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICduZXh0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLm5leHQoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5wYXVzZSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5wbGF5KCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdsZW5ndGgnLFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnIubGVuZ3RoO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIuZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBSZW5kZXJlckFycmF5O1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXJBcnJheTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuSlNPTkxvYWRlcigpO1xyXG5cclxuY29uc3QgYmxhY2tNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCwgc2hpbmluZXNzOiAwIH0pO1xyXG5jb25zdCBkYXJrTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHg5OTk5OTksIHNoaW5pbmVzczogMTAwIH0pO1xyXG5jb25zdCBsaWdodE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ZWVlZWVlLCBzaGluaW5lc3M6IDcwIH0pO1xyXG5cclxuY29uc3Qgb2JqZWN0c05hbWVzID0gWydhcm0xJywgJ2FybTInLCAnZmluZ2VyJywgJ2hhbmQnLCAncmVzdCcsICdyb3RhdG9yJywgJ3dyaXN0JywgJ3dyaXN0Ym9uZSddO1xyXG5jb25zdCBsb2FkID0gKG9iamVjdE5hbWUpID0+IHtcclxuICAgIGNvbnN0IHVybCA9ICcuL2Fzc2V0cy9vYmplY3RzLycgKyBvYmplY3ROYW1lICsgJy5qc29uJztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBlcnIpID0+IHtcclxuICAgICAgICBsb2FkZXIubG9hZCh1cmwsIChnZW9tZXRyeSwgbWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwgPSBsaWdodE1hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PT0gJ2ZpbmdlcicpIG1hdGVyaWFsID0gYmxhY2tNYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKFsnd3Jpc3Rib25lJywgJ2hhbmQnLCAnYXJtMScsICdyZXN0J10uaW5jbHVkZXMob2JqZWN0TmFtZSkpIG1hdGVyaWFsID0gZGFya01hdGVyaWFsO1xyXG4gICAgICAgICAgICByZXNvbHZlKG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCkpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn07XHJcbmNvbnN0IGxvYWRBbGxPYmplY3RzQW5kUHV0SW4gPSAob2JqZWN0cykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QsIGVycikgPT4ge1xyXG4gICAgICAgIGxldCBsb2FkZWRDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgb2JqZWN0TmFtZSBvZiBvYmplY3RzTmFtZXMpIHtcclxuICAgICAgICAgICAgbG9hZChvYmplY3ROYW1lKS50aGVuKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RzW29iamVjdE5hbWVdID0gbWVzaDtcclxuICAgICAgICAgICAgICAgIGxvYWRlZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZGVkQ291bnQgPT09IG9iamVjdHNOYW1lcy5sZW5ndGgpIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5jbGFzcyBSb2JvdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocm9ib1NjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvU2NlbmUgPSByb2JvU2NlbmU7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHJvYm9TY2VuZS5zY2VuZTtcclxuICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhcnRzID0ge307XHJcbiAgICAgICAgbG9hZEFsbE9iamVjdHNBbmRQdXRJbih0aGlzLnBhcnRzKS50aGVuKHRoaXMucmVhZHkuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIHJlYWR5ICgpIHtcclxuICAgICAgICAvLyBDb21iaW5pbmcgdGhpbmdzIHRvZ2V0aGVyXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yZXN0LmFkZCh0aGlzLnBhcnRzLnJvdGF0b3IpO1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5wb3NpdGlvbi55ID0gMztcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3IuYWRkKHRoaXMucGFydHMuYXJtMSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnBvc2l0aW9uLnkgPSAyO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5hZGQodGhpcy5wYXJ0cy5hcm0yKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIucG9zaXRpb24ueSA9IDQuNTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIuYWRkKHRoaXMucGFydHMud3Jpc3QpO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3QuYWRkKHRoaXMucGFydHMud3Jpc3Rib25lKTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5wb3NpdGlvbi55ID0gNy41O1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnBvc2l0aW9uLnggPSAtMC4wNjtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5hZGQodGhpcy5wYXJ0cy5oYW5kKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmhhbmQuYWRkKHRoaXMucGFydHMuZmluZ2VyKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi55ID0gMS40O1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnggPSAwLjI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueiA9IDAuMzU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueCA9IDAuMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIgPSB0aGlzLnBhcnRzLmZpbmdlci5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMucGFydHMuaGFuZC5hZGQodGhpcy5wYXJ0cy5maW5nZXIyKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueSA9IE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnBvc2l0aW9uLnggPSAtMC40O1xyXG5cclxuICAgICAgICAvLyBhZGRpbmcgcmVzdCB0byBzY2VuZVxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGFydHMucmVzdCk7XHJcblxyXG4gICAgICAgIC8vIEhpZGRlbiBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdGhpcy5yb3RhdGVZID0gLTAuNDtcclxuICAgICAgICB0aGlzLnJvdGF0ZVggPSAwO1xyXG4gICAgICAgIHRoaXMuYXJtQW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMud3Jpc3RBbmdsZSA9IC1NYXRoLlBJLzg7XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSBNYXRoLlBJLzY7XHJcblxyXG4gICAgICAgIC8vIFNldCBpbml0YWwgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkgPSB0aGlzLl9yb3RhdGVZO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54ID0gdGhpcy5fcm90YXRlWDtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCA9IHRoaXMuX2FybUFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLnggPSB0aGlzLl93cmlzdEFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGU7XHJcblxyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVZIChkZWcpIHtcclxuICAgICAgICB0aGlzLl9yb3RhdGVZID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRlWSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVlcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVYIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzMpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgNypNYXRoLlBJLzEyKTtcclxuICAgICAgICB0aGlzLl9yb3RhdGVYID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRlWCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVhcclxuICAgIH1cclxuICAgIHNldCBhcm1BbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5QSSAtIGRlZztcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzEyKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIDUqTWF0aC5QSS82KTtcclxuICAgICAgICB0aGlzLl9hcm1BbmdsZSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IGFybUFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJtQW5nbGVcclxuICAgIH1cclxuICAgIHNldCB3cmlzdEFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzIpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgTWF0aC5QSS8yKTtcclxuICAgICAgICB0aGlzLl93cmlzdEFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgd3Jpc3RBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dyaXN0QW5nbGVcclxuICAgIH1cclxuICAgIHNldCBncmFiQW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgMCk7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCBNYXRoLlBJKTtcclxuICAgICAgICBkZWcgLT0gTWF0aC5QSS82O1xyXG4gICAgICAgIHRoaXMuX2dyYWJBbmdsZSA9IC1kZWcvMlxyXG4gICAgfVxyXG4gICAgZ2V0IGdyYWJBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIC0oMip0aGlzLl9ncmFiQW5nbGUtTWF0aC5QSS82KVxyXG4gICAgfVxyXG4gICAgY2xvc2VHcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IDBcclxuICAgIH1cclxuICAgIG9wZW5HcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IE1hdGguUEkvMlxyXG4gICAgfVxyXG4gICAgdG9nZ2xlR3JhYiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhYkFuZ2xlID4gTWF0aC5QSS8zKSB0aGlzLmNsb3NlR3JhYigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5vcGVuR3JhYigpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkgKz0gKHRoaXMuX3JvdGF0ZVkgLSB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLnggKz0gKHRoaXMuX3JvdGF0ZVggLSB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLnggKz0gKHRoaXMuX2FybUFuZ2xlIC0gdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLnggKz0gKHRoaXMuX3dyaXN0QW5nbGUgLSB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56KSAvIDM7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueikgLyAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm90LmpzIiwiY2xhc3MgTmF2aWdhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSAkKHF1ZXJ5ICsgJyAuc2VsZWN0LWhpZ2hsaWdodCcpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSAkJChxdWVyeSArICcgbGknKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdSZW5kZXJlciA9IHdpbmRvdy5mcmFtZXNGbG93LnJlbmRlcih0aGlzLnNjcm9sbGluZ1JlbmRlcmVyTWV0aG9kLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgKCkgPT4gdGhpcy5zY3JvbGxpbmdSZW5kZXJlci5wYXVzZSgpKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnNjcm9sbGluZ1JlbmRlcmVyLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuc3R5bGUud2lkdGggPSAxMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCArICclJztcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgaXRlbS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHsgdGhhdC5vbk1vdXNlT3Zlckl0ZW0odGhpcykgfTtcclxuICAgICAgICAgICAgaXRlbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyB0aGF0Lm9uQ2xpY2tPbkl0ZW0odGhpcykgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlT3Zlckl0ZW0gKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5zdHlsZS5sZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0ICsgJ3B4J1xyXG4gICAgfVxyXG4gICAgb25DbGlja09uSXRlbSAoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSAkKGBbZGF0YS10aXRsZT0ke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKX1dYCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgICB0aGlzLnNjcm9sbGluZ1JlbmRlcmVyLnBsYXkoKVxyXG4gICAgfVxyXG4gICAgc2Nyb2xsaW5nUmVuZGVyZXJNZXRob2QgKGZyYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLm1pbih0aGlzLnNjcm9sbFRhcmdldCwgKGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSkgLSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgd2luZG93LnNjcm9sbFkgKyBkaXN0YW5jZS8xMCk7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgMTApIGZyYW1lLnJlbmRlcmVyLnBhdXNlKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL05hdmlnYXRpb24uanMiLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4vU2xpZGVyJ1xyXG5cclxuY29uc3Qgc2V0QmV0d2VlbiA9IChudW1iZXIsIG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obnVtYmVyLCBtYXgpLCBtaW4pXHJcbn07XHJcblxyXG5jb25zdCBpbWFnZXNOYW1lcyA9IFsnQUJCLVJvYm90LnBuZycsICdEdXJyUm9ib3QuanBnJywgJ01vdG9tYW5Sb2JvdC5qcGcnLCAnUm9kaXAuanBnJ107XHJcblxyXG5jbGFzcyBHYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbiA9ICQocXVlcnkgKyAnID4gLmxlZnQtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbiA9ICQocXVlcnkgKyAnID4gLnJpZ2h0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSArICcgPiAuY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lclJpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKVxyXG4gICAgfVxyXG4gICAgbG9hZEltYWdlcyAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBpbWFnZXNOYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICcuL2Fzc2V0cy9pbWFnZXMvZ2FsbGVyeS8nICsgbmFtZTtcclxuICAgICAgICAgICAgaW1nLmFsdCA9ICfYp9iq2YjZhdin2LPbjNmI2YYg2LXZhti52KrbjCDYotix24zYp9mG2KcnO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKGltZyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlcignYm9keSA+IC5mdWxsLXZpZXctc2xpZGVyJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5tb3ZlKC0zMDApO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMubW92ZSgzMDApO1xyXG4gICAgICAgIGZvciAobGV0IGltYWdlIG9mIHRoaXMuaW1hZ2VzKSBpbWFnZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0Lm9uUmVxdWVzdEZvclNsaWRlcyh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB3aWR0aCAoKSB7XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMpIHN1bSArPSBpbWFnZS5jbGllbnRXaWR0aDtcclxuICAgICAgICByZXR1cm4gc3VtXHJcbiAgICB9XHJcbiAgICBnZXQgbWF4UmlnaHQgKCkge1xyXG4gICAgICAgIHJldHVybiAtKHRoaXMud2lkdGggLSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGgpXHJcbiAgICB9XHJcbiAgICBkaXNhYmxlQnV0dG9uICh3aGljaCkge1xyXG4gICAgICAgIHRoaXNbd2hpY2ggKyAnQnV0dG9uJ10uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuICAgIGVuYWJsZUFsbEJ1dHRvbnMgKCkge1xyXG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbW92ZSAoc3RlcCkge1xyXG4gICAgICAgIGNvbnN0IG1heFJpZ2h0ID0gdGhpcy5tYXhSaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lclJpZ2h0ID0gc2V0QmV0d2Vlbih0aGlzLmNvbnRhaW5lclJpZ2h0ICsgc3RlcCwgbWF4UmlnaHQsIDApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gdGhpcy5jb250YWluZXJSaWdodCArICdweCc7XHJcbiAgICAgICAgdGhpcy5lbmFibGVBbGxCdXR0b25zKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyUmlnaHQgPT09IG1heFJpZ2h0KSB0aGlzLmRpc2FibGVCdXR0b24oJ2xlZnQnKTtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJSaWdodCA9PT0gMCkgdGhpcy5kaXNhYmxlQnV0dG9uKCdyaWdodCcpXHJcbiAgICB9XHJcbiAgICBvblJlcXVlc3RGb3JTbGlkZXMgKGltYWdlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmltYWdlcykgaWYgKHRoaXMuaW1hZ2VzW2ldID09PSBpbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5zaG93KGkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9HYWxsZXJ5LmpzIiwiY29uc3Qgc2V0QmV0d2VlbiA9IChudW1iZXIsIG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obnVtYmVyLCBtYXgpLCBtaW4pXHJcbn07XHJcblxyXG5jbGFzcyBTbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5LCBnYWxsZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gJChxdWVyeSArICcgaW1nJyk7XHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5ID0gZ2FsbGVyeTtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuY29udGFpbmVyKSB0aGlzLmhpZGRlbigpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnICYmIHRoaXMuaXNBY3RpdmUpIHRoaXMuaGlkZGVuKCk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dSaWdodCcgJiYgdGhpcy5pc0FjdGl2ZSkgdGhpcy5pbWFnZUluZGV4LS07XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dMZWZ0JyAmJiB0aGlzLmlzQWN0aXZlKSB0aGlzLmltYWdlSW5kZXgrKztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0IGltYWdlSW5kZXggKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IHNldEJldHdlZW4oaW5kZXgsIDAsIHRoaXMuZ2FsbGVyeS5pbWFnZXMubGVuZ3RoLTEpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5nYWxsZXJ5LmltYWdlc1t0aGlzLmluZGV4XS5zcmM7XHJcbiAgICB9XHJcbiAgICBnZXQgaW1hZ2VJbmRleCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhcclxuICAgIH1cclxuICAgIHNob3cgKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH1cclxuICAgIGhpZGRlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1NsaWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=