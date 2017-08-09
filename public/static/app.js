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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-console */

const NBAScraper = __webpack_require__(/*! ./scrapers/NBAScraper */ 1);

addEventListener('DOMContentLoaded', main);

const scraper = new NBAScraper();

function main() {
  scraper
    .scrape(
      'http://www.espn.com/nba/team/stats/_/name/gs/golden-state-warriors'
    )
    .then(data => {
      console.log(data);
    });
  // const $root = document.querySelector('#root');
  // const $app = null;
  // $root.appendChild($app);
}


/***/ }),
/* 1 */
/*!************************************!*\
  !*** ./src/scrapers/NBAScraper.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = class NBAScraper {
  scrape(url) {
    return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const rows = doc
          .querySelector('table')
          .querySelectorAll('tr[class*="player-"'); //https://en.wikipedia.org/wiki/Cascading_Style_Sheets  //E[foo*="bar"]
        const players = [];
        for (let $row of rows) {
          players.push({
            PLAYER: $row.querySelector('td:nth-child(1)').innerText,
            GP: parseInt($row.querySelector('td:nth-child(2)').innerText),
            GS: parseInt($row.querySelector('td:nth-child(3)').innerText),
            MIN: parseFloat($row.querySelector('td:nth-child(4)').innerText),
            PPG: parseFloat($row.querySelector('td:nth-child(5)').innerText),
            OFFR: parseFloat($row.querySelector('td:nth-child(6)').innerText),
            DEFR: parseFloat($row.querySelector('td:nth-child(7)').innerText),
            RPG: parseFloat($row.querySelector('td:nth-child(8)').innerText),
            APG: parseFloat($row.querySelector('td:nth-child(9)').innerText),
            SPG: parseFloat($row.querySelector('td:nth-child(10)').innerText),
            BPG: parseFloat($row.querySelector('td:nth-child(11)').innerText),
            TPG: parseFloat($row.querySelector('td:nth-child(12)').innerText),
            FPG: parseFloat($row.querySelector('td:nth-child(13)').innerText),
            ATO: parseFloat($row.querySelector('td:nth-child(14)').innerText)
          });
        }
        const topPlayers = [];

        players.sort(function(a, b) {
          return b.PPG - a.PPG;
        });

        return players;
      });
  }
};

//http://cors-bypass-proxy.axiomlogic.com

//http://cors-anywhere.herokuapp.com


/***/ })
/******/ ]);