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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js!./styles/main.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js!./styles/main.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"html, body {\\n  max-width: 100%;\\n  min-width: 350px;\\n  min-height: 150vh;\\n  background-color: whitesmoke;\\n  overflow-x: hidden;\\n  margin: 0;\\n  padding: 0; }\\n\\n#root {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0; }\\n\\n.app {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0; }\\n\\n.header__container {\\n  min-height: 200px;\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  background-image: url(./src/assets/bgpic.jpg);\\n  background-repeat: no-repeat;\\n  background-size: 100% 110%;\\n  margin: 0;\\n  padding: 0 10px;\\n  box-shadow: 0 3px 15px grey; }\\n\\n.header__imgLogo {\\n  width: 15%;\\n  max-width: 200px;\\n  min-width: 100px;\\n  background: #ffffffa1; }\\n\\n.logo__text {\\n  text-align: center;\\n  color: white; }\\n\\n.logo__title {\\n  font-family: fantasy;\\n  font-size: 4vw;\\n  text-align: center; }\\n\\n.logo__paragraph {\\n  font-family: sans-serif;\\n  text-align: center; }\\n\\n.header__button {\\n  color: white;\\n  background-color: #1a48cf;\\n  padding: 5px 20px;\\n  font-family: cursive;\\n  border-radius: 5px;\\n  border: 1px solid white;\\n  cursor: pointer; }\\n\\n.header__button:hover {\\n  background-color: royalblue; }\\n\\n.mainTitle {\\n  font-family: sans-serif;\\n  text-align: center;\\n  margin: 0;\\n  color: springgreen;\\n  padding: 70px 0;\\n  text-shadow: 0 5px 5px lightgrey; }\\n\\n/* Posts: */\\n.post__container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-evenly;\\n  flex-wrap: wrap;\\n  margin: 0;\\n  padding: 15px 10px 0; }\\n\\n.singlePost {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 25%;\\n  min-width: 350px;\\n  margin: 0 5px 40px;\\n  padding: 15px;\\n  box-shadow: 0 3px 15px grey;\\n  border-radius: 5px;\\n  border-top: 20px solid #2ac72a;\\n  color: darkslategray; }\\n  .singlePost .fas {\\n    padding: 3px;\\n    border-radius: 50%;\\n    width: 30px;\\n    height: 30px;\\n    color: white;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; }\\n  .singlePost h2 {\\n    font-family: sans-serif;\\n    color: black; }\\n  .singlePost a {\\n    color: blue;\\n    text-decoration: underline;\\n    cursor: pointer; }\\n\\n.singlePost:nth-child(1n+0) {\\n  border-top: 20px solid #a5d6a7; }\\n  .singlePost:nth-child(1n+0) .fas {\\n    background: #a5d6a7; }\\n\\n.singlePost:nth-child(2n+0) {\\n  border-top: 20px solid #81c784; }\\n  .singlePost:nth-child(2n+0) .fas {\\n    background: #81c784; }\\n\\n.singlePost:nth-child(3n+0) {\\n  border-top: 20px solid #66bb6a; }\\n  .singlePost:nth-child(3n+0) .fas {\\n    background: #66bb6a; }\\n\\n.singlePost:nth-child(4n+0) {\\n  border-top: 20px solid #43a047; }\\n  .singlePost:nth-child(4n+0) .fas {\\n    background: #43a047; }\\n\\n.singlePost:nth-child(5n+0) {\\n  border-top: 20px solid #2e7d32; }\\n  .singlePost:nth-child(5n+0) .fas {\\n    background: #2e7d32; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./styles/main.scss?./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component */ \"./src/components/component.js\");\n/* harmony import */ var _components_headerContainer_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/headerContainer/header */ \"./src/components/headerContainer/header.js\");\n/* harmony import */ var _components_title_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/title/title */ \"./src/components/title/title.js\");\n/* harmony import */ var _components_postContainer_postContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/postContainer/postContainer */ \"./src/components/postContainer/postContainer.js\");\n/* harmony import */ var _customizeContent_parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customizeContent/parameters */ \"./src/customizeContent/parameters.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'use strict'\r\n\r\n/**\r\n* App Component\r\n* @class App\r\n* @extends {Component}\r\n*/\r\nclass App extends _components_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n   * Creates an instance of App\r\n   * \r\n   * @param {string} tag - The tag name to create element\r\n   * @param {string} className - The class name to add\r\n   * @throws {Error} - Incorrect type\r\n   * @memberof App\r\n   */  \r\n    constructor(tag, className){\r\n        if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n        if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n        \r\n        super(tag, className)\r\n\r\n        const {srcImgLogo, logoTitle, logoParagraph, buttonText, mainTitle, postIcons, postTitles, postParagraphs, postLinks } = _customizeContent_parameters__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n\r\n        const header = new _components_headerContainer_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('div', 'header__container', { srcImgLogo, buttonText, logoTitle, logoParagraph })\r\n\r\n        const title = new _components_title_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('h1', 'mainTitle', mainTitle)\r\n        \r\n        const postContainer = new _components_postContainer_postContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('div', 'post__container', { postIcons, postTitles, postParagraphs, postLinks })\r\n    \r\n        this.element.appendChild(header.element)\r\n        this.element.appendChild(title.element)\r\n        this.element.appendChild(postContainer.element)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* button Component\r\n* @class button\r\n* @extends {Component}\r\n*/\r\nclass Button extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of button\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof button\r\n     */\r\n    \r\n    constructor(tag, className, text) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof text !== 'string') throw TypeError(`${text} is not a string`)\r\n     \r\n      super(tag, className)\r\n\r\n      this.text = text\r\n\r\n      this.element.appendChild(document.createTextNode(this.text))\r\n      \r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/button/button.js?");

