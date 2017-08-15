/* eslint-disable no-console */

const NBAScraper = require('./scrapers/NBAScraper'); //this is how you import from the other modules
const Widget = require('./components/Widget');
const InputForm = require('./components/InputForm');
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
