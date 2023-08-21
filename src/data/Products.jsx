
const PRODUCTS = [
    {
        id: 1,
        productName: 'Product 1',
        price: 1000,
        productImageAddress: `https://picsum.photos/20${Math.floor(Math.random()*50)}`
    },
    {
        id: 2,
        productName: 'Product 2',
        price: 1500,
        productImageAddress: `https://picsum.photos/20${Math.floor(Math.random()*50)}`
    },
    {
        id: 3,
        productName: 'Product 3',
        price: 6900,
        productImageAddress: `https://picsum.photos/20${Math.floor(Math.random()*50)}`
    },
    {
        id: 4,
        productName: 'Product 4',
        price: 3200,
        productImageAddress: `https://picsum.photos/20${Math.floor(Math.random()*50)}`
    },
    {
        id: 5,
        productName: 'Product 5',
        price: 4300,
        productImageAddress: `https://picsum.photos/20${Math.floor(Math.random()*50)}`
    },
]

function getProductData(id) {
    let productData = PRODUCTS.find((product) => product.id === id)

    return productData
}

export { PRODUCTS, getProductData}