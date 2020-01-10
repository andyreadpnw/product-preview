import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";
import PDP from "./PDP";
import Ticket from "./Ticket";

class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArr: [{ id: 1 }],
      isProductClicked: false,
      isEmptyState: true,
      ticketsArr: [{ id: 1 }]
    };
  }

  componentDidMount() {
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

  removeProduct(id) {
    this.setState({
      productsArr: this.state.productsArr.filter(product => product.id !== id)
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
    let productLogCards = this.state.ticketsArr.map(productlog => {
      return (
        <Col sm="4">
          {this.state.isProductClicked && <Ticket productlog={productlog} />}
        </Col>
      );
    });

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
        <Row>{productLogCards}</Row>
      </Container>
    );
  }
}

export default MainArea;