/***/ }),

/***/ "./src/components/component.js":
/*!*************************************!*\
  !*** ./src/components/component.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n* Model class of component\r\n*\r\n* @class Component\r\n*/\r\nclass Component{\r\n\r\n    /**\r\n    * Creates an instance of Component\r\n    * @param {string} tag - The tag name to create element\r\n    * @param {string} className - The class name to add to the element \r\n    * @throws {Error} - validation: check that tag and className must be string \r\n    * @memberof Component\r\n    */\r\n    constructor(tag, className) {\r\n\r\n        if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n        if (typeof className !== 'string' && !(Array.isArray(className))) throw TypeError(`${className} is not a string or an array`)\r\n\r\n        this.element = document.createElement(tag)\r\n\r\n        //to add a single class:\r\n        if (typeof className == 'string') {\r\n            this.element.classList.add(className)\r\n\r\n        //to add multiple classes:\r\n        } else if (Array.isArray(className)) {\r\n            this.element.classList.add(...className)\r\n        }\r\n    }\r\n\r\n}\r\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./src/components/component.js?");

/***/ }),

/***/ "./src/components/headerContainer/header.js":
/*!**************************************************!*\
  !*** ./src/components/headerContainer/header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n/* harmony import */ var _imgLogo_imgLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgLogo/imgLogo */ \"./src/components/imgLogo/imgLogo.js\");\n/* harmony import */ var _logoText_logoText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logoText/logoText */ \"./src/components/logoText/logoText.js\");\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button */ \"./src/components/button/button.js\");\n\r\n\r\n\r\n\r\n\r\n'use strict'\r\n/**\r\n* HeaderContainer Component\r\n* @class HeaderContainer\r\n* @extends {Component}\r\n*/\r\nclass HeaderContainer extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of HeaderContainer\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof HeaderContainer\r\n     */\r\n    \r\n    constructor(tag, className, parameters) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (!(parameters instanceof Object)) throw TypeError(`${parameters} is not a object`)\r\n     \r\n      super(tag, className)\r\n\r\n      const { srcImgLogo, buttonText, logoTitle, logoParagraph } = parameters\r\n\r\n      const image = new _imgLogo_imgLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('img', 'header__imgLogo', srcImgLogo) \r\n      const logoText = new _logoText_logoText__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('div', 'logo__text', [ logoTitle, logoParagraph ])\r\n      const btn = new _button_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('button', 'header__button', buttonText) \r\n\r\n      this.element.appendChild(image.element)\r\n      this.element.appendChild(logoText.element)\r\n      this.element.appendChild(btn.element)\r\n\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (HeaderContainer);\r\n  \n\n//# sourceURL=webpack:///./src/components/headerContainer/header.js?");

/***/ }),

/***/ "./src/components/imgLogo/imgLogo.js":
/*!*******************************************!*\
  !*** ./src/components/imgLogo/imgLogo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* imgLogo Component\r\n* @class imgLogo\r\n* @extends {Component}\r\n*/\r\nclass ImgLogo extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of imgLogo\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof imgLogo\r\n     */\r\n    \r\n    constructor(tag, className, srcImgLogo) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof srcImgLogo !== 'string') throw TypeError(`${srcImgLogo} is not a string`)\r\n     \r\n      super(tag, className)\r\n\r\n      this.src = srcImgLogo\r\n\r\n      this.element.src = this.src\r\n      \r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (ImgLogo);\r\n  \n\n//# sourceURL=webpack:///./src/components/imgLogo/imgLogo.js?");

/***/ }),

/***/ "./src/components/logoPar/logoPar.js":
/*!*******************************************!*\
  !*** ./src/components/logoPar/logoPar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* logoParagraph Component\r\n* @class logoParagraph\r\n* @extends {Component}\r\n*/\r\nclass LogoParagraph extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of logoParagraph\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof logoParagraph\r\n     */\r\n    \r\n    constructor(tag, className, content) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)\r\n     \r\n      super(tag, className)\r\n\r\n      this.content = content\r\n\r\n      this.element.innerText = this.content\r\n      // this.element.appendChild(document.createTextNode(this.text))\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (LogoParagraph);\n\n//# sourceURL=webpack:///./src/components/logoPar/logoPar.js?");

/***/ }),

/***/ "./src/components/logoText/logoText.js":
/*!*********************************************!*\
  !*** ./src/components/logoText/logoText.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n/* harmony import */ var _logoTitle_logoTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logoTitle/logoTitle */ \"./src/components/logoTitle/logoTitle.js\");\n/* harmony import */ var _logoPar_logoPar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logoPar/logoPar */ \"./src/components/logoPar/logoPar.js\");\n\r\n\r\n\r\n\r\n'use strict'\r\n/**\r\n* logoText Component\r\n* @class logoText\r\n* @extends {Component}\r\n*/\r\nclass LogoText extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of logoText\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof logoText\r\n     */\r\n    \r\n    constructor(tag, className, parameters) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (!(parameters instanceof Object)) throw TypeError(`${parameters} is not a object`)\r\n     \r\n      super(tag, className)\r\n\r\n      const [ logoTitle, logoParagraph ] = parameters\r\n      \r\n      const title = new _logoTitle_logoTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('h2', 'logo__title', logoTitle) \r\n      const paragraph = new _logoPar_logoPar__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('p', 'logo__paragraph', logoParagraph)\r\n      \r\n      this.element.appendChild(title.element)\r\n      this.element.appendChild(paragraph.element)\r\n      \r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (LogoText);\r\n  \n\n//# sourceURL=webpack:///./src/components/logoText/logoText.js?");

/***/ }),

/***/ "./src/components/logoTitle/logoTitle.js":
/*!***********************************************!*\
  !*** ./src/components/logoTitle/logoTitle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* logoTitle Component\r\n* @class logoTitle\r\n* @extends {Component}\r\n*/\r\nclass LogoTitle extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of logoTitle\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof logoTitle\r\n     */\r\n    \r\n    constructor(tag, className, content) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)\r\n     \r\n      super(tag, className)\r\n\r\n      this.content = content\r\n\r\n      // this.element.innerText = this.content\r\n      this.element.appendChild(document.createTextNode(this.content))\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (LogoTitle);\n\n//# sourceURL=webpack:///./src/components/logoTitle/logoTitle.js?");

/***/ }),

