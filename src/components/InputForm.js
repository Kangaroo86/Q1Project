const {
  div,
  form,
  textarea,
  button,
} = require('elementx');

module.exports = function InputForm() {
  return div(
        {class:"row"},
        form(
          {class:"col s12"},
          div(
            {class:"row"},
            div(
              {class:"input-field col s9"},
              textarea(
                {id:"textarea1", class:"materialize-textarea"}
              )
            )
          )
        ),
        button({class:"col s2 btn waves-effect waves-light", type:"submit", name:"action"}, 'SUBMIT')
      );
}
