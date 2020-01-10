import React, { Component } from "react";

export class PDP extends Component {
  render() {
    let {
      id,
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
    return <div>{id}</div>;
  }
}

export default PDP;
