import React from 'react';

export function TemperatureControl(props) {
  return (props.temperature >= 100) ?
    <p>Вскипит</p> : <p>Не вскипит</p>
}