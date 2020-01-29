import React, { Component } from "react";
import { Table } from "reactstrap";

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
      ecomm_comment,
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
    console.log(this.props.approvals);
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
          <div class="grid-item2">
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Approve</th>
                  <th>Approver</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ecomm</th>
                  <td>{ecomm_approve}</td>
                  <td>{ecomm_approver}</td>
                  <td>{ecomm_comment}</td>
                </tr>
                <tr>
                  <th scope="row">PLM</th>
                  <td>{plm_approve}</td>
                  <td>{plm_approver}</td>
                  <td>{plm_comment}</td>
                </tr>
                <tr>
                  <th scope="row">Merchant</th>
                  <td>{merchant_approve}</td>
                  <td>{merchant_approver}</td>
                  <td>{merchant_comment}</td>
                </tr>
                <tr>
                  <th scope="row">Planner</th>
                  <td>{planner_approve}</td>
                  <td>{planner_approver}</td>
                  <td>{planner_comment}</td>
                </tr>
                <tr>
                  <th scope="row">Other</th>
                  <td>{other_approve}</td>
                  <td>{other_approver}</td>
                  <td>{other_comment}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default PDP;
