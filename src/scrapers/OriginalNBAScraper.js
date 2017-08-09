// function takeInURL(url) {
//   fetch(url)
//     .then(function(response) {
//       return response.text();
//     })
//     .then(function(html) {
//       console.log('html data:--->', html);
//
//       // +++++++++++++++TEST+++++++++++++++++++++++++++++
//       //console.log(html[25774]);
//       //console.log(stringLosses);
//     });
// }
//
// takeInURL(
//   //'http://cors-anywhere.herokuapp.com/http://www.nba.com/teams/hornets'// original poxy. dont delete
//   //'http://cors-bypass-proxy.axiomlogic.com/http://www.nba.com/teams/hornets'
//   'http://cors-bypass-proxy.axiomlogic.com/http://www.nba.com/teams/warriors'
// );

// ============ORIGINAL SCRAPE CLASS============

const userInput = document.getElementById('textarea1').innerHTML;
const mainURL = 'http://www.espn.com/nba/team/stats/_/name/gs';
//const mainURL = 'http://www.espn.com/nba/team/stats/_/name/okc';

class Scrape {
  // constructor(url) {
  //   //this.url = url;
  // }

  scraping(url) {
    return fetch(url)
      .then(response => {
        return response.text();
      })
      .then(html => {
        let domParser = new DOMParser();
        var doc = domParser.parseFromString(html, 'text/html');
        //console.log(doc);
        return doc;
      });
  }
}

// ============COLLECTION OF NEW SCRAPE CLASS============

//scraping team LOGO
var scrapeLOGO = new Scrape();
scrapeLOGO
  .scraping(
    //'http://cors-bypass-proxy.axiomlogic.com/http://www.espn.com/nba/team/_/name/gs/golden-state-warriors'
    'http://cors-bypass-proxy.axiomlogic.com/' + mainURL
  )
  .then(logo => {
    var name = logo.getElementsByTagName('img')[5].src;
    document.getElementById('test').src = name;
  });

//scraping teamName
var scrapeTeamName = new Scrape();
scrapeTeamName
  .scraping('http://cors-bypass-proxy.axiomlogic.com/' + mainURL)
  .then(teamName => {
    var teamNameLogo = teamName.getElementsByTagName('b')[0].innerHTML;
    document.getElementById('teamName').innerHTML = teamNameLogo;
  });

//scraping players image
var scrapePlayersIMG = new Scrape();
scrapePlayersIMG
  .scraping('http://cors-bypass-proxy.axiomlogic.com/' + mainURL)
  .then(players => {
    var playerA = players.getElementsByTagName('img')[0].src;
    document.getElementById('topPlayerA').src = playerA;

    var playerB = players.getElementsByTagName('img')[1].src;
    document.getElementById('topPlayerB').src = playerB;

    var playerC = players.getElementsByTagName('img')[2].src;
    document.getElementById('topPlayerC').src = playerC;
  });

//scraping players STATS
var scrapePlayersSTAT = new Scrape();
scrapePlayersSTAT
  .scraping('http://cors-bypass-proxy.axiomlogic.com/' + mainURL)
  .then(stats => {
    // var getElements = stats.getElementsByTagName('table')[0].childNodes[0]
    //   .childNodes[2];
    //debugger;
    let getKevinD_Elements = stats
      .querySelector('tbody')
      .querySelectorAll('tr');
    console.log(getKevinD_Elements);

    //.querySelector('tbody');
    // console.log(
    //   'getKevinD_Elements: ',
    //   //getKevinD_Elements
    //   getKevinD_Elements[2].children[4].innerHTML
    // );

    // var newArray = [];
    // for (var k = 2; k < getKevinD_Elements.length - 1; k++) {
    //   for (var i = 0; i < 14; i++) {
    //     newArray.push(getKevinD_Elements[k].children[i].innerHTML);
    //   }
    // }
    // console.log(newArray);

    let getDraymondG_Elements = stats
      .querySelector('table tr.player-46-6589')
      .querySelectorAll('td');
    //console.log('getDraymondG_Elements: ', getDraymondG_Elements);

    let getStephenC_Elements = stats
      .querySelector('table tr.player-46-3975')
      .querySelectorAll('td');
    //console.log('getStephenC_Elements: ', getStephenC_Elements);

    var arrayProperty = [
      'PLAYER',
      'GP',
      'GS',
      'MIN',
      'PPG',
      'OFFR',
      'DEFR',
      'RPG',
      'APG',
      'SPG',
      'BPG',
      'TPG',
      'FPG',
      'A/TO'
    ];
    //console.log(arrayProperty.length);

    var newArray = [];
    for (var k = 2; k < getKevinD_Elements.length - 1; k++) {
      for (var i = 0; i < 14; i++) {
        newArray.push(getKevinD_Elements[k].children[i].innerText);
      }
    }
    console.log(newArray);

    // var test = {};
    // for (let i = 0; i < newArray.length; i++) {
    //   for (let k = 0; k < arrayProperty.length; k++) {
    //     test[arrayProperty[i]] = newArray[k];
    //   }
    // }
    // console.log(test);

    let kevinD_STAT = [];
    for (let i = 1; i < getKevinD_Elements.length; i++) {
      kevinD_STAT.push(getKevinD_Elements[i].innerText);
    }

    let draymondG_STAT = [];
    for (let i = 1; i < getDraymondG_Elements.length; i++) {
      draymondG_STAT.push(getDraymondG_Elements[i].innerText);
    }

    let stephenC_STAT = [];
    for (let i = 1; i < getStephenC_Elements.length; i++) {
      stephenC_STAT.push(getStephenC_Elements[i].innerText);
    }

    let kevinD_OBJ = {};
    for (let i = 0; i < arrayProperty.length; ++i) {
      kevinD_OBJ[arrayProperty[i]] = kevinD_STAT[i];
    }

    let draymondG_OBJ = {};
    for (let i = 0; i < arrayProperty.length; ++i) {
      draymondG_OBJ[arrayProperty[i]] = draymondG_STAT[i];
    }

    let stephenC_OBJ = {};
    for (let i = 0; i < arrayProperty.length; ++i) {
      stephenC_OBJ[arrayProperty[i]] = stephenC_STAT[i];
    }

    document.querySelector('#playerA_PPG').innerHTML = kevinD_OBJ.PPG;
    document.querySelector('#playerA_Rebounds').innerHTML = kevinD_OBJ.RPG;
    document.querySelector('#playerA_Assists').innerHTML = kevinD_OBJ.APG;
    document.querySelector('#playerA_Steals').innerHTML = kevinD_OBJ.SPG;

    document.querySelector('#playerB_PPG').innerHTML = draymondG_OBJ.PPG;
    document.querySelector('#playerB_Rebounds').innerHTML = draymondG_OBJ.RPG;
    document.querySelector('#playerB_Assists').innerHTML = draymondG_OBJ.APG;
    document.querySelector('#playerB_Steals').innerHTML = draymondG_OBJ.SPG;

    document.querySelector('#playerC_PPG').innerHTML = stephenC_OBJ.PPG;
    document.querySelector('#playerC_Rebounds').innerHTML = stephenC_OBJ.RPG;
    document.querySelector('#playerC_Assists').innerHTML = stephenC_OBJ.APG;
    document.querySelector('#playerC_Steals').innerHTML = stephenC_OBJ.SPG;

    // for (var OBJ of getKevinD_Elements) {
    //   console.log(OBJ.innerText);
    // }
  });
