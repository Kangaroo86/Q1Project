module.exports = class NBAScraper {
  scrape(url) {
    // return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`)
    return fetch(url)
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
        .querySelector('.teamlogo').src

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

        players.sort(function(a, b) {
          return b.PPG - a.PPG;
        });

        return players;


        const myOBJ = {
          TeamName: teamName,
          TeamLogo: teamLogo,
          array: players
        }



      });
    }
};

//http://cors-bypass-proxy.axiomlogic.com

//http://cors-anywhere.herokuapp.com
