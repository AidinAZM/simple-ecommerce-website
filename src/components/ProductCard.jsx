import { Card, Image, Rate, Space } from "antd";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { DeleteOutlined } from "@ant-design/icons";
import { getProductData } from "../data/Products";

function ProductCard(props) {
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(props.data.id);

  const [starValue, setStarValue] = useState(2.5);

  console.log(starValue, props.data.productName);

  getProductData(props.data.id).starRate = starValue;

  console.log(getProductData(props.data.id));

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
      <Image
        width={150}
        height={110}
        src={props.data.productImageAddress}
        className="img-fluid rounded"
      />
      {/* <img
        src={props.data.productImageAddress}
        alt={props.data.productName}
        className="img-fluid rounded"
      /> */}
      <h5 style={{ marginTop: "8px" }}>{props.data.productName}</h5>
      <p> Price: {`$${props.data.price}`}</p>

      <Rate
        allowHalf
        defaultValue={2.5}
        style={{ marginBottom: "10px" }}
        value={starValue}
        onChange={setStarValue}
      />

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
