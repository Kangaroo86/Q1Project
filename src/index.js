/* eslint-disable no-console */

const NBAScraper = require('./scrapers/NBAScraper'); //this is how you import from the other modules
const Widget = require('./components/Widget');
const InputForm = require('./components/InputForm');

addEventListener('DOMContentLoaded', main);

const scraper = new NBAScraper();

function main() {
  const $root = document.getElementById('root');
  $root.appendChild(InputForm());

  scraper
    .scrape(
      'http://localhost:5000/sources/NBAWebsiteGoldenStateWarriors.html'
    )
    .then(players => {
      $root.appendChild(Widget(players));

    });




}
