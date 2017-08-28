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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./index.sass");
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
exports.push([module.i, "* {\n  font-family: \"Segoe UI\", Arial, sans-serif; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n  body header {\n    position: relative; }\n    body header h1 {\n      position: absolute;\n      top: 55%;\n      left: 50%;\n      margin: 0;\n      transform: translateX(-50%) translateY(-50%);\n      background: black;\n      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.7), transparent);\n      color: white;\n      text-shadow: 0 0 5px white;\n      box-shadow: 0 -19px 21px -23px #f5f5f5, 0 19px 21px -23px #f5f5f5;\n      font-weight: 100;\n      font-size: 35px;\n      padding: 10px 100px;\n      white-space: nowrap;\n      text-transform: uppercase;\n      letter-spacing: 10px; }\n    body header canvas {\n      background: linear-gradient(#fff, #666); }\n", ""]);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.roboScene = new _RoboScene2.default('body > header');
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
            var light = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
            this.scene.add(light);
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
        key: 'changes',
        value: function changes() {}
    }, {
        key: 'render',
        value: function render(frame) {
            this.changes();
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

        ;
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmVhZjkzZjU5MGZhMzJiMmU3ZWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9pbmRleC5zYXNzPzUwNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9Sb2JvdC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcHAiLCJBcHAiLCJyb2JvU2NlbmUiLCJyb2JvdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsImJpbmQiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsImV2ZW50IiwieFJhdGUiLCJwYWdlWCIsImlubmVyV2lkdGgiLCJ5UmF0ZSIsInBhZ2VZIiwiaW5uZXJIZWlnaHQiLCJyb3RhdGVZIiwiTWF0aCIsIlBJIiwicm90YXRlWCIsImFybUFuZ2xlIiwid3Jpc3RBbmdsZSIsImNsb3NlR3JhYiIsImdyYWJBbmdsZSIsInBvc3Rwcm9jZXNzaW5nIiwiYm9rZWhfcGFyYW1zIiwiem5lYXIiLCJ6ZmFyIiwic2hhZGVyRm9jdXMiLCJmc3RvcCIsIm1heGJsdXIiLCJzaG93Rm9jdXMiLCJmb2NhbERlcHRoIiwibWFudWFsZG9mIiwidmlnbmV0dGluZyIsImRlcHRoYmx1ciIsInRocmVzaG9sZCIsImdhaW4iLCJiaWFzIiwiZnJpbmdlIiwiZm9jYWxMZW5ndGgiLCJub2lzZSIsInBlbnRhZ29uIiwiZGl0aGVyaW5nIiwiUm9ib1NjZW5lIiwiY29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJpbml0Iiwib25SZXNpemUiLCJmcmFtZXNGbG93IiwicmVuZGVyIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiZm9nQ29sb3IiLCJiYWNrZ3JvdW5kIiwiQ29sb3IiLCJmb2ciLCJGb2ciLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsInkiLCJyb3RhdGlvbiIsIngiLCJhZGQiLCJtYXRlcmlhbF9kZXB0aCIsIk1lc2hEZXB0aE1hdGVyaWFsIiwiaW5pdFBvc3RQcm9jZXNzaW5nIiwidXBkYXRlQm9va2VoUGFyYW1zIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwic2V0U2l6ZSIsImdhbW1hSW5wdXQiLCJnYW1tYU91dHB1dCIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJyZW5kZXJSZXZlcnNlU2lkZWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJwb2ludExpZ2h0IiwiUG9pbnRMaWdodCIsImxpZ2h0IiwiSGVtaXNwaGVyZUxpZ2h0IiwiZ3JpZEhlbHBlciIsIkdyaWRIZWxwZXIiLCJjaGFuZ2VzIiwiT2JqZWN0IiwiYXNzaWduIiwiZSIsImJva2VoX3VuaWZvcm1zIiwidmFsdWUiLCJzZXRGb2NhbExlbmd0aCIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBhcmFtcyIsIm1pbkZpbHRlciIsIkxpbmVhckZpbHRlciIsIm1hZ0ZpbHRlciIsImZvcm1hdCIsIlJHQkZvcm1hdCIsInJ0VGV4dHVyZURlcHRoIiwiV2ViR0xSZW5kZXJUYXJnZXQiLCJydFRleHR1cmVDb2xvciIsImJva2VoX3NoYWRlciIsIkJva2VoU2hhZGVyIiwiVW5pZm9ybXNVdGlscyIsImNsb25lIiwidW5pZm9ybXMiLCJ0ZXh0dXJlIiwibWF0ZXJpYWxCb2tlaCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJkZWZpbmVzIiwiUklOR1MiLCJTQU1QTEVTIiwicXVhZCIsIk1lc2giLCJQbGFuZUdlb21ldHJ5IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImZyYW1lIiwiY2xlYXIiLCJvdmVycmlkZU1hdGVyaWFsIiwibG9hZGVyIiwiSlNPTkxvYWRlciIsImJsYWNrTWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIiwic2hpbmluZXNzIiwiZGFya01hdGVyaWFsIiwibGlnaHRNYXRlcmlhbCIsIm9iamVjdHNOYW1lcyIsImxvYWQiLCJvYmplY3ROYW1lIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwiaW5jbHVkZXMiLCJsb2FkQWxsT2JqZWN0c0FuZFB1dEluIiwib2JqZWN0cyIsImxvYWRlZENvdW50IiwidGhlbiIsIm1lc2giLCJsZW5ndGgiLCJSb2JvdCIsImlzUmVhZHkiLCJwYXJ0cyIsInJlYWR5IiwicGFydE5hbWUiLCJwYXJ0IiwiY2FzdFNoYWRvdyIsInJlY2VpdmVTaGFkb3ciLCJyZXN0Iiwicm90YXRvciIsImFybTEiLCJhcm0yIiwid3Jpc3QiLCJ3cmlzdGJvbmUiLCJoYW5kIiwiZmluZ2VyIiwiZmluZ2VyMiIsImNvbnNvbGUiLCJsb2ciLCJfcm90YXRlWSIsIl9yb3RhdGVYIiwiX2FybUFuZ2xlIiwiX3dyaXN0QW5nbGUiLCJfZ3JhYkFuZ2xlIiwib3BlbkdyYWIiLCJkZWciLCJtYXgiLCJtaW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEdBQUwsQ0FBU0QsR0FBVCxFQUFjLENBQUNoSyxLQUFLQyxFQUFOLEdBQVMsQ0FBdkIsQ0FBTjtBQUNBK0osa0JBQU1oSyxLQUFLa0ssR0FBTCxDQUFTRixHQUFULEVBQWNoSyxLQUFLQyxFQUFMLEdBQVEsQ0FBdEIsQ0FBTjtBQUNBLGlCQUFLNEosV0FBTCxHQUFtQkcsR0FBbkI7QUFDSCxTOzRCQUNpQjtBQUNkLG1CQUFPLEtBQUtILFdBQVo7QUFDSDs7OzBCQUNjRyxHLEVBQUs7QUFDaEJBLGtCQUFNaEssS0FBS2lLLEdBQUwsQ0FBU0QsR0FBVCxFQUFjLENBQWQsQ0FBTjtBQUNBQSxrQkFBTWhLLEtBQUtrSyxHQUFMLENBQVNGLEdBQVQsRUFBY2hLLEtBQUtDLEVBQW5CLENBQU47QUFDQStKLG1CQUFPaEssS0FBS0MsRUFBTCxHQUFRLENBQWY7QUFDQSxpQkFBSzZKLFVBQUwsR0FBa0IsQ0FBQ0UsR0FBRCxHQUFLLENBQXZCO0FBQ0gsUzs0QkFDZ0I7QUFDYixtQkFBTyxFQUFFLElBQUUsS0FBS0YsVUFBUCxHQUFrQjlKLEtBQUtDLEVBQUwsR0FBUSxDQUE1QixDQUFQO0FBQ0g7Ozs7OztrQkF1QlVzSSxLIiwiZmlsZSI6Ii4vcHVibGljL3NjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmVhZjkzZjU5MGZhMzJiMmU3ZWEiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvaW5kZXguc2FzcydcclxuaW1wb3J0IEFwcCBmcm9tICcuL3NjcmlwdHMvQXBwJ1xyXG5cclxud2luZG93LiQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSlcclxuXHJcbndpbmRvdy5hcHAgPSBuZXcgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Fzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNhc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlc2hlZXRzL2luZGV4LnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cXG4gIGJvZHkgaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIGJvZHkgaGVhZGVyIGgxIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1NSU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNyksIHRyYW5zcGFyZW50KTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XFxuICAgICAgYm94LXNoYWRvdzogMCAtMTlweCAyMXB4IC0yM3B4ICNmNWY1ZjUsIDAgMTlweCAyMXB4IC0yM3B4ICNmNWY1ZjU7XFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgcGFkZGluZzogMTBweCAxMDBweDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7IH1cXG4gICAgYm9keSBoZWFkZXIgY2FudmFzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgIzY2Nik7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Fzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb2JvU2NlbmUgZnJvbSAnLi9Sb2JvU2NlbmUnXHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib1NjZW5lID0gbmV3IFJvYm9TY2VuZSgnYm9keSA+IGhlYWRlcicpXHJcbiAgICAgICAgdGhpcy5yb2JvdCA9IHRoaXMucm9ib1NjZW5lLnJvYm90XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIG9uTW91c2VNb3ZlIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHhSYXRlID0gZXZlbnQucGFnZVggLyB3aW5kb3cuaW5uZXJXaWR0aCAtIDAuNVxyXG4gICAgICAgIGNvbnN0IHlSYXRlID0gZXZlbnQucGFnZVkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgLSAwLjVcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVkgPSB4UmF0ZSAqIE1hdGguUElcclxuICAgICAgICB0aGlzLnJvYm90LnJvdGF0ZVggPSB5UmF0ZSAqIE1hdGguUEkvMyAtIE1hdGguUEkvNlxyXG4gICAgICAgIHRoaXMucm9ib3QuYXJtQW5nbGUgPSB5UmF0ZSAqIE1hdGguUEkvMiArIDAuMDVcclxuICAgICAgICB0aGlzLnJvYm90LndyaXN0QW5nbGUgPSB5UmF0ZSAqIC1NYXRoLlBJLzNcclxuICAgIH1cclxuICAgIG9uTW91c2VEb3duICgpIHtcclxuICAgICAgICB0aGlzLnJvYm90LmNsb3NlR3JhYigpXHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAgKCkge1xyXG4gICAgICAgIHRoaXMucm9ib3QuZ3JhYkFuZ2xlID0gMC41XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL0FwcC5qcyIsImltcG9ydCAnZnJhbWVzZmxvdydcclxuaW1wb3J0IFJvYm90IGZyb20gJy4vUm9ib3QnXHJcblxyXG52YXIgcG9zdHByb2Nlc3NpbmcgPSB7fVxyXG52YXIgYm9rZWhfcGFyYW1zID0ge1xyXG4gICAgem5lYXI6IDAuMSxcclxuICAgIHpmYXI6IDEwLFxyXG4gICAgc2hhZGVyRm9jdXM6IGZhbHNlLFxyXG4gICAgZnN0b3A6IDIwLFxyXG4gICAgbWF4Ymx1cjogMixcclxuICAgIHNob3dGb2N1czogZmFsc2UsXHJcbiAgICBmb2NhbERlcHRoOiAxLjQsXHJcbiAgICBtYW51YWxkb2Y6IGZhbHNlLFxyXG4gICAgdmlnbmV0dGluZzogZmFsc2UsXHJcbiAgICBkZXB0aGJsdXI6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQgOiAwLjUsXHJcbiAgICBnYWluOiAwLjIsXHJcbiAgICBiaWFzOiAyLFxyXG4gICAgZnJpbmdlOiAzLFxyXG4gICAgZm9jYWxMZW5ndGg6IDIwLFxyXG4gICAgbm9pc2U6IHRydWUsXHJcbiAgICBwZW50YWdvbjogZmFsc2UsXHJcbiAgICBkaXRoZXJpbmc6IDBcclxufVxyXG5cclxuY2xhc3MgUm9ib1NjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDYwMFxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSlcclxuICAgICAgICBmcmFtZXNGbG93LnJlbmRlcih0aGlzLnJlbmRlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgU2NlbmVcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcclxuICAgICAgICBjb25zdCBmb2dDb2xvciA9IDB4ZjNmM2YzXHJcbiAgICAgICAgdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKGZvZ0NvbG9yKVxyXG4gICAgICAgIHRoaXMuc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZyhmb2dDb2xvciwgNCwgNTApXHJcbiAgICAgICAgLy8gQ3JlYXRpbmcgQ2FtZXJhXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMSwgMzAwKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxM1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAxXHJcbiAgICAgICAgdGhpcy5jYW1lcmEucm90YXRpb24ueCA9IDAuMjVcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSlcclxuICAgICAgICAvLyBQb3N0IFByb2NjZXNzaW5nXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbF9kZXB0aCA9IG5ldyBUSFJFRS5NZXNoRGVwdGhNYXRlcmlhbCgpXHJcbiAgICAgICAgdGhpcy5pbml0UG9zdFByb2Nlc3NpbmcoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQm9va2VoUGFyYW1zKClcclxuICAgICAgICAvLyBDcmVhdGluZyBSZW5kZXJlclxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KVxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmdhbW1hSW5wdXQgID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCAgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAucmVuZGVyUmV2ZXJzZVNpZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgIC8vIENyZWF0aW5nIExpZ2h0c1xyXG4gICAgICAgIHRoaXMucG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAwLjUpIC8vIFBvaW50XHJcbiAgICAgICAgdGhpcy5wb2ludExpZ2h0LnBvc2l0aW9uLnogPSAxMFxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucG9pbnRMaWdodClcclxuICAgICAgICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KCAweGZmZmZmZiwgMHgwMDAwMDAsIDEgKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCggbGlnaHQgKTtcclxuICAgICAgICAvLyBDcmVhdGluZyBncm91bmRcclxuICAgICAgICB0aGlzLmdyaWRIZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlciggNzAsIDQ1ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoIHRoaXMuZ3JpZEhlbHBlciApO1xyXG4gICAgICAgIC8vIENyZWF0aW5nIFJvYm90XHJcbiAgICAgICAgdGhpcy5yb2JvdCA9IG5ldyBSb2JvdCh0aGlzKVxyXG4gICAgfVxyXG4gICAgc2V0Qm9va2VoUGFyYW0gKGNoYW5nZXMpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGJva2VoX3BhcmFtcywgY2hhbmdlcylcclxuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tlaFBhcmFtcygpXHJcbiAgICB9XHJcbiAgICB1cGRhdGVCb29rZWhQYXJhbXMgKCkge1xyXG4gICAgICAgIGZvciAobGV0IGUgaW4gYm9rZWhfcGFyYW1zKSBpZihlIGluIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zKSBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3Jtc1tlXS52YWx1ZSA9IGJva2VoX3BhcmFtc1tlXVxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ6bmVhclwiXS52YWx1ZSA9IGJva2VoX3BhcmFtcy56bmVhclxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1wiemZhclwiXS52YWx1ZSA9IGJva2VoX3BhcmFtcy56ZmFyXHJcbiAgICAgICAgdGhpcy5jYW1lcmEuc2V0Rm9jYWxMZW5ndGgoIGJva2VoX3BhcmFtcy5mb2NhbExlbmd0aCApXHJcbiAgICB9XHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcgKCkge1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnNjZW5lICA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC10aGlzLndpZHRoIC8gMiwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgLXRoaXMuaGVpZ2h0IC8gMiwgLTYwLCA2MCApXHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmcuc2NlbmUuYWRkKCBwb3N0cHJvY2Vzc2luZy5jYW1lcmEgKVxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdFxyXG4gICAgICAgIH1cclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHBhcmFtcyApXHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcucnRUZXh0dXJlQ29sb3IgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBwYXJhbXMgKVxyXG4gICAgICAgIHZhciBib2tlaF9zaGFkZXIgPSBUSFJFRS5Cb2tlaFNoYWRlcjtcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5ib2tlaF91bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGJva2VoX3NoYWRlci51bmlmb3JtcyApXHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0Q29sb3JcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVDb2xvci50ZXh0dXJlXHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0RGVwdGhcIl0udmFsdWUgPSBwb3N0cHJvY2Vzc2luZy5ydFRleHR1cmVEZXB0aC50ZXh0dXJlXHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXNbXCJ0ZXh0dXJlV2lkdGhcIiBdLnZhbHVlID0gdGhpcy53aWR0aFxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLmJva2VoX3VuaWZvcm1zW1widGV4dHVyZUhlaWdodFwiXS52YWx1ZSA9IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgcG9zdHByb2Nlc3NpbmcubWF0ZXJpYWxCb2tlaCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICB1bmlmb3JtczogcG9zdHByb2Nlc3NpbmcuYm9rZWhfdW5pZm9ybXMsXHJcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYm9rZWhfc2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGJva2VoX3NoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICAgICAgZGVmaW5lczogeyBSSU5HUzogMywgU0FNUExFUzogMn1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLCBwb3N0cHJvY2Vzc2luZy5tYXRlcmlhbEJva2VoICk7XHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmcuc2NlbmUuYWRkKCBwb3N0cHJvY2Vzc2luZy5xdWFkICk7XHJcblx0fVxyXG4gICAgb25SZXNpemUgKCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHBvc3Rwcm9jZXNzaW5nLmNhbWVyYS5hc3BlY3QgPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHRcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgY2hhbmdlcyAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKGZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VzKClcclxuICAgICAgICB0aGlzLnJvYm90LnJlbmRlcigpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpXHJcblx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZUNvbG9yLCB0cnVlKVxyXG5cdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbF9kZXB0aFxyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHBvc3Rwcm9jZXNzaW5nLnJ0VGV4dHVyZURlcHRoLCB0cnVlKVxyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIocG9zdHByb2Nlc3Npbmcuc2NlbmUsIHBvc3Rwcm9jZXNzaW5nLmNhbWVyYSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9ib1NjZW5lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvUm9ib1NjZW5lLmpzIiwiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHR2YXIgX0ZyYW1lc0Zsb3cgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cdHZhciBfRnJhbWVzRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GcmFtZXNGbG93KTtcblxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cdC8vIGRlZmluaW5nIGZyYW1lc0Zsb3cgYXMgYSBnbG9iYWwgb2JqZWN0XG5cdGlmICghKHdpbmRvdy5mcmFtZXNGbG93IGluc3RhbmNlb2YgX0ZyYW1lc0Zsb3cyLmRlZmF1bHQpKSB7XG5cdCAgICAvLyBpZiBpdCBkaWRuJ3QgZGVmaW5lIGJlZm9yZVxuXHQgICAgd2luZG93LmZyYW1lc0Zsb3cgPSBuZXcgX0ZyYW1lc0Zsb3cyLmRlZmF1bHQoKTtcblx0fVxuXG5cdC8vIGV4cG9ydFxuXHRleHBvcnRzLmRlZmF1bHQgPSB3aW5kb3cuZnJhbWVzRmxvdztcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHR2YXIgX1JlbmRlcmVyQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5cdHZhciBfUmVuZGVyZXJBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJlckFycmF5KTtcblxuXHR2YXIgX1JlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHR2YXIgX1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyKTtcblxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cblx0Ly8gQ29tcGF0aWJpbGl0eSBmb3IgYWxsIGJyb3dzZXJzIC0gUGF1bCBJcmlzaCB2ZXJzaW9uXG5cdHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHQgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuXHQgICAgfTtcblx0fVxuXG5cdC8vIEZyYW1lc0Zsb3dcblx0KCk7XG5cdHZhciBGcmFtZXNGbG93ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gRnJhbWVzRmxvdygpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRnJhbWVzRmxvdyk7XG5cblx0ICAgICAgICB0aGlzLmZyYW1lcyA9IDA7XG5cdCAgICAgICAgdGhpcy5fZnBzID0gMzA7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuXHQgICAgICAgICAgICBtaW5pbXVtQWNjZXB0YWJsZUZQUzogMzBcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMucmVuZGVyZXJzID0gbmV3IF9SZW5kZXJlckFycmF5Mi5kZWZhdWx0KCk7XG5cdCAgICAgICAgdGhpcy5wZXJmb3JtYW5jZSA9IHtcblx0ICAgICAgICAgICAgbG9nczogbmV3IEFycmF5KDEwMCksXG5cdCAgICAgICAgICAgIGxvZ3NQb2ludGVyOiAwLFxuXHQgICAgICAgICAgICBsYXN0VGltZVN0YW1wOiB1bmRlZmluZWQsXG5cdCAgICAgICAgICAgIGxhc3RGcmFtZUZQUzogMzAsXG5cdCAgICAgICAgICAgIHJhdGlvOiAxLFxuXHQgICAgICAgICAgICBzdGF0dXM6IDAsXG5cdCAgICAgICAgICAgIGF2ZXJhZ2U6IHtcblx0ICAgICAgICAgICAgICAgIGZwczogMzAsXG5cdCAgICAgICAgICAgICAgICByYXRpbzogMSxcblx0ICAgICAgICAgICAgICAgIHN0YXR1czogMFxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB0aGlzLnJlcXVlc3RMb29wKCk7XG5cdCAgICB9XG5cblx0ICAgIF9jcmVhdGVDbGFzcyhGcmFtZXNGbG93LCBbe1xuXHQgICAgICAgIGtleTogJ2dldCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldChpZCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZ2V0KGlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0QWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsKCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2dldEFsbEJ5Q2xhc3MnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxCeUNsYXNzKGNsYXNzTmFtZSkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcnMuZmlsdGVyKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmNsYXNzID09IGNsYXNzTmFtZTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZVJlbmRlcmVyQnlJZCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVJlbmRlcmVyQnlJZChpZCkge1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5yZW1vdmUoaWQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdjaGVja1ZhbGlkYXRpb25PZkZyYW1lUmF0ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKHJhdGUpIHtcblx0ICAgICAgICAgICAgdmFyIGlzR2xvYmFsQ2hlY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG5cdCAgICAgICAgICAgIHZhciBlcnJvciA9IG51bGw7XG5cdCAgICAgICAgICAgIHZhciBwb2ludGVyID0gaXNHbG9iYWxDaGVjayA/ICdhbnknIDogJ3RoaXMnO1xuXHQgICAgICAgICAgICBpZiAocmF0ZSA8IDApIGVycm9yID0gJ0ZQUyBtdXN0IG5vdCBiZSBhIG5lZ2F0aXZlIG51bWJlciEnO2Vsc2UgaWYgKHJhdGUgPCAzMCAmJiByYXRlID4gMCAmJiAzMCAvIHJhdGUgJSAxICE9PSAwKSBlcnJvciA9ICdpZiBGUFMgaXMgbGVzcyB0aGFuIDMwZnBzLCBpdCBoYXZlIHRvIGJlIGxpa2UgdGhpczogKDMwIC8gRlBTKSBzaG91bGQgYmUgaW50ZWdlcic7ZWxzZSBpZiAocmF0ZSA+IDMwICYmIHJhdGUgJSAzMCAhPT0gMCkgZXJyb3IgPSAnaWYgRlBTIGlzIG1vcmUgdGhhbiAzMGZwcywgaXQgaGF2ZSB0byBiZSBsaWtlIHRoaXM6IChGUFMgJSAzMCA9PSAwKSc7XG5cdCAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkgdGhyb3cgJ2NhblxcJ3Qgc2V0ICcgKyByYXRlICsgJ2ZwcyBmb3IgdGhpcyByZW5kZXJlci4gUkVBU09OOiA8JyArIGVycm9yICsgJz4nO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwbGF5QWxsJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGxheUFsbCgpIHtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0ICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmdldEFsbFJlbmRlcmVycygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBsYXkoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdCAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdwYXVzZUFsbCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlQWxsKCkge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB0aGlzLmdldEFsbFJlbmRlcmVycygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gX3N0ZXAyLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyLnBhdXNlKCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihjbGFzc05hbWUsIGZ1bmMpIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgZnVuYyA9IGNsYXNzTmFtZTtcblx0ICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICcnO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfUmVuZGVyZXIyLmRlZmF1bHQodGhpcywge1xuXHQgICAgICAgICAgICAgICAgaWQ6IHRoaXMucmVuZGVyZXJzLmxlbmd0aCxcblx0ICAgICAgICAgICAgICAgIGNsYXNzOiBjbGFzc05hbWVcblx0ICAgICAgICAgICAgfSwgZnVuYyk7XG5cdCAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuXHQgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXI7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ29uTGFnJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25MYWcobWluaW11bUZQUywgY2FsbGJhY2spIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBtaW5pbXVtRlBTID09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gbWluaW11bUZQUztlbHNlIHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUyA9IG1pbmltdW1GUFM7XG5cdCAgICAgICAgICAgIHRoaXMub25MYWdDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZWdpc3RlclBlcmZvcm1hbmNlTG9nJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJQZXJmb3JtYW5jZUxvZyhyZW5kZXJUaW1lKSB7XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGZwc1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA9IDEwMDAgLyByZW5kZXJUaW1lO1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBsYWdzXG5cdCAgICAgICAgICAgIGlmICh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyA8IHRoaXMub3B0aW9ucy5taW5pbXVtQWNjZXB0YWJsZUZQUykgaWYgKHR5cGVvZiB0aGlzLm9uTGFnQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHRoaXMub25MYWdDYWxsYmFjayh0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQU1xuXHQgICAgICAgICAgICAvLyBsb2dnaW5nXG5cdCAgICAgICAgICAgICk7dGhpcy5wZXJmb3JtYW5jZS5sb2dzW3RoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXJdID0gdGhpcy5wZXJmb3JtYW5jZS5sYXN0RnJhbWVGUFM7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubG9nc1BvaW50ZXIgPSAodGhpcy5wZXJmb3JtYW5jZS5sb2dzUG9pbnRlciArIDEpICUgMTAwO1xuXHQgICAgICAgICAgICAvLyBhbmFseXppbmcgbG9nc1xuXHQgICAgICAgICAgICB0aGlzLmFuYWx5emVQZXJmb3JtYW5jZSgpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdhbmFseXplUGVyZm9ybWFuY2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmFseXplUGVyZm9ybWFuY2UoKSB7XG5cdCAgICAgICAgICAgIHZhciBhbGxEYXRhID0gdGhpcy5wZXJmb3JtYW5jZS5sb2dzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBkYXRhID09ICdudW1iZXInO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0aW5nIGF2ZXJhZ2Ugb2YgZGF0YVxuXHQgICAgICAgICAgICApO3ZhciBGUFNTdW0gPSAwO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuXHQgICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBhbGxEYXRhW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBfc3RlcDMudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgRlBTU3VtICs9IGRhdGE7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcblx0ICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLmZwcyA9IEZQU1N1bSAvIGFsbERhdGEubGVuZ3RoO1xuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGluZyBwZXJmb3JtYW5jZSBwZXJjZW50YWdlXG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyAvIDMwO1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UucmF0aW8gPSB0aGlzLnBlcmZvcm1hbmNlLmF2ZXJhZ2UuZnBzIC8gMzA7XG5cdCAgICAgICAgICAgIC8vIGRlZmluaW5nIHN0YXR1c1xuXHQgICAgICAgICAgICB0aGlzLnBlcmZvcm1hbmNlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UubGFzdEZyYW1lRlBTKTtcblx0ICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZS5hdmVyYWdlLnN0YXR1cyA9IHRoaXMuX2dldFN0YXR1c09mRlBTKHRoaXMucGVyZm9ybWFuY2UuYXZlcmFnZS5mcHMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdfZ2V0U3RhdHVzT2ZGUFMnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0U3RhdHVzT2ZGUFMoZnBzKSB7XG5cdCAgICAgICAgICAgIHZhciByYXRpbyA9IGZwcyAvIHRoaXMuZnBzO1xuXHQgICAgICAgICAgICB2YXIgc3RhdHVzID0gLTM7IC8vIFdPUlNUXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuMykgc3RhdHVzID0gLTI7IC8vIEJBRFxuXHQgICAgICAgICAgICBpZiAocmF0aW8gPiAwLjYpIHN0YXR1cyA9IC0xOyAvLyBOT1QgQkFEXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDAuOSkgc3RhdHVzID0gMDsgLy8gT0tcblx0ICAgICAgICAgICAgaWYgKHJhdGlvID4gMS4zKSBzdGF0dXMgPSAxOyAvLyBHT09EXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDEuNikgc3RhdHVzID0gMjsgLy8gRVhDRUxMRU5UXG5cdCAgICAgICAgICAgIGlmIChyYXRpbyA+IDIpIHN0YXR1cyA9IDM7IC8vIEJFU1Rcblx0ICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVxdWVzdExvb3AnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0TG9vcCgpIHtcblx0ICAgICAgICAgICAgcmVxdWVzdEFuaW1GcmFtZSh0aGlzLnJlcXVlc3RMb29wLmJpbmQodGhpcykpO1xuXHQgICAgICAgICAgICB0aGlzLmZyYW1lcysrO1xuXHQgICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcigpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICAgICAgaWYgKHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCAhPT0gdW5kZWZpbmVkKSB0aGlzLnJlZ2lzdGVyUGVyZm9ybWFuY2VMb2coRGF0ZS5ub3coKSAtIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCk7XG5cdCAgICAgICAgICAgIHRoaXMucGVyZm9ybWFuY2UubGFzdFRpbWVTdGFtcCA9IERhdGUubm93KCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcHM7XG5cdCAgICAgICAgfSxcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdGUFMpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tWYWxpZGF0aW9uT2ZGcmFtZVJhdGUocmF0ZSwgdHJ1ZSk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBGcmFtZXNGbG93O1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gRnJhbWVzRmxvdztcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdHZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIGZ1bmN0aW9uIFJlbmRlcmVyKGZyYW1lc0Zsb3csIG9wdGlvbnMsIGZ1bmMpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG5cdCAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XG5cdCAgICAgICAgdGhpcy5jbGFzcyA9IG9wdGlvbnMuY2xhc3MgfHwgJyc7XG5cdCAgICAgICAgdGhpcy5wcm9wcyA9IHtcblx0ICAgICAgICAgICAgaXNEZWJ1Z2luZzogZmFsc2Vcblx0ICAgICAgICB9O1xuXHQgICAgICAgIHRoaXMuZnJhbWVzRmxvdyA9IGZyYW1lc0Zsb3c7XG5cdCAgICAgICAgdGhpcy5fZnBzID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIHRoaXMuZnVuYyA9IGZ1bmM7XG5cdCAgICAgICAgdGhpcy5mcmFtZXMgPSAwO1xuXHQgICAgICAgIHRoaXMuc2hvdWxkR29OZXh0ID0gZmFsc2U7XG5cdCAgICAgICAgdGhpcy5yZW5kZXIoKTtcblx0ICAgIH1cblx0ICAgIC8vIFJlbmRlciBuZXh0IGZyYW1lXG5cblxuXHQgICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyLCBbe1xuXHQgICAgICAgIGtleTogJ25leHQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgICAgICAgICB0aGlzLnNob3VsZEdvTmV4dCA9IHRydWU7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5mcmFtZXNGbG93LnJlbW92ZVJlbmRlcmVyQnlJZCh0aGlzLmlkKTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGF1c2UnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcblx0ICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlYnVnaW5nID0gdHJ1ZTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdCAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWJ1Z2luZyA9IGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdzaG91bGRSZW5kZXJUaGlzRnJhbWUnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRSZW5kZXJUaGlzRnJhbWUoKSB7XG5cdCAgICAgICAgICAgIC8vIGFsbCBjb25kaXRpb25zIHRvIHBhdXNlIG9yIHBsYXkgcmVuZGVyaW5nXG5cdCAgICAgICAgICAgIHZhciBjb25kaXRpb25zID0gWyF0aGlzLnByb3BzLmlzRGVidWdpbmcsIHRoaXMuZnJhbWVzRmxvdy5mcmFtZXMgJSAoMzAgLyBNYXRoLm1pbih0aGlzLmZwcywgMzApKSA9PSAwXTtcblx0ICAgICAgICAgICAgdmFyIHJldCA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0ICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gY29uZGl0aW9uc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9IF9zdGVwLnZhbHVlO1xuXHQgICAgICAgICAgICAgICAgICAgIHJldCA9IHJldCAmJiBjb25kO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcblx0ICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcblx0ICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHQgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHJldDtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAnZ2V0RnJhbWVPYmplY3RUb1JldHVybicsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZyYW1lT2JqZWN0VG9SZXR1cm4oKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICByZW5kZXJlcjogdGhpcyxcblx0ICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmZyYW1lcyxcblx0ICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcHMsXG5cdCAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZToge1xuXHQgICAgICAgICAgICAgICAgICAgIGZwczogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLmxhc3RGcmFtZUZQUyxcblx0ICAgICAgICAgICAgICAgICAgICByYXRpbzogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnJhdGlvLFxuXHQgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5mcmFtZXNGbG93LnBlcmZvcm1hbmNlLnN0YXR1cyxcblx0ICAgICAgICAgICAgICAgICAgICBhdmVyYWdlOiB0aGlzLmZyYW1lc0Zsb3cucGVyZm9ybWFuY2UuYXZlcmFnZVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlbmRlclRoaXNGcmFtZSgpIHx8IHRoaXMuc2hvdWxkR29OZXh0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaXRlcmF0aW9uID0gMDtcblx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmZwcyA+IDMwKSBpdGVyYXRpb24gPSBNYXRoLm1heCh0aGlzLmZwcywgMzApIC8gMzA7ZWxzZSBpdGVyYXRpb24gPSAzMCAvIHRoaXMuZnBzO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb247IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVzKys7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG91bGRHb05leHQgPSBmYWxzZTtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bmModGhpcy5nZXRGcmFtZU9iamVjdFRvUmV0dXJuKCkpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ2ZwcycsXG5cdCAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3RlBTKSB7XG5cdCAgICAgICAgICAgIGlmIChuZXdGUFMgPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5fZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5mcmFtZXNGbG93LmNoZWNrVmFsaWRhdGlvbk9mRnJhbWVSYXRlKG5ld0ZQUyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9mcHMgPSBuZXdGUFM7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnBzIHx8IHRoaXMuZnJhbWVzRmxvdy5mcHM7XG5cdCAgICAgICAgfVxuXHQgICAgfV0pO1xuXG5cdCAgICByZXR1cm4gUmVuZGVyZXI7XG5cdH0oKTtcblxuXHRleHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdHZhciBSZW5kZXJlckFycmF5ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgZnVuY3Rpb24gUmVuZGVyZXJBcnJheSgpIHtcblx0ICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXJBcnJheSk7XG5cblx0ICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2FycmF5JykgdGhpcy5hcnIgPSBhcmdzWzBdO2Vsc2UgdGhpcy5hcnIgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KEFycmF5LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcblx0ICAgIH1cblxuXHQgICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyQXJyYXksIFt7XG5cdCAgICAgICAga2V5OiAnZ2V0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdzZXQnLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoaSwgdmFsKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyW2ldID0gdmFsO1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncHVzaCcsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2godmFsKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyLnB1c2godmFsKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3JlbW92ZScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShpKSB7XG5cdCAgICAgICAgICAgIHRoaXMuYXJyW2ldID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB0aGlzLmFyci5zcGxpY2UoaSwgMSk7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmaWx0ZXInLFxuXHQgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXIoY29uZEZ1bmMpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBSZW5kZXJlckFycmF5KHRoaXMuYXJyLmZpbHRlcihjb25kRnVuYykpO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdlYWNoJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFjaChjYikge1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdCAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuXHQgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gX3N0ZXAudmFsdWU7XG5cdCAgICAgICAgICAgICAgICAgICAgY2IoaXRlbSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHQgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdCAgICAgICAgICAgIH0gZmluYWxseSB7XG5cdCAgICAgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAndG9BcnJheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmFycjtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncmVtb3ZlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVtb3ZlKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICduZXh0Jyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLm5leHQoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSwge1xuXHQgICAgICAgIGtleTogJ3BhdXNlJyxcblx0ICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5wYXVzZSgpO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9LCB7XG5cdCAgICAgICAga2V5OiAncGxheScsXG5cdCAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5wbGF5KCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdsZW5ndGgnLFxuXHQgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnIubGVuZ3RoO1xuXHQgICAgICAgIH1cblx0ICAgIH0sIHtcblx0ICAgICAgICBrZXk6ICdmcHMnLFxuXHQgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0ZQUykge1xuXHQgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHJlbmRlcmVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIuZnBzID0gbmV3RlBTO1xuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9XSk7XG5cblx0ICAgIHJldHVybiBSZW5kZXJlckFycmF5O1xuXHR9KCk7XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXJBcnJheTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZyYW1lc2Zsb3cvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuSlNPTkxvYWRlcigpXHJcblxyXG5jb25zdCBibGFja01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwLCBzaGluaW5lc3M6IDAgfSlcclxuY29uc3QgZGFya01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4OTk5OTk5LCBzaGluaW5lc3M6IDEwMCB9KVxyXG5jb25zdCBsaWdodE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ZWVlZWVlLCBzaGluaW5lc3M6IDcwIH0pXHJcblxyXG5jb25zdCBvYmplY3RzTmFtZXMgPSBbJ2FybTEnLCAnYXJtMicsICdmaW5nZXInLCAnaGFuZCcsICdyZXN0JywgJ3JvdGF0b3InLCAnd3Jpc3QnLCAnd3Jpc3Rib25lJ11cclxuY29uc3QgbG9hZCA9IChvYmplY3ROYW1lKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSAnLi9hc3NldHMvb2JqZWN0cy8nICsgb2JqZWN0TmFtZSArICcuanNvbidcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBlcnIpID0+IHtcclxuICAgICAgICBsb2FkZXIubG9hZCh1cmwsIChnZW9tZXRyeSwgbWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwgPSBsaWdodE1hdGVyaWFsXHJcbiAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09PSAnZmluZ2VyJykgbWF0ZXJpYWwgPSBibGFja01hdGVyaWFsXHJcbiAgICAgICAgICAgIGlmIChbJ3dyaXN0Ym9uZScsICdoYW5kJywgJ2FybTEnLCAncmVzdCddLmluY2x1ZGVzKG9iamVjdE5hbWUpKSBtYXRlcmlhbCA9IGRhcmtNYXRlcmlhbFxyXG4gICAgICAgICAgICByZXNvbHZlKG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCkpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuY29uc3QgbG9hZEFsbE9iamVjdHNBbmRQdXRJbiA9IChvYmplY3RzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgbGV0IGxvYWRlZENvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIG9mIG9iamVjdHNOYW1lcykge1xyXG4gICAgICAgICAgICBsb2FkKG9iamVjdE5hbWUpLnRoZW4oKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdHNbb2JqZWN0TmFtZV0gPSBtZXNoXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRDb3VudCsrXHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZGVkQ291bnQgPT09IG9iamVjdHNOYW1lcy5sZW5ndGgpIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICB9KVxyXG59XHJcblxyXG5jbGFzcyBSb2JvdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocm9ib1NjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5yb2JvU2NlbmUgPSByb2JvU2NlbmVcclxuICAgICAgICB0aGlzLnNjZW5lID0gcm9ib1NjZW5lLnNjZW5lXHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2VcclxuICAgICAgICB0aGlzLnBhcnRzID0ge31cclxuICAgICAgICBsb2FkQWxsT2JqZWN0c0FuZFB1dEluKHRoaXMucGFydHMpLnRoZW4odGhpcy5yZWFkeS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICAgIGZvciAobGV0IHBhcnROYW1lIGluIHRoaXMucGFydHMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucGFydHNbcGFydE5hbWVdXHJcbiAgICAgICAgICAgIHBhcnQuY2FzdFNoYWRvdyA9IHRydWVcclxuICAgICAgICAgICAgcGFydC5yZWNlaXZlU2hhZG93ID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29tYmluaW5nIHRoaW5ncyB0b2dldGhlclxyXG4gICAgICAgIHRoaXMucGFydHMucmVzdC5hZGQodGhpcy5wYXJ0cy5yb3RhdG9yKVxyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5wb3NpdGlvbi55ID0gM1xyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5hZGQodGhpcy5wYXJ0cy5hcm0xKVxyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5wb3NpdGlvbi55ID0gMlxyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5hZGQodGhpcy5wYXJ0cy5hcm0yKVxyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5wb3NpdGlvbi55ID0gNC41XHJcbiAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLmFkZCh0aGlzLnBhcnRzLndyaXN0KVxyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3QuYWRkKHRoaXMucGFydHMud3Jpc3Rib25lKVxyXG4gICAgICAgIHRoaXMucGFydHMud3Jpc3Rib25lLnBvc2l0aW9uLnkgPSA3LjVcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5wb3NpdGlvbi54ID0gLTAuMDZcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5hZGQodGhpcy5wYXJ0cy5oYW5kKVxyXG4gICAgICAgIHRoaXMucGFydHMuaGFuZC5hZGQodGhpcy5wYXJ0cy5maW5nZXIpXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucG9zaXRpb24ueSA9IDEuNFxyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnBvc2l0aW9uLnggPSAwLjJcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlci5wb3NpdGlvbi56ID0gMC4zNVxyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnggPSAwLjJcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIgPSB0aGlzLnBhcnRzLmZpbmdlci5jbG9uZSgpXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5oYW5kLmFkZCh0aGlzLnBhcnRzLmZpbmdlcjIpXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnJvdGF0aW9uLnkgPSBNYXRoLlBJXHJcbiAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIyLnBvc2l0aW9uLnggPSAtMC40XHJcblxyXG4gICAgICAgIC8vIGFkZGluZyByZXN0IHRvIHNjZW5lXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wYXJ0cy5yZXN0KVxyXG5cclxuICAgICAgICAvLyBIaWRkZW4gcGFyYW1ldGVyc1xyXG4gICAgICAgIHRoaXMucm90YXRlWSA9IC0wLjRcclxuICAgICAgICB0aGlzLnJvdGF0ZVggPSAwXHJcbiAgICAgICAgdGhpcy5hcm1BbmdsZSA9IDBcclxuICAgICAgICB0aGlzLndyaXN0QW5nbGUgPSAtTWF0aC5QSS84XHJcbiAgICAgICAgdGhpcy5ncmFiQW5nbGUgPSBNYXRoLlBJLzZcclxuXHJcbiAgICAgICAgLy8gU2V0IGluaXRhbCB2YWx1ZXNcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9yb3RhdGVZKVxyXG4gICAgICAgIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55ID0gdGhpcy5fcm90YXRlWVxyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54ID0gdGhpcy5fcm90YXRlWFxyXG4gICAgICAgIHRoaXMucGFydHMuYXJtMi5yb3RhdGlvbi54ID0gdGhpcy5fYXJtQW5nbGVcclxuICAgICAgICB0aGlzLnBhcnRzLndyaXN0Ym9uZS5yb3RhdGlvbi54ID0gdGhpcy5fd3Jpc3RBbmdsZVxyXG4gICAgICAgIHRoaXMucGFydHMuZmluZ2VyLnJvdGF0aW9uLnogPSB0aGlzLl9ncmFiQW5nbGVcclxuICAgICAgICB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueiA9IHRoaXMuX2dyYWJBbmdsZVxyXG5cclxuICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRlWSAoZGVnKSB7XHJcbiAgICAgICAgdGhpcy5fcm90YXRlWSA9IGRlZ1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdGF0ZVkgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGVZXHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRlWCAoZGVnKSB7XHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAtTWF0aC5QSS8zKVxyXG4gICAgICAgIGRlZyA9IE1hdGgubWluKGRlZywgNypNYXRoLlBJLzEyKVxyXG4gICAgICAgIHRoaXMuX3JvdGF0ZVggPSBkZWdcclxuICAgIH1cclxuICAgIGdldCByb3RhdGVYICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRlWFxyXG4gICAgfVxyXG4gICAgc2V0IGFybUFuZ2xlIChkZWcpIHtcclxuICAgICAgICBkZWcgPSBNYXRoLlBJIC0gZGVnXHJcbiAgICAgICAgZGVnID0gTWF0aC5tYXgoZGVnLCAtTWF0aC5QSS8xMilcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIDUqTWF0aC5QSS82KVxyXG4gICAgICAgIHRoaXMuX2FybUFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgYXJtQW5nbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcm1BbmdsZVxyXG4gICAgfVxyXG4gICAgc2V0IHdyaXN0QW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgLU1hdGguUEkvMilcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIE1hdGguUEkvMilcclxuICAgICAgICB0aGlzLl93cmlzdEFuZ2xlID0gZGVnXHJcbiAgICB9XHJcbiAgICBnZXQgd3Jpc3RBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dyaXN0QW5nbGVcclxuICAgIH1cclxuICAgIHNldCBncmFiQW5nbGUgKGRlZykge1xyXG4gICAgICAgIGRlZyA9IE1hdGgubWF4KGRlZywgMClcclxuICAgICAgICBkZWcgPSBNYXRoLm1pbihkZWcsIE1hdGguUEkpXHJcbiAgICAgICAgZGVnIC09IE1hdGguUEkvNlxyXG4gICAgICAgIHRoaXMuX2dyYWJBbmdsZSA9IC1kZWcvMlxyXG4gICAgfVxyXG4gICAgZ2V0IGdyYWJBbmdsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIC0oMip0aGlzLl9ncmFiQW5nbGUtTWF0aC5QSS82KVxyXG4gICAgfVxyXG4gICAgY2xvc2VHcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IDBcclxuICAgIH1cclxuICAgIG9wZW5HcmFiICgpIHtcclxuICAgICAgICB0aGlzLmdyYWJBbmdsZSA9IE1hdGguUEkvMlxyXG4gICAgfVxyXG4gICAgdG9nZ2xlR3JhYiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhYkFuZ2xlID4gTWF0aC5QSS8zKSB0aGlzLmNsb3NlR3JhYigpXHJcbiAgICAgICAgZWxzZSB0aGlzLm9wZW5HcmFiKClcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFkeSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRzLnJvdGF0b3Iucm90YXRpb24ueSArPSAodGhpcy5fcm90YXRlWSAtIHRoaXMucGFydHMucm90YXRvci5yb3RhdGlvbi55KSAvIDMwXHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuYXJtMS5yb3RhdGlvbi54ICs9ICh0aGlzLl9yb3RhdGVYIC0gdGhpcy5wYXJ0cy5hcm0xLnJvdGF0aW9uLngpIC8gMzBcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLnggKz0gKHRoaXMuX2FybUFuZ2xlIC0gdGhpcy5wYXJ0cy5hcm0yLnJvdGF0aW9uLngpIC8gMzBcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy53cmlzdGJvbmUucm90YXRpb24ueCArPSAodGhpcy5fd3Jpc3RBbmdsZSAtIHRoaXMucGFydHMud3Jpc3Rib25lLnJvdGF0aW9uLngpIC8gMzBcclxuICAgICAgICAgICAgdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueiArPSAodGhpcy5fZ3JhYkFuZ2xlIC0gdGhpcy5wYXJ0cy5maW5nZXIucm90YXRpb24ueikgLyAzXHJcbiAgICAgICAgICAgIHRoaXMucGFydHMuZmluZ2VyMi5yb3RhdGlvbi56ICs9ICh0aGlzLl9ncmFiQW5nbGUgLSB0aGlzLnBhcnRzLmZpbmdlcjIucm90YXRpb24ueikgLyAzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2JvdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL1JvYm90LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==