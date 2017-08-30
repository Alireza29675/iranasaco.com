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
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: white; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body .full-view-slider {\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    background: rgba(0, 0, 0, 0.6);\n    transition-duration: 0.3s; }\n    body .full-view-slider.active {\n      opacity: 1;\n      pointer-events: auto; }\n    body .full-view-slider > img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      max-width: 80%;\n      max-height: 70%;\n      z-index: 1000; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 25%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 16px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF);\n    padding: 70px 0; }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: 520px;\n      padding: 80px 0; }\n      body main section > img {\n        float: left;\n        width: 305px; }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 27px; }\n      body main section[data-title='portfolio'] > img {\n        margin-top: 80px;\n        margin-right: 15px;\n        cursor: zoom-in;\n        transition-duration: 0.3s;\n        z-index: 99; }\n        body main section[data-title='portfolio'] > img:hover {\n          opacity: 0.8;\n          transform: scale(1.1); }\n      body main section[data-title='gallery'] {\n        height: 400px; }\n        body main section[data-title='gallery'] .gallery {\n          background: #222;\n          margin-top: 20px;\n          overflow: hidden;\n          position: relative; }\n          body main section[data-title='gallery'] .gallery .container {\n            position: relative; }\n          body main section[data-title='gallery'] .gallery img {\n            cursor: pointer;\n            height: 200px;\n            transition-duration: 0.2s;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            -webkit-user-drag: none;\n            -moz-user-drag: none;\n            -ms-user-drag: none;\n            user-drag: none; }\n            body main section[data-title='gallery'] .gallery img:hover {\n              opacity: 0.85;\n              transform: scale(0.95); }\n            body main section[data-title='gallery'] .gallery img:active {\n              opacity: 0.5;\n              transition-duration: 0.1s;\n              transform: scale(0.9); }\n          body main section[data-title='gallery'] .gallery .container {\n            flex-wrap: nowrap;\n            display: flex;\n            flex-direction: row;\n            right: 0;\n            transition-duration: 0.5s; }\n          body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n            width: 50px;\n            height: 100px;\n            background: rgba(0, 0, 0, 0.6);\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            opacity: 0.3; }\n            body main section[data-title='gallery'] .gallery .left-button.active, body main section[data-title='gallery'] .gallery .right-button.active {\n              cursor: pointer;\n              opacity: 0.8;\n              transition-duration: 0.3s; }\n              body main section[data-title='gallery'] .gallery .left-button.active:hover, body main section[data-title='gallery'] .gallery .right-button.active:hover {\n                opacity: 1; }\n            body main section[data-title='gallery'] .gallery .left-button i, body main section[data-title='gallery'] .gallery .right-button i {\n              position: absolute;\n              background: white;\n              width: 5px;\n              height: 30px;\n              top: 50%;\n              left: 18px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%); }\n              body main section[data-title='gallery'] .gallery .left-button i:before, body main section[data-title='gallery'] .gallery .right-button i:before {\n                content: ' ';\n                position: absolute;\n                background: white;\n                width: 6px;\n                height: 30px;\n                transform: rotate(90deg) translate(-12px, 12px); }\n          body main section[data-title='gallery'] .gallery .left-button {\n            left: 0; }\n            body main section[data-title='gallery'] .gallery .left-button i {\n              top: 39%;\n              left: 16px;\n              transform: scale(0.7) rotate(45deg) translate(-50%, -50%) rotateZ(180deg); }\n          body main section[data-title='gallery'] .gallery .right-button {\n            right: 0; }\n      body main section[data-title='contact'] iframe {\n        margin-top: 20px; }\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDNlODQ1ZTNiNDQ1NjFkMTliOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvU2xpZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImFwcCIsIkFwcCIsInJvYm9TY2VuZSIsIm5hdmlnYXRpb24iLCJnYWxsZXJ5Iiwicm9ib3QiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJiaW5kIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJldmVudCIsInhSYXRlIiwicGFnZVgiLCJpbm5lcldpZHRoIiwieVJhdGUiLCJwYWdlWSIsImlubmVySGVpZ2h0Iiwicm90YXRlWSIsIk1hdGgiLCJQSSIsInJvdGF0ZVgiLCJhcm1BbmdsZSIsIndyaXN0QW5nbGUiLCJjbG9zZUdyYWIiLCJncmFiQW5nbGUiLCJwb3N0cHJvY2Vzc2luZyIsImJva2VoX3BhcmFtcyIsInpuZWFyIiwiemZhciIsInNoYWRlckZvY3VzIiwiZnN0b3AiLCJtYXhibHVyIiwic2hvd0ZvY3VzIiwiZm9jYWxEZXB0aCIsIm1hbnVhbGRvZiIsInZpZ25ldHRpbmciLCJkZXB0aGJsdXIiLCJ0aHJlc2hvbGQiLCJnYWluIiwiYmlhcyIsImZyaW5nZSIsImZvY2FsTGVuZ3RoIiwibm9pc2UiLCJwZW50YWdvbiIsImRpdGhlcmluZyIsIlJvYm9TY2VuZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdCIsIm9uUmVzaXplIiwiZnJhbWVzRmxvdyIsInJlbmRlciIsInNjZW5lIiwiVEhSRUUiLCJTY2VuZSIsImZvZ0NvbG9yIiwiYmFja2dyb3VuZCIsIkNvbG9yIiwiZm9nIiwiRm9nIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJ5Iiwicm90YXRpb24iLCJ4IiwiYWRkIiwibWF0ZXJpYWxfZGVwdGgiLCJNZXNoRGVwdGhNYXRlcmlhbCIsImluaXRQb3N0UHJvY2Vzc2luZyIsInVwZGF0ZUJvb2tlaFBhcmFtcyIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJnYW1tYUlucHV0IiwiZ2FtbWFPdXRwdXQiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwicmVuZGVyUmV2ZXJzZVNpZGVkIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJoZW1pc3BoZXJlTGlnaHQiLCJIZW1pc3BoZXJlTGlnaHQiLCJncmlkSGVscGVyIiwiR3JpZEhlbHBlciIsImNoYW5nZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJlIiwiYm9rZWhfdW5pZm9ybXMiLCJ2YWx1ZSIsInNldEZvY2FsTGVuZ3RoIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicGFyYW1zIiwibWluRmlsdGVyIiwiTGluZWFyRmlsdGVyIiwibWFnRmlsdGVyIiwiZm9ybWF0IiwiUkdCRm9ybWF0IiwicnRUZXh0dXJlRGVwdGgiLCJXZWJHTFJlbmRlclRhcmdldCIsInJ0VGV4dHVyZUNvbG9yIiwiYm9rZWhfc2hhZGVyIiwiQm9rZWhTaGFkZXIiLCJVbmlmb3Jtc1V0aWxzIiwiY2xvbmUiLCJ1bmlmb3JtcyIsInRleHR1cmUiLCJtYXRlcmlhbEJva2VoIiwiU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImRlZmluZXMiLCJSSU5HUyIsIlNBTVBMRVMiLCJxdWFkIiwiTWVzaCIsIlBsYW5lR2VvbWV0cnkiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiY2xlYXIiLCJvdmVycmlkZU1hdGVyaWFsIiwibG9hZGVyIiwiSlNPTkxvYWRlciIsImJsYWNrTWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIiwic2hpbmluZXNzIiwiZGFya01hdGVyaWFsIiwibGlnaHRNYXRlcmlhbCIsIm9iamVjdHNOYW1lcyIsImxvYWQiLCJvYmplY3ROYW1lIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwiaW5jbHVkZXMiLCJsb2FkQWxsT2JqZWN0c0FuZFB1dEluIiwib2JqZWN0cyIsImxvYWRlZENvdW50IiwidGhlbiIsIm1lc2giLCJsZW5ndGgiLCJSb2JvdCIsImlzUmVhZHkiLCJwYXJ0cyIsInJlYWR5IiwicGFydE5hbWUiLCJwYXJ0IiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJyZXN0Iiwicm90YXRvciIsImFybTEiLCJhcm0yIiwid3Jpc3QiLCJ3cmlzdGJvbmUiLCJoYW5kIiwiZmluZ2VyIiwiZmluZ2VyMiIsImNvbnNvbGUiLCJsb2ciLCJfcm90YXRlWSIsIl9yb3RhdGVYIiwiX2FybUFuZ2xlIiwiX3dyaXN0QW5nbGUiLCJfZ3JhYkFuZ2xlIiwib3BlbkdyYWIiLCJkZWciLCJtYXgiLCJtaW4iLCJOYXZpZ2F0aW9uIiwiaGlnaGxpZ2h0IiwiaXRlbXMiLCJzdHlsZSIsIml0ZW0iLCJvbm1vdXNlb3ZlciIsIm9uTW91c2VPdmVySXRlbSIsImxlZnQiLCJmbG9vciIsInNldEJldHdlZW4iLCJudW1iZXIiLCJHYWxsZXJ5IiwiZWxlbWVudCIsImxlZnRCdXR0b24iLCJyaWdodEJ1dHRvbiIsImltYWdlcyIsImNvbnRhaW5lclJpZ2h0Iiwic2xpZGVyIiwidGhhdCIsIm9uY2xpY2siLCJtb3ZlIiwiaW1hZ2UiLCJvblJlcXVlc3RGb3JTbGlkZXMiLCJ3aGljaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0ZXAiLCJtYXhSaWdodCIsInJpZ2h0IiwiZW5hYmxlQWxsQnV0dG9ucyIsImRpc2FibGVCdXR0b24iLCJpIiwic2hvdyIsInN1bSIsImNsaWVudFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJTbGlkZXIiLCJpc0FjdGl2ZSIsImluZGV4IiwidGFyZ2V0IiwiaGlkZGVuIiwiY29kZSIsImltYWdlSW5kZXgiLCJzcmMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7QUFDQTs7Ozs7O0FBRUFBLE9BQU9DLENBQVAsR0FB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Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUtLLFVBQUw7QUFDbEQsb0JBQUlwTixNQUFNbU4sSUFBTixLQUFlLFdBQWYsSUFBOEIsTUFBS0osUUFBdkMsRUFBaUQsTUFBS0ssVUFBTDtBQUNwRCxhQUpEO0FBS0g7Ozs2QkFRS0osSyxFQUFPO0FBQ1QsaUJBQUtJLFVBQUwsR0FBa0JKLEtBQWxCO0FBQ0EsaUJBQUtELFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxpQkFBSzNLLFNBQUwsQ0FBZThKLFNBQWYsQ0FBeUJ4SSxHQUF6QixDQUE2QixRQUE3QjtBQUNIOzs7aUNBQ1M7QUFDTixpQkFBS3FKLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxpQkFBSzNLLFNBQUwsQ0FBZThKLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0g7OzswQkFmZWEsSyxFQUFPO0FBQ25CLGlCQUFLQSxLQUFMLEdBQWE3QixXQUFXNkIsS0FBWCxFQUFrQixDQUFsQixFQUFxQixLQUFLdk4sT0FBTCxDQUFhZ00sTUFBYixDQUFvQjVDLE1BQXBCLEdBQTJCLENBQWhELENBQWI7QUFDQSxpQkFBS2tELEtBQUwsQ0FBV3NCLEdBQVgsR0FBaUIsS0FBSzVOLE9BQUwsQ0FBYWdNLE1BQWIsQ0FBb0IsS0FBS3VCLEtBQXpCLEVBQWdDSyxHQUFqRDtBQUNILFM7NEJBQ2lCO0FBQ2QsbUJBQU8sS0FBS0wsS0FBWjtBQUNIOzs7Ozs7a0JBWVVGLE0iLCJmaWxlIjoiLi9wdWJsaWMvc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkM2U4NDVlM2I0NDU2MWQxOWI5NCIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9pbmRleC5zYXNzJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vc2NyaXB0cy9BcHAnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSlcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KVxyXG5cclxud2luZG93LmFwcCA9IG5ldyBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Fzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9MaWdodC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9NZWRpdW0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX0JvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ0lSQU5TYW5zJywgc2VyaWY7IH1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgYm9keSAuZnVsbC12aWV3LXNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7IH1cXG4gICAgYm9keSAuZnVsbC12aWV3LXNsaWRlci5hY3RpdmUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87IH1cXG4gICAgYm9keSAuZnVsbC12aWV3LXNsaWRlciA+IGltZyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiA3MCU7XFxuICAgICAgei1pbmRleDogMTAwMDsgfVxcbiAgYm9keSBoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgYm9keSBoZWFkZXIgaDEge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDU1JTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC43KSwgdHJhbnNwYXJlbnQpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB3aGl0ZTtcXG4gICAgICBib3gtc2hhZG93OiAwIC0xOXB4IDIxcHggLTI1cHggI2Y1ZjVmNSwgMCAxOXB4IDIxcHggLTI1cHggI2Y1ZjVmNTtcXG4gICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG4gICAgYm9keSBoZWFkZXIgY2FudmFzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgIzY2Nik7IH1cXG4gIGJvZHkgbmF2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzU1NSwgIzJiMmIyYiwgIzJiMmIyYiwgIzU1NSk7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgYm9keSBuYXYgLnNlbGVjdC1oaWdobGlnaHQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6ICM0NDQ7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTsgfVxcbiAgICBib2R5IG5hdjpob3ZlciAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICBib2R5IG5hdiB1bCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICBjb2xvcjogI0RERDtcXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgICAgICAgYm9keSBuYXYgdWwgbGk6YWN0aXZlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgb3BhY2l0eTogMC42OyB9XFxuICBib2R5IG1haW4ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZGRiwgI0VFRSwgI0ZGRik7XFxuICAgIHBhZGRpbmc6IDcwcHggMDsgfVxcbiAgICBib2R5IG1haW4gc2VjdGlvbiB7XFxuICAgICAgZGlyZWN0aW9uOiBydGw7XFxuICAgICAgd2lkdGg6IDkwMHB4O1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBoZWlnaHQ6IDUyMHB4O1xcbiAgICAgIHBhZGRpbmc6IDgwcHggMDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgd2lkdGg6IDMwNXB4OyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA1MHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIGgyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSBwIHtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdwb3J0Zm9saW8nXSA+IGltZyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICAgICAgY3Vyc29yOiB6b29tLWluO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgIHotaW5kZXg6IDk5OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdwb3J0Zm9saW8nXSA+IGltZzpob3ZlciB7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIHtcXG4gICAgICAgIGhlaWdodDogNDAwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSBpbWcge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gICAgICAgICAgICAtbW96LXVzZXItZHJhZzogbm9uZTtcXG4gICAgICAgICAgICAtbXMtdXNlci1kcmFnOiBub25lO1xcbiAgICAgICAgICAgIHVzZXItZHJhZzogbm9uZTsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSBpbWc6aG92ZXIge1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44NTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgaW1nOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAuY29udGFpbmVyIHtcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41czsgfVxcbiAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uLmFjdGl2ZSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24uYWN0aXZlIHtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7IH1cXG4gICAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24uYWN0aXZlOmhvdmVyLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbi5hY3RpdmU6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiBpIHtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICAgICAgICAgICAgd2lkdGg6IDVweDtcXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgICAgbGVmdDogMThweDtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgICAgICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpOmJlZm9yZSwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24gaTpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgtMTJweCwgMTJweCk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiB7XFxuICAgICAgICAgICAgbGVmdDogMDsgfVxcbiAgICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAubGVmdC1idXR0b24gaSB7XFxuICAgICAgICAgICAgICB0b3A6IDM5JTtcXG4gICAgICAgICAgICAgIGxlZnQ6IDE2cHg7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWigxODBkZWcpOyB9XFxuICAgICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIHtcXG4gICAgICAgICAgICByaWdodDogMDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2NvbnRhY3QnXSBpZnJhbWUge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/LXVybCEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm9ib1NjZW5lIGZyb20gJy4vUm9ib1NjZW5lJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvU2NlbmUgPSBuZXcgUm9ib1NjZW5lKCdib2R5ID4gaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oJ2JvZHkgPiBuYXYnKTtcclxuICAgICAgICB0aGlzLmdhbGxlcnkgPSBuZXcgR2FsbGVyeSgnYm9keSAuZ2FsbGVyeScpO1xyXG4gICAgICAgIHRoaXMucm9ib3QgPSB0aGlzLnJvYm9TY2VuZS5yb2JvdDtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlTW92ZSAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB4UmF0ZSA9IGV2ZW50LnBhZ2VYIC8gd2luZG93LmlubmVyV2lkdGggLSAwLjU7XHJcbiAgICAgICAgY29uc3QgeVJhdGUgPSBldmVudC5wYWdlWSAvIHdpbmRvdy5pbm5lckhlaWdodCAtIDAuNTtcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVkgPSB4UmF0ZSAqIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5yb3RhdGVYID0geVJhdGUgKiBNYXRoLlBJLzMgLSBNYXRoLlBJLzY7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hcm1BbmdsZSA9IHlSYXRlICogTWF0aC5QSS8yICsgMC4wNTtcclxuICAgICAgICB0aGlzLnJvYm90LndyaXN0QW5nbGUgPSB5UmF0ZSAqIC1NYXRoLlBJLzNcclxuICAgIH1cclxuICAgIG9uTW91c2VEb3duICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LmNsb3NlR3JhYigpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QuZ3JhYkFuZ2xlID0gMC41XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL0FwcC5qcyIsImltcG9ydCAnZnJhbWVzZmxvdydcclxuaW1wb3J0IFJvYm90IGZyb20gJy4vUm9ib3QnXHJcblxyXG52YXIgcG9zdHByb2Nlc3NpbmcgPSB7fTtcclxudmFyIGJva2VoX3BhcmFtcyA9IHtcclxuICAgIHpuZWFyOiAwLjEsXHJcbiAgICB6ZmFyOiAxMCxcclxuICAgIHNoYWRlckZvY3VzOiBmYWxzZSxcclxuICAgIGZzdG9wOiAyMCxcclxuICAgIG1heGJsdXI6IDIsXHJcbiAgICBzaG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgZm9jYWxEZXB0aDogMS40LFxyXG4gICAgbWFudWFsZG9mOiBmYWxzZSxcclxuICAgIHZpZ25ldHRpbmc6IGZhbHNlLFxyXG4gICAgZGVwdGhibHVyOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkIDogMC41LFxyXG4gICAgZ2FpbjogMC4yLFxyXG4gICAgYmlhczogMixcclxuICAgIGZyaW5nZTogMyxcclxuICAgIGZvY2FsTGVuZ3RoOiAyMCxcclxuICAgIG5vaXNlOiB0cnVlLFxyXG4gICAgcGVudGFnb246IGZhbHNlLFxyXG4gICAgZGl0aGVyaW5nOiAwXHJcbn07XHJcblxyXG5jbGFzcyBSb2JvU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDA7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZnJhbWVzRmxvdy5yZW5kZXIodGhpcy5yZW5kZXIuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIC8vIENyZWF0aW5nIFNjZW5lXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIGNvbnN0IGZvZ0NvbG9yID0gMHhmM2YzZjM7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKGZvZ0NvbG9yKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coZm9nQ29sb3IsIDQsIDUwKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBDYW1lcmFcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAxLCAzMDApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMztcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi54ID0gMC4yNTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSk7XHJcbiAgICAgICAgLy8gUG9zdCBQcm9jY2Vzc2luZ1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxfZGVwdGggPSBuZXcgVEhSRUUuTWVzaERlcHRoTWF0ZXJpYWwoKTtcclxuICAgICAgICB0aGlzLmluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9va2VoUGFyYW1zKCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgUmVuZGVyZXJcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmdhbW1hSW5wdXQgID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCAgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAucmVuZGVyUmV2ZXJzZVNpZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICAvLyBDcmVhdGluZyBMaWdodHNcclxuICAgICAgICB0aGlzLnBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMC41KTsgLy8gUG9pbnRcclxuICAgICAgICB0aGlzLnBvaW50TGlnaHQucG9zaXRpb24ueiA9IDEwO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucG9pbnRMaWdodCk7XHJcbiAgICAgICAgdGhpcy5oZW1pc3BoZXJlTGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZmZiwgMHgwMDAwMDAsIDEgKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmhlbWlzcGhlcmVMaWdodCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5ncmlkSGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoIDcwLCA0NSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ3JpZEhlbHBlcik7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgUm9ib3RcclxuICAgICAgICB0aGlzLnJvYm90ID0gbmV3IFJvYm90KHRoaXMpXHJcbiAgICB9XHJcbiAgICBzZXRCb29rZWhQYXJhbSAoY2hhbmdlcykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9rZWhfcGFyYW1zLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tlaFBhcmFtcygpXHJcbiAgICB9XHJcbiAgICB1cGRhdGVCb29rZWhQYXJhbXMgKCkge1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gYm9rZWhfcGFyYW1zKSBpZihlIGluIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zKSBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tlXS52YWx1ZSA9IGJva2VoX3BhcmFtc1tlXTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInpuZWFyXCJdLnZhbHVlID0gYm9rZWhfcGFyYW1zLnpuZWFyO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1wiemZhclwiXS52YWx1ZSA9IGJva2VoX3BhcmFtcy56ZmFyO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEZvY2FsTGVuZ3RoKCBib2tlaF9wYXJhbXMuZm9jYWxMZW5ndGggKVxyXG4gICAgfVxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nICgpIHtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZSAgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtdGhpcy53aWR0aCAvIDIsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIC02MCwgNjAgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZS5hZGQoIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSApO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdFxyXG4gICAgICAgIH1cclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHBhcmFtcyApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcGFyYW1zICk7XHJcbiAgICAgICAgbGV0IGJva2VoX3NoYWRlciA9IFRIUkVFLkJva2VoU2hhZGVyO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggYm9rZWhfc2hhZGVyLnVuaWZvcm1zICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0Q29sb3JcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvci50ZXh0dXJlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widERlcHRoXCJdLnZhbHVlID0gcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlRGVwdGgudGV4dHVyZTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRleHR1cmVXaWR0aFwiIF0udmFsdWUgPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widGV4dHVyZUhlaWdodFwiXS52YWx1ZSA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLm1hdGVyaWFsQm9rZWggPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zLFxyXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGJva2VoX3NoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBib2tlaF9zaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgICAgIGRlZmluZXM6IHsgUklOR1M6IDMsIFNBTVBMRVM6IDJ9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucXVhZCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCksIHBvc3Rwcm9jZXNzaW5nLm1hdGVyaWFsQm9rZWggKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZS5hZGQoIHBvc3Rwcm9jZXNzaW5nLnF1YWQgKTtcclxuXHR9XHJcbiAgICBvblJlc2l6ZSAoKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHBvc3Rwcm9jZXNzaW5nLmNhbWVyYS5hc3BlY3QgPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcclxuXHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IsIHRydWUpO1xyXG5cdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbF9kZXB0aDtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aCwgdHJ1ZSk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcihwb3N0cHJvY2Vzc2luZy5zY2VuZSwgcG9zdHByb2Nlc3NpbmcuY2FtZXJhKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvU2NlbmVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfRnJhbWVzRmxvdyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0dmFyIF9GcmFtZXNGbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZyYW1lc0Zsb3cpO1xuXG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblx0Ly8gZGVmaW5pbmcgZnJhbWVzRmxvdyBhcyBhIGdsb2JhbCBvYmplY3Rcblx0aWYgKCEod2luZG93LmZyYW1lc0Zsb3cgaW5zdGFuY2VvZiBfRnJhbWVzRmxvdzIuZGVmYXVsdCkpIHtcblx0ICAgIC8vIGlmIGl0IGRpZG4ndCBkZWZpbmUgYmVmb3JlXG5cdCAgICB3aW5kb3cuZnJhbWVzRmxvdyA9IG5ldyBfRnJhbWVzRmxvdzIuZGVmYXVsdCgpO1xuXHR9XG5cblx0Ly8gZXhwb3J0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHdpbmRvdy5mcmFtZXNGbG93O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdHZhciBfUmVuZGVyZXJBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cblx0dmFyIF9SZW5kZXJlckFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyQXJyYXkpO1xuXG5cdHZhciBfUmVuZGVyZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBfUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXIpO1xuXG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHQvLyBDb21wYXRpYmlsaXR5IGZvciBhbGwgYnJvd3NlcnMgLSBQYXVsIElyaXNoIHZlcnNpb25cblx0d2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG5cdCAgICB9O1xuXHR9XG5cblx0Ly8gRnJhbWVzRmxvd1xuXHQoKTtcblx0dmFyIEZyYW1lc0Zsb3cgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBGcmFtZXNGbG93KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGcmFtZXNGbG93KTtcblxuXHQgICAgICAgIHRoaXMuZnJhbWVzID0gMDtcblx0ICAgICAgICB0aGlzLl9mcHMgPSAzMDtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG5cdCAgICAgICAgICAgIG1pbmltdW1BY2NlcHRhYmxlRlBTOiAzMFxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5yZW5kZXJlcnMgPSBuZXcgX1JlbmRlcmVyQXJyYXkyLmRlZmF1bHQoKTtcblx0ICAgICAgICB0aGlzLnBlcmZvcm1hbmNlID0ge1xuXHQgICAgICAgICAgICBsb2dzOiBuZXcgQXJyYXkoMTAwKSxcblx0ICAgICAgICAgICAgbG9nc1BvaW50ZXI6IDAsXG5cdCAgICAgICAgICAgIGxhc3RUaW1lU3RhbXA6IHVuZGVmaW5lZCxcblx0ICAgICAgICAgICAgbGFzdEZyYW1lRlBTOiAzMCxcblx0ICAgICAgICAgICAgcmF0aW86IDEsXG5cdCAgICAgICAgICAgIHN0YXR1czogMCxcblx0ICAgICAgICAgICAgYXZlcmFnZToge1xuXHQgICAgICAgICAgICAgICAgZnBzOiAzMCxcblx0ICAgICAgICAgICAgICAgIHJhdGlvOiAxLFxuXHQgICAgICAgICAgICAgICAgc3RhdHVzOiAwXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMucmVxdWVzdExvb3AoKTtcblx0ICAgIH1cblxuXHQgICAgX2NyZWF0ZUNsYXNzKEZyYW1lc0Zsb3csIFt7XG5cdCAgICAgICAga2V5OiAnZ2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGlkKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycy5nZXQoaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGwoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0QWxsQnlDbGFzcycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycy5maWx0ZXIoZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIuY2xhc3MgPT0gY2xhc3NOYW1lO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlUmVuZGVyZXJCeUlkJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUmVuZGVyZXJCeUlkKGlkKSB7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnJlbW92ZShpZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2NoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUocmF0ZSkge1xuXHQgICAgICAgICAgICB2YXIgaXNHbG9iYWxDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cblx0ICAgICAgICAgICAgdmFyIGVycm9yID0gbnVsbDtcblx0ICAgICAgICAgICAgdmFyIHBvaW50ZXIgPSBpc0dsb2JhbENoZWNrID8gJ2FueScgOiAndGhpcyc7XG5cdCAgICAgICAgICAgIGlmIChyYXRlIDwgMCkgZXJyb3IgPSAnRlBTIG11c3Qgbm90IGJlIGEgbmVnYXRpdmUgbnVtYmVyISc7ZWxzZSBpZiAocmF0ZSA8IDMwICYmIHJhdGUgPiAwICYmIDMwIC8gcmF0ZSAlIDEgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBsZXNzIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoMzAgLyBGUFMpIHNob3VsZCBiZSBpbnRlZ2VyJztlbHNlIGlmIChyYXRlID4gMzAgJiYgcmF0ZSAlIDMwICE9PSAwKSBlcnJvciA9ICdpZiBGUFMgaXMgbW9yZSB0aGFuIDMwZnBzLCBpdCBoYXZlIHRvIGJlIGxpa2UgdGhpczogKEZQUyAlIDMwID09IDApJztcblx0ICAgICAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB0aHJvdyAnY2FuXFwndCBzZXQgJyArIHJhdGUgKyAnZnBzIGZvciB0aGlzIHJlbmRlcmVyLiBSRUFTT046IDwnICsgZXJyb3IgKyAnPic7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXlBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5QWxsKCkge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuZ2V0QWxsUmVuZGVyZXJzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucGxheSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlQWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2VBbGwoKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHRoaXMuZ2V0QWxsUmVuZGVyZXJzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBfc3RlcDIudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucGF1c2UoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVuZGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKGNsYXNzTmFtZSwgZnVuYykge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICBmdW5jID0gY2xhc3NOYW1lO1xuXHQgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJyc7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9SZW5kZXJlcjIuZGVmYXVsdCh0aGlzLCB7XG5cdCAgICAgICAgICAgICAgICBpZDogdGhpcy5yZW5kZXJlcnMubGVuZ3RoLFxuXHQgICAgICAgICAgICAgICAgY2xhc3M6IGNsYXNzTmFtZVxuXHQgICAgICAgICAgICB9LCBmdW5jKTtcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG5cdCAgICAgICAgICAgIHJldHVybiByZW5kZXJlcjtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnb25MYWcnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkxhZyhtaW5pbXVtRlBTLCBjYWxsYmFjaykge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIG1pbmltdW1GUFMgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2sgPSBtaW5pbXVtRlBTO2Vsc2UgdGhpcy5vcHRpb25zLm1pbmltdW1BY2NlcHRhYmxlRlBTID0gbWluaW11bUZQUztcblx0ICAgICAgICAgICAgdGhpcy5vbkxhZ0NhbGxiYWNrID0gY2FsbGJhY2s7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlZ2lzdGVyUGVyZm9ybWFuY2VMb2cnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclBlcmZvcm1hbmNlTG9nKHJlbmRlclRpbWUpIHtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgZnBzXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTID0gMTAwMCAvIHJlbmRlclRpbWU7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGxhZ3Ncblx0ICAgICAgICAgICAgaWYgKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTIDwgdGhpcy5vcHRpb25zLm1pbmltdW1BY2NlcHRhYmxlRlBTKSBpZiAodHlwZW9mIHRoaXMub25MYWdDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5vbkxhZ0NhbGxiYWNrKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTXG5cdCAgICAgICAgICAgIC8vIGxvZ2dpbmdcblx0ICAgICAgICAgICAgKTt0aGlzLnBlcmZvcm1hbmNlLmxvZ3NbdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlcl0gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUztcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlciA9ICh0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyICsgMSkgJSAxMDA7XG5cdCAgICAgICAgICAgIC8vIGFuYWx5emluZyBsb2dzXG5cdCAgICAgICAgICAgIHRoaXMuYW5hbHl6ZVBlcmZvcm1hbmNlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2FuYWx5emVQZXJmb3JtYW5jZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFuYWx5emVQZXJmb3JtYW5jZSgpIHtcblx0ICAgICAgICAgICAgdmFyIGFsbERhdGEgPSB0aGlzLnBlcmZvcm1hbmNlLmxvZ3MuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGRhdGEgPT0gJ251bWJlcic7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgYXZlcmFnZSBvZiBkYXRhXG5cdCAgICAgICAgICAgICk7dmFyIEZQU1N1bSA9IDA7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IGFsbERhdGFbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9zdGVwMy52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICBGUFNTdW0gKz0gZGF0YTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzID0gRlBTU3VtIC8gYWxsRGF0YS5sZW5ndGg7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIHBlcmZvcm1hbmNlIHBlcmNlbnRhZ2Vcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTIC8gMzA7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgLyAzMDtcblx0ICAgICAgICAgICAgLy8gZGVmaW5pbmcgc3RhdHVzXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2Uuc3RhdHVzID0gdGhpcy5fZ2V0U3RhdHVzT2ZGUFModGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMpO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2Uuc3RhdHVzID0gdGhpcy5fZ2V0U3RhdHVzT2ZGUFModGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ19nZXRTdGF0dXNPZkZQUycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRTdGF0dXNPZkZQUyhmcHMpIHtcblx0ICAgICAgICAgICAgdmFyIHJhdGlvID0gZnBzIC8gdGhpcy5mcHM7XG5cdCAgICAgICAgICAgIHZhciBzdGF0dXMgPSAtMzsgLy8gV09SU1Rcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC4zKSBzdGF0dXMgPSAtMjsgLy8gQkFEXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuNikgc3RhdHVzID0gLTE7IC8vIE5PVCBCQURcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC45KSBzdGF0dXMgPSAwOyAvLyBPS1xuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAxLjMpIHN0YXR1cyA9IDE7IC8vIEdPT0Rcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMS42KSBzdGF0dXMgPSAyOyAvLyBFWENFTExFTlRcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMikgc3RhdHVzID0gMzsgLy8gQkVTVFxuXHQgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZXF1ZXN0TG9vcCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RMb29wKCkge1xuXHQgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMucmVxdWVzdExvb3AuYmluZCh0aGlzKSk7XG5cdCAgICAgICAgICAgIHRoaXMuZnJhbWVzKys7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICBpZiAodGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wICE9PSB1bmRlZmluZWQpIHRoaXMucmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyhEYXRlLm5vdygpIC0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wKTtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zwcztcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlLCB0cnVlKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIEZyYW1lc0Zsb3c7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBGcmFtZXNGbG93O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0dmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gUmVuZGVyZXIoZnJhbWVzRmxvdywgb3B0aW9ucywgZnVuYykge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cblx0ICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcblx0ICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9ucy5jbGFzcyB8fCAnJztcblx0ICAgICAgICB0aGlzLnByb3BzID0ge1xuXHQgICAgICAgICAgICBpc0RlYnVnaW5nOiBmYWxzZVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5mcmFtZXNGbG93ID0gZnJhbWVzRmxvdztcblx0ICAgICAgICB0aGlzLl9mcHMgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcblx0ICAgICAgICB0aGlzLmZyYW1lcyA9IDA7XG5cdCAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZTtcblx0ICAgICAgICB0aGlzLnJlbmRlcigpO1xuXHQgICAgfVxuXHQgICAgLy8gUmVuZGVyIG5leHQgZnJhbWVcblxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoUmVuZGVyZXIsIFt7XG5cdCAgICAgICAga2V5OiAnbmV4dCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cucmVtb3ZlUmVuZGVyZXJCeUlkKHRoaXMuaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlYnVnaW5nID0gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3Nob3VsZFJlbmRlclRoaXNGcmFtZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHtcblx0ICAgICAgICAgICAgLy8gYWxsIGNvbmRpdGlvbnMgdG8gcGF1c2Ugb3IgcGxheSByZW5kZXJpbmdcblx0ICAgICAgICAgICAgdmFyIGNvbmRpdGlvbnMgPSBbIXRoaXMucHJvcHMuaXNEZWJ1Z2luZywgdGhpcy5mcmFtZXNGbG93LmZyYW1lcyAlICgzMCAvIE1hdGgubWluKHRoaXMuZnBzLCAzMCkpID09IDBdO1xuXHQgICAgICAgICAgICB2YXIgcmV0ID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjb25kaXRpb25zW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0ICYmIGNvbmQ7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRGcmFtZU9iamVjdFRvUmV0dXJuJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RnJhbWVPYmplY3RUb1JldHVybigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB0aGlzLFxuXHQgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZnJhbWVzLFxuXHQgICAgICAgICAgICAgICAgZnBzOiB0aGlzLmZwcyxcblx0ICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgZnBzOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTLFxuXHQgICAgICAgICAgICAgICAgICAgIHJhdGlvOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UucmF0aW8sXG5cdCAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2Uuc3RhdHVzLFxuXHQgICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2U6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5hdmVyYWdlXG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyVGhpc0ZyYW1lKCkgfHwgdGhpcy5zaG91bGRHb05leHQpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb24gPSAwO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnBzID4gMzApIGl0ZXJhdGlvbiA9IE1hdGgubWF4KHRoaXMuZnBzLCAzMCkgLyAzMDtlbHNlIGl0ZXJhdGlvbiA9IDMwIC8gdGhpcy5mcHM7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXMrKztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuZnVuYyh0aGlzLmdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgaWYgKG5ld0ZQUyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cuY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUobmV3RlBTKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcHMgfHwgdGhpcy5mcmFtZXNGbG93LmZwcztcblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBSZW5kZXJlcjtcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0dmFyIFJlbmRlcmVyQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBSZW5kZXJlckFycmF5KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlckFycmF5KTtcblxuXHQgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnYXJyYXknKSB0aGlzLmFyciA9IGFyZ3NbMF07ZWxzZSB0aGlzLmFyciA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQXJyYXksIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xuXHQgICAgfVxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoUmVuZGVyZXJBcnJheSwgW3tcblx0ICAgICAgICBrZXk6ICdnZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJbaV07XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3NldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldChpLCB2YWwpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnJbaV0gPSB2YWw7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwdXNoJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaCh2YWwpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnIucHVzaCh2YWwpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGkpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnJbaV0gPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyLnNwbGljZShpLCAxKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZpbHRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlcihjb25kRnVuYykge1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFJlbmRlcmVyQXJyYXkodGhpcy5hcnIuZmlsdGVyKGNvbmRGdW5jKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2VhY2gnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGNiKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5hcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICBjYihpdGVtKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICd0b0FycmF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW1vdmUoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ25leHQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIubmV4dCgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnBhdXNlKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnBsYXkoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2xlbmd0aCcsXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFyci5sZW5ndGg7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIFJlbmRlcmVyQXJyYXk7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlckFycmF5O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZnJhbWVzZmxvdy9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5KU09OTG9hZGVyKCk7XHJcblxyXG5jb25zdCBibGFja01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwLCBzaGluaW5lc3M6IDAgfSk7XHJcbmNvbnN0IGRhcmtNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDk5OTk5OSwgc2hpbmluZXNzOiAxMDAgfSk7XHJcbmNvbnN0IGxpZ2h0TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHhlZWVlZWUsIHNoaW5pbmVzczogNzAgfSk7XHJcblxyXG5jb25zdCBvYmplY3RzTmFtZXMgPSBbJ2FybTEnLCAnYXJtMicsICdmaW5nZXInLCAnaGFuZCcsICdyZXN0JywgJ3JvdGF0b3InLCAnd3Jpc3QnLCAnd3Jpc3Rib25lJ107XHJcbmNvbnN0IGxvYWQgPSAob2JqZWN0TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gJy4vYXNzZXRzL29iamVjdHMvJyArIG9iamVjdE5hbWUgKyAnLmpzb24nO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QsIGVycikgPT4ge1xyXG4gICAgICAgIGxvYWRlci5sb2FkKHVybCwgKGdlb21ldHJ5LCBtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICBtYXRlcmlhbCA9IGxpZ2h0TWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09PSAnZmluZ2VyJykgbWF0ZXJpYWwgPSBibGFja01hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAoWyd3cmlzdGJvbmUnLCAnaGFuZCcsICdhcm0xJywgJ3Jlc3QnXS5pbmNsdWRlcyhvYmplY3ROYW1lKSkgbWF0ZXJpYWwgPSBkYXJrTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIHJlc29sdmUobmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufTtcclxuY29uc3QgbG9hZEFsbE9iamVjdHNBbmRQdXRJbiA9IChvYmplY3RzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgbGV0IGxvYWRlZENvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIG9mIG9iamVjdHNOYW1lcykge1xyXG4gICAgICAgICAgICBsb2FkKG9iamVjdE5hbWUpLnRoZW4oKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdHNbb2JqZWN0TmFtZV0gPSBtZXNoO1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmIChsb2FkZWRDb3VudCA9PT0gb2JqZWN0c05hbWVzLmxlbmd0aCkgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTtcclxuXHJcbmNsYXNzIFJvYm90IHtcclxuICAgIGNvbnN0cnVjdG9yIChyb2JvU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnJvYm9TY2VuZSA9IHJvYm9TY2VuZTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcm9ib1NjZW5lLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFydHMgPSB7fTtcclxuICAgICAgICBsb2FkQWxsT2JqZWN0c0FuZFB1dEluKHRoaXMucGFydHMpLnRoZW4odGhpcy5yZWFkeS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICAgIGZvciAobGV0IHBhcnROYW1lIGluIHRoaXMucGFydHMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucGFydHNbcGFydE5hbWVdO1xyXG4gICAgICAgICAgICBwYXJ0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICBwYXJ0LnJlY2VpdmVTaGFkb3cgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21iaW5pbmcgdGhpbmdzIHRvZ2V0aGVyXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yZXN0LmFkZCh0aGlzLnBhcnRzLnJvdGF0b3IpO1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5wb3NpdGlvbi55ID0gMztcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3IuYWRkKHRoaXMucGFydHMuYXJtMSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnBvc2l0aW9uLnkgPSAyO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5hZGQodGhpcy5wYXJ0cy5hcm0yKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIucG9zaXRpb24ueSA9IDQuNTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIuYWRkKHRoaXMucGFydHMud3Jpc3QpO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3QuYWRkKHRoaXMucGFydHMud3Jpc3Rib25lKTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5wb3NpdGlvbi55ID0gNy41O1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnBvc2l0aW9uLnggPSAtMC4wNjtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5hZGQodGhpcy5wYXJ0cy5oYW5kKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmhhbmQuYWRkKHRoaXMucGFydHMuZmluZ2VyKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi55ID0gMS40O1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnggPSAwLjI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueiA9IDAuMzU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueCA9IDAuMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIgPSB0aGlzLnBhcnRzLmZpbmdlci5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMucGFydHMuaGFuZC5hZGQodGhpcy5wYXJ0cy5maW5nZXIyKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueSA9IE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnBvc2l0aW9uLnggPSAtMC40O1xyXG5cclxuICAgICAgICAvLyBhZGRpbmcgcmVzdCB0byBzY2VuZVxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGFydHMucmVzdCk7XHJcblxyXG4gICAgICAgIC8vIEhpZGRlbiBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdGhpcy5yb3RhdGVZID0gLTAuNDtcclxuICAgICAgICB0aGlzLnJvdGF0ZVggPSAwO1xyXG4gICAgICAgIHRoaXMuYXJtQW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMud3Jpc3RBbmdsZSA9IC1NYXRoLlBJLzg7XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSBNYXRoLlBJLzY7XHJcblxyXG4gICAgICAgIC8vIFNldCBpbml0YWwgdmFsdWVzXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fcm90YXRlWSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkgPSB0aGlzLl9yb3RhdGVZO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54ID0gdGhpcy5fcm90YXRlWDtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCA9IHRoaXMuX2FybUFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLnggPSB0aGlzLl93cmlzdEFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGU7XHJcblxyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVZIChkZWcpIHtcclxuICAgICAgICB0aGlzLl9yb3RhdGVZID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRlWSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVlcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVYIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzMpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgNypNYXRoLlBJLzEyKTtcclxuICAgICAgICB0aGlzLl9yb3RhdGVYID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRlWCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVhcclxuICAgIH1cclxuICAgIHNldCBhcm1BbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5QSSAtIGRlZztcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzEyKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIDUqTWF0aC5QSS82KTtcclxuICAgICAgICB0aGlzLl9hcm1BbmdsZSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IGFybUFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJtQW5nbGVcclxuICAgIH1cclxuICAgIHNldCB3cmlzdEFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzIpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgTWF0aC5QSS8yKTtcclxuICAgICAgICB0aGlzLl93cmlzdEFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgd3Jpc3RBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dyaXN0QW5nbGVcclxuICAgIH1cclxuICAgIHNldCBncmFiQW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgMCk7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCBNYXRoLlBJKTtcclxuICAgICAgICBkZWcgLT0gTWF0aC5QSS82O1xyXG4gICAgICAgIHRoaXMuX2dyYWJBbmdsZSA9IC1kZWcvMlxyXG4gICAgfVxyXG4gICAgZ2V0IGdyYWJBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIC0oMip0aGlzLl9ncmFiQW5nbGUtTWF0aC5QSS82KVxyXG4gICAgfVxyXG4gICAgY2xvc2VHcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IDBcclxuICAgIH1cclxuICAgIG9wZW5HcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IE1hdGguUEkvMlxyXG4gICAgfVxyXG4gICAgdG9nZ2xlR3JhYiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhYkFuZ2xlID4gTWF0aC5QSS8zKSB0aGlzLmNsb3NlR3JhYigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5vcGVuR3JhYigpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkgKz0gKHRoaXMuX3JvdGF0ZVkgLSB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLnggKz0gKHRoaXMuX3JvdGF0ZVggLSB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLnggKz0gKHRoaXMuX2FybUFuZ2xlIC0gdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLnggKz0gKHRoaXMuX3dyaXN0QW5nbGUgLSB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56KSAvIDM7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueikgLyAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm90LmpzIiwiY2xhc3MgTmF2aWdhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSAkKHF1ZXJ5ICsgJyAuc2VsZWN0LWhpZ2hsaWdodCcpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSAkJChxdWVyeSArICcgbGknKTtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuc3R5bGUud2lkdGggPSAxMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCArICclJztcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIGl0ZW0ub25tb3VzZW92ZXIgPSB0aGlzLm9uTW91c2VPdmVySXRlbS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlT3Zlckl0ZW0gKGUpIHtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5zdHlsZS5sZWZ0ID0gTWF0aC5mbG9vcihlLnBhZ2VYIC8gd2luZG93LmlubmVyV2lkdGggKiB0aGlzLml0ZW1zLmxlbmd0aCkgKiAxMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCArICclJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvTmF2aWdhdGlvbi5qcyIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi9TbGlkZXInXHJcblxyXG5jb25zdCBzZXRCZXR3ZWVuID0gKG51bWJlciwgbWluLCBtYXgpID0+IHtcclxuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihudW1iZXIsIG1heCksIG1pbilcclxufTtcclxuXHJcbmNsYXNzIEdhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uID0gJChxdWVyeSArICcgPiAubGVmdC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uID0gJChxdWVyeSArICcgPiAucmlnaHQtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5ICsgJyA+IC5jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmltYWdlcyA9ICQkKHF1ZXJ5ICsgJyA+IC5jb250YWluZXIgPiBpbWcnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lclJpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLnNsaWRlciA9IG5ldyBTbGlkZXIoJ2JvZHkgPiAuZnVsbC12aWV3LXNsaWRlcicsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmxlZnRCdXR0b24ub25jbGljayA9ICgpID0+IHRoaXMubW92ZSgtMzAwKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLm1vdmUoMzAwKTtcclxuICAgICAgICBmb3IgKGxldCBpbWFnZSBvZiB0aGlzLmltYWdlcykgaW1hZ2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5vblJlcXVlc3RGb3JTbGlkZXModGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgd2lkdGggKCkge1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGltYWdlIG9mIHRoaXMuaW1hZ2VzKSBzdW0gKz0gaW1hZ2UuY2xpZW50V2lkdGhcclxuICAgICAgICByZXR1cm4gc3VtXHJcbiAgICB9XHJcbiAgICBnZXQgbWF4UmlnaHQgKCkge1xyXG4gICAgICAgIHJldHVybiAtKHRoaXMud2lkdGggLSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGgpXHJcbiAgICB9XHJcbiAgICBkaXNhYmxlQnV0dG9uICh3aGljaCkge1xyXG4gICAgICAgIHRoaXNbd2hpY2ggKyAnQnV0dG9uJ10uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxuICAgIGVuYWJsZUFsbEJ1dHRvbnMgKCkge1xyXG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgbW92ZSAoc3RlcCkge1xyXG4gICAgICAgIGNvbnN0IG1heFJpZ2h0ID0gdGhpcy5tYXhSaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lclJpZ2h0ID0gc2V0QmV0d2Vlbih0aGlzLmNvbnRhaW5lclJpZ2h0ICsgc3RlcCwgbWF4UmlnaHQsIDApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gdGhpcy5jb250YWluZXJSaWdodCArICdweCc7XHJcbiAgICAgICAgdGhpcy5lbmFibGVBbGxCdXR0b25zKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyUmlnaHQgPT09IG1heFJpZ2h0KSB0aGlzLmRpc2FibGVCdXR0b24oJ2xlZnQnKTtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJSaWdodCA9PT0gMCkgdGhpcy5kaXNhYmxlQnV0dG9uKCdyaWdodCcpXHJcbiAgICB9XHJcbiAgICBvblJlcXVlc3RGb3JTbGlkZXMgKGltYWdlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmltYWdlcykgaWYgKHRoaXMuaW1hZ2VzW2ldID09PSBpbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5zaG93KGkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9HYWxsZXJ5LmpzIiwiY29uc3Qgc2V0QmV0d2VlbiA9IChudW1iZXIsIG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obnVtYmVyLCBtYXgpLCBtaW4pXHJcbn07XHJcblxyXG5jbGFzcyBTbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5LCBnYWxsZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gJChxdWVyeSArICcgaW1nJyk7XHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5ID0gZ2FsbGVyeTtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuY29udGFpbmVyKSB0aGlzLmhpZGRlbigpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFc2NhcGUnICYmIHRoaXMuaXNBY3RpdmUpIHRoaXMuaGlkZGVuKCk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dSaWdodCcgJiYgdGhpcy5pc0FjdGl2ZSkgdGhpcy5pbWFnZUluZGV4LS07XHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dMZWZ0JyAmJiB0aGlzLmlzQWN0aXZlKSB0aGlzLmltYWdlSW5kZXgrKztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0IGltYWdlSW5kZXggKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IHNldEJldHdlZW4oaW5kZXgsIDAsIHRoaXMuZ2FsbGVyeS5pbWFnZXMubGVuZ3RoLTEpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5nYWxsZXJ5LmltYWdlc1t0aGlzLmluZGV4XS5zcmM7XHJcbiAgICB9XHJcbiAgICBnZXQgaW1hZ2VJbmRleCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhcclxuICAgIH1cclxuICAgIHNob3cgKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH1cclxuICAgIGhpZGRlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1NsaWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=