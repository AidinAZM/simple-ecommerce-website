import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getProductData } from "../data/Products";
import { Button, ConfigProvider, Table } from "antd";
import { DeleteOutlined } from '@ant-design/icons';


export default function CartProduct({id, quantity}) {
    const cart = useContext(CartContext)

    const productData = getProductData(id)

    const columns = [
        {
            title: 'نام محصول',
            dataIndex: 'productName',
            key: 'productName',

        },
        {
            title: 'تعداد',
            dataIndex: 'productQuantity',
            key: 'productQuantity',
        },
        {
            title: 'قیمت',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '',
            dataIndex: 'deleteOperator',
            key: 'deleteOperator'
        }
    ];
    
    
    const dataSource = [
        {
            key: productData.productName,
            productName: productData.productName,
            productQuantity: quantity,
            price: productData.price * quantity,
            deleteOperator: <Button 
                onClick={() => cart.deleteFromCart(id)}>
                    <DeleteOutlined />
                </Button>
        },
    ]
    

    return (
        <>
            <ConfigProvider direction="rtl">
            <Table pagination={false} dataSource={dataSource} columns={columns} />
            </ConfigProvider>
        </>
    )
}