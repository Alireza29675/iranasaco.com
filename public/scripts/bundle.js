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
exports.push([module.i, "@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 100;\n  src: url(\"./assets/fonts/IRANSansWeb_Light.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: 200;\n  src: url(\"./assets/fonts/IRANSansWeb_Medium.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: normal;\n  src: url(\"./assets/fonts/IRANSansWeb.woff\") format(\"woff\"); }\n\n@font-face {\n  font-family: \"IRANSans\";\n  font-weight: bold;\n  src: url(\"./assets/fonts/IRANSansWeb_Bold.woff\") format(\"woff\"); }\n\n* {\n  font-family: 'IRANSans', serif; }\n\n::selection {\n  background: black;\n  color: white; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body header {\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -25px #f5f5f5, 0 19px 21px -25px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px;\n      font-family: \"Segoe UI\", Arial, sans-serif; }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n  body nav {\n    position: relative;\n    margin-top: -4px;\n    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);\n    background: #2b2b2b;\n    background: linear-gradient(90deg, #555, #2b2b2b, #2b2b2b, #555);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    body nav .select-highlight {\n      position: absolute;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      width: 25%;\n      height: 100%;\n      background: #444;\n      opacity: 0;\n      transition-duration: 0.3s;\n      background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)); }\n    body nav:hover .select-highlight {\n      opacity: 1; }\n    body nav ul {\n      margin: 0;\n      padding: 0;\n      z-index: 2;\n      position: relative;\n      display: flex;\n      flex-direction: row-reverse;\n      list-style-type: none; }\n      body nav ul li {\n        flex-basis: 100%;\n        text-align: center;\n        font-size: 16px;\n        padding: 13px;\n        color: #DDD;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n        cursor: pointer;\n        transition-duration: 0.3s;\n        font-weight: 600; }\n        body nav ul li:active {\n          transform: scale(0.95);\n          opacity: 0.6; }\n  body main {\n    background: linear-gradient(#FFF, #EEE, #FFF); }\n    body main section {\n      direction: rtl;\n      width: 900px;\n      margin: auto;\n      height: 520px;\n      padding: 100px 0; }\n      body main section img {\n        float: left;\n        width: 305px; }\n      body main section article {\n        font-weight: 100;\n        font-size: 15px;\n        position: relative;\n        top: 50px; }\n        body main section article h2 {\n          background: #333;\n          display: inline-block;\n          padding: 2px 5px;\n          color: white;\n          font-weight: 600;\n          font-size: 34px;\n          margin-bottom: 10px; }\n        body main section article p {\n          line-height: 26px; }\n", ""]);

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
            this.highlight.style.left = Math.floor(e.pageX / window.innerWidth * 4) * 25 + '%';
        }
    }]);

    return Navigation;
}();

exports.default = Navigation;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmUzZmQxMzMxZDJjZWU2ODI5Y2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzP2YxYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImFwcCIsIkFwcCIsInJvYm9TY2VuZSIsIm5hdmlnYXRpb24iLCJyb2JvdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsImJpbmQiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsImV2ZW50IiwieFJhdGUiLCJwYWdlWCIsImlubmVyV2lkdGgiLCJ5UmF0ZSIsInBhZ2VZIiwiaW5uZXJIZWlnaHQiLCJyb3RhdGVZIiwiTWF0aCIsIlBJIiwicm90YXRlWCIsImFybUFuZ2xlIiwid3Jpc3RBbmdsZSIsImNsb3NlR3JhYiIsImdyYWJBbmdsZSIsInBvc3Rwcm9jZXNzaW5nIiwiYm9rZWhfcGFyYW1zIiwiem5lYXIiLCJ6ZmFyIiwic2hhZGVyRm9jdXMiLCJmc3RvcCIsIm1heGJsdXIiLCJzaG93Rm9jdXMiLCJmb2NhbERlcHRoIiwibWFudWFsZG9mIiwidmlnbmV0dGluZyIsImRlcHRoYmx1ciIsInRocmVzaG9sZCIsImdhaW4iLCJiaWFzIiwiZnJpbmdlIiwiZm9jYWxMZW5ndGgiLCJub2lzZSIsInBlbnRhZ29uIiwiZGl0aGVyaW5nIiwiUm9ib1NjZW5lIiwiY29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJpbml0Iiwib25SZXNpemUiLCJmcmFtZXNGbG93IiwicmVuZGVyIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiZm9nQ29sb3IiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJmb2ciLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsInkiLCJyb3RhdGlvbiIsIngiLCJhZGQiLCJtYXRlcmlhbF9kZXB0aCIsIk1lc2hEZXB0aE1hdGVyaWFsIiwiaW5pdFBvc3RQcm9jZXNzaW5nIiwidXBkYXRlQm9va2VoUGFyYW1zIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwic2V0U2l6ZSIsImdhbW1hSW5wdXQiLCJnYW1tYU91dHB1dCIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJyZW5kZXJSZXZlcnNlU2lkZWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJwb2ludExpZ2h0IiwiUG9pbnRMaWdodCIsImhlbWlzcGhlcmVMaWdodCIsIkhlbWlzcGhlcmVMaWdodCIsImdyaWRIZWxwZXIiLCJHcmlkSGVscGVyIiwiY2hhbmdlcyIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJib2tlaF91bmlmb3JtcyIsInZhbHVlIiwic2V0Rm9jYWxMZW5ndGgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwYXJhbXMiLCJtaW5GaWx0ZXIiLCJMaW5lYXJGaWx0ZXIiLCJtYWdGaWx0ZXIiLCJmb3JtYXQiLCJSR0JGb3JtYXQiLCJydFRleHR1cmVEZXB0aCIsIldlYkdMUmVuZGVyVGFyZ2V0IiwicnRUZXh0dXJlQ29sb3IiLCJib2tlaF9zaGFkZXIiLCJCb2tlaFNoYWRlciIsIlVuaWZvcm1zVXRpbHMiLCJjbG9uZSIsInVuaWZvcm1zIiwidGV4dHVyZSIsIm1hdGVyaWFsQm9rZWgiLCJTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiZGVmaW5lcyIsIlJJTkdTIiwiU0FNUExFUyIsInF1YWQiLCJNZXNoIiwiUGxhbmVHZW9tZXRyeSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsIm92ZXJyaWRlTWF0ZXJpYWwiLCJsb2FkZXIiLCJKU09OTG9hZGVyIiwiYmxhY2tNYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwiY29sb3IiLCJzaGluaW5lc3MiLCJkYXJrTWF0ZXJpYWwiLCJsaWdodE1hdGVyaWFsIiwib2JqZWN0c05hbWVzIiwibG9hZCIsIm9iamVjdE5hbWUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImdlb21ldHJ5IiwibWF0ZXJpYWwiLCJpbmNsdWRlcyIsImxvYWRBbGxPYmplY3RzQW5kUHV0SW4iLCJvYmplY3RzIiwibG9hZGVkQ291bnQiLCJ0aGVuIiwibWVzaCIsImxlbmd0aCIsIlJvYm90IiwiaXNSZWFkeSIsInBhcnRzIiwicmVhZHkiLCJwYXJ0TmFtZSIsInBhcnQiLCJjYXN0U2hhZG93IiwicmVjZWl2ZVNoYWRvdyIsInJlc3QiLCJyb3RhdG9yIiwiYXJtMSIsImFybTIiLCJ3cmlzdCIsIndyaXN0Ym9uZSIsImhhbmQiLCJmaW5nZXIiLCJmaW5nZXIyIiwiY29uc29sZSIsImxvZyIsIl9yb3RhdGVZIiwiX3JvdGF0ZVgiLCJfYXJtQW5nbGUiLCJfd3Jpc3RBbmdsZSIsIl9ncmFiQW5nbGUiLCJvcGVuR3JhYiIsImRlZyIsIm1heCIsIm1pbiIsIk5hdmlnYXRpb24iLCJoaWdobGlnaHQiLCJpdGVtcyIsIml0ZW0iLCJvbm1vdXNlb3ZlciIsIm9uTW91c2VPdmVySXRlbSIsInN0eWxlIiwibGVmdCIsImZsb29yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBQ0E7Ozs7OztBQUVBQSxPQUFPQyxDQUFQLEdBQVcsVUFBQ0MsS0FBRDtBQUFBLFNBQVdDLFNBQVNDLGFBQVQsQ0FBdUJGLEtBQXZCLENBQVg7QUFBQSxDQUFYO0FBQ0FGLE9BQU9LLEVBQVAsR0FBWSxVQUFDSCxLQUFEO0FBQUEsU0FBV0MsU0FBU0csZ0JBQVQsQ0FBMEJKLEtBQTFCLENBQVg7QUFBQSxDQUFaOztBQUVBRixPQUFPTyxHQUFQLEdBQWEsbUJBQWIsQzs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkE7QUFDQTs7O0FBR0E7QUFDQSxxQ0FBc0MsOEJBQThCLHFCQUFxQix5RUFBeUUsRUFBRSxnQkFBZ0IsOEJBQThCLHFCQUFxQiwwRUFBMEUsRUFBRSxnQkFBZ0IsOEJBQThCLHdCQUF3QixtRUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVA7Ozt3Q0FDZ0JzRixDLEVBQUc7QUFDaEIsaUJBQUt3RixTQUFMLENBQWVLLEtBQWYsQ0FBcUJDLElBQXJCLEdBQTRCekssS0FBSzBLLEtBQUwsQ0FBVy9GLEVBQUVqRixLQUFGLEdBQVVuQixPQUFPb0IsVUFBakIsR0FBOEIsQ0FBekMsSUFBOEMsRUFBOUMsR0FBbUQsR0FBL0U7QUFDSDs7Ozs7O2tCQUdVdUssVSIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZlM2ZkMTMzMWQyY2VlNjgyOWNmIiwiaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9zY3JpcHRzL0FwcCdcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxyXG53aW5kb3cuJCQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpXHJcblxyXG53aW5kb3cuYXBwID0gbmV3IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8tdXJsIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/LXVybCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPy11cmwhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX0xpZ2h0LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJUkFOU2Fuc1xcXCI7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL0lSQU5TYW5zV2ViX01lZGl1bS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9JUkFOU2Fuc1dlYi53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSVJBTlNhbnNcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvSVJBTlNhbnNXZWJfQm9sZC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7IH1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnSVJBTlNhbnMnLCBzZXJpZjsgfVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuICBib2R5IGhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICBib2R5IGhlYWRlciBoMSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTUlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjcpLCB0cmFuc3BhcmVudCk7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgLTE5cHggMjFweCAtMjVweCAjZjVmNWY1LCAwIDE5cHggMjFweCAtMjVweCAjZjVmNWY1O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMTAwcHg7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjsgfVxcbiAgICBib2R5IGhlYWRlciBjYW52YXMge1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjNjY2KTsgfVxcbiAgYm9keSBuYXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IC00cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYmFja2dyb3VuZDogIzJiMmIyYjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNTU1LCAjMmIyYjJiLCAjMmIyYjJiLCAjNTU1KTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICBib2R5IG5hdiAuc2VsZWN0LWhpZ2hsaWdodCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogIzQ0NDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpOyB9XFxuICAgIGJvZHkgbmF2OmhvdmVyIC5zZWxlY3QtaGlnaGxpZ2h0IHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAgIGJvZHkgbmF2IHVsIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG4gICAgICBib2R5IG5hdiB1bCBsaSB7XFxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgcGFkZGluZzogMTNweDtcXG4gICAgICAgIGNvbG9yOiAjREREO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAgICAgICBib2R5IG5hdiB1bCBsaTphY3RpdmUge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7IH1cXG4gIGJvZHkgbWFpbiB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRkZGLCAjRUVFLCAjRkZGKTsgfVxcbiAgICBib2R5IG1haW4gc2VjdGlvbiB7XFxuICAgICAgZGlyZWN0aW9uOiBydGw7XFxuICAgICAgd2lkdGg6IDkwMHB4O1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICBoZWlnaHQ6IDUyMHB4O1xcbiAgICAgIHBhZGRpbmc6IDEwMHB4IDA7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbiBpbWcge1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICB3aWR0aDogMzA1cHg7IH1cXG4gICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IDUwcHg7IH1cXG4gICAgICAgIGJvZHkgbWFpbiBzZWN0aW9uIGFydGljbGUgaDIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgICAgICBib2R5IG1haW4gc2VjdGlvbiBhcnRpY2xlIHAge1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/LXVybCEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUm9ib1NjZW5lIGZyb20gJy4vUm9ib1NjZW5lJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib1NjZW5lID0gbmV3IFJvYm9TY2VuZSgnYm9keSA+IGhlYWRlcicpO1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKCdib2R5ID4gbmF2Jyk7XHJcbiAgICAgICAgdGhpcy5yb2JvdCA9IHRoaXMucm9ib1NjZW5lLnJvYm90O1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIG9uTW91c2VNb3ZlIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHhSYXRlID0gZXZlbnQucGFnZVggLyB3aW5kb3cuaW5uZXJXaWR0aCAtIDAuNTtcclxuICAgICAgICBjb25zdCB5UmF0ZSA9IGV2ZW50LnBhZ2VZIC8gd2luZG93LmlubmVySGVpZ2h0IC0gMC41O1xyXG4gICAgICAgIHRoaXMucm9ib3Qucm90YXRlWSA9IHhSYXRlICogTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVggPSB5UmF0ZSAqIE1hdGguUEkvMyAtIE1hdGguUEkvNjtcclxuICAgICAgICB0aGlzLnJvYm90LmFybUFuZ2xlID0geVJhdGUgKiBNYXRoLlBJLzIgKyAwLjA1O1xyXG4gICAgICAgIHRoaXMucm9ib3Qud3Jpc3RBbmdsZSA9IHlSYXRlICogLU1hdGguUEkvM1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZURvd24gKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QuY2xvc2VHcmFiKClcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCAoKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvdC5ncmFiQW5nbGUgPSAwLjVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvQXBwLmpzIiwiaW1wb3J0ICdmcmFtZXNmbG93J1xyXG5pbXBvcnQgUm9ib3QgZnJvbSAnLi9Sb2JvdCdcclxuXHJcbnZhciBwb3N0cHJvY2Vzc2luZyA9IHt9O1xyXG52YXIgYm9rZWhfcGFyYW1zID0ge1xyXG4gICAgem5lYXI6IDAuMSxcclxuICAgIHpmYXI6IDEwLFxyXG4gICAgc2hhZGVyRm9jdXM6IGZhbHNlLFxyXG4gICAgZnN0b3A6IDIwLFxyXG4gICAgbWF4Ymx1cjogMixcclxuICAgIHNob3dGb2N1czogZmFsc2UsXHJcbiAgICBmb2NhbERlcHRoOiAxLjQsXHJcbiAgICBtYW51YWxkb2Y6IGZhbHNlLFxyXG4gICAgdmlnbmV0dGluZzogZmFsc2UsXHJcbiAgICBkZXB0aGJsdXI6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQgOiAwLjUsXHJcbiAgICBnYWluOiAwLjIsXHJcbiAgICBiaWFzOiAyLFxyXG4gICAgZnJpbmdlOiAzLFxyXG4gICAgZm9jYWxMZW5ndGg6IDIwLFxyXG4gICAgbm9pc2U6IHRydWUsXHJcbiAgICBwZW50YWdvbjogZmFsc2UsXHJcbiAgICBkaXRoZXJpbmc6IDBcclxufTtcclxuXHJcbmNsYXNzIFJvYm9TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDYwMDtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBmcmFtZXNGbG93LnJlbmRlcih0aGlzLnJlbmRlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgU2NlbmVcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgY29uc3QgZm9nQ29sb3IgPSAweGYzZjNmMztcclxuICAgICAgICB0aGlzLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoZm9nQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZyhmb2dDb2xvciwgNCwgNTApO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIENhbWVyYVxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDEsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEzO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAxO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdGF0aW9uLnggPSAwLjI1O1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcclxuICAgICAgICAvLyBQb3N0IFByb2NjZXNzaW5nXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbF9kZXB0aCA9IG5ldyBUSFJFRS5NZXNoRGVwdGhNYXRlcmlhbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb29rZWhQYXJhbXMoKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBSZW5kZXJlclxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFJbnB1dCAgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dCA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkICA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5yZW5kZXJSZXZlcnNlU2lkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIExpZ2h0c1xyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAwLjUpOyAvLyBQb2ludFxyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodC5wb3NpdGlvbi56ID0gMTA7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wb2ludExpZ2h0KTtcclxuICAgICAgICB0aGlzLmhlbWlzcGhlcmVMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoIDB4ZmZmZmZmLCAweDAwMDAwMCwgMSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuaGVtaXNwaGVyZUxpZ2h0KTtcclxuICAgICAgICAvLyBDcmVhdGluZyBncm91bmRcclxuICAgICAgICB0aGlzLmdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlciggNzAsIDQ1ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ncmlkSGVscGVyKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBSb2JvdFxyXG4gICAgICAgIHRoaXMucm9ib3QgPSBuZXcgUm9ib3QodGhpcylcclxuICAgIH1cclxuICAgIHNldEJvb2tlaFBhcmFtIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2tlaF9wYXJhbXMsIGNoYW5nZXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQm9va2VoUGFyYW1zKClcclxuICAgIH1cclxuICAgIHVwZGF0ZUJvb2tlaFBhcmFtcyAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBpbiBib2tlaF9wYXJhbXMpIGlmKGUgaW4gcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMpIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW2VdLnZhbHVlID0gYm9rZWhfcGFyYW1zW2VdO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1wiem5lYXJcIl0udmFsdWUgPSBib2tlaF9wYXJhbXMuem5lYXI7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ6ZmFyXCJdLnZhbHVlID0gYm9rZWhfcGFyYW1zLnpmYXI7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0Rm9jYWxMZW5ndGgoIGJva2VoX3BhcmFtcy5mb2NhbExlbmd0aCApXHJcbiAgICB9XHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcgKCkge1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lICA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgLTYwLCA2MCApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lLmFkZCggcG9zdHByb2Nlc3NpbmcuY2FtZXJhICk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcclxuICAgICAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcbiAgICAgICAgICAgIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgcGFyYW1zICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMgKTtcclxuICAgICAgICBsZXQgYm9rZWhfc2hhZGVyID0gVEhSRUUuQm9rZWhTaGFkZXI7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBib2tlaF9zaGFkZXIudW5pZm9ybXMgKTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tcInRDb2xvclwiXS52YWx1ZSA9IHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yLnRleHR1cmU7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0RGVwdGhcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aC50ZXh0dXJlO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widGV4dHVyZVdpZHRoXCIgXS52YWx1ZSA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0ZXh0dXJlSGVpZ2h0XCJdLnZhbHVlID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICB1bmlmb3JtczogcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMsXHJcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYm9rZWhfc2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGJva2VoX3NoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICAgICAgZGVmaW5lczogeyBSSU5HUzogMywgU0FNUExFUzogMn1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSwgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCApO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lLmFkZCggcG9zdHByb2Nlc3NpbmcucXVhZCApO1xyXG5cdH1cclxuICAgIG9uUmVzaXplICgpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gcG9zdHByb2Nlc3NpbmcuY2FtZXJhLmFzcGVjdCA9IHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xyXG5cdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvciwgdHJ1ZSk7XHJcblx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsX2RlcHRoO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoLCB0cnVlKTtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHBvc3Rwcm9jZXNzaW5nLnNjZW5lLCBwb3N0cHJvY2Vzc2luZy5jYW1lcmEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvYm9TY2VuZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm9TY2VuZS5qcyIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9GcmFtZXNGbG93ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXHR2YXIgX0ZyYW1lc0Zsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRnJhbWVzRmxvdyk7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHQvLyBkZWZpbmluZyBmcmFtZXNGbG93IGFzIGEgZ2xvYmFsIG9iamVjdFxuXHRpZiAoISh3aW5kb3cuZnJhbWVzRmxvdyBpbnN0YW5jZW9mIF9GcmFtZXNGbG93Mi5kZWZhdWx0KSkge1xuXHQgICAgLy8gaWYgaXQgZGlkbid0IGRlZmluZSBiZWZvcmVcblx0ICAgIHdpbmRvdy5mcmFtZXNGbG93ID0gbmV3IF9GcmFtZXNGbG93Mi5kZWZhdWx0KCk7XG5cdH1cblxuXHQvLyBleHBvcnRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gd2luZG93LmZyYW1lc0Zsb3c7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0dmFyIF9SZW5kZXJlckFycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuXHR2YXIgX1JlbmRlcmVyQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyZXJBcnJheSk7XG5cblx0dmFyIF9SZW5kZXJlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0dmFyIF9SZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJlcik7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdC8vIENvbXBhdGliaWxpdHkgZm9yIGFsbCBicm93c2VycyAtIFBhdWwgSXJpc2ggdmVyc2lvblxuXHR3aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0ICAgIH07XG5cdH1cblxuXHQvLyBGcmFtZXNGbG93XG5cdCgpO1xuXHR2YXIgRnJhbWVzRmxvdyA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIEZyYW1lc0Zsb3coKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyYW1lc0Zsb3cpO1xuXG5cdCAgICAgICAgdGhpcy5mcmFtZXMgPSAwO1xuXHQgICAgICAgIHRoaXMuX2ZwcyA9IDMwO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucyA9IHtcblx0ICAgICAgICAgICAgbWluaW11bUFjY2VwdGFibGVGUFM6IDMwXG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnJlbmRlcmVycyA9IG5ldyBfUmVuZGVyZXJBcnJheTIuZGVmYXVsdCgpO1xuXHQgICAgICAgIHRoaXMucGVyZm9ybWFuY2UgPSB7XG5cdCAgICAgICAgICAgIGxvZ3M6IG5ldyBBcnJheSgxMDApLFxuXHQgICAgICAgICAgICBsb2dzUG9pbnRlcjogMCxcblx0ICAgICAgICAgICAgbGFzdFRpbWVTdGFtcDogdW5kZWZpbmVkLFxuXHQgICAgICAgICAgICBsYXN0RnJhbWVGUFM6IDMwLFxuXHQgICAgICAgICAgICByYXRpbzogMSxcblx0ICAgICAgICAgICAgc3RhdHVzOiAwLFxuXHQgICAgICAgICAgICBhdmVyYWdlOiB7XG5cdCAgICAgICAgICAgICAgICBmcHM6IDMwLFxuXHQgICAgICAgICAgICAgICAgcmF0aW86IDEsXG5cdCAgICAgICAgICAgICAgICBzdGF0dXM6IDBcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICAgICAgdGhpcy5yZXF1ZXN0TG9vcCgpO1xuXHQgICAgfVxuXG5cdCAgICBfY3JlYXRlQ2xhc3MoRnJhbWVzRmxvdywgW3tcblx0ICAgICAgICBrZXk6ICdnZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoaWQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmdldChpZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdnZXRBbGxCeUNsYXNzJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsQnlDbGFzcyhjbGFzc05hbWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXJzLmZpbHRlcihmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5jbGFzcyA9PSBjbGFzc05hbWU7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmVSZW5kZXJlckJ5SWQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVSZW5kZXJlckJ5SWQoaWQpIHtcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMucmVtb3ZlKGlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShyYXRlKSB7XG5cdCAgICAgICAgICAgIHZhciBpc0dsb2JhbENoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuXHQgICAgICAgICAgICB2YXIgZXJyb3IgPSBudWxsO1xuXHQgICAgICAgICAgICB2YXIgcG9pbnRlciA9IGlzR2xvYmFsQ2hlY2sgPyAnYW55JyA6ICd0aGlzJztcblx0ICAgICAgICAgICAgaWYgKHJhdGUgPCAwKSBlcnJvciA9ICdGUFMgbXVzdCBub3QgYmUgYSBuZWdhdGl2ZSBudW1iZXIhJztlbHNlIGlmIChyYXRlIDwgMzAgJiYgcmF0ZSA+IDAgJiYgMzAgLyByYXRlICUgMSAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIGxlc3MgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6ICgzMCAvIEZQUykgc2hvdWxkIGJlIGludGVnZXInO2Vsc2UgaWYgKHJhdGUgPiAzMCAmJiByYXRlICUgMzAgIT09IDApIGVycm9yID0gJ2lmIEZQUyBpcyBtb3JlIHRoYW4gMzBmcHMsIGl0IGhhdmUgdG8gYmUgbGlrZSB0aGlzOiAoRlBTICUgMzAgPT0gMCknO1xuXHQgICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHRocm93ICdjYW5cXCd0IHNldCAnICsgcmF0ZSArICdmcHMgZm9yIHRoaXMgcmVuZGVyZXIuIFJFQVNPTjogPCcgKyBlcnJvciArICc+Jztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheUFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXlBbGwoKSB7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5nZXRBbGxSZW5kZXJlcnMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5wbGF5KCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2VBbGwnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZUFsbCgpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5nZXRBbGxSZW5kZXJlcnMoKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IF9zdGVwMi52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5wYXVzZSgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoY2xhc3NOYW1lLCBmdW5jKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIGZ1bmMgPSBjbGFzc05hbWU7XG5cdCAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX1JlbmRlcmVyMi5kZWZhdWx0KHRoaXMsIHtcblx0ICAgICAgICAgICAgICAgIGlkOiB0aGlzLnJlbmRlcmVycy5sZW5ndGgsXG5cdCAgICAgICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG5cdCAgICAgICAgICAgIH0sIGZ1bmMpO1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdvbkxhZycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uTGFnKG1pbmltdW1GUFMsIGNhbGxiYWNrKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgbWluaW11bUZQUyA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjayA9IG1pbmltdW1GUFM7ZWxzZSB0aGlzLm9wdGlvbnMubWluaW11bUFjY2VwdGFibGVGUFMgPSBtaW5pbXVtRlBTO1xuXHQgICAgICAgICAgICB0aGlzLm9uTGFnQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVnaXN0ZXJQZXJmb3JtYW5jZUxvZycsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyUGVyZm9ybWFuY2VMb2cocmVuZGVyVGltZSkge1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBmcHNcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPSAxMDAwIC8gcmVuZGVyVGltZTtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgbGFnc1xuXHQgICAgICAgICAgICBpZiAodGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgPCB0aGlzLm9wdGlvbnMubWluaW11bUFjY2VwdGFibGVGUFMpIGlmICh0eXBlb2YgdGhpcy5vbkxhZ0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB0aGlzLm9uTGFnQ2FsbGJhY2sodGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFNcblx0ICAgICAgICAgICAgLy8gbG9nZ2luZ1xuXHQgICAgICAgICAgICApO3RoaXMucGVyZm9ybWFuY2UubG9nc1t0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyXSA9IHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxvZ3NQb2ludGVyID0gKHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgKyAxKSAlIDEwMDtcblx0ICAgICAgICAgICAgLy8gYW5hbHl6aW5nIGxvZ3Ncblx0ICAgICAgICAgICAgdGhpcy5hbmFseXplUGVyZm9ybWFuY2UoKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnYW5hbHl6ZVBlcmZvcm1hbmNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYW5hbHl6ZVBlcmZvcm1hbmNlKCkge1xuXHQgICAgICAgICAgICB2YXIgYWxsRGF0YSA9IHRoaXMucGVyZm9ybWFuY2UubG9ncy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PSAnbnVtYmVyJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBhdmVyYWdlIG9mIGRhdGFcblx0ICAgICAgICAgICAgKTt2YXIgRlBTU3VtID0gMDtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gYWxsRGF0YVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gX3N0ZXAzLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIEZQU1N1bSArPSBkYXRhO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMgPSBGUFNTdW0gLyBhbGxEYXRhLmxlbmd0aDtcblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgcGVyZm9ybWFuY2UgcGVyY2VudGFnZVxuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLnJhdGlvID0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMgLyAzMDtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnJhdGlvID0gdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyAvIDMwO1xuXHQgICAgICAgICAgICAvLyBkZWZpbmluZyBzdGF0dXNcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyk7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5zdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPZkZQUyh0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnX2dldFN0YXR1c09mRlBTJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFN0YXR1c09mRlBTKGZwcykge1xuXHQgICAgICAgICAgICB2YXIgcmF0aW8gPSBmcHMgLyB0aGlzLmZwcztcblx0ICAgICAgICAgICAgdmFyIHN0YXR1cyA9IC0zOyAvLyBXT1JTVFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjMpIHN0YXR1cyA9IC0yOyAvLyBCQURcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMC42KSBzdGF0dXMgPSAtMTsgLy8gTk9UIEJBRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjkpIHN0YXR1cyA9IDA7IC8vIE9LXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDEuMykgc3RhdHVzID0gMTsgLy8gR09PRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAxLjYpIHN0YXR1cyA9IDI7IC8vIEVYQ0VMTEVOVFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAyKSBzdGF0dXMgPSAzOyAvLyBCRVNUXG5cdCAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlcXVlc3RMb29wJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdExvb3AoKSB7XG5cdCAgICAgICAgICAgIHJlcXVlc3RBbmltRnJhbWUodGhpcy5yZXF1ZXN0TG9vcC5iaW5kKHRoaXMpKTtcblx0ICAgICAgICAgICAgdGhpcy5mcmFtZXMrKztcblx0ICAgICAgICAgICAgdGhpcy5yZW5kZXJlcnMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5yZWdpc3RlclBlcmZvcm1hbmNlTG9nKERhdGUubm93KCkgLSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXApO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxhc3RUaW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnBzO1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKHJhdGUsIHRydWUpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gRnJhbWVzRmxvdztcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IEZyYW1lc0Zsb3c7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBmdW5jdGlvbiBSZW5kZXJlcihmcmFtZXNGbG93LCBvcHRpb25zLCBmdW5jKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuXHQgICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuXHQgICAgICAgIHRoaXMuY2xhc3MgPSBvcHRpb25zLmNsYXNzIHx8ICcnO1xuXHQgICAgICAgIHRoaXMucHJvcHMgPSB7XG5cdCAgICAgICAgICAgIGlzRGVidWdpbmc6IGZhbHNlXG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLmZyYW1lc0Zsb3cgPSBmcmFtZXNGbG93O1xuXHQgICAgICAgIHRoaXMuX2ZwcyA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB0aGlzLmZ1bmMgPSBmdW5jO1xuXHQgICAgICAgIHRoaXMuZnJhbWVzID0gMDtcblx0ICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IGZhbHNlO1xuXHQgICAgICAgIHRoaXMucmVuZGVyKCk7XG5cdCAgICB9XG5cdCAgICAvLyBSZW5kZXIgbmV4dCBmcmFtZVxuXG5cblx0ICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlciwgW3tcblx0ICAgICAgICBrZXk6ICduZXh0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSB0cnVlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5yZW1vdmVSZW5kZXJlckJ5SWQodGhpcy5pZCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWJ1Z2luZyA9IHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuXHQgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVidWdpbmcgPSBmYWxzZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnc2hvdWxkUmVuZGVyVGhpc0ZyYW1lJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkUmVuZGVyVGhpc0ZyYW1lKCkge1xuXHQgICAgICAgICAgICAvLyBhbGwgY29uZGl0aW9ucyB0byBwYXVzZSBvciBwbGF5IHJlbmRlcmluZ1xuXHQgICAgICAgICAgICB2YXIgY29uZGl0aW9ucyA9IFshdGhpcy5wcm9wcy5pc0RlYnVnaW5nLCB0aGlzLmZyYW1lc0Zsb3cuZnJhbWVzICUgKDMwIC8gTWF0aC5taW4odGhpcy5mcHMsIDMwKSkgPT0gMF07XG5cdCAgICAgICAgICAgIHZhciByZXQgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGNvbmRpdGlvbnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSBfc3RlcC52YWx1ZTtcblx0ICAgICAgICAgICAgICAgICAgICByZXQgPSByZXQgJiYgY29uZDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiByZXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEZyYW1lT2JqZWN0VG9SZXR1cm4nLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGcmFtZU9iamVjdFRvUmV0dXJuKCkge1xuXHQgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgcmVuZGVyZXI6IHRoaXMsXG5cdCAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5mcmFtZXMsXG5cdCAgICAgICAgICAgICAgICBmcHM6IHRoaXMuZnBzLFxuXHQgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2U6IHtcblx0ICAgICAgICAgICAgICAgICAgICBmcHM6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFMsXG5cdCAgICAgICAgICAgICAgICAgICAgcmF0aW86IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5yYXRpbyxcblx0ICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuZnJhbWVzRmxvdy5wZXJmb3JtYW5jZS5zdGF0dXMsXG5cdCAgICAgICAgICAgICAgICAgICAgYXZlcmFnZTogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmF2ZXJhZ2Vcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVuZGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICAgICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJUaGlzRnJhbWUoKSB8fCB0aGlzLnNob3VsZEdvTmV4dCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbiA9IDA7XG5cdCAgICAgICAgICAgICAgICBpZiAodGhpcy5mcHMgPiAzMCkgaXRlcmF0aW9uID0gTWF0aC5tYXgodGhpcy5mcHMsIDMwKSAvIDMwO2Vsc2UgaXRlcmF0aW9uID0gMzAgLyB0aGlzLmZwcztcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lcysrO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5mdW5jKHRoaXMuZ2V0RnJhbWVPYmplY3RUb1JldHVybigpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICBpZiAobmV3RlBTID09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuX2ZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVzRmxvdy5jaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZShuZXdGUFMpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZwcyB8fCB0aGlzLmZyYW1lc0Zsb3cuZnBzO1xuXHQgICAgICAgIH1cblx0ICAgIH1dKTtcblxuXHQgICAgcmV0dXJuIFJlbmRlcmVyO1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICAgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuXHR2YXIgUmVuZGVyZXJBcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFJlbmRlcmVyQXJyYXkoKSB7XG5cdCAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyQXJyYXkpO1xuXG5cdCAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0ICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdhcnJheScpIHRoaXMuYXJyID0gYXJnc1swXTtlbHNlIHRoaXMuYXJyID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShBcnJheSwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG5cdCAgICB9XG5cblx0ICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlckFycmF5LCBbe1xuXHQgICAgICAgIGtleTogJ2dldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChpKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFycltpXTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnc2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGksIHZhbCkge1xuXHQgICAgICAgICAgICB0aGlzLmFycltpXSA9IHZhbDtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3B1c2gnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKHZhbCkge1xuXHQgICAgICAgICAgICB0aGlzLmFyci5wdXNoKHZhbCk7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW1vdmUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoaSkge1xuXHQgICAgICAgICAgICB0aGlzLmFycltpXSA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgdGhpcy5hcnIuc3BsaWNlKGksIDEpO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZmlsdGVyJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyKGNvbmRGdW5jKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXJBcnJheSh0aGlzLmFyci5maWx0ZXIoY29uZEZ1bmMpKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZWFjaCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goY2IpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIGNiKGl0ZW0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3RvQXJyYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b0FycmF5KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnI7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbW92ZSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnbmV4dCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5uZXh0KCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucGF1c2UoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BsYXknLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucGxheSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnbGVuZ3RoJyxcblx0ICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aDtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZnBzJyxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmZwcyA9IG5ld0ZQUztcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gUmVuZGVyZXJBcnJheTtcblx0fSgpO1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyQXJyYXk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mcmFtZXNmbG93L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLkpTT05Mb2FkZXIoKTtcclxuXHJcbmNvbnN0IGJsYWNrTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwMDAsIHNoaW5pbmVzczogMCB9KTtcclxuY29uc3QgZGFya01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4OTk5OTk5LCBzaGluaW5lc3M6IDEwMCB9KTtcclxuY29uc3QgbGlnaHRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGVlZWVlZSwgc2hpbmluZXNzOiA3MCB9KTtcclxuXHJcbmNvbnN0IG9iamVjdHNOYW1lcyA9IFsnYXJtMScsICdhcm0yJywgJ2ZpbmdlcicsICdoYW5kJywgJ3Jlc3QnLCAncm90YXRvcicsICd3cmlzdCcsICd3cmlzdGJvbmUnXTtcclxuY29uc3QgbG9hZCA9IChvYmplY3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSAnLi9hc3NldHMvb2JqZWN0cy8nICsgb2JqZWN0TmFtZSArICcuanNvbic7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgbG9hZGVyLmxvYWQodXJsLCAoZ2VvbWV0cnksIG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsID0gbGlnaHRNYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT09ICdmaW5nZXInKSBtYXRlcmlhbCA9IGJsYWNrTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgIGlmIChbJ3dyaXN0Ym9uZScsICdoYW5kJywgJ2FybTEnLCAncmVzdCddLmluY2x1ZGVzKG9iamVjdE5hbWUpKSBtYXRlcmlhbCA9IGRhcmtNYXRlcmlhbDtcclxuICAgICAgICAgICAgcmVzb2x2ZShuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59O1xyXG5jb25zdCBsb2FkQWxsT2JqZWN0c0FuZFB1dEluID0gKG9iamVjdHMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBlcnIpID0+IHtcclxuICAgICAgICBsZXQgbG9hZGVkQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IG9iamVjdE5hbWUgb2Ygb2JqZWN0c05hbWVzKSB7XHJcbiAgICAgICAgICAgIGxvYWQob2JqZWN0TmFtZSkudGhlbigobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0c1tvYmplY3ROYW1lXSA9IG1lc2g7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRlZENvdW50ID09PSBvYmplY3RzTmFtZXMubGVuZ3RoKSByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuY2xhc3MgUm9ib3Qge1xyXG4gICAgY29uc3RydWN0b3IgKHJvYm9TY2VuZSkge1xyXG4gICAgICAgIHRoaXMucm9ib1NjZW5lID0gcm9ib1NjZW5lO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSByb2JvU2NlbmUuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXJ0cyA9IHt9O1xyXG4gICAgICAgIGxvYWRBbGxPYmplY3RzQW5kUHV0SW4odGhpcy5wYXJ0cykudGhlbih0aGlzLnJlYWR5LmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcGFydE5hbWUgaW4gdGhpcy5wYXJ0cykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1twYXJ0TmFtZV07XHJcbiAgICAgICAgICAgIHBhcnQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIHBhcnQucmVjZWl2ZVNoYWRvdyA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbWJpbmluZyB0aGluZ3MgdG9nZXRoZXJcclxuICAgICAgICB0aGlzLnBhcnRzLnJlc3QuYWRkKHRoaXMucGFydHMucm90YXRvcik7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5yb3RhdG9yLnBvc2l0aW9uLnkgPSAzO1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5hZGQodGhpcy5wYXJ0cy5hcm0xKTtcclxuICAgICAgICB0aGlzLnBhcnRzLmFybTEucG9zaXRpb24ueSA9IDI7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLmFkZCh0aGlzLnBhcnRzLmFybTIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5wb3NpdGlvbi55ID0gNC41O1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5hZGQodGhpcy5wYXJ0cy53cmlzdCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdC5hZGQodGhpcy5wYXJ0cy53cmlzdGJvbmUpO1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnBvc2l0aW9uLnkgPSA3LjU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucG9zaXRpb24ueCA9IC0wLjA2O1xyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLmFkZCh0aGlzLnBhcnRzLmhhbmQpO1xyXG4gICAgICAgIHRoaXMucGFydHMuaGFuZC5hZGQodGhpcy5wYXJ0cy5maW5nZXIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnkgPSAxLjQ7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueCA9IDAuMjtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi56ID0gMC4zNTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5yb3RhdGlvbi54ID0gMC4yO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMiA9IHRoaXMucGFydHMuZmluZ2VyLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5oYW5kLmFkZCh0aGlzLnBhcnRzLmZpbmdlcjIpO1xyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi55ID0gTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucG9zaXRpb24ueCA9IC0wLjQ7XHJcblxyXG4gICAgICAgIC8vIGFkZGluZyByZXN0IHRvIHNjZW5lXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wYXJ0cy5yZXN0KTtcclxuXHJcbiAgICAgICAgLy8gSGlkZGVuIHBhcmFtZXRlcnNcclxuICAgICAgICB0aGlzLnJvdGF0ZVkgPSAtMC40O1xyXG4gICAgICAgIHRoaXMucm90YXRlWCA9IDA7XHJcbiAgICAgICAgdGhpcy5hcm1BbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy53cmlzdEFuZ2xlID0gLU1hdGguUEkvODtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IE1hdGguUEkvNjtcclxuXHJcbiAgICAgICAgLy8gU2V0IGluaXRhbCB2YWx1ZXNcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9yb3RhdGVZKTtcclxuICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSA9IHRoaXMuX3JvdGF0ZVk7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLnggPSB0aGlzLl9yb3RhdGVYO1xyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5yb3RhdGlvbi54ID0gdGhpcy5fYXJtQW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCA9IHRoaXMuX3dyaXN0QW5nbGU7XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueiA9IHRoaXMuX2dyYWJBbmdsZTtcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueiA9IHRoaXMuX2dyYWJBbmdsZTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgc2V0IHJvdGF0ZVkgKGRlZykge1xyXG4gICAgICAgIHRoaXMuX3JvdGF0ZVkgPSBkZWdcclxuICAgIH1cclxuICAgIGdldCByb3RhdGVZICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRlWVxyXG4gICAgfVxyXG4gICAgc2V0IHJvdGF0ZVggKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMyk7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCA3Kk1hdGguUEkvMTIpO1xyXG4gICAgICAgIHRoaXMuX3JvdGF0ZVggPSBkZWdcclxuICAgIH1cclxuICAgIGdldCByb3RhdGVYICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRlWFxyXG4gICAgfVxyXG4gICAgc2V0IGFybUFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLlBJIC0gZGVnO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMTIpO1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgNSpNYXRoLlBJLzYpO1xyXG4gICAgICAgIHRoaXMuX2FybUFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgYXJtQW5nbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcm1BbmdsZVxyXG4gICAgfVxyXG4gICAgc2V0IHdyaXN0QW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMik7XHJcbiAgICAgICAgZGVnID0gTWF0aC5taW4oZGVnLCBNYXRoLlBJLzIpO1xyXG4gICAgICAgIHRoaXMuX3dyaXN0QW5nbGUgPSBkZWdcclxuICAgIH1cclxuICAgIGdldCB3cmlzdEFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd3Jpc3RBbmdsZVxyXG4gICAgfVxyXG4gICAgc2V0IGdyYWJBbmdsZSAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAwKTtcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIE1hdGguUEkpO1xyXG4gICAgICAgIGRlZyAtPSBNYXRoLlBJLzY7XHJcbiAgICAgICAgdGhpcy5fZ3JhYkFuZ2xlID0gLWRlZy8yXHJcbiAgICB9XHJcbiAgICBnZXQgZ3JhYkFuZ2xlICgpIHtcclxuICAgICAgICByZXR1cm4gLSgyKnRoaXMuX2dyYWJBbmdsZS1NYXRoLlBJLzYpXHJcbiAgICB9XHJcbiAgICBjbG9zZUdyYWIgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhYkFuZ2xlID0gMFxyXG4gICAgfVxyXG4gICAgb3BlbkdyYWIgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhYkFuZ2xlID0gTWF0aC5QSS8yXHJcbiAgICB9XHJcbiAgICB0b2dnbGVHcmFiICgpIHtcclxuICAgICAgICBpZiAodGhpcy5ncmFiQW5nbGUgPiBNYXRoLlBJLzMpIHRoaXMuY2xvc2VHcmFiKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLm9wZW5HcmFiKClcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSArPSAodGhpcy5fcm90YXRlWSAtIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmFybTEucm90YXRpb24ueCArPSAodGhpcy5fcm90YXRlWCAtIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54KSAvIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCArPSAodGhpcy5fYXJtQW5nbGUgLSB0aGlzLnBhcnRzLmFybTIucm90YXRpb24ueCkgLyAzMDtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCArPSAodGhpcy5fd3Jpc3RBbmdsZSAtIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLngpIC8gMzA7XHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnogKz0gKHRoaXMuX2dyYWJBbmdsZSAtIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnopIC8gMztcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnogKz0gKHRoaXMuX2dyYWJBbmdsZSAtIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56KSAvIDNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvYm90XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvUm9ib3QuanMiLCJjbGFzcyBOYXZpZ2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9ICQocXVlcnkgKyAnIC5zZWxlY3QtaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9ICQkKHF1ZXJ5ICsgJyBsaScpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIGl0ZW0ub25tb3VzZW92ZXIgPSB0aGlzLm9uTW91c2VPdmVySXRlbS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlT3Zlckl0ZW0gKGUpIHtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodC5zdHlsZS5sZWZ0ID0gTWF0aC5mbG9vcihlLnBhZ2VYIC8gd2luZG93LmlubmVyV2lkdGggKiA0KSAqIDI1ICsgJyUnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9OYXZpZ2F0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==