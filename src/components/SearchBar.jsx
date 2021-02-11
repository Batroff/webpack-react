import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  checkboxHandler(e) {
    this.props.checkbox.handler(e.target.checked);
  }

  searchHandler(e) {
    this.props.search.handler(e.target.value);
  }

  render() {
    return (<div>
      <input type="search"
             placeholder="Search..."
             onChange={this.searchHandler}
             value={this.props.search.value}/><br/>
      <input type="checkbox"
             id="checkbox-isInStock"
             onChange={this.checkboxHandler}
             checked={this.props.checkbox.isChecked}/>
      <label htmlFor="checkbox-isInStock">Only show products in stock</label>
    </div>);
  }
}