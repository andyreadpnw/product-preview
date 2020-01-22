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

  render() {
    let {
      id,
      name,
      product_copy,
      product_main_image
    } = this.props.product;
    let deleteToggle = this.props.currentUser.user_id.user_group_id;
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
            {deleteToggle === 1 && (
              <Button
                color="danger"
                onClick={() => this.props.removeProduct(id)}
              >
                Delete
              </Button>
            )}
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
