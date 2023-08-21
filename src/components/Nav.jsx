import { useState, useContext } from 'react';
import { Badge, Menu, Modal, ConfigProvider, message, Divider, Space, Empty} from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { CartContext } from '../context/CartContext';
import CartProduct from './CartProduct';
import Search from 'antd/es/input/Search';







export default function Nav(){

  //states for Cart modal

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    message.success("سفارش با موفقیت ثبت شد")
    
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    
  };

  //states for Login modal 

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginOk = () => {
    setIsLoginModalOpen(false);
    message.success("با موفقیت وارد شدید ")
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };
  
  const onSearch = (value) => console.log(value);

  const cart = useContext(CartContext)
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  
  
    
  return (
    <ConfigProvider direction='ltr'>
      <Menu mode="horizontal" style={{justifyContent: 'center', position: 'relative', display: 'flex'}} >
        <Space split={<Divider type='vertical'/>} style={{position: 'absolute', top: 0, left: 0}} >
        <Menu.Item key={'1'} >
        
        <>
          <Badge count={productsCount} overflowCount={9}>
            
            <ShoppingCartOutlined  style={{ fontSize: '25px' }} onClick={showModal}  />
            
          </Badge>
          <ConfigProvider direction='ltr'>

            {/* Cart Modal */}

            <Modal title={<h4 style={{textAlign: 'center'}}>سبد خرید</h4>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
              okText="ثبت سفارش"  cancelText="بازگشت" >
              {productsCount > 0 ? (
                <>
                {cart.items.map((item) => (
                  <CartProduct key={item.id} id={item.id} quantity={item.quantity}>
                  </CartProduct>
                ))}
                <h4 className='my-4' style={{textAlign: 'center'}}> قیمت نهایی: {cart.getTotalAmount()} </h4>
                </>
              ) : (
                <h4 className='my-4'> سبد خرید شما خالی است !</h4>
              )}


            </Modal>
            
          </ConfigProvider>
          
        </>
        </Menu.Item >
        <Menu.Item key={'2'} >
         <UserOutlined style={{fontSize: '23px'}} onClick={showLoginModal} />
          
          {/* Login Modal */}

          <Modal title={<h4 style={{textAlign: 'center'}}>ورود به حساب کاربری</h4>}
              open={isLoginModalOpen} onOk={handleLoginOk} onCancel={handleLoginCancel}
              okText="ورود" cancelText="بازگشت" >

                <Empty />
          </Modal>

        </Menu.Item>
        </Space>

        <Menu.Item key={'3'} disabled>
          <Space style={{justifyContent: 'center', width: '100%'}} >
            <Search
              
              dir='rtl'
              placeholder='نام کالای موردنظر را وارد کنید...'
              onSearch={onSearch}
              style={{ width: 400 }} />
              
          </Space>
        </Menu.Item>

        <Menu.Item key={'4'} style={{position: 'absolute', top: 0, right: 0}} >
        
          <a href="/" style={{fontSize: '20px'}}> نام فروشگاه اینترنتی </a>
        
        </Menu.Item>
      </Menu>
    </ConfigProvider>
  )
}