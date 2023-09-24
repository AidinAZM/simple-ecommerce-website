const PRODUCTS = [
  {
    id: 1,
    productName: "Laptop",
    price: 1000,
    productImageAddress: "/Laptop.jpg",
    starRate: 2.5,
  },
  {
    id: 2,
    productName: "Camera",
    price: 1500,
    productImageAddress: "/Camera.jpg",
    starRate: 2.5,
  },
  {
    id: 3,
    productName: "TV",
    price: 6900,
    productImageAddress: "/TV.jpg",
    starRate: 2.5,
  },
  {
    id: 4,
    productName: "Xbox",
    price: 3200,
    productImageAddress: "/Xbox.jpg",
    starRate: 2.5,
  },
  {
    id: 5,
    productName: "Headset",
    price: 4300,
    productImageAddress: "/Headset.jpg",
    starRate: 2.5,
  },
];

function getProductData(id) {
  let productData = PRODUCTS.find((product) => product.id === id);

  return productData;
}

export { PRODUCTS, getProductData };
