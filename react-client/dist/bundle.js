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
/******/ 	return __webpack_require__(__webpack_require__.s = "./react-client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react-client/src/index.jsx":
/*!************************************!*\
  !*** ./react-client/src/index.jsx ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/ji/Personal/fitness-tracker/react-client/src/index.jsx: Unexpected token (85:1)\\n\\n\\u001b[0m \\u001b[90m 83 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mHomepage\\u001b[39m clickHandler\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mclickHandler}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 84 | \\u001b[39m      \\u001b[36mcase\\u001b[39m \\u001b[32m'userprofile'\\u001b[39m\\u001b[33m:\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 85 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 86 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mUserProfile\\u001b[39m userAlert\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39muserAlert}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 87 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 88 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mUserProfile\\u001b[39m email\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate\\u001b[33m.\\u001b[39memail}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:6400:17)\\n    at Object.unexpected (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:7728:16)\\n    at Object.jsxParseIdentifier (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:3383:12)\\n    at Object.jsxParseNamespacedName (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:3393:23)\\n    at Object.jsxParseElementName (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:3404:21)\\n    at Object.jsxParseOpeningElementAt (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:3490:22)\\n    at Object.jsxParseElementAt (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:3523:33)\\n    at Object.jsxParseElement (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:3597:17)\\n    at Object.parseExprAtom (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:3604:19)\\n    at Object.parseExprSubscripts (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:8507:23)\\n    at Object.parseMaybeUnary (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:8487:21)\\n    at Object.parseExprOps (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:8353:23)\\n    at Object.parseMaybeConditional (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:8326:23)\\n    at Object.parseMaybeAssign (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:8273:21)\\n    at Object.parseExpression (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:8221:23)\\n    at Object.parseStatementContent (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10061:23)\\n    at Object.parseStatement (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:9932:17)\\n    at Object.parseSwitchStatement (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10339:36)\\n    at Object.parseStatementContent (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:9983:21)\\n    at Object.parseStatement (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:9932:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10508:25)\\n    at Object.parseBlockBody (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10495:10)\\n    at Object.parseBlock (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10479:10)\\n    at Object.parseFunctionBody (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:9523:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:9493:10)\\n    at Object.parseMethod (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:9447:10)\\n    at Object.pushClassMethod (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10907:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10832:12)\\n    at Object.parseClassMember (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10771:10)\\n    at withTopicForbiddingContext (/Users/ji/Personal/fitness-tracker/node_modules/@babel/parser/lib/index.js:10726:14)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./react-client/src/index.jsx\n");

/***/ })

/******/ });