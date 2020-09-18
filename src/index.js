import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import "./index.css";

function TextField(props) {
  return (
    <div className="form-group row mt-4">
      <label for={props.for} className="col-sm-2 col-form-label ">
        {props.label}
      </label>
      <div className="col-sm-10">
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

TextField.propTypes = {
  for: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired
};

TextField.defaultProps = {
  for: ""
};

function RadioOptions(props) {
  return (
    <div className="form-check mt-2">
      <input
        className="form-check-input"
        type={props.type}
        name="gridRadios"
        id={props.id}
        value={props.value}
        checked={props.checked}
        disabled={props.disabled}
      />
      <label className="form-check-label" for="gridRadios1">
        {props.label}
      </label>
    </div>
  );
}

RadioOptions.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

RadioOptions.defaultProps = {
  type: "radio",
  disabled: false,
  checked: false
};

function Dropbox(props) {
  return (
    <div class="form-group">
      <label for={props.for}>{props.label}</label>
      <select id={props.id} class="form-control">
        {props.items.map(i => {
          return <option>{i}</option>;
        })}
        {/* <option selected>Choose...</option>
        <option>...</option> */}
      </select>
    </div>
  );
}

Dropbox.propTypes = {
  for : PropTypes.string,
  label : PropTypes.string,
  id : PropTypes.string,
  items : PropTypes.arrayOf(PropTypes.string)
}

Dropbox.defaultProps = {
  items: []
}

function CreateForm(props) {

  let items = ["good","bad", "sad"]

  return (
    <div className="container">
      {/* <form> */}
      <TextField type="email" label="Email" placeholder="please enter email" />
      <TextField
        type="password"
        label="password"
        placeholder="please enter password"
      />
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
          <div className="col-sm-10">
            <RadioOptions label="first radio" checked={true} />
            <RadioOptions label="second radio" />
            <RadioOptions label="third disabled radio" disabled={true} />
          </div>
        </div>
        <div className="form-group row">
          <legend className="col-form-label col-sm-2 pt-0">Checkbox</legend>
          <div className="col-sm-10">
            <RadioOptions label="Sample checkbox" type="checkbox" />
            <Dropbox items = {items}/>
          </div>
        </div>
      </fieldset>
      <div className="form-group row">
        <div className="col-sm-10">
          <button
            type="submit"
            onClick={props.changeColor}
            style={{ backgroundColor: props.color }}
            className="btn btn-primary button "
          >
            Sign in
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}

CreateForm.propTypes = {
  color: PropTypes.string,
  changeColor: PropTypes.func
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red", value: 0 };
  }

  changeColor = event => {
    var colors = ["green", "blue", "yellow", "red"];
    this.setState({ color: colors[this.state.value % colors.length] });
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  render() {
    return (
      <div>
        <CreateForm changeColor={this.changeColor} color={this.state.color} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
