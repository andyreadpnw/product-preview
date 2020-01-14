import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export class Ticket extends Component {
  render() {
    let {
      id,
      parent_id,
      product_name,
      style_id,
      department,
      status,
      priority,
      issue_type,
      issue_class,
      site,
      division,
      environment,
      log_body,
      assigned,
      cc
    } = this.props.data;
    console.log(this.props.data);
    let products = [
      {
        id: id,
        parent_id: parent_id,
        product_name: product_name,
        style_id: style_id,
        department: department,
        status: status,
        priority: priority,
        issue_type: issue_type,
        issue_class: issue_class,
        site: site,
        division: division,
        environment: environment,
        log_body: log_body,
        assigned: assigned,
        cc: cc
      }
    ];
    return (
      <div>
        {/* {id} */}
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn dataField="id" isKey>
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="parent_id">parent_id</TableHeaderColumn>
          <TableHeaderColumn dataField="product_name">
            product_name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="style_id">style_id</TableHeaderColumn>
          <TableHeaderColumn dataField="department">
            department
          </TableHeaderColumn>
          <TableHeaderColumn dataField="status">status</TableHeaderColumn>
          <TableHeaderColumn dataField="priority">priority</TableHeaderColumn>
          <TableHeaderColumn dataField="issue_type">
            issue_type
          </TableHeaderColumn>
          <TableHeaderColumn dataField="issue_type">
            issue_type
          </TableHeaderColumn>
          <TableHeaderColumn dataField="issue_class">
            issue_class
          </TableHeaderColumn>
          <TableHeaderColumn dataField="site">site</TableHeaderColumn>
          <TableHeaderColumn dataField="division">division</TableHeaderColumn>
          <TableHeaderColumn dataField="environment">
            environment
          </TableHeaderColumn>
          <TableHeaderColumn dataField="log_body">log_body</TableHeaderColumn>
          <TableHeaderColumn dataField="assigned">assigned</TableHeaderColumn>
          <TableHeaderColumn dataField="cc">cc</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Ticket;
