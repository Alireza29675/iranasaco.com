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
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: #ffffff; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body .full-view-slider {\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.6);\n    transition-duration: 0.3s; }\n    body .full-view-slider.active {\n      opacity: 1;\n      pointer-events: auto; }\n    body .full-view-slider > img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      max-width: 80%;\n      max-height: 70%;\n      z-index: 1000; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    overflow: hidden; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n      @media (max-width: 1000px) {\n        body header h1 {\n          font-size: 20px;\n          width: 80%;\n          text-align: center;\n          white-space: normal; } }\n      @media (max-width: 460px) {\n        body header h1 {\n          background: linear-gradient(rgba(56, 56, 56, 0), rgba(56, 56, 56, 0.3), #383838, #383838);\n          top: 80%;\n          font-weight: normal;\n          font-size: 22px;\n          padding: 200px 200px; } }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    @media (max-width: 650px) {\n      body nav {\n        background: linear-gradient(#383838, #2b2b2b, #2b2b2b, #3a3a3a); } }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 25%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n      @media (max-width: 650px) {\n        body nav .select-highlight {\n          background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));\n          height: 25%;\n          width: 100%; } }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      @media (max-width: 650px) {\n        body nav ul {\n          flex-direction: column; } }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 16px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        @media (max-width: 1000px) {\n          body nav ul li {\n            flex-basis: auto;\n            flex-grow: 1;\n            font-size: 13px; } }\n        @media (max-width: 650px) {\n          body nav ul li {\n            border-bottom: 1px solid #333; } }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF);\n    padding: 70px 0; }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: auto;\n      padding: 55px 0;\n      clear: both; }\n      @media (max-width: 1000px) {\n        body main section {\n          width: 80%; } }\n      @media (max-width: 750px) {\n        body main section {\n          text-align: center; }\n          body main section ul {\n            text-align: right; } }\n      body main section > img {\n        float: left;\n        width: 305px; }\n        @media (max-width: 900px) {\n          body main section > img {\n            width: 190px;\n            margin: auto; } }\n        @media (max-width: 750px) {\n          body main section > img {\n            float: none; } }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        @media (max-width: 900px) {\n          body main section article {\n            top: 0; } }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 27px; }\n      body main section[data-title='portfolio'] {\n        padding-top: 40px; }\n        body main section[data-title='portfolio'] > img {\n          margin-top: 80px;\n          margin-right: 15px; }\n      body main section[data-title='teaching'] {\n        height: 750px;\n        padding-top: 30px; }\n      body main section[data-title='gallery'] {\n        height: 400px; }\n        body main section[data-title='gallery'] .gallery {\n          background: #222;\n          margin-top: 20px;\n          overflow: hidden;\n          position: relative; }\n          body main section[data-title='gallery'] .gallery .container {\n            position: relative; }\n          body main section[data-title='gallery'] .gallery img {\n            cursor: pointer;\n            height: 200px;\n            transition-duration: 0.2s;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            -webkit-user-drag: none;\n            -moz-user-drag: none;\n            -ms-user-drag: none;\n            user-drag: none; }\n            body main section[data-title='gallery'] .gallery img:hover {\n              opacity: 0.85;\n              transform: scale(0.95); }\n            body main section[data-title='gallery'] .gallery img:active {\n              opacity: 0.5;\n              transition-duration: 0.1s;\n              transform: scale(0.9); }\n          body main section[data-title='gallery'] .gallery .container {\n            flex-wrap: nowrap;\n            display: flex;\n            flex-direction: row;\n            right: 0;\n            transition-duration: 0.5s; }\n          body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n            width: 50px;\n            height: 100px;\n            background: rgba(0, 0, 0, 0.6);\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            opacity: 0.3; }\n            body main section[data-title='gallery'] .gallery .left-button.active, body main section[data-title='gallery'] .gallery .right-button.active {\n              cursor: pointer;\n              opacity: 0.8;\n              transition-duration: 0.3s; }\n              body main section[data-title='gallery'] .gallery .left-button.active:hover, body main section[data-title='gallery'] .gallery .right-button.active:hover {\n                opacity: 1; }\n            body main section[data-title='gallery'] .gallery .left-button i, body main section[data-title='gallery'] .gallery .right-button i {\n              position: absolute;\n              background: white;\n              width: 5px;\n              height: 30px;\n              top: 50%;\n              left: 18px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%); }\n              body main section[data-title='gallery'] .gallery .left-button i:before, body main section[data-title='gallery'] .gallery .right-button i:before {\n                content: ' ';\n                position: absolute;\n                background: white;\n                width: 6px;\n                height: 30px;\n                transform: rotate(90deg) translate(-12px, 12px); }\n          body main section[data-title='gallery'] .gallery .left-button {\n            left: 0; }\n            body main section[data-title='gallery'] .gallery .left-button i {\n              top: 39%;\n              left: 16px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%) rotateZ(180deg); }\n          body main section[data-title='gallery'] .gallery .right-button {\n            right: 0; }\n      body main section[data-title='contact'] {\n        padding-top: 20px;\n        height: 650px; }\n        body main section[data-title='contact'] iframe {\n          margin-top: 20px; }\n        body main section[data-title='contact'] .details {\n          margin-top: 40px; }\n          body main section[data-title='contact'] .details p {\n            margin: 6px;\n            font-size: 16px; }\n            body main section[data-title='contact'] .details p a {\n              text-decoration: none;\n              color: #000; }\n              body main section[data-title='contact'] .details p a:hover {\n                color: #AAA; }\n            body main section[data-title='contact'] .details p i.fa {\n              margin-left: 10px; }\n              body main section[data-title='contact'] .details p i.fa.fa-map-marker {\n                margin-right: 2px;\n                color: #ff0000; }\n              body main section[data-title='contact'] .details p i.fa.fa-phone {\n                color: #33aae0; }\n              body main section[data-title='contact'] .details p i.fa.fa-fax {\n                color: #1eaa6d; }\n              body main section[data-title='contact'] .details p i.fa.fa-envelope {\n                color: #e6be1b; }\n  body footer {\n    background: #333;\n    width: 100%;\n    height: 100px;\n    text-align: center;\n    color: #d4d4d4;\n    font-weight: 100;\n    font-size: 13px;\n    position: relative; }\n    body footer span {\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: 2px;\n      transform: translate(-50%, -50%);\n      cursor: default; }\n      body footer span i {\n        color: #fff833; }\n      body footer span a {\n        text-decoration: none;\n        color: #FFF;\n        cursor: pointer;\n        display: inline-block;\n        font-weight: normal;\n        transition-duration: 0.2s;\n        transform: translateZ(1px);\n        text-shadow: 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1); }\n        body footer span a:hover {\n          opacity: 0.8;\n          color: yellow;\n          transform: translateZ(1px) translateY(-5px) scale(1.02);\n          text-shadow: 0 10px 5px rgba(255, 255, 0, 0.1), 0 5px 5px rgba(255, 255, 0, 0.25), 0 2px 5px rgba(255, 255, 0, 0.8); }\n", ""]);

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
                console.log('UNSET');
                clearTimeout(this.focusingTimeout);
                this.autoRotationRenderer.pause();
            } else {
                console.log('SET');
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
        framesFlow.render(this.render.bind(this));
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
            console.log(this._rotateY);
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

var Gallery = function () {
    function Gallery(query) {
        _classCallCheck(this, Gallery);

        this.element = $(query);
        this.leftButton = $(query + ' > .left-button');
        this.rightButton = $(query + ' > .right-button');
        this.container = $(query + ' > .container');
        this.images = $$(query + ' > .container > img');
        this.containerRight = 0;
        this.slider = new _Slider2.default('body > .full-view-slider', this);
        this.init();
    }

    _createClass(Gallery, [{
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
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var image = _step.value;
                    image.onclick = function () {
                        that.onRequestForSlides(this);
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
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.images[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var image = _step2.value;
                    sum += image.clientWidth;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTM1MjRhNjVkM2Y3NjNjOTA3ZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImFwcCIsIkFwcCIsInJvYm9TY2VuZSIsIm5hdmlnYXRpb24iLCJnYWxsZXJ5Iiwicm9ib3QiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3ZlIiwiYmluZCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwiZm9jdXMiLCJmb2N1c2luZ1RpbWVvdXQiLCJhdXRvUm90YXRpb25SZW5kZXJlciIsImZyYW1lc0Zsb3ciLCJyZW5kZXIiLCJhdXRvUm90YXRlIiwiZXZlbnQiLCJmb2N1c2VkIiwidG91Y2hlcyIsImUiLCJtb3ZlUm9ib3RUbyIsInBhZ2VYIiwicGFnZVkiLCJ4IiwieSIsInhSYXRlIiwiaW5uZXJXaWR0aCIsInlSYXRlIiwiaW5uZXJIZWlnaHQiLCJyb3RhdGVZIiwiTWF0aCIsIlBJIiwicm90YXRlWCIsImFybUFuZ2xlIiwid3Jpc3RBbmdsZSIsImNsb3NlR3JhYiIsImdyYWJBbmdsZSIsImZyYW1lIiwidGhldGEiLCJpbmRleCIsImNvcyIsInNpbiIsImlzRm9jdXNlZCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJwYXVzZSIsInNldFRpbWVvdXQiLCJwbGF5IiwicG9zdHByb2Nlc3NpbmciLCJib2tlaF9wYXJhbXMiLCJ6bmVhciIsInpmYXIiLCJzaGFkZXJGb2N1cyIsImZzdG9wIiwibWF4Ymx1ciIsInNob3dGb2N1cyIsImZvY2FsRGVwdGgiLCJtYW51YWxkb2YiLCJ2aWduZXR0aW5nIiwiZGVwdGhibHVyIiwidGhyZXNob2xkIiwiZ2FpbiIsImJpYXMiLCJmcmluZ2UiLCJmb2NhbExlbmd0aCIsIm5vaXNlIiwicGVudGFnb24iLCJkaXRoZXJpbmciLCJSb2JvU2NlbmUiLCJjb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsImluaXQiLCJvblJlc2l6ZSIsInNjZW5lIiwiVEhSRUUiLCJTY2VuZSIsImZvZ0NvbG9yIiwiYmFja2dyb3VuZCIsIkNvbG9yIiwiZm9nIiwiRm9nIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJyb3RhdGlvbiIsImFkZCIsIm1hdGVyaWFsX2RlcHRoIiwiTWVzaERlcHRoTWF0ZXJpYWwiLCJpbml0UG9zdFByb2Nlc3NpbmciLCJ1cGRhdGVCb29rZWhQYXJhbXMiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRTaXplIiwiZ2FtbWFJbnB1dCIsImdhbW1hT3V0cHV0Iiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInJlbmRlclJldmVyc2VTaWRlZCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInBvaW50TGlnaHQiLCJQb2ludExpZ2h0IiwiaGVtaXNwaGVyZUxpZ2h0IiwiSGVtaXNwaGVyZUxpZ2h0IiwiZ3JpZEhlbHBlciIsIkdyaWRIZWxwZXIiLCJjaGFuZ2VzIiwiT2JqZWN0IiwiYXNzaWduIiwiYm9rZWhfdW5pZm9ybXMiLCJ2YWx1ZSIsInNldEZvY2FsTGVuZ3RoIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicGFyYW1zIiwibWluRmlsdGVyIiwiTGluZWFyRmlsdGVyIiwibWFnRmlsdGVyIiwiZm9ybWF0IiwiUkdCRm9ybWF0IiwicnRUZXh0dXJlRGVwdGgiLCJXZWJHTFJlbmRlclRhcmdldCIsInJ0VGV4dHVyZUNvbG9yIiwiYm9rZWhfc2hhZGVyIiwiQm9rZWhTaGFkZXIiLCJVbmlmb3Jtc1V0aWxzIiwiY2xvbmUiLCJ1bmlmb3JtcyIsInRleHR1cmUiLCJtYXRlcmlhbEJva2VoIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImRlZmluZXMiLCJSSU5HUyIsIlNBTVBMRVMiLCJxdWFkIiwiTWVzaCIsIlBsYW5lR2VvbWV0cnkiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY2xlYXIiLCJvdmVycmlkZU1hdGVyaWFsIiwibG9hZGVyIiwiSlNPTkxvYWRlciIsImJsYWNrTWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIiwic2hpbmluZXNzIiwiZGFya01hdGVyaWFsIiwibGlnaHRNYXRlcmlhbCIsIm9iamVjdHNOYW1lcyIsImxvYWQiLCJvYmplY3ROYW1lIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwiaW5jbHVkZXMiLCJsb2FkQWxsT2JqZWN0c0FuZFB1dEluIiwib2JqZWN0cyIsImxvYWRlZENvdW50IiwidGhlbiIsIm1lc2giLCJsZW5ndGgiLCJSb2JvdCIsImlzUmVhZHkiLCJwYXJ0cyIsInJlYWR5IiwicmVzdCIsInJvdGF0b3IiLCJhcm0xIiwiYXJtMiIsIndyaXN0Iiwid3Jpc3Rib25lIiwiaGFuZCIsImZpbmdlciIsImZpbmdlcjIiLCJfcm90YXRlWSIsIl9yb3RhdGVYIiwiX2FybUFuZ2xlIiwiX3dyaXN0QW5nbGUiLCJfZ3JhYkFuZ2xlIiwib3BlbkdyYWIiLCJkZWciLCJtYXgiLCJtaW4iLCJOYXZpZ2F0aW9uIiwiaGlnaGxpZ2h0IiwiaXRlbXMiLCJzY3JvbGxUYXJnZXQiLCJzY3JvbGxpbmdSZW5kZXJlciIsInNjcm9sbGluZ1JlbmRlcmVyTWV0aG9kIiwidGhhdCIsInN0eWxlIiwiaXRlbSIsIm9ubW91c2VvdmVyIiwib25Nb3VzZU92ZXJJdGVtIiwib25jbGljayIsIm9uQ2xpY2tPbkl0ZW0iLCJlbGVtZW50IiwibGVmdCIsIm9mZnNldExlZnQiLCJzZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0VG9wIiwiZGlzdGFuY2UiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsWSIsInNjcm9sbFRvIiwic2V0QmV0d2VlbiIsIm51bWJlciIsIkdhbGxlcnkiLCJsZWZ0QnV0dG9uIiwicmlnaHRCdXR0b24iLCJpbWFnZXMiLCJjb250YWluZXJSaWdodCIsInNsaWRlciIsIm1vdmUiLCJpbWFnZSIsIm9uUmVxdWVzdEZvclNsaWRlcyIsIndoaWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3RlcCIsIm1heFJpZ2h0IiwicmlnaHQiLCJlbmFibGVBbGxCdXR0b25zIiwiZGlzYWJsZUJ1dHRvbiIsImkiLCJzaG93Iiwic3VtIiwiY2xpZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsIlNsaWRlciIsImlzQWN0aXZlIiwidGFyZ2V0IiwiaGlkZGVuIiwiY29kZSIsImltYWdlSW5kZXgiLCJzcmMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUMsRztBQUNGLG1CQUFlO0FBQUE7O0FBQUE7O0FBQ1gsYUFBS0MsU0FBTCxHQUFpQix3QkFBYyxlQUFkLENBQWpCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQix5QkFBZSxZQUFmLENBQWxCO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLHNCQUFZLGVBQVosQ0FBZjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxLQUFLSCxTQUFMLENBQWVHLEtBQTVCO0FBQ0E7QUFDQVosZUFBT2EsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS0MsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQXJDO0FBQ0FmLGVBQU9hLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLEtBQUtDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFyQztBQUNBO0FBQ0FmLGVBQU9hLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLEtBQUtHLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQXJDO0FBQ0FmLGVBQU9hLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLEtBQUtJLFNBQUwsQ0FBZUYsSUFBZixDQUFvQixJQUFwQixDQUFuQztBQUNBO0FBQ0FkLFVBQUUsTUFBRixFQUFVWSxnQkFBVixDQUEyQixZQUEzQixFQUF5QztBQUFBLG1CQUFNLE1BQUtLLEtBQUwsR0FBYSxLQUFuQjtBQUFBLFNBQXpDO0FBQ0FqQixVQUFFLE1BQUYsRUFBVVksZ0JBQVYsQ0FBMkIsWUFBM0IsRUFBeUM7QUFBQSxtQkFBTSxNQUFLSyxLQUFMLEdBQWEsSUFBbkI7QUFBQSxTQUF6QztBQUNBbEIsZUFBT2EsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0M7QUFBQSxtQkFBTSxNQUFLSyxLQUFMLEdBQWEsS0FBbkI7QUFBQSxTQUFwQztBQUNBbEIsZUFBT2EsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0M7QUFBQSxtQkFBTSxNQUFLSyxLQUFMLEdBQWEsSUFBbkI7QUFBQSxTQUF0QztBQUNBLGFBQUtDLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxhQUFLQyxvQkFBTCxHQUE0QnBCLE9BQU9xQixVQUFQLENBQWtCQyxNQUFsQixDQUF5QixLQUFLQyxVQUFMLENBQWdCUixJQUFoQixDQUFxQixJQUFyQixDQUF6QixDQUE1QjtBQUNIOzs7OytCQUNPUyxLLEVBQU87QUFDWCxpQkFBS04sS0FBTCxHQUFhLElBQWI7QUFDQSxpQkFBS08sT0FBTCxHQUFlLElBQWY7QUFDQSxnQkFBSTtBQUFFRCx3QkFBUUEsTUFBTUUsT0FBTixDQUFjLENBQWQsQ0FBUjtBQUEwQixhQUFoQyxDQUFpQyxPQUFPQyxDQUFQLEVBQVUsQ0FBRSxhQUFlO0FBQzVELGlCQUFLQyxXQUFMLENBQWlCSixNQUFNSyxLQUF2QixFQUE4QkwsTUFBTU0sS0FBcEM7QUFDSDs7O29DQUNZQyxDLEVBQUdDLEMsRUFBRztBQUNmLGdCQUFNQyxRQUFRRixJQUFJL0IsT0FBT2tDLFVBQVgsR0FBd0IsR0FBdEM7QUFDQSxnQkFBTUMsUUFBUUgsSUFBSWhDLE9BQU9vQyxXQUFYLEdBQXlCLEdBQXZDO0FBQ0EsaUJBQUt4QixLQUFMLENBQVd5QixPQUFYLEdBQXFCSixRQUFRSyxLQUFLQyxFQUFsQztBQUNBLGlCQUFLM0IsS0FBTCxDQUFXNEIsT0FBWCxHQUFxQkwsUUFBUUcsS0FBS0MsRUFBYixHQUFnQixDQUFoQixHQUFvQkQsS0FBS0MsRUFBTCxHQUFRLENBQWpEO0FBQ0EsaUJBQUszQixLQUFMLENBQVc2QixRQUFYLEdBQXNCTixRQUFRRyxLQUFLQyxFQUFiLEdBQWdCLENBQWhCLEdBQW9CLElBQTFDO0FBQ0EsaUJBQUszQixLQUFMLENBQVc4QixVQUFYLEdBQXdCUCxRQUFRLENBQUNHLEtBQUtDLEVBQWQsR0FBaUIsQ0FBekM7QUFDSDs7O3NDQUNjO0FBQ1gsaUJBQUszQixLQUFMLENBQVcrQixTQUFYO0FBQ0g7OztvQ0FDWTtBQUNULGlCQUFLL0IsS0FBTCxDQUFXZ0MsU0FBWCxHQUF1QixHQUF2QjtBQUNIOzs7bUNBV1dDLEssRUFBTztBQUNmLGdCQUFNQyxRQUFRRCxNQUFNRSxLQUFOLEdBQVksR0FBMUI7QUFDQSxpQkFBS25CLFdBQUwsQ0FDSSxDQUFDNUIsT0FBT2tDLFVBQVAsR0FBb0JJLEtBQUtVLEdBQUwsQ0FBU0YsS0FBVCxJQUFrQjlDLE9BQU9rQyxVQUE5QyxJQUEwRCxDQUQ5RCxFQUVJLENBQUNsQyxPQUFPb0MsV0FBUCxHQUFxQkUsS0FBS1csR0FBTCxDQUFTSCxLQUFULElBQWtCOUMsT0FBT29DLFdBQS9DLElBQTRELENBRmhFO0FBSUg7OzswQkFoQlVjLFMsRUFBVztBQUFBOztBQUNsQixnQkFBSUEsU0FBSixFQUFlO0FBQ1hDLHdCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBQyw2QkFBYSxLQUFLbEMsZUFBbEI7QUFDQSxxQkFBS0Msb0JBQUwsQ0FBMEJrQyxLQUExQjtBQUNILGFBSkQsTUFJTztBQUNISCx3QkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDQSxxQkFBS2pDLGVBQUwsR0FBdUJvQyxXQUFXLFlBQU07QUFBRSwyQkFBS25DLG9CQUFMLENBQTBCb0MsSUFBMUI7QUFBa0MsaUJBQXJELEVBQXVELElBQXZELENBQXZCO0FBQ0g7QUFDSjs7Ozs7O2tCQVVVaEQsRzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RmOztBQUNBOzs7Ozs7OztBQUVBLElBQUlpRCxpQkFBaUIsRUFBckI7QUFDQSxJQUFJQyxlQUFlO0FBQ2ZDLFdBQU8sR0FEUTtBQUVmQyxVQUFNLEVBRlM7QUFHZkMsaUJBQWEsS0FIRTtBQUlmQyxXQUFPLEVBSlE7QUFLZkMsYUFBUyxDQUxNO0FBTWZDLGVBQVcsS0FOSTtBQU9mQyxnQkFBWSxHQVBHO0FBUWZDLGVBQVcsS0FSSTtBQVNmQyxnQkFBWSxLQVRHO0FBVWZDLGVBQVcsSUFWSTtBQVdmQyxlQUFZLEdBWEc7QUFZZkMsVUFBTSxHQVpTO0FBYWZDLFVBQU0sQ0FiUztBQWNmQyxZQUFRLENBZE87QUFlZkMsaUJBQWEsRUFmRTtBQWdCZkMsV0FBTyxJQWhCUTtBQWlCZkMsY0FBVSxLQWpCSztBQWtCZkMsZUFBVztBQWxCSSxDQUFuQjs7SUFxQk1DLFM7QUFDRix1QkFBYTNFLEtBQWIsRUFBb0I7QUFBQTs7QUFDaEIsYUFBSzRFLFNBQUwsR0FBaUI3RSxFQUFFQyxLQUFGLENBQWpCO0FBQ0EsYUFBSzZFLEtBQUwsR0FBYS9FLE9BQU9rQyxVQUFwQjtBQUNBLGFBQUs4QyxNQUFMLEdBQWMsR0FBZDtBQUNBLGFBQUtDLElBQUw7QUFDQWpGLGVBQU9hLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtxRSxRQUFMLENBQWNuRSxJQUFkLENBQW1CLElBQW5CLENBQWxDO0FBQ0FNLG1CQUFXQyxNQUFYLENBQWtCLEtBQUtBLE1BQUwsQ0FBWVAsSUFBWixDQUFpQixJQUFqQixDQUFsQjtBQUNIOzs7OytCQUNPO0FBQ0o7QUFDQSxpQkFBS29FLEtBQUwsR0FBYSxJQUFJQyxNQUFNQyxLQUFWLEVBQWI7QUFDQSxnQkFBTUMsV0FBVyxRQUFqQjtBQUNBLGlCQUFLSCxLQUFMLENBQVdJLFVBQVgsR0FBd0IsSUFBSUgsTUFBTUksS0FBVixDQUFnQkYsUUFBaEIsQ0FBeEI7QUFDQSxpQkFBS0gsS0FBTCxDQUFXTSxHQUFYLEdBQWlCLElBQUlMLE1BQU1NLEdBQVYsQ0FBY0osUUFBZCxFQUF3QixDQUF4QixFQUEyQixFQUEzQixDQUFqQjtBQUNBO0FBQ0EsaUJBQUtLLE1BQUwsR0FBYyxJQUFJUCxNQUFNUSxpQkFBVixDQUE0QixFQUE1QixFQUFnQyxLQUFLYixLQUFMLEdBQWEsS0FBS0MsTUFBbEQsRUFBMEQsQ0FBMUQsRUFBNkQsR0FBN0QsQ0FBZDtBQUNBLGlCQUFLVyxNQUFMLENBQVlFLFFBQVosQ0FBcUJDLENBQXJCLEdBQXlCLEVBQXpCO0FBQ0EsaUJBQUtILE1BQUwsQ0FBWUUsUUFBWixDQUFxQjdELENBQXJCLEdBQXlCLENBQXpCO0FBQ0EsaUJBQUsyRCxNQUFMLENBQVlJLFFBQVosQ0FBcUJoRSxDQUFyQixHQUF5QixJQUF6QjtBQUNBLGlCQUFLb0QsS0FBTCxDQUFXYSxHQUFYLENBQWUsS0FBS0wsTUFBcEI7QUFDQTtBQUNBLGlCQUFLTSxjQUFMLEdBQXNCLElBQUliLE1BQU1jLGlCQUFWLEVBQXRCO0FBQ0EsaUJBQUtDLGtCQUFMO0FBQ0EsaUJBQUtDLGtCQUFMO0FBQ0E7QUFDQSxpQkFBS0MsUUFBTCxHQUFnQixJQUFJakIsTUFBTWtCLGFBQVYsQ0FBd0IsRUFBRUMsV0FBVyxJQUFiLEVBQXhCLENBQWhCO0FBQ0EsaUJBQUtGLFFBQUwsQ0FBY0csT0FBZCxDQUFzQixLQUFLekIsS0FBM0IsRUFBa0MsS0FBS0MsTUFBdkM7QUFDQSxpQkFBS3FCLFFBQUwsQ0FBY0ksVUFBZCxHQUE0QixJQUE1QjtBQUNOLGlCQUFLSixRQUFMLENBQWNLLFdBQWQsR0FBNEIsSUFBNUI7QUFDQSxpQkFBS0wsUUFBTCxDQUFjTSxTQUFkLENBQXdCQyxPQUF4QixHQUFtQyxJQUFuQztBQUNBLGlCQUFLUCxRQUFMLENBQWNNLFNBQWQsQ0FBd0JFLGtCQUF4QixHQUE2QyxLQUE3QztBQUNNLGlCQUFLL0IsU0FBTCxDQUFlZ0MsV0FBZixDQUEyQixLQUFLVCxRQUFMLENBQWNVLFVBQXpDO0FBQ0E7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQixJQUFJNUIsTUFBTTZCLFVBQVYsQ0FBcUIsUUFBckIsRUFBK0IsR0FBL0IsQ0FBbEIsQ0F6QkksQ0F5Qm1EO0FBQ3ZELGlCQUFLRCxVQUFMLENBQWdCbkIsUUFBaEIsQ0FBeUJDLENBQXpCLEdBQTZCLEVBQTdCO0FBQ0EsaUJBQUtYLEtBQUwsQ0FBV2EsR0FBWCxDQUFlLEtBQUtnQixVQUFwQjtBQUNBLGlCQUFLRSxlQUFMLEdBQXVCLElBQUk5QixNQUFNK0IsZUFBVixDQUEyQixRQUEzQixFQUFxQyxRQUFyQyxFQUErQyxDQUEvQyxDQUF2QjtBQUNBLGlCQUFLaEMsS0FBTCxDQUFXYSxHQUFYLENBQWUsS0FBS2tCLGVBQXBCO0FBQ0E7QUFDQSxpQkFBS0UsVUFBTCxHQUFrQixJQUFJaEMsTUFBTWlDLFVBQVYsQ0FBc0IsRUFBdEIsRUFBMEIsRUFBMUIsQ0FBbEI7QUFDQSxpQkFBS2xDLEtBQUwsQ0FBV2EsR0FBWCxDQUFlLEtBQUtvQixVQUFwQjtBQUNBO0FBQ0EsaUJBQUt4RyxLQUFMLEdBQWEsb0JBQVUsSUFBVixDQUFiO0FBQ0g7Ozt1Q0FDZTBHLE8sRUFBUztBQUNyQkMsbUJBQU9DLE1BQVAsQ0FBYzlELFlBQWQsRUFBNEI0RCxPQUE1QjtBQUNBLGlCQUFLbEIsa0JBQUw7QUFDSDs7OzZDQUNxQjtBQUNsQixpQkFBSyxJQUFJekUsQ0FBVCxJQUFjK0IsWUFBZDtBQUE0QixvQkFBRy9CLEtBQUs4QixlQUFlZ0UsY0FBdkIsRUFBdUNoRSxlQUFlZ0UsY0FBZixDQUE4QjlGLENBQTlCLEVBQWlDK0YsS0FBakMsR0FBeUNoRSxhQUFhL0IsQ0FBYixDQUF6QztBQUFuRSxhQUNBOEIsZUFBZW1ELE9BQWYsR0FBeUIsSUFBekI7QUFDQW5ELDJCQUFlZ0UsY0FBZixDQUE4QixPQUE5QixFQUF1Q0MsS0FBdkMsR0FBK0NoRSxhQUFhQyxLQUE1RDtBQUNBRiwyQkFBZWdFLGNBQWYsQ0FBOEIsTUFBOUIsRUFBc0NDLEtBQXRDLEdBQThDaEUsYUFBYUUsSUFBM0Q7QUFDQSxpQkFBSytCLE1BQUwsQ0FBWWdDLGNBQVosQ0FBNEJqRSxhQUFhZSxXQUF6QztBQUNIOzs7NkNBQ3FCO0FBQ2xCaEIsMkJBQWUwQixLQUFmLEdBQXdCLElBQUlDLE1BQU1DLEtBQVYsRUFBeEI7QUFDQTVCLDJCQUFla0MsTUFBZixHQUF3QixJQUFJUCxNQUFNd0Msa0JBQVYsQ0FBOEIsQ0FBQyxLQUFLN0MsS0FBTixHQUFjLENBQTVDLEVBQStDLEtBQUtBLEtBQUwsR0FBYSxDQUE1RCxFQUErRCxLQUFLQyxNQUFMLEdBQWMsQ0FBN0UsRUFBZ0YsQ0FBQyxLQUFLQSxNQUFOLEdBQWUsQ0FBL0YsRUFBa0csQ0FBQyxFQUFuRyxFQUF1RyxFQUF2RyxDQUF4QjtBQUNBdkIsMkJBQWUwQixLQUFmLENBQXFCYSxHQUFyQixDQUEwQnZDLGVBQWVrQyxNQUF6QztBQUNBLGdCQUFNa0MsU0FBUztBQUNYQywyQkFBVzFDLE1BQU0yQyxZQUROO0FBRVhDLDJCQUFXNUMsTUFBTTJDLFlBRk47QUFHWEUsd0JBQVE3QyxNQUFNOEM7QUFISCxhQUFmO0FBS0F6RSwyQkFBZTBFLGNBQWYsR0FBZ0MsSUFBSS9DLE1BQU1nRCxpQkFBVixDQUE2QixLQUFLckQsS0FBbEMsRUFBeUMsS0FBS0MsTUFBOUMsRUFBc0Q2QyxNQUF0RCxDQUFoQztBQUNBcEUsMkJBQWU0RSxjQUFmLEdBQWdDLElBQUlqRCxNQUFNZ0QsaUJBQVYsQ0FBNkIsS0FBS3JELEtBQWxDLEVBQXlDLEtBQUtDLE1BQTlDLEVBQXNENkMsTUFBdEQsQ0FBaEM7QUFDQSxnQkFBSVMsZUFBZWxELE1BQU1tRCxXQUF6QjtBQUNBOUUsMkJBQWVnRSxjQUFmLEdBQWdDckMsTUFBTW9ELGFBQU4sQ0FBb0JDLEtBQXBCLENBQTJCSCxhQUFhSSxRQUF4QyxDQUFoQztBQUNBakYsMkJBQWVnRSxjQUFmLENBQThCLFFBQTlCLEVBQXdDQyxLQUF4QyxHQUFnRGpFLGVBQWU0RSxjQUFmLENBQThCTSxPQUE5RTtBQUNBbEYsMkJBQWVnRSxjQUFmLENBQThCLFFBQTlCLEVBQXdDQyxLQUF4QyxHQUFnRGpFLGVBQWUwRSxjQUFmLENBQThCUSxPQUE5RTtBQUNBbEYsMkJBQWVnRSxjQUFmLENBQThCLGNBQTlCLEVBQStDQyxLQUEvQyxHQUF1RCxLQUFLM0MsS0FBNUQ7QUFDQXRCLDJCQUFlZ0UsY0FBZixDQUE4QixlQUE5QixFQUErQ0MsS0FBL0MsR0FBdUQsS0FBSzFDLE1BQTVEO0FBQ0F2QiwyQkFBZW1GLGFBQWYsR0FBK0IsSUFBSXhELE1BQU15RCxjQUFWLENBQTBCO0FBQ3JESCwwQkFBVWpGLGVBQWVnRSxjQUQ0QjtBQUVyRHFCLDhCQUFjUixhQUFhUSxZQUYwQjtBQUdyREMsZ0NBQWdCVCxhQUFhUyxjQUh3QjtBQUlyREMseUJBQVMsRUFBRUMsT0FBTyxDQUFULEVBQVlDLFNBQVMsQ0FBckI7QUFKNEMsYUFBMUIsQ0FBL0I7QUFNQXpGLDJCQUFlMEYsSUFBZixHQUFzQixJQUFJL0QsTUFBTWdFLElBQVYsQ0FBZ0IsSUFBSWhFLE1BQU1pRSxhQUFWLENBQXdCLEtBQUt0RSxLQUE3QixFQUFvQyxLQUFLQyxNQUF6QyxDQUFoQixFQUFrRXZCLGVBQWVtRixhQUFqRixDQUF0QjtBQUNBbkYsMkJBQWUwQixLQUFmLENBQXFCYSxHQUFyQixDQUEwQnZDLGVBQWUwRixJQUF6QztBQUNOOzs7bUNBQ2M7QUFDUixpQkFBS3BFLEtBQUwsR0FBYS9FLE9BQU9rQyxVQUFwQjtBQUNBLGlCQUFLeUQsTUFBTCxDQUFZMkQsTUFBWixHQUFxQjdGLGVBQWVrQyxNQUFmLENBQXNCMkQsTUFBdEIsR0FBK0IsS0FBS3ZFLEtBQUwsR0FBYSxLQUFLQyxNQUF0RTtBQUNBLGlCQUFLVyxNQUFMLENBQVk0RCxzQkFBWjtBQUNBOUYsMkJBQWVrQyxNQUFmLENBQXNCNEQsc0JBQXRCO0FBQ0EsaUJBQUtsRCxRQUFMLENBQWNHLE9BQWQsQ0FBc0IsS0FBS3pCLEtBQTNCLEVBQWtDLEtBQUtDLE1BQXZDO0FBQ0g7OztpQ0FDUztBQUNOLGlCQUFLcEUsS0FBTCxDQUFXVSxNQUFYO0FBQ0EsaUJBQUsrRSxRQUFMLENBQWNtRCxLQUFkO0FBQ04saUJBQUtyRSxLQUFMLENBQVdzRSxnQkFBWCxHQUE4QixJQUE5QjtBQUNBLGlCQUFLcEQsUUFBTCxDQUFjL0UsTUFBZCxDQUFxQixLQUFLNkQsS0FBMUIsRUFBaUMsS0FBS1EsTUFBdEMsRUFBOENsQyxlQUFlNEUsY0FBN0QsRUFBNkUsSUFBN0U7QUFDQSxpQkFBS2xELEtBQUwsQ0FBV3NFLGdCQUFYLEdBQThCLEtBQUt4RCxjQUFuQztBQUNBLGlCQUFLSSxRQUFMLENBQWMvRSxNQUFkLENBQXFCLEtBQUs2RCxLQUExQixFQUFpQyxLQUFLUSxNQUF0QyxFQUE4Q2xDLGVBQWUwRSxjQUE3RCxFQUE2RSxJQUE3RTtBQUNBLGlCQUFLOUIsUUFBTCxDQUFjL0UsTUFBZCxDQUFxQm1DLGVBQWUwQixLQUFwQyxFQUEyQzFCLGVBQWVrQyxNQUExRDtBQUNHOzs7Ozs7a0JBR1VkLFM7Ozs7OztBQzdIZiw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLHVDQUF1Qyx1Q0FBdUMsZ0JBQWdCOztBQUU5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUYsaUNBQWlDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFbGpCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUF1Qyx1Q0FBdUMsZ0JBQWdCOztBQUU5RixrREFBa0QsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV4SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQUF3RSxrSkFBa0o7QUFDMU47QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUZBQXVGLGdFQUFnRTtBQUN2SjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlGQUF5RixtRUFBbUU7QUFDNUo7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEUsbUVBQW1FO0FBQzdJO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQyx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixpQ0FBaUMsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVsakIsa0RBQWtELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFeEo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkUsZ0VBQWdFO0FBQzNJO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixpQ0FBaUMsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVsakIsa0RBQWtELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFeEo7QUFDQTtBQUNBOztBQUVBLHdFQUF3RSxhQUFhO0FBQ3JGO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUVBQXlFLGdFQUFnRTtBQUN6STtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxNQUFNOztBQUVOO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxPQUFPO0FBQ1AsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNybEJBLElBQU02RSxTQUFTLElBQUl0RSxNQUFNdUUsVUFBVixFQUFmOztBQUVBLElBQU1DLGdCQUFnQixJQUFJeEUsTUFBTXlFLGlCQUFWLENBQTRCLEVBQUVDLE9BQU8sUUFBVCxFQUFtQkMsV0FBVyxDQUE5QixFQUE1QixDQUF0QjtBQUNBLElBQU1DLGVBQWUsSUFBSTVFLE1BQU15RSxpQkFBVixDQUE0QixFQUFFQyxPQUFPLFFBQVQsRUFBbUJDLFdBQVcsR0FBOUIsRUFBNUIsQ0FBckI7QUFDQSxJQUFNRSxnQkFBZ0IsSUFBSTdFLE1BQU15RSxpQkFBVixDQUE0QixFQUFFQyxPQUFPLFFBQVQsRUFBbUJDLFdBQVcsRUFBOUIsRUFBNUIsQ0FBdEI7O0FBRUEsSUFBTUcsZUFBZSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLEVBQW1DLE1BQW5DLEVBQTJDLFNBQTNDLEVBQXNELE9BQXRELEVBQStELFdBQS9ELENBQXJCO0FBQ0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNDLFVBQUQsRUFBZ0I7QUFDekIsUUFBTUMsTUFBTSxzQkFBc0JELFVBQXRCLEdBQW1DLE9BQS9DO0FBQ0EsV0FBTyxJQUFJRSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQWtCQyxHQUFsQixFQUEwQjtBQUN6Q2YsZUFBT1MsSUFBUCxDQUFZRSxHQUFaLEVBQWlCLFVBQUNLLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUNyQ0EsdUJBQVdWLGFBQVg7QUFDQSxnQkFBSUcsZUFBZSxRQUFuQixFQUE2Qk8sV0FBV2YsYUFBWDtBQUM3QixnQkFBSSxDQUFDLFdBQUQsRUFBYyxNQUFkLEVBQXNCLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDZ0IsUUFBdEMsQ0FBK0NSLFVBQS9DLENBQUosRUFBZ0VPLFdBQVdYLFlBQVg7QUFDaEVPLG9CQUFRLElBQUluRixNQUFNZ0UsSUFBVixDQUFlc0IsUUFBZixFQUF5QkMsUUFBekIsQ0FBUjtBQUNILFNBTEQ7QUFNSCxLQVBNLENBQVA7QUFRSCxDQVZEO0FBV0EsSUFBTUUseUJBQXlCLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3hDLFdBQU8sSUFBSVIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsR0FBbEIsRUFBMEI7QUFDekMsWUFBSU0sY0FBYyxDQUFsQjtBQUR5QztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG9CQUVoQ1gsVUFGZ0M7O0FBR3JDRCxxQkFBS0MsVUFBTCxFQUFpQlksSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzVCSCw0QkFBUVYsVUFBUixJQUFzQmEsSUFBdEI7QUFDQUY7QUFDQSx3QkFBSUEsZ0JBQWdCYixhQUFhZ0IsTUFBakMsRUFBeUNYO0FBQzVDLGlCQUpEO0FBSHFDOztBQUV6QyxpQ0FBdUJMLFlBQXZCLDhIQUFxQztBQUFBO0FBTXBDO0FBUndDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTNUMsS0FUTSxDQUFQO0FBVUgsQ0FYRDs7SUFhTWlCLEs7QUFDRixtQkFBYTFLLFNBQWIsRUFBd0I7QUFBQTs7QUFDcEIsYUFBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxhQUFLMEUsS0FBTCxHQUFhMUUsVUFBVTBFLEtBQXZCO0FBQ0EsYUFBS2lHLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQVIsK0JBQXVCLEtBQUtRLEtBQTVCLEVBQW1DTCxJQUFuQyxDQUF3QyxLQUFLTSxLQUFMLENBQVd2SyxJQUFYLENBQWdCLElBQWhCLENBQXhDO0FBQ0g7Ozs7Z0NBQ1E7QUFDTDtBQUNBLGlCQUFLc0ssS0FBTCxDQUFXRSxJQUFYLENBQWdCdkYsR0FBaEIsQ0FBb0IsS0FBS3FGLEtBQUwsQ0FBV0csT0FBL0I7QUFDQSxpQkFBS0gsS0FBTCxDQUFXRyxPQUFYLENBQW1CM0YsUUFBbkIsQ0FBNEI3RCxDQUE1QixHQUFnQyxDQUFoQztBQUNBLGlCQUFLcUosS0FBTCxDQUFXRyxPQUFYLENBQW1CeEYsR0FBbkIsQ0FBdUIsS0FBS3FGLEtBQUwsQ0FBV0ksSUFBbEM7QUFDQSxpQkFBS0osS0FBTCxDQUFXSSxJQUFYLENBQWdCNUYsUUFBaEIsQ0FBeUI3RCxDQUF6QixHQUE2QixDQUE3QjtBQUNBLGlCQUFLcUosS0FBTCxDQUFXSSxJQUFYLENBQWdCekYsR0FBaEIsQ0FBb0IsS0FBS3FGLEtBQUwsQ0FBV0ssSUFBL0I7QUFDQSxpQkFBS0wsS0FBTCxDQUFXSyxJQUFYLENBQWdCN0YsUUFBaEIsQ0FBeUI3RCxDQUF6QixHQUE2QixHQUE3QjtBQUNBLGlCQUFLcUosS0FBTCxDQUFXSyxJQUFYLENBQWdCMUYsR0FBaEIsQ0FBb0IsS0FBS3FGLEtBQUwsQ0FBV00sS0FBL0I7QUFDQSxpQkFBS04sS0FBTCxDQUFXTSxLQUFYLENBQWlCM0YsR0FBakIsQ0FBcUIsS0FBS3FGLEtBQUwsQ0FBV08sU0FBaEM7QUFDQSxpQkFBS1AsS0FBTCxDQUFXTyxTQUFYLENBQXFCL0YsUUFBckIsQ0FBOEI3RCxDQUE5QixHQUFrQyxHQUFsQztBQUNBLGlCQUFLcUosS0FBTCxDQUFXTyxTQUFYLENBQXFCL0YsUUFBckIsQ0FBOEI5RCxDQUE5QixHQUFrQyxDQUFDLElBQW5DO0FBQ0EsaUJBQUtzSixLQUFMLENBQVdPLFNBQVgsQ0FBcUI1RixHQUFyQixDQUF5QixLQUFLcUYsS0FBTCxDQUFXUSxJQUFwQztBQUNBLGlCQUFLUixLQUFMLENBQVdRLElBQVgsQ0FBZ0I3RixHQUFoQixDQUFvQixLQUFLcUYsS0FBTCxDQUFXUyxNQUEvQjtBQUNBLGlCQUFLVCxLQUFMLENBQVdTLE1BQVgsQ0FBa0JqRyxRQUFsQixDQUEyQjdELENBQTNCLEdBQStCLEdBQS9CO0FBQ0EsaUJBQUtxSixLQUFMLENBQVdTLE1BQVgsQ0FBa0JqRyxRQUFsQixDQUEyQjlELENBQTNCLEdBQStCLEdBQS9CO0FBQ0EsaUJBQUtzSixLQUFMLENBQVdTLE1BQVgsQ0FBa0JqRyxRQUFsQixDQUEyQkMsQ0FBM0IsR0FBK0IsSUFBL0I7QUFDQSxpQkFBS3VGLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQi9GLFFBQWxCLENBQTJCaEUsQ0FBM0IsR0FBK0IsR0FBL0I7QUFDQSxpQkFBS3NKLEtBQUwsQ0FBV1UsT0FBWCxHQUFxQixLQUFLVixLQUFMLENBQVdTLE1BQVgsQ0FBa0JyRCxLQUFsQixFQUFyQjtBQUNBLGlCQUFLNEMsS0FBTCxDQUFXUSxJQUFYLENBQWdCN0YsR0FBaEIsQ0FBb0IsS0FBS3FGLEtBQUwsQ0FBV1UsT0FBL0I7QUFDQSxpQkFBS1YsS0FBTCxDQUFXVSxPQUFYLENBQW1CaEcsUUFBbkIsQ0FBNEIvRCxDQUE1QixHQUFnQ00sS0FBS0MsRUFBckM7QUFDQSxpQkFBSzhJLEtBQUwsQ0FBV1UsT0FBWCxDQUFtQmxHLFFBQW5CLENBQTRCOUQsQ0FBNUIsR0FBZ0MsQ0FBQyxHQUFqQzs7QUFFQTtBQUNBLGlCQUFLb0QsS0FBTCxDQUFXYSxHQUFYLENBQWUsS0FBS3FGLEtBQUwsQ0FBV0UsSUFBMUI7O0FBRUE7QUFDQSxpQkFBS2xKLE9BQUwsR0FBZSxDQUFDLEdBQWhCO0FBQ0EsaUJBQUtHLE9BQUwsR0FBZSxDQUFmO0FBQ0EsaUJBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQixDQUFDSixLQUFLQyxFQUFOLEdBQVMsQ0FBM0I7QUFDQSxpQkFBS0ssU0FBTCxHQUFpQk4sS0FBS0MsRUFBTCxHQUFRLENBQXpCOztBQUVBO0FBQ0FZLG9CQUFRQyxHQUFSLENBQVksS0FBSzRJLFFBQWpCO0FBQ0EsaUJBQUtYLEtBQUwsQ0FBV0csT0FBWCxDQUFtQnpGLFFBQW5CLENBQTRCL0QsQ0FBNUIsR0FBZ0MsS0FBS2dLLFFBQXJDO0FBQ0EsaUJBQUtYLEtBQUwsQ0FBV0ksSUFBWCxDQUFnQjFGLFFBQWhCLENBQXlCaEUsQ0FBekIsR0FBNkIsS0FBS2tLLFFBQWxDO0FBQ0EsaUJBQUtaLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQjNGLFFBQWhCLENBQXlCaEUsQ0FBekIsR0FBNkIsS0FBS21LLFNBQWxDO0FBQ0EsaUJBQUtiLEtBQUwsQ0FBV08sU0FBWCxDQUFxQjdGLFFBQXJCLENBQThCaEUsQ0FBOUIsR0FBa0MsS0FBS29LLFdBQXZDO0FBQ0EsaUJBQUtkLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQi9GLFFBQWxCLENBQTJCRCxDQUEzQixHQUErQixLQUFLc0csVUFBcEM7QUFDQSxpQkFBS2YsS0FBTCxDQUFXVSxPQUFYLENBQW1CaEcsUUFBbkIsQ0FBNEJELENBQTVCLEdBQWdDLEtBQUtzRyxVQUFyQzs7QUFFQSxpQkFBS2hCLE9BQUwsR0FBZSxJQUFmO0FBQ0g7OztvQ0F5Q1k7QUFDVCxpQkFBS3hJLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7O21DQUNXO0FBQ1IsaUJBQUtBLFNBQUwsR0FBaUJOLEtBQUtDLEVBQUwsR0FBUSxDQUF6QjtBQUNIOzs7cUNBQ2E7QUFDVixnQkFBSSxLQUFLSyxTQUFMLEdBQWlCTixLQUFLQyxFQUFMLEdBQVEsQ0FBN0IsRUFBZ0MsS0FBS0ksU0FBTCxHQUFoQyxLQUNLLEtBQUswSixRQUFMO0FBQ1I7OztpQ0FDUztBQUNOLGdCQUFJLEtBQUtqQixPQUFULEVBQWtCO0FBQ2QscUJBQUtDLEtBQUwsQ0FBV0csT0FBWCxDQUFtQnpGLFFBQW5CLENBQTRCL0QsQ0FBNUIsSUFBaUMsQ0FBQyxLQUFLZ0ssUUFBTCxHQUFnQixLQUFLWCxLQUFMLENBQVdHLE9BQVgsQ0FBbUJ6RixRQUFuQixDQUE0Qi9ELENBQTdDLElBQWtELEVBQW5GO0FBQ0EscUJBQUtxSixLQUFMLENBQVdJLElBQVgsQ0FBZ0IxRixRQUFoQixDQUF5QmhFLENBQXpCLElBQThCLENBQUMsS0FBS2tLLFFBQUwsR0FBZ0IsS0FBS1osS0FBTCxDQUFXSSxJQUFYLENBQWdCMUYsUUFBaEIsQ0FBeUJoRSxDQUExQyxJQUErQyxFQUE3RTtBQUNBLHFCQUFLc0osS0FBTCxDQUFXSyxJQUFYLENBQWdCM0YsUUFBaEIsQ0FBeUJoRSxDQUF6QixJQUE4QixDQUFDLEtBQUttSyxTQUFMLEdBQWlCLEtBQUtiLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQjNGLFFBQWhCLENBQXlCaEUsQ0FBM0MsSUFBZ0QsRUFBOUU7QUFDQSxxQkFBS3NKLEtBQUwsQ0FBV08sU0FBWCxDQUFxQjdGLFFBQXJCLENBQThCaEUsQ0FBOUIsSUFBbUMsQ0FBQyxLQUFLb0ssV0FBTCxHQUFtQixLQUFLZCxLQUFMLENBQVdPLFNBQVgsQ0FBcUI3RixRQUFyQixDQUE4QmhFLENBQWxELElBQXVELEVBQTFGO0FBQ0EscUJBQUtzSixLQUFMLENBQVdTLE1BQVgsQ0FBa0IvRixRQUFsQixDQUEyQkQsQ0FBM0IsSUFBZ0MsQ0FBQyxLQUFLc0csVUFBTCxHQUFrQixLQUFLZixLQUFMLENBQVdTLE1BQVgsQ0FBa0IvRixRQUFsQixDQUEyQkQsQ0FBOUMsSUFBbUQsQ0FBbkY7QUFDQSxxQkFBS3VGLEtBQUwsQ0FBV1UsT0FBWCxDQUFtQmhHLFFBQW5CLENBQTRCRCxDQUE1QixJQUFpQyxDQUFDLEtBQUtzRyxVQUFMLEdBQWtCLEtBQUtmLEtBQUwsQ0FBV1UsT0FBWCxDQUFtQmhHLFFBQW5CLENBQTRCRCxDQUEvQyxJQUFvRCxDQUFyRjtBQUNIO0FBQ0o7OzswQkEzRFl3RyxHLEVBQUs7QUFDZCxpQkFBS04sUUFBTCxHQUFnQk0sR0FBaEI7QUFDSCxTOzRCQUNjO0FBQ1gsbUJBQU8sS0FBS04sUUFBWjtBQUNIOzs7MEJBQ1lNLEcsRUFBSztBQUNkQSxrQkFBTWhLLEtBQUtpSyxHQUFMLENBQVNELEdBQVQsRUFBYyxDQUFDaEssS0FBS0MsRUFBTixHQUFTLENBQXZCLENBQU47QUFDQStKLGtCQUFNaEssS0FBS2tLLEdBQUwsQ0FBU0YsR0FBVCxFQUFjLElBQUVoSyxLQUFLQyxFQUFQLEdBQVUsRUFBeEIsQ0FBTjtBQUNBLGlCQUFLMEosUUFBTCxHQUFnQkssR0FBaEI7QUFDSCxTOzRCQUNjO0FBQ1gsbUJBQU8sS0FBS0wsUUFBWjtBQUNIOzs7MEJBQ2FLLEcsRUFBSztBQUNmQSxrQkFBTWhLLEtBQUtDLEVBQUwsR0FBVStKLEdBQWhCO0FBQ0FBLGtCQUFNaEssS0FBS2lLLEdBQUwsQ0FBU0QsR0FBVCxFQUFjLENBQUNoSyxLQUFLQyxFQUFOLEdBQVMsRUFBdkIsQ0FBTjtBQUNBK0osa0JBQU1oSyxLQUFLa0ssR0FBTCxDQUFTRixHQUFULEVBQWMsSUFBRWhLLEtBQUtDLEVBQVAsR0FBVSxDQUF4QixDQUFOO0FBQ0EsaUJBQUsySixTQUFMLEdBQWlCSSxHQUFqQjtBQUNILFM7NEJBQ2U7QUFDWixtQkFBTyxLQUFLSixTQUFaO0FBQ0g7OzswQkFDZUksRyxFQUFLO0FBQ2pCQSxrQkFBTWhLLEtBQUtpSyxHQUFMLENBQVNELEdBQVQsRUFBYyxDQUFDaEssS0FBS0MsRUFBTixHQUFTLENBQXZCLENBQU47QUFDQStKLGtCQUFNaEssS0FBS2tLLEdBQUwsQ0FBU0YsR0FBVCxFQUFjaEssS0FBS0MsRUFBTCxHQUFRLENBQXRCLENBQU47QUFDQSxpQkFBSzRKLFdBQUwsR0FBbUJHLEdBQW5CO0FBQ0gsUzs0QkFDaUI7QUFDZCxtQkFBTyxLQUFLSCxXQUFaO0FBQ0g7OzswQkFDY0csRyxFQUFLO0FBQ2hCQSxrQkFBTWhLLEtBQUtpSyxHQUFMLENBQVNELEdBQVQsRUFBYyxDQUFkLENBQU47QUFDQUEsa0JBQU1oSyxLQUFLa0ssR0FBTCxDQUFTRixHQUFULEVBQWNoSyxLQUFLQyxFQUFuQixDQUFOO0FBQ0ErSixtQkFBT2hLLEtBQUtDLEVBQUwsR0FBUSxDQUFmO0FBQ0EsaUJBQUs2SixVQUFMLEdBQWtCLENBQUNFLEdBQUQsR0FBSyxDQUF2QjtBQUNILFM7NEJBQ2dCO0FBQ2IsbUJBQU8sRUFBRSxJQUFFLEtBQUtGLFVBQVAsR0FBa0I5SixLQUFLQyxFQUFMLEdBQVEsQ0FBNUIsQ0FBUDtBQUNIOzs7Ozs7a0JBdUJVNEksSzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqSlRzQixVO0FBQ0Ysd0JBQVl2TSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsYUFBSzRFLFNBQUwsR0FBaUI3RSxFQUFFQyxLQUFGLENBQWpCO0FBQ0EsYUFBS3dNLFNBQUwsR0FBaUJ6TSxFQUFFQyxRQUFRLG9CQUFWLENBQWpCO0FBQ0EsYUFBS3lNLEtBQUwsR0FBYXRNLEdBQUdILFFBQVEsS0FBWCxDQUFiO0FBQ0EsYUFBSzBNLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxhQUFLQyxpQkFBTCxHQUF5QjdNLE9BQU9xQixVQUFQLENBQWtCQyxNQUFsQixDQUF5QixLQUFLd0wsdUJBQUwsQ0FBNkIvTCxJQUE3QixDQUFrQyxJQUFsQyxDQUF6QixDQUF6QjtBQUNBZixlQUFPYSxnQkFBUCxDQUF3QixZQUF4QixFQUFzQztBQUFBLG1CQUFNLE1BQUtnTSxpQkFBTCxDQUF1QnZKLEtBQXZCLEVBQU47QUFBQSxTQUF0QztBQUNBLGFBQUsyQixJQUFMO0FBQ0g7Ozs7K0JBQ087QUFDSixnQkFBTThILE9BQU8sSUFBYjtBQUNBLGlCQUFLRixpQkFBTCxDQUF1QnZKLEtBQXZCO0FBQ0EsaUJBQUtvSixTQUFMLENBQWVNLEtBQWYsQ0FBcUJqSSxLQUFyQixHQUE2QixNQUFNLEtBQUs0SCxLQUFMLENBQVd6QixNQUFqQixHQUEwQixHQUF2RDtBQUhJO0FBQUE7QUFBQTs7QUFBQTtBQUlKLHFDQUFpQixLQUFLeUIsS0FBdEIsOEhBQTZCO0FBQUEsd0JBQXBCTSxJQUFvQjs7QUFDekJBLHlCQUFLQyxXQUFMLEdBQW1CLFlBQVk7QUFBRUgsNkJBQUtJLGVBQUwsQ0FBcUIsSUFBckI7QUFBNEIscUJBQTdEO0FBQ0FGLHlCQUFLRyxPQUFMLEdBQWUsWUFBWTtBQUFFTCw2QkFBS00sYUFBTCxDQUFtQixJQUFuQjtBQUEwQixxQkFBdkQ7QUFDSDtBQVBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRUDs7O3dDQUNnQkMsTyxFQUFTO0FBQ3RCLGlCQUFLWixTQUFMLENBQWVNLEtBQWYsQ0FBcUJPLElBQXJCLEdBQTRCRCxRQUFRRSxVQUFSLEdBQXFCLElBQWpEO0FBQ0g7OztzQ0FDY0YsTyxFQUFTO0FBQ3BCLGdCQUFNRyxVQUFVeE4sbUJBQWlCcU4sUUFBUUksWUFBUixDQUFxQixXQUFyQixDQUFqQixPQUFoQjtBQUNBLGlCQUFLZCxZQUFMLEdBQW9CYSxRQUFRRSxTQUE1QjtBQUNBLGlCQUFLZCxpQkFBTCxDQUF1QnJKLElBQXZCO0FBQ0g7OztnREFDd0JYLEssRUFBTztBQUM1QixnQkFBTStLLFdBQVd0TCxLQUFLa0ssR0FBTCxDQUFTLEtBQUtJLFlBQWQsRUFBNkJ6TSxTQUFTME4sSUFBVCxDQUFjQyxZQUFkLEdBQTZCOU4sT0FBT29DLFdBQWpFLElBQWlGcEMsT0FBTytOLE9BQXpHO0FBQ0EvTixtQkFBT2dPLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJoTyxPQUFPK04sT0FBUCxHQUFpQkgsV0FBUyxFQUE3QztBQUNBLGdCQUFJQSxXQUFXLEVBQWYsRUFBbUIvSyxNQUFNd0QsUUFBTixDQUFlL0MsS0FBZjtBQUN0Qjs7Ozs7O2tCQUdVbUosVTs7Ozs7Ozs7Ozs7Ozs7O0FDbENmOzs7Ozs7OztBQUVBLElBQU13QixhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFTMUIsR0FBVCxFQUFjRCxHQUFkLEVBQXNCO0FBQ3JDLFdBQU9qSyxLQUFLaUssR0FBTCxDQUFTakssS0FBS2tLLEdBQUwsQ0FBUzBCLE1BQVQsRUFBaUIzQixHQUFqQixDQUFULEVBQWdDQyxHQUFoQyxDQUFQO0FBQ0gsQ0FGRDs7SUFJTTJCLE87QUFDRixxQkFBYWpPLEtBQWIsRUFBb0I7QUFBQTs7QUFDaEIsYUFBS29OLE9BQUwsR0FBZXJOLEVBQUVDLEtBQUYsQ0FBZjtBQUNBLGFBQUtrTyxVQUFMLEdBQWtCbk8sRUFBRUMsUUFBUSxpQkFBVixDQUFsQjtBQUNBLGFBQUttTyxXQUFMLEdBQW1CcE8sRUFBRUMsUUFBUSxrQkFBVixDQUFuQjtBQUNBLGFBQUs0RSxTQUFMLEdBQWlCN0UsRUFBRUMsUUFBUSxlQUFWLENBQWpCO0FBQ0EsYUFBS29PLE1BQUwsR0FBY2pPLEdBQUdILFFBQVEscUJBQVgsQ0FBZDtBQUNBLGFBQUtxTyxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLHFCQUFXLDBCQUFYLEVBQXVDLElBQXZDLENBQWQ7QUFDQSxhQUFLdkosSUFBTDtBQUNIOzs7OytCQUNPO0FBQUE7O0FBQ0osZ0JBQU04SCxPQUFPLElBQWI7QUFDQSxpQkFBS3FCLFVBQUwsQ0FBZ0JoQixPQUFoQixHQUEwQjtBQUFBLHVCQUFNLE1BQUtxQixJQUFMLENBQVUsQ0FBQyxHQUFYLENBQU47QUFBQSxhQUExQjtBQUNBLGlCQUFLSixXQUFMLENBQWlCakIsT0FBakIsR0FBMkI7QUFBQSx1QkFBTSxNQUFLcUIsSUFBTCxDQUFVLEdBQVYsQ0FBTjtBQUFBLGFBQTNCO0FBSEk7QUFBQTtBQUFBOztBQUFBO0FBSUoscUNBQWtCLEtBQUtILE1BQXZCO0FBQUEsd0JBQVNJLEtBQVQ7QUFBK0JBLDBCQUFNdEIsT0FBTixHQUFnQixZQUFZO0FBQ3ZETCw2QkFBSzRCLGtCQUFMLENBQXdCLElBQXhCO0FBQ0gscUJBRjhCO0FBQS9CO0FBSkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9QOzs7c0NBU2NDLEssRUFBTztBQUNsQixpQkFBS0EsUUFBUSxRQUFiLEVBQXVCQyxTQUF2QixDQUFpQ0MsTUFBakMsQ0FBd0MsUUFBeEM7QUFDSDs7OzJDQUNtQjtBQUNoQixpQkFBS1YsVUFBTCxDQUFnQlMsU0FBaEIsQ0FBMEI3SSxHQUExQixDQUE4QixRQUE5QjtBQUNBLGlCQUFLcUksV0FBTCxDQUFpQlEsU0FBakIsQ0FBMkI3SSxHQUEzQixDQUErQixRQUEvQjtBQUNIOzs7NkJBQ0srSSxJLEVBQU07QUFDUixnQkFBTUMsV0FBVyxLQUFLQSxRQUF0QjtBQUNBLGlCQUFLVCxjQUFMLEdBQXNCTixXQUFXLEtBQUtNLGNBQUwsR0FBc0JRLElBQWpDLEVBQXVDQyxRQUF2QyxFQUFpRCxDQUFqRCxDQUF0QjtBQUNBLGlCQUFLbEssU0FBTCxDQUFla0ksS0FBZixDQUFxQmlDLEtBQXJCLEdBQTZCLEtBQUtWLGNBQUwsR0FBc0IsSUFBbkQ7QUFDQSxpQkFBS1csZ0JBQUw7QUFDQSxnQkFBSSxLQUFLWCxjQUFMLEtBQXdCUyxRQUE1QixFQUFzQyxLQUFLRyxhQUFMLENBQW1CLE1BQW5CO0FBQ3RDLGdCQUFJLEtBQUtaLGNBQUwsS0FBd0IsQ0FBNUIsRUFBK0IsS0FBS1ksYUFBTCxDQUFtQixPQUFuQjtBQUNsQzs7OzJDQUNtQlQsSyxFQUFPO0FBQ3ZCLGlCQUFLLElBQUlVLENBQVQsSUFBYyxLQUFLZCxNQUFuQjtBQUEyQixvQkFBSSxLQUFLQSxNQUFMLENBQVljLENBQVosTUFBbUJWLEtBQXZCLEVBQThCO0FBQ3JELHlCQUFLRixNQUFMLENBQVlhLElBQVosQ0FBaUJELENBQWpCO0FBQ0E7QUFDSDtBQUhEO0FBSUg7Ozs0QkE1Qlk7QUFDVCxnQkFBSUUsTUFBTSxDQUFWO0FBRFM7QUFBQTtBQUFBOztBQUFBO0FBRVQsc0NBQWtCLEtBQUtoQixNQUF2QjtBQUFBLHdCQUFTSSxLQUFUO0FBQStCWSwyQkFBT1osTUFBTWEsV0FBYjtBQUEvQjtBQUZTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR1QsbUJBQU9ELEdBQVA7QUFDSDs7OzRCQUNlO0FBQ1osbUJBQU8sRUFBRSxLQUFLdkssS0FBTCxHQUFhLEtBQUt1SSxPQUFMLENBQWFrQyxXQUE1QixDQUFQO0FBQ0g7Ozs7OztrQkF3QlVyQixPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEZixJQUFNRixhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFTMUIsR0FBVCxFQUFjRCxHQUFkLEVBQXNCO0FBQ3JDLFdBQU9qSyxLQUFLaUssR0FBTCxDQUFTakssS0FBS2tLLEdBQUwsQ0FBUzBCLE1BQVQsRUFBaUIzQixHQUFqQixDQUFULEVBQWdDQyxHQUFoQyxDQUFQO0FBQ0gsQ0FGRDs7SUFJTWlELE07QUFDRixvQkFBYXZQLEtBQWIsRUFBb0JTLE9BQXBCLEVBQTZCO0FBQUE7O0FBQ3pCLGFBQUttRSxTQUFMLEdBQWlCN0UsRUFBRUMsS0FBRixDQUFqQjtBQUNBLGFBQUt3TyxLQUFMLEdBQWF6TyxFQUFFQyxRQUFRLE1BQVYsQ0FBYjtBQUNBLGFBQUtTLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGFBQUsrTyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsYUFBSzNNLEtBQUwsR0FBYSxDQUFiO0FBQ0EsYUFBS2tDLElBQUw7QUFDSDs7OzsrQkFDTztBQUFBOztBQUNKLGlCQUFLSCxTQUFMLENBQWVqRSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFDVyxLQUFELEVBQVc7QUFDaEQsb0JBQUlBLE1BQU1tTyxNQUFOLEtBQWlCLE1BQUs3SyxTQUExQixFQUFxQyxNQUFLOEssTUFBTDtBQUN4QyxhQUZEO0FBR0E1UCxtQkFBT2EsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBQ1csS0FBRCxFQUFXO0FBQzFDLG9CQUFJQSxNQUFNcU8sSUFBTixLQUFlLFFBQWYsSUFBMkIsTUFBS0gsUUFBcEMsRUFBOEMsTUFBS0UsTUFBTDtBQUM5QyxvQkFBSXBPLE1BQU1xTyxJQUFOLEtBQWUsWUFBZixJQUErQixNQUFLSCxRQUF4QyxFQUFrRCxNQUFLSSxVQUFMO0FBQ2xELG9CQUFJdE8sTUFBTXFPLElBQU4sS0FBZSxXQUFmLElBQThCLE1BQUtILFFBQXZDLEVBQWlELE1BQUtJLFVBQUw7QUFDcEQsYUFKRDtBQUtIOzs7NkJBUUsvTSxLLEVBQU87QUFDVCxpQkFBSytNLFVBQUwsR0FBa0IvTSxLQUFsQjtBQUNBLGlCQUFLMk0sUUFBTCxHQUFnQixJQUFoQjtBQUNBLGlCQUFLNUssU0FBTCxDQUFlK0osU0FBZixDQUF5QjdJLEdBQXpCLENBQTZCLFFBQTdCO0FBQ0g7OztpQ0FDUztBQUNOLGlCQUFLMEosUUFBTCxHQUFnQixLQUFoQjtBQUNBLGlCQUFLNUssU0FBTCxDQUFlK0osU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsUUFBaEM7QUFDSDs7OzBCQWZlL0wsSyxFQUFPO0FBQ25CLGlCQUFLQSxLQUFMLEdBQWFrTCxXQUFXbEwsS0FBWCxFQUFrQixDQUFsQixFQUFxQixLQUFLcEMsT0FBTCxDQUFhMk4sTUFBYixDQUFvQnBELE1BQXBCLEdBQTJCLENBQWhELENBQWI7QUFDQSxpQkFBS3dELEtBQUwsQ0FBV3FCLEdBQVgsR0FBaUIsS0FBS3BQLE9BQUwsQ0FBYTJOLE1BQWIsQ0FBb0IsS0FBS3ZMLEtBQXpCLEVBQWdDZ04sR0FBakQ7QUFDSCxTOzRCQUNpQjtBQUNkLG1CQUFPLEtBQUtoTixLQUFaO0FBQ0g7Ozs7OztrQkFZVTBNLE0iLCJmaWxlIjoiLi9wdWJsaWMvc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMzUyNGE2NWQzZjc2M2M5MDdkNyIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9pbmRleC5zYXNzJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vc2NyaXB0cy9BcHAnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSlcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KVxyXG5cclxud2luZG93LmFwcCA9IG5ldyBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Fzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9MaWdodC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9NZWRpdW0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX0JvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ0lSQU5TYW5zJywgc2VyaWY7IH1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICBib2R5IC5mdWxsLXZpZXctc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zczsgfVxcbiAgICBib2R5IC5mdWxsLXZpZXctc2xpZGVyLmFjdGl2ZSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxcbiAgICBib2R5IC5mdWxsLXZpZXctc2xpZGVyID4gaW1nIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDcwJTtcXG4gICAgICB6LWluZGV4OiAxMDAwOyB9XFxuICBib2R5IGhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICBib2R5IGhlYWRlciBoMSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTUlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjcpLCB0cmFuc3BhcmVudCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTE5cHggMjFweCAtMjVweCAjZjVmNWY1LCAwIDE5cHggMjFweCAtMjVweCAjZjVmNWY1O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMTAwcHg7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjsgfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgIGJvZHkgaGVhZGVyIGgxIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAgICAgYm9keSBoZWFkZXIgaDEge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg1NiwgNTYsIDU2LCAwKSwgcmdiYSg1NiwgNTYsIDU2LCAwLjMpLCAjMzgzODM4LCAjMzgzODM4KTtcXG4gICAgICAgICAgdG9wOiA4MCU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgcGFkZGluZzogMjAwcHggMjAwcHg7IH0gfVxcbiAgICBib2R5IGhlYWRlciBjYW52YXMge1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjNjY2KTsgfVxcbiAgYm9keSBuYXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IC00cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYmFja2dyb3VuZDogIzJiMmIyYjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNTU1LCAjMmIyYjJiLCAjMmIyYjJiLCAjNTU1KTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICBib2R5IG5hdiB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzM4MzgzOCwgIzJiMmIyYiwgIzJiMmIyYiwgIzNhM2EzYSk7IH0gfVxcbiAgICBib2R5IG5hdiAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogIzQ0NDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICBib2R5IG5hdiAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbiAgICAgICAgICBoZWlnaHQ6IDI1JTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxcbiAgICBib2R5IG5hdjpob3ZlciAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICBib2R5IG5hdiB1bCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICBib2R5IG5hdiB1bCB7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxcbiAgICAgIGJvZHkgbmF2IHVsIGxpIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICAgICAgY29sb3I6ICNEREQ7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDsgfSB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzOyB9IH1cXG4gICAgICAgIGJvZHkgbmF2IHVsIGxpOmFjdGl2ZSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuNjsgfVxcbiAgYm9keSBtYWluIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGRkYsICNFRUUsICNGRkYpO1xcbiAgICBwYWRkaW5nOiA3MHB4IDA7IH1cXG4gICAgYm9keSBtYWluIHNlY3Rpb24ge1xcbiAgICAgIGRpcmVjdGlvbjogcnRsO1xcbiAgICAgIHdpZHRoOiA5MDBweDtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDU1cHggMDtcXG4gICAgICBjbGVhcjogYm90aDsgfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIHtcXG4gICAgICAgICAgd2lkdGg6IDgwJTsgfSB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbiB1bCB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH0gfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgd2lkdGg6IDMwNXB4OyB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gPiBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87IH0gfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgICAgICBmbG9hdDogbm9uZTsgfSB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA1MHB4OyB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSB7XFxuICAgICAgICAgICAgdG9wOiAwOyB9IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUgaDIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIHAge1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J3BvcnRmb2xpbyddIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdwb3J0Zm9saW8nXSA+IGltZyB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J3RlYWNoaW5nJ10ge1xcbiAgICAgICAgaGVpZ2h0OiA3NTBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4OyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIHtcXG4gICAgICAgIGhlaWdodDogNDAwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSBpbWcge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gICAgICAgICAgICAtbW96LXVzZXItZHJhZzogbm9uZTtcXG4gICAgICAgICAgICAtbXMtdXNlci1kcmFnOiBub25lO1xcbiAgICAgICAgICAgIHVzZXItZHJhZzogbm9uZTsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSBpbWc6aG92ZXIge1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44NTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgaW1nOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAuY29udGFpbmVyIHtcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uLmFjdGl2ZSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24uYWN0aXZlIHtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24uYWN0aXZlOmhvdmVyLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbi5hY3RpdmU6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiBpIHtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgICAgICAgICAgd2lkdGg6IDVweDtcXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgICAgbGVmdDogMThweDtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpOmJlZm9yZSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24gaTpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgtMTJweCwgMTJweCk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgbGVmdDogMDsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24gaSB7XFxuICAgICAgICAgICAgICB0b3A6IDM5JTtcXG4gICAgICAgICAgICAgIGxlZnQ6IDE2cHg7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigxODBkZWcpOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIHtcXG4gICAgICAgICAgICByaWdodDogMDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIGhlaWdodDogNjUwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSBpZnJhbWUge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4OyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBhIHtcXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBhOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNBQUE7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhIHtcXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhLmZhLW1hcC1tYXJrZXIge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGkuZmEuZmEtcGhvbmUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzYWFlMDsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgaS5mYS5mYS1mYXgge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFlYWE2ZDsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgaS5mYS5mYS1lbnZlbG9wZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTZiZTFiOyB9XFxuICBib2R5IGZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzMzM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICBib2R5IGZvb3RlciBzcGFuIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICBib2R5IGZvb3RlciBzcGFuIGkge1xcbiAgICAgICAgY29sb3I6ICNmZmY4MzM7IH1cXG4gICAgICBib2R5IGZvb3RlciBzcGFuIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxcHgpO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gICAgICAgIGJvZHkgZm9vdGVyIHNwYW4gYTpob3ZlciB7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgY29sb3I6IHllbGxvdztcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDFweCkgdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjAyKTtcXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMTBweCA1cHggcmdiYSgyNTUsIDI1NSwgMCwgMC4xKSwgMCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuMjUpLCAwIDJweCA1cHggcmdiYSgyNTUsIDI1NSwgMCwgMC44KTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/LXVybCEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm9ib1NjZW5lIGZyb20gJy4vUm9ib1NjZW5lJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvU2NlbmUgPSBuZXcgUm9ib1NjZW5lKCdib2R5ID4gaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oJ2JvZHkgPiBuYXYnKTtcclxuICAgICAgICB0aGlzLmdhbGxlcnkgPSBuZXcgR2FsbGVyeSgnYm9keSAuZ2FsbGVyeScpO1xyXG4gICAgICAgIHRoaXMucm9ib3QgPSB0aGlzLnJvYm9TY2VuZS5yb2JvdDtcclxuICAgICAgICAvLyBNb3Zpbmcgcm9ib3QgbGlzdGVuZXJzXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBHcmFiYmluZyBsaXN0ZW5lcnNcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIEZvY3VzaW5nIGxpc3RlbmVyc1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5mb2N1cyA9IGZhbHNlKTtcclxuICAgICAgICAkKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHRoaXMuZm9jdXMgPSB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB0aGlzLmZvY3VzID0gZmFsc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gdGhpcy5mb2N1cyA9IHRydWUpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNpbmdUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF1dG9Sb3RhdGlvblJlbmRlcmVyID0gd2luZG93LmZyYW1lc0Zsb3cucmVuZGVyKHRoaXMuYXV0b1JvdGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIG9uTW92ZSAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7IGV2ZW50ID0gZXZlbnQudG91Y2hlc1swXSB9IGNhdGNoIChlKSB7IC8qIG5vdGhpbmcgKi8gfVxyXG4gICAgICAgIHRoaXMubW92ZVJvYm90VG8oZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKVxyXG4gICAgfVxyXG4gICAgbW92ZVJvYm90VG8gKHgsIHkpIHtcclxuICAgICAgICBjb25zdCB4UmF0ZSA9IHggLyB3aW5kb3cuaW5uZXJXaWR0aCAtIDAuNTtcclxuICAgICAgICBjb25zdCB5UmF0ZSA9IHkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAwLjU7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5yb3RhdGVZID0geFJhdGUgKiBNYXRoLlBJO1xyXG4gICAgICAgIHRoaXMucm9ib3Qucm90YXRlWCA9IHlSYXRlICogTWF0aC5QSS8zIC0gTWF0aC5QSS82O1xyXG4gICAgICAgIHRoaXMucm9ib3QuYXJtQW5nbGUgPSB5UmF0ZSAqIE1hdGguUEkvMiArIDAuMDU7XHJcbiAgICAgICAgdGhpcy5yb2JvdC53cmlzdEFuZ2xlID0geVJhdGUgKiAtTWF0aC5QSS8zXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlRG93biAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5jbG9zZUdyYWIoKVxyXG4gICAgfVxyXG4gICAgb25Nb3VzZVVwICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LmdyYWJBbmdsZSA9IDAuNVxyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzIChpc0ZvY3VzZWQpIHtcclxuICAgICAgICBpZiAoaXNGb2N1c2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVTlNFVCcpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c2luZ1RpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9Sb3RhdGlvblJlbmRlcmVyLnBhdXNlKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU0VUJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuYXV0b1JvdGF0aW9uUmVuZGVyZXIucGxheSgpIH0sIDIwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXV0b1JvdGF0ZSAoZnJhbWUpIHtcclxuICAgICAgICBjb25zdCB0aGV0YSA9IGZyYW1lLmluZGV4LzI1MDtcclxuICAgICAgICB0aGlzLm1vdmVSb2JvdFRvKFxyXG4gICAgICAgICAgICAod2luZG93LmlubmVyV2lkdGggKyBNYXRoLmNvcyh0aGV0YSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkvMixcclxuICAgICAgICAgICAgKHdpbmRvdy5pbm5lckhlaWdodCArIE1hdGguc2luKHRoZXRhKSAqIHdpbmRvdy5pbm5lckhlaWdodCkvMlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvQXBwLmpzIiwiaW1wb3J0ICdmcmFtZXNmbG93J1xyXG5pbXBvcnQgUm9ib3QgZnJvbSAnLi9Sb2JvdCdcclxuXHJcbnZhciBwb3N0cHJvY2Vzc2luZyA9IHt9O1xyXG52YXIgYm9rZWhfcGFyYW1zID0ge1xyXG4gICAgem5lYXI6IDAuMSxcclxuICAgIHpmYXI6IDEwLFxyXG4gICAgc2hhZGVyRm9jdXM6IGZhbHNlLFxyXG4gICAgZnN0b3A6IDIwLFxyXG4gICAgbWF4Ymx1cjogMixcclxuICAgIHNob3dGb2N1czogZmFsc2UsXHJcbiAgICBmb2NhbERlcHRoOiAxLjQsXHJcbiAgICBtYW51YWxkb2Y6IGZhbHNlLFxyXG4gICAgdmlnbmV0dGluZzogZmFsc2UsXHJcbiAgICBkZXB0aGJsdXI6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQgOiAwLjUsXHJcbiAgICBnYWluOiAwLjIsXHJcbiAgICBiaWFzOiAyLFxyXG4gICAgZnJpbmdlOiAzLFxyXG4gICAgZm9jYWxMZW5ndGg6IDIwLFxyXG4gICAgbm9pc2U6IHRydWUsXHJcbiAgICBwZW50YWdvbjogZmFsc2UsXHJcbiAgICBkaXRoZXJpbmc6IDBcclxufTtcclxuXHJcbmNsYXNzIFJvYm9TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBmcmFtZXNGbG93LnJlbmRlcih0aGlzLnJlbmRlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgU2NlbmVcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgY29uc3QgZm9nQ29sb3IgPSAweGYzZjNmMztcclxuICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoZm9nQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZyhmb2dDb2xvciwgNCwgNTApO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIENhbWVyYVxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDEsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEzO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAxO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdGF0aW9uLnggPSAwLjI1O1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcclxuICAgICAgICAvLyBQb3N0IFByb2NjZXNzaW5nXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbF9kZXB0aCA9IG5ldyBUSFJFRS5NZXNoRGVwdGhNYXRlcmlhbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb29rZWhQYXJhbXMoKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBSZW5kZXJlclxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFJbnB1dCAgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dCA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkICA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5yZW5kZXJSZXZlcnNlU2lkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIExpZ2h0c1xyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAwLjUpOyAvLyBQb2ludFxyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodC5wb3NpdGlvbi56ID0gMTA7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wb2ludExpZ2h0KTtcclxuICAgICAgICB0aGlzLmhlbWlzcGhlcmVMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoIDB4ZmZmZmZmLCAweDAwMDAwMCwgMSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuaGVtaXNwaGVyZUxpZ2h0KTtcclxuICAgICAgICAvLyBDcmVhdGluZyBncm91bmRcclxuICAgICAgICB0aGlzLmdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlciggNzAsIDQ1ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ncmlkSGVscGVyKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBSb2JvdFxyXG4gICAgICAgIHRoaXMucm9ib3QgPSBuZXcgUm9ib3QodGhpcylcclxuICAgIH1cclxuICAgIHNldEJvb2tlaFBhcmFtIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2tlaF9wYXJhbXMsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9va2VoUGFyYW1zKClcclxuICAgIH1cclxuICAgIHVwZGF0ZUJvb2tlaFBhcmFtcyAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBib2tlaF9wYXJhbXMpIGlmKGUgaW4gcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMpIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW2VdLnZhbHVlID0gYm9rZWhfcGFyYW1zW2VdO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1wiem5lYXJcIl0udmFsdWUgPSBib2tlaF9wYXJhbXMuem5lYXI7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ6ZmFyXCJdLnZhbHVlID0gYm9rZWhfcGFyYW1zLnpmYXI7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0Rm9jYWxMZW5ndGgoIGJva2VoX3BhcmFtcy5mb2NhbExlbmd0aCApXHJcbiAgICB9XHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcgKCkge1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lICA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgLTYwLCA2MCApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lLmFkZCggcG9zdHByb2Nlc3NpbmcuY2FtZXJhICk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcclxuICAgICAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcbiAgICAgICAgICAgIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcGFyYW1zICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMgKTtcclxuICAgICAgICBsZXQgYm9rZWhfc2hhZGVyID0gVEhSRUUuQm9rZWhTaGFkZXI7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBib2tlaF9zaGFkZXIudW5pZm9ybXMgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRDb2xvclwiXS52YWx1ZSA9IHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yLnRleHR1cmU7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0RGVwdGhcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aC50ZXh0dXJlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widGV4dHVyZVdpZHRoXCIgXS52YWx1ZSA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0ZXh0dXJlSGVpZ2h0XCJdLnZhbHVlID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICB1bmlmb3JtczogcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMsXHJcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYm9rZWhfc2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGJva2VoX3NoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICAgICAgZGVmaW5lczogeyBSSU5HUzogMywgU0FNUExFUzogMn1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSwgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lLmFkZCggcG9zdHByb2Nlc3NpbmcucXVhZCApO1xyXG5cdH1cclxuICAgIG9uUmVzaXplICgpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gcG9zdHByb2Nlc3NpbmcuY2FtZXJhLmFzcGVjdCA9IHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xyXG5cdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvciwgdHJ1ZSk7XHJcblx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsX2RlcHRoO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoLCB0cnVlKTtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHBvc3Rwcm9jZXNzaW5nLnNjZW5lLCBwb3N0cHJvY2Vzc2luZy5jYW1lcmEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvYm9TY2VuZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm9TY2VuZS5qcyIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9GcmFtZXNGbG93ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX0ZyYW1lc0Zsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRnJhbWVzRmxvdyk7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHQvLyBkZWZpbmluZyBmcmFtZXNGbG93IGFzIGEgZ2xvYmFsIG9iamVjdFxuXHRpZiAoISh3aW5kb3cuZnJhbWVzRmxvdyBpbnN0YW5jZW9mIF9GcmFtZXNGbG93Mi5kZWZhdWx0KSkge1xuXHQgICAgLy8gaWYgaXQgZGlkbid0IGRlZmluZSBiZWZvcmVcblx0ICAgIHdpbmRvdy5mcmFtZXNGbG93ID0gbmV3IF9GcmFtZXNGbG93Mi5kZWZhdWx0KCk7XG5cdH1cblxuXHQvLyBleHBvcnRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gd2luZG93LmZyYW1lc0Zsb3c7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0dmFyIF9SZW5kZXJlckFycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuXHR2YXIgX1JlbmRlcmVyQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXJBcnJheSk7XG5cblx0dmFyIF9SZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIF9SZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJlcik7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdC8vIENvbXBhdGliaWxpdHkgZm9yIGFsbCBicm93c2VycyAtIFBhdWwgSXJpc2ggdmVyc2lvblxuXHR3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0ICAgIH07XG5cdH1cblxuXHQvLyBGcmFtZXNGbG93XG5cdCgpO1xuXHR2YXIgRnJhbWVzRmxvdyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEZyYW1lc0Zsb3coKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyYW1lc0Zsb3cpO1xuXG5cdCAgICAgICAgdGhpcy5mcmFtZXMgPSAwO1xuXHQgICAgICAgIHRoaXMuX2ZwcyA9IDMwO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IHtcblx0ICAgICAgICAgICAgbWluaW11bUFjY2VwdGFibGVGUFM6IDMwXG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnJlbmRlcmVycyA9IG5ldyBfUmVuZGVyZXJBcnJheTIuZGVmYXVsdCgpO1xuXHQgICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB7XG5cdCAgICAgICAgICAgIGxvZ3M6IG5ldyBBcnJheSgxMDApLFxuXHQgICAgICAgICAgICBsb2dzUG9pbnRlcjogMCxcblx0ICAgICAgICAgICAgbGFzdFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuXHQgICAgICAgICAgICBsYXN0RnJhbWVGUFM6IDMwLFxuXHQgICAgICAgICAgICByYXRpbzogMSxcblx0ICAgICAgICAgICAgc3RhdHVzOiAwLFxuXHQgICAgICAgICAgICBhdmVyYWdlOiB7XG5cdCAgICAgICAgICAgICAgICBmcHM6IDMwLFxuXHQgICAgICAgICAgICAgICAgcmF0aW86IDEsXG5cdCAgICAgICAgICAgICAgICBzdGF0dXM6IDBcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5yZXF1ZXN0TG9vcCgpO1xuXHQgICAgfVxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoRnJhbWVzRmxvdywgW3tcblx0ICAgICAgICBrZXk6ICdnZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaWQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmdldChpZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRBbGxCeUNsYXNzJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsQnlDbGFzcyhjbGFzc05hbWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmZpbHRlcihmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5jbGFzcyA9PSBjbGFzc05hbWU7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmVSZW5kZXJlckJ5SWQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVSZW5kZXJlckJ5SWQoaWQpIHtcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMucmVtb3ZlKGlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlKSB7XG5cdCAgICAgICAgICAgIHZhciBpc0dsb2JhbENoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuXHQgICAgICAgICAgICB2YXIgZXJyb3IgPSBudWxsO1xuXHQgICAgICAgICAgICB2YXIgcG9pbnRlciA9IGlzR2xvYmFsQ2hlY2sgPyAnYW55JyA6ICd0aGlzJztcblx0ICAgICAgICAgICAgaWYgKHJhdGUgPCAwKSBlcnJvciA9ICdGUFMgbXVzdCBub3QgYmUgYSBuZWdhdGl2ZSBudW1iZXIhJztlbHNlIGlmIChyYXRlIDwgMzAgJiYgcmF0ZSA+IDAgJiYgMzAgLyByYXRlICUgMSAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIGxlc3MgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6ICgzMCAvIEZQUykgc2hvdWxkIGJlIGludGVnZXInO2Vsc2UgaWYgKHJhdGUgPiAzMCAmJiByYXRlICUgMzAgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBtb3JlIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoRlBTICUgMzAgPT0gMCknO1xuXHQgICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHRocm93ICdjYW5cXCd0IHNldCAnICsgcmF0ZSArICdmcHMgZm9yIHRoaXMgcmVuZGVyZXIuIFJFQVNPTjogPCcgKyBlcnJvciArICc+Jztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheUFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXlBbGwoKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5nZXRBbGxSZW5kZXJlcnMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5wbGF5KCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2VBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZUFsbCgpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5nZXRBbGxSZW5kZXJlcnMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IF9zdGVwMi52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5wYXVzZSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoY2xhc3NOYW1lLCBmdW5jKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIGZ1bmMgPSBjbGFzc05hbWU7XG5cdCAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX1JlbmRlcmVyMi5kZWZhdWx0KHRoaXMsIHtcblx0ICAgICAgICAgICAgICAgIGlkOiB0aGlzLnJlbmRlcmVycy5sZW5ndGgsXG5cdCAgICAgICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG5cdCAgICAgICAgICAgIH0sIGZ1bmMpO1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdvbkxhZycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTGFnKG1pbmltdW1GUFMsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgbWluaW11bUZQUyA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjayA9IG1pbmltdW1GUFM7ZWxzZSB0aGlzLm9wdGlvbnMubWluaW11bUFjY2VwdGFibGVGUFMgPSBtaW5pbXVtRlBTO1xuXHQgICAgICAgICAgICB0aGlzLm9uTGFnQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVnaXN0ZXJQZXJmb3JtYW5jZUxvZycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyUGVyZm9ybWFuY2VMb2cocmVuZGVyVGltZSkge1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBmcHNcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPSAxMDAwIC8gcmVuZGVyVGltZTtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgbGFnc1xuXHQgICAgICAgICAgICBpZiAodGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPCB0aGlzLm9wdGlvbnMubWluaW11bUFjY2VwdGFibGVGUFMpIGlmICh0eXBlb2YgdGhpcy5vbkxhZ0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB0aGlzLm9uTGFnQ2FsbGJhY2sodGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFNcblx0ICAgICAgICAgICAgLy8gbG9nZ2luZ1xuXHQgICAgICAgICAgICApO3RoaXMucGVyZm9ybWFuY2UubG9nc1t0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyXSA9IHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyID0gKHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgKyAxKSAlIDEwMDtcblx0ICAgICAgICAgICAgLy8gYW5hbHl6aW5nIGxvZ3Ncblx0ICAgICAgICAgICAgdGhpcy5hbmFseXplUGVyZm9ybWFuY2UoKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnYW5hbHl6ZVBlcmZvcm1hbmNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYW5hbHl6ZVBlcmZvcm1hbmNlKCkge1xuXHQgICAgICAgICAgICB2YXIgYWxsRGF0YSA9IHRoaXMucGVyZm9ybWFuY2UubG9ncy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PSAnbnVtYmVyJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBhdmVyYWdlIG9mIGRhdGFcblx0ICAgICAgICAgICAgKTt2YXIgRlBTU3VtID0gMDtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gYWxsRGF0YVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX3N0ZXAzLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIEZQU1N1bSArPSBkYXRhO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgPSBGUFNTdW0gLyBhbGxEYXRhLmxlbmd0aDtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgcGVyZm9ybWFuY2UgcGVyY2VudGFnZVxuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLnJhdGlvID0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgLyAzMDtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnJhdGlvID0gdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyAvIDMwO1xuXHQgICAgICAgICAgICAvLyBkZWZpbmluZyBzdGF0dXNcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyk7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnX2dldFN0YXR1c09mRlBTJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFN0YXR1c09mRlBTKGZwcykge1xuXHQgICAgICAgICAgICB2YXIgcmF0aW8gPSBmcHMgLyB0aGlzLmZwcztcblx0ICAgICAgICAgICAgdmFyIHN0YXR1cyA9IC0zOyAvLyBXT1JTVFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjMpIHN0YXR1cyA9IC0yOyAvLyBCQURcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC42KSBzdGF0dXMgPSAtMTsgLy8gTk9UIEJBRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjkpIHN0YXR1cyA9IDA7IC8vIE9LXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDEuMykgc3RhdHVzID0gMTsgLy8gR09PRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAxLjYpIHN0YXR1cyA9IDI7IC8vIEVYQ0VMTEVOVFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAyKSBzdGF0dXMgPSAzOyAvLyBCRVNUXG5cdCAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlcXVlc3RMb29wJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdExvb3AoKSB7XG5cdCAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy5yZXF1ZXN0TG9vcC5iaW5kKHRoaXMpKTtcblx0ICAgICAgICAgICAgdGhpcy5mcmFtZXMrKztcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5yZWdpc3RlclBlcmZvcm1hbmNlTG9nKERhdGUubm93KCkgLSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXApO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnBzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKHJhdGUsIHRydWUpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gRnJhbWVzRmxvdztcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IEZyYW1lc0Zsb3c7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBSZW5kZXJlcihmcmFtZXNGbG93LCBvcHRpb25zLCBmdW5jKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuXHQgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXHQgICAgICAgIHRoaXMuY2xhc3MgPSBvcHRpb25zLmNsYXNzIHx8ICcnO1xuXHQgICAgICAgIHRoaXMucHJvcHMgPSB7XG5cdCAgICAgICAgICAgIGlzRGVidWdpbmc6IGZhbHNlXG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLmZyYW1lc0Zsb3cgPSBmcmFtZXNGbG93O1xuXHQgICAgICAgIHRoaXMuX2ZwcyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xuXHQgICAgICAgIHRoaXMuZnJhbWVzID0gMDtcblx0ICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlO1xuXHQgICAgICAgIHRoaXMucmVuZGVyKCk7XG5cdCAgICB9XG5cdCAgICAvLyBSZW5kZXIgbmV4dCBmcmFtZVxuXG5cblx0ICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlciwgW3tcblx0ICAgICAgICBrZXk6ICduZXh0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5yZW1vdmVSZW5kZXJlckJ5SWQodGhpcy5pZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWJ1Z2luZyA9IHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnc2hvdWxkUmVuZGVyVGhpc0ZyYW1lJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkUmVuZGVyVGhpc0ZyYW1lKCkge1xuXHQgICAgICAgICAgICAvLyBhbGwgY29uZGl0aW9ucyB0byBwYXVzZSBvciBwbGF5IHJlbmRlcmluZ1xuXHQgICAgICAgICAgICB2YXIgY29uZGl0aW9ucyA9IFshdGhpcy5wcm9wcy5pc0RlYnVnaW5nLCB0aGlzLmZyYW1lc0Zsb3cuZnJhbWVzICUgKDMwIC8gTWF0aC5taW4odGhpcy5mcHMsIDMwKSkgPT0gMF07XG5cdCAgICAgICAgICAgIHZhciByZXQgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNvbmRpdGlvbnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQgJiYgY29uZDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEZyYW1lT2JqZWN0VG9SZXR1cm4nLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGcmFtZU9iamVjdFRvUmV0dXJuKCkge1xuXHQgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgcmVuZGVyZXI6IHRoaXMsXG5cdCAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5mcmFtZXMsXG5cdCAgICAgICAgICAgICAgICBmcHM6IHRoaXMuZnBzLFxuXHQgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2U6IHtcblx0ICAgICAgICAgICAgICAgICAgICBmcHM6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMsXG5cdCAgICAgICAgICAgICAgICAgICAgcmF0aW86IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5yYXRpbyxcblx0ICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5zdGF0dXMsXG5cdCAgICAgICAgICAgICAgICAgICAgYXZlcmFnZTogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmF2ZXJhZ2Vcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVuZGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICAgICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJUaGlzRnJhbWUoKSB8fCB0aGlzLnNob3VsZEdvTmV4dCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbiA9IDA7XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5mcHMgPiAzMCkgaXRlcmF0aW9uID0gTWF0aC5tYXgodGhpcy5mcHMsIDMwKSAvIDMwO2Vsc2UgaXRlcmF0aW9uID0gMzAgLyB0aGlzLmZwcztcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lcysrO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5mdW5jKHRoaXMuZ2V0RnJhbWVPYmplY3RUb1JldHVybigpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICBpZiAobmV3RlBTID09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShuZXdGUFMpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZwcyB8fCB0aGlzLmZyYW1lc0Zsb3cuZnBzO1xuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIFJlbmRlcmVyO1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgUmVuZGVyZXJBcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFJlbmRlcmVyQXJyYXkoKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyQXJyYXkpO1xuXG5cdCAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdhcnJheScpIHRoaXMuYXJyID0gYXJnc1swXTtlbHNlIHRoaXMuYXJyID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShBcnJheSwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG5cdCAgICB9XG5cblx0ICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlckFycmF5LCBbe1xuXHQgICAgICAgIGtleTogJ2dldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFycltpXTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnc2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGksIHZhbCkge1xuXHQgICAgICAgICAgICB0aGlzLmFycltpXSA9IHZhbDtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3B1c2gnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKHZhbCkge1xuXHQgICAgICAgICAgICB0aGlzLmFyci5wdXNoKHZhbCk7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoaSkge1xuXHQgICAgICAgICAgICB0aGlzLmFycltpXSA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgdGhpcy5hcnIuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZmlsdGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyKGNvbmRGdW5jKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJBcnJheSh0aGlzLmFyci5maWx0ZXIoY29uZEZ1bmMpKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZWFjaCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goY2IpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIGNiKGl0ZW0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3RvQXJyYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnI7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbW92ZSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnbmV4dCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5uZXh0KCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucGF1c2UoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucGxheSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnbGVuZ3RoJyxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aDtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gUmVuZGVyZXJBcnJheTtcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyQXJyYXk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mcmFtZXNmbG93L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLkpTT05Mb2FkZXIoKTtcclxuXHJcbmNvbnN0IGJsYWNrTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwMDAsIHNoaW5pbmVzczogMCB9KTtcclxuY29uc3QgZGFya01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4OTk5OTk5LCBzaGluaW5lc3M6IDEwMCB9KTtcclxuY29uc3QgbGlnaHRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGVlZWVlZSwgc2hpbmluZXNzOiA3MCB9KTtcclxuXHJcbmNvbnN0IG9iamVjdHNOYW1lcyA9IFsnYXJtMScsICdhcm0yJywgJ2ZpbmdlcicsICdoYW5kJywgJ3Jlc3QnLCAncm90YXRvcicsICd3cmlzdCcsICd3cmlzdGJvbmUnXTtcclxuY29uc3QgbG9hZCA9IChvYmplY3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSAnLi9hc3NldHMvb2JqZWN0cy8nICsgb2JqZWN0TmFtZSArICcuanNvbic7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgbG9hZGVyLmxvYWQodXJsLCAoZ2VvbWV0cnksIG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsID0gbGlnaHRNYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT09ICdmaW5nZXInKSBtYXRlcmlhbCA9IGJsYWNrTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIGlmIChbJ3dyaXN0Ym9uZScsICdoYW5kJywgJ2FybTEnLCAncmVzdCddLmluY2x1ZGVzKG9iamVjdE5hbWUpKSBtYXRlcmlhbCA9IGRhcmtNYXRlcmlhbDtcclxuICAgICAgICAgICAgcmVzb2x2ZShuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59O1xyXG5jb25zdCBsb2FkQWxsT2JqZWN0c0FuZFB1dEluID0gKG9iamVjdHMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBlcnIpID0+IHtcclxuICAgICAgICBsZXQgbG9hZGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IG9iamVjdE5hbWUgb2Ygb2JqZWN0c05hbWVzKSB7XHJcbiAgICAgICAgICAgIGxvYWQob2JqZWN0TmFtZSkudGhlbigobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0c1tvYmplY3ROYW1lXSA9IG1lc2g7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRlZENvdW50ID09PSBvYmplY3RzTmFtZXMubGVuZ3RoKSByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuY2xhc3MgUm9ib3Qge1xyXG4gICAgY29uc3RydWN0b3IgKHJvYm9TY2VuZSkge1xyXG4gICAgICAgIHRoaXMucm9ib1NjZW5lID0gcm9ib1NjZW5lO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSByb2JvU2NlbmUuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXJ0cyA9IHt9O1xyXG4gICAgICAgIGxvYWRBbGxPYmplY3RzQW5kUHV0SW4odGhpcy5wYXJ0cykudGhlbih0aGlzLnJlYWR5LmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgLy8gQ29tYmluaW5nIHRoaW5ncyB0b2dldGhlclxyXG4gICAgICAgIHRoaXMucGFydHMucmVzdC5hZGQodGhpcy5wYXJ0cy5yb3RhdG9yKTtcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3IucG9zaXRpb24ueSA9IDM7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLmFkZCh0aGlzLnBhcnRzLmFybTEpO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5wb3NpdGlvbi55ID0gMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTEuYWRkKHRoaXMucGFydHMuYXJtMik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnBvc2l0aW9uLnkgPSA0LjU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLmFkZCh0aGlzLnBhcnRzLndyaXN0KTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0LmFkZCh0aGlzLnBhcnRzLndyaXN0Ym9uZSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucG9zaXRpb24ueSA9IDcuNTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5wb3NpdGlvbi54ID0gLTAuMDY7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUuYWRkKHRoaXMucGFydHMuaGFuZCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5oYW5kLmFkZCh0aGlzLnBhcnRzLmZpbmdlcik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueSA9IDEuNDtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi54ID0gMC4yO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnogPSAwLjM1O1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnggPSAwLjI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyID0gdGhpcy5wYXJ0cy5maW5nZXIuY2xvbmUoKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmhhbmQuYWRkKHRoaXMucGFydHMuZmluZ2VyMik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5wb3NpdGlvbi54ID0gLTAuNDtcclxuXHJcbiAgICAgICAgLy8gYWRkaW5nIHJlc3QgdG8gc2NlbmVcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBhcnRzLnJlc3QpO1xyXG5cclxuICAgICAgICAvLyBIaWRkZW4gcGFyYW1ldGVyc1xyXG4gICAgICAgIHRoaXMucm90YXRlWSA9IC0wLjQ7XHJcbiAgICAgICAgdGhpcy5yb3RhdGVYID0gMDtcclxuICAgICAgICB0aGlzLmFybUFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLndyaXN0QW5nbGUgPSAtTWF0aC5QSS84O1xyXG4gICAgICAgIHRoaXMuZ3JhYkFuZ2xlID0gTWF0aC5QSS82O1xyXG5cclxuICAgICAgICAvLyBTZXQgaW5pdGFsIHZhbHVlc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3JvdGF0ZVkpO1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55ID0gdGhpcy5fcm90YXRlWTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCA9IHRoaXMuX3JvdGF0ZVg7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLnggPSB0aGlzLl9hcm1BbmdsZTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54ID0gdGhpcy5fd3Jpc3RBbmdsZTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56ID0gdGhpcy5fZ3JhYkFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56ID0gdGhpcy5fZ3JhYkFuZ2xlO1xyXG5cclxuICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRlWSAoZGVnKSB7XHJcbiAgICAgICAgdGhpcy5fcm90YXRlWSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdGF0ZVkgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGVZXHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRlWCAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAtTWF0aC5QSS8zKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIDcqTWF0aC5QSS8xMik7XHJcbiAgICAgICAgdGhpcy5fcm90YXRlWCA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdGF0ZVggKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGVYXHJcbiAgICB9XHJcbiAgICBzZXQgYXJtQW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGguUEkgLSBkZWc7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAtTWF0aC5QSS8xMik7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCA1Kk1hdGguUEkvNik7XHJcbiAgICAgICAgdGhpcy5fYXJtQW5nbGUgPSBkZWdcclxuICAgIH1cclxuICAgIGdldCBhcm1BbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FybUFuZ2xlXHJcbiAgICB9XHJcbiAgICBzZXQgd3Jpc3RBbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAtTWF0aC5QSS8yKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIE1hdGguUEkvMik7XHJcbiAgICAgICAgdGhpcy5fd3Jpc3RBbmdsZSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IHdyaXN0QW5nbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93cmlzdEFuZ2xlXHJcbiAgICB9XHJcbiAgICBzZXQgZ3JhYkFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIDApO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgTWF0aC5QSSk7XHJcbiAgICAgICAgZGVnIC09IE1hdGguUEkvNjtcclxuICAgICAgICB0aGlzLl9ncmFiQW5nbGUgPSAtZGVnLzJcclxuICAgIH1cclxuICAgIGdldCBncmFiQW5nbGUgKCkge1xyXG4gICAgICAgIHJldHVybiAtKDIqdGhpcy5fZ3JhYkFuZ2xlLU1hdGguUEkvNilcclxuICAgIH1cclxuICAgIGNsb3NlR3JhYiAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSAwXHJcbiAgICB9XHJcbiAgICBvcGVuR3JhYiAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSBNYXRoLlBJLzJcclxuICAgIH1cclxuICAgIHRvZ2dsZUdyYWIgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdyYWJBbmdsZSA+IE1hdGguUEkvMykgdGhpcy5jbG9zZUdyYWIoKTtcclxuICAgICAgICBlbHNlIHRoaXMub3BlbkdyYWIoKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55ICs9ICh0aGlzLl9yb3RhdGVZIC0gdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54ICs9ICh0aGlzLl9yb3RhdGVYIC0gdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuYXJtMi5yb3RhdGlvbi54ICs9ICh0aGlzLl9hcm1BbmdsZSAtIHRoaXMucGFydHMuYXJtMi5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54ICs9ICh0aGlzLl93cmlzdEFuZ2xlIC0gdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueiArPSAodGhpcy5fZ3JhYkFuZ2xlIC0gdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueikgLyAzO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueiArPSAodGhpcy5fZ3JhYkFuZ2xlIC0gdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnopIC8gM1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9ib3RcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsImNsYXNzIE5hdmlnYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gJChxdWVyeSArICcgLnNlbGVjdC1oaWdobGlnaHQnKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gJCQocXVlcnkgKyAnIGxpJyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nUmVuZGVyZXIgPSB3aW5kb3cuZnJhbWVzRmxvdy5yZW5kZXIodGhpcy5zY3JvbGxpbmdSZW5kZXJlck1ldGhvZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsICgpID0+IHRoaXMuc2Nyb2xsaW5nUmVuZGVyZXIucGF1c2UoKSlcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdSZW5kZXJlci5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0LnN0eWxlLndpZHRoID0gMTAwIC8gdGhpcy5pdGVtcy5sZW5ndGggKyAnJSc7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7IHRoYXQub25Nb3VzZU92ZXJJdGVtKHRoaXMpIH07XHJcbiAgICAgICAgICAgIGl0ZW0ub25jbGljayA9IGZ1bmN0aW9uICgpIHsgdGhhdC5vbkNsaWNrT25JdGVtKHRoaXMpIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Nb3VzZU92ZXJJdGVtIChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuc3R5bGUubGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdCArICdweCdcclxuICAgIH1cclxuICAgIG9uQ2xpY2tPbkl0ZW0gKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gJChgW2RhdGEtdGl0bGU9JHtlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJyl9XWApO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0ID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdSZW5kZXJlci5wbGF5KClcclxuICAgIH1cclxuICAgIHNjcm9sbGluZ1JlbmRlcmVyTWV0aG9kIChmcmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5taW4odGhpcy5zY3JvbGxUYXJnZXQsIChkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkpIC0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHdpbmRvdy5zY3JvbGxZICsgZGlzdGFuY2UvMTApO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IDEwKSBmcmFtZS5yZW5kZXJlci5wYXVzZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuL1NsaWRlcidcclxuXHJcbmNvbnN0IHNldEJldHdlZW4gPSAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG51bWJlciwgbWF4KSwgbWluKVxyXG59O1xyXG5cclxuY2xhc3MgR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmxlZnRCdXR0b24gPSAkKHF1ZXJ5ICsgJyA+IC5sZWZ0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24gPSAkKHF1ZXJ5ICsgJyA+IC5yaWdodC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkgKyAnID4gLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gJCQocXVlcnkgKyAnID4gLmNvbnRhaW5lciA+IGltZycpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlcignYm9keSA+IC5mdWxsLXZpZXctc2xpZGVyJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5tb3ZlKC0zMDApO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMubW92ZSgzMDApO1xyXG4gICAgICAgIGZvciAobGV0IGltYWdlIG9mIHRoaXMuaW1hZ2VzKSBpbWFnZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0Lm9uUmVxdWVzdEZvclNsaWRlcyh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB3aWR0aCAoKSB7XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMpIHN1bSArPSBpbWFnZS5jbGllbnRXaWR0aFxyXG4gICAgICAgIHJldHVybiBzdW1cclxuICAgIH1cclxuICAgIGdldCBtYXhSaWdodCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIC0odGhpcy53aWR0aCAtIHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aClcclxuICAgIH1cclxuICAgIGRpc2FibGVCdXR0b24gKHdoaWNoKSB7XHJcbiAgICAgICAgdGhpc1t3aGljaCArICdCdXR0b24nXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgZW5hYmxlQWxsQnV0dG9ucyAoKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBtb3ZlIChzdGVwKSB7XHJcbiAgICAgICAgY29uc3QgbWF4UmlnaHQgPSB0aGlzLm1heFJpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmlnaHQgPSBzZXRCZXR3ZWVuKHRoaXMuY29udGFpbmVyUmlnaHQgKyBzdGVwLCBtYXhSaWdodCwgMCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucmlnaHQgPSB0aGlzLmNvbnRhaW5lclJpZ2h0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLmVuYWJsZUFsbEJ1dHRvbnMoKTtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJSaWdodCA9PT0gbWF4UmlnaHQpIHRoaXMuZGlzYWJsZUJ1dHRvbignbGVmdCcpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lclJpZ2h0ID09PSAwKSB0aGlzLmRpc2FibGVCdXR0b24oJ3JpZ2h0JylcclxuICAgIH1cclxuICAgIG9uUmVxdWVzdEZvclNsaWRlcyAoaW1hZ2UpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaW1hZ2VzKSBpZiAodGhpcy5pbWFnZXNbaV0gPT09IGltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLnNob3coaSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJjb25zdCBzZXRCZXR3ZWVuID0gKG51bWJlciwgbWluLCBtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihudW1iZXIsIG1heCksIG1pbilcclxufTtcclxuXHJcbmNsYXNzIFNsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbGxlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSAkKHF1ZXJ5ICsgJyBpbWcnKTtcclxuICAgICAgICB0aGlzLmdhbGxlcnkgPSBnYWxsZXJ5O1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWluZXIpIHRoaXMuaGlkZGVuKClcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5pc0FjdGl2ZSkgdGhpcy5oaWRkZW4oKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0JyAmJiB0aGlzLmlzQWN0aXZlKSB0aGlzLmltYWdlSW5kZXgtLTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0xlZnQnICYmIHRoaXMuaXNBY3RpdmUpIHRoaXMuaW1hZ2VJbmRleCsrO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXQgaW1hZ2VJbmRleCAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gc2V0QmV0d2VlbihpbmRleCwgMCwgdGhpcy5nYWxsZXJ5LmltYWdlcy5sZW5ndGgtMSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmdhbGxlcnkuaW1hZ2VzW3RoaXMuaW5kZXhdLnNyYztcclxuICAgIH1cclxuICAgIGdldCBpbWFnZUluZGV4ICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleFxyXG4gICAgfVxyXG4gICAgc2hvdyAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmltYWdlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgaGlkZGVuICgpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==