const { div, form, textarea, button } = require('elementx');

module.exports = function InputForm() {
  let inputForm = div(
    { class: 'row' },
    form(
      { class: 'col s12' },
      div(
        { class: 'row' },
        div(
          { class: 'input-field col s9' },
          textarea({ id: 'textarea1', class: 'materialize-textarea' })
        )
      )
    ),
    button(
      {
        class: 'col s2 btn waves-effect waves-light',
        type: 'submit',
        name: 'action',
        id: 'executeProgram'
      },
      'SUBMIT'
    )
  );

  return inputForm;
};

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
