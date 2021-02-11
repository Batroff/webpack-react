import React from 'react';
import './ProductRow.css';

export class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.price = this.props.price;
    this.stocked = this.props.stocked;
  }

  render() {
    return (<tr>
      <td className={`name-cell ${this.stocked ? "stocked" : ""}`}>{this.name}</td>
      <td className="price-cell">{this.price}</td>
    </tr>);
  }
}