import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";
import PDP from "./PDP";
import Ticket from "./Ticket";
import Tickets from "./Tickets";
import { api } from "./services/api";

class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArr: [{ id: 1 }],
      isProductClicked: false,
      isEmptyState: true,
      ticketsArr: [{ id: 1 }],
      allTicketsClicked: false
    };
  }

  componentDidMount() {
    console.log("DID MOUNT");
    if (!localStorage.getItem("token")) {
      console.log("NO TOKEN");
      this.props.history.push("/login");
    } else {
      api.auth.getCurrentUser().then(user => {
        console.log(user);
        if (user.error) {
          this.props.history.push("/login");
        } else {
          console.log("taco");

          fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(json => {
              console.log(json);
              this.setState(
                {
                  productsArr: json.map(x => x)
                },
                () => {
                  console.log(this.state.productsArr);
                }
              );
            });

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
      });
    }
  }

  removeProduct(id) {
    this.setState({
      productsArr: this.state.productsArr.filter(product => product.id !== id)
    });
    fetch("http://localhost:3000/products" + "/" + id, {
      method: "delete"
    })
      .then(response => response.json())
      .then(json => console.log(json.message))
      .catch(err => {
        console.error(err);
      });
  }

  enterProduct(id) {
    this.setState({
      ...this.state,
      isProductClicked: true,
      isEmptyState: false,
      productsArr: this.state.productsArr.filter(product => product.id === id),
      ticketsArr: this.state.ticketsArr.filter(
        productlog => productlog.product.id === id
      )
    });
  }

  render() {
    let productCards = this.state.productsArr.map(product => {
      return (
        <Col sm="4">
          {this.state.isEmptyState && (
            <ProductCard
              key={product.id}
              enterProduct={this.enterProduct.bind(this)}
              removeProduct={this.removeProduct.bind(this)}
              product={product}
            />
          )}
          {this.state.isProductClicked && <PDP product={product} />}
        </Col>
      );
    });
    return (
      <Container fluid>
        <Row>{productCards}</Row>
        <Row>
          {this.state.isProductClicked && (
            <Ticket
              data={this.state.ticketsArr}
              product={this.state.productsArr}
            />
          )}
          {this.state.allTicketsClicked && (
            <Tickets
              data={this.state.ticketsArr}
              product={this.state.productsArr}
            />
          )}
        </Row>
      </Container>
    );
  }
}

export default MainArea;
