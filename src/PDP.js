import React, { Component } from "react";

export class PDP extends Component {
  render() {
    let {
      parent_id,
      name,
      department,
      style_id,
      color_id,
      product_copy,
      product_main_image,
      fit,
      fabrication,
      style_type
    } = this.props.product;
    return (
      <div>
        <header>
          <hgroup>
            <h1>{name}</h1>
            <h4>Product ID: {parent_id}</h4>
            <img src={product_main_image}></img>
          </hgroup>
        </header>

        <section>
          <p>Summary Copy: {product_copy}</p>
          <li>Department: {department}</li>
          <li>Style ID: {style_id}</li>
          <li>Color ID: {color_id}</li>
          <li>Size Type: {style_type}</li>

          <details>
            <summary>Product Features</summary>
            <ul>
              <li>Fit: {fit}</li>
              <li>Fabrication: {fabrication}</li>
            </ul>
          </details>
        </section>
      </div>
    );
  }
}

export default PDP;
