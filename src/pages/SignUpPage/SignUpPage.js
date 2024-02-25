import AuthForm from "../../components/AuthForm/AuthForm";
import "./SignUpPage.scss";

function SignUpPage() {
  return (
    <div className="sign-up">
      <AuthForm formHeading="sign up" formButton="sign up" />
    </div>
  );
}

export default SignUpPage;
