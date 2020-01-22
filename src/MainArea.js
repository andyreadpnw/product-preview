import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";
import PDP from "./PDP";
import Ticket from "./Ticket";
import { api } from "./services/api";

class MainArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsArr: [{ id: 1 }],
      isProductClicked: false,
      isEmptyState: true,
      ticketsArr: [{ id: 1 }],
      productSelected: 0
    };
    this.updateProductTickets = this.updateProductTickets.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    } else {
      api.auth.getCurrentUser().then(user => {
        console.log(user);
        if (user.error) {
          this.props.history.push("/login");
        } else {
          this.setState({
            productSelected: 0
          });

          fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(json => {
              this.setState({
                productsArr: json.map(x => x)
              });
            });

          fetch("http://localhost:3000/product_logs")
            .then(res => res.json())
            .then(json => {
              this.setState({
                ticketsArr: json.map(x => x)
              });
            });
        }
      });
    }
  }

  updateProductTickets() {
    fetch("http://localhost:3000/product_logs")
      .then(res => res.json())
      .then(json => {
        this.setState(
          {
            ticketsArr: json.map(x => x)
          },
          () => {
            this.setState({
              ...this.state,
              productsArr: this.state.productsArr.filter(
                product => product.id === this.state.productSelected
              ),
              ticketsArr: this.state.ticketsArr.filter(
                productlog =>
                  productlog.product.id === this.state.productSelected
              ),
              productSelected: this.state.productSelected
            });
          }
        );
      });
  }



  removeProduct(id) {
    this.setState({
      productsArr: this.state.productsArr.filter(product => product.id !== id)
    });
    fetch("http://localhost:3000/products/" + id, {
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
      ),
      productSelected: id
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
              currentUser={this.props.currentUser}
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
              updateProductTickets={this.updateProductTickets}
            />
          )}
        </Row>
      </Container>
    );
  }
}

export default MainArea;