/***/ "./src/components/post/post.js":
/*!*************************************!*\
  !*** ./src/components/post/post.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n/* harmony import */ var _postIcon_postIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../postIcon/postIcon */ \"./src/components/postIcon/postIcon.js\");\n/* harmony import */ var _postTitle_postTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../postTitle/postTitle */ \"./src/components/postTitle/postTitle.js\");\n/* harmony import */ var _postParagraph_postParagraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postParagraph/postParagraph */ \"./src/components/postParagraph/postParagraph.js\");\n/* harmony import */ var _postLink_postLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../postLink/postLink */ \"./src/components/postLink/postLink.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n'use strict'\r\n/**\r\n* Post Component\r\n* @class Post\r\n* @extends {Component}\r\n*/\r\nclass Post extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of Post\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof Post\r\n     */\r\n    \r\n    constructor(tag, className, parameters) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof parameters !== 'object') throw TypeError(`${parameters} is not an array`)\r\n     \r\n      super(tag, className)\r\n\r\n\r\n      const [ postIcons, postTitles, postParagraphs, postLinks ] = parameters\r\n\r\n\r\n      const icon = new _postIcon_postIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('i', postIcons)  //copy all classes of the array\r\n      const title = new _postTitle_postTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('h2', 'post__title', postTitles)\r\n      const paragraph = new _postParagraph_postParagraph__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('p', 'post__text', postParagraphs)\r\n      const link = new _postLink_postLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('a', 'post__link', postLinks) \r\n\r\n\r\n      this.element.appendChild(icon.element)\r\n      this.element.appendChild(title.element)\r\n      this.element.appendChild(paragraph.element)\r\n      this.element.appendChild(link.element)\r\n\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\n//# sourceURL=webpack:///./src/components/post/post.js?");

/***/ }),

/***/ "./src/components/postContainer/postContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/postContainer/postContainer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post/post */ \"./src/components/post/post.js\");\n\r\n\r\n\r\n'use strict'\r\n/**\r\n* PostContainer Component\r\n* @class PostContainer\r\n* @extends {Component}\r\n*/\r\nclass PostContainer extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of PostContainer\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof PostContainer\r\n     */\r\n    \r\n    constructor(tag, className, parameters) {\r\n  \r\n        if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n        if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n        if (!(parameters instanceof Object)) throw TypeError(`${parameters} is not a object`)\r\n\r\n        super(tag, className)\r\n\r\n        const { postIcons, postTitles, postParagraphs, postLinks } = parameters\r\n\r\n        const that = this\r\n\r\n        this.posts = (() => {\r\n            postIcons.forEach((icon, index) => {\r\n                let post = new _post_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('div', 'singlePost', [ icon, postTitles[index], postParagraphs[index], postLinks ])\r\n                that.element.appendChild(post.element)\r\n            })})()\r\n\r\n    } //end of constructor\r\n  } //end of class\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (PostContainer);\n\n//# sourceURL=webpack:///./src/components/postContainer/postContainer.js?");

/***/ }),

/***/ "./src/components/postIcon/postIcon.js":
/*!*********************************************!*\
  !*** ./src/components/postIcon/postIcon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* PostIcon Component\r\n* @class PostIcon\r\n* @extends {Component}\r\n*/\r\nclass PostIcon extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of PostIcon\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {array} className - The classes name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof PostIcon\r\n     */\r\n    \r\n    constructor(tag, className) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (!Array.isArray(className)) throw TypeError(`${className} is not an array`)\r\n     \r\n      super(tag, className)\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (PostIcon);\r\n  \n\n//# sourceURL=webpack:///./src/components/postIcon/postIcon.js?");

/***/ }),

/***/ "./src/components/postLink/postLink.js":
/*!*********************************************!*\
  !*** ./src/components/postLink/postLink.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* PostLink Component\r\n* @class PostLink\r\n* @extends {Component}\r\n*/\r\nclass PostLink extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of PostLink\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof PostLink\r\n     */\r\n    \r\n    constructor(tag, className, text) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof text !== 'string') throw TypeError(`${text} is not a string`)\r\n     \r\n      super(tag, className)\r\n\r\n      this.text = text\r\n\r\n      this.element.innerText = this.text\r\n      \r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (PostLink);\n\n//# sourceURL=webpack:///./src/components/postLink/postLink.js?");

/***/ }),

/***/ "./src/components/postParagraph/postParagraph.js":
/*!*******************************************************!*\
  !*** ./src/components/postParagraph/postParagraph.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* PostElement Component\r\n* @class PostElement\r\n* @extends {Component}\r\n*/\r\nclass PostElement extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of PostElement\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof PostElement\r\n     */\r\n    \r\n    constructor(tag, className, content) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)\r\n     \r\n      super(tag, className)\r\n  \r\n      this.text = content\r\n\r\n      this.element.innerText = this.text\r\n      \r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (PostElement);\n\n//# sourceURL=webpack:///./src/components/postParagraph/postParagraph.js?");

/***/ }),

/***/ "./src/components/postTitle/postTitle.js":
/*!***********************************************!*\
  !*** ./src/components/postTitle/postTitle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* PostTitle Component\r\n* @class PostTitle\r\n* @extends {Component}\r\n*/\r\nclass PostTitle extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of PostTitle\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof PostTitle\r\n     */\r\n    \r\n    constructor(tag, className, content) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)\r\n     \r\n      super(tag, className)\r\n  \r\n      this.text = content\r\n\r\n      this.element.innerText = this.text\r\n      \r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (PostTitle);\r\n  \n\n//# sourceURL=webpack:///./src/components/postTitle/postTitle.js?");

/***/ }),

/***/ "./src/components/title/title.js":
/*!***************************************!*\
  !*** ./src/components/title/title.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ \"./src/components/component.js\");\n\r\n\r\n'use strict'\r\n/**\r\n* Title Component\r\n* @class Title\r\n* @extends {Component}\r\n*/\r\nclass Title extends _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n\r\n    /**\r\n     * Creates an instance of Title\r\n     * \r\n     * @param {string} tag - The tag name to create element\r\n     * @param {string} className - The class name to add\r\n     * @param {string} innerText - The text the element will contain\r\n     * @throws {Error} - Incorrect type\r\n     * @memberof Title\r\n     */\r\n    \r\n    constructor(tag, className, content) {\r\n  \r\n      if (typeof tag !== 'string') throw TypeError(`${tag} is not a string`)\r\n      if (typeof className !== 'string') throw TypeError(`${className} is not a string`)\r\n      if (typeof content !== 'string') throw TypeError(`${content} is not a string`)\r\n     \r\n      super(tag, className)\r\n\r\n      this.content = content\r\n\r\n      this.element.appendChild(document.createTextNode(content))\r\n      \r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Title);\r\n  \n\n//# sourceURL=webpack:///./src/components/title/title.js?");

/***/ }),

/***/ "./src/customizeContent/parameters.js":
/*!********************************************!*\
  !*** ./src/customizeContent/parameters.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//to modify content of each component very quickly we can just override any of the strings:\r\n\r\nconst parameters = {\r\n    //Header:\r\n    srcImgLogo: './src/assets/logo_transparent.png',\r\n    logoTitle: 'Lorem Ipsum is cool',\r\n    logoParagraph: 'pharetra netus pulvinar eleifend aenean scelerisque vulputate. ',\r\n    buttonText: 'Register',\r\n\r\n    //Title:\r\n    mainTitle: 'This is the main title of the page',\r\n\r\n    //Posts:\r\n    postIcons: [\r\n      ['fas', 'fa-puzzle-piece'], ['fas', 'fa-shield-alt'], ['fas', 'fa-users'], ['fas', 'fa-exclamation-triangle'], ['fas', 'fa-cogs']\r\n    ],\r\n    postTitles: [\r\n      'Lorem ipsum dolor sit', //1st post title\r\n      'Amet consectetur adipiscing', //2nd post title\r\n      'Elit aenean senectus ante', //3rd post title\r\n      'Ut non id nostra tempus', //4th post title\r\n      'Enim vel ultricies volutpat' //5th post title\r\n    ],\r\n    postParagraphs: [\r\n      'The earth put forth vegetation: plants yielding seed, and fruit trees of the garden. Now the serpent was more crafty than any other wild animal that the LORD God sent...',\r\n      'and a sword flaming and turning to guard the way to the tree of life also in the midst of the evening breeze, and the darkness he called Night and there was...',\r\n      '..evening and there was no one to till the ground from which he was taken. The woman said to them: Be fruitful and multiply and fill the waters in the seas, and let them...',\r\n      'Be lights in the dome and separated the waters swarm, and every winged bird of every kind and it was so. And to the man whom he had formed. And the man and his wife hid...',\r\n      'They floated in the shade beneath a bridge or overpass. Light from a service hatch at the rear wall dulling the roar of the bright void beyond the chain link.'\r\n    ],\r\n    postLinks: 'continue reading'  //same for each post\r\n  }\r\n  \r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (parameters);\n\n//# sourceURL=webpack:///./src/customizeContent/parameters.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\nconst root = document.getElementById('root')\r\n\r\nconst app = new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('main', 'mainContainer')\r\n\r\nroot.appendChild(app.element)\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js?url=false!../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/lib/loader.js!./styles/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ })

/******/ });