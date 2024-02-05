import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Form, Input, Modal } from "antd";

export default function LoginForm({
  isLoginModalOpen,
  handleLoginOk,
  handleLoginCancel,
  isRegisterForm,
  handleRegister,
  handleLoginState,
  form,
}) {
  const handleFormFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Modal
      title={
        !isRegisterForm ? (
          <h4 style={{ textAlign: "center" }}>ورود به حساب کاربری</h4>
        ) : (
          <h4 style={{ textAlign: "center" }}>فرم ثبت نام</h4>
        )
      }
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
          form={form}
          name="normal_login"
          className=" mt-5"
          onFinish={handleFormFinish}
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
            <Form.Item style={{ position: "absolute" }}>
              یا{" "}
              <a href="#" onClick={handleRegister}>
                همین الان ثبت نام کنید
              </a>
            </Form.Item>
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
