import { Col, Row, Select } from "antd";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../data/Products";
import { useState } from "react";

export default function Shop() {
  const [sortBy, setSortBy] = useState("");

  let sortedProducts;
  if (sortBy === "") {
    sortedProducts = PRODUCTS;
  }

  if (sortBy === "name") {
    sortedProducts = PRODUCTS.slice().sort((a, b) =>
      a.productName.localeCompare(b.productName)
    );
  }

  if (sortBy === "highestRate") {
    sortedProducts = PRODUCTS.slice().sort((a, b) => b.starRate - a.starRate);
  }

  if (sortBy === "ascendingPrice") {
    sortedProducts = PRODUCTS.slice().sort((a, b) => a.price - b.price);
  }

  if (sortBy === "descendingPrice") {
    sortedProducts = PRODUCTS.slice().sort((a, b) => b.price - a.price);
  }

  const handleSelect = (value) => {
    setSortBy(value);
  };
  console.log(sortedProducts);

  return (
    <div className="container">
      <div>
        <Select
          defaultValue={""}
          onChange={handleSelect}
          style={{ textAlign: "right", width: 200, marginTop: "12px" }}
          options={[
            {
              value: "",
              label: (
                <span style={{ color: "gray" }}>تغییر ترتیب محصولات ...</span>
              ),
            },
            {
              value: "name",
              label: "بر اساس نام محصول",
            },
            {
              value: "highestRate",
              label: "بر اساس محبوبیت",
            },
            {
              value: "ascendingPrice",
              label: "ارزان ترین",
            },
            {
              value: "descendingPrice",
              label: "گران ترین",
            },
          ]}
        />
      </div>

      <Row justify={"center"} className="mt-4">
        {sortedProducts.map((productData) => {
          return (
            <Col
              xs={8}
              sm={6}
              md={6}
              lg={6}
              xl={4}
              className="mx-5 mt-3"
              style={{ display: "flex", justifyContent: "center" }}
              key={productData.id}
            >
              <ProductCard key={productData.id} data={productData} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
