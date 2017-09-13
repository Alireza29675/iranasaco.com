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
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: #ffffff; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body .full-view-slider {\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.6);\n    transition-duration: 0.3s; }\n    body .full-view-slider.active {\n      opacity: 1;\n      pointer-events: auto; }\n    body .full-view-slider > img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      max-width: 80%;\n      max-height: 70%;\n      z-index: 1000; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    overflow: hidden; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n      @media (max-width: 1000px) {\n        body header h1 {\n          font-size: 20px;\n          width: 80%;\n          top: 70%;\n          text-align: center;\n          white-space: normal;\n          box-shadow: none; } }\n      @media (max-width: 460px) {\n        body header h1 {\n          background: linear-gradient(rgba(56, 56, 56, 0), rgba(56, 56, 56, 0.3), #383838, #383838);\n          top: 80%;\n          font-weight: normal;\n          font-size: 22px;\n          padding: 200px 200px; } }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    @media (max-width: 650px) {\n      body nav {\n        background: linear-gradient(#383838, #2b2b2b, #2b2b2b, #3a3a3a); } }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 20%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n      @media (max-width: 650px) {\n        body nav .select-highlight {\n          display: none; } }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      @media (max-width: 650px) {\n        body nav ul {\n          flex-direction: column; } }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 16px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        @media (max-width: 1000px) {\n          body nav ul li {\n            flex-basis: auto;\n            flex-grow: 1;\n            font-size: 13px; } }\n        @media (max-width: 650px) {\n          body nav ul li {\n            border-bottom: 1px solid #333; } }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF);\n    padding: 70px 0; }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: auto;\n      padding: 55px 0;\n      clear: both; }\n      @media (max-width: 1000px) {\n        body main section {\n          width: 80%; } }\n      @media (max-width: 750px) {\n        body main section {\n          text-align: center; }\n          body main section ul {\n            text-align: right; } }\n      body main section > img {\n        float: left;\n        width: 305px; }\n        @media (max-width: 900px) {\n          body main section > img {\n            width: 190px;\n            margin: auto; } }\n        @media (max-width: 750px) {\n          body main section > img {\n            float: none; } }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        @media (max-width: 900px) {\n          body main section article {\n            top: 0; } }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 27px; }\n      body main section[data-title='portfolio'] {\n        padding-top: 40px; }\n        body main section[data-title='portfolio'] > img {\n          margin-top: 80px;\n          margin-right: 15px; }\n      body main section[data-title='teaching'] {\n        padding-top: 30px; }\n      body main section[data-title='gallery'] {\n        height: 400px; }\n        body main section[data-title='gallery'] .gallery {\n          background: #222;\n          margin-top: 20px;\n          overflow: hidden;\n          position: relative; }\n          @media (max-width: 650px) {\n            body main section[data-title='gallery'] .gallery {\n              height: 200px; } }\n          body main section[data-title='gallery'] .gallery .container {\n            position: relative;\n            flex-wrap: nowrap;\n            display: flex;\n            flex-direction: row;\n            right: 0;\n            transition-duration: 0.5s; }\n            @media (max-width: 650px) {\n              body main section[data-title='gallery'] .gallery .container {\n                position: absolute;\n                right: 0 !important;\n                width: 100%;\n                overflow-x: scroll; } }\n          body main section[data-title='gallery'] .gallery img {\n            cursor: pointer;\n            height: 200px;\n            transition-duration: 0.2s;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            -webkit-user-drag: none;\n            -moz-user-drag: none;\n            -ms-user-drag: none;\n            user-drag: none; }\n            body main section[data-title='gallery'] .gallery img:hover {\n              opacity: 0.85;\n              transform: scale(0.95); }\n            body main section[data-title='gallery'] .gallery img:active {\n              opacity: 0.5;\n              transition-duration: 0.1s;\n              transform: scale(0.9); }\n          body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n            width: 50px;\n            height: 100px;\n            background: rgba(0, 0, 0, 0.6);\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            opacity: 0.3; }\n            body main section[data-title='gallery'] .gallery .left-button.active, body main section[data-title='gallery'] .gallery .right-button.active {\n              cursor: pointer;\n              opacity: 0.8;\n              transition-duration: 0.3s; }\n            body main section[data-title='gallery'] .gallery .left-button:hover, body main section[data-title='gallery'] .gallery .right-button:hover {\n              opacity: 1; }\n            @media (max-width: 650px) {\n              body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n                display: none; } }\n            body main section[data-title='gallery'] .gallery .left-button i, body main section[data-title='gallery'] .gallery .right-button i {\n              position: absolute;\n              background: white;\n              width: 5px;\n              height: 30px;\n              top: 50%;\n              left: 18px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%); }\n              body main section[data-title='gallery'] .gallery .left-button i:before, body main section[data-title='gallery'] .gallery .right-button i:before {\n                content: ' ';\n                position: absolute;\n                background: white;\n                width: 6px;\n                height: 30px;\n                transform: rotate(90deg) translate(-12px, 12px); }\n          body main section[data-title='gallery'] .gallery .left-button {\n            left: 0; }\n            body main section[data-title='gallery'] .gallery .left-button i {\n              top: 39%;\n              left: 16px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%) rotateZ(180deg); }\n          body main section[data-title='gallery'] .gallery .right-button {\n            right: 0; }\n      body main section[data-title='contact'] {\n        padding-top: 20px;\n        height: 650px; }\n        body main section[data-title='contact'] iframe {\n          margin-top: 20px; }\n        body main section[data-title='contact'] .details {\n          margin-top: 40px; }\n          body main section[data-title='contact'] .details p {\n            margin: 6px;\n            font-size: 16px; }\n            body main section[data-title='contact'] .details p a {\n              text-decoration: none;\n              color: #000; }\n              body main section[data-title='contact'] .details p a:hover {\n                color: #AAA; }\n            body main section[data-title='contact'] .details p i.fa {\n              margin-left: 10px; }\n              body main section[data-title='contact'] .details p i.fa.fa-map-marker {\n                margin-right: 2px;\n                color: #ff0000; }\n              body main section[data-title='contact'] .details p i.fa.fa-phone {\n                color: #33aae0; }\n              body main section[data-title='contact'] .details p i.fa.fa-fax {\n                color: #1eaa6d; }\n              body main section[data-title='contact'] .details p i.fa.fa-envelope {\n                color: #e6be1b; }\n  body footer {\n    background: #333;\n    width: 100%;\n    height: 100px;\n    text-align: center;\n    color: #d4d4d4;\n    font-weight: 100;\n    font-size: 13px;\n    position: relative; }\n    body footer span {\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: 2px;\n      transform: translate(-50%, -50%);\n      cursor: default; }\n      body footer span i {\n        color: #fff833; }\n      body footer span a {\n        text-decoration: none;\n        color: #FFF;\n        cursor: pointer;\n        display: inline-block;\n        font-weight: normal;\n        transition-duration: 0.2s;\n        transform: translateZ(1px);\n        text-shadow: 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1), 0 0 5px rgba(255, 255, 255, 0.1); }\n        body footer span a:hover {\n          opacity: 0.8;\n          color: yellow;\n          transform: translateZ(1px) translateY(-5px) scale(1.02);\n          text-shadow: 0 10px 5px rgba(255, 255, 0, 0.1), 0 5px 5px rgba(255, 255, 0, 0.25), 0 2px 5px rgba(255, 255, 0, 0.8); }\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2E5ZGQwMGZlNDE1NTJjNmVmYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsIm9ubG9hZCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJhcHAiLCJBcHAiLCJyb2JvU2NlbmUiLCJuYXZpZ2F0aW9uIiwiZ2FsbGVyeSIsInJvYm90IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTW92ZSIsImJpbmQiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsImZvY3VzIiwiZm9jdXNpbmdUaW1lb3V0IiwiYXV0b1JvdGF0aW9uUmVuZGVyZXIiLCJmcmFtZXNGbG93IiwicmVuZGVyIiwiYXV0b1JvdGF0ZSIsImV2ZW50IiwiZm9jdXNlZCIsInRvdWNoZXMiLCJlIiwibW92ZVJvYm90VG8iLCJwYWdlWCIsInBhZ2VZIiwieCIsInkiLCJ4UmF0ZSIsImlubmVyV2lkdGgiLCJ5UmF0ZSIsImlubmVySGVpZ2h0Iiwicm90YXRlWSIsIk1hdGgiLCJQSSIsInJvdGF0ZVgiLCJhcm1BbmdsZSIsIndyaXN0QW5nbGUiLCJjbG9zZUdyYWIiLCJncmFiQW5nbGUiLCJmcmFtZSIsInRoZXRhIiwiaW5kZXgiLCJjb3MiLCJzaW4iLCJpc0ZvY3VzZWQiLCJjbGVhclRpbWVvdXQiLCJwYXVzZSIsInBsYXkiLCJwb3N0cHJvY2Vzc2luZyIsImJva2VoX3BhcmFtcyIsInpuZWFyIiwiemZhciIsInNoYWRlckZvY3VzIiwiZnN0b3AiLCJtYXhibHVyIiwic2hvd0ZvY3VzIiwiZm9jYWxEZXB0aCIsIm1hbnVhbGRvZiIsInZpZ25ldHRpbmciLCJkZXB0aGJsdXIiLCJ0aHJlc2hvbGQiLCJnYWluIiwiYmlhcyIsImZyaW5nZSIsImZvY2FsTGVuZ3RoIiwibm9pc2UiLCJwZW50YWdvbiIsImRpdGhlcmluZyIsIlJvYm9TY2VuZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdCIsIm9uUmVzaXplIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiZm9nQ29sb3IiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJmb2ciLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsInJvdGF0aW9uIiwibWF0ZXJpYWxfZGVwdGgiLCJNZXNoRGVwdGhNYXRlcmlhbCIsImluaXRQb3N0UHJvY2Vzc2luZyIsInVwZGF0ZUJvb2tlaFBhcmFtcyIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJnYW1tYUlucHV0IiwiZ2FtbWFPdXRwdXQiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwicmVuZGVyUmV2ZXJzZVNpZGVkIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJoZW1pc3BoZXJlTGlnaHQiLCJIZW1pc3BoZXJlTGlnaHQiLCJncmlkSGVscGVyIiwiR3JpZEhlbHBlciIsImNoYW5nZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2tlaF91bmlmb3JtcyIsInZhbHVlIiwic2V0Rm9jYWxMZW5ndGgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwYXJhbXMiLCJtaW5GaWx0ZXIiLCJMaW5lYXJGaWx0ZXIiLCJtYWdGaWx0ZXIiLCJmb3JtYXQiLCJSR0JGb3JtYXQiLCJydFRleHR1cmVEZXB0aCIsIldlYkdMUmVuZGVyVGFyZ2V0IiwicnRUZXh0dXJlQ29sb3IiLCJib2tlaF9zaGFkZXIiLCJCb2tlaFNoYWRlciIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsInVuaWZvcm1zIiwidGV4dHVyZSIsIm1hdGVyaWFsQm9rZWgiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiZGVmaW5lcyIsIlJJTkdTIiwiU0FNUExFUyIsInF1YWQiLCJNZXNoIiwiUGxhbmVHZW9tZXRyeSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsIm92ZXJyaWRlTWF0ZXJpYWwiLCJsb2FkZXIiLCJKU09OTG9hZGVyIiwiYmxhY2tNYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwiY29sb3IiLCJzaGluaW5lc3MiLCJkYXJrTWF0ZXJpYWwiLCJsaWdodE1hdGVyaWFsIiwib2JqZWN0c05hbWVzIiwibG9hZCIsIm9iamVjdE5hbWUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJpbmNsdWRlcyIsImxvYWRBbGxPYmplY3RzQW5kUHV0SW4iLCJvYmplY3RzIiwibG9hZGVkQ291bnQiLCJ0aGVuIiwibWVzaCIsImxlbmd0aCIsIlJvYm90IiwiaXNSZWFkeSIsInBhcnRzIiwicmVhZHkiLCJyZXN0Iiwicm90YXRvciIsImFybTEiLCJhcm0yIiwid3Jpc3QiLCJ3cmlzdGJvbmUiLCJoYW5kIiwiZmluZ2VyIiwiZmluZ2VyMiIsIl9yb3RhdGVZIiwiX3JvdGF0ZVgiLCJfYXJtQW5nbGUiLCJfd3Jpc3RBbmdsZSIsIl9ncmFiQW5nbGUiLCJvcGVuR3JhYiIsImRlZyIsIm1heCIsIm1pbiIsIk5hdmlnYXRpb24iLCJoaWdobGlnaHQiLCJpdGVtcyIsInNjcm9sbFRhcmdldCIsInNjcm9sbGluZ1JlbmRlcmVyIiwic2Nyb2xsaW5nUmVuZGVyZXJNZXRob2QiLCJ0aGF0Iiwic3R5bGUiLCJpdGVtIiwib25tb3VzZW92ZXIiLCJvbk1vdXNlT3Zlckl0ZW0iLCJvbmNsaWNrIiwib25DbGlja09uSXRlbSIsImVsZW1lbnQiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsInNlY3Rpb24iLCJnZXRBdHRyaWJ1dGUiLCJvZmZzZXRUb3AiLCJkaXN0YW5jZSIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJzZXRCZXR3ZWVuIiwibnVtYmVyIiwiaW1hZ2VzTmFtZXMiLCJHYWxsZXJ5IiwibGVmdEJ1dHRvbiIsInJpZ2h0QnV0dG9uIiwiaW1hZ2VzIiwiY29udGFpbmVyUmlnaHQiLCJsb2FkSW1hZ2VzIiwibmFtZSIsImltZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhbHQiLCJwdXNoIiwic2xpZGVyIiwibW92ZSIsImltYWdlIiwib25SZXF1ZXN0Rm9yU2xpZGVzIiwid2hpY2giLCJzdGVwIiwibWF4UmlnaHQiLCJyaWdodCIsImVuYWJsZUFsbEJ1dHRvbnMiLCJkaXNhYmxlQnV0dG9uIiwiaSIsInNob3ciLCJzdW0iLCJjbGllbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwiU2xpZGVyIiwiaXNBY3RpdmUiLCJ0YXJnZXQiLCJoaWRkZW4iLCJjb2RlIiwiaW1hZ2VJbmRleCJdLCJtYXBwaW5n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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNhOWRkMDBmZTQxNTUyYzZlZmFhIiwiaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9zY3JpcHRzL0FwcCdcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbG9hZGluZy1maW5pc2hlZCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7ICQoJ2JvZHkgPiAubG9hZGluZycpLnJlbW92ZSgpIH0sIDEwMDApXHJcbn07XHJcblxyXG53aW5kb3cuYXBwID0gbmV3IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Fzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9MaWdodC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9NZWRpdW0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX0JvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ0lSQU5TYW5zJywgc2VyaWY7IH1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICBib2R5IC5mdWxsLXZpZXctc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zczsgfVxcbiAgICBib2R5IC5mdWxsLXZpZXctc2xpZGVyLmFjdGl2ZSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxcbiAgICBib2R5IC5mdWxsLXZpZXctc2xpZGVyID4gaW1nIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDcwJTtcXG4gICAgICB6LWluZGV4OiAxMDAwOyB9XFxuICBib2R5IGhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICBib2R5IGhlYWRlciBoMSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTUlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjcpLCB0cmFuc3BhcmVudCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTE5cHggMjFweCAtMjVweCAjZjVmNWY1LCAwIDE5cHggMjFweCAtMjVweCAjZjVmNWY1O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMTAwcHg7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjsgfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgIGJvZHkgaGVhZGVyIGgxIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICB0b3A6IDcwJTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lOyB9IH1cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcXG4gICAgICAgIGJvZHkgaGVhZGVyIGgxIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoNTYsIDU2LCA1NiwgMCksIHJnYmEoNTYsIDU2LCA1NiwgMC4zKSwgIzM4MzgzOCwgIzM4MzgzOCk7XFxuICAgICAgICAgIHRvcDogODAlO1xcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDIwMHB4IDIwMHB4OyB9IH1cXG4gICAgYm9keSBoZWFkZXIgY2FudmFzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgIzY2Nik7IH1cXG4gIGJvZHkgbmF2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzU1NSwgIzJiMmIyYiwgIzJiMmIyYiwgIzU1NSk7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgYm9keSBuYXYge1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMzODM4MzgsICMyYjJiMmIsICMyYjJiMmIsICMzYTNhM2EpOyB9IH1cXG4gICAgYm9keSBuYXYgLnNlbGVjdC1oaWdobGlnaHQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6ICM0NDQ7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTsgfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAgICAgYm9keSBuYXYgLnNlbGVjdC1oaWdobGlnaHQge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG4gICAgYm9keSBuYXY6aG92ZXIgLnNlbGVjdC1oaWdobGlnaHQge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgYm9keSBuYXYgdWwge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAgICAgYm9keSBuYXYgdWwge1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9IH1cXG4gICAgICBib2R5IG5hdiB1bCBsaSB7XFxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgcGFkZGluZzogMTZweDtcXG4gICAgICAgIGNvbG9yOiAjREREO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgICAgICAgIGJvZHkgbmF2IHVsIGxpIHtcXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7IH0gfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICAgIGJvZHkgbmF2IHVsIGxpIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzsgfSB9XFxuICAgICAgICBib2R5IG5hdiB1bCBsaTphY3RpdmUge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7IH1cXG4gIGJvZHkgbWFpbiB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkZGLCAjRUVFLCAjRkZGKTtcXG4gICAgcGFkZGluZzogNzBweCAwOyB9XFxuICAgIGJvZHkgbWFpbiBzZWN0aW9uIHtcXG4gICAgICBkaXJlY3Rpb246IHJ0bDtcXG4gICAgICB3aWR0aDogOTAwcHg7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBwYWRkaW5nOiA1NXB4IDA7XFxuICAgICAgY2xlYXI6IGJvdGg7IH1cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiB7XFxuICAgICAgICAgIHdpZHRoOiA4MCU7IH0gfVxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb24ge1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gdWwge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbiA+IGltZyB7XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIHdpZHRoOiAzMDVweDsgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMTkwcHg7XFxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvOyB9IH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbiA+IGltZyB7XFxuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7IH0gfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogNTBweDsgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUge1xcbiAgICAgICAgICAgIHRvcDogMDsgfSB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIGgyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSBwIHtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdwb3J0Zm9saW8nXSB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0ncG9ydGZvbGlvJ10gPiBpbWcge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSd0ZWFjaGluZyddIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4OyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIHtcXG4gICAgICAgIGhlaWdodDogNDAwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkge1xcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgfSB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAuY29udGFpbmVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IH1cXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAuY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsOyB9IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IGltZyB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbiAgICAgICAgICAgIC1tb3otdXNlci1kcmFnOiBub25lO1xcbiAgICAgICAgICAgIC1tcy11c2VyLWRyYWc6IG5vbmU7XFxuICAgICAgICAgICAgdXNlci1kcmFnOiBub25lOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IGltZzpob3ZlciB7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSBpbWc6YWN0aXZlIHtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24ge1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC4zOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbi5hY3RpdmUsIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbjpob3ZlciwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uIGksIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIGkge1xcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICAgICAgICB3aWR0aDogNXB4O1xcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgICBsZWZ0OiAxOHB4O1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uIGk6YmVmb3JlLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiBpOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDZweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKC0xMnB4LCAxMnB4KTsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uIHtcXG4gICAgICAgICAgICBsZWZ0OiAwOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpIHtcXG4gICAgICAgICAgICAgIHRvcDogMzklO1xcbiAgICAgICAgICAgICAgbGVmdDogMTZweDtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDE4MGRlZyk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24ge1xcbiAgICAgICAgICAgIHJpZ2h0OiAwOyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2NTBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIGlmcmFtZSB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAge1xcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGEge1xcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGE6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI0FBQTsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGkuZmEge1xcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSAuZGV0YWlscyBwIGkuZmEuZmEtbWFwLW1hcmtlciB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nY29udGFjdCddIC5kZXRhaWxzIHAgaS5mYS5mYS1waG9uZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzNhYWUwOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhLmZhLWZheCB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMWVhYTZkOyB9XFxuICAgICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdjb250YWN0J10gLmRldGFpbHMgcCBpLmZhLmZhLWVudmVsb3BlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlNmJlMWI7IH1cXG4gIGJvZHkgZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIGJvZHkgZm9vdGVyIHNwYW4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgICAgIGJvZHkgZm9vdGVyIHNwYW4gaSB7XFxuICAgICAgICBjb2xvcjogI2ZmZjgzMzsgfVxcbiAgICAgIGJvZHkgZm9vdGVyIHNwYW4gYSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDFweCk7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpLCAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxcbiAgICAgICAgYm9keSBmb290ZXIgc3BhbiBhOmhvdmVyIHtcXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgICBjb2xvcjogeWVsbG93O1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMXB4KSB0cmFuc2xhdGVZKC01cHgpIHNjYWxlKDEuMDIpO1xcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxMHB4IDVweCByZ2JhKDI1NSwgMjU1LCAwLCAwLjEpLCAwIDVweCA1cHggcmdiYSgyNTUsIDI1NSwgMCwgMC4yNSksIDAgMnB4IDVweCByZ2JhKDI1NSwgMjU1LCAwLCAwLjgpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj8tdXJsIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Fzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb2JvU2NlbmUgZnJvbSAnLi9Sb2JvU2NlbmUnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5J1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnJvYm9TY2VuZSA9IG5ldyBSb2JvU2NlbmUoJ2JvZHkgPiBoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbignYm9keSA+IG5hdicpO1xyXG4gICAgICAgIHRoaXMuZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5KCdib2R5IC5nYWxsZXJ5Jyk7XHJcbiAgICAgICAgdGhpcy5yb2JvdCA9IHRoaXMucm9ib1NjZW5lLnJvYm90O1xyXG4gICAgICAgIC8vIE1vdmluZyByb2JvdCBsaXN0ZW5lcnNcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Nb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIEdyYWJiaW5nIGxpc3RlbmVyc1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gRm9jdXNpbmcgbGlzdGVuZXJzXHJcbiAgICAgICAgJCgnYm9keScpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmZvY3VzID0gZmFsc2UpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5mb2N1cyA9IHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHRoaXMuZm9jdXMgPSBmYWxzZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLmZvY3VzID0gdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5mb2N1c2luZ1RpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0b1JvdGF0aW9uUmVuZGVyZXIgPSB3aW5kb3cuZnJhbWVzRmxvdy5yZW5kZXIodGhpcy5hdXRvUm90YXRlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgb25Nb3ZlIChldmVudCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdHJ5IHsgZXZlbnQgPSBldmVudC50b3VjaGVzWzBdIH0gY2F0Y2ggKGUpIHsgLyogbm90aGluZyAqLyB9XHJcbiAgICAgICAgdGhpcy5tb3ZlUm9ib3RUbyhldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpXHJcbiAgICB9XHJcbiAgICBtb3ZlUm9ib3RUbyAoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IHhSYXRlID0geCAvIHdpbmRvdy5pbm5lcldpZHRoIC0gMC41O1xyXG4gICAgICAgIGNvbnN0IHlSYXRlID0geSAvIHdpbmRvdy5pbm5lckhlaWdodCAtIDAuNTtcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVkgPSB4UmF0ZSAqIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5yb3RhdGVYID0geVJhdGUgKiBNYXRoLlBJLzMgLSBNYXRoLlBJLzY7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hcm1BbmdsZSA9IHlSYXRlICogTWF0aC5QSS8yICsgMC4wNTtcclxuICAgICAgICB0aGlzLnJvYm90LndyaXN0QW5nbGUgPSB5UmF0ZSAqIC1NYXRoLlBJLzNcclxuICAgIH1cclxuICAgIG9uTW91c2VEb3duICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LmNsb3NlR3JhYigpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QuZ3JhYkFuZ2xlID0gMC41XHJcbiAgICB9XHJcbiAgICBzZXQgZm9jdXMgKGlzRm9jdXNlZCkge1xyXG4gICAgICAgIGlmIChpc0ZvY3VzZWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZm9jdXNpbmdUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5hdXRvUm90YXRpb25SZW5kZXJlci5wYXVzZSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c2luZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hdXRvUm90YXRpb25SZW5kZXJlci5wbGF5KCkgfSwgMjAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhdXRvUm90YXRlIChmcmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHRoZXRhID0gZnJhbWUuaW5kZXgvMjUwO1xyXG4gICAgICAgIHRoaXMubW92ZVJvYm90VG8oXHJcbiAgICAgICAgICAgICh3aW5kb3cuaW5uZXJXaWR0aCArIE1hdGguY29zKHRoZXRhKSAqIHdpbmRvdy5pbm5lcldpZHRoKS8yLFxyXG4gICAgICAgICAgICAod2luZG93LmlubmVySGVpZ2h0ICsgTWF0aC5zaW4odGhldGEpICogd2luZG93LmlubmVySGVpZ2h0KS8yXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9BcHAuanMiLCJpbXBvcnQgJ2ZyYW1lc2Zsb3cnXHJcbmltcG9ydCBSb2JvdCBmcm9tICcuL1JvYm90J1xyXG5cclxudmFyIHBvc3Rwcm9jZXNzaW5nID0ge307XHJcbnZhciBib2tlaF9wYXJhbXMgPSB7XHJcbiAgICB6bmVhcjogMC4xLFxyXG4gICAgemZhcjogMTAsXHJcbiAgICBzaGFkZXJGb2N1czogZmFsc2UsXHJcbiAgICBmc3RvcDogMjAsXHJcbiAgICBtYXhibHVyOiAyLFxyXG4gICAgc2hvd0ZvY3VzOiBmYWxzZSxcclxuICAgIGZvY2FsRGVwdGg6IDEuNCxcclxuICAgIG1hbnVhbGRvZjogZmFsc2UsXHJcbiAgICB2aWduZXR0aW5nOiBmYWxzZSxcclxuICAgIGRlcHRoYmx1cjogdHJ1ZSxcclxuICAgIHRocmVzaG9sZCA6IDAuNSxcclxuICAgIGdhaW46IDAuMixcclxuICAgIGJpYXM6IDIsXHJcbiAgICBmcmluZ2U6IDMsXHJcbiAgICBmb2NhbExlbmd0aDogMjAsXHJcbiAgICBub2lzZTogdHJ1ZSxcclxuICAgIHBlbnRhZ29uOiBmYWxzZSxcclxuICAgIGRpdGhlcmluZzogMFxyXG59O1xyXG5cclxuY2xhc3MgUm9ib1NjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNjAwO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5mcmFtZXNGbG93LnJlbmRlcih0aGlzLnJlbmRlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgU2NlbmVcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgY29uc3QgZm9nQ29sb3IgPSAweGYzZjNmMztcclxuICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoZm9nQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZyhmb2dDb2xvciwgNCwgNTApO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIENhbWVyYVxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDEsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEzO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAxO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdGF0aW9uLnggPSAwLjI1O1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcclxuICAgICAgICAvLyBQb3N0IFByb2NjZXNzaW5nXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbF9kZXB0aCA9IG5ldyBUSFJFRS5NZXNoRGVwdGhNYXRlcmlhbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb29rZWhQYXJhbXMoKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBSZW5kZXJlclxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFJbnB1dCAgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dCA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkICA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5yZW5kZXJSZXZlcnNlU2lkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIExpZ2h0c1xyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAwLjUpOyAvLyBQb2ludFxyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodC5wb3NpdGlvbi56ID0gMTA7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wb2ludExpZ2h0KTtcclxuICAgICAgICB0aGlzLmhlbWlzcGhlcmVMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoIDB4ZmZmZmZmLCAweDAwMDAwMCwgMSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuaGVtaXNwaGVyZUxpZ2h0KTtcclxuICAgICAgICAvLyBDcmVhdGluZyBncm91bmRcclxuICAgICAgICB0aGlzLmdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlciggNzAsIDQ1ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ncmlkSGVscGVyKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBSb2JvdFxyXG4gICAgICAgIHRoaXMucm9ib3QgPSBuZXcgUm9ib3QodGhpcylcclxuICAgIH1cclxuICAgIHNldEJvb2tlaFBhcmFtIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2tlaF9wYXJhbXMsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9va2VoUGFyYW1zKClcclxuICAgIH1cclxuICAgIHVwZGF0ZUJvb2tlaFBhcmFtcyAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBib2tlaF9wYXJhbXMpIGlmKGUgaW4gcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMpIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW2VdLnZhbHVlID0gYm9rZWhfcGFyYW1zW2VdO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1wiem5lYXJcIl0udmFsdWUgPSBib2tlaF9wYXJhbXMuem5lYXI7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ6ZmFyXCJdLnZhbHVlID0gYm9rZWhfcGFyYW1zLnpmYXI7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0Rm9jYWxMZW5ndGgoIGJva2VoX3BhcmFtcy5mb2NhbExlbmd0aCApXHJcbiAgICB9XHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcgKCkge1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lICA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgLTYwLCA2MCApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lLmFkZCggcG9zdHByb2Nlc3NpbmcuY2FtZXJhICk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcclxuICAgICAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcbiAgICAgICAgICAgIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcGFyYW1zICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMgKTtcclxuICAgICAgICBsZXQgYm9rZWhfc2hhZGVyID0gVEhSRUUuQm9rZWhTaGFkZXI7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBib2tlaF9zaGFkZXIudW5pZm9ybXMgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRDb2xvclwiXS52YWx1ZSA9IHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yLnRleHR1cmU7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0RGVwdGhcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aC50ZXh0dXJlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widGV4dHVyZVdpZHRoXCIgXS52YWx1ZSA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0ZXh0dXJlSGVpZ2h0XCJdLnZhbHVlID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICB1bmlmb3JtczogcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMsXHJcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYm9rZWhfc2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGJva2VoX3NoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICAgICAgZGVmaW5lczogeyBSSU5HUzogMywgU0FNUExFUzogMn1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSwgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lLmFkZCggcG9zdHByb2Nlc3NpbmcucXVhZCApO1xyXG5cdH1cclxuICAgIG9uUmVzaXplICgpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gcG9zdHByb2Nlc3NpbmcuY2FtZXJhLmFzcGVjdCA9IHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xyXG5cdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvciwgdHJ1ZSk7XHJcblx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsX2RlcHRoO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoLCB0cnVlKTtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHBvc3Rwcm9jZXNzaW5nLnNjZW5lLCBwb3N0cHJvY2Vzc2luZy5jYW1lcmEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvYm9TY2VuZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm9TY2VuZS5qcyIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9GcmFtZXNGbG93ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX0ZyYW1lc0Zsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRnJhbWVzRmxvdyk7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHQvLyBkZWZpbmluZyBmcmFtZXNGbG93IGFzIGEgZ2xvYmFsIG9iamVjdFxuXHRpZiAoISh3aW5kb3cuZnJhbWVzRmxvdyBpbnN0YW5jZW9mIF9GcmFtZXNGbG93Mi5kZWZhdWx0KSkge1xuXHQgICAgLy8gaWYgaXQgZGlkbid0IGRlZmluZSBiZWZvcmVcblx0ICAgIHdpbmRvdy5mcmFtZXNGbG93ID0gbmV3IF9GcmFtZXNGbG93Mi5kZWZhdWx0KCk7XG5cdH1cblxuXHQvLyBleHBvcnRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gd2luZG93LmZyYW1lc0Zsb3c7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0dmFyIF9SZW5kZXJlckFycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuXHR2YXIgX1JlbmRlcmVyQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXJBcnJheSk7XG5cblx0dmFyIF9SZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIF9SZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJlcik7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdC8vIENvbXBhdGliaWxpdHkgZm9yIGFsbCBicm93c2VycyAtIFBhdWwgSXJpc2ggdmVyc2lvblxuXHR3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0ICAgIH07XG5cdH1cblxuXHQvLyBGcmFtZXNGbG93XG5cdCgpO1xuXHR2YXIgRnJhbWVzRmxvdyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEZyYW1lc0Zsb3coKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyYW1lc0Zsb3cpO1xuXG5cdCAgICAgICAgdGhpcy5mcmFtZXMgPSAwO1xuXHQgICAgICAgIHRoaXMuX2ZwcyA9IDMwO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IHtcblx0ICAgICAgICAgICAgbWluaW11bUFjY2VwdGFibGVGUFM6IDMwXG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnJlbmRlcmVycyA9IG5ldyBfUmVuZGVyZXJBcnJheTIuZGVmYXVsdCgpO1xuXHQgICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB7XG5cdCAgICAgICAgICAgIGxvZ3M6IG5ldyBBcnJheSgxMDApLFxuXHQgICAgICAgICAgICBsb2dzUG9pbnRlcjogMCxcblx0ICAgICAgICAgICAgbGFzdFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuXHQgICAgICAgICAgICBsYXN0RnJhbWVGUFM6IDMwLFxuXHQgICAgICAgICAgICByYXRpbzogMSxcblx0ICAgICAgICAgICAgc3RhdHVzOiAwLFxuXHQgICAgICAgICAgICBhdmVyYWdlOiB7XG5cdCAgICAgICAgICAgICAgICBmcHM6IDMwLFxuXHQgICAgICAgICAgICAgICAgcmF0aW86IDEsXG5cdCAgICAgICAgICAgICAgICBzdGF0dXM6IDBcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5yZXF1ZXN0TG9vcCgpO1xuXHQgICAgfVxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoRnJhbWVzRmxvdywgW3tcblx0ICAgICAgICBrZXk6ICdnZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaWQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmdldChpZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRBbGxCeUNsYXNzJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsQnlDbGFzcyhjbGFzc05hbWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmZpbHRlcihmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5jbGFzcyA9PSBjbGFzc05hbWU7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmVSZW5kZXJlckJ5SWQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVSZW5kZXJlckJ5SWQoaWQpIHtcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMucmVtb3ZlKGlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlKSB7XG5cdCAgICAgICAgICAgIHZhciBpc0dsb2JhbENoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuXHQgICAgICAgICAgICB2YXIgZXJyb3IgPSBudWxsO1xuXHQgICAgICAgICAgICB2YXIgcG9pbnRlciA9IGlzR2xvYmFsQ2hlY2sgPyAnYW55JyA6ICd0aGlzJztcblx0ICAgICAgICAgICAgaWYgKHJhdGUgPCAwKSBlcnJvciA9ICdGUFMgbXVzdCBub3QgYmUgYSBuZWdhdGl2ZSBudW1iZXIhJztlbHNlIGlmIChyYXRlIDwgMzAgJiYgcmF0ZSA+IDAgJiYgMzAgLyByYXRlICUgMSAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIGxlc3MgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6ICgzMCAvIEZQUykgc2hvdWxkIGJlIGludGVnZXInO2Vsc2UgaWYgKHJhdGUgPiAzMCAmJiByYXRlICUgMzAgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBtb3JlIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoRlBTICUgMzAgPT0gMCknO1xuXHQgICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHRocm93ICdjYW5cXCd0IHNldCAnICsgcmF0ZSArICdmcHMgZm9yIHRoaXMgcmVuZGVyZXIuIFJFQVNPTjogPCcgKyBlcnJvciArICc+Jztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheUFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXlBbGwoKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5nZXRBbGxSZW5kZXJlcnMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5wbGF5KCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2VBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZUFsbCgpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5nZXRBbGxSZW5kZXJlcnMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IF9zdGVwMi52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5wYXVzZSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoY2xhc3NOYW1lLCBmdW5jKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIGZ1bmMgPSBjbGFzc05hbWU7XG5cdCAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX1JlbmRlcmVyMi5kZWZhdWx0KHRoaXMsIHtcblx0ICAgICAgICAgICAgICAgIGlkOiB0aGlzLnJlbmRlcmVycy5sZW5ndGgsXG5cdCAgICAgICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG5cdCAgICAgICAgICAgIH0sIGZ1bmMpO1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdvbkxhZycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTGFnKG1pbmltdW1GUFMsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgbWluaW11bUZQUyA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjayA9IG1pbmltdW1GUFM7ZWxzZSB0aGlzLm9wdGlvbnMubWluaW11bUFjY2VwdGFibGVGUFMgPSBtaW5pbXVtRlBTO1xuXHQgICAgICAgICAgICB0aGlzLm9uTGFnQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVnaXN0ZXJQZXJmb3JtYW5jZUxvZycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyUGVyZm9ybWFuY2VMb2cocmVuZGVyVGltZSkge1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBmcHNcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPSAxMDAwIC8gcmVuZGVyVGltZTtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgbGFnc1xuXHQgICAgICAgICAgICBpZiAodGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPCB0aGlzLm9wdGlvbnMubWluaW11bUFjY2VwdGFibGVGUFMpIGlmICh0eXBlb2YgdGhpcy5vbkxhZ0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB0aGlzLm9uTGFnQ2FsbGJhY2sodGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFNcblx0ICAgICAgICAgICAgLy8gbG9nZ2luZ1xuXHQgICAgICAgICAgICApO3RoaXMucGVyZm9ybWFuY2UubG9nc1t0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyXSA9IHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyID0gKHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgKyAxKSAlIDEwMDtcblx0ICAgICAgICAgICAgLy8gYW5hbHl6aW5nIGxvZ3Ncblx0ICAgICAgICAgICAgdGhpcy5hbmFseXplUGVyZm9ybWFuY2UoKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnYW5hbHl6ZVBlcmZvcm1hbmNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYW5hbHl6ZVBlcmZvcm1hbmNlKCkge1xuXHQgICAgICAgICAgICB2YXIgYWxsRGF0YSA9IHRoaXMucGVyZm9ybWFuY2UubG9ncy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PSAnbnVtYmVyJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBhdmVyYWdlIG9mIGRhdGFcblx0ICAgICAgICAgICAgKTt2YXIgRlBTU3VtID0gMDtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gYWxsRGF0YVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX3N0ZXAzLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIEZQU1N1bSArPSBkYXRhO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgPSBGUFNTdW0gLyBhbGxEYXRhLmxlbmd0aDtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgcGVyZm9ybWFuY2UgcGVyY2VudGFnZVxuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLnJhdGlvID0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgLyAzMDtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnJhdGlvID0gdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyAvIDMwO1xuXHQgICAgICAgICAgICAvLyBkZWZpbmluZyBzdGF0dXNcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyk7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnX2dldFN0YXR1c09mRlBTJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFN0YXR1c09mRlBTKGZwcykge1xuXHQgICAgICAgICAgICB2YXIgcmF0aW8gPSBmcHMgLyB0aGlzLmZwcztcblx0ICAgICAgICAgICAgdmFyIHN0YXR1cyA9IC0zOyAvLyBXT1JTVFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjMpIHN0YXR1cyA9IC0yOyAvLyBCQURcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC42KSBzdGF0dXMgPSAtMTsgLy8gTk9UIEJBRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjkpIHN0YXR1cyA9IDA7IC8vIE9LXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDEuMykgc3RhdHVzID0gMTsgLy8gR09PRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAxLjYpIHN0YXR1cyA9IDI7IC8vIEVYQ0VMTEVOVFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAyKSBzdGF0dXMgPSAzOyAvLyBCRVNUXG5cdCAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlcXVlc3RMb29wJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdExvb3AoKSB7XG5cdCAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy5yZXF1ZXN0TG9vcC5iaW5kKHRoaXMpKTtcblx0ICAgICAgICAgICAgdGhpcy5mcmFtZXMrKztcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5yZWdpc3RlclBlcmZvcm1hbmNlTG9nKERhdGUubm93KCkgLSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXApO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnBzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKHJhdGUsIHRydWUpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gRnJhbWVzRmxvdztcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IEZyYW1lc0Zsb3c7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBSZW5kZXJlcihmcmFtZXNGbG93LCBvcHRpb25zLCBmdW5jKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuXHQgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXHQgICAgICAgIHRoaXMuY2xhc3MgPSBvcHRpb25zLmNsYXNzIHx8ICcnO1xuXHQgICAgICAgIHRoaXMucHJvcHMgPSB7XG5cdCAgICAgICAgICAgIGlzRGVidWdpbmc6IGZhbHNlXG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLmZyYW1lc0Zsb3cgPSBmcmFtZXNGbG93O1xuXHQgICAgICAgIHRoaXMuX2ZwcyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xuXHQgICAgICAgIHRoaXMuZnJhbWVzID0gMDtcblx0ICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlO1xuXHQgICAgICAgIHRoaXMucmVuZGVyKCk7XG5cdCAgICB9XG5cdCAgICAvLyBSZW5kZXIgbmV4dCBmcmFtZVxuXG5cblx0ICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlciwgW3tcblx0ICAgICAgICBrZXk6ICduZXh0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5yZW1vdmVSZW5kZXJlckJ5SWQodGhpcy5pZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWJ1Z2luZyA9IHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnc2hvdWxkUmVuZGVyVGhpc0ZyYW1lJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkUmVuZGVyVGhpc0ZyYW1lKCkge1xuXHQgICAgICAgICAgICAvLyBhbGwgY29uZGl0aW9ucyB0byBwYXVzZSBvciBwbGF5IHJlbmRlcmluZ1xuXHQgICAgICAgICAgICB2YXIgY29uZGl0aW9ucyA9IFshdGhpcy5wcm9wcy5pc0RlYnVnaW5nLCB0aGlzLmZyYW1lc0Zsb3cuZnJhbWVzICUgKDMwIC8gTWF0aC5taW4odGhpcy5mcHMsIDMwKSkgPT0gMF07XG5cdCAgICAgICAgICAgIHZhciByZXQgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNvbmRpdGlvbnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQgJiYgY29uZDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEZyYW1lT2JqZWN0VG9SZXR1cm4nLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGcmFtZU9iamVjdFRvUmV0dXJuKCkge1xuXHQgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgcmVuZGVyZXI6IHRoaXMsXG5cdCAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5mcmFtZXMsXG5cdCAgICAgICAgICAgICAgICBmcHM6IHRoaXMuZnBzLFxuXHQgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2U6IHtcblx0ICAgICAgICAgICAgICAgICAgICBmcHM6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMsXG5cdCAgICAgICAgICAgICAgICAgICAgcmF0aW86IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5yYXRpbyxcblx0ICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5zdGF0dXMsXG5cdCAgICAgICAgICAgICAgICAgICAgYXZlcmFnZTogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmF2ZXJhZ2Vcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVuZGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICAgICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJUaGlzRnJhbWUoKSB8fCB0aGlzLnNob3VsZEdvTmV4dCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbiA9IDA7XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5mcHMgPiAzMCkgaXRlcmF0aW9uID0gTWF0aC5tYXgodGhpcy5mcHMsIDMwKSAvIDMwO2Vsc2UgaXRlcmF0aW9uID0gMzAgLyB0aGlzLmZwcztcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lcysrO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5mdW5jKHRoaXMuZ2V0RnJhbWVPYmplY3RUb1JldHVybigpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICBpZiAobmV3RlBTID09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShuZXdGUFMpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZwcyB8fCB0aGlzLmZyYW1lc0Zsb3cuZnBzO1xuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIFJlbmRlcmVyO1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgUmVuZGVyZXJBcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFJlbmRlcmVyQXJyYXkoKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyQXJyYXkpO1xuXG5cdCAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdhcnJheScpIHRoaXMuYXJyID0gYXJnc1swXTtlbHNlIHRoaXMuYXJyID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShBcnJheSwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG5cdCAgICB9XG5cblx0ICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlckFycmF5LCBbe1xuXHQgICAgICAgIGtleTogJ2dldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFycltpXTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnc2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGksIHZhbCkge1xuXHQgICAgICAgICAgICB0aGlzLmFycltpXSA9IHZhbDtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3B1c2gnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKHZhbCkge1xuXHQgICAgICAgICAgICB0aGlzLmFyci5wdXNoKHZhbCk7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoaSkge1xuXHQgICAgICAgICAgICB0aGlzLmFycltpXSA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgdGhpcy5hcnIuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZmlsdGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyKGNvbmRGdW5jKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJBcnJheSh0aGlzLmFyci5maWx0ZXIoY29uZEZ1bmMpKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZWFjaCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goY2IpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIGNiKGl0ZW0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3RvQXJyYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnI7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbW92ZSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnbmV4dCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5uZXh0KCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucGF1c2UoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucGxheSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnbGVuZ3RoJyxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aDtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gUmVuZGVyZXJBcnJheTtcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyQXJyYXk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mcmFtZXNmbG93L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLkpTT05Mb2FkZXIoKTtcclxuXHJcbmNvbnN0IGJsYWNrTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwMDAsIHNoaW5pbmVzczogMCB9KTtcclxuY29uc3QgZGFya01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4OTk5OTk5LCBzaGluaW5lc3M6IDEwMCB9KTtcclxuY29uc3QgbGlnaHRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGVlZWVlZSwgc2hpbmluZXNzOiA3MCB9KTtcclxuXHJcbmNvbnN0IG9iamVjdHNOYW1lcyA9IFsnYXJtMScsICdhcm0yJywgJ2ZpbmdlcicsICdoYW5kJywgJ3Jlc3QnLCAncm90YXRvcicsICd3cmlzdCcsICd3cmlzdGJvbmUnXTtcclxuY29uc3QgbG9hZCA9IChvYmplY3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSAnLi9hc3NldHMvb2JqZWN0cy8nICsgb2JqZWN0TmFtZSArICcuanNvbic7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgbG9hZGVyLmxvYWQodXJsLCAoZ2VvbWV0cnksIG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsID0gbGlnaHRNYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT09ICdmaW5nZXInKSBtYXRlcmlhbCA9IGJsYWNrTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIGlmIChbJ3dyaXN0Ym9uZScsICdoYW5kJywgJ2FybTEnLCAncmVzdCddLmluY2x1ZGVzKG9iamVjdE5hbWUpKSBtYXRlcmlhbCA9IGRhcmtNYXRlcmlhbDtcclxuICAgICAgICAgICAgcmVzb2x2ZShuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59O1xyXG5jb25zdCBsb2FkQWxsT2JqZWN0c0FuZFB1dEluID0gKG9iamVjdHMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBlcnIpID0+IHtcclxuICAgICAgICBsZXQgbG9hZGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IG9iamVjdE5hbWUgb2Ygb2JqZWN0c05hbWVzKSB7XHJcbiAgICAgICAgICAgIGxvYWQob2JqZWN0TmFtZSkudGhlbigobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0c1tvYmplY3ROYW1lXSA9IG1lc2g7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRlZENvdW50ID09PSBvYmplY3RzTmFtZXMubGVuZ3RoKSByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuY2xhc3MgUm9ib3Qge1xyXG4gICAgY29uc3RydWN0b3IgKHJvYm9TY2VuZSkge1xyXG4gICAgICAgIHRoaXMucm9ib1NjZW5lID0gcm9ib1NjZW5lO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSByb2JvU2NlbmUuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXJ0cyA9IHt9O1xyXG4gICAgICAgIGxvYWRBbGxPYmplY3RzQW5kUHV0SW4odGhpcy5wYXJ0cykudGhlbih0aGlzLnJlYWR5LmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgLy8gQ29tYmluaW5nIHRoaW5ncyB0b2dldGhlclxyXG4gICAgICAgIHRoaXMucGFydHMucmVzdC5hZGQodGhpcy5wYXJ0cy5yb3RhdG9yKTtcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3IucG9zaXRpb24ueSA9IDM7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLmFkZCh0aGlzLnBhcnRzLmFybTEpO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5wb3NpdGlvbi55ID0gMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTEuYWRkKHRoaXMucGFydHMuYXJtMik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnBvc2l0aW9uLnkgPSA0LjU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLmFkZCh0aGlzLnBhcnRzLndyaXN0KTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0LmFkZCh0aGlzLnBhcnRzLndyaXN0Ym9uZSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucG9zaXRpb24ueSA9IDcuNTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5wb3NpdGlvbi54ID0gLTAuMDY7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUuYWRkKHRoaXMucGFydHMuaGFuZCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5oYW5kLmFkZCh0aGlzLnBhcnRzLmZpbmdlcik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueSA9IDEuNDtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi54ID0gMC4yO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnogPSAwLjM1O1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnggPSAwLjI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyID0gdGhpcy5wYXJ0cy5maW5nZXIuY2xvbmUoKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmhhbmQuYWRkKHRoaXMucGFydHMuZmluZ2VyMik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5wb3NpdGlvbi54ID0gLTAuNDtcclxuXHJcbiAgICAgICAgLy8gYWRkaW5nIHJlc3QgdG8gc2NlbmVcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBhcnRzLnJlc3QpO1xyXG5cclxuICAgICAgICAvLyBIaWRkZW4gcGFyYW1ldGVyc1xyXG4gICAgICAgIHRoaXMucm90YXRlWSA9IC0wLjQ7XHJcbiAgICAgICAgdGhpcy5yb3RhdGVYID0gMDtcclxuICAgICAgICB0aGlzLmFybUFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLndyaXN0QW5nbGUgPSAtTWF0aC5QSS84O1xyXG4gICAgICAgIHRoaXMuZ3JhYkFuZ2xlID0gTWF0aC5QSS82O1xyXG5cclxuICAgICAgICAvLyBTZXQgaW5pdGFsIHZhbHVlc1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55ID0gdGhpcy5fcm90YXRlWTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCA9IHRoaXMuX3JvdGF0ZVg7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLnggPSB0aGlzLl9hcm1BbmdsZTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54ID0gdGhpcy5fd3Jpc3RBbmdsZTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56ID0gdGhpcy5fZ3JhYkFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56ID0gdGhpcy5fZ3JhYkFuZ2xlO1xyXG5cclxuICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRlWSAoZGVnKSB7XHJcbiAgICAgICAgdGhpcy5fcm90YXRlWSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdGF0ZVkgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGVZXHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRlWCAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAtTWF0aC5QSS8zKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIDcqTWF0aC5QSS8xMik7XHJcbiAgICAgICAgdGhpcy5fcm90YXRlWCA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdGF0ZVggKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGVYXHJcbiAgICB9XHJcbiAgICBzZXQgYXJtQW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGguUEkgLSBkZWc7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAtTWF0aC5QSS8xMik7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCA1Kk1hdGguUEkvNik7XHJcbiAgICAgICAgdGhpcy5fYXJtQW5nbGUgPSBkZWdcclxuICAgIH1cclxuICAgIGdldCBhcm1BbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FybUFuZ2xlXHJcbiAgICB9XHJcbiAgICBzZXQgd3Jpc3RBbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAtTWF0aC5QSS8yKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIE1hdGguUEkvMik7XHJcbiAgICAgICAgdGhpcy5fd3Jpc3RBbmdsZSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IHdyaXN0QW5nbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93cmlzdEFuZ2xlXHJcbiAgICB9XHJcbiAgICBzZXQgZ3JhYkFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIDApO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgTWF0aC5QSSk7XHJcbiAgICAgICAgZGVnIC09IE1hdGguUEkvNjtcclxuICAgICAgICB0aGlzLl9ncmFiQW5nbGUgPSAtZGVnLzJcclxuICAgIH1cclxuICAgIGdldCBncmFiQW5nbGUgKCkge1xyXG4gICAgICAgIHJldHVybiAtKDIqdGhpcy5fZ3JhYkFuZ2xlLU1hdGguUEkvNilcclxuICAgIH1cclxuICAgIGNsb3NlR3JhYiAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSAwXHJcbiAgICB9XHJcbiAgICBvcGVuR3JhYiAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSBNYXRoLlBJLzJcclxuICAgIH1cclxuICAgIHRvZ2dsZUdyYWIgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdyYWJBbmdsZSA+IE1hdGguUEkvMykgdGhpcy5jbG9zZUdyYWIoKTtcclxuICAgICAgICBlbHNlIHRoaXMub3BlbkdyYWIoKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55ICs9ICh0aGlzLl9yb3RhdGVZIC0gdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54ICs9ICh0aGlzLl9yb3RhdGVYIC0gdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuYXJtMi5yb3RhdGlvbi54ICs9ICh0aGlzLl9hcm1BbmdsZSAtIHRoaXMucGFydHMuYXJtMi5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54ICs9ICh0aGlzLl93cmlzdEFuZ2xlIC0gdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueiArPSAodGhpcy5fZ3JhYkFuZ2xlIC0gdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueikgLyAzO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueiArPSAodGhpcy5fZ3JhYkFuZ2xlIC0gdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnopIC8gM1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9ib3RcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsImNsYXNzIE5hdmlnYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gJChxdWVyeSArICcgLnNlbGVjdC1oaWdobGlnaHQnKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gJCQocXVlcnkgKyAnIGxpJyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nUmVuZGVyZXIgPSB3aW5kb3cuZnJhbWVzRmxvdy5yZW5kZXIodGhpcy5zY3JvbGxpbmdSZW5kZXJlck1ldGhvZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsICgpID0+IHRoaXMuc2Nyb2xsaW5nUmVuZGVyZXIucGF1c2UoKSlcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdSZW5kZXJlci5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0LnN0eWxlLndpZHRoID0gMTAwIC8gdGhpcy5pdGVtcy5sZW5ndGggKyAnJSc7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ub25tb3VzZW92ZXIgPSBmdW5jdGlvbiAoKSB7IHRoYXQub25Nb3VzZU92ZXJJdGVtKHRoaXMpIH07XHJcbiAgICAgICAgICAgIGl0ZW0ub25jbGljayA9IGZ1bmN0aW9uICgpIHsgdGhhdC5vbkNsaWNrT25JdGVtKHRoaXMpIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Nb3VzZU92ZXJJdGVtIChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuc3R5bGUubGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdCArICdweCdcclxuICAgIH1cclxuICAgIG9uQ2xpY2tPbkl0ZW0gKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gJChgW2RhdGEtdGl0bGU9JHtlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJyl9XWApO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0ID0gc2VjdGlvbi5vZmZzZXRUb3A7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdSZW5kZXJlci5wbGF5KClcclxuICAgIH1cclxuICAgIHNjcm9sbGluZ1JlbmRlcmVyTWV0aG9kIChmcmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5taW4odGhpcy5zY3JvbGxUYXJnZXQsIChkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkpIC0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHdpbmRvdy5zY3JvbGxZICsgZGlzdGFuY2UvMTApO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IDEwKSBmcmFtZS5yZW5kZXJlci5wYXVzZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuL1NsaWRlcidcclxuXHJcbmNvbnN0IHNldEJldHdlZW4gPSAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG51bWJlciwgbWF4KSwgbWluKVxyXG59O1xyXG5cclxuY29uc3QgaW1hZ2VzTmFtZXMgPSBbJ0FCQi1Sb2JvdC5wbmcnLCAnRHVyclJvYm90LmpwZycsICdNb3RvbWFuUm9ib3QuanBnJywgJ1JvZGlwLmpwZyddO1xyXG5cclxuY2xhc3MgR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmxlZnRCdXR0b24gPSAkKHF1ZXJ5ICsgJyA+IC5sZWZ0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24gPSAkKHF1ZXJ5ICsgJyA+IC5yaWdodC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkgKyAnID4gLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJSaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2VzKClcclxuICAgIH1cclxuICAgIGxvYWRJbWFnZXMgKCkge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgb2YgaW1hZ2VzTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnLi9hc3NldHMvaW1hZ2VzL2dhbGxlcnkvJyArIG5hbWU7XHJcbiAgICAgICAgICAgIGltZy5hbHQgPSAn2KfYqtmI2YXYp9iz24zZiNmGINi12YbYudiq24wg2KLYsduM2KfZhtinJztcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXIoJ2JvZHkgPiAuZnVsbC12aWV3LXNsaWRlcicsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmxlZnRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMubW92ZSgtMzAwKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm1vdmUoMzAwKTtcclxuICAgICAgICBmb3IgKGxldCBpbWFnZSBvZiB0aGlzLmltYWdlcykgaW1hZ2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5vblJlcXVlc3RGb3JTbGlkZXModGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgd2lkdGggKCkge1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGltYWdlIG9mIHRoaXMuaW1hZ2VzKSBzdW0gKz0gaW1hZ2UuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIHN1bVxyXG4gICAgfVxyXG4gICAgZ2V0IG1heFJpZ2h0ICgpIHtcclxuICAgICAgICByZXR1cm4gLSh0aGlzLndpZHRoIC0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoKVxyXG4gICAgfVxyXG4gICAgZGlzYWJsZUJ1dHRvbiAod2hpY2gpIHtcclxuICAgICAgICB0aGlzW3doaWNoICsgJ0J1dHRvbiddLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBlbmFibGVBbGxCdXR0b25zICgpIHtcclxuICAgICAgICB0aGlzLmxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIG1vdmUgKHN0ZXApIHtcclxuICAgICAgICBjb25zdCBtYXhSaWdodCA9IHRoaXMubWF4UmlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJSaWdodCA9IHNldEJldHdlZW4odGhpcy5jb250YWluZXJSaWdodCArIHN0ZXAsIG1heFJpZ2h0LCAwKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5yaWdodCA9IHRoaXMuY29udGFpbmVyUmlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlQWxsQnV0dG9ucygpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lclJpZ2h0ID09PSBtYXhSaWdodCkgdGhpcy5kaXNhYmxlQnV0dG9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyUmlnaHQgPT09IDApIHRoaXMuZGlzYWJsZUJ1dHRvbigncmlnaHQnKVxyXG4gICAgfVxyXG4gICAgb25SZXF1ZXN0Rm9yU2xpZGVzIChpbWFnZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5pbWFnZXMpIGlmICh0aGlzLmltYWdlc1tpXSA9PT0gaW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuc2hvdyhpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvR2FsbGVyeS5qcyIsImNvbnN0IHNldEJldHdlZW4gPSAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG51bWJlciwgbWF4KSwgbWluKVxyXG59O1xyXG5cclxuY2xhc3MgU2xpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSwgZ2FsbGVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9ICQocXVlcnkgKyAnIGltZycpO1xyXG4gICAgICAgIHRoaXMuZ2FsbGVyeSA9IGdhbGxlcnk7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmNvbnRhaW5lcikgdGhpcy5oaWRkZW4oKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnRXNjYXBlJyAmJiB0aGlzLmlzQWN0aXZlKSB0aGlzLmhpZGRlbigpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93UmlnaHQnICYmIHRoaXMuaXNBY3RpdmUpIHRoaXMuaW1hZ2VJbmRleC0tO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93TGVmdCcgJiYgdGhpcy5pc0FjdGl2ZSkgdGhpcy5pbWFnZUluZGV4Kys7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldCBpbWFnZUluZGV4IChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBzZXRCZXR3ZWVuKGluZGV4LCAwLCB0aGlzLmdhbGxlcnkuaW1hZ2VzLmxlbmd0aC0xKTtcclxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZ2FsbGVyeS5pbWFnZXNbdGhpcy5pbmRleF0uc3JjO1xyXG4gICAgfVxyXG4gICAgZ2V0IGltYWdlSW5kZXggKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4XHJcbiAgICB9XHJcbiAgICBzaG93IChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBoaWRkZW4gKCkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9TbGlkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9