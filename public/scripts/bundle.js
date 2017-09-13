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
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: #ffffff; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body .full-view-slider {\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.6);\n    transition-duration: 0.3s; }\n    body .full-view-slider.active {\n      opacity: 1;\n      pointer-events: auto; }\n    body .full-view-slider > img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      max-width: 80%;\n      max-height: 70%;\n      z-index: 1000; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    overflow: hidden; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n      @media (max-width: 1000px) {\n        body header h1 {\n          font-size: 20px;\n          width: 80%;\n          top: 70%;\n          text-align: center;\n          white-space: normal;\n          box-shadow: none; } }\n      @media (max-width: 460px) {\n        body header h1 {\n          background: linear-gradient(rgba(56, 56, 56, 0), rgba(56, 56, 56, 0.3), #383838, #383838);\n          top: 80%;\n          font-weight: normal;\n          font-size: 22px;\n          padding: 200px 200px; } }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    @media (max-width: 650px) {\n      body nav {\n        background: linear-gradient(#383838, #2b2b2b, #2b2b2b, #3a3a3a); } }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 20%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n      @media (max-width: 650px) {\n        body nav .select-highlight {\n          display: none; } }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      @media (max-width: 650px) {\n        body nav ul {\n          flex-direction: column; } }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 16px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        @media (max-width: 1000px) {\n          body nav ul li {\n            flex-basis: auto;\n            flex-grow: 1;\n            font-size: 13px; } }\n        @media (max-width: 650px) {\n          body nav ul li {\n            border-bottom: 1px solid #333; } }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF);\n    padding: 70px 0; }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: auto;\n      padding: 55px 0;\n      clear: both; }\n      @media (max-width: 1000px) {\n        body main section {\n          width: 80%; } }\n      @media (max-width: 750px) {\n        body main section {\n          text-align: center; }\n          body main section ul {\n            text-align: right; } }\n      body main section > img {\n        float: left;\n        width: 305px; }\n        @media (max-width: 900px) {\n          body main section > img {\n            width: 190px;\n            margin: auto; } }\n        @media (max-width: 750px) {\n          body main section > img {\n            float: none; } }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        @media (max-width: 900px) {\n          body main section article {\n            top: 0; } }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 27px; }\n      body main section[data-title='portfolio'] {\n        padding-top: 40px; }\n        body main section[data-title='portfolio'] > img {\n          margin-top: 80px;\n          margin-right: 15px; }\n      body main section[data-title='teaching'] {\n        padding-top: 30px; }\n      body main section[data-title='gallery'] {\n        height: 400px; }\n        body main section[data-title='gallery'] .gallery {\n          background: #222;\n          margin-top: 20px;\n          overflow: hidden;\n          position: relative; }\n          body main section[data-title='gallery'] .gallery .container {\n            position: relative; }\n          body main section[data-title='gallery'] .gallery img {\n            cursor: pointer;\n            height: 200px;\n            transition-duration: 0.2s;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            -webkit-user-drag: none;\n            -moz-user-drag: none;\n            -ms-user-drag: none;\n            user-drag: none; }\n            body main section[data-title='gallery'] .gallery img:hover {\n              opacity: 0.85;\n              transform: scale(0.95); }\n            body main section[data-title='gallery'] .gallery img:active {\n              opacity: 0.5;\n              transition-duration: 0.1s;\n              transform: scale(0.9); }\n          body main section[data-title='gallery'] .gallery .container {\n            flex-wrap: nowrap;\n            display: flex;\n            flex-direction: row;\n            right: 0;\n            transition-duration: 0.5s; }\n          body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n            width: 50px;\n            height: 100px;\n            background: rgba(0, 0, 0, 0.6);\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            opacity: 0.3; }\n            body main section[data-title='gallery'] .gallery .left-button.active, body main section[data-title='gallery'] .gallery .right-button.active {\n              cursor: pointer;\n              opacity: 0.8;\n              transition-duration: 0.3s; }\n              body main section[data-title='gallery'] .gallery .left-button.active:hover, body main section[data-title='gallery'] .gallery .right-button.active:hover {\n                opacity: 1; }\n            body main section[data-title='gallery'] .gallery .left-button i, body main section[data-title='gallery'] .gallery .right-button i {\n              position: absolute;\n              background: white;\n              width: 5px;\n              height: 30px;\n              top: 50%;\n              left: 18px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%); }\n              body main section[data-title='gallery'] .gallery .left-button i:before, body main section[data-title='gallery'] .gallery .right-button i:before {\n                content: ' ';\n                position: absolute;\n                background: white;\n                width: 6px;\n                height: 30px;\n                transform: rotate(90deg) translate(-12px, 12px); }\n          body main section[data-title='gallery'] .gallery .left-button {\n            left: 0; }\n            body main section[data-title='gallery'] .gallery .left-button i {\n              top: 39%;\n              left: 16px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%) rotateZ(180deg); }\n          body main section[data-title='gallery'] .gallery .right-button {\n            right: 0; }\n      body main section[data-title='contact'] {\n        padding-top: 20px;\n        height: 650px; }\n        body main section[data-title='contact'] iframe {\n          margin-top: 20px; }\n        body main section[data-title='contact'] .details {\n          margin-top: 40px; }\n          body main section[data-title='contact'] .details p {\n            margin: 6px;\n            font-size: 16px; }\n            body main section[data-title='contact'] .details p a {\n              text-decoration: none;\n              color: #000; }\n              body main section[data-title='contact'] .details p a:hover {\n                color: #AAA; }\n            body main section[data-title='contact'] .details p i.fa {\n              margin-left: 10px; }\n              body main section[data-title='contact'] .details p i.fa.fa-map-marker {\n                margin-right: 2px;\n                color: #ff0000; }\n              body main section[data-title='contact'] .details p i.fa.fa-phone {\n                color: #33aae0; }\n              body main section[data-title='contact'] .details p i.fa.fa-fax {\n                color: #1eaa6d; }\n              body main section[data-title='contact'] .details p i.fa.fa-envelope {\n                color: #e6be1b; }\n  body footer {\n    background: #333;\n    width: 100%;\n    height: 100px;\n    text-align: center;\n    color: #d4d4d4;\n    font-weight: 100;\n    font-size: 13px;\n    position: relative; }\n    body footer span {\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: 2px;\n      transform: translate(-50%, -50%);\n      cursor: default; }\n      body footer span i {\n        color: #fff833; }\n      body footer span a {\n        text-decoration: none;\n        color: #FFF;\n        cursor: pointer;\n        display: inline-block;\n        font-weight: normal;\n        transition-duration: 0.2s;\n        transform: translateZ(1px);\n        text-shadow: 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1); }\n        body footer span a:hover {\n          opacity: 0.8;\n          color: yellow;\n          transform: translateZ(1px) translateY(-5px) scale(1.02);\n          text-shadow: 0 10px 5px rgba(255, 255, 0, 0.1), 0 5px 5px rgba(255, 255, 0, 0.25), 0 2px 5px rgba(255, 255, 0, 0.8); }\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzlhMDRiYzNjNDA3YjUxZmI3YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImFwcCIsIkFwcCIsInJvYm9TY2VuZSIsIm5hdmlnYXRpb24iLCJnYWxsZXJ5Iiwicm9ib3QiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3ZlIiwiYmluZCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwiZm9jdXMiLCJmb2N1c2luZ1RpbWVvdXQiLCJhdXRvUm90YXRpb25SZW5kZXJlciIsImZyYW1lc0Zsb3ciLCJyZW5kZXIiLCJhdXRvUm90YXRlIiwiZXZlbnQiLCJmb2N1c2VkIiwidG91Y2hlcyIsImUiLCJtb3ZlUm9ib3RUbyIsInBhZ2VYIiwicGFnZVkiLCJ4IiwieSIsInhSYXRlIiwiaW5uZXJXaWR0aCIsInlSYXRlIiwiaW5uZXJIZWlnaHQiLCJyb3RhdGVZIiwiTWF0aCIsIlBJIiwicm90YXRlWCIsImFybUFuZ2xlIiwid3Jpc3RBbmdsZSIsImNsb3NlR3JhYiIsImdyYWJBbmdsZSIsImZyYW1lIiwidGhldGEiLCJpbmRleCIsImNvcyIsInNpbiIsImlzRm9jdXNlZCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJwYXVzZSIsInNldFRpbWVvdXQiLCJwbGF5IiwicG9zdHByb2Nlc3NpbmciLCJib2tlaF9wYXJhbXMiLCJ6bmVhciIsInpmYXIiLCJzaGFkZXJGb2N1cyIsImZzdG9wIiwibWF4Ymx1ciIsInNob3dGb2N1cyIsImZvY2FsRGVwdGgiLCJtYW51YWxkb2YiLCJ2aWduZXR0aW5nIiwiZGVwdGhibHVyIiwidGhyZXNob2xkIiwiZ2FpbiIsImJpYXMiLCJmcmluZ2UiLCJmb2NhbExlbmd0aCIsIm5vaXNlIiwicGVudGFnb24iLCJkaXRoZXJpbmciLCJSb2JvU2NlbmUiLCJjb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsImluaXQiLCJvblJlc2l6ZSIsInNjZW5lIiwiVEhSRUUiLCJTY2VuZSIsImZvZ0NvbG9yIiwiYmFja2dyb3VuZCIsIkNvbG9yIiwiZm9nIiwiRm9nIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJyb3RhdGlvbiIsImFkZCIsIm1hdGVyaWFsX2RlcHRoIiwiTWVzaERlcHRoTWF0ZXJpYWwiLCJpbml0UG9zdFByb2Nlc3NpbmciLCJ1cGRhdGVCb29rZWhQYXJhbXMiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRTaXplIiwiZ2FtbWFJbnB1dCIsImdhbW1hT3V0cHV0Iiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInJlbmRlclJldmVyc2VTaWRlZCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInBvaW50TGlnaHQiLCJQb2ludExpZ2h0IiwiaGVtaXNwaGVyZUxpZ2h0IiwiSGVtaXNwaGVyZUxpZ2h0IiwiZ3JpZEhlbHBlciIsIkdyaWRIZWxwZXIiLCJjaGFuZ2VzIiwiT2JqZWN0IiwiYXNzaWduIiwiYm9rZWhfdW5pZm9ybXMiLCJ2YWx1ZSIsInNldEZvY2FsTGVuZ3RoIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicGFyYW1zIiwibWluRmlsdGVyIiwiTGluZWFyRmlsdGVyIiwibWFnRmlsdGVyIiwiZm9ybWF0IiwiUkdCRm9ybWF0IiwicnRUZXh0dXJlRGVwdGgiLCJXZWJHTFJlbmRlclRhcmdldCIsInJ0VGV4dHVyZUNvbG9yIiwiYm9rZWhfc2hhZGVyIiwiQm9rZWhTaGFkZXIiLCJVbmlmb3Jtc1V0aWxzIiwiY2xvbmUiLCJ1bmlmb3JtcyIsInRleHR1cmUiLCJtYXRlcmlhbEJva2VoIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImRlZmluZXMiLCJSSU5HUyIsIlNBTVBMRVMiLCJxdWFkIiwiTWVzaCIsIlBsYW5lR2VvbWV0cnkiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY2xlYXIiLCJvdmVycmlkZU1hdGVyaWFsIiwibG9hZGVyIiwiSlNPTkxvYWRlciIsImJsYWNrTWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIiwic2hpbmluZXNzIiwiZGFya01hdGVyaWFsIiwibGlnaHRNYXRlcmlhbCIsIm9iamVjdHNOYW1lcyIsImxvYWQiLCJvYmplY3ROYW1lIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwiaW5jbHVkZXMiLCJsb2FkQWxsT2JqZWN0c0FuZFB1dEluIiwib2JqZWN0cyIsImxvYWRlZENvdW50IiwidGhlbiIsIm1lc2giLCJsZW5ndGgiLCJSb2JvdCIsImlzUmVhZHkiLCJwYXJ0cyIsInJlYWR5IiwicmVzdCIsInJvdGF0b3IiLCJhcm0xIiwiYXJtMiIsIndyaXN0Iiwid3Jpc3Rib25lIiwiaGFuZCIsImZpbmdlciIsImZpbmdlcjIiLCJfcm90YXRlWSIsIl9yb3RhdGVYIiwiX2FybUFuZ2xlIiwiX3dyaXN0QW5nbGUiLCJfZ3JhYkFuZ2xlIiwib3BlbkdyYWIiLCJkZWciLCJtYXgiLCJtaW4iLCJOYXZpZ2F0aW9uIiwiaGlnaGxpZ2h0IiwiaXRlbXMiLCJzY3JvbGxUYXJnZXQiLCJzY3JvbGxpbmdSZW5kZXJlciIsInNjcm9sbGluZ1JlbmRlcmVyTWV0aG9kIiwidGhhdCIsInN0eWxlIiwiaXRlbSIsIm9ubW91c2VvdmVyIiwib25Nb3VzZU92ZXJJdGVtIiwib25jbGljayIsIm9uQ2xpY2tPbkl0ZW0iLCJlbGVtZW50IiwibGVmdCIsIm9mZnNldExlZnQiLCJzZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0VG9wIiwiZGlzdGFuY2UiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsWSIsInNjcm9sbFRvIiwic2V0QmV0d2VlbiIsIm51bWJlciIsIkdhbGxlcnkiLCJsZWZ0QnV0dG9uIiwicmlnaHRCdXR0b24iLCJpbWFnZXMiLCJjb250YWluZXJSaWdodCIsInNsaWRlciIsIm1vdmUiLCJpbWFnZSIsIm9uUmVxdWVzdEZvclNsaWRlcyIsIndoaWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3RlcCIsIm1heFJpZ2h0IiwicmlnaHQiLCJlbmFibGVBbGxCdXR0b25zIiwiZGlzYWJsZUJ1dHRvbiIsImkiLCJzaG93Iiwic3VtIiwiY2xpZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsIlNsaWRlciIsImlzQWN0aXZlIiwidGFyZ2V0IiwiaGlkZGVuIiwiY29kZSIsImltYWdlSW5kZXgiLCJzcmMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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QUFXcUIsR0FBWCxHQUFpQixLQUFLcFAsT0FBTCxDQUFhMk4sTUFBYixDQUFvQixLQUFLdkwsS0FBekIsRUFBZ0NnTixHQUFqRDtBQUNILFM7NEJBQ2lCO0FBQ2QsbUJBQU8sS0FBS2hOLEtBQVo7QUFDSDs7Ozs7O2tCQVlVME0sTSIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM5YTA0YmMzYzQwN2I1MWZiN2EzIiwiaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9zY3JpcHRzL0FwcCdcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxyXG53aW5kb3cuJCQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpXHJcblxyXG53aW5kb3cuYXBwID0gbmV3IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX0xpZ2h0LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX01lZGl1bS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYi53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWJfQm9sZC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnSVJBTlNhbnMnLCBzZXJpZjsgfVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmZmZmY7IH1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzOyB9XFxuICAgIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIuYWN0aXZlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XFxuICAgIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIgPiBpbWcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgICAgbWF4LWhlaWdodDogNzAlO1xcbiAgICAgIHotaW5kZXg6IDEwMDA7IH1cXG4gIGJvZHkgaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIGJvZHkgaGVhZGVyIGgxIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1NSU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNyksIHRyYW5zcGFyZW50KTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XFxuICAgICAgYm94LXNoYWRvdzogMCAtMTlweCAyMXB4IC0yNXB4ICNmNWY1ZjUsIDAgMTlweCAyMXB4IC0yNXB4ICNmNWY1ZjU7XFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAgICAgYm9keSBoZWFkZXIgaDEge1xcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgIHRvcDogNzAlO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7IH0gfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAgICAgYm9keSBoZWFkZXIgaDEge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg1NiwgNTYsIDU2LCAwKSwgcmdiYSg1NiwgNTYsIDU2LCAwLjMpLCAjMzgzODM4LCAjMzgzODM4KTtcXG4gICAgICAgICAgdG9wOiA4MCU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgICAgcGFkZGluZzogMjAwcHggMjAwcHg7IH0gfVxcbiAgICBib2R5IGhlYWRlciBjYW52YXMge1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjNjY2KTsgfVxcbiAgYm9keSBuYXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IC00cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYmFja2dyb3VuZDogIzJiMmIyYjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNTU1LCAjMmIyYjJiLCAjMmIyYjJiLCAjNTU1KTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICBib2R5IG5hdiB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzM4MzgzOCwgIzJiMmIyYiwgIzJiMmIyYiwgIzNhM2EzYSk7IH0gfVxcbiAgICBib2R5IG5hdiAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogIzQ0NDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICBib2R5IG5hdiAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcbiAgICBib2R5IG5hdjpob3ZlciAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICBib2R5IG5hdiB1bCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICBib2R5IG5hdiB1bCB7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gfVxcbiAgICAgIGJvZHkgbmF2IHVsIGxpIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICAgICAgY29sb3I6ICNEREQ7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDsgfSB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzOyB9IH1cXG4gICAgICAgIGJvZHkgbmF2IHVsIGxpOmFjdGl2ZSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuNjsgfVxcbiAgYm9keSBtYWluIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGRkYsICNFRUUsICNGRkYpO1xcbiAgICBwYWRkaW5nOiA3MHB4IDA7IH1cXG4gICAgYm9keSBtYWluIHNlY3Rpb24ge1xcbiAgICAgIGRpcmVjdGlvbjogcnRsO1xcbiAgICAgIHdpZHRoOiA5MDBweDtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDU1cHggMDtcXG4gICAgICBjbGVhcjogYm90aDsgfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIHtcXG4gICAgICAgICAgd2lkdGg6IDgwJTsgfSB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbiB1bCB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH0gfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgd2lkdGg6IDMwNXB4OyB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gPiBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87IH0gfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgICAgICBmbG9hdDogbm9uZTsgfSB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA1MHB4OyB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSB7XFxuICAgICAgICAgICAgdG9wOiAwOyB9IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUgaDIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIHAge1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J3BvcnRmb2xpbyddIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdwb3J0Zm9saW8nXSA+IGltZyB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J3RlYWNoaW5nJ10ge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10ge1xcbiAgICAgICAgaGVpZ2h0OiA0MDBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAuY29udGFpbmVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IGltZyB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbiAgICAgICAgICAgIC1tb3otdXNlci1kcmFnOiBub25lO1xcbiAgICAgICAgICAgIC1tcy11c2VyLWRyYWc6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1kcmFnOiBub25lOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IGltZzpob3ZlciB7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSBpbWc6YWN0aXZlIHtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5jb250YWluZXIge1xcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24sIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIHtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24uYWN0aXZlLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbi5hY3RpdmUge1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zczsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbi5hY3RpdmU6aG92ZXIsIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uLmFjdGl2ZTpob3ZlciB7XFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uIGksIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIGkge1xcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICAgICAgICB3aWR0aDogNXB4O1xcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgICBsZWZ0OiAxOHB4O1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uIGk6YmVmb3JlLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiBpOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKC0xMnB4LCAxMnB4KTsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uIHtcXG4gICAgICAgICAgICBsZWZ0OiAwOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpIHtcXG4gICAgICAgICAgICAgIHRvcDogMzklO1xcbiAgICAgICAgICAgICAgbGVmdDogMTZweDtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDE4MGRlZyk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24ge1xcbiAgICAgICAgICAgIHJpZ2h0OiAwOyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2NTBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIGlmcmFtZSB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAge1xcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGEge1xcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGE6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI0FBQTsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGkuZmEge1xcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGkuZmEuZmEtbWFwLW1hcmtlciB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgaS5mYS5mYS1waG9uZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzNhYWUwOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhLmZhLWZheCB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMWVhYTZkOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhLmZhLWVudmVsb3BlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlNmJlMWI7IH1cXG4gIGJvZHkgZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIGJvZHkgZm9vdGVyIHNwYW4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgICAgIGJvZHkgZm9vdGVyIHNwYW4gaSB7XFxuICAgICAgICBjb2xvcjogI2ZmZjgzMzsgfVxcbiAgICAgIGJvZHkgZm9vdGVyIHNwYW4gYSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDFweCk7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxcbiAgICAgICAgYm9keSBmb290ZXIgc3BhbiBhOmhvdmVyIHtcXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgICBjb2xvcjogeWVsbG93O1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMXB4KSB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDIpO1xcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxMHB4IDVweCByZ2JhKDI1NSwgMjU1LCAwLCAwLjEpLCAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMCwgMC4yNSksIDAgMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAwLCAwLjgpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj8tdXJsIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Fzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb2JvU2NlbmUgZnJvbSAnLi9Sb2JvU2NlbmUnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5J1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnJvYm9TY2VuZSA9IG5ldyBSb2JvU2NlbmUoJ2JvZHkgPiBoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbignYm9keSA+IG5hdicpO1xyXG4gICAgICAgIHRoaXMuZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5KCdib2R5IC5nYWxsZXJ5Jyk7XHJcbiAgICAgICAgdGhpcy5yb2JvdCA9IHRoaXMucm9ib1NjZW5lLnJvYm90O1xyXG4gICAgICAgIC8vIE1vdmluZyByb2JvdCBsaXN0ZW5lcnNcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIEdyYWJiaW5nIGxpc3RlbmVyc1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gRm9jdXNpbmcgbGlzdGVuZXJzXHJcbiAgICAgICAgJCgnYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmZvY3VzID0gZmFsc2UpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5mb2N1cyA9IHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHRoaXMuZm9jdXMgPSBmYWxzZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLmZvY3VzID0gdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5mb2N1c2luZ1RpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0b1JvdGF0aW9uUmVuZGVyZXIgPSB3aW5kb3cuZnJhbWVzRmxvdy5yZW5kZXIodGhpcy5hdXRvUm90YXRlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgb25Nb3ZlIChldmVudCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdHJ5IHsgZXZlbnQgPSBldmVudC50b3VjaGVzWzBdIH0gY2F0Y2ggKGUpIHsgLyogbm90aGluZyAqLyB9XHJcbiAgICAgICAgdGhpcy5tb3ZlUm9ib3RUbyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpXHJcbiAgICB9XHJcbiAgICBtb3ZlUm9ib3RUbyAoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IHhSYXRlID0geCAvIHdpbmRvdy5pbm5lcldpZHRoIC0gMC41O1xyXG4gICAgICAgIGNvbnN0IHlSYXRlID0geSAvIHdpbmRvdy5pbm5lckhlaWdodCAtIDAuNTtcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVkgPSB4UmF0ZSAqIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5yb3RhdGVYID0geVJhdGUgKiBNYXRoLlBJLzMgLSBNYXRoLlBJLzY7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hcm1BbmdsZSA9IHlSYXRlICogTWF0aC5QSS8yICsgMC4wNTtcclxuICAgICAgICB0aGlzLnJvYm90LndyaXN0QW5nbGUgPSB5UmF0ZSAqIC1NYXRoLlBJLzNcclxuICAgIH1cclxuICAgIG9uTW91c2VEb3duICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LmNsb3NlR3JhYigpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QuZ3JhYkFuZ2xlID0gMC41XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXMgKGlzRm9jdXNlZCkge1xyXG4gICAgICAgIGlmIChpc0ZvY3VzZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VOU0VUJyk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzaW5nVGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b1JvdGF0aW9uUmVuZGVyZXIucGF1c2UoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTRVQnKTtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c2luZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hdXRvUm90YXRpb25SZW5kZXJlci5wbGF5KCkgfSwgMjAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdXRvUm90YXRlIChmcmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRoZXRhID0gZnJhbWUuaW5kZXgvMjUwO1xyXG4gICAgICAgIHRoaXMubW92ZVJvYm90VG8oXHJcbiAgICAgICAgICAgICh3aW5kb3cuaW5uZXJXaWR0aCArIE1hdGguY29zKHRoZXRhKSAqIHdpbmRvdy5pbm5lcldpZHRoKS8yLFxyXG4gICAgICAgICAgICAod2luZG93LmlubmVySGVpZ2h0ICsgTWF0aC5zaW4odGhldGEpICogd2luZG93LmlubmVySGVpZ2h0KS8yXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9BcHAuanMiLCJpbXBvcnQgJ2ZyYW1lc2Zsb3cnXHJcbmltcG9ydCBSb2JvdCBmcm9tICcuL1JvYm90J1xyXG5cclxudmFyIHBvc3Rwcm9jZXNzaW5nID0ge307XHJcbnZhciBib2tlaF9wYXJhbXMgPSB7XHJcbiAgICB6bmVhcjogMC4xLFxyXG4gICAgemZhcjogMTAsXHJcbiAgICBzaGFkZXJGb2N1czogZmFsc2UsXHJcbiAgICBmc3RvcDogMjAsXHJcbiAgICBtYXhibHVyOiAyLFxyXG4gICAgc2hvd0ZvY3VzOiBmYWxzZSxcclxuICAgIGZvY2FsRGVwdGg6IDEuNCxcclxuICAgIG1hbnVhbGRvZjogZmFsc2UsXHJcbiAgICB2aWduZXR0aW5nOiBmYWxzZSxcclxuICAgIGRlcHRoYmx1cjogdHJ1ZSxcclxuICAgIHRocmVzaG9sZCA6IDAuNSxcclxuICAgIGdhaW46IDAuMixcclxuICAgIGJpYXM6IDIsXHJcbiAgICBmcmluZ2U6IDMsXHJcbiAgICBmb2NhbExlbmd0aDogMjAsXHJcbiAgICBub2lzZTogdHJ1ZSxcclxuICAgIHBlbnRhZ29uOiBmYWxzZSxcclxuICAgIGRpdGhlcmluZzogMFxyXG59O1xyXG5cclxuY2xhc3MgUm9ib1NjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNjAwO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGZyYW1lc0Zsb3cucmVuZGVyKHRoaXMucmVuZGVyLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICAvLyBDcmVhdGluZyBTY2VuZVxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICBjb25zdCBmb2dDb2xvciA9IDB4ZjNmM2YzO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcihmb2dDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKGZvZ0NvbG9yLCA0LCA1MCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgQ2FtZXJhXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMSwgMzAwKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTM7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDE7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucm90YXRpb24ueCA9IDAuMjU7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jYW1lcmEpO1xyXG4gICAgICAgIC8vIFBvc3QgUHJvY2Nlc3NpbmdcclxuICAgICAgICB0aGlzLm1hdGVyaWFsX2RlcHRoID0gbmV3IFRIUkVFLk1lc2hEZXB0aE1hdGVyaWFsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UG9zdFByb2Nlc3NpbmcoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tlaFBhcmFtcygpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIFJlbmRlcmVyXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5nYW1tYUlucHV0ICA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLmdhbW1hT3V0cHV0ID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnJlbmRlclJldmVyc2VTaWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgTGlnaHRzXHJcbiAgICAgICAgdGhpcy5wb2ludExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDAuNSk7IC8vIFBvaW50XHJcbiAgICAgICAgdGhpcy5wb2ludExpZ2h0LnBvc2l0aW9uLnogPSAxMDtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBvaW50TGlnaHQpO1xyXG4gICAgICAgIHRoaXMuaGVtaXNwaGVyZUxpZ2h0ID0gbmV3IFRIUkVFLkhlbWlzcGhlcmVMaWdodCggMHhmZmZmZmYsIDB4MDAwMDAwLCAxICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5oZW1pc3BoZXJlTGlnaHQpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIGdyb3VuZFxyXG4gICAgICAgIHRoaXMuZ3JpZEhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKCA3MCwgNDUgKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdyaWRIZWxwZXIpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIFJvYm90XHJcbiAgICAgICAgdGhpcy5yb2JvdCA9IG5ldyBSb2JvdCh0aGlzKVxyXG4gICAgfVxyXG4gICAgc2V0Qm9va2VoUGFyYW0gKGNoYW5nZXMpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGJva2VoX3BhcmFtcywgY2hhbmdlcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb29rZWhQYXJhbXMoKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQm9va2VoUGFyYW1zICgpIHtcclxuICAgICAgICBmb3IgKGxldCBlIGluIGJva2VoX3BhcmFtcykgaWYoZSBpbiBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3JtcykgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbZV0udmFsdWUgPSBib2tlaF9wYXJhbXNbZV07XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ6bmVhclwiXS52YWx1ZSA9IGJva2VoX3BhcmFtcy56bmVhcjtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInpmYXJcIl0udmFsdWUgPSBib2tlaF9wYXJhbXMuemZhcjtcclxuICAgICAgICB0aGlzLmNhbWVyYS5zZXRGb2NhbExlbmd0aCggYm9rZWhfcGFyYW1zLmZvY2FsTGVuZ3RoIClcclxuICAgIH1cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZyAoKSB7XHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmcuc2NlbmUgID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSggLXRoaXMud2lkdGggLyAyLCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCAtNjAsIDYwICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmcuc2NlbmUuYWRkKCBwb3N0cHJvY2Vzc2luZy5jYW1lcmEgKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxyXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcclxuICAgICAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JGb3JtYXRcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlRGVwdGggPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHBhcmFtcyApO1xyXG4gICAgICAgIGxldCBib2tlaF9zaGFkZXIgPSBUSFJFRS5Cb2tlaFNoYWRlcjtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGJva2VoX3NoYWRlci51bmlmb3JtcyApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widENvbG9yXCJdLnZhbHVlID0gcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IudGV4dHVyZTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInREZXB0aFwiXS52YWx1ZSA9IHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoLnRleHR1cmU7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0ZXh0dXJlV2lkdGhcIiBdLnZhbHVlID0gdGhpcy53aWR0aDtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRleHR1cmVIZWlnaHRcIl0udmFsdWUgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5tYXRlcmlhbEJva2VoID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIHVuaWZvcm1zOiBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3JtcyxcclxuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBib2tlaF9zaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogYm9rZWhfc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgICAgICBkZWZpbmVzOiB7IFJJTkdTOiAzLCBTQU1QTEVTOiAyfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLCBwb3N0cHJvY2Vzc2luZy5tYXRlcmlhbEJva2VoICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmcuc2NlbmUuYWRkKCBwb3N0cHJvY2Vzc2luZy5xdWFkICk7XHJcblx0fVxyXG4gICAgb25SZXNpemUgKCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSBwb3N0cHJvY2Vzc2luZy5jYW1lcmEuYXNwZWN0ID0gdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcblx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yLCB0cnVlKTtcclxuXHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxfZGVwdGg7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlRGVwdGgsIHRydWUpO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIocG9zdHByb2Nlc3Npbmcuc2NlbmUsIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9ib1NjZW5lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvUm9ib1NjZW5lLmpzIiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX0ZyYW1lc0Zsb3cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdHZhciBfRnJhbWVzRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GcmFtZXNGbG93KTtcblxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cdC8vIGRlZmluaW5nIGZyYW1lc0Zsb3cgYXMgYSBnbG9iYWwgb2JqZWN0XG5cdGlmICghKHdpbmRvdy5mcmFtZXNGbG93IGluc3RhbmNlb2YgX0ZyYW1lc0Zsb3cyLmRlZmF1bHQpKSB7XG5cdCAgICAvLyBpZiBpdCBkaWRuJ3QgZGVmaW5lIGJlZm9yZVxuXHQgICAgd2luZG93LmZyYW1lc0Zsb3cgPSBuZXcgX0ZyYW1lc0Zsb3cyLmRlZmF1bHQoKTtcblx0fVxuXG5cdC8vIGV4cG9ydFxuXHRleHBvcnRzLmRlZmF1bHQgPSB3aW5kb3cuZnJhbWVzRmxvdztcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHR2YXIgX1JlbmRlcmVyQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5cdHZhciBfUmVuZGVyZXJBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJlckFycmF5KTtcblxuXHR2YXIgX1JlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgX1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyKTtcblxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0Ly8gQ29tcGF0aWJpbGl0eSBmb3IgYWxsIGJyb3dzZXJzIC0gUGF1bCBJcmlzaCB2ZXJzaW9uXG5cdHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuXHQgICAgfTtcblx0fVxuXG5cdC8vIEZyYW1lc0Zsb3dcblx0KCk7XG5cdHZhciBGcmFtZXNGbG93ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gRnJhbWVzRmxvdygpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRnJhbWVzRmxvdyk7XG5cblx0ICAgICAgICB0aGlzLmZyYW1lcyA9IDA7XG5cdCAgICAgICAgdGhpcy5fZnBzID0gMzA7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuXHQgICAgICAgICAgICBtaW5pbXVtQWNjZXB0YWJsZUZQUzogMzBcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMucmVuZGVyZXJzID0gbmV3IF9SZW5kZXJlckFycmF5Mi5kZWZhdWx0KCk7XG5cdCAgICAgICAgdGhpcy5wZXJmb3JtYW5jZSA9IHtcblx0ICAgICAgICAgICAgbG9nczogbmV3IEFycmF5KDEwMCksXG5cdCAgICAgICAgICAgIGxvZ3NQb2ludGVyOiAwLFxuXHQgICAgICAgICAgICBsYXN0VGltZVN0YW1wOiB1bmRlZmluZWQsXG5cdCAgICAgICAgICAgIGxhc3RGcmFtZUZQUzogMzAsXG5cdCAgICAgICAgICAgIHJhdGlvOiAxLFxuXHQgICAgICAgICAgICBzdGF0dXM6IDAsXG5cdCAgICAgICAgICAgIGF2ZXJhZ2U6IHtcblx0ICAgICAgICAgICAgICAgIGZwczogMzAsXG5cdCAgICAgICAgICAgICAgICByYXRpbzogMSxcblx0ICAgICAgICAgICAgICAgIHN0YXR1czogMFxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnJlcXVlc3RMb29wKCk7XG5cdCAgICB9XG5cblx0ICAgIF9jcmVhdGVDbGFzcyhGcmFtZXNGbG93LCBbe1xuXHQgICAgICAgIGtleTogJ2dldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChpZCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZ2V0KGlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0QWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEFsbEJ5Q2xhc3MnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxCeUNsYXNzKGNsYXNzTmFtZSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZmlsdGVyKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmNsYXNzID09IGNsYXNzTmFtZTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZVJlbmRlcmVyQnlJZCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVJlbmRlcmVyQnlJZChpZCkge1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5yZW1vdmUoaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdjaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKHJhdGUpIHtcblx0ICAgICAgICAgICAgdmFyIGlzR2xvYmFsQ2hlY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG5cdCAgICAgICAgICAgIHZhciBlcnJvciA9IG51bGw7XG5cdCAgICAgICAgICAgIHZhciBwb2ludGVyID0gaXNHbG9iYWxDaGVjayA/ICdhbnknIDogJ3RoaXMnO1xuXHQgICAgICAgICAgICBpZiAocmF0ZSA8IDApIGVycm9yID0gJ0ZQUyBtdXN0IG5vdCBiZSBhIG5lZ2F0aXZlIG51bWJlciEnO2Vsc2UgaWYgKHJhdGUgPCAzMCAmJiByYXRlID4gMCAmJiAzMCAvIHJhdGUgJSAxICE9PSAwKSBlcnJvciA9ICdpZiBGUFMgaXMgbGVzcyB0aGFuIDMwZnBzLCBpdCBoYXZlIHRvIGJlIGxpa2UgdGhpczogKDMwIC8gRlBTKSBzaG91bGQgYmUgaW50ZWdlcic7ZWxzZSBpZiAocmF0ZSA+IDMwICYmIHJhdGUgJSAzMCAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIG1vcmUgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6IChGUFMgJSAzMCA9PSAwKSc7XG5cdCAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkgdGhyb3cgJ2NhblxcJ3Qgc2V0ICcgKyByYXRlICsgJ2ZwcyBmb3IgdGhpcyByZW5kZXJlci4gUkVBU09OOiA8JyArIGVycm9yICsgJz4nO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5QWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheUFsbCgpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmdldEFsbFJlbmRlcmVycygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBsYXkoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZUFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlQWxsKCkge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB0aGlzLmdldEFsbFJlbmRlcmVycygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gX3N0ZXAyLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBhdXNlKCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihjbGFzc05hbWUsIGZ1bmMpIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgZnVuYyA9IGNsYXNzTmFtZTtcblx0ICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICcnO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfUmVuZGVyZXIyLmRlZmF1bHQodGhpcywge1xuXHQgICAgICAgICAgICAgICAgaWQ6IHRoaXMucmVuZGVyZXJzLmxlbmd0aCxcblx0ICAgICAgICAgICAgICAgIGNsYXNzOiBjbGFzc05hbWVcblx0ICAgICAgICAgICAgfSwgZnVuYyk7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuXHQgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXI7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ29uTGFnJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25MYWcobWluaW11bUZQUywgY2FsbGJhY2spIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBtaW5pbXVtRlBTID09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gbWluaW11bUZQUztlbHNlIHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUyA9IG1pbmltdW1GUFM7XG5cdCAgICAgICAgICAgIHRoaXMub25MYWdDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZWdpc3RlclBlcmZvcm1hbmNlTG9nJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyhyZW5kZXJUaW1lKSB7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGZwc1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA9IDEwMDAgLyByZW5kZXJUaW1lO1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBsYWdzXG5cdCAgICAgICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA8IHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUykgaWYgKHR5cGVvZiB0aGlzLm9uTGFnQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHRoaXMub25MYWdDYWxsYmFjayh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQU1xuXHQgICAgICAgICAgICAvLyBsb2dnaW5nXG5cdCAgICAgICAgICAgICk7dGhpcy5wZXJmb3JtYW5jZS5sb2dzW3RoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXJdID0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFM7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgPSAodGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlciArIDEpICUgMTAwO1xuXHQgICAgICAgICAgICAvLyBhbmFseXppbmcgbG9nc1xuXHQgICAgICAgICAgICB0aGlzLmFuYWx5emVQZXJmb3JtYW5jZSgpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdhbmFseXplUGVyZm9ybWFuY2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmFseXplUGVyZm9ybWFuY2UoKSB7XG5cdCAgICAgICAgICAgIHZhciBhbGxEYXRhID0gdGhpcy5wZXJmb3JtYW5jZS5sb2dzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBkYXRhID09ICdudW1iZXInO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGF2ZXJhZ2Ugb2YgZGF0YVxuXHQgICAgICAgICAgICApO3ZhciBGUFNTdW0gPSAwO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBhbGxEYXRhW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfc3RlcDMudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgRlBTU3VtICs9IGRhdGE7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyA9IEZQU1N1bSAvIGFsbERhdGEubGVuZ3RoO1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBwZXJmb3JtYW5jZSBwZXJjZW50YWdlXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyAvIDMwO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzIC8gMzA7XG5cdCAgICAgICAgICAgIC8vIGRlZmluaW5nIHN0YXR1c1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTKTtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdfZ2V0U3RhdHVzT2ZGUFMnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0U3RhdHVzT2ZGUFMoZnBzKSB7XG5cdCAgICAgICAgICAgIHZhciByYXRpbyA9IGZwcyAvIHRoaXMuZnBzO1xuXHQgICAgICAgICAgICB2YXIgc3RhdHVzID0gLTM7IC8vIFdPUlNUXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuMykgc3RhdHVzID0gLTI7IC8vIEJBRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjYpIHN0YXR1cyA9IC0xOyAvLyBOT1QgQkFEXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuOSkgc3RhdHVzID0gMDsgLy8gT0tcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMS4zKSBzdGF0dXMgPSAxOyAvLyBHT09EXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDEuNikgc3RhdHVzID0gMjsgLy8gRVhDRUxMRU5UXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDIpIHN0YXR1cyA9IDM7IC8vIEJFU1Rcblx0ICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVxdWVzdExvb3AnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0TG9vcCgpIHtcblx0ICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnJlcXVlc3RMb29wLmJpbmQodGhpcykpO1xuXHQgICAgICAgICAgICB0aGlzLmZyYW1lcysrO1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcigpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCAhPT0gdW5kZWZpbmVkKSB0aGlzLnJlZ2lzdGVyUGVyZm9ybWFuY2VMb2coRGF0ZS5ub3coKSAtIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCk7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcHM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUocmF0ZSwgdHJ1ZSk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBGcmFtZXNGbG93O1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gRnJhbWVzRmxvdztcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdHZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFJlbmRlcmVyKGZyYW1lc0Zsb3csIG9wdGlvbnMsIGZ1bmMpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG5cdCAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG5cdCAgICAgICAgdGhpcy5jbGFzcyA9IG9wdGlvbnMuY2xhc3MgfHwgJyc7XG5cdCAgICAgICAgdGhpcy5wcm9wcyA9IHtcblx0ICAgICAgICAgICAgaXNEZWJ1Z2luZzogZmFsc2Vcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMuZnJhbWVzRmxvdyA9IGZyYW1lc0Zsb3c7XG5cdCAgICAgICAgdGhpcy5fZnBzID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XG5cdCAgICAgICAgdGhpcy5mcmFtZXMgPSAwO1xuXHQgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gZmFsc2U7XG5cdCAgICAgICAgdGhpcy5yZW5kZXIoKTtcblx0ICAgIH1cblx0ICAgIC8vIFJlbmRlciBuZXh0IGZyYW1lXG5cblxuXHQgICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyLCBbe1xuXHQgICAgICAgIGtleTogJ25leHQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5mcmFtZXNGbG93LnJlbW92ZVJlbmRlcmVyQnlJZCh0aGlzLmlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlYnVnaW5nID0gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWJ1Z2luZyA9IGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdzaG91bGRSZW5kZXJUaGlzRnJhbWUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRSZW5kZXJUaGlzRnJhbWUoKSB7XG5cdCAgICAgICAgICAgIC8vIGFsbCBjb25kaXRpb25zIHRvIHBhdXNlIG9yIHBsYXkgcmVuZGVyaW5nXG5cdCAgICAgICAgICAgIHZhciBjb25kaXRpb25zID0gWyF0aGlzLnByb3BzLmlzRGVidWdpbmcsIHRoaXMuZnJhbWVzRmxvdy5mcmFtZXMgJSAoMzAgLyBNYXRoLm1pbih0aGlzLmZwcywgMzApKSA9PSAwXTtcblx0ICAgICAgICAgICAgdmFyIHJldCA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gY29uZGl0aW9uc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldCAmJiBjb25kO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0RnJhbWVPYmplY3RUb1JldHVybicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICByZW5kZXJlcjogdGhpcyxcblx0ICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmZyYW1lcyxcblx0ICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcHMsXG5cdCAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZToge1xuXHQgICAgICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyxcblx0ICAgICAgICAgICAgICAgICAgICByYXRpbzogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnJhdGlvLFxuXHQgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnN0YXR1cyxcblx0ICAgICAgICAgICAgICAgICAgICBhdmVyYWdlOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UuYXZlcmFnZVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHx8IHRoaXMuc2hvdWxkR29OZXh0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaXRlcmF0aW9uID0gMDtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmZwcyA+IDMwKSBpdGVyYXRpb24gPSBNYXRoLm1heCh0aGlzLmZwcywgMzApIC8gMzA7ZWxzZSBpdGVyYXRpb24gPSAzMCAvIHRoaXMuZnBzO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb247IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVzKys7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bmModGhpcy5nZXRGcmFtZU9iamVjdFRvUmV0dXJuKCkpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIGlmIChuZXdGUFMgPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXNGbG93LmNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKG5ld0ZQUyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnBzIHx8IHRoaXMuZnJhbWVzRmxvdy5mcHM7XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gUmVuZGVyZXI7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdHZhciBSZW5kZXJlckFycmF5ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gUmVuZGVyZXJBcnJheSgpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXJBcnJheSk7XG5cblx0ICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2FycmF5JykgdGhpcy5hcnIgPSBhcmdzWzBdO2Vsc2UgdGhpcy5hcnIgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KEFycmF5LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcblx0ICAgIH1cblxuXHQgICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyQXJyYXksIFt7XG5cdCAgICAgICAga2V5OiAnZ2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdzZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoaSwgdmFsKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyW2ldID0gdmFsO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncHVzaCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2godmFsKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyLnB1c2godmFsKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShpKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyW2ldID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB0aGlzLmFyci5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmaWx0ZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXIoY29uZEZ1bmMpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBSZW5kZXJlckFycmF5KHRoaXMuYXJyLmZpbHRlcihjb25kRnVuYykpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdlYWNoJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaChjYikge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgY2IoaXRlbSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAndG9BcnJheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFycjtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVtb3ZlKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICduZXh0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLm5leHQoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5wYXVzZSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5wbGF5KCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdsZW5ndGgnLFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnIubGVuZ3RoO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIuZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBSZW5kZXJlckFycmF5O1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXJBcnJheTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuSlNPTkxvYWRlcigpO1xyXG5cclxuY29uc3QgYmxhY2tNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCwgc2hpbmluZXNzOiAwIH0pO1xyXG5jb25zdCBkYXJrTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHg5OTk5OTksIHNoaW5pbmVzczogMTAwIH0pO1xyXG5jb25zdCBsaWdodE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ZWVlZWVlLCBzaGluaW5lc3M6IDcwIH0pO1xyXG5cclxuY29uc3Qgb2JqZWN0c05hbWVzID0gWydhcm0xJywgJ2FybTInLCAnZmluZ2VyJywgJ2hhbmQnLCAncmVzdCcsICdyb3RhdG9yJywgJ3dyaXN0JywgJ3dyaXN0Ym9uZSddO1xyXG5jb25zdCBsb2FkID0gKG9iamVjdE5hbWUpID0+IHtcclxuICAgIGNvbnN0IHVybCA9ICcuL2Fzc2V0cy9vYmplY3RzLycgKyBvYmplY3ROYW1lICsgJy5qc29uJztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBlcnIpID0+IHtcclxuICAgICAgICBsb2FkZXIubG9hZCh1cmwsIChnZW9tZXRyeSwgbWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwgPSBsaWdodE1hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PT0gJ2ZpbmdlcicpIG1hdGVyaWFsID0gYmxhY2tNYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKFsnd3Jpc3Rib25lJywgJ2hhbmQnLCAnYXJtMScsICdyZXN0J10uaW5jbHVkZXMob2JqZWN0TmFtZSkpIG1hdGVyaWFsID0gZGFya01hdGVyaWFsO1xyXG4gICAgICAgICAgICByZXNvbHZlKG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCkpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn07XHJcbmNvbnN0IGxvYWRBbGxPYmplY3RzQW5kUHV0SW4gPSAob2JqZWN0cykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QsIGVycikgPT4ge1xyXG4gICAgICAgIGxldCBsb2FkZWRDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgb2JqZWN0TmFtZSBvZiBvYmplY3RzTmFtZXMpIHtcclxuICAgICAgICAgICAgbG9hZChvYmplY3ROYW1lKS50aGVuKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RzW29iamVjdE5hbWVdID0gbWVzaDtcclxuICAgICAgICAgICAgICAgIGxvYWRlZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZGVkQ291bnQgPT09IG9iamVjdHNOYW1lcy5sZW5ndGgpIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5jbGFzcyBSb2JvdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocm9ib1NjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvU2NlbmUgPSByb2JvU2NlbmU7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHJvYm9TY2VuZS5zY2VuZTtcclxuICAgICAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhcnRzID0ge307XHJcbiAgICAgICAgbG9hZEFsbE9iamVjdHNBbmRQdXRJbih0aGlzLnBhcnRzKS50aGVuKHRoaXMucmVhZHkuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIHJlYWR5ICgpIHtcclxuICAgICAgICAvLyBDb21iaW5pbmcgdGhpbmdzIHRvZ2V0aGVyXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yZXN0LmFkZCh0aGlzLnBhcnRzLnJvdGF0b3IpO1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5wb3NpdGlvbi55ID0gMztcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3IuYWRkKHRoaXMucGFydHMuYXJtMSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnBvc2l0aW9uLnkgPSAyO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5hZGQodGhpcy5wYXJ0cy5hcm0yKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIucG9zaXRpb24ueSA9IDQuNTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIuYWRkKHRoaXMucGFydHMud3Jpc3QpO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3QuYWRkKHRoaXMucGFydHMud3Jpc3Rib25lKTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5wb3NpdGlvbi55ID0gNy41O1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnBvc2l0aW9uLnggPSAtMC4wNjtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5hZGQodGhpcy5wYXJ0cy5oYW5kKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmhhbmQuYWRkKHRoaXMucGFydHMuZmluZ2VyKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi55ID0gMS40O1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnggPSAwLjI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueiA9IDAuMzU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueCA9IDAuMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIgPSB0aGlzLnBhcnRzLmZpbmdlci5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMucGFydHMuaGFuZC5hZGQodGhpcy5wYXJ0cy5maW5nZXIyKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueSA9IE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnBvc2l0aW9uLnggPSAtMC40O1xyXG5cclxuICAgICAgICAvLyBhZGRpbmcgcmVzdCB0byBzY2VuZVxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGFydHMucmVzdCk7XHJcblxyXG4gICAgICAgIC8vIEhpZGRlbiBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdGhpcy5yb3RhdGVZID0gLTAuNDtcclxuICAgICAgICB0aGlzLnJvdGF0ZVggPSAwO1xyXG4gICAgICAgIHRoaXMuYXJtQW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMud3Jpc3RBbmdsZSA9IC1NYXRoLlBJLzg7XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSBNYXRoLlBJLzY7XHJcblxyXG4gICAgICAgIC8vIFNldCBpbml0YWwgdmFsdWVzXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fcm90YXRlWSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkgPSB0aGlzLl9yb3RhdGVZO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54ID0gdGhpcy5fcm90YXRlWDtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCA9IHRoaXMuX2FybUFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLnggPSB0aGlzLl93cmlzdEFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGU7XHJcblxyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVZIChkZWcpIHtcclxuICAgICAgICB0aGlzLl9yb3RhdGVZID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRlWSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVlcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVYIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzMpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgNypNYXRoLlBJLzEyKTtcclxuICAgICAgICB0aGlzLl9yb3RhdGVYID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRlWCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVhcclxuICAgIH1cclxuICAgIHNldCBhcm1BbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5QSSAtIGRlZztcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzEyKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIDUqTWF0aC5QSS82KTtcclxuICAgICAgICB0aGlzLl9hcm1BbmdsZSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IGFybUFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJtQW5nbGVcclxuICAgIH1cclxuICAgIHNldCB3cmlzdEFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzIpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgTWF0aC5QSS8yKTtcclxuICAgICAgICB0aGlzLl93cmlzdEFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgd3Jpc3RBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dyaXN0QW5nbGVcclxuICAgIH1cclxuICAgIHNldCBncmFiQW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgMCk7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCBNYXRoLlBJKTtcclxuICAgICAgICBkZWcgLT0gTWF0aC5QSS82O1xyXG4gICAgICAgIHRoaXMuX2dyYWJBbmdsZSA9IC1kZWcvMlxyXG4gICAgfVxyXG4gICAgZ2V0IGdyYWJBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIC0oMip0aGlzLl9ncmFiQW5nbGUtTWF0aC5QSS82KVxyXG4gICAgfVxyXG4gICAgY2xvc2VHcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IDBcclxuICAgIH1cclxuICAgIG9wZW5HcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IE1hdGguUEkvMlxyXG4gICAgfVxyXG4gICAgdG9nZ2xlR3JhYiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhYkFuZ2xlID4gTWF0aC5QSS8zKSB0aGlzLmNsb3NlR3JhYigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5vcGVuR3JhYigpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkgKz0gKHRoaXMuX3JvdGF0ZVkgLSB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLnggKz0gKHRoaXMuX3JvdGF0ZVggLSB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLnggKz0gKHRoaXMuX2FybUFuZ2xlIC0gdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLnggKz0gKHRoaXMuX3dyaXN0QW5nbGUgLSB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56KSAvIDM7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueikgLyAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm90LmpzIiwiY2xhc3MgTmF2aWdhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSAkKHF1ZXJ5ICsgJyAuc2VsZWN0LWhpZ2hsaWdodCcpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSAkJChxdWVyeSArICcgbGknKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdSZW5kZXJlciA9IHdpbmRvdy5mcmFtZXNGbG93LnJlbmRlcih0aGlzLnNjcm9sbGluZ1JlbmRlcmVyTWV0aG9kLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgKCkgPT4gdGhpcy5zY3JvbGxpbmdSZW5kZXJlci5wYXVzZSgpKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnNjcm9sbGluZ1JlbmRlcmVyLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuc3R5bGUud2lkdGggPSAxMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCArICclJztcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgaXRlbS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHsgdGhhdC5vbk1vdXNlT3Zlckl0ZW0odGhpcykgfTtcclxuICAgICAgICAgICAgaXRlbS5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyB0aGF0Lm9uQ2xpY2tPbkl0ZW0odGhpcykgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlT3Zlckl0ZW0gKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5zdHlsZS5sZWZ0ID0gZWxlbWVudC5vZmZzZXRMZWZ0ICsgJ3B4J1xyXG4gICAgfVxyXG4gICAgb25DbGlja09uSXRlbSAoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSAkKGBbZGF0YS10aXRsZT0ke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKX1dYCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQgPSBzZWN0aW9uLm9mZnNldFRvcDtcclxuICAgICAgICB0aGlzLnNjcm9sbGluZ1JlbmRlcmVyLnBsYXkoKVxyXG4gICAgfVxyXG4gICAgc2Nyb2xsaW5nUmVuZGVyZXJNZXRob2QgKGZyYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLm1pbih0aGlzLnNjcm9sbFRhcmdldCwgKGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSkgLSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgd2luZG93LnNjcm9sbFkgKyBkaXN0YW5jZS8xMCk7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgMTApIGZyYW1lLnJlbmRlcmVyLnBhdXNlKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL05hdmlnYXRpb24uanMiLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4vU2xpZGVyJ1xyXG5cclxuY29uc3Qgc2V0QmV0d2VlbiA9IChudW1iZXIsIG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obnVtYmVyLCBtYXgpLCBtaW4pXHJcbn07XHJcblxyXG5jbGFzcyBHYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbiA9ICQocXVlcnkgKyAnID4gLmxlZnQtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbiA9ICQocXVlcnkgKyAnID4gLnJpZ2h0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSArICcgPiAuY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSAkJChxdWVyeSArICcgPiAuY29udGFpbmVyID4gaW1nJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJSaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyKCdib2R5ID4gLmZ1bGwtdmlldy1zbGlkZXInLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm1vdmUoLTMwMCk7XHJcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5tb3ZlKDMwMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMpIGltYWdlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQub25SZXF1ZXN0Rm9yU2xpZGVzKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHdpZHRoICgpIHtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpbWFnZSBvZiB0aGlzLmltYWdlcykgc3VtICs9IGltYWdlLmNsaWVudFdpZHRoXHJcbiAgICAgICAgcmV0dXJuIHN1bVxyXG4gICAgfVxyXG4gICAgZ2V0IG1heFJpZ2h0ICgpIHtcclxuICAgICAgICByZXR1cm4gLSh0aGlzLndpZHRoIC0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoKVxyXG4gICAgfVxyXG4gICAgZGlzYWJsZUJ1dHRvbiAod2hpY2gpIHtcclxuICAgICAgICB0aGlzW3doaWNoICsgJ0J1dHRvbiddLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBlbmFibGVBbGxCdXR0b25zICgpIHtcclxuICAgICAgICB0aGlzLmxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG1vdmUgKHN0ZXApIHtcclxuICAgICAgICBjb25zdCBtYXhSaWdodCA9IHRoaXMubWF4UmlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJSaWdodCA9IHNldEJldHdlZW4odGhpcy5jb250YWluZXJSaWdodCArIHN0ZXAsIG1heFJpZ2h0LCAwKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5yaWdodCA9IHRoaXMuY29udGFpbmVyUmlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlQWxsQnV0dG9ucygpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lclJpZ2h0ID09PSBtYXhSaWdodCkgdGhpcy5kaXNhYmxlQnV0dG9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyUmlnaHQgPT09IDApIHRoaXMuZGlzYWJsZUJ1dHRvbigncmlnaHQnKVxyXG4gICAgfVxyXG4gICAgb25SZXF1ZXN0Rm9yU2xpZGVzIChpbWFnZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pbWFnZXMpIGlmICh0aGlzLmltYWdlc1tpXSA9PT0gaW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuc2hvdyhpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvR2FsbGVyeS5qcyIsImNvbnN0IHNldEJldHdlZW4gPSAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG51bWJlciwgbWF4KSwgbWluKVxyXG59O1xyXG5cclxuY2xhc3MgU2xpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSwgZ2FsbGVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9ICQocXVlcnkgKyAnIGltZycpO1xyXG4gICAgICAgIHRoaXMuZ2FsbGVyeSA9IGdhbGxlcnk7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmNvbnRhaW5lcikgdGhpcy5oaWRkZW4oKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJyAmJiB0aGlzLmlzQWN0aXZlKSB0aGlzLmhpZGRlbigpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93UmlnaHQnICYmIHRoaXMuaXNBY3RpdmUpIHRoaXMuaW1hZ2VJbmRleC0tO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93TGVmdCcgJiYgdGhpcy5pc0FjdGl2ZSkgdGhpcy5pbWFnZUluZGV4Kys7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldCBpbWFnZUluZGV4IChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBzZXRCZXR3ZWVuKGluZGV4LCAwLCB0aGlzLmdhbGxlcnkuaW1hZ2VzLmxlbmd0aC0xKTtcclxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZ2FsbGVyeS5pbWFnZXNbdGhpcy5pbmRleF0uc3JjO1xyXG4gICAgfVxyXG4gICAgZ2V0IGltYWdlSW5kZXggKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4XHJcbiAgICB9XHJcbiAgICBzaG93IChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBoaWRkZW4gKCkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9TbGlkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9