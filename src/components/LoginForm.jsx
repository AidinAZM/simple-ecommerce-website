import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Checkbox, ConfigProvider, Form, Input, Modal } from "antd";

export default function LoginForm({
  isLoginModalOpen,
  handleLoginOk,
  handleLoginCancel,
  isRegisterForm,
  handleRegister,
  handleLoginState,
}) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Modal
      title={<h4 style={{ textAlign: "center" }}>ورود به حساب کاربری</h4>}
      open={isLoginModalOpen}
      onOk={handleLoginOk}
      onCancel={handleLoginCancel}
      okText={isRegisterForm ? "ثبت نام" : "ورود"}
      cancelText="بازگشت"
      style={{ position: "relative" }}
    >
      {isRegisterForm && (
        <ArrowLeftOutlined
          style={{ position: "absolute", top: 25, left: 15, fontSize: "20px" }}
          onClick={handleLoginState}
        />
      )}
      <ConfigProvider direction="rtl">
        <Form
          name="normal_login"
          className=" mt-5"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ position: "relative" }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "لطفاً نام کاربری خود را وارد کنید!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="نام کاربری" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "لطفاً رمز عبور را وارد کنید!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="رمز عبور"
            />
          </Form.Item>
          {!isRegisterForm ? (
            <>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a href="#" style={{ position: "absolute", right: 0 }}>
                  فراموشی رمز عبور
                </a>
              </Form.Item>

              <Form.Item style={{ position: "absolute" }}>
                یا{" "}
                <a href="#" onClick={handleRegister}>
                  همین الان ثبت نام کنید
                </a>
              </Form.Item>
            </>
          ) : (
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "فرمت ایمیل صحیح نیست!",
                },
                {
                  required: true,
                  message: "لطفاً ایمیل خود را وارد کنید",
                },
              ]}
            >
              <Input
                placeholder="ایمیل"
                type="email"
                prefix={<MailOutlined />}
              />
            </Form.Item>
          )}
        </Form>
      </ConfigProvider>
    </Modal>
  );
}
