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
    let {
      ecomm_approve,
      ecomm_approver,
      ecom_comment,
      plm_approve,
      plm_approver,
      plm_comment,
      merchant_approve,
      merchant_approver,
      merchant_comment,
      planner_approve,
      planner_approver,
      planner_comment,
      other_approve,
      other_approver,
      other_comment
    } = this.props.approvals[0];
    return (
      <div>
        <header>
          <hgroup>
            <h1>{name}</h1>
            <h4>Product ID: {parent_id}</h4>
            <img src={product_main_image}></img>
          </hgroup>
        </header>

        <div class="grid-container">
          <div class="grid-item">
            <section>
              <h5>Summary Copy: {product_copy}</h5>
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
          <div class="grid-item">
            Ecomm PLM Merchant Planner Other {ecomm_approve},{ecomm_approver}
            {ecom_comment},{plm_approve},{plm_approver},{plm_comment},
            {merchant_approve},{merchant_approver},{merchant_comment},
            {planner_approve},{planner_approver},{planner_comment},
            {other_approve},{other_approver},{other_comment}
          </div>
        </div>
      </div>
    );
  }
}

export default PDP;
