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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************************!*\
  !*** ./node_modules/elementx/dist.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var htmlTags = __webpack_require__(/*! html-tag-names */ 4)
var document = __webpack_require__(/*! global-undom */ 5)
var svgTags = __webpack_require__(/*! svg-tag-names */ 7)

var namespaces = {
  ev: 'http://www.w3.org/2001/xml-events',
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/'
}

var booleanAttrs = [
  'defaultchecked',
  'formnovalidate',
  'indeterminate',
  'willvalidate',
  'autofocus',
  'checked',
  'disabled',
  'readonly',
  'required',
  'selected'
]

var isEventHandler = function (key) { return key.slice(0, 2) === 'on'; }

var normalizeEventName = function (event) { return 'on' + event.slice(2, event.length).toLowerCase(); }

var isPlainObject = function (obj) { return typeof obj === 'object' && obj.constructor === Object; }

var contains = function (val, obj) { return obj.indexOf(val) !== -1; }

var getSvgAttributeNamespace = function (attr) {
  var prefix = attr.split(':', 1)[0]
  return namespaces.hasOwnProperty(prefix)
    ? namespaces[prefix]
    : null
}

var createElementTag = function (tagName) {
  return contains(tagName, svgTags)
    ? document.createElementNS('http://www.w3.org/2000/svg', tagName)
    : document.createElement(tagName)
}

var setAttribute = function (element, key, value) {
  return contains(':', key)
    ? element.setAttributeNS(getSvgAttributeNamespace(key), key, value)
    : element.setAttribute(key, value)
}

var createElement = function (tagName) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var attrs
  var children = []
  args.forEach(function (arg) {
    if (!arg) {
      return
    } else if (!attrs && isPlainObject(arg)) {
      attrs = arg
    } else if (Array.isArray(arg)) {
      children.push.apply(children, arg)
    } else {
      children.push(arg)
    }
  })

  var element = createElementTag(tagName)

  for (var key in attrs) {
    var value = attrs[key]

    if (isEventHandler(key)) {
      element[normalizeEventName(key)] = value
    } else if (contains(key, booleanAttrs)) {
      value !== false && element.setAttribute(key, key)
    } else {
      setAttribute(element, key, value)
    }
  }

  if (children && children.length > 0) {
    children.forEach(function (child) {
      element.appendChild(
         typeof child === 'string'
          ? document.createTextNode(child)
          : child
      )
    })
  }

  return element
}

var createTagFactory = function (tag) {
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return createElement.apply(void 0, [ tag ].concat( args ));
  }
}

module.exports = createElement

svgTags.concat(htmlTags).forEach(function (tag) {
  module.exports[tag] = createTagFactory(tag)
})



/***/ }),
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-console */

const NBAScraper = __webpack_require__(/*! ./scrapers/NBAScraper */ 2); //this is how you import from the other modules
const Widget = __webpack_require__(/*! ./components/Widget */ 3);
const InputForm = __webpack_require__(/*! ./components/InputForm */ 8);
//const TestSelect = require('./components/RadioButton'); //DEBUGGING

addEventListener('DOMContentLoaded', main);

const scraper = new NBAScraper();

function main() {
  const $root = document.getElementById('root');
  $root.appendChild(InputForm());
  //$root.appendChild(TestSelect()); //DEBUGGING

  const URL = document.getElementById('textarea1');
  const $submit = document.getElementById('executeProgram');

  $submit.addEventListener('click', () => {
    event.preventDefault();
    scraper
      .scrape(
        URL.value //this ran on localhost //'http://localhost:5000/sources/NBAWebsiteGoldenStateWarriors.html'
      )
      .then(myOBJ => {$root.appendChild(Widget(myOBJ));
    });

  })
}
//http://localhost:5000/sources/NBAWebsiteGoldenStateWarriors.html
//http://localhost:5000/sources/CharlotteHornetsWEB.html


/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/scrapers/NBAScraper.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = class NBAScraper {
  scrape(url) {
    return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`)
    //return fetch(url)
    //var fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const rows = doc
          .querySelector('table')
          .querySelectorAll('tr[class*="player-"'); //https://en.wikipedia.org/wiki/Cascading_Style_Sheets  //E[foo*="bar"]

        const teamName = doc
        .querySelector('b').innerText

        const teamLogo = doc
        // .querySelector('.teamlogo').src
        .getElementsByTagName('img')[5].src;

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


        // function sorting(input) {
        //   if(input == 'PPG') {
        //     players.sort(function(a, b) {
        //       return b.PPG - a.PPG;
        //     });
        //   }
        //   else if(input == 'RPG') {
        //     players.sort(function(a, b) {
        //       return b.RPG - a.RPG;
        //     });
        //   }
        //   else if(input == 'APG') {
        //     players.sort(function(a, b) {
        //       return b.APG - a.APG;
        //     });
        //   }
        //   else if(input == 'SPG') {
        //     players.sort(function(a, b) {
        //       return b.SPG - a.SPG;
        //     });
        //   }
        // }

        // players.sort(function(a, b) {
        //   return b.PPG - a.PPG;
        // });

        const myOBJ = {
          TeamName: teamName,
          TeamLogo: teamLogo,
          array: players,
          sorting: function(input) {
            if(input == 'PPG') {
              players.sort(function(a, b) {
                return b.PPG - a.PPG;
              });
            }
            else if(input == 'RPG') {
              players.sort(function(a, b) {
                return b.RPG - a.RPG;
              });
            }
            else if(input == 'APG') {
              players.sort(function(a, b) {
                return b.APG - a.APG;
              });
            }
            else if(input == 'SPG') {
              players.sort(function(a, b) {
                return b.SPG - a.SPG;
              });
            }
          }
        }


        // const myOBJ = {
        //   TeamName: teamName,
        //   TeamLogo: teamLogo,
        //   array: players,
        //   sorting: function(input) {
        //       players.sort(function(a, b) {
        //         return a.input - b.input;
        //         //console.log(a.input - b.input); //return NaN
        //       });
        //     }
        //   }



        return myOBJ;



      });
    }
};

//http://cors-bypass-proxy.axiomlogic.com
//http://cors-anywhere.herokuapp.com

// http://cors-bypass-proxy.axiomlogic.com/http://www.espn.com/nba/team/stats/_/name/atl
// http://cors-bypass-proxy.axiomlogic.com/http://www.espn.com/nba/team/stats/_/name/okc
// http://cors-bypass-proxy.axiomlogic.com/http://www.espn.com/nba/team/stats/_/name/gs


/***/ }),
/* 3 */
/*!**********************************!*\
  !*** ./src/components/Widget.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

const {
  div,
  img,
  p,
  a,
  tbody,
  table,
  thead,
  th,
  tr
} = __webpack_require__(/*! elementx */ 0);

module.exports = function Widget(myOBJ) {
  const widgetCard =
    div({class: "row"},
      div({class: "col s12 m5"},
        div({class: "card"},
          div({class: "card-image"},
            img({id: "test", src: `${myOBJ.TeamLogo}`})
          ),
          div({class: "card-content"},
            p({class: "card-title", id: "teamName"}, `${myOBJ.TeamName}`)
          ),
          div({class: "card-action"},
            a({href: "#"}, 'This is a link')
          )
        ) //card
      ), //"col s12 m5"
      //------------------------------
      div({class: "col s12 m7"},
        div({class: "card horizontal"},
          table({class: "bordered"},
            thead(
              tr(
                th('Players'),
                th('PPG'),
                th('Rebounds'),
                th('Assists'),
                th('Steals')
              )
            ),
            tbody(
              // tr({class: 'Widget'})
            ) //tbody
          ) //table
        ) //card horizontal
      ) //col s12 m7
    ); //row


  let elementTbody = widgetCard.querySelector('tbody');
  for (var i = 0; i < myOBJ.array.length; i++) {
    let createTR = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.innerText = myOBJ.array[i].PLAYER;

    let tdPPG = document.createElement('td');
    tdPPG.innerText = myOBJ.array[i].PPG;

    let tdRebounds = document.createElement('td');
    tdRebounds.innerText = myOBJ.array[i].RPG;

    let tdAssists = document.createElement('td');
    tdAssists.innerText = myOBJ.array[i].APG;

    let tdSteals = document.createElement('td');
    tdSteals.innerText = myOBJ.array[i].SPG;

    createTR.appendChild(tdName);
    createTR.appendChild(tdPPG);
    createTR.appendChild(tdRebounds);
    createTR.appendChild(tdAssists);
    createTR.appendChild(tdSteals);
    elementTbody.appendChild(createTR);
  }

  // ==========DEBUGGING==========
  //console.log(myOBJ.array[0].PLAYER);
  //console.log(myOBJ.sorting('PPG'));
  //console.log(`${myOBJ.TeamLogo}`);
  //console.log(myOBJ);
  //console.log(widgetCard);


  return widgetCard;

}










// return div({ class: 'Widget' }, players.slice(0, 3).map(player => {
//   return div(player.PLAYER + ' | ' + player.PPG)
// }));

// /*
// <div class="Widget>
//   <div>Kevin D.</div>
//   <div>Stephen C.</div>
// </div>









// for(var i = 0; i < players.length; i++) {
//   let createTR = document.createElement('tr');
//
//   let tdName = document.createElement('td');
//   tdName.innerText = players[i].PLAYER;
//
//   let tdPPG = document.createElement('td');
//   tdPPG.innerText = players[i].PPG;
//
//   let tdRebounds = document.createElement('td');
//   tdRebounds.innerText = players[i].RPG;
//
//   let tdAssists = document.createElement('td');
//   tdAssists.innerText = players[i].APG;
//
//   let tdSteals = document.createElement('td');
//   tdSteals.innerText = players[i].SPG;
//
//   // createTR.appendChild(createTD);
//   createTR.appendChild(tdName);
//   createTR.appendChild(tdPPG); //came out blank
//   createTR.appendChild(tdRebounds);
//   createTR.appendChild(tdAssists);
//   createTR.appendChild(tdSteals);
//   elementTbody.appendChild(createTR);
// }








// ------BACKUP-----------
// return div(
//       {class:"row"},
//       div(
//         {class:"col s12 m5"},
//         div(
//           {class:"card"},
//           div(
//             {class:"card-image"},
//             img(
//               {id:"test"}
//             )
//           ),
//           div(
//             {class:"card-content"},
//             p(
//               {class:"card-title", id:"teamName"}
//             )
//           ),
//           div(
//             {class:"card-action"},
//             a(
//               {href:"#"},'This is a link'
//             )
//           )
//         ) //card
//       ),//"col s12 m5"
//   //------------------------------
//       div(
//         {class:"col s12 m7"},
//         div(
//           {class:"card horizontal"},
//           table(
//             {class:"bordered"},
//             thead(
//               tr(
//                 th('Players'),
//                 th('PPG'),
//                 th('Rebounds'),
//                 th('Assists'),
//                 th('Steals')
//               )
//             ),
//             tbody(
//               tr(
//                 td(
//                   img(
//                     {id:"topPlayerA"}
//                   )
//                 ),
//                 td(
//                   {id:"playerA_PPG"}, `${players[0].PPG}`
//                 ),
//                 td(
//                   {id:"playerA_Rebounds"}
//                 ),
//                 td(
//                   {id:"playerA_Assists"}
//                 ),
//                 td(
//                   {id:"playerA_Steals"}
//                 )
//               ),
//               tr(
//                 td(
//                   img(
//                     {id:"topPlayerB"}
//                   )
//                 ),
//                 td(
//                   {id:"playerB_PPG"}
//                 ),
//                 td(
//                   {id:"playerB_Rebounds"}
//                 ),
//                 td(
//                   {id:"playerB_Assists"}
//                 ),
//                 td(
//                   {id:"playerB_Steals"}
//                 )
//               ),
//               tr(
//                 td(
//                   img(
//                     {id:"topPlayerC"}
//                   )
//                 ),
//                 td(
//                   {id:"playerC_PPG"}
//                 ),
//                 td(
//                   {id:"playerC_Rebounds"}
//                 ),
//                 td(
//                   {id:"playerC_Assists"}
//                 ),
//                 td(
//                   {id:"playerC_Steals"}
//                 )
//               )
//             ) //tbody
//           ) //table
//         ) //card horizontal
//       ) //col s12 m7
//     ); //row
// }


/***/ }),
/* 4 */
/*!************************************************!*\
  !*** ./node_modules/html-tag-names/index.json ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]

/***/ }),
/* 5 */
/*!********************************************!*\
  !*** ./node_modules/global-undom/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


if (typeof document !== 'undefined') {
  module.exports = document
} else {
  var undom = __webpack_require__(/*! undom */ 6)
  module.exports = undom()
}


/***/ }),
/* 6 */
/*!***********************!*\
  !*** undom (ignored) ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 7 */
/*!***********************************************!*\
  !*** ./node_modules/svg-tag-names/index.json ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = ["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"]

/***/ }),
/* 8 */
/*!*************************************!*\
  !*** ./src/components/InputForm.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

const {
  div,
  form,
  textarea,
  button,
  input,
  option,
  select,
  p,
  label
} = __webpack_require__(/*! elementx */ 0);



module.exports = function InputForm() {

  let inputForm =
    div({ class: "row" },
        form({ class: "col s12" },
          div({ class: "row" },
            div({ class: "input-field col s9" },
              textarea({ id: "textarea1", class: "materialize-textarea" },
              )
            )
          )
        ),
        button({ class:"col s2 btn waves-effect waves-light", type:"submit", name:"action", id:"executeProgram" }, 'SUBMIT')
      );

return inputForm;
}


// return select(
//   option({ value: 'sortPlayers' }, 'sort by Players'),
//   option({ value: 'sortPPG' }, 'sort by PPG'),
//   option({ value: 'sortRebounds' }, 'sort by Rebounds'),
//   option({ value: 'sortAssists' }, 'sort by Assists'),
//   option({ value: 'sortSteals' }, 'sort by Steals')
// );


// <form onsubmit="return checkForSelection();">
//     <select id="states">
//         <option value="" selected="selected">
//             SELECT A STATE</option>
//             <option value="sortPlayers">sort by Players</option>
//             <option value="sortPPG">sort by PPG</option>
//             <option value="sortRebounds">sort by Rebounds</option>
//             <option value="sortAssists">sort by Assists</option>
//             <option value="sortSteals">sort by Steals</option>
//     </select>
//     <input type="submit" value="submit form">
// </form>


/***/ })
/******/ ]);