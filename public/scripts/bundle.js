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
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: white; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body .full-view-slider {\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.6);\n    transition-duration: 0.3s; }\n    body .full-view-slider.active {\n      opacity: 1;\n      pointer-events: auto; }\n    body .full-view-slider > img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      max-width: 80%;\n      max-height: 70%;\n      z-index: 1000; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 25%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 16px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF);\n    padding: 70px 0; }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: 520px;\n      padding: 80px 0; }\n      body main section > img {\n        float: left;\n        width: 305px; }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 27px; }\n      body main section[data-title='portfolio'] > img {\n        margin-top: 80px;\n        margin-right: 15px;\n        cursor: zoom-in;\n        transition-duration: 0.3s;\n        z-index: 99; }\n        body main section[data-title='portfolio'] > img:hover {\n          opacity: 0.8;\n          transform: scale(1.1); }\n      body main section[data-title='gallery'] .gallery {\n        background: #222;\n        margin-top: 20px;\n        overflow: hidden;\n        position: relative; }\n        body main section[data-title='gallery'] .gallery .container {\n          position: relative; }\n        body main section[data-title='gallery'] .gallery img {\n          cursor: pointer;\n          height: 200px;\n          transition-duration: 0.2s;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          -webkit-user-drag: none;\n          -moz-user-drag: none;\n          -ms-user-drag: none;\n          user-drag: none; }\n          body main section[data-title='gallery'] .gallery img:hover {\n            opacity: 0.85;\n            transform: scale(0.95); }\n          body main section[data-title='gallery'] .gallery img:active {\n            opacity: 0.5;\n            transition-duration: 0.1s;\n            transform: scale(0.9); }\n        body main section[data-title='gallery'] .gallery .container {\n          flex-wrap: nowrap;\n          display: flex;\n          flex-direction: row;\n          right: 0;\n          transition-duration: 0.5s; }\n        body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n          width: 50px;\n          height: 100px;\n          background: rgba(0, 0, 0, 0.6);\n          position: absolute;\n          top: 50%;\n          transform: translateY(-50%);\n          opacity: 0.3; }\n          body main section[data-title='gallery'] .gallery .left-button.active, body main section[data-title='gallery'] .gallery .right-button.active {\n            cursor: pointer;\n            opacity: 0.8;\n            transition-duration: 0.3s; }\n            body main section[data-title='gallery'] .gallery .left-button.active:hover, body main section[data-title='gallery'] .gallery .right-button.active:hover {\n              opacity: 1; }\n          body main section[data-title='gallery'] .gallery .left-button i, body main section[data-title='gallery'] .gallery .right-button i {\n            position: absolute;\n            background: white;\n            width: 5px;\n            height: 30px;\n            top: 50%;\n            left: 18px;\n            transform: scale(0.7) rotate(45deg) translate(-50%, -50%); }\n            body main section[data-title='gallery'] .gallery .left-button i:before, body main section[data-title='gallery'] .gallery .right-button i:before {\n              content: ' ';\n              position: absolute;\n              background: white;\n              width: 6px;\n              height: 30px;\n              transform: rotate(90deg) translate(-12px, 12px); }\n        body main section[data-title='gallery'] .gallery .left-button {\n          left: 0; }\n          body main section[data-title='gallery'] .gallery .left-button i {\n            top: 39%;\n            left: 16px;\n            transform: scale(0.7) rotate(45deg) translate(-50%, -50%) rotateZ(180deg); }\n        body main section[data-title='gallery'] .gallery .right-button {\n          right: 0; }\n", ""]);

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
        _classCallCheck(this, App);

        this.roboScene = new _RoboScene2.default('body > header');
        this.navigation = new _Navigation2.default('body > nav');
        this.gallery = new _Gallery2.default('body .gallery');
        this.robot = this.roboScene.robot;
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('mousedown', this.onMouseDown.bind(this));
        window.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    _createClass(App, [{
        key: 'onMouseMove',
        value: function onMouseMove(event) {
            var xRate = event.pageX / window.innerWidth - 0.5;
            var yRate = event.pageY / window.innerHeight - 0.5;
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
            for (var partName in this.parts) {
                var part = this.parts[partName];
                part.castShadow = true;
                part.receiveShadow = true;
            }

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
        _classCallCheck(this, Navigation);

        this.container = $(query);
        this.highlight = $(query + ' .select-highlight');
        this.items = $$(query + ' li');
        this.init();
    }

    _createClass(Navigation, [{
        key: 'init',
        value: function init() {
            this.highlight.style.width = 100 / this.items.length + '%';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;
                    item.onmouseover = this.onMouseOverItem.bind(this);
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
        value: function onMouseOverItem(e) {
            this.highlight.style.left = Math.floor(e.pageX / window.innerWidth * this.items.length) * 100 / this.items.length + '%';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWJiYjgwZjJhMDhkMTczOTFlOWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImFwcCIsIkFwcCIsInJvYm9TY2VuZSIsIm5hdmlnYXRpb24iLCJnYWxsZXJ5Iiwicm9ib3QiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJiaW5kIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJldmVudCIsInhSYXRlIiwicGFnZVgiLCJpbm5lcldpZHRoIiwieVJhdGUiLCJwYWdlWSIsImlubmVySGVpZ2h0Iiwicm90YXRlWSIsIk1hdGgiLCJQSSIsInJvdGF0ZVgiLCJhcm1BbmdsZSIsIndyaXN0QW5nbGUiLCJjbG9zZUdyYWIiLCJncmFiQW5nbGUiLCJwb3N0cHJvY2Vzc2luZyIsImJva2VoX3BhcmFtcyIsInpuZWFyIiwiemZhciIsInNoYWRlckZvY3VzIiwiZnN0b3AiLCJtYXhibHVyIiwic2hvd0ZvY3VzIiwiZm9jYWxEZXB0aCIsIm1hbnVhbGRvZiIsInZpZ25ldHRpbmciLCJkZXB0aGJsdXIiLCJ0aHJlc2hvbGQiLCJnYWluIiwiYmlhcyIsImZyaW5nZSIsImZvY2FsTGVuZ3RoIiwibm9pc2UiLCJwZW50YWdvbiIsImRpdGhlcmluZyIsIlJvYm9TY2VuZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdCIsIm9uUmVzaXplIiwiZnJhbWVzRmxvdyIsInJlbmRlciIsInNjZW5lIiwiVEhSRUUiLCJTY2VuZSIsImZvZ0NvbG9yIiwiYmFja2dyb3VuZCIsIkNvbG9yIiwiZm9nIiwiRm9nIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJ5Iiwicm90YXRpb24iLCJ4IiwiYWRkIiwibWF0ZXJpYWxfZGVwdGgiLCJNZXNoRGVwdGhNYXRlcmlhbCIsImluaXRQb3N0UHJvY2Vzc2luZyIsInVwZGF0ZUJvb2tlaFBhcmFtcyIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJnYW1tYUlucHV0IiwiZ2FtbWFPdXRwdXQiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwicmVuZGVyUmV2ZXJzZVNpZGVkIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJoZW1pc3BoZXJlTGlnaHQiLCJIZW1pc3BoZXJlTGlnaHQiLCJncmlkSGVscGVyIiwiR3JpZEhlbHBlciIsImNoYW5nZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJlIiwiYm9rZWhfdW5pZm9ybXMiLCJ2YWx1ZSIsInNldEZvY2FsTGVuZ3RoIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicGFyYW1zIiwibWluRmlsdGVyIiwiTGluZWFyRmlsdGVyIiwibWFnRmlsdGVyIiwiZm9ybWF0IiwiUkdCRm9ybWF0IiwicnRUZXh0dXJlRGVwdGgiLCJXZWJHTFJlbmRlclRhcmdldCIsInJ0VGV4dHVyZUNvbG9yIiwiYm9rZWhfc2hhZGVyIiwiQm9rZWhTaGFkZXIiLCJVbmlmb3Jtc1V0aWxzIiwiY2xvbmUiLCJ1bmlmb3JtcyIsInRleHR1cmUiLCJtYXRlcmlhbEJva2VoIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImRlZmluZXMiLCJSSU5HUyIsIlNBTVBMRVMiLCJxdWFkIiwiTWVzaCIsIlBsYW5lR2VvbWV0cnkiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY2xlYXIiLCJvdmVycmlkZU1hdGVyaWFsIiwibG9hZGVyIiwiSlNPTkxvYWRlciIsImJsYWNrTWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIiwic2hpbmluZXNzIiwiZGFya01hdGVyaWFsIiwibGlnaHRNYXRlcmlhbCIsIm9iamVjdHNOYW1lcyIsImxvYWQiLCJvYmplY3ROYW1lIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwiaW5jbHVkZXMiLCJsb2FkQWxsT2JqZWN0c0FuZFB1dEluIiwib2JqZWN0cyIsImxvYWRlZENvdW50IiwidGhlbiIsIm1lc2giLCJsZW5ndGgiLCJSb2JvdCIsImlzUmVhZHkiLCJwYXJ0cyIsInJlYWR5IiwicGFydE5hbWUiLCJwYXJ0IiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJyZXN0Iiwicm90YXRvciIsImFybTEiLCJhcm0yIiwid3Jpc3QiLCJ3cmlzdGJvbmUiLCJoYW5kIiwiZmluZ2VyIiwiZmluZ2VyMiIsImNvbnNvbGUiLCJsb2ciLCJfcm90YXRlWSIsIl9yb3RhdGVYIiwiX2FybUFuZ2xlIiwiX3dyaXN0QW5nbGUiLCJfZ3JhYkFuZ2xlIiwib3BlbkdyYWIiLCJkZWciLCJtYXgiLCJtaW4iLCJOYXZpZ2F0aW9uIiwiaGlnaGxpZ2h0IiwiaXRlbXMiLCJzdHlsZSIsIml0ZW0iLCJvbm1vdXNlb3ZlciIsIm9uTW91c2VPdmVySXRlbSIsImxlZnQiLCJmbG9vciIsInNldEJldHdlZW4iLCJudW1iZXIiLCJHYWxsZXJ5IiwiZWxlbWVudCIsImxlZnRCdXR0b24iLCJyaWdodEJ1dHRvbiIsImltYWdlcyIsImNvbnRhaW5lclJpZ2h0Iiwic2xpZGVyIiwidGhhdCIsIm9uY2xpY2siLCJtb3ZlIiwiaW1hZ2UiLCJvblJlcXVlc3RGb3JTbGlkZXMiLCJ3aGljaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0ZXAiLCJtYXhSaWdodCIsInJpZ2h0IiwiZW5hYmxlQWxsQnV0dG9ucyIsImRpc2FibGVCdXR0b24iLCJpIiwic2hvdyIsInN1bSIsImNsaWVudFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJTbGlkZXIiLCJpc0FjdGl2ZSIsImluZGV4IiwidGFyZ2V0IiwiaGlkZGVuIiwiY29kZSIsImltYWdlSW5kZXgiLCJzcmMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7QUFDQTs7Ozs7O0FBRUFBLE9BQU9DLENBQVAsR0FB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QTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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ZSxXQUFmLElBQThCLE1BQUtKLFFBQXZDLEVBQWlELE1BQUtLLFVBQUw7QUFDcEQsYUFKRDtBQUtIOzs7NkJBUUtKLEssRUFBTztBQUNULGlCQUFLSSxVQUFMLEdBQWtCSixLQUFsQjtBQUNBLGlCQUFLRCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsaUJBQUszSyxTQUFMLENBQWU4SixTQUFmLENBQXlCeEksR0FBekIsQ0FBNkIsUUFBN0I7QUFDSDs7O2lDQUNTO0FBQ04saUJBQUtxSixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsaUJBQUszSyxTQUFMLENBQWU4SixTQUFmLENBQXlCQyxNQUF6QixDQUFnQyxRQUFoQztBQUNIOzs7MEJBZmVhLEssRUFBTztBQUNuQixpQkFBS0EsS0FBTCxHQUFhN0IsV0FBVzZCLEtBQVgsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBS3ZOLE9BQUwsQ0FBYWdNLE1BQWIsQ0FBb0I1QyxNQUFwQixHQUEyQixDQUFoRCxDQUFiO0FBQ0EsaUJBQUtrRCxLQUFMLENBQVdzQixHQUFYLEdBQWlCLEtBQUs1TixPQUFMLENBQWFnTSxNQUFiLENBQW9CLEtBQUt1QixLQUF6QixFQUFnQ0ssR0FBakQ7QUFDSCxTOzRCQUNpQjtBQUNkLG1CQUFPLEtBQUtMLEtBQVo7QUFDSDs7Ozs7O2tCQVlVRixNIiwiZmlsZSI6Ii4vcHVibGljL3NjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWJiYjgwZjJhMDhkMTczOTFlOWIiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvaW5kZXguc2FzcydcclxuaW1wb3J0IEFwcCBmcm9tICcuL3NjcmlwdHMvQXBwJ1xyXG5cclxud2luZG93LiQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSlcclxuXHJcbndpbmRvdy5hcHAgPSBuZXcgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWJfTGlnaHQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWJfTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdJUkFOU2FucycsIHNlcmlmOyB9XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzOyB9XFxuICAgIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIuYWN0aXZlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XFxuICAgIGJvZHkgLmZ1bGwtdmlldy1zbGlkZXIgPiBpbWcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgICAgbWF4LWhlaWdodDogNzAlO1xcbiAgICAgIHotaW5kZXg6IDEwMDA7IH1cXG4gIGJvZHkgaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgIGJvZHkgaGVhZGVyIGgxIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1NSU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNyksIHRyYW5zcGFyZW50KTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XFxuICAgICAgYm94LXNoYWRvdzogMCAtMTlweCAyMXB4IC0yNXB4ICNmNWY1ZjUsIDAgMTlweCAyMXB4IC0yNXB4ICNmNWY1ZjU7XFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuICAgIGJvZHkgaGVhZGVyIGNhbnZhcyB7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYsICM2NjYpOyB9XFxuICBib2R5IG5hdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogLTRweDtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1NTUsICMyYjJiMmIsICMyYjJiMmIsICM1NTUpO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgIGJvZHkgbmF2IC5zZWxlY3QtaGlnaGxpZ2h0IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgei1pbmRleDogMTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMjUlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7IH1cXG4gICAgYm9keSBuYXY6aG92ZXIgLnNlbGVjdC1oaWdobGlnaHQge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgYm9keSBuYXYgdWwge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcbiAgICAgIGJvZHkgbmF2IHVsIGxpIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICAgICAgY29sb3I6ICNEREQ7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4gICAgICAgIGJvZHkgbmF2IHVsIGxpOmFjdGl2ZSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuNjsgfVxcbiAgYm9keSBtYWluIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGRkYsICNFRUUsICNGRkYpO1xcbiAgICBwYWRkaW5nOiA3MHB4IDA7IH1cXG4gICAgYm9keSBtYWluIHNlY3Rpb24ge1xcbiAgICAgIGRpcmVjdGlvbjogcnRsO1xcbiAgICAgIHdpZHRoOiA5MDBweDtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgaGVpZ2h0OiA1MjBweDtcXG4gICAgICBwYWRkaW5nOiA4MHB4IDA7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbiA+IGltZyB7XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIHdpZHRoOiAzMDVweDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogNTBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSBoMiB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUgcCB7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4OyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0ncG9ydGZvbGlvJ10gPiBpbWcge1xcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgICAgIGN1cnNvcjogem9vbS1pbjtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICB6LWluZGV4OiA5OTsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0ncG9ydGZvbGlvJ10gPiBpbWc6aG92ZXIge1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAuY29udGFpbmVyIHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgaW1nIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gICAgICAgICAgLW1vei11c2VyLWRyYWc6IG5vbmU7XFxuICAgICAgICAgIC1tcy11c2VyLWRyYWc6IG5vbmU7XFxuICAgICAgICAgIHVzZXItZHJhZzogbm9uZTsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgaW1nOmhvdmVyIHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IGltZzphY3RpdmUge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5jb250YWluZXIge1xcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24sIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIHtcXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbi5hY3RpdmUsIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uLmFjdGl2ZSB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbi5hY3RpdmU6aG92ZXIsIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uLmFjdGl2ZTpob3ZlciB7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24gaSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24gaSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgIGxlZnQ6IDE4cHg7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpOmJlZm9yZSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24gaTpiZWZvcmUge1xcbiAgICAgICAgICAgICAgY29udGVudDogJyAnO1xcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICAgICAgICB3aWR0aDogNnB4O1xcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgtMTJweCwgMTJweCk7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24ge1xcbiAgICAgICAgICBsZWZ0OiAwOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24gaSB7XFxuICAgICAgICAgICAgdG9wOiAzOSU7XFxuICAgICAgICAgICAgbGVmdDogMTZweDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigxODBkZWcpOyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiB7XFxuICAgICAgICAgIHJpZ2h0OiAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj8tdXJsIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Fzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb2JvU2NlbmUgZnJvbSAnLi9Sb2JvU2NlbmUnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5J1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnJvYm9TY2VuZSA9IG5ldyBSb2JvU2NlbmUoJ2JvZHkgPiBoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbignYm9keSA+IG5hdicpO1xyXG4gICAgICAgIHRoaXMuZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5KCdib2R5IC5nYWxsZXJ5Jyk7XHJcbiAgICAgICAgdGhpcy5yb2JvdCA9IHRoaXMucm9ib1NjZW5lLnJvYm90O1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIG9uTW91c2VNb3ZlIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHhSYXRlID0gZXZlbnQucGFnZVggLyB3aW5kb3cuaW5uZXJXaWR0aCAtIDAuNTtcclxuICAgICAgICBjb25zdCB5UmF0ZSA9IGV2ZW50LnBhZ2VZIC8gd2luZG93LmlubmVySGVpZ2h0IC0gMC41O1xyXG4gICAgICAgIHRoaXMucm9ib3Qucm90YXRlWSA9IHhSYXRlICogTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVggPSB5UmF0ZSAqIE1hdGguUEkvMyAtIE1hdGguUEkvNjtcclxuICAgICAgICB0aGlzLnJvYm90LmFybUFuZ2xlID0geVJhdGUgKiBNYXRoLlBJLzIgKyAwLjA1O1xyXG4gICAgICAgIHRoaXMucm9ib3Qud3Jpc3RBbmdsZSA9IHlSYXRlICogLU1hdGguUEkvM1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZURvd24gKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QuY2xvc2VHcmFiKClcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5ncmFiQW5nbGUgPSAwLjVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvQXBwLmpzIiwiaW1wb3J0ICdmcmFtZXNmbG93J1xyXG5pbXBvcnQgUm9ib3QgZnJvbSAnLi9Sb2JvdCdcclxuXHJcbnZhciBwb3N0cHJvY2Vzc2luZyA9IHt9O1xyXG52YXIgYm9rZWhfcGFyYW1zID0ge1xyXG4gICAgem5lYXI6IDAuMSxcclxuICAgIHpmYXI6IDEwLFxyXG4gICAgc2hhZGVyRm9jdXM6IGZhbHNlLFxyXG4gICAgZnN0b3A6IDIwLFxyXG4gICAgbWF4Ymx1cjogMixcclxuICAgIHNob3dGb2N1czogZmFsc2UsXHJcbiAgICBmb2NhbERlcHRoOiAxLjQsXHJcbiAgICBtYW51YWxkb2Y6IGZhbHNlLFxyXG4gICAgdmlnbmV0dGluZzogZmFsc2UsXHJcbiAgICBkZXB0aGJsdXI6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQgOiAwLjUsXHJcbiAgICBnYWluOiAwLjIsXHJcbiAgICBiaWFzOiAyLFxyXG4gICAgZnJpbmdlOiAzLFxyXG4gICAgZm9jYWxMZW5ndGg6IDIwLFxyXG4gICAgbm9pc2U6IHRydWUsXHJcbiAgICBwZW50YWdvbjogZmFsc2UsXHJcbiAgICBkaXRoZXJpbmc6IDBcclxufTtcclxuXHJcbmNsYXNzIFJvYm9TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBmcmFtZXNGbG93LnJlbmRlcih0aGlzLnJlbmRlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgU2NlbmVcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgY29uc3QgZm9nQ29sb3IgPSAweGYzZjNmMztcclxuICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoZm9nQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZyhmb2dDb2xvciwgNCwgNTApO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIENhbWVyYVxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDEsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEzO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAxO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdGF0aW9uLnggPSAwLjI1O1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcclxuICAgICAgICAvLyBQb3N0IFByb2NjZXNzaW5nXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbF9kZXB0aCA9IG5ldyBUSFJFRS5NZXNoRGVwdGhNYXRlcmlhbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb29rZWhQYXJhbXMoKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBSZW5kZXJlclxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFJbnB1dCAgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dCA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkICA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5yZW5kZXJSZXZlcnNlU2lkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIExpZ2h0c1xyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAwLjUpOyAvLyBQb2ludFxyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodC5wb3NpdGlvbi56ID0gMTA7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wb2ludExpZ2h0KTtcclxuICAgICAgICB0aGlzLmhlbWlzcGhlcmVMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoIDB4ZmZmZmZmLCAweDAwMDAwMCwgMSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuaGVtaXNwaGVyZUxpZ2h0KTtcclxuICAgICAgICAvLyBDcmVhdGluZyBncm91bmRcclxuICAgICAgICB0aGlzLmdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlciggNzAsIDQ1ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ncmlkSGVscGVyKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBSb2JvdFxyXG4gICAgICAgIHRoaXMucm9ib3QgPSBuZXcgUm9ib3QodGhpcylcclxuICAgIH1cclxuICAgIHNldEJvb2tlaFBhcmFtIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2tlaF9wYXJhbXMsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9va2VoUGFyYW1zKClcclxuICAgIH1cclxuICAgIHVwZGF0ZUJvb2tlaFBhcmFtcyAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBib2tlaF9wYXJhbXMpIGlmKGUgaW4gcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMpIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW2VdLnZhbHVlID0gYm9rZWhfcGFyYW1zW2VdO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1wiem5lYXJcIl0udmFsdWUgPSBib2tlaF9wYXJhbXMuem5lYXI7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ6ZmFyXCJdLnZhbHVlID0gYm9rZWhfcGFyYW1zLnpmYXI7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0Rm9jYWxMZW5ndGgoIGJva2VoX3BhcmFtcy5mb2NhbExlbmd0aCApXHJcbiAgICB9XHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcgKCkge1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lICA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgLTYwLCA2MCApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lLmFkZCggcG9zdHByb2Nlc3NpbmcuY2FtZXJhICk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcclxuICAgICAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcbiAgICAgICAgICAgIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcGFyYW1zICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMgKTtcclxuICAgICAgICBsZXQgYm9rZWhfc2hhZGVyID0gVEhSRUUuQm9rZWhTaGFkZXI7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBib2tlaF9zaGFkZXIudW5pZm9ybXMgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRDb2xvclwiXS52YWx1ZSA9IHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yLnRleHR1cmU7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0RGVwdGhcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aC50ZXh0dXJlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widGV4dHVyZVdpZHRoXCIgXS52YWx1ZSA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0ZXh0dXJlSGVpZ2h0XCJdLnZhbHVlID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICB1bmlmb3JtczogcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMsXHJcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYm9rZWhfc2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGJva2VoX3NoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICAgICAgZGVmaW5lczogeyBSSU5HUzogMywgU0FNUExFUzogMn1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSwgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lLmFkZCggcG9zdHByb2Nlc3NpbmcucXVhZCApO1xyXG5cdH1cclxuICAgIG9uUmVzaXplICgpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gcG9zdHByb2Nlc3NpbmcuY2FtZXJhLmFzcGVjdCA9IHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xyXG5cdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvciwgdHJ1ZSk7XHJcblx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsX2RlcHRoO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoLCB0cnVlKTtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHBvc3Rwcm9jZXNzaW5nLnNjZW5lLCBwb3N0cHJvY2Vzc2luZy5jYW1lcmEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvYm9TY2VuZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm9TY2VuZS5qcyIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9GcmFtZXNGbG93ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX0ZyYW1lc0Zsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRnJhbWVzRmxvdyk7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHQvLyBkZWZpbmluZyBmcmFtZXNGbG93IGFzIGEgZ2xvYmFsIG9iamVjdFxuXHRpZiAoISh3aW5kb3cuZnJhbWVzRmxvdyBpbnN0YW5jZW9mIF9GcmFtZXNGbG93Mi5kZWZhdWx0KSkge1xuXHQgICAgLy8gaWYgaXQgZGlkbid0IGRlZmluZSBiZWZvcmVcblx0ICAgIHdpbmRvdy5mcmFtZXNGbG93ID0gbmV3IF9GcmFtZXNGbG93Mi5kZWZhdWx0KCk7XG5cdH1cblxuXHQvLyBleHBvcnRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gd2luZG93LmZyYW1lc0Zsb3c7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0dmFyIF9SZW5kZXJlckFycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuXHR2YXIgX1JlbmRlcmVyQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXJBcnJheSk7XG5cblx0dmFyIF9SZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIF9SZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJlcik7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdC8vIENvbXBhdGliaWxpdHkgZm9yIGFsbCBicm93c2VycyAtIFBhdWwgSXJpc2ggdmVyc2lvblxuXHR3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0ICAgIH07XG5cdH1cblxuXHQvLyBGcmFtZXNGbG93XG5cdCgpO1xuXHR2YXIgRnJhbWVzRmxvdyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEZyYW1lc0Zsb3coKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyYW1lc0Zsb3cpO1xuXG5cdCAgICAgICAgdGhpcy5mcmFtZXMgPSAwO1xuXHQgICAgICAgIHRoaXMuX2ZwcyA9IDMwO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IHtcblx0ICAgICAgICAgICAgbWluaW11bUFjY2VwdGFibGVGUFM6IDMwXG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnJlbmRlcmVycyA9IG5ldyBfUmVuZGVyZXJBcnJheTIuZGVmYXVsdCgpO1xuXHQgICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB7XG5cdCAgICAgICAgICAgIGxvZ3M6IG5ldyBBcnJheSgxMDApLFxuXHQgICAgICAgICAgICBsb2dzUG9pbnRlcjogMCxcblx0ICAgICAgICAgICAgbGFzdFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuXHQgICAgICAgICAgICBsYXN0RnJhbWVGUFM6IDMwLFxuXHQgICAgICAgICAgICByYXRpbzogMSxcblx0ICAgICAgICAgICAgc3RhdHVzOiAwLFxuXHQgICAgICAgICAgICBhdmVyYWdlOiB7XG5cdCAgICAgICAgICAgICAgICBmcHM6IDMwLFxuXHQgICAgICAgICAgICAgICAgcmF0aW86IDEsXG5cdCAgICAgICAgICAgICAgICBzdGF0dXM6IDBcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5yZXF1ZXN0TG9vcCgpO1xuXHQgICAgfVxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoRnJhbWVzRmxvdywgW3tcblx0ICAgICAgICBrZXk6ICdnZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaWQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmdldChpZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRBbGxCeUNsYXNzJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsQnlDbGFzcyhjbGFzc05hbWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmZpbHRlcihmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5jbGFzcyA9PSBjbGFzc05hbWU7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmVSZW5kZXJlckJ5SWQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVSZW5kZXJlckJ5SWQoaWQpIHtcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMucmVtb3ZlKGlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlKSB7XG5cdCAgICAgICAgICAgIHZhciBpc0dsb2JhbENoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuXHQgICAgICAgICAgICB2YXIgZXJyb3IgPSBudWxsO1xuXHQgICAgICAgICAgICB2YXIgcG9pbnRlciA9IGlzR2xvYmFsQ2hlY2sgPyAnYW55JyA6ICd0aGlzJztcblx0ICAgICAgICAgICAgaWYgKHJhdGUgPCAwKSBlcnJvciA9ICdGUFMgbXVzdCBub3QgYmUgYSBuZWdhdGl2ZSBudW1iZXIhJztlbHNlIGlmIChyYXRlIDwgMzAgJiYgcmF0ZSA+IDAgJiYgMzAgLyByYXRlICUgMSAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIGxlc3MgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6ICgzMCAvIEZQUykgc2hvdWxkIGJlIGludGVnZXInO2Vsc2UgaWYgKHJhdGUgPiAzMCAmJiByYXRlICUgMzAgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBtb3JlIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoRlBTICUgMzAgPT0gMCknO1xuXHQgICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHRocm93ICdjYW5cXCd0IHNldCAnICsgcmF0ZSArICdmcHMgZm9yIHRoaXMgcmVuZGVyZXIuIFJFQVNPTjogPCcgKyBlcnJvciArICc+Jztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheUFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXlBbGwoKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5nZXRBbGxSZW5kZXJlcnMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5wbGF5KCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2VBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZUFsbCgpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5nZXRBbGxSZW5kZXJlcnMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IF9zdGVwMi52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5wYXVzZSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoY2xhc3NOYW1lLCBmdW5jKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIGZ1bmMgPSBjbGFzc05hbWU7XG5cdCAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX1JlbmRlcmVyMi5kZWZhdWx0KHRoaXMsIHtcblx0ICAgICAgICAgICAgICAgIGlkOiB0aGlzLnJlbmRlcmVycy5sZW5ndGgsXG5cdCAgICAgICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG5cdCAgICAgICAgICAgIH0sIGZ1bmMpO1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdvbkxhZycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTGFnKG1pbmltdW1GUFMsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgbWluaW11bUZQUyA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjayA9IG1pbmltdW1GUFM7ZWxzZSB0aGlzLm9wdGlvbnMubWluaW11bUFjY2VwdGFibGVGUFMgPSBtaW5pbXVtRlBTO1xuXHQgICAgICAgICAgICB0aGlzLm9uTGFnQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVnaXN0ZXJQZXJmb3JtYW5jZUxvZycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyUGVyZm9ybWFuY2VMb2cocmVuZGVyVGltZSkge1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBmcHNcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPSAxMDAwIC8gcmVuZGVyVGltZTtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgbGFnc1xuXHQgICAgICAgICAgICBpZiAodGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPCB0aGlzLm9wdGlvbnMubWluaW11bUFjY2VwdGFibGVGUFMpIGlmICh0eXBlb2YgdGhpcy5vbkxhZ0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB0aGlzLm9uTGFnQ2FsbGJhY2sodGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFNcblx0ICAgICAgICAgICAgLy8gbG9nZ2luZ1xuXHQgICAgICAgICAgICApO3RoaXMucGVyZm9ybWFuY2UubG9nc1t0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyXSA9IHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyID0gKHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgKyAxKSAlIDEwMDtcblx0ICAgICAgICAgICAgLy8gYW5hbHl6aW5nIGxvZ3Ncblx0ICAgICAgICAgICAgdGhpcy5hbmFseXplUGVyZm9ybWFuY2UoKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnYW5hbHl6ZVBlcmZvcm1hbmNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYW5hbHl6ZVBlcmZvcm1hbmNlKCkge1xuXHQgICAgICAgICAgICB2YXIgYWxsRGF0YSA9IHRoaXMucGVyZm9ybWFuY2UubG9ncy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PSAnbnVtYmVyJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBhdmVyYWdlIG9mIGRhdGFcblx0ICAgICAgICAgICAgKTt2YXIgRlBTU3VtID0gMDtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gYWxsRGF0YVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX3N0ZXAzLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIEZQU1N1bSArPSBkYXRhO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgPSBGUFNTdW0gLyBhbGxEYXRhLmxlbmd0aDtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgcGVyZm9ybWFuY2UgcGVyY2VudGFnZVxuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLnJhdGlvID0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgLyAzMDtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnJhdGlvID0gdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyAvIDMwO1xuXHQgICAgICAgICAgICAvLyBkZWZpbmluZyBzdGF0dXNcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyk7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnX2dldFN0YXR1c09mRlBTJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFN0YXR1c09mRlBTKGZwcykge1xuXHQgICAgICAgICAgICB2YXIgcmF0aW8gPSBmcHMgLyB0aGlzLmZwcztcblx0ICAgICAgICAgICAgdmFyIHN0YXR1cyA9IC0zOyAvLyBXT1JTVFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjMpIHN0YXR1cyA9IC0yOyAvLyBCQURcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC42KSBzdGF0dXMgPSAtMTsgLy8gTk9UIEJBRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjkpIHN0YXR1cyA9IDA7IC8vIE9LXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDEuMykgc3RhdHVzID0gMTsgLy8gR09PRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAxLjYpIHN0YXR1cyA9IDI7IC8vIEVYQ0VMTEVOVFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAyKSBzdGF0dXMgPSAzOyAvLyBCRVNUXG5cdCAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlcXVlc3RMb29wJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdExvb3AoKSB7XG5cdCAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy5yZXF1ZXN0TG9vcC5iaW5kKHRoaXMpKTtcblx0ICAgICAgICAgICAgdGhpcy5mcmFtZXMrKztcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5yZWdpc3RlclBlcmZvcm1hbmNlTG9nKERhdGUubm93KCkgLSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXApO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnBzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKHJhdGUsIHRydWUpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gRnJhbWVzRmxvdztcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IEZyYW1lc0Zsb3c7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBSZW5kZXJlcihmcmFtZXNGbG93LCBvcHRpb25zLCBmdW5jKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuXHQgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXHQgICAgICAgIHRoaXMuY2xhc3MgPSBvcHRpb25zLmNsYXNzIHx8ICcnO1xuXHQgICAgICAgIHRoaXMucHJvcHMgPSB7XG5cdCAgICAgICAgICAgIGlzRGVidWdpbmc6IGZhbHNlXG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLmZyYW1lc0Zsb3cgPSBmcmFtZXNGbG93O1xuXHQgICAgICAgIHRoaXMuX2ZwcyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xuXHQgICAgICAgIHRoaXMuZnJhbWVzID0gMDtcblx0ICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlO1xuXHQgICAgICAgIHRoaXMucmVuZGVyKCk7XG5cdCAgICB9XG5cdCAgICAvLyBSZW5kZXIgbmV4dCBmcmFtZVxuXG5cblx0ICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlciwgW3tcblx0ICAgICAgICBrZXk6ICduZXh0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5yZW1vdmVSZW5kZXJlckJ5SWQodGhpcy5pZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWJ1Z2luZyA9IHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnc2hvdWxkUmVuZGVyVGhpc0ZyYW1lJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkUmVuZGVyVGhpc0ZyYW1lKCkge1xuXHQgICAgICAgICAgICAvLyBhbGwgY29uZGl0aW9ucyB0byBwYXVzZSBvciBwbGF5IHJlbmRlcmluZ1xuXHQgICAgICAgICAgICB2YXIgY29uZGl0aW9ucyA9IFshdGhpcy5wcm9wcy5pc0RlYnVnaW5nLCB0aGlzLmZyYW1lc0Zsb3cuZnJhbWVzICUgKDMwIC8gTWF0aC5taW4odGhpcy5mcHMsIDMwKSkgPT0gMF07XG5cdCAgICAgICAgICAgIHZhciByZXQgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNvbmRpdGlvbnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQgJiYgY29uZDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEZyYW1lT2JqZWN0VG9SZXR1cm4nLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGcmFtZU9iamVjdFRvUmV0dXJuKCkge1xuXHQgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgcmVuZGVyZXI6IHRoaXMsXG5cdCAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5mcmFtZXMsXG5cdCAgICAgICAgICAgICAgICBmcHM6IHRoaXMuZnBzLFxuXHQgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2U6IHtcblx0ICAgICAgICAgICAgICAgICAgICBmcHM6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMsXG5cdCAgICAgICAgICAgICAgICAgICAgcmF0aW86IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5yYXRpbyxcblx0ICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5zdGF0dXMsXG5cdCAgICAgICAgICAgICAgICAgICAgYXZlcmFnZTogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmF2ZXJhZ2Vcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVuZGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICAgICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJUaGlzRnJhbWUoKSB8fCB0aGlzLnNob3VsZEdvTmV4dCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbiA9IDA7XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5mcHMgPiAzMCkgaXRlcmF0aW9uID0gTWF0aC5tYXgodGhpcy5mcHMsIDMwKSAvIDMwO2Vsc2UgaXRlcmF0aW9uID0gMzAgLyB0aGlzLmZwcztcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lcysrO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5mdW5jKHRoaXMuZ2V0RnJhbWVPYmplY3RUb1JldHVybigpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICBpZiAobmV3RlBTID09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShuZXdGUFMpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZwcyB8fCB0aGlzLmZyYW1lc0Zsb3cuZnBzO1xuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIFJlbmRlcmVyO1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgUmVuZGVyZXJBcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFJlbmRlcmVyQXJyYXkoKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyQXJyYXkpO1xuXG5cdCAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdhcnJheScpIHRoaXMuYXJyID0gYXJnc1swXTtlbHNlIHRoaXMuYXJyID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShBcnJheSwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG5cdCAgICB9XG5cblx0ICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlckFycmF5LCBbe1xuXHQgICAgICAgIGtleTogJ2dldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFycltpXTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnc2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGksIHZhbCkge1xuXHQgICAgICAgICAgICB0aGlzLmFycltpXSA9IHZhbDtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3B1c2gnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKHZhbCkge1xuXHQgICAgICAgICAgICB0aGlzLmFyci5wdXNoKHZhbCk7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoaSkge1xuXHQgICAgICAgICAgICB0aGlzLmFycltpXSA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgdGhpcy5hcnIuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZmlsdGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyKGNvbmRGdW5jKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJBcnJheSh0aGlzLmFyci5maWx0ZXIoY29uZEZ1bmMpKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZWFjaCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goY2IpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIGNiKGl0ZW0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3RvQXJyYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnI7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbW92ZSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnbmV4dCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5uZXh0KCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucGF1c2UoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucGxheSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnbGVuZ3RoJyxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aDtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gUmVuZGVyZXJBcnJheTtcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyQXJyYXk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mcmFtZXNmbG93L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLkpTT05Mb2FkZXIoKTtcclxuXHJcbmNvbnN0IGJsYWNrTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwMDAsIHNoaW5pbmVzczogMCB9KTtcclxuY29uc3QgZGFya01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4OTk5OTk5LCBzaGluaW5lc3M6IDEwMCB9KTtcclxuY29uc3QgbGlnaHRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGVlZWVlZSwgc2hpbmluZXNzOiA3MCB9KTtcclxuXHJcbmNvbnN0IG9iamVjdHNOYW1lcyA9IFsnYXJtMScsICdhcm0yJywgJ2ZpbmdlcicsICdoYW5kJywgJ3Jlc3QnLCAncm90YXRvcicsICd3cmlzdCcsICd3cmlzdGJvbmUnXTtcclxuY29uc3QgbG9hZCA9IChvYmplY3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSAnLi9hc3NldHMvb2JqZWN0cy8nICsgb2JqZWN0TmFtZSArICcuanNvbic7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgbG9hZGVyLmxvYWQodXJsLCAoZ2VvbWV0cnksIG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsID0gbGlnaHRNYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT09ICdmaW5nZXInKSBtYXRlcmlhbCA9IGJsYWNrTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIGlmIChbJ3dyaXN0Ym9uZScsICdoYW5kJywgJ2FybTEnLCAncmVzdCddLmluY2x1ZGVzKG9iamVjdE5hbWUpKSBtYXRlcmlhbCA9IGRhcmtNYXRlcmlhbDtcclxuICAgICAgICAgICAgcmVzb2x2ZShuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59O1xyXG5jb25zdCBsb2FkQWxsT2JqZWN0c0FuZFB1dEluID0gKG9iamVjdHMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBlcnIpID0+IHtcclxuICAgICAgICBsZXQgbG9hZGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IG9iamVjdE5hbWUgb2Ygb2JqZWN0c05hbWVzKSB7XHJcbiAgICAgICAgICAgIGxvYWQob2JqZWN0TmFtZSkudGhlbigobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0c1tvYmplY3ROYW1lXSA9IG1lc2g7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRlZENvdW50ID09PSBvYmplY3RzTmFtZXMubGVuZ3RoKSByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuY2xhc3MgUm9ib3Qge1xyXG4gICAgY29uc3RydWN0b3IgKHJvYm9TY2VuZSkge1xyXG4gICAgICAgIHRoaXMucm9ib1NjZW5lID0gcm9ib1NjZW5lO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSByb2JvU2NlbmUuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXJ0cyA9IHt9O1xyXG4gICAgICAgIGxvYWRBbGxPYmplY3RzQW5kUHV0SW4odGhpcy5wYXJ0cykudGhlbih0aGlzLnJlYWR5LmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcGFydE5hbWUgaW4gdGhpcy5wYXJ0cykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1twYXJ0TmFtZV07XHJcbiAgICAgICAgICAgIHBhcnQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIHBhcnQucmVjZWl2ZVNoYWRvdyA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbWJpbmluZyB0aGluZ3MgdG9nZXRoZXJcclxuICAgICAgICB0aGlzLnBhcnRzLnJlc3QuYWRkKHRoaXMucGFydHMucm90YXRvcik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnBvc2l0aW9uLnkgPSAzO1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5hZGQodGhpcy5wYXJ0cy5hcm0xKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTEucG9zaXRpb24ueSA9IDI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLmFkZCh0aGlzLnBhcnRzLmFybTIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5wb3NpdGlvbi55ID0gNC41O1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5hZGQodGhpcy5wYXJ0cy53cmlzdCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdC5hZGQodGhpcy5wYXJ0cy53cmlzdGJvbmUpO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnBvc2l0aW9uLnkgPSA3LjU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucG9zaXRpb24ueCA9IC0wLjA2O1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLmFkZCh0aGlzLnBhcnRzLmhhbmQpO1xyXG4gICAgICAgIHRoaXMucGFydHMuaGFuZC5hZGQodGhpcy5wYXJ0cy5maW5nZXIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnkgPSAxLjQ7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueCA9IDAuMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi56ID0gMC4zNTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi54ID0gMC4yO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMiA9IHRoaXMucGFydHMuZmluZ2VyLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5oYW5kLmFkZCh0aGlzLnBhcnRzLmZpbmdlcjIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi55ID0gTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucG9zaXRpb24ueCA9IC0wLjQ7XHJcblxyXG4gICAgICAgIC8vIGFkZGluZyByZXN0IHRvIHNjZW5lXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wYXJ0cy5yZXN0KTtcclxuXHJcbiAgICAgICAgLy8gSGlkZGVuIHBhcmFtZXRlcnNcclxuICAgICAgICB0aGlzLnJvdGF0ZVkgPSAtMC40O1xyXG4gICAgICAgIHRoaXMucm90YXRlWCA9IDA7XHJcbiAgICAgICAgdGhpcy5hcm1BbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy53cmlzdEFuZ2xlID0gLU1hdGguUEkvODtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IE1hdGguUEkvNjtcclxuXHJcbiAgICAgICAgLy8gU2V0IGluaXRhbCB2YWx1ZXNcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9yb3RhdGVZKTtcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSA9IHRoaXMuX3JvdGF0ZVk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLnggPSB0aGlzLl9yb3RhdGVYO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5yb3RhdGlvbi54ID0gdGhpcy5fYXJtQW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCA9IHRoaXMuX3dyaXN0QW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueiA9IHRoaXMuX2dyYWJBbmdsZTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueiA9IHRoaXMuX2dyYWJBbmdsZTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc2V0IHJvdGF0ZVkgKGRlZykge1xyXG4gICAgICAgIHRoaXMuX3JvdGF0ZVkgPSBkZWdcclxuICAgIH1cclxuICAgIGdldCByb3RhdGVZICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRlWVxyXG4gICAgfVxyXG4gICAgc2V0IHJvdGF0ZVggKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMyk7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCA3Kk1hdGguUEkvMTIpO1xyXG4gICAgICAgIHRoaXMuX3JvdGF0ZVggPSBkZWdcclxuICAgIH1cclxuICAgIGdldCByb3RhdGVYICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRlWFxyXG4gICAgfVxyXG4gICAgc2V0IGFybUFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLlBJIC0gZGVnO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMTIpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgNSpNYXRoLlBJLzYpO1xyXG4gICAgICAgIHRoaXMuX2FybUFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgYXJtQW5nbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcm1BbmdsZVxyXG4gICAgfVxyXG4gICAgc2V0IHdyaXN0QW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMik7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCBNYXRoLlBJLzIpO1xyXG4gICAgICAgIHRoaXMuX3dyaXN0QW5nbGUgPSBkZWdcclxuICAgIH1cclxuICAgIGdldCB3cmlzdEFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd3Jpc3RBbmdsZVxyXG4gICAgfVxyXG4gICAgc2V0IGdyYWJBbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAwKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIE1hdGguUEkpO1xyXG4gICAgICAgIGRlZyAtPSBNYXRoLlBJLzY7XHJcbiAgICAgICAgdGhpcy5fZ3JhYkFuZ2xlID0gLWRlZy8yXHJcbiAgICB9XHJcbiAgICBnZXQgZ3JhYkFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gLSgyKnRoaXMuX2dyYWJBbmdsZS1NYXRoLlBJLzYpXHJcbiAgICB9XHJcbiAgICBjbG9zZUdyYWIgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhYkFuZ2xlID0gMFxyXG4gICAgfVxyXG4gICAgb3BlbkdyYWIgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhYkFuZ2xlID0gTWF0aC5QSS8yXHJcbiAgICB9XHJcbiAgICB0b2dnbGVHcmFiICgpIHtcclxuICAgICAgICBpZiAodGhpcy5ncmFiQW5nbGUgPiBNYXRoLlBJLzMpIHRoaXMuY2xvc2VHcmFiKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLm9wZW5HcmFiKClcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSArPSAodGhpcy5fcm90YXRlWSAtIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCArPSAodGhpcy5fcm90YXRlWCAtIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCArPSAodGhpcy5fYXJtQW5nbGUgLSB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCArPSAodGhpcy5fd3Jpc3RBbmdsZSAtIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnogKz0gKHRoaXMuX2dyYWJBbmdsZSAtIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnopIC8gMztcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnogKz0gKHRoaXMuX2dyYWJBbmdsZSAtIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56KSAvIDNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvYm90XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvUm9ib3QuanMiLCJjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9ICQocXVlcnkgKyAnIC5zZWxlY3QtaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9ICQkKHF1ZXJ5ICsgJyBsaScpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5zdHlsZS53aWR0aCA9IDEwMCAvIHRoaXMuaXRlbXMubGVuZ3RoICsgJyUnO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykgaXRlbS5vbm1vdXNlb3ZlciA9IHRoaXMub25Nb3VzZU92ZXJJdGVtLmJpbmQodGhpcylcclxuICAgIH1cclxuICAgIG9uTW91c2VPdmVySXRlbSAoZSkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0LnN0eWxlLmxlZnQgPSBNYXRoLmZsb29yKGUucGFnZVggLyB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMuaXRlbXMubGVuZ3RoKSAqIDEwMCAvIHRoaXMuaXRlbXMubGVuZ3RoICsgJyUnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuL1NsaWRlcidcclxuXHJcbmNvbnN0IHNldEJldHdlZW4gPSAobnVtYmVyLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG51bWJlciwgbWF4KSwgbWluKVxyXG59O1xyXG5cclxuY2xhc3MgR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmxlZnRCdXR0b24gPSAkKHF1ZXJ5ICsgJyA+IC5sZWZ0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24gPSAkKHF1ZXJ5ICsgJyA+IC5yaWdodC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkgKyAnID4gLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gJCQocXVlcnkgKyAnID4gLmNvbnRhaW5lciA+IGltZycpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlcignYm9keSA+IC5mdWxsLXZpZXctc2xpZGVyJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy5tb3ZlKC0zMDApO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMubW92ZSgzMDApO1xyXG4gICAgICAgIGZvciAobGV0IGltYWdlIG9mIHRoaXMuaW1hZ2VzKSBpbWFnZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0Lm9uUmVxdWVzdEZvclNsaWRlcyh0aGlzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB3aWR0aCAoKSB7XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMpIHN1bSArPSBpbWFnZS5jbGllbnRXaWR0aFxyXG4gICAgICAgIHJldHVybiBzdW1cclxuICAgIH1cclxuICAgIGdldCBtYXhSaWdodCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIC0odGhpcy53aWR0aCAtIHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aClcclxuICAgIH1cclxuICAgIGRpc2FibGVCdXR0b24gKHdoaWNoKSB7XHJcbiAgICAgICAgdGhpc1t3aGljaCArICdCdXR0b24nXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgZW5hYmxlQWxsQnV0dG9ucyAoKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBtb3ZlIChzdGVwKSB7XHJcbiAgICAgICAgY29uc3QgbWF4UmlnaHQgPSB0aGlzLm1heFJpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmlnaHQgPSBzZXRCZXR3ZWVuKHRoaXMuY29udGFpbmVyUmlnaHQgKyBzdGVwLCBtYXhSaWdodCwgMCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucmlnaHQgPSB0aGlzLmNvbnRhaW5lclJpZ2h0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLmVuYWJsZUFsbEJ1dHRvbnMoKTtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJSaWdodCA9PT0gbWF4UmlnaHQpIHRoaXMuZGlzYWJsZUJ1dHRvbignbGVmdCcpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lclJpZ2h0ID09PSAwKSB0aGlzLmRpc2FibGVCdXR0b24oJ3JpZ2h0JylcclxuICAgIH1cclxuICAgIG9uUmVxdWVzdEZvclNsaWRlcyAoaW1hZ2UpIHtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuaW1hZ2VzKSBpZiAodGhpcy5pbWFnZXNbaV0gPT09IGltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLnNob3coaSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJjb25zdCBzZXRCZXR3ZWVuID0gKG51bWJlciwgbWluLCBtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihudW1iZXIsIG1heCksIG1pbilcclxufTtcclxuXHJcbmNsYXNzIFNsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbGxlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSAkKHF1ZXJ5ICsgJyBpbWcnKTtcclxuICAgICAgICB0aGlzLmdhbGxlcnkgPSBnYWxsZXJ5O1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWluZXIpIHRoaXMuaGlkZGVuKClcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5pc0FjdGl2ZSkgdGhpcy5oaWRkZW4oKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0JyAmJiB0aGlzLmlzQWN0aXZlKSB0aGlzLmltYWdlSW5kZXgtLTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0xlZnQnICYmIHRoaXMuaXNBY3RpdmUpIHRoaXMuaW1hZ2VJbmRleCsrO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXQgaW1hZ2VJbmRleCAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gc2V0QmV0d2VlbihpbmRleCwgMCwgdGhpcy5nYWxsZXJ5LmltYWdlcy5sZW5ndGgtMSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmdhbGxlcnkuaW1hZ2VzW3RoaXMuaW5kZXhdLnNyYztcclxuICAgIH1cclxuICAgIGdldCBpbWFnZUluZGV4ICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleFxyXG4gICAgfVxyXG4gICAgc2hvdyAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmltYWdlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgaGlkZGVuICgpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==