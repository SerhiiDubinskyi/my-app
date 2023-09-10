
import InputBox, {InputBoxProps} from "../InputBox/InputBox";
import "./LoginForm.css"

export default function LoginForm() {

  const login: InputBoxProps = {
    type: "text",
    name: "login",
    title: "Login"
  }
  const password: InputBoxProps = {
    type: "password",
    name: "password",
    title: "Password"
  }

  return (
    <div className="LoginForm">
      <InputBox props={login}/>
      <InputBox props={password}/>
    </div>
  );
}