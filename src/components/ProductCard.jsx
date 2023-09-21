import { Card, Space } from "antd";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { DeleteOutlined } from "@ant-design/icons";

function ProductCard(props) {
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(props.data.id);

  return (
    <Card
      hoverable
      bordered={false}
      style={{
        width: 200,
        display: "flex",
        backgroundColor: "#F5F5F5",
      }}
    >
      <img
        src={props.data.productImageAddress}
        alt={props.data.productName}
        className="img-fluid rounded"
      />
      <h5>{props.data.productName}</h5>
      <p> Price: {`$${props.data.price}`}</p>
      {productQuantity > 0 ? (
        <>
          <Space>
            <button
              onClick={() => cart.addItemToCart(props.data.id)}
              className="mx-2 btn btn-outline-danger"
            >
              +
            </button>
            {productQuantity}
            <button
              onClick={() => cart.removeItemFromCart(props.data.id)}
              className="mx-2 btn btn-outline-danger"
            >
              -
            </button>
          </Space>

          <button
            onClick={() => cart.deleteFromCart(props.data.id)}
            className="my-4 btn btn-light"
          >
            حذف <DeleteOutlined />
          </button>
        </>
      ) : (
        <button
          onClick={() => cart.addItemToCart(props.data.id)}
          className="btn btn-danger"
        >
          +
        </button>
      )}
    </Card>
  );
}
export default ProductCard;
