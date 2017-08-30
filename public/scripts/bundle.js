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
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: white; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 25%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 16px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF);\n    padding: 70px 0; }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: 520px;\n      padding: 80px 0; }\n      body main section > img {\n        float: left;\n        width: 305px; }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 27px; }\n      body main section[data-title='portfolio'] > img {\n        margin-top: 80px;\n        margin-right: 15px;\n        cursor: zoom-in;\n        transition-duration: 0.3s;\n        z-index: 99; }\n        body main section[data-title='portfolio'] > img:hover {\n          opacity: 0.8;\n          transform: scale(1.1); }\n      body main section[data-title='gallery'] .gallery {\n        background: red;\n        margin-top: 20px;\n        overflow: hidden;\n        position: relative; }\n        body main section[data-title='gallery'] .gallery img {\n          height: 200px; }\n        body main section[data-title='gallery'] .gallery .container {\n          flex-wrap: nowrap;\n          display: flex;\n          flex-direction: row; }\n        body main section[data-title='gallery'] .gallery .left-button, body main section[data-title='gallery'] .gallery .right-button {\n          width: 50px;\n          height: 100px;\n          background: rgba(0, 0, 0, 0.6);\n          position: absolute;\n          top: 50%;\n          transform: translateY(-50%); }\n          body main section[data-title='gallery'] .gallery .left-button i, body main section[data-title='gallery'] .gallery .right-button i {\n            position: absolute;\n            background: white;\n            width: 5px;\n            height: 30px;\n            top: 50%;\n            left: 18px;\n            transform: scale(0.7) rotate(45deg) translate(-50%, -50%); }\n            body main section[data-title='gallery'] .gallery .left-button i:before, body main section[data-title='gallery'] .gallery .right-button i:before {\n              content: ' ';\n              position: absolute;\n              background: white;\n              width: 6px;\n              height: 30px;\n              transform: rotate(90deg) translate(-12px, 12px); }\n        body main section[data-title='gallery'] .gallery .left-button {\n          left: 0; }\n          body main section[data-title='gallery'] .gallery .left-button i {\n            top: 39%;\n            left: 16px;\n            transform: scale(0.7) rotate(45deg) translate(-50%, -50%) rotateZ(180deg); }\n        body main section[data-title='gallery'] .gallery .right-button {\n          right: 0; }\n", ""]);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.roboScene = new _RoboScene2.default('body > header');
        this.navigation = new _Navigation2.default('body > nav');
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTc2ZmIzYmVkOTU4MzE1NGQ0MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImFwcCIsIkFwcCIsInJvYm9TY2VuZSIsIm5hdmlnYXRpb24iLCJyb2JvdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsImJpbmQiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsImV2ZW50IiwieFJhdGUiLCJwYWdlWCIsImlubmVyV2lkdGgiLCJ5UmF0ZSIsInBhZ2VZIiwiaW5uZXJIZWlnaHQiLCJyb3RhdGVZIiwiTWF0aCIsIlBJIiwicm90YXRlWCIsImFybUFuZ2xlIiwid3Jpc3RBbmdsZSIsImNsb3NlR3JhYiIsImdyYWJBbmdsZSIsInBvc3Rwcm9jZXNzaW5nIiwiYm9rZWhfcGFyYW1zIiwiem5lYXIiLCJ6ZmFyIiwic2hhZGVyRm9jdXMiLCJmc3RvcCIsIm1heGJsdXIiLCJzaG93Rm9jdXMiLCJmb2NhbERlcHRoIiwibWFudWFsZG9mIiwidmlnbmV0dGluZyIsImRlcHRoYmx1ciIsInRocmVzaG9sZCIsImdhaW4iLCJiaWFzIiwiZnJpbmdlIiwiZm9jYWxMZW5ndGgiLCJub2lzZSIsInBlbnRhZ29uIiwiZGl0aGVyaW5nIiwiUm9ib1NjZW5lIiwiY29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJpbml0Iiwib25SZXNpemUiLCJmcmFtZXNGbG93IiwicmVuZGVyIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiZm9nQ29sb3IiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJmb2ciLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsInkiLCJyb3RhdGlvbiIsIngiLCJhZGQiLCJtYXRlcmlhbF9kZXB0aCIsIk1lc2hEZXB0aE1hdGVyaWFsIiwiaW5pdFBvc3RQcm9jZXNzaW5nIiwidXBkYXRlQm9va2VoUGFyYW1zIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwic2V0U2l6ZSIsImdhbW1hSW5wdXQiLCJnYW1tYU91dHB1dCIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJyZW5kZXJSZXZlcnNlU2lkZWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJwb2ludExpZ2h0IiwiUG9pbnRMaWdodCIsImhlbWlzcGhlcmVMaWdodCIsIkhlbWlzcGhlcmVMaWdodCIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwiY2hhbmdlcyIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJib2tlaF91bmlmb3JtcyIsInZhbHVlIiwic2V0Rm9jYWxMZW5ndGgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwYXJhbXMiLCJtaW5GaWx0ZXIiLCJMaW5lYXJGaWx0ZXIiLCJtYWdGaWx0ZXIiLCJmb3JtYXQiLCJSR0JGb3JtYXQiLCJydFRleHR1cmVEZXB0aCIsIldlYkdMUmVuZGVyVGFyZ2V0IiwicnRUZXh0dXJlQ29sb3IiLCJib2tlaF9zaGFkZXIiLCJCb2tlaFNoYWRlciIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsInVuaWZvcm1zIiwidGV4dHVyZSIsIm1hdGVyaWFsQm9rZWgiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiZGVmaW5lcyIsIlJJTkdTIiwiU0FNUExFUyIsInF1YWQiLCJNZXNoIiwiUGxhbmVHZW9tZXRyeSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsIm92ZXJyaWRlTWF0ZXJpYWwiLCJsb2FkZXIiLCJKU09OTG9hZGVyIiwiYmxhY2tNYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwiY29sb3IiLCJzaGluaW5lc3MiLCJkYXJrTWF0ZXJpYWwiLCJsaWdodE1hdGVyaWFsIiwib2JqZWN0c05hbWVzIiwibG9hZCIsIm9iamVjdE5hbWUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJpbmNsdWRlcyIsImxvYWRBbGxPYmplY3RzQW5kUHV0SW4iLCJvYmplY3RzIiwibG9hZGVkQ291bnQiLCJ0aGVuIiwibWVzaCIsImxlbmd0aCIsIlJvYm90IiwiaXNSZWFkeSIsInBhcnRzIiwicmVhZHkiLCJwYXJ0TmFtZSIsInBhcnQiLCJjYXN0U2hhZG93IiwicmVjZWl2ZVNoYWRvdyIsInJlc3QiLCJyb3RhdG9yIiwiYXJtMSIsImFybTIiLCJ3cmlzdCIsIndyaXN0Ym9uZSIsImhhbmQiLCJmaW5nZXIiLCJmaW5nZXIyIiwiY29uc29sZSIsImxvZyIsIl9yb3RhdGVZIiwiX3JvdGF0ZVgiLCJfYXJtQW5nbGUiLCJfd3Jpc3RBbmdsZSIsIl9ncmFiQW5nbGUiLCJvcGVuR3JhYiIsImRlZyIsIm1heCIsIm1pbiIsIk5hdmlnYXRpb24iLCJoaWdobGlnaHQiLCJpdGVtcyIsInN0eWxlIiwiaXRlbSIsIm9ubW91c2VvdmVyIiwib25Nb3VzZU92ZXJJdGVtIiwibGVmdCIsImZsb29yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBQ0E7Ozs7OztBQUVBQSxPQUFPQyxDQUFQLEdBQVcsVUFBQ0MsS0FBRDtBQUFBLFNBQVdDLFNBQVNDLGFBQVQsQ0FBdUJGLEtBQXZCLENBQVg7QUFBQSxDQUFYO0FBQ0FGLE9BQU9LLEVBQVAsR0FBWSxVQUFDSCxLQUFEO0FBQUEsU0FBV0MsU0FBU0csZ0JBQVQsQ0FBMEJKLEtBQTFCLENBQVg7QUFBQSxDQUFaOztBQUVBRixPQUFPTyxHQUFQLEdBQWEsbUJBQWIsQzs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBc0MsOEJBQThCLHFCQUFxQix5RUFBeUUsRUFBRSxnQkFBZ0IsOEJBQThCLHFCQUFxQiwwRUFBMEUsRUFBRSxnQkFBZ0IsOEJBQThCLHdCQUF3QixtRUFB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QUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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UDtBQUNIOzs7Ozs7a0JBdUJVcUksSzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN2SlQ0QixVO0FBQ0Ysd0JBQVl6TCxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsYUFBS21ELFNBQUwsR0FBaUJwRCxFQUFFQyxLQUFGLENBQWpCO0FBQ0EsYUFBSzBMLFNBQUwsR0FBaUIzTCxFQUFFQyxRQUFRLG9CQUFWLENBQWpCO0FBQ0EsYUFBSzJMLEtBQUwsR0FBYXhMLEdBQUdILFFBQVEsS0FBWCxDQUFiO0FBQ0EsYUFBS3NELElBQUw7QUFDSDs7OzsrQkFDTztBQUNKLGlCQUFLb0ksU0FBTCxDQUFlRSxLQUFmLENBQXFCeEksS0FBckIsR0FBNkIsTUFBTSxLQUFLdUksS0FBTCxDQUFXL0IsTUFBakIsR0FBMEIsR0FBdkQ7QUFESTtBQUFBO0FBQUE7O0FBQUE7QUFFSixxQ0FBaUIsS0FBSytCLEtBQXRCO0FBQUEsd0JBQVNFLElBQVQ7QUFBNkJBLHlCQUFLQyxXQUFMLEdBQW1CLEtBQUtDLGVBQUwsQ0FBcUJuTCxJQUFyQixDQUEwQixJQUExQixDQUFuQjtBQUE3QjtBQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHUDs7O3dDQUNnQnNGLEMsRUFBRztBQUNoQixpQkFBS3dGLFNBQUwsQ0FBZUUsS0FBZixDQUFxQkksSUFBckIsR0FBNEJ6SyxLQUFLMEssS0FBTCxDQUFXL0YsRUFBRWpGLEtBQUYsR0FBVW5CLE9BQU9vQixVQUFqQixHQUE4QixLQUFLeUssS0FBTCxDQUFXL0IsTUFBcEQsSUFBOEQsR0FBOUQsR0FBb0UsS0FBSytCLEtBQUwsQ0FBVy9CLE1BQS9FLEdBQXdGLEdBQXBIO0FBQ0g7Ozs7OztrQkFHVTZCLFUiLCJmaWxlIjoiLi9wdWJsaWMvc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNzZmYjNiZWQ5NTgzMTU0ZDQwYyIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9pbmRleC5zYXNzJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vc2NyaXB0cy9BcHAnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSlcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KVxyXG5cclxud2luZG93LmFwcCA9IG5ldyBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Fzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9MaWdodC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYl9NZWRpdW0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIklSQU5TYW5zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX0JvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyB9XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ0lSQU5TYW5zJywgc2VyaWY7IH1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcbiAgYm9keSBoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgYm9keSBoZWFkZXIgaDEge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDU1JTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC43KSwgdHJhbnNwYXJlbnQpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB3aGl0ZTtcXG4gICAgICBib3gtc2hhZG93OiAwIC0xOXB4IDIxcHggLTI1cHggI2Y1ZjVmNSwgMCAxOXB4IDIxcHggLTI1cHggI2Y1ZjVmNTtcXG4gICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG4gICAgYm9keSBoZWFkZXIgY2FudmFzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgIzY2Nik7IH1cXG4gIGJvZHkgbmF2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzU1NSwgIzJiMmIyYiwgIzJiMmIyYiwgIzU1NSk7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gICAgYm9keSBuYXYgLnNlbGVjdC1oaWdobGlnaHQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAyNSU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6ICM0NDQ7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTsgfVxcbiAgICBib2R5IG5hdjpob3ZlciAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICBib2R5IG5hdiB1bCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAgICAgYm9keSBuYXYgdWwgbGkge1xcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgICBjb2xvcjogI0RERDtcXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgICAgICAgYm9keSBuYXYgdWwgbGk6YWN0aXZlIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgb3BhY2l0eTogMC42OyB9XFxuICBib2R5IG1haW4ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0ZGRiwgI0VFRSwgI0ZGRik7XFxuICAgIHBhZGRpbmc6IDcwcHggMDsgfVxcbiAgICBib2R5IG1haW4gc2VjdGlvbiB7XFxuICAgICAgZGlyZWN0aW9uOiBydGw7XFxuICAgICAgd2lkdGg6IDkwMHB4O1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBoZWlnaHQ6IDUyMHB4O1xcbiAgICAgIHBhZGRpbmc6IDgwcHggMDsgfVxcbiAgICAgIGJvZHkgbWFpbiBzZWN0aW9uID4gaW1nIHtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgd2lkdGg6IDMwNXB4OyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA1MHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIGgyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb24gYXJ0aWNsZSBwIHtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdwb3J0Zm9saW8nXSA+IGltZyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICAgICAgY3Vyc29yOiB6b29tLWluO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgIHotaW5kZXg6IDk5OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdwb3J0Zm9saW8nXSA+IGltZzpob3ZlciB7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgaW1nIHtcXG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5jb250YWluZXIge1xcbiAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiwgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5yaWdodC1idXR0b24ge1xcbiAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiBpIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgICAgICAgICAgd2lkdGg6IDVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgbGVmdDogMThweDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNykgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG4gICAgICAgICAgICBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLmxlZnQtYnV0dG9uIGk6YmVmb3JlLCBib2R5IG1haW4gc2VjdGlvbltkYXRhLXRpdGxlPSdnYWxsZXJ5J10gLmdhbGxlcnkgLnJpZ2h0LWJ1dHRvbiBpOmJlZm9yZSB7XFxuICAgICAgICAgICAgICBjb250ZW50OiAnICc7XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICAgICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKC0xMnB4LCAxMnB4KTsgfVxcbiAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiB7XFxuICAgICAgICAgIGxlZnQ6IDA7IH1cXG4gICAgICAgICAgYm9keSBtYWluIHNlY3Rpb25bZGF0YS10aXRsZT0nZ2FsbGVyeSddIC5nYWxsZXJ5IC5sZWZ0LWJ1dHRvbiBpIHtcXG4gICAgICAgICAgICB0b3A6IDM5JTtcXG4gICAgICAgICAgICBsZWZ0OiAxNnB4O1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVaKDE4MGRlZyk7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uW2RhdGEtdGl0bGU9J2dhbGxlcnknXSAuZ2FsbGVyeSAucmlnaHQtYnV0dG9uIHtcXG4gICAgICAgICAgcmlnaHQ6IDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyPy11cmwhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvYm9TY2VuZSBmcm9tICcuL1JvYm9TY2VuZSdcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnJvYm9TY2VuZSA9IG5ldyBSb2JvU2NlbmUoJ2JvZHkgPiBoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbignYm9keSA+IG5hdicpO1xyXG4gICAgICAgIHRoaXMucm9ib3QgPSB0aGlzLnJvYm9TY2VuZS5yb2JvdDtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlTW92ZSAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB4UmF0ZSA9IGV2ZW50LnBhZ2VYIC8gd2luZG93LmlubmVyV2lkdGggLSAwLjU7XHJcbiAgICAgICAgY29uc3QgeVJhdGUgPSBldmVudC5wYWdlWSAvIHdpbmRvdy5pbm5lckhlaWdodCAtIDAuNTtcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVkgPSB4UmF0ZSAqIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5yb3RhdGVYID0geVJhdGUgKiBNYXRoLlBJLzMgLSBNYXRoLlBJLzY7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5hcm1BbmdsZSA9IHlSYXRlICogTWF0aC5QSS8yICsgMC4wNTtcclxuICAgICAgICB0aGlzLnJvYm90LndyaXN0QW5nbGUgPSB5UmF0ZSAqIC1NYXRoLlBJLzNcclxuICAgIH1cclxuICAgIG9uTW91c2VEb3duICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LmNsb3NlR3JhYigpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QuZ3JhYkFuZ2xlID0gMC41XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL0FwcC5qcyIsImltcG9ydCAnZnJhbWVzZmxvdydcclxuaW1wb3J0IFJvYm90IGZyb20gJy4vUm9ib3QnXHJcblxyXG52YXIgcG9zdHByb2Nlc3NpbmcgPSB7fTtcclxudmFyIGJva2VoX3BhcmFtcyA9IHtcclxuICAgIHpuZWFyOiAwLjEsXHJcbiAgICB6ZmFyOiAxMCxcclxuICAgIHNoYWRlckZvY3VzOiBmYWxzZSxcclxuICAgIGZzdG9wOiAyMCxcclxuICAgIG1heGJsdXI6IDIsXHJcbiAgICBzaG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgZm9jYWxEZXB0aDogMS40LFxyXG4gICAgbWFudWFsZG9mOiBmYWxzZSxcclxuICAgIHZpZ25ldHRpbmc6IGZhbHNlLFxyXG4gICAgZGVwdGhibHVyOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkIDogMC41LFxyXG4gICAgZ2FpbjogMC4yLFxyXG4gICAgYmlhczogMixcclxuICAgIGZyaW5nZTogMyxcclxuICAgIGZvY2FsTGVuZ3RoOiAyMCxcclxuICAgIG5vaXNlOiB0cnVlLFxyXG4gICAgcGVudGFnb246IGZhbHNlLFxyXG4gICAgZGl0aGVyaW5nOiAwXHJcbn07XHJcblxyXG5jbGFzcyBSb2JvU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDA7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZnJhbWVzRmxvdy5yZW5kZXIodGhpcy5yZW5kZXIuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIC8vIENyZWF0aW5nIFNjZW5lXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIGNvbnN0IGZvZ0NvbG9yID0gMHhmM2YzZjM7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKGZvZ0NvbG9yKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coZm9nQ29sb3IsIDQsIDUwKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBDYW1lcmFcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAxLCAzMDApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMztcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi54ID0gMC4yNTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSk7XHJcbiAgICAgICAgLy8gUG9zdCBQcm9jY2Vzc2luZ1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxfZGVwdGggPSBuZXcgVEhSRUUuTWVzaERlcHRoTWF0ZXJpYWwoKTtcclxuICAgICAgICB0aGlzLmluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9va2VoUGFyYW1zKCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgUmVuZGVyZXJcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmdhbW1hSW5wdXQgID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCAgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAucmVuZGVyUmV2ZXJzZVNpZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICAvLyBDcmVhdGluZyBMaWdodHNcclxuICAgICAgICB0aGlzLnBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMC41KTsgLy8gUG9pbnRcclxuICAgICAgICB0aGlzLnBvaW50TGlnaHQucG9zaXRpb24ueiA9IDEwO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucG9pbnRMaWdodCk7XHJcbiAgICAgICAgdGhpcy5oZW1pc3BoZXJlTGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZmZiwgMHgwMDAwMDAsIDEgKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmhlbWlzcGhlcmVMaWdodCk7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5ncmlkSGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoIDcwLCA0NSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ3JpZEhlbHBlcik7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgUm9ib3RcclxuICAgICAgICB0aGlzLnJvYm90ID0gbmV3IFJvYm90KHRoaXMpXHJcbiAgICB9XHJcbiAgICBzZXRCb29rZWhQYXJhbSAoY2hhbmdlcykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9rZWhfcGFyYW1zLCBjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tlaFBhcmFtcygpXHJcbiAgICB9XHJcbiAgICB1cGRhdGVCb29rZWhQYXJhbXMgKCkge1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gYm9rZWhfcGFyYW1zKSBpZihlIGluIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zKSBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tlXS52YWx1ZSA9IGJva2VoX3BhcmFtc1tlXTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInpuZWFyXCJdLnZhbHVlID0gYm9rZWhfcGFyYW1zLnpuZWFyO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1wiemZhclwiXS52YWx1ZSA9IGJva2VoX3BhcmFtcy56ZmFyO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldEZvY2FsTGVuZ3RoKCBib2tlaF9wYXJhbXMuZm9jYWxMZW5ndGggKVxyXG4gICAgfVxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nICgpIHtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZSAgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtdGhpcy53aWR0aCAvIDIsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIC02MCwgNjAgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZS5hZGQoIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSApO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdFxyXG4gICAgICAgIH1cclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHBhcmFtcyApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcGFyYW1zICk7XHJcbiAgICAgICAgbGV0IGJva2VoX3NoYWRlciA9IFRIUkVFLkJva2VoU2hhZGVyO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggYm9rZWhfc2hhZGVyLnVuaWZvcm1zICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0Q29sb3JcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvci50ZXh0dXJlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widERlcHRoXCJdLnZhbHVlID0gcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlRGVwdGgudGV4dHVyZTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRleHR1cmVXaWR0aFwiIF0udmFsdWUgPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widGV4dHVyZUhlaWdodFwiXS52YWx1ZSA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLm1hdGVyaWFsQm9rZWggPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zLFxyXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGJva2VoX3NoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBib2tlaF9zaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgICAgIGRlZmluZXM6IHsgUklOR1M6IDMsIFNBTVBMRVM6IDJ9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucXVhZCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCksIHBvc3Rwcm9jZXNzaW5nLm1hdGVyaWFsQm9rZWggKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5zY2VuZS5hZGQoIHBvc3Rwcm9jZXNzaW5nLnF1YWQgKTtcclxuXHR9XHJcbiAgICBvblJlc2l6ZSAoKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHBvc3Rwcm9jZXNzaW5nLmNhbWVyYS5hc3BlY3QgPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcclxuXHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IsIHRydWUpO1xyXG5cdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbF9kZXB0aDtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aCwgdHJ1ZSk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcihwb3N0cHJvY2Vzc2luZy5zY2VuZSwgcG9zdHByb2Nlc3NpbmcuY2FtZXJhKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvU2NlbmVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfRnJhbWVzRmxvdyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblx0dmFyIF9GcmFtZXNGbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZyYW1lc0Zsb3cpO1xuXG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblx0Ly8gZGVmaW5pbmcgZnJhbWVzRmxvdyBhcyBhIGdsb2JhbCBvYmplY3Rcblx0aWYgKCEod2luZG93LmZyYW1lc0Zsb3cgaW5zdGFuY2VvZiBfRnJhbWVzRmxvdzIuZGVmYXVsdCkpIHtcblx0ICAgIC8vIGlmIGl0IGRpZG4ndCBkZWZpbmUgYmVmb3JlXG5cdCAgICB3aW5kb3cuZnJhbWVzRmxvdyA9IG5ldyBfRnJhbWVzRmxvdzIuZGVmYXVsdCgpO1xuXHR9XG5cblx0Ly8gZXhwb3J0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHdpbmRvdy5mcmFtZXNGbG93O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdHZhciBfUmVuZGVyZXJBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cblx0dmFyIF9SZW5kZXJlckFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyQXJyYXkpO1xuXG5cdHZhciBfUmVuZGVyZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cdHZhciBfUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXIpO1xuXG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHQvLyBDb21wYXRpYmlsaXR5IGZvciBhbGwgYnJvd3NlcnMgLSBQYXVsIElyaXNoIHZlcnNpb25cblx0d2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG5cdCAgICB9O1xuXHR9XG5cblx0Ly8gRnJhbWVzRmxvd1xuXHQoKTtcblx0dmFyIEZyYW1lc0Zsb3cgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBGcmFtZXNGbG93KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGcmFtZXNGbG93KTtcblxuXHQgICAgICAgIHRoaXMuZnJhbWVzID0gMDtcblx0ICAgICAgICB0aGlzLl9mcHMgPSAzMDtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG5cdCAgICAgICAgICAgIG1pbmltdW1BY2NlcHRhYmxlRlBTOiAzMFxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5yZW5kZXJlcnMgPSBuZXcgX1JlbmRlcmVyQXJyYXkyLmRlZmF1bHQoKTtcblx0ICAgICAgICB0aGlzLnBlcmZvcm1hbmNlID0ge1xuXHQgICAgICAgICAgICBsb2dzOiBuZXcgQXJyYXkoMTAwKSxcblx0ICAgICAgICAgICAgbG9nc1BvaW50ZXI6IDAsXG5cdCAgICAgICAgICAgIGxhc3RUaW1lU3RhbXA6IHVuZGVmaW5lZCxcblx0ICAgICAgICAgICAgbGFzdEZyYW1lRlBTOiAzMCxcblx0ICAgICAgICAgICAgcmF0aW86IDEsXG5cdCAgICAgICAgICAgIHN0YXR1czogMCxcblx0ICAgICAgICAgICAgYXZlcmFnZToge1xuXHQgICAgICAgICAgICAgICAgZnBzOiAzMCxcblx0ICAgICAgICAgICAgICAgIHJhdGlvOiAxLFxuXHQgICAgICAgICAgICAgICAgc3RhdHVzOiAwXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMucmVxdWVzdExvb3AoKTtcblx0ICAgIH1cblxuXHQgICAgX2NyZWF0ZUNsYXNzKEZyYW1lc0Zsb3csIFt7XG5cdCAgICAgICAga2V5OiAnZ2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGlkKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycy5nZXQoaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGwoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0QWxsQnlDbGFzcycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVycy5maWx0ZXIoZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIuY2xhc3MgPT0gY2xhc3NOYW1lO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlUmVuZGVyZXJCeUlkJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUmVuZGVyZXJCeUlkKGlkKSB7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnJlbW92ZShpZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2NoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUocmF0ZSkge1xuXHQgICAgICAgICAgICB2YXIgaXNHbG9iYWxDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cblx0ICAgICAgICAgICAgdmFyIGVycm9yID0gbnVsbDtcblx0ICAgICAgICAgICAgdmFyIHBvaW50ZXIgPSBpc0dsb2JhbENoZWNrID8gJ2FueScgOiAndGhpcyc7XG5cdCAgICAgICAgICAgIGlmIChyYXRlIDwgMCkgZXJyb3IgPSAnRlBTIG11c3Qgbm90IGJlIGEgbmVnYXRpdmUgbnVtYmVyISc7ZWxzZSBpZiAocmF0ZSA8IDMwICYmIHJhdGUgPiAwICYmIDMwIC8gcmF0ZSAlIDEgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBsZXNzIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoMzAgLyBGUFMpIHNob3VsZCBiZSBpbnRlZ2VyJztlbHNlIGlmIChyYXRlID4gMzAgJiYgcmF0ZSAlIDMwICE9PSAwKSBlcnJvciA9ICdpZiBGUFMgaXMgbW9yZSB0aGFuIDMwZnBzLCBpdCBoYXZlIHRvIGJlIGxpa2UgdGhpczogKEZQUyAlIDMwID09IDApJztcblx0ICAgICAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB0aHJvdyAnY2FuXFwndCBzZXQgJyArIHJhdGUgKyAnZnBzIGZvciB0aGlzIHJlbmRlcmVyLiBSRUFTT046IDwnICsgZXJyb3IgKyAnPic7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXlBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5QWxsKCkge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuZ2V0QWxsUmVuZGVyZXJzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucGxheSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlQWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2VBbGwoKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHRoaXMuZ2V0QWxsUmVuZGVyZXJzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBfc3RlcDIudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucGF1c2UoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVuZGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKGNsYXNzTmFtZSwgZnVuYykge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgICAgICBmdW5jID0gY2xhc3NOYW1lO1xuXHQgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJyc7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9SZW5kZXJlcjIuZGVmYXVsdCh0aGlzLCB7XG5cdCAgICAgICAgICAgICAgICBpZDogdGhpcy5yZW5kZXJlcnMubGVuZ3RoLFxuXHQgICAgICAgICAgICAgICAgY2xhc3M6IGNsYXNzTmFtZVxuXHQgICAgICAgICAgICB9LCBmdW5jKTtcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG5cdCAgICAgICAgICAgIHJldHVybiByZW5kZXJlcjtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnb25MYWcnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkxhZyhtaW5pbXVtRlBTLCBjYWxsYmFjaykge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIG1pbmltdW1GUFMgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2sgPSBtaW5pbXVtRlBTO2Vsc2UgdGhpcy5vcHRpb25zLm1pbmltdW1BY2NlcHRhYmxlRlBTID0gbWluaW11bUZQUztcblx0ICAgICAgICAgICAgdGhpcy5vbkxhZ0NhbGxiYWNrID0gY2FsbGJhY2s7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlZ2lzdGVyUGVyZm9ybWFuY2VMb2cnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclBlcmZvcm1hbmNlTG9nKHJlbmRlclRpbWUpIHtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgZnBzXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTID0gMTAwMCAvIHJlbmRlclRpbWU7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGxhZ3Ncblx0ICAgICAgICAgICAgaWYgKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTIDwgdGhpcy5vcHRpb25zLm1pbmltdW1BY2NlcHRhYmxlRlBTKSBpZiAodHlwZW9mIHRoaXMub25MYWdDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5vbkxhZ0NhbGxiYWNrKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTXG5cdCAgICAgICAgICAgIC8vIGxvZ2dpbmdcblx0ICAgICAgICAgICAgKTt0aGlzLnBlcmZvcm1hbmNlLmxvZ3NbdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlcl0gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUztcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlciA9ICh0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyICsgMSkgJSAxMDA7XG5cdCAgICAgICAgICAgIC8vIGFuYWx5emluZyBsb2dzXG5cdCAgICAgICAgICAgIHRoaXMuYW5hbHl6ZVBlcmZvcm1hbmNlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2FuYWx5emVQZXJmb3JtYW5jZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFuYWx5emVQZXJmb3JtYW5jZSgpIHtcblx0ICAgICAgICAgICAgdmFyIGFsbERhdGEgPSB0aGlzLnBlcmZvcm1hbmNlLmxvZ3MuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGRhdGEgPT0gJ251bWJlcic7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgYXZlcmFnZSBvZiBkYXRhXG5cdCAgICAgICAgICAgICk7dmFyIEZQU1N1bSA9IDA7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IGFsbERhdGFbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IF9zdGVwMy52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICBGUFNTdW0gKz0gZGF0YTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzID0gRlBTU3VtIC8gYWxsRGF0YS5sZW5ndGg7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIHBlcmZvcm1hbmNlIHBlcmNlbnRhZ2Vcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTIC8gMzA7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5yYXRpbyA9IHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgLyAzMDtcblx0ICAgICAgICAgICAgLy8gZGVmaW5pbmcgc3RhdHVzXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2Uuc3RhdHVzID0gdGhpcy5fZ2V0U3RhdHVzT2ZGUFModGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMpO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2Uuc3RhdHVzID0gdGhpcy5fZ2V0U3RhdHVzT2ZGUFModGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ19nZXRTdGF0dXNPZkZQUycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRTdGF0dXNPZkZQUyhmcHMpIHtcblx0ICAgICAgICAgICAgdmFyIHJhdGlvID0gZnBzIC8gdGhpcy5mcHM7XG5cdCAgICAgICAgICAgIHZhciBzdGF0dXMgPSAtMzsgLy8gV09SU1Rcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC4zKSBzdGF0dXMgPSAtMjsgLy8gQkFEXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuNikgc3RhdHVzID0gLTE7IC8vIE5PVCBCQURcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC45KSBzdGF0dXMgPSAwOyAvLyBPS1xuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAxLjMpIHN0YXR1cyA9IDE7IC8vIEdPT0Rcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMS42KSBzdGF0dXMgPSAyOyAvLyBFWENFTExFTlRcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMikgc3RhdHVzID0gMzsgLy8gQkVTVFxuXHQgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZXF1ZXN0TG9vcCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RMb29wKCkge1xuXHQgICAgICAgICAgICByZXF1ZXN0QW5pbUZyYW1lKHRoaXMucmVxdWVzdExvb3AuYmluZCh0aGlzKSk7XG5cdCAgICAgICAgICAgIHRoaXMuZnJhbWVzKys7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgICAgICBpZiAodGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wICE9PSB1bmRlZmluZWQpIHRoaXMucmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyhEYXRlLm5vdygpIC0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wKTtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0VGltZVN0YW1wID0gRGF0ZS5ub3coKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zwcztcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlLCB0cnVlKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIEZyYW1lc0Zsb3c7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBGcmFtZXNGbG93O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0dmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gUmVuZGVyZXIoZnJhbWVzRmxvdywgb3B0aW9ucywgZnVuYykge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cblx0ICAgICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcblx0ICAgICAgICB0aGlzLmNsYXNzID0gb3B0aW9ucy5jbGFzcyB8fCAnJztcblx0ICAgICAgICB0aGlzLnByb3BzID0ge1xuXHQgICAgICAgICAgICBpc0RlYnVnaW5nOiBmYWxzZVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5mcmFtZXNGbG93ID0gZnJhbWVzRmxvdztcblx0ICAgICAgICB0aGlzLl9mcHMgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcblx0ICAgICAgICB0aGlzLmZyYW1lcyA9IDA7XG5cdCAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZTtcblx0ICAgICAgICB0aGlzLnJlbmRlcigpO1xuXHQgICAgfVxuXHQgICAgLy8gUmVuZGVyIG5leHQgZnJhbWVcblxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoUmVuZGVyZXIsIFt7XG5cdCAgICAgICAga2V5OiAnbmV4dCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cucmVtb3ZlUmVuZGVyZXJCeUlkKHRoaXMuaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlYnVnaW5nID0gZmFsc2U7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3Nob3VsZFJlbmRlclRoaXNGcmFtZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHtcblx0ICAgICAgICAgICAgLy8gYWxsIGNvbmRpdGlvbnMgdG8gcGF1c2Ugb3IgcGxheSByZW5kZXJpbmdcblx0ICAgICAgICAgICAgdmFyIGNvbmRpdGlvbnMgPSBbIXRoaXMucHJvcHMuaXNEZWJ1Z2luZywgdGhpcy5mcmFtZXNGbG93LmZyYW1lcyAlICgzMCAvIE1hdGgubWluKHRoaXMuZnBzLCAzMCkpID09IDBdO1xuXHQgICAgICAgICAgICB2YXIgcmV0ID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjb25kaXRpb25zW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0ID0gcmV0ICYmIGNvbmQ7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gcmV0O1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRGcmFtZU9iamVjdFRvUmV0dXJuJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RnJhbWVPYmplY3RUb1JldHVybigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgIHJlbmRlcmVyOiB0aGlzLFxuXHQgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZnJhbWVzLFxuXHQgICAgICAgICAgICAgICAgZnBzOiB0aGlzLmZwcyxcblx0ICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgZnBzOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTLFxuXHQgICAgICAgICAgICAgICAgICAgIHJhdGlvOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UucmF0aW8sXG5cdCAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2Uuc3RhdHVzLFxuXHQgICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2U6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5hdmVyYWdlXG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVuZGVyVGhpc0ZyYW1lKCkgfHwgdGhpcy5zaG91bGRHb05leHQpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb24gPSAwO1xuXHQgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnBzID4gMzApIGl0ZXJhdGlvbiA9IE1hdGgubWF4KHRoaXMuZnBzLCAzMCkgLyAzMDtlbHNlIGl0ZXJhdGlvbiA9IDMwIC8gdGhpcy5mcHM7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXMrKztcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuZnVuYyh0aGlzLmdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgaWYgKG5ld0ZQUyA9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmZyYW1lc0Zsb3cuY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUobmV3RlBTKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcHMgfHwgdGhpcy5mcmFtZXNGbG93LmZwcztcblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBSZW5kZXJlcjtcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0dmFyIFJlbmRlcmVyQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBSZW5kZXJlckFycmF5KCkge1xuXHQgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlckFycmF5KTtcblxuXHQgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnYXJyYXknKSB0aGlzLmFyciA9IGFyZ3NbMF07ZWxzZSB0aGlzLmFyciA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQXJyYXksIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xuXHQgICAgfVxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoUmVuZGVyZXJBcnJheSwgW3tcblx0ICAgICAgICBrZXk6ICdnZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJbaV07XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3NldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldChpLCB2YWwpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnJbaV0gPSB2YWw7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwdXNoJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaCh2YWwpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnIucHVzaCh2YWwpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGkpIHtcblx0ICAgICAgICAgICAgdGhpcy5hcnJbaV0gPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyLnNwbGljZShpLCAxKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZpbHRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlcihjb25kRnVuYykge1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFJlbmRlcmVyQXJyYXkodGhpcy5hcnIuZmlsdGVyKGNvbmRGdW5jKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2VhY2gnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGNiKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5hcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICBjYihpdGVtKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICd0b0FycmF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9BcnJheSgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW1vdmUoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ25leHQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIubmV4dCgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnBhdXNlKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnBsYXkoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2xlbmd0aCcsXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFyci5sZW5ndGg7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIFJlbmRlcmVyQXJyYXk7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlckFycmF5O1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZnJhbWVzZmxvdy9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5KU09OTG9hZGVyKCk7XHJcblxyXG5jb25zdCBibGFja01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwLCBzaGluaW5lc3M6IDAgfSk7XHJcbmNvbnN0IGRhcmtNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDk5OTk5OSwgc2hpbmluZXNzOiAxMDAgfSk7XHJcbmNvbnN0IGxpZ2h0TWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHhlZWVlZWUsIHNoaW5pbmVzczogNzAgfSk7XHJcblxyXG5jb25zdCBvYmplY3RzTmFtZXMgPSBbJ2FybTEnLCAnYXJtMicsICdmaW5nZXInLCAnaGFuZCcsICdyZXN0JywgJ3JvdGF0b3InLCAnd3Jpc3QnLCAnd3Jpc3Rib25lJ107XHJcbmNvbnN0IGxvYWQgPSAob2JqZWN0TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gJy4vYXNzZXRzL29iamVjdHMvJyArIG9iamVjdE5hbWUgKyAnLmpzb24nO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QsIGVycikgPT4ge1xyXG4gICAgICAgIGxvYWRlci5sb2FkKHVybCwgKGdlb21ldHJ5LCBtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICBtYXRlcmlhbCA9IGxpZ2h0TWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09PSAnZmluZ2VyJykgbWF0ZXJpYWwgPSBibGFja01hdGVyaWFsO1xyXG4gICAgICAgICAgICBpZiAoWyd3cmlzdGJvbmUnLCAnaGFuZCcsICdhcm0xJywgJ3Jlc3QnXS5pbmNsdWRlcyhvYmplY3ROYW1lKSkgbWF0ZXJpYWwgPSBkYXJrTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIHJlc29sdmUobmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufTtcclxuY29uc3QgbG9hZEFsbE9iamVjdHNBbmRQdXRJbiA9IChvYmplY3RzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgbGV0IGxvYWRlZENvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIG9mIG9iamVjdHNOYW1lcykge1xyXG4gICAgICAgICAgICBsb2FkKG9iamVjdE5hbWUpLnRoZW4oKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdHNbb2JqZWN0TmFtZV0gPSBtZXNoO1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkQ291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmIChsb2FkZWRDb3VudCA9PT0gb2JqZWN0c05hbWVzLmxlbmd0aCkgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTtcclxuXHJcbmNsYXNzIFJvYm90IHtcclxuICAgIGNvbnN0cnVjdG9yIChyb2JvU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnJvYm9TY2VuZSA9IHJvYm9TY2VuZTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcm9ib1NjZW5lLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFydHMgPSB7fTtcclxuICAgICAgICBsb2FkQWxsT2JqZWN0c0FuZFB1dEluKHRoaXMucGFydHMpLnRoZW4odGhpcy5yZWFkeS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICAgIGZvciAobGV0IHBhcnROYW1lIGluIHRoaXMucGFydHMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucGFydHNbcGFydE5hbWVdO1xyXG4gICAgICAgICAgICBwYXJ0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICBwYXJ0LnJlY2VpdmVTaGFkb3cgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21iaW5pbmcgdGhpbmdzIHRvZ2V0aGVyXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yZXN0LmFkZCh0aGlzLnBhcnRzLnJvdGF0b3IpO1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5wb3NpdGlvbi55ID0gMztcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3IuYWRkKHRoaXMucGFydHMuYXJtMSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnBvc2l0aW9uLnkgPSAyO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5hZGQodGhpcy5wYXJ0cy5hcm0yKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIucG9zaXRpb24ueSA9IDQuNTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIuYWRkKHRoaXMucGFydHMud3Jpc3QpO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3QuYWRkKHRoaXMucGFydHMud3Jpc3Rib25lKTtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5wb3NpdGlvbi55ID0gNy41O1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnBvc2l0aW9uLnggPSAtMC4wNjtcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5hZGQodGhpcy5wYXJ0cy5oYW5kKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmhhbmQuYWRkKHRoaXMucGFydHMuZmluZ2VyKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi55ID0gMS40O1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnggPSAwLjI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueiA9IDAuMzU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueCA9IDAuMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIgPSB0aGlzLnBhcnRzLmZpbmdlci5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMucGFydHMuaGFuZC5hZGQodGhpcy5wYXJ0cy5maW5nZXIyKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueSA9IE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnBvc2l0aW9uLnggPSAtMC40O1xyXG5cclxuICAgICAgICAvLyBhZGRpbmcgcmVzdCB0byBzY2VuZVxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGFydHMucmVzdCk7XHJcblxyXG4gICAgICAgIC8vIEhpZGRlbiBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdGhpcy5yb3RhdGVZID0gLTAuNDtcclxuICAgICAgICB0aGlzLnJvdGF0ZVggPSAwO1xyXG4gICAgICAgIHRoaXMuYXJtQW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMud3Jpc3RBbmdsZSA9IC1NYXRoLlBJLzg7XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSBNYXRoLlBJLzY7XHJcblxyXG4gICAgICAgIC8vIFNldCBpbml0YWwgdmFsdWVzXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fcm90YXRlWSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkgPSB0aGlzLl9yb3RhdGVZO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54ID0gdGhpcy5fcm90YXRlWDtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCA9IHRoaXMuX2FybUFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLnggPSB0aGlzLl93cmlzdEFuZ2xlO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGU7XHJcblxyXG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVZIChkZWcpIHtcclxuICAgICAgICB0aGlzLl9yb3RhdGVZID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRlWSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVlcclxuICAgIH1cclxuICAgIHNldCByb3RhdGVYIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzMpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgNypNYXRoLlBJLzEyKTtcclxuICAgICAgICB0aGlzLl9yb3RhdGVYID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRlWCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0ZVhcclxuICAgIH1cclxuICAgIHNldCBhcm1BbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5QSSAtIGRlZztcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzEyKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIDUqTWF0aC5QSS82KTtcclxuICAgICAgICB0aGlzLl9hcm1BbmdsZSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IGFybUFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJtQW5nbGVcclxuICAgIH1cclxuICAgIHNldCB3cmlzdEFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLm1heChkZWcsIC1NYXRoLlBJLzIpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgTWF0aC5QSS8yKTtcclxuICAgICAgICB0aGlzLl93cmlzdEFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgd3Jpc3RBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dyaXN0QW5nbGVcclxuICAgIH1cclxuICAgIHNldCBncmFiQW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgMCk7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCBNYXRoLlBJKTtcclxuICAgICAgICBkZWcgLT0gTWF0aC5QSS82O1xyXG4gICAgICAgIHRoaXMuX2dyYWJBbmdsZSA9IC1kZWcvMlxyXG4gICAgfVxyXG4gICAgZ2V0IGdyYWJBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIC0oMip0aGlzLl9ncmFiQW5nbGUtTWF0aC5QSS82KVxyXG4gICAgfVxyXG4gICAgY2xvc2VHcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IDBcclxuICAgIH1cclxuICAgIG9wZW5HcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IE1hdGguUEkvMlxyXG4gICAgfVxyXG4gICAgdG9nZ2xlR3JhYiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhYkFuZ2xlID4gTWF0aC5QSS8zKSB0aGlzLmNsb3NlR3JhYigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5vcGVuR3JhYigpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnJvdGF0aW9uLnkgKz0gKHRoaXMuX3JvdGF0ZVkgLSB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLnggKz0gKHRoaXMuX3JvdGF0ZVggLSB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLnggKz0gKHRoaXMuX2FybUFuZ2xlIC0gdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLnggKz0gKHRoaXMuX3dyaXN0QW5nbGUgLSB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi56KSAvIDM7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueikgLyAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm90LmpzIiwiY2xhc3MgTmF2aWdhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSAkKHF1ZXJ5ICsgJyAuc2VsZWN0LWhpZ2hsaWdodCcpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSAkJChxdWVyeSArICcgbGknKTtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQuc3R5bGUud2lkdGggPSAxMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCArICclJztcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIGl0ZW0ub25tb3VzZW92ZXIgPSB0aGlzLm9uTW91c2VPdmVySXRlbS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlT3Zlckl0ZW0gKGUpIHtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5zdHlsZS5sZWZ0ID0gTWF0aC5mbG9vcihlLnBhZ2VYIC8gd2luZG93LmlubmVyV2lkdGggKiB0aGlzLml0ZW1zLmxlbmd0aCkgKiAxMDAgLyB0aGlzLml0ZW1zLmxlbmd0aCArICclJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvTmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=