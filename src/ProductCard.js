import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  Button
} from "reactstrap";
import "./style.css";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
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
    return (
      <div>
        <Card
          raised
          className="CardItem-main-card"
          onClick={() => this.props.enterProduct(id)}
        >
          <CardImg
            top
            width="100%"
            src={product_main_image}
            alt="Card image cap"
            className="ProductCard-img"
          />
          <CardBlock>
            <CardTitle>{name}</CardTitle>
            <CardText>{product_copy}</CardText>
            <Button color="danger" onClick={() => this.props.removeProduct(id)}>
              Delete
            </Button>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
