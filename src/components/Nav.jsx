import { useState, useContext } from "react";
import {
  Badge,
  Menu,
  Modal,
  ConfigProvider,
  message,
  Divider,
  Space,
  Empty,
  Button,
  Drawer,
} from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";
import Search from "antd/es/input/Search";

export default function Nav() {
  //states for Cart modal

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    setOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    message.success("سفارش با موفقیت ثبت شد");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //states for Login modal

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const showLoginModal = () => {
    setIsLoginModalOpen(true);
    setOpen(false);
  };

  const handleLoginOk = () => {
    setIsLoginModalOpen(false);
    message.success("با موفقیت وارد شدید ");
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };

  const onSearch = (value) => console.log(value);

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <ConfigProvider direction="ltr">
      <Menu
        mode="horizontal"
        style={{
          justifyContent: "space-between",
          position: "relative",
          display: "flex",
        }}
      >
        <Space
          split={<Divider type="vertical" />}
          style={{ position: "absolute", top: 0, left: 0 }}
          className="responsiveNav"
        >
          <Menu.Item key={"cart"}>
            <>
              <Badge count={productsCount} overflowCount={9}>
                <ShoppingCartOutlined
                  style={{ fontSize: "25px" }}
                  onClick={showModal}
                />
              </Badge>
              <ConfigProvider direction="ltr">
                {/* Cart Modal */}

                <Modal
                  title={<h4 style={{ textAlign: "center" }}>سبد خرید</h4>}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  okText="ثبت سفارش"
                  cancelText="بازگشت"
                >
                  {productsCount > 0 ? (
                    <>
                      {cart.items.map((item) => (
                        <CartProduct
                          key={item.id}
                          id={item.id}
                          quantity={item.quantity}
                        ></CartProduct>
                      ))}
                      <h4 className="my-4" style={{ textAlign: "center" }}>
                        {" "}
                        قیمت نهایی: {cart.getTotalAmount()}{" "}
                      </h4>
                    </>
                  ) : (
                    <h4 className="my-4" style={{ textAlign: "center" }}>
                      {" "}
                      سبد خرید شما خالی است !
                    </h4>
                  )}
                </Modal>
              </ConfigProvider>
            </>
          </Menu.Item>
          <Menu.Item key={"userAcc"}>
            <UserOutlined
              style={{ fontSize: "23px" }}
              onClick={showLoginModal}
            />

            {/* Login Modal */}

            <Modal
              title={
                <h4 style={{ textAlign: "center" }}>ورود به حساب کاربری</h4>
              }
              open={isLoginModalOpen}
              onOk={handleLoginOk}
              onCancel={handleLoginCancel}
              okText="ورود"
              cancelText="بازگشت"
            >
              <Empty />
            </Modal>
          </Menu.Item>
        </Space>

        <Menu.Item key={"searchBar"} disabled>
          <Space>
            <Search
              dir="rtl"
              placeholder="نام کالای موردنظر را وارد کنید..."
              onSearch={onSearch}
              style={{ width: 300 }}
            />
          </Space>
        </Menu.Item>
        <Menu.Item
          key={"hamburger"}
          disabled
          className="px-1 mx-1"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          <Button type="text" onClick={showDrawer} className="hamburgerMenu">
            <MenuOutlined style={{ fontSize: "17px" }} />
          </Button>
          <Drawer
            placement="right"
            onClose={onClose}
            open={open}
            width={"200px"}
          >
            <Button type="text" block>
              <a href="/">
                <HomeOutlined style={{ fontSize: "20px" }} /> صفحه اصلی
              </a>
            </Button>
            <Divider />
            <Button type="text" block onClick={showModal}>
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              <span style={{ fontWeight: "bold" }}>سبد خرید</span>
            </Button>
            <Divider />
            <Button type="text" block onClick={showLoginModal}>
              <UserOutlined
                style={{ fontSize: "20px" }}
                onClick={showLoginModal}
              />
              <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                ورود به حساب کاربری
              </span>
            </Button>
          </Drawer>
        </Menu.Item>
        <Menu.Item key={"brand"}>
          <a href="/" style={{ fontSize: "20px" }} className="responsiveNav">
            {" "}
            نام فروشگاه اینترنتی{" "}
          </a>
        </Menu.Item>
      </Menu>
    </ConfigProvider>
  );
}
