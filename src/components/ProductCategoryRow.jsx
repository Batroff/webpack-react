import React from 'react';

export class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.category;
  }

  render() {
    return (<tr className="category">
      <th colSpan="2">{this.name}</th>
    </tr>);
  }
}