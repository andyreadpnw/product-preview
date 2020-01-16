import React, { Component } from "react";
import DataTable from "react-data-table-component";

export class Tickets extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/product_logs")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState(
          {
            ticketsArr: json.map(x => x)
          },
          () => {
            console.log(this.state.ticketsArr);
          }
        );
      });
  }

  render() {
    const data = this.props.data;

    const columns = [
      {
        name: "ID",
        selector: "id",
        sortable: true,
        width: "40px"
      },
      {
        name: "Status",
        selector: "status",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Priority",
        selector: "priority",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Issue Type",
        selector: "issue_type",
        sortable: true,
        right: true,
        width: "120px"
      },
      {
        name: "Issue Class",
        selector: "issue_class",
        sortable: true,
        right: true,
        width: "140px"
      },
      {
        name: "Site",
        selector: "site",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Division",
        selector: "division",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Environment",
        selector: "environment",
        sortable: true,
        right: true,
        width: "90px"
      },
      {
        name: "Action Request",
        selector: "log_body",
        sortable: true,
        right: true,
        grow: 120
      },
      {
        name: "Assigned",
        selector: "assigned",
        sortable: true,
        right: true,
        width: "120px"
      },
      {
        name: "CC",
        selector: "cc",
        sortable: true,
        right: true
      },
      {
        name: "Date Prediction",
        selector: "date_due",
        sortable: true,
        right: true
      }
    ];

    return (
      <div>
        <DataTable
          title="Product Logs"
          columns={columns}
          data={data}
          onRowClicked={this.handleRowClicked}
          onClick={this.handleClick}
          pagination
        />
      </div>
    );
  }
}

export default Tickets;
