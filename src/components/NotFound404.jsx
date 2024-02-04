import { Result } from "antd";
function NotFound404() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="متاسفانه صفحه موردنظر پیدا نشد :("
      />
    </div>
  );
}

export default NotFound404;
