import React from 'react';

import {ProductRow} from "./ProductRow/ProductRow.jsx";
import {ProductCategoryRow} from "./ProductCategoryRow.jsx";

export class ProductTable extends React.Component {
  constructor(props) {
    super(props);

  }

  createCategoriesList(data) {
    let categories = [];
    data.forEach(item => {
      if (!categories[item.category]) categories[item.category] = [];
      categories[item.category].push(item);
    });

    return categories;
  }

  filterElements(filterText, list) {
    let group = [];
    for (let key of Object.keys(list)) {
      let filtered = list[key].filter(item =>
        item.name.toLowerCase().search(this.props.filter.text) !== -1);
      if (this.props.filter.inStock) {
        filtered = filtered.filter(item => item.stocked);
      }
      if (filtered.length === 0) continue;


      group.push(<ProductCategoryRow
        key={key.toString()}
        category={key.toString()}/>
      );

      filtered.forEach(item => {
        group.push(<ProductRow
          key={item.name}
          name={item.name}
          price={item.price}
          stocked={item.stocked}/>);
      });
    }

    return group;
  }

  render() {
    const data = this.props.data;
    const categories = this.createCategoriesList(data);
    const elements = this.filterElements(this.props.filterText, categories);

    return (<table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {elements}
      </tbody>
    </table>);
  }
}