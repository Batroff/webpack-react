import React from "react";

export class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.props.handler(e.target.value);
  }

  render() {
    const labelText = this.id === "Celsius" ? "Celsius" : "Fahrenheit";
    const value = this.props.value;

    return <div className="temperature-input">
      <label htmlFor={this.id}>Temperature in {labelText}</label>
      <input id={this.id} type="text" value={value} onChange={this.changeHandler}/>
    </div>
  }
}
