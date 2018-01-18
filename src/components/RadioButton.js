const { select, option } = require('elementx');

// module.exports = function TestSelect() {
//   return select(
//     option({ value: 'PPG' }, 'sort by PPG'),
//     option({ value: 'RPG' }, 'sort by Rebounds'),
//     option({ value: 'APG' }, 'sort by Assists'),
//     option({ value: 'SPG' }, 'sort by Steals')
//   );
// };

//RadioButton
// module.exports = function TestSelect() {
//   return select(
//     form({action:"", method:"get", onsubmit:""},
//       option({ value: 'PPG' }, `${myOBJ.sorting('PPG')}`, 'sort by PPG'),
//       option({ value: 'RPG' }, `${myOBJ.sorting('RPG')}`, 'sort by Rebounds'),
//       option({ value: 'APG' }, `${myOBJ.sorting('APG')}`, 'sort by Assists'),
//       option({ value: 'SPG' }, `${myOBJ.sorting('SPG')}`, 'sort by Steals')
//     )
//   );
// };

//Drop down list
module.exports = function TestSelect() {
  return select(
    { id: 'select' },
    option({ value: 'PPG' }, 'sort by PPG'),
    option({ value: 'RPG' }, 'sort by Rebounds'),
    option({ value: 'APG' }, 'sort by Assists'),
    option({ value: 'SPG' }, 'sort by Steals')
  );
};
