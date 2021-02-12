import React from 'react';
import {ProductTable} from "../ProductTable.jsx";
import {SearchBar} from "../SearchBar.jsx";
import './FilterableProductTable.scss'

export class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {filterText: "", onlyInStock: true};
    this.inStockHandler = this.inStockHandler.bind(this);
    this.filterText = this.filterText.bind(this);
  }

  inStockHandler(isChecked) {
    this.setState({onlyInStock: isChecked});
  }

  filterText(filterValue) {
    this.setState({filterText: filterValue});
  }

  render() {
    return(<div className="product-table">
      <SearchBar
        checkbox={{handler: this.inStockHandler, isChecked: this.state.onlyInStock}}
        search={{handler: this.filterText, value: this.state.filterText}}/>
      <ProductTable
        data={this.props.data}
        filter={{text: this.state.filterText, inStock: this.state.onlyInStock}}/>
    </div>);
  }
}