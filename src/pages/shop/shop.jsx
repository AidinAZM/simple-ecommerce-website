import { Col, Row} from "antd"
import ProductCard from "../../components/ProductCard"
import { PRODUCTS } from "../../data/Products"
export default function Shop(){
    return(
        <div className="container">
            <h1>inja shope</h1>
            <Row justify={"center"}>
                {PRODUCTS.map((productData) => {
                return (
                    <Col xs={8} sm={6} md={6} lg={6} xl={4} className="mx-5 mt-3" key={productData.id}>
                        <ProductCard key={productData.id} data={productData} />
                    </Col>)
                })}
            </Row>
        </div>
        
    )
}