import React from 'react';
import {TemperatureControl} from "./TemperatureControl.jsx";
import {TemperatureInput} from "./TemperatureInput.jsx";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { type: '', temperature: 0}
    this.onCelsiusChange = this.onCelsiusChange.bind(this);
    this.onFahrenheitChange = this.onFahrenheitChange.bind(this);
  }

  onCelsiusChange(value) {
    this.setState({
      type: 'Celsius',
      temperature: value
    });
  }

  onFahrenheitChange(value) {
    this.setState({
      type: 'Fahrenheit',
      temperature: value
    });
  }

  toCelsius(temp) {
    return (temp - 32) * 5 / 9;
  }

  toFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
  }

  tryConvert(input, convert) {
    const temperature = parseFloat(input);
    if (isNaN(temperature) || !isFinite(temperature)) return '';
    const output = convert(temperature);
    return output.toFixed(3);
  }

  render() {
    const type = this.state.type;
    const temperature = this.state.temperature;
    const fahrenheit = (type === 'Fahrenheit') ? temperature : this.tryConvert(temperature, this.toFahrenheit);
    const celsius = (type === 'Celsius') ? temperature : this.tryConvert(temperature, this.toCelsius);

    return (
      <div className="calculator">
        <TemperatureInput id="Fahrenheit" value={fahrenheit} handler={this.onFahrenheitChange}/>
        <TemperatureInput id="Celsius" value={celsius} handler={this.onCelsiusChange}/>
        <TemperatureControl temperature={celsius}/>
      </div>
    )
  }
}