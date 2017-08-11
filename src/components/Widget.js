const {
  div,
  img,
  p,
  a,
  tbody,
  table,
  thead,
  th,
  tr,
  td
} = require('elementx');

module.exports = function Widget(myOBJ) {
  // return div({ class: 'Widget' }, players.slice(0, 3).map(player => {
  //   return div(player.PLAYER + ' | ' + player.PPG)
  // }));


  const widgetCard =
      div({class:"row"},
        div({class:"col s12 m5"},
          div({class:"card"},
            div({class:"card-image"},
              img({id:"test", src:`${myOBJ.TeamLogo}`})
            ),
            div({class:"card-content"},
              p({class:"card-title",
              id:"teamName"}, `${myOBJ.TeamName}`)
            ),
            div({class:"card-action"},
              a({href:"#"},'This is a link')
            )
          ) //card
        ),//"col s12 m5"
    //------------------------------
        div({class:"col s12 m7"},
          div({class:"card horizontal"},
            table({class:"bordered"},
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
for(var i = 0; i < myOBJ.array.length; i++) {
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


console.log(`${myOBJ.TeamLogo}`);

//console.log(myOBJ);
//console.log(widgetCard);



return widgetCard;



}

// document.getElementById("executeProgram").addEventListener('click', function() {
//   Widget(myOBJ);
// }

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
