/* eslint-disable no-console */

const NBAScraper = require('./scrapers/NBAScraper');

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
