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
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: #ffffff; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body .full-view-slider {\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.6);\n    transition-duration: 0.3s; }\n    body .full-view-slider.active {\n      opacity: 1;\n      pointer-events: auto; }\n    body .full-view-slider > img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      max-width: 80%;\n      max-height: 70%;\n      z-index: 1000; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    overflow: hidden; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n      @media (max-width: 1000px) {\n        body header h1 {\n          font-size: 20px;\n          width: 80%;\n          top: 70%;\n          text-align: center;\n          white-space: normal;\n          box-shadow: none; } }\n      @media (max-width: 460px) {\n        body header h1 {\n          background: linear-gradient(rgba(56, 56, 56, 0), rgba(56, 56, 56, 0.3), #383838, #383838);\n          top: 80%;\n          font-weight: normal;\n          font-size: 22px;\n          padding: 200px 200px; } }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    @media (max-width: 650px) {\n      body nav {\n        background: linear-gradient(#383838, #2b2b2b, #2b2b2b, #3a3a3a); } }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 20%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n      @media (max-width: 650px) {\n        body nav .select-highlight {\n          display: none; } }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      @media (max-width: 650px) {\n        body nav ul {\n          flex-direction: column; } }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 16px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        @media (max-width: 1000px) {\n          body nav ul li {\n            flex-basis: auto;\n            flex-grow: 1;\n            font-size: 13px; } }\n        @media (max-width: 650px) {\n          body nav ul li {\n            border-bottom: 1px solid #333; } }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF);\n    padding: 70px 0; }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: auto;\n      padding: 55px 0;\n      clear: both; }\n      @media (max-width: 1000px) {\n        body main section {\n          width: 80%; } }\n      @media (max-width: 750px) {\n        body main section {\n          text-align: center; }\n          body main section ul {\n            text-align: right; } }\n      body main section > img {\n        float: left;\n        width: 305px; }\n        @media (max-width: 900px) {\n          body main section > img {\n            width: 190px;\n            margin: auto; } }\n        @media (max-width: 750px) {\n          body main section > img {\n            float: none; } }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        @media (max-width: 900px) {\n          body main section article {\n            top: 0; } }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 27px; }\n      body main section[data-title='portfolio'] {\n        padding-top: 40px; }\n        body main section[data-title='portfolio'] > img {\n          margin-top: 80px;\n          margin-right: 15px; }\n      body main section[data-title='teaching'] {\n        padding-top: 30px; }\n      body main section[data-title='gallery'] {\n        height: 400px; }\n        body main section[data-title='gallery'] .gallery {\n          background: #222;\n          margin-top: 20px;\n          overflow: hidden;\n          position: relative; }\n          @media (max-width: 650px) {\n            body main section[data-title='gallery'] .gallery {\n              height: 200px; } }\n          body main section[data-title='gallery'] .gallery .container {\n            position: relative;\n            flex-wrap: nowrap;\n            display: flex;\n            flex-direction: row;\n            right: 0;\n            transition-duration: 0.5s; }\n            @media (max-width: 650px) {\n              body main section[data-title='gallery'] .gallery .container {\n                position: absolute;\n                width: 100%;\n                overflow-x: scroll; } }\n          body main section[data-title='gallery'] .gallery img {\n            cursor: pointer;\n            height: 200px;\n            transition-duration: 0.2s;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            -webkit-user-drag: none;\n            -moz-user-drag: none;\n            -ms-user-drag: none;\n            user-drag: none; }\n            body main section[data-title='gallery'] .gallery img:hover {\n              opacity: 0.85;\n              transform: scale(0.95); }\n            body main section[data-title='gallery'] .gallery img:active {\n              opacity: 0.5;\n              transition-duration: 0.1s;\n              transform: scale(0.9); }\n          body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n            width: 50px;\n            height: 100px;\n            background: rgba(0, 0, 0, 0.6);\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            opacity: 0.3; }\n            body main section[data-title='gallery'] .gallery .left-button.active, body main section[data-title='gallery'] .gallery .right-button.active {\n              cursor: pointer;\n              opacity: 0.8;\n              transition-duration: 0.3s; }\n            body main section[data-title='gallery'] .gallery .left-button:hover, body main section[data-title='gallery'] .gallery .right-button:hover {\n              opacity: 1; }\n            @media (max-width: 650px) {\n              body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n                display: none; } }\n            body main section[data-title='gallery'] .gallery .left-button i, body main section[data-title='gallery'] .gallery .right-button i {\n              position: absolute;\n              background: white;\n              width: 5px;\n              height: 30px;\n              top: 50%;\n              left: 18px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%); }\n              body main section[data-title='gallery'] .gallery .left-button i:before, body main section[data-title='gallery'] .gallery .right-button i:before {\n                content: ' ';\n                position: absolute;\n                background: white;\n                width: 6px;\n                height: 30px;\n                transform: rotate(90deg) translate(-12px, 12px); }\n          body main section[data-title='gallery'] .gallery .left-button {\n            left: 0; }\n            body main section[data-title='gallery'] .gallery .left-button i {\n              top: 39%;\n              left: 16px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%) rotateZ(180deg); }\n          body main section[data-title='gallery'] .gallery .right-button {\n            right: 0; }\n      body main section[data-title='contact'] {\n        padding-top: 20px;\n        height: 650px; }\n        body main section[data-title='contact'] iframe {\n          margin-top: 20px; }\n        body main section[data-title='contact'] .details {\n          margin-top: 40px; }\n          body main section[data-title='contact'] .details p {\n            margin: 6px;\n            font-size: 16px; }\n            body main section[data-title='contact'] .details p a {\n              text-decoration: none;\n              color: #000; }\n              body main section[data-title='contact'] .details p a:hover {\n                color: #AAA; }\n            body main section[data-title='contact'] .details p i.fa {\n              margin-left: 10px; }\n              body main section[data-title='contact'] .details p i.fa.fa-map-marker {\n                margin-right: 2px;\n                color: #ff0000; }\n              body main section[data-title='contact'] .details p i.fa.fa-phone {\n                color: #33aae0; }\n              body main section[data-title='contact'] .details p i.fa.fa-fax {\n                color: #1eaa6d; }\n              body main section[data-title='contact'] .details p i.fa.fa-envelope {\n                color: #e6be1b; }\n  body footer {\n    background: #333;\n    width: 100%;\n    height: 100px;\n    text-align: center;\n    color: #d4d4d4;\n    font-weight: 100;\n    font-size: 13px;\n    position: relative; }\n    body footer span {\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: 2px;\n      transform: translate(-50%, -50%);\n      cursor: default; }\n      body footer span i {\n        color: #fff833; }\n      body footer span a {\n        text-decoration: none;\n        color: #FFF;\n        cursor: pointer;\n        display: inline-block;\n        font-weight: normal;\n        transition-duration: 0.2s;\n        transform: translateZ(1px);\n        text-shadow: 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1); }\n        body footer span a:hover {\n          opacity: 0.8;\n          color: yellow;\n          transform: translateZ(1px) translateY(-5px) scale(1.02);\n          text-shadow: 0 10px 5px rgba(255, 255, 0, 0.1), 0 5px 5px rgba(255, 255, 0, 0.25), 0 2px 5px rgba(255, 255, 0, 0.8); }\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTM0M2QzYjFmYTI0ZjhmNGFmNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImFwcCIsIkFwcCIsInJvYm9TY2VuZSIsIm5hdmlnYXRpb24iLCJnYWxsZXJ5Iiwicm9ib3QiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3ZlIiwiYmluZCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwiZm9jdXMiLCJmb2N1c2luZ1RpbWVvdXQiLCJhdXRvUm90YXRpb25SZW5kZXJlciIsImZyYW1lc0Zsb3ciLCJyZW5kZXIiLCJhdXRvUm90YXRlIiwiZXZlbnQiLCJmb2N1c2VkIiwidG91Y2hlcyIsImUiLCJtb3ZlUm9ib3RUbyIsInBhZ2VYIiwicGFnZVkiLCJ4IiwieSIsInhSYXRlIiwiaW5uZXJXaWR0aCIsInlSYXRlIiwiaW5uZXJIZWlnaHQiLCJyb3RhdGVZIiwiTWF0aCIsIlBJIiwicm90YXRlWCIsImFybUFuZ2xlIiwid3Jpc3RBbmdsZSIsImNsb3NlR3JhYiIsImdyYWJBbmdsZSIsImZyYW1lIiwidGhldGEiLCJpbmRleCIsImNvcyIsInNpbiIsImlzRm9jdXNlZCIsImNsZWFyVGltZW91dCIsInBhdXNlIiwic2V0VGltZW91dCIsInBsYXkiLCJwb3N0cHJvY2Vzc2luZyIsImJva2VoX3BhcmFtcyIsInpuZWFyIiwiemZhciIsInNoYWRlckZvY3VzIiwiZnN0b3AiLCJtYXhibHVyIiwic2hvd0ZvY3VzIiwiZm9jYWxEZXB0aCIsIm1hbnVhbGRvZiIsInZpZ25ldHRpbmciLCJkZXB0aGJsdXIiLCJ0aHJlc2hvbGQiLCJnYWluIiwiYmlhcyIsImZyaW5nZSIsImZvY2FsTGVuZ3RoIiwibm9pc2UiLCJwZW50YWdvbiIsImRpdGhlcmluZyIsIlJvYm9TY2VuZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdCIsIm9uUmVzaXplIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiZm9nQ29sb3IiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJmb2ciLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsInJvdGF0aW9uIiwiYWRkIiwibWF0ZXJpYWxfZGVwdGgiLCJNZXNoRGVwdGhNYXRlcmlhbCIsImluaXRQb3N0UHJvY2Vzc2luZyIsInVwZGF0ZUJvb2tlaFBhcmFtcyIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJnYW1tYUlucHV0IiwiZ2FtbWFPdXRwdXQiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwicmVuZGVyUmV2ZXJzZVNpZGVkIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJoZW1pc3BoZXJlTGlnaHQiLCJIZW1pc3BoZXJlTGlnaHQiLCJncmlkSGVscGVyIiwiR3JpZEhlbHBlciIsImNoYW5nZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2tlaF91bmlmb3JtcyIsInZhbHVlIiwic2V0Rm9jYWxMZW5ndGgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwYXJhbXMiLCJtaW5GaWx0ZXIiLCJMaW5lYXJGaWx0ZXIiLCJtYWdGaWx0ZXIiLCJmb3JtYXQiLCJSR0JGb3JtYXQiLCJydFRleHR1cmVEZXB0aCIsIldlYkdMUmVuZGVyVGFyZ2V0IiwicnRUZXh0dXJlQ29sb3IiLCJib2tlaF9zaGFkZXIiLCJCb2tlaFNoYWRlciIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsInVuaWZvcm1zIiwidGV4dHVyZSIsIm1hdGVyaWFsQm9rZWgiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiZGVmaW5lcyIsIlJJTkdTIiwiU0FNUExFUyIsInF1YWQiLCJNZXNoIiwiUGxhbmVHZW9tZXRyeSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsIm92ZXJyaWRlTWF0ZXJpYWwiLCJsb2FkZXIiLCJKU09OTG9hZGVyIiwiYmxhY2tNYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwiY29sb3IiLCJzaGluaW5lc3MiLCJkYXJrTWF0ZXJpYWwiLCJsaWdodE1hdGVyaWFsIiwib2JqZWN0c05hbWVzIiwibG9hZCIsIm9iamVjdE5hbWUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJpbmNsdWRlcyIsImxvYWRBbGxPYmplY3RzQW5kUHV0SW4iLCJvYmplY3RzIiwibG9hZGVkQ291bnQiLCJ0aGVuIiwibWVzaCIsImxlbmd0aCIsIlJvYm90IiwiaXNSZWFkeSIsInBhcnRzIiwicmVhZHkiLCJyZXN0Iiwicm90YXRvciIsImFybTEiLCJhcm0yIiwid3Jpc3QiLCJ3cmlzdGJvbmUiLCJoYW5kIiwiZmluZ2VyIiwiZmluZ2VyMiIsIl9yb3RhdGVZIiwiX3JvdGF0ZVgiLCJfYXJtQW5nbGUiLCJfd3Jpc3RBbmdsZSIsIl9ncmFiQW5nbGUiLCJvcGVuR3JhYiIsImRlZyIsIm1heCIsIm1pbiIsIk5hdmlnYXRpb24iLCJoaWdobGlnaHQiLCJpdGVtcyIsInNjcm9sbFRhcmdldCIsInNjcm9sbGluZ1JlbmRlcmVyIiwic2Nyb2xsaW5nUmVuZGVyZXJNZXRob2QiLCJ0aGF0Iiwic3R5bGUiLCJpdGVtIiwib25tb3VzZW92ZXIiLCJvbk1vdXNlT3Zlckl0ZW0iLCJvbmNsaWNrIiwib25DbGlja09uSXRlbSIsImVsZW1lbnQiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsInNlY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJvZmZzZXRUb3AiLCJkaXN0YW5jZSIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJzZXRCZXR3ZWVuIiwibnVtYmVyIiwiaW1hZ2VzTmFtZXMiLCJHYWxsZXJ5IiwibGVmdEJ1dHRvbiIsInJpZ2h0QnV0dG9uIiwiaW1hZ2VzIiwiY29udGFpbmVyUmlnaHQiLCJsb2FkSW1hZ2VzIiwibmFtZSIsImltZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhbHQiLCJwdXNoIiwic2xpZGVyIiwibW92ZSIsImltYWdlIiwib25SZXF1ZXN0Rm9yU2xpZGVzIiwid2hpY2giLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdGVwIiwibWF4UmlnaHQiLCJyaWdodCIsImVuYWJsZUFsbEJ1dHRvbnMiLCJkaXNhYmxlQnV0dG9uIiwiaSIsInNob3ciLCJzdW0iLCJjbGllbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwiU2xpZGVyIiwiaXNBY3RpdmUiLCJ0YXJnZXQiLCJoaWRkZW4iLCJjb2RlIiwiaW1hZ2VJbmRleCJdLCJtYXBwaW5ncyI6IjtBQUFB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QStCLE1BQUtILFFBQXhDLEVBQWtELE1BQUtJLFVBQUw7QUFDbEQsb0JBQUk1TyxNQUFNMk8sSUFBTixLQUFlLFdBQWYsSUFBOEIsTUFBS0gsUUFBdkMsRUFBaUQsTUFBS0ksVUFBTDtBQUNwRCxhQUpEO0FBS0g7Ozs2QkFRS3JOLEssRUFBTztBQUNULGlCQUFLcU4sVUFBTCxHQUFrQnJOLEtBQWxCO0FBQ0EsaUJBQUtpTixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsaUJBQUtwTCxTQUFMLENBQWV1SyxTQUFmLENBQXlCckosR0FBekIsQ0FBNkIsUUFBN0I7QUFDSDs7O2lDQUNTO0FBQ04saUJBQUtrSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsaUJBQUtwTCxTQUFMLENBQWV1SyxTQUFmLENBQXlCQyxNQUF6QixDQUFnQyxRQUFoQztBQUNIOzs7MEJBZmVyTSxLLEVBQU87QUFDbkIsaUJBQUtBLEtBQUwsR0FBYWdMLFdBQVdoTCxLQUFYLEVBQWtCLENBQWxCLEVBQXFCLEtBQUtwQyxPQUFMLENBQWEwTixNQUFiLENBQW9CckQsTUFBcEIsR0FBMkIsQ0FBaEQsQ0FBYjtBQUNBLGlCQUFLZ0UsS0FBTCxDQUFXTCxHQUFYLEdBQWlCLEtBQUtoTyxPQUFMLENBQWEwTixNQUFiLENBQW9CLEtBQUt0TCxLQUF6QixFQUFnQzRMLEdBQWpEO0FBQ0gsUzs0QkFDaUI7QUFDZCxtQkFBTyxLQUFLNUwsS0FBWjtBQUNIOzs7Ozs7a0JBWVVnTixNIiwiZmlsZSI6Ii4vcHVibGljL3NjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTM0M2QzYjFmYTI0ZjhmNGFmNTAiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvaW5kZXguc2FzcydcclxuaW1wb3J0IEFwcCBmcm9tICcuL3NjcmlwdHMvQXBwJ1xyXG5cclxud2luZG93LiQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSlcclxuXHJcbndpbmRvdy5hcHAgPSBuZXcgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWJfTGlnaHQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWJfTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdJUkFOU2FucycsIHNlcmlmOyB9XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgYm9keSAuZnVsbC12aWV3LXNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7IH1cXG4gICAgYm9keSAuZnVsbC12aWV3LXNsaWRlci5hY3RpdmUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87IH1cXG4gICAgYm9keSAuZnVsbC12aWV3LXNsaWRlciA+IGltZyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiA3MCU7XFxuICAgICAgei1pbmRleDogMTAwMDsgfVxcbiAgYm9keSBoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgYm9keSBoZWFkZXIgaDEge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDU1JTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC43KSwgdHJhbnNwYXJlbnQpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB3aGl0ZTtcXG4gICAgICBib3gtc2hhZG93OiAwIC0xOXB4IDIxcHggLTI1cHggI2Y1ZjVmNSwgMCAxOXB4IDIxcHggLTI1cHggI2Y1ZjVmNTtcXG4gICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgICAgICBib2R5IGhlYWRlciBoMSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgdG9wOiA3MCU7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfSB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XFxuICAgICAgICBib2R5IGhlYWRlciBoMSB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDU2LCA1NiwgNTYsIDApLCByZ2JhKDU2LCA1NiwgNTYsIDAuMyksICMzODM4MzgsICMzODM4MzgpO1xcbiAgICAgICAgICB0b3A6IDgwJTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAyMDBweCAyMDBweDsgfSB9XFxuICAgIGJvZHkgaGVhZGVyIGNhbnZhcyB7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYsICM2NjYpOyB9XFxuICBib2R5IG5hdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogLTRweDtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1NTUsICMyYjJiMmIsICMyYjJiMmIsICM1NTUpO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAgIGJvZHkgbmF2IHtcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMzgzODM4LCAjMmIyYjJiLCAjMmIyYjJiLCAjM2EzYTNhKTsgfSB9XFxuICAgIGJvZHkgbmF2IC5zZWxlY3QtaGlnaGxpZ2h0IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMjAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7IH1cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgIGJvZHkgbmF2IC5zZWxlY3QtaGlnaGxpZ2h0IHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuICAgIGJvZHkgbmF2OmhvdmVyIC5zZWxlY3QtaGlnaGxpZ2h0IHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAgIGJvZHkgbmF2IHVsIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgIGJvZHkgbmF2IHVsIHtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSB9XFxuICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICBjb2xvcjogI0RERDtcXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAgICAgICBib2R5IG5hdiB1bCBsaSB7XFxuICAgICAgICAgICAgZmxleC1iYXNpczogYXV0bztcXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4OyB9IH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAgICAgICBib2R5IG5hdiB1bCBsaSB7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7IH0gfVxcbiAgICAgICAgYm9keSBuYXYgdWwgbGk6YWN0aXZlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgb3BhY2l0eTogMC42OyB9XFxuICBib2R5IG1haW4ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZGRiwgI0VFRSwgI0ZGRik7XFxuICAgIHBhZGRpbmc6IDcwcHggMDsgfVxcbiAgICBib2R5IG1haW4gc2VjdGlvbiB7XFxuICAgICAgZGlyZWN0aW9uOiBydGw7XFxuICAgICAgd2lkdGg6IDkwMHB4O1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgcGFkZGluZzogNTVweCAwO1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb24ge1xcbiAgICAgICAgICB3aWR0aDogODAlOyB9IH1cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIHtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIHVsIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfSB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb24gPiBpbWcge1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICB3aWR0aDogMzA1cHg7IH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbiA+IGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bzsgfSB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gPiBpbWcge1xcbiAgICAgICAgICAgIGZsb2F0OiBub25lOyB9IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDUwcHg7IH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIHtcXG4gICAgICAgICAgICB0b3A6IDA7IH0gfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSBoMiB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUgcCB7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4OyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0ncG9ydGZvbGlvJ10ge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J3BvcnRmb2xpbyddID4gaW1nIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0ndGVhY2hpbmcnXSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSB7XFxuICAgICAgICBoZWlnaHQ6IDQwMHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IHtcXG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7IH0gfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzOyB9XFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDsgfSB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSBpbWcge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gICAgICAgICAgICAtbW96LXVzZXItZHJhZzogbm9uZTtcXG4gICAgICAgICAgICAtbXMtdXNlci1kcmFnOiBub25lO1xcbiAgICAgICAgICAgIHVzZXItZHJhZzogbm9uZTsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSBpbWc6aG92ZXIge1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44NTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgaW1nOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24sIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIHtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMzsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24uYWN0aXZlLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbi5hY3RpdmUge1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zczsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b246aG92ZXIsIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24sIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiBpIHtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgICAgICAgICAgd2lkdGg6IDVweDtcXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgICAgbGVmdDogMThweDtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpOmJlZm9yZSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24gaTpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgtMTJweCwgMTJweCk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgbGVmdDogMDsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24gaSB7XFxuICAgICAgICAgICAgICB0b3A6IDM5JTtcXG4gICAgICAgICAgICAgIGxlZnQ6IDE2cHg7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigxODBkZWcpOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIHtcXG4gICAgICAgICAgICByaWdodDogMDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIGhlaWdodDogNjUwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSBpZnJhbWUge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4OyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBhIHtcXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBhOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNBQUE7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhIHtcXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhLmZhLW1hcC1tYXJrZXIge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGkuZmEuZmEtcGhvbmUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzYWFlMDsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgaS5mYS5mYS1mYXgge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFlYWE2ZDsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgaS5mYS5mYS1lbnZlbG9wZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTZiZTFiOyB9XFxuICBib2R5IGZvb3RlciB7XFxuICAgIGJhY2tncm91bmQ6ICMzMzM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICBib2R5IGZvb3RlciBzcGFuIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICBib2R5IGZvb3RlciBzcGFuIGkge1xcbiAgICAgICAgY29sb3I6ICNmZmY4MzM7IH1cXG4gICAgICBib2R5IGZvb3RlciBzcGFuIGEge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxcHgpO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gICAgICAgIGJvZHkgZm9vdGVyIHNwYW4gYTpob3ZlciB7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgY29sb3I6IHllbGxvdztcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDFweCkgdHJhbnNsYXRlWSgtNXB4KSBzY2FsZSgxLjAyKTtcXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMTBweCA1cHggcmdiYSgyNTUsIDI1NSwgMCwgMC4xKSwgMCA1cHggNXB4IHJnYmEoMjU1LCAyNTUsIDAsIDAuMjUpLCAwIDJweCA1cHggcmdiYSgyNTUsIDI1NSwgMCwgMC44KTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/LXVybCEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm9ib1NjZW5lIGZyb20gJy4vUm9ib1NjZW5lJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvU2NlbmUgPSBuZXcgUm9ib1NjZW5lKCdib2R5ID4gaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oJ2JvZHkgPiBuYXYnKTtcclxuICAgICAgICB0aGlzLmdhbGxlcnkgPSBuZXcgR2FsbGVyeSgnYm9keSAuZ2FsbGVyeScpO1xyXG4gICAgICAgIHRoaXMucm9ib3QgPSB0aGlzLnJvYm9TY2VuZS5yb2JvdDtcclxuICAgICAgICAvLyBNb3Zpbmcgcm9ib3QgbGlzdGVuZXJzXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBHcmFiYmluZyBsaXN0ZW5lcnNcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIEZvY3VzaW5nIGxpc3RlbmVyc1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5mb2N1cyA9IGZhbHNlKTtcclxuICAgICAgICAkKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHRoaXMuZm9jdXMgPSB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB0aGlzLmZvY3VzID0gZmFsc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4gdGhpcy5mb2N1cyA9IHRydWUpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNpbmdUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF1dG9Sb3RhdGlvblJlbmRlcmVyID0gd2luZG93LmZyYW1lc0Zsb3cucmVuZGVyKHRoaXMuYXV0b1JvdGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIG9uTW92ZSAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIHRyeSB7IGV2ZW50ID0gZXZlbnQudG91Y2hlc1swXSB9IGNhdGNoIChlKSB7IC8qIG5vdGhpbmcgKi8gfVxyXG4gICAgICAgIHRoaXMubW92ZVJvYm90VG8oZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKVxyXG4gICAgfVxyXG4gICAgbW92ZVJvYm90VG8gKHgsIHkpIHtcclxuICAgICAgICBjb25zdCB4UmF0ZSA9IHggLyB3aW5kb3cuaW5uZXJXaWR0aCAtIDAuNTtcclxuICAgICAgICBjb25zdCB5UmF0ZSA9IHkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAwLjU7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5yb3RhdGVZID0geFJhdGUgKiBNYXRoLlBJO1xyXG4gICAgICAgIHRoaXMucm9ib3Qucm90YXRlWCA9IHlSYXRlICogTWF0aC5QSS8zIC0gTWF0aC5QSS82O1xyXG4gICAgICAgIHRoaXMucm9ib3QuYXJtQW5nbGUgPSB5UmF0ZSAqIE1hdGguUEkvMiArIDAuMDU7XHJcbiAgICAgICAgdGhpcy5yb2JvdC53cmlzdEFuZ2xlID0geVJhdGUgKiAtTWF0aC5QSS8zXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlRG93biAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5jbG9zZUdyYWIoKVxyXG4gICAgfVxyXG4gICAgb25Nb3VzZVVwICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LmdyYWJBbmdsZSA9IDAuNVxyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzIChpc0ZvY3VzZWQpIHtcclxuICAgICAgICBpZiAoaXNGb2N1c2VkKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzaW5nVGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b1JvdGF0aW9uUmVuZGVyZXIucGF1c2UoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuYXV0b1JvdGF0aW9uUmVuZGVyZXIucGxheSgpIH0sIDIwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXV0b1JvdGF0ZSAoZnJhbWUpIHtcclxuICAgICAgICBjb25zdCB0aGV0YSA9IGZyYW1lLmluZGV4LzI1MDtcclxuICAgICAgICB0aGlzLm1vdmVSb2JvdFRvKFxyXG4gICAgICAgICAgICAod2luZG93LmlubmVyV2lkdGggKyBNYXRoLmNvcyh0aGV0YSkgKiB3aW5kb3cuaW5uZXJXaWR0aCkvMixcclxuICAgICAgICAgICAgKHdpbmRvdy5pbm5lckhlaWdodCArIE1hdGguc2luKHRoZXRhKSAqIHdpbmRvdy5pbm5lckhlaWdodCkvMlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvQXBwLmpzIiwiaW1wb3J0ICdmcmFtZXNmbG93J1xyXG5pbXBvcnQgUm9ib3QgZnJvbSAnLi9Sb2JvdCdcclxuXHJcbnZhciBwb3N0cHJvY2Vzc2luZyA9IHt9O1xyXG52YXIgYm9rZWhfcGFyYW1zID0ge1xyXG4gICAgem5lYXI6IDAuMSxcclxuICAgIHpmYXI6IDEwLFxyXG4gICAgc2hhZGVyRm9jdXM6IGZhbHNlLFxyXG4gICAgZnN0b3A6IDIwLFxyXG4gICAgbWF4Ymx1cjogMixcclxuICAgIHNob3dGb2N1czogZmFsc2UsXHJcbiAgICBmb2NhbERlcHRoOiAxLjQsXHJcbiAgICBtYW51YWxkb2Y6IGZhbHNlLFxyXG4gICAgdmlnbmV0dGluZzogZmFsc2UsXHJcbiAgICBkZXB0aGJsdXI6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQgOiAwLjUsXHJcbiAgICBnYWluOiAwLjIsXHJcbiAgICBiaWFzOiAyLFxyXG4gICAgZnJpbmdlOiAzLFxyXG4gICAgZm9jYWxMZW5ndGg6IDIwLFxyXG4gICAgbm9pc2U6IHRydWUsXHJcbiAgICBwZW50YWdvbjogZmFsc2UsXHJcbiAgICBkaXRoZXJpbmc6IDBcclxufTtcclxuXHJcbmNsYXNzIFJvYm9TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuZnJhbWVzRmxvdy5yZW5kZXIodGhpcy5yZW5kZXIuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIC8vIENyZWF0aW5nIFNjZW5lXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIGNvbnN0IGZvZ0NvbG9yID0gMHhmM2YzZjM7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKGZvZ0NvbG9yKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coZm9nQ29sb3IsIDQsIDUwKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBDYW1lcmFcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAxLCAzMDApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMztcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi54ID0gMC4yNTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSk7XHJcbiAgICAgICAgLy8gUG9zdCBQcm9jY2Vzc2luZ1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxfZGVwdGggPSBuZXcgVEhSRUUuTWVzaERlcHRoTWF0ZXJpYWwoKTtcclxuICAgICAgICB0aGlzLmluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9va2VoUGFyYW1zKCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgUmVuZGVyZXJcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmdhbW1hSW5wdXQgID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCAgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAucmVuZGVyUmV2ZXJzZVNpZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICAvLyBDcmVhdGluZyBMaWdodHNcclxuICAgICAgICB0aGlzLnBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMC41KTsgLy8gUG9pbnRcclxuICAgICAgICB0aGlzLnBvaW50TGlnaHQucG9zaXRpb24ueiA9IDEwO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucG9pbnRMaWdodCk7XHJcbiAgICAgICAgdGhpcy5oZW1pc3BoZXJlTGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZmZiwgMHgwMDAwMDAsIDEgKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmhlbWlzcGhlcmVMaWdodCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5ncmlkSGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoIDcwLCA0NSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ3JpZEhlbHBlcik7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgUm9ib3RcclxuICAgICAgICB0aGlzLnJvYm90ID0gbmV3IFJvYm90KHRoaXMpXHJcbiAgICB9XHJcbiAgICBzZXRCb29rZWhQYXJhbSAoY2hhbmdlcykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9rZWhfcGFyYW1zLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tlaFBhcmFtcygpXHJcbiAgICB9XHJcbiAgICB1cGRhdGVCb29rZWhQYXJhbXMgKCkge1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gYm9rZWhfcGFyYW1zKSBpZihlIGluIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zKSBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tlXS52YWx1ZSA9IGJva2VoX3BhcmFtc1tlXTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInpuZWFyXCJdLnZhbHVlID0gYm9rZWhfcGFyYW1zLnpuZWFyO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1wiemZhclwiXS52YWx1ZSA9IGJva2VoX3BhcmFtcy56ZmFyO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEZvY2FsTGVuZ3RoKCBib2tlaF9wYXJhbXMuZm9jYWxMZW5ndGggKVxyXG4gICAgfVxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nICgpIHtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZSAgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtdGhpcy53aWR0aCAvIDIsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIC02MCwgNjAgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZS5hZGQoIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSApO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdFxyXG4gICAgICAgIH1cclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHBhcmFtcyApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcGFyYW1zICk7XHJcbiAgICAgICAgbGV0IGJva2VoX3NoYWRlciA9IFRIUkVFLkJva2VoU2hhZGVyO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggYm9rZWhfc2hhZGVyLnVuaWZvcm1zICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0Q29sb3JcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvci50ZXh0dXJlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widERlcHRoXCJdLnZhbHVlID0gcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlRGVwdGgudGV4dHVyZTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRleHR1cmVXaWR0aFwiIF0udmFsdWUgPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widGV4dHVyZUhlaWdodFwiXS52YWx1ZSA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLm1hdGVyaWFsQm9rZWggPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zLFxyXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGJva2VoX3NoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBib2tlaF9zaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgICAgIGRlZmluZXM6IHsgUklOR1M6IDMsIFNBTVBMRVM6IDJ9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucXVhZCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCksIHBvc3Rwcm9jZXNzaW5nLm1hdGVyaWFsQm9rZWggKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZS5hZGQoIHBvc3Rwcm9jZXNzaW5nLnF1YWQgKTtcclxuXHR9XHJcbiAgICBvblJlc2l6ZSAoKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHBvc3Rwcm9jZXNzaW5nLmNhbWVyYS5hc3BlY3QgPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcclxuXHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IsIHRydWUpO1xyXG5cdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbF9kZXB0aDtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aCwgdHJ1ZSk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcihwb3N0cHJvY2Vzc2luZy5zY2VuZSwgcG9zdHByb2Nlc3NpbmcuY2FtZXJhKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvU2NlbmVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfRnJhbWVzRmxvdyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0dmFyIF9GcmFtZXNGbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZyYW1lc0Zsb3cpO1xuXG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblx0Ly8gZGVmaW5pbmcgZnJhbWVzRmxvdyBhcyBhIGdsb2JhbCBvYmplY3Rcblx0aWYgKCEod2luZG93LmZyYW1lc0Zsb3cgaW5zdGFuY2VvZiBfRnJhbWVzRmxvdzIuZGVmYXVsdCkpIHtcblx0ICAgIC8vIGlmIGl0IGRpZG4ndCBkZWZpbmUgYmVmb3JlXG5cdCAgICB3aW5kb3cuZnJhbWVzRmxvdyA9IG5ldyBfRnJhbWVzRmxvdzIuZGVmYXVsdCgpO1xuXHR9XG5cblx0Ly8gZXhwb3J0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHdpbmRvdy5mcmFtZXNGbG93O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdHZhciBfUmVuZGVyZXJBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cblx0dmFyIF9SZW5kZXJlckFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyQXJyYXkpO1xuXG5cdHZhciBfUmVuZGVyZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBfUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXIpO1xuXG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHQvLyBDb21wYXRpYmlsaXR5IGZvciBhbGwgYnJvd3NlcnMgLSBQYXVsIElyaXNoIHZlcnNpb25cblx0d2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG5cdCAgICB9O1xuXHR9XG5cblx0Ly8gRnJhbWVzRmxvd1xuXHQoKTtcblx0dmFyIEZyYW1lc0Zsb3cgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBGcmFtZXNGbG93KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGcmFtZXNGbG93KTtcblxuXHQgICAgICAgIHRoaXMuZnJhbWVzID0gMDtcblx0ICAgICAgICB0aGlzLl9mcHMgPSAzMDtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG5cdCAgICAgICAgICAgIG1pbmltdW1BY2NlcHRhYmxlRlBTOiAzMFxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5yZW5kZXJlcnMgPSBuZXcgX1JlbmRlcmVyQXJyYXkyLmRlZmF1bHQoKTtcblx0ICAgICAgICB0aGlzLnBlcmZvcm1hbmNlID0ge1xuXHQgICAgICAgICAgICBsb2dzOiBuZXcgQXJyYXkoMTAwKSxcblx0ICAgICAgICAgICAgbG9nc1BvaW50ZXI6IDAsXG5cdCAgICAgICAgICAgIGxhc3RUaW1lU3RhbXA6IHVuZGVmaW5lZCxcblx0ICAgICAgICAgICAgbGFzdEZyYW1lRlBTOiAzMCxcblx0ICAgICAgICAgICAgcmF0aW86IDEsXG5cdCAgICAgICAgICAgIHN0YXR1czogMCxcblx0ICAgICAgICAgICAgYXZlcmFnZToge1xuXHQgICAgICAgICAgICAgICAgZnBzOiAzMCxcblx0ICAgICAgICAgICAgICAgIHJhdGlvOiAxLFxuXHQgICAgICAgICAgICAgICAgc3RhdHVzOiAwXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMucmVxdWVzdExvb3AoKTtcblx0ICAgIH1cblxuXHQgICAgX2NyZWF0ZUNsYXNzKEZyYW1lc0Zsb3csIFt7XG5cdCAgICAgICAga2V5OiAnZ2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGlkKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycy5nZXQoaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGwoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0QWxsQnlDbGFzcycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycy5maWx0ZXIoZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIuY2xhc3MgPT0gY2xhc3NOYW1lO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlUmVuZGVyZXJCeUlkJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUmVuZGVyZXJCeUlkKGlkKSB7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnJlbW92ZShpZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2NoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUocmF0ZSkge1xuXHQgICAgICAgICAgICB2YXIgaXNHbG9iYWxDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cblx0ICAgICAgICAgICAgdmFyIGVycm9yID0gbnVsbDtcblx0ICAgICAgICAgICAgdmFyIHBvaW50ZXIgPSBpc0dsb2JhbENoZWNrID8gJ2FueScgOiAndGhpcyc7XG5cdCAgICAgICAgICAgIGlmIChyYXRlIDwgMCkgZXJyb3IgPSAnRlBTIG11c3Qgbm90IGJlIGEgbmVnYXRpdmUgbnVtYmVyISc7ZWxzZSBpZiAocmF0ZSA8IDMwICYmIHJhdGUgPiAwICYmIDMwIC8gcmF0ZSAlIDEgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBsZXNzIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoMzAgLyBGUFMpIHNob3VsZCBiZSBpbnRlZ2VyJztlbHNlIGlmIChyYXRlID4gMzAgJiYgcmF0ZSAlIDMwICE9PSAwKSBlcnJvciA9ICdpZiBGUFMgaXMgbW9yZSB0aGFuIDMwZnBzLCBpdCBoYXZlIHRvIGJlIGxpa2UgdGhpczogKEZQUyAlIDMwID09IDApJztcblx0ICAgICAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB0aHJvdyAnY2FuXFwndCBzZXQgJyArIHJhdGUgKyAnZnBzIGZvciB0aGlzIHJlbmRlcmVyLiBSRUFTT046IDwnICsgZXJyb3IgKyAnPic7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXlBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5QWxsKCkge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuZ2V0QWxsUmVuZGVyZXJzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucGxheSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlQWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2VBbGwoKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHRoaXMuZ2V0QWxsUmVuZGVyZXJzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBfc3RlcDIudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucGF1c2UoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVuZGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKGNsYXNzTmFtZSwgZnVuYykge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICBmdW5jID0gY2xhc3NOYW1lO1xuXHQgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJyc7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9SZW5kZXJlcjIuZGVmYXVsdCh0aGlzLCB7XG5cdCAgICAgICAgICAgICAgICBpZDogdGhpcy5yZW5kZXJlcnMubGVuZ3RoLFxuXHQgICAgICAgICAgICAgICAgY2xhc3M6IGNsYXNzTmFtZVxuXHQgICAgICAgICAgICB9LCBmdW5jKTtcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG5cdCAgICAgICAgICAgIHJldHVybiByZW5kZXJlcjtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnb25MYWcnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkxhZyhtaW5pbXVtRlBTLCBjYWxsYmFjaykge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIG1pbmltdW1GUFMgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2sgPSBtaW5pbXVtRlBTO2Vsc2UgdGhpcy5vcHRpb25zLm1pbmltdW1BY2NlcHRhYmxlRlBTID0gbWluaW11bUZQUztcblx0ICAgICAgICAgICAgdGhpcy5vbkxhZ0NhbGxiYWNrID0gY2FsbGJhY2s7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlZ2lzdGVyUGVyZm9ybWFuY2VMb2cnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclBlcmZvcm1hbmNlTG9nKHJlbmRlclRpbWUpIHtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgZnBzXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTID0gMTAwMCAvIHJlbmRlclRpbWU7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGxhZ3Ncblx0ICAgICAgICAgICAgaWYgKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTIDwgdGhpcy5vcHRpb25zLm1pbmltdW1BY2NlcHRhYmxlRlBTKSBpZiAodHlwZW9mIHRoaXMub25MYWdDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5vbkxhZ0NhbGxiYWNrKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTXG5cdCAgICAgICAgICAgIC8vIGxvZ2dpbmdcblx0ICAgICAgICAgICAgKTt0aGlzLnBlcmZvcm1hbmNlLmxvZ3NbdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlcl0gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUztcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlciA9ICh0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyICsgMSkgJSAxMDA7XG5cdCAgICAgICAgICAgIC8vIGFuYWx5emluZyBsb2dzXG5cdCAgICAgICAgICAgIHRoaXMuYW5hbHl6ZVBlcmZvcm1hbmNlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2FuYWx5emVQZXJmb3JtYW5jZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFuYWx5emVQZXJmb3JtYW5jZSgpIHtcblx0ICAgICAgICAgICAgdmFyIGFsbERhdGEgPSB0aGlzLnBlcmZvcm1hbmNlLmxvZ3MuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGRhdGEgPT0gJ251bWJlcic7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgYXZlcmFnZSBvZiBkYXRhXG5cdCAgICAgICAgICAgICk7dmFyIEZQU1N1bSA9IDA7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IGFsbERhdGFbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9zdGVwMy52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICBGUFNTdW0gKz0gZGF0YTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzID0gRlBTU3VtIC8gYWxsRGF0YS5sZW5ndGg7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIHBlcmZvcm1hbmNlIHBlcmNlbnRhZ2Vcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTIC8gMzA7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgLyAzMDtcblx0ICAgICAgICAgICAgLy8gZGVmaW5pbmcgc3RhdHVzXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2Uuc3RhdHVzID0gdGhpcy5fZ2V0U3RhdHVzT2ZGUFModGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMpO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2Uuc3RhdHVzID0gdGhpcy5fZ2V0U3RhdHVzT2ZGUFModGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ19nZXRTdGF0dXNPZkZQUycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRTdGF0dXNPZkZQUyhmcHMpIHtcblx0ICAgICAgICAgICAgdmFyIHJhdGlvID0gZnBzIC8gdGhpcy5mcHM7XG5cdCAgICAgICAgICAgIHZhciBzdGF0dXMgPSAtMzsgLy8gV09SU1Rcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC4zKSBzdGF0dXMgPSAtMjsgLy8gQkFEXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuNikgc3RhdHVzID0gLTE7IC8vIE5PVCBCQURcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC45KSBzdGF0dXMgPSAwOyAvLyBPS1xuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAxLjMpIHN0YXR1cyA9IDE7IC8vIEdPT0Rcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMS42KSBzdGF0dXMgPSAyOyAvLyBFWENFTExFTlRcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMikgc3RhdHVzID0gMzsgLy8gQkVTVFxuXHQgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZXF1ZXN0TG9vcCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RMb29wKCkge1xuXHQgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMucmVxdWVzdExvb3AuYmluZCh0aGlzKSk7XG5cdCAgICAgICAgICAgIHRoaXMuZnJhbWVzKys7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICBpZiAodGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wICE9PSB1bmRlZmluZWQpIHRoaXMucmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyhEYXRlLm5vdygpIC0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wKTtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zwcztcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlLCB0cnVlKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIEZyYW1lc0Zsb3c7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBGcmFtZXNGbG93O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0dmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gUmVuZGVyZXIoZnJhbWVzRmxvdywgb3B0aW9ucywgZnVuYykge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cblx0ICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcblx0ICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9ucy5jbGFzcyB8fCAnJztcblx0ICAgICAgICB0aGlzLnByb3BzID0ge1xuXHQgICAgICAgICAgICBpc0RlYnVnaW5nOiBmYWxzZVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5mcmFtZXNGbG93ID0gZnJhbWVzRmxvdztcblx0ICAgICAgICB0aGlzLl9mcHMgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcblx0ICAgICAgICB0aGlzLmZyYW1lcyA9IDA7XG5cdCAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZTtcblx0ICAgICAgICB0aGlzLnJlbmRlcigpO1xuXHQgICAgfVxuXHQgICAgLy8gUmVuZGVyIG5leHQgZnJhbWVcblxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoUmVuZGVyZXIsIFt7XG5cdCAgICAgICAga2V5OiAnbmV4dCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cucmVtb3ZlUmVuZGVyZXJCeUlkKHRoaXMuaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlYnVnaW5nID0gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3Nob3VsZFJlbmRlclRoaXNGcmFtZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHtcblx0ICAgICAgICAgICAgLy8gYWxsIGNvbmRpdGlvbnMgdG8gcGF1c2Ugb3IgcGxheSByZW5kZXJpbmdcblx0ICAgICAgICAgICAgdmFyIGNvbmRpdGlvbnMgPSBbIXRoaXMucHJvcHMuaXNEZWJ1Z2luZywgdGhpcy5mcmFtZXNGbG93LmZyYW1lcyAlICgzMCAvIE1hdGgubWluKHRoaXMuZnBzLCAzMCkpID09IDBdO1xuXHQgICAgICAgICAgICB2YXIgcmV0ID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjb25kaXRpb25zW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0ICYmIGNvbmQ7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRGcmFtZU9iamVjdFRvUmV0dXJuJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RnJhbWVPYmplY3RUb1JldHVybigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB0aGlzLFxuXHQgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZnJhbWVzLFxuXHQgICAgICAgICAgICAgICAgZnBzOiB0aGlzLmZwcyxcblx0ICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgZnBzOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTLFxuXHQgICAgICAgICAgICAgICAgICAgIHJhdGlvOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UucmF0aW8sXG5cdCAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2Uuc3RhdHVzLFxuXHQgICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2U6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5hdmVyYWdlXG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyVGhpc0ZyYW1lKCkgfHwgdGhpcy5zaG91bGRHb05leHQpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb24gPSAwO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnBzID4gMzApIGl0ZXJhdGlvbiA9IE1hdGgubWF4KHRoaXMuZnBzLCAzMCkgLyAzMDtlbHNlIGl0ZXJhdGlvbiA9IDMwIC8gdGhpcy5mcHM7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXMrKztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuZnVuYyh0aGlzLmdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgaWYgKG5ld0ZQUyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cuY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUobmV3RlBTKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcHMgfHwgdGhpcy5mcmFtZXNGbG93LmZwcztcblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBSZW5kZXJlcjtcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0dmFyIFJlbmRlcmVyQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBSZW5kZXJlckFycmF5KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlckFycmF5KTtcblxuXHQgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnYXJyYXknKSB0aGlzLmFyciA9IGFyZ3NbMF07ZWxzZSB0aGlzLmFyciA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQXJyYXksIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xuXHQgICAgfVxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoUmVuZGVyZXJBcnJheSwgW3tcblx0ICAgICAgICBrZXk6ICdnZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJbaV07XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3NldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldChpLCB2YWwpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnJbaV0gPSB2YWw7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwdXNoJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaCh2YWwpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnIucHVzaCh2YWwpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGkpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnJbaV0gPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyLnNwbGljZShpLCAxKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZpbHRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlcihjb25kRnVuYykge1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFJlbmRlcmVyQXJyYXkodGhpcy5hcnIuZmlsdGVyKGNvbmRGdW5jKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2VhY2gnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGNiKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5hcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICBjYihpdGVtKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICd0b0FycmF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW1vdmUoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ25leHQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIubmV4dCgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnBhdXNlKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnBsYXkoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2xlbmd0aCcsXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFyci5sZW5ndGg7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIFJlbmRlcmVyQXJyYXk7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlckFycmF5O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZnJhbWVzZmxvdy9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5KU09OTG9hZGVyKCk7XHJcblxyXG5jb25zdCBibGFja01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwLCBzaGluaW5lc3M6IDAgfSk7XHJcbmNvbnN0IGRhcmtNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDk5OTk5OSwgc2hpbmluZXNzOiAxMDAgfSk7XHJcbmNvbnN0IGxpZ2h0TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHhlZWVlZWUsIHNoaW5pbmVzczogNzAgfSk7XHJcblxyXG5jb25zdCBvYmplY3RzTmFtZXMgPSBbJ2FybTEnLCAnYXJtMicsICdmaW5nZXInLCAnaGFuZCcsICdyZXN0JywgJ3JvdGF0b3InLCAnd3Jpc3QnLCAnd3Jpc3Rib25lJ107XHJcbmNvbnN0IGxvYWQgPSAob2JqZWN0TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gJy4vYXNzZXRzL29iamVjdHMvJyArIG9iamVjdE5hbWUgKyAnLmpzb24nO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QsIGVycikgPT4ge1xyXG4gICAgICAgIGxvYWRlci5sb2FkKHVybCwgKGdlb21ldHJ5LCBtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICBtYXRlcmlhbCA9IGxpZ2h0TWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09PSAnZmluZ2VyJykgbWF0ZXJpYWwgPSBibGFja01hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAoWyd3cmlzdGJvbmUnLCAnaGFuZCcsICdhcm0xJywgJ3Jlc3QnXS5pbmNsdWRlcyhvYmplY3ROYW1lKSkgbWF0ZXJpYWwgPSBkYXJrTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIHJlc29sdmUobmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufTtcclxuY29uc3QgbG9hZEFsbE9iamVjdHNBbmRQdXRJbiA9IChvYmplY3RzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgbGV0IGxvYWRlZENvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIG9mIG9iamVjdHNOYW1lcykge1xyXG4gICAgICAgICAgICBsb2FkKG9iamVjdE5hbWUpLnRoZW4oKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdHNbb2JqZWN0TmFtZV0gPSBtZXNoO1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmIChsb2FkZWRDb3VudCA9PT0gb2JqZWN0c05hbWVzLmxlbmd0aCkgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTtcclxuXHJcbmNsYXNzIFJvYm90IHtcclxuICAgIGNvbnN0cnVjdG9yIChyb2JvU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnJvYm9TY2VuZSA9IHJvYm9TY2VuZTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcm9ib1NjZW5lLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFydHMgPSB7fTtcclxuICAgICAgICBsb2FkQWxsT2JqZWN0c0FuZFB1dEluKHRoaXMucGFydHMpLnRoZW4odGhpcy5yZWFkeS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICAgIC8vIENvbWJpbmluZyB0aGluZ3MgdG9nZXRoZXJcclxuICAgICAgICB0aGlzLnBhcnRzLnJlc3QuYWRkKHRoaXMucGFydHMucm90YXRvcik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnBvc2l0aW9uLnkgPSAzO1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5hZGQodGhpcy5wYXJ0cy5hcm0xKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTEucG9zaXRpb24ueSA9IDI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLmFkZCh0aGlzLnBhcnRzLmFybTIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5wb3NpdGlvbi55ID0gNC41O1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5hZGQodGhpcy5wYXJ0cy53cmlzdCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdC5hZGQodGhpcy5wYXJ0cy53cmlzdGJvbmUpO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnBvc2l0aW9uLnkgPSA3LjU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucG9zaXRpb24ueCA9IC0wLjA2O1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLmFkZCh0aGlzLnBhcnRzLmhhbmQpO1xyXG4gICAgICAgIHRoaXMucGFydHMuaGFuZC5hZGQodGhpcy5wYXJ0cy5maW5nZXIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnkgPSAxLjQ7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueCA9IDAuMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi56ID0gMC4zNTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi54ID0gMC4yO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMiA9IHRoaXMucGFydHMuZmluZ2VyLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5oYW5kLmFkZCh0aGlzLnBhcnRzLmZpbmdlcjIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi55ID0gTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucG9zaXRpb24ueCA9IC0wLjQ7XHJcblxyXG4gICAgICAgIC8vIGFkZGluZyByZXN0IHRvIHNjZW5lXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wYXJ0cy5yZXN0KTtcclxuXHJcbiAgICAgICAgLy8gSGlkZGVuIHBhcmFtZXRlcnNcclxuICAgICAgICB0aGlzLnJvdGF0ZVkgPSAtMC40O1xyXG4gICAgICAgIHRoaXMucm90YXRlWCA9IDA7XHJcbiAgICAgICAgdGhpcy5hcm1BbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy53cmlzdEFuZ2xlID0gLU1hdGguUEkvODtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IE1hdGguUEkvNjtcclxuXHJcbiAgICAgICAgLy8gU2V0IGluaXRhbCB2YWx1ZXNcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSA9IHRoaXMuX3JvdGF0ZVk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLnggPSB0aGlzLl9yb3RhdGVYO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5yb3RhdGlvbi54ID0gdGhpcy5fYXJtQW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCA9IHRoaXMuX3dyaXN0QW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueiA9IHRoaXMuX2dyYWJBbmdsZTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueiA9IHRoaXMuX2dyYWJBbmdsZTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc2V0IHJvdGF0ZVkgKGRlZykge1xyXG4gICAgICAgIHRoaXMuX3JvdGF0ZVkgPSBkZWdcclxuICAgIH1cclxuICAgIGdldCByb3RhdGVZICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRlWVxyXG4gICAgfVxyXG4gICAgc2V0IHJvdGF0ZVggKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMyk7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCA3Kk1hdGguUEkvMTIpO1xyXG4gICAgICAgIHRoaXMuX3JvdGF0ZVggPSBkZWdcclxuICAgIH1cclxuICAgIGdldCByb3RhdGVYICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRlWFxyXG4gICAgfVxyXG4gICAgc2V0IGFybUFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLlBJIC0gZGVnO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMTIpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgNSpNYXRoLlBJLzYpO1xyXG4gICAgICAgIHRoaXMuX2FybUFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgYXJtQW5nbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcm1BbmdsZVxyXG4gICAgfVxyXG4gICAgc2V0IHdyaXN0QW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMik7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCBNYXRoLlBJLzIpO1xyXG4gICAgICAgIHRoaXMuX3dyaXN0QW5nbGUgPSBkZWdcclxuICAgIH1cclxuICAgIGdldCB3cmlzdEFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd3Jpc3RBbmdsZVxyXG4gICAgfVxyXG4gICAgc2V0IGdyYWJBbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAwKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIE1hdGguUEkpO1xyXG4gICAgICAgIGRlZyAtPSBNYXRoLlBJLzY7XHJcbiAgICAgICAgdGhpcy5fZ3JhYkFuZ2xlID0gLWRlZy8yXHJcbiAgICB9XHJcbiAgICBnZXQgZ3JhYkFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gLSgyKnRoaXMuX2dyYWJBbmdsZS1NYXRoLlBJLzYpXHJcbiAgICB9XHJcbiAgICBjbG9zZUdyYWIgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhYkFuZ2xlID0gMFxyXG4gICAgfVxyXG4gICAgb3BlbkdyYWIgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhYkFuZ2xlID0gTWF0aC5QSS8yXHJcbiAgICB9XHJcbiAgICB0b2dnbGVHcmFiICgpIHtcclxuICAgICAgICBpZiAodGhpcy5ncmFiQW5nbGUgPiBNYXRoLlBJLzMpIHRoaXMuY2xvc2VHcmFiKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLm9wZW5HcmFiKClcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSArPSAodGhpcy5fcm90YXRlWSAtIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCArPSAodGhpcy5fcm90YXRlWCAtIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCArPSAodGhpcy5fYXJtQW5nbGUgLSB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCArPSAodGhpcy5fd3Jpc3RBbmdsZSAtIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnogKz0gKHRoaXMuX2dyYWJBbmdsZSAtIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnopIC8gMztcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnogKz0gKHRoaXMuX2dyYWJBbmdsZSAtIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56KSAvIDNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvYm90XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvUm9ib3QuanMiLCJjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9ICQocXVlcnkgKyAnIC5zZWxlY3QtaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9ICQkKHF1ZXJ5ICsgJyBsaScpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0ID0gMDtcclxuICAgICAgICB0aGlzLnNjcm9sbGluZ1JlbmRlcmVyID0gd2luZG93LmZyYW1lc0Zsb3cucmVuZGVyKHRoaXMuc2Nyb2xsaW5nUmVuZGVyZXJNZXRob2QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCAoKSA9PiB0aGlzLnNjcm9sbGluZ1JlbmRlcmVyLnBhdXNlKCkpXHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nUmVuZGVyZXIucGF1c2UoKTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5zdHlsZS53aWR0aCA9IDEwMCAvIHRoaXMuaXRlbXMubGVuZ3RoICsgJyUnO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgICBpdGVtLm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKCkgeyB0aGF0Lm9uTW91c2VPdmVySXRlbSh0aGlzKSB9O1xyXG4gICAgICAgICAgICBpdGVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IHRoYXQub25DbGlja09uSXRlbSh0aGlzKSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uTW91c2VPdmVySXRlbSAoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0LnN0eWxlLmxlZnQgPSBlbGVtZW50Lm9mZnNldExlZnQgKyAncHgnXHJcbiAgICB9XHJcbiAgICBvbkNsaWNrT25JdGVtIChlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9ICQoYFtkYXRhLXRpdGxlPSR7ZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpfV1gKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nUmVuZGVyZXIucGxheSgpXHJcbiAgICB9XHJcbiAgICBzY3JvbGxpbmdSZW5kZXJlck1ldGhvZCAoZnJhbWUpIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGgubWluKHRoaXMuc2Nyb2xsVGFyZ2V0LCAoZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpKSAtIHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB3aW5kb3cuc2Nyb2xsWSArIGRpc3RhbmNlLzEwKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCAxMCkgZnJhbWUucmVuZGVyZXIucGF1c2UoKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvTmF2aWdhdGlvbi5qcyIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi9TbGlkZXInXHJcblxyXG5jb25zdCBzZXRCZXR3ZWVuID0gKG51bWJlciwgbWluLCBtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihudW1iZXIsIG1heCksIG1pbilcclxufTtcclxuXHJcbmNvbnN0IGltYWdlc05hbWVzID0gWydBQkItUm9ib3QucG5nJywgJ0R1cnJSb2JvdC5qcGcnLCAnTW90b21hblJvYm90LmpwZycsICdSb2RpcC5qcGcnXTtcclxuXHJcbmNsYXNzIEdhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uID0gJChxdWVyeSArICcgPiAubGVmdC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uID0gJChxdWVyeSArICcgPiAucmlnaHQtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5ICsgJyA+IC5jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlcygpXHJcbiAgICB9XHJcbiAgICBsb2FkSW1hZ2VzICgpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIGltYWdlc05hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy9nYWxsZXJ5LycgKyBuYW1lO1xyXG4gICAgICAgICAgICBpbWcuYWx0ID0gJ9in2KrZiNmF2KfYs9uM2YjZhiDYtdmG2LnYqtuMINii2LHbjNin2YbYpyc7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1nKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgU2xpZGVyKCdib2R5ID4gLmZ1bGwtdmlldy1zbGlkZXInLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm1vdmUoLTMwMCk7XHJcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5tb3ZlKDMwMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMpIGltYWdlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQub25SZXF1ZXN0Rm9yU2xpZGVzKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHdpZHRoICgpIHtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpbWFnZSBvZiB0aGlzLmltYWdlcykgc3VtICs9IGltYWdlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIHJldHVybiBzdW1cclxuICAgIH1cclxuICAgIGdldCBtYXhSaWdodCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIC0odGhpcy53aWR0aCAtIHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aClcclxuICAgIH1cclxuICAgIGRpc2FibGVCdXR0b24gKHdoaWNoKSB7XHJcbiAgICAgICAgdGhpc1t3aGljaCArICdCdXR0b24nXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgZW5hYmxlQWxsQnV0dG9ucyAoKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBtb3ZlIChzdGVwKSB7XHJcbiAgICAgICAgY29uc3QgbWF4UmlnaHQgPSB0aGlzLm1heFJpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmlnaHQgPSBzZXRCZXR3ZWVuKHRoaXMuY29udGFpbmVyUmlnaHQgKyBzdGVwLCBtYXhSaWdodCwgMCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucmlnaHQgPSB0aGlzLmNvbnRhaW5lclJpZ2h0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLmVuYWJsZUFsbEJ1dHRvbnMoKTtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJSaWdodCA9PT0gbWF4UmlnaHQpIHRoaXMuZGlzYWJsZUJ1dHRvbignbGVmdCcpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lclJpZ2h0ID09PSAwKSB0aGlzLmRpc2FibGVCdXR0b24oJ3JpZ2h0JylcclxuICAgIH1cclxuICAgIG9uUmVxdWVzdEZvclNsaWRlcyAoaW1hZ2UpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaW1hZ2VzKSBpZiAodGhpcy5pbWFnZXNbaV0gPT09IGltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLnNob3coaSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJjb25zdCBzZXRCZXR3ZWVuID0gKG51bWJlciwgbWluLCBtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihudW1iZXIsIG1heCksIG1pbilcclxufTtcclxuXHJcbmNsYXNzIFNsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbGxlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSAkKHF1ZXJ5ICsgJyBpbWcnKTtcclxuICAgICAgICB0aGlzLmdhbGxlcnkgPSBnYWxsZXJ5O1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWluZXIpIHRoaXMuaGlkZGVuKClcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5pc0FjdGl2ZSkgdGhpcy5oaWRkZW4oKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0JyAmJiB0aGlzLmlzQWN0aXZlKSB0aGlzLmltYWdlSW5kZXgtLTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0xlZnQnICYmIHRoaXMuaXNBY3RpdmUpIHRoaXMuaW1hZ2VJbmRleCsrO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXQgaW1hZ2VJbmRleCAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gc2V0QmV0d2VlbihpbmRleCwgMCwgdGhpcy5nYWxsZXJ5LmltYWdlcy5sZW5ndGgtMSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmdhbGxlcnkuaW1hZ2VzW3RoaXMuaW5kZXhdLnNyYztcclxuICAgIH1cclxuICAgIGdldCBpbWFnZUluZGV4ICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleFxyXG4gICAgfVxyXG4gICAgc2hvdyAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmltYWdlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgaGlkZGVuICgpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==