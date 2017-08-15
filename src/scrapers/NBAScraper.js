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
