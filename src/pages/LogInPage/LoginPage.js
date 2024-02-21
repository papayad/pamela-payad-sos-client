import AuthForm from "../../components/AuthForm/AuthForm";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <div className="login">
      <AuthForm formHeading="login" formButton="login" />
    </div>
  );
}

export default LoginPage;
