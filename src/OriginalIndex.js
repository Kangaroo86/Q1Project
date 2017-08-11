/* eslint-disable no-console */

const NBAScraper = require('./scrapers/NBAScraper'); //this is how you import from the other modules
const Widget = require('./components/Widget');

const {
  div,
  form,
  textarea,
  label,
  button,
  i,
  img,
  span,
  p,
  a,
  tbody,
  table,
  thead,
  th,
  tr,
  td
} = require('elementx');


function inputForm() {
  const node =
  div(
    {class:"row"},
    form(
      {class:"col s12"},
      div(
        {class:"row"},
        div(
          {class:"input-field col s12"},
          textarea(
            {id:"textarea1", class:"materialize-textarea"}
          )
        )
      )
    ),
    button({class:"btn waves-effect waves-light", type:"submit", name:"action"}, 'SUBMIT')
  );
  return node;
}

function iconBox() {
  const node =
  div(
    {class:"row"},
    div(
      {class:"col s12 m5"},
      div(
        {class:"card"},
        div(
          {class:"card-image"},
          img(
            {id:"test"}
          )
        ),
        div(
          {class:"card-content"},
          p(
            {class:"card-title", id:"teamName"}
          )
        ),
        div(
          {class:"card-action"},
          a(
            {href:"#"},'This is a link'
          )
        )
      ) //card
    ),//"col s12 m5"
//------------------------------
    div(
      {class:"col s12 m7"},
      div(
        {class:"card horizontal"},
        table(
          {class:"bordered"},
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
            tr(
              td(
                img(
                  {id:"topPlayerA"}
                )
              ),
              td(
                {id:"playerA_PPG"}
              ),
              td(
                {id:"playerA_Rebounds"}
              ),
              td(
                {id:"playerA_Assists"}
              ),
              td(
                {id:"playerA_Steals"}
              )
            ),
            tr(
              td(
                img(
                  {id:"topPlayerB"}
                )
              ),
              td(
                {id:"playerB_PPG"}
              ),
              td(
                {id:"playerB_Rebounds"}
              ),
              td(
                {id:"playerB_Assists"}
              ),
              td(
                {id:"playerB_Steals"}
              )
            ),
            tr(
              td(
                img(
                  {id:"topPlayerC"}
                )
              ),
              td(
                {id:"playerC_PPG"}
              ),
              td(
                {id:"playerC_Rebounds"}
              ),
              td(
                {id:"playerC_Assists"}
              ),
              td(
                {id:"playerC_Steals"}
              )
            )
          ) //tbody
        ) //table
      ) //card horizontal
    ) //col s12 m7
  ); //row
}



addEventListener('DOMContentLoaded', main);


const scraper = new NBAScraper();
function main() {

  scraper
    .scrape(
      'http://www.espn.com/nba/team/stats/_/name/gs/golden-state-warriors'
    )
    .then(players => {
      $root.appendChild(Widget(players));
    });

  const $root = document.querySelector('#root');
  const $app = inputForm();
  $root.appendChild($app);

  const $app2 = iconBox();
  $root.appendChild($app2);
}
