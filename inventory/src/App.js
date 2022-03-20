import "./App.css";
import Info from "./info.js";
import {PropTypes} from "prop-types";

function App() {
  return (
    <div className="App">
      <Info title="Inventory"/>
      <AddItem text="Andy" number={7}/>
      <AddItem text="Jim"/>
      <AddItem/>
    </div>
  );
}

function AddItem(props) {
  return (
    <from>
      <lable for="text-form"> Type something: </lable>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number ? props.number : "no number"}</p>
    </from>
  );
}

AddItem.defaultProps = {
  number: 2,
  text: "Name",
};

AddItem.prototype = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;
