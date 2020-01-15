import React, { Component } from "react";
import ReactTable from "react-table";
import DataTable from "react-data-table-component";

export class Ticket extends Component {
  constructor(props) {
    super(props);
  }
  // handleClick(e) {
  //   e.preventDefault();
  //   console.log("The link was clicked.");
  // }

  handleClick = () => {
    console.log("potato");
  };

  handleRowClicked = row => {
    console.log(`${row.id} was clicked!`);
  };

  render() {
    console.log(this.props.data);

    const Button = () => <button type="button">Edit</button>;

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

    const customStyles = {
      rows: {
        style: {
          minHeight: "72px"
        }
      },
      headCells: {
        style: {
          paddingLeft: "8px",
          paddingRight: "8px"
        }
      },
      cells: {
        style: {
          paddingLeft: "8px",
          paddingRight: "8px"
        }
      }
    };

    return (
      <div>
        {/* {id} */}
        {/* <ReactTable data={this.props.data} columns={columns} /> */}
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

export default Ticket;
