import LoginForm from "../../components/UI/LoginForm/LoginForm";
import InputBox, {InputBoxProps} from "../../components/UI/InputBox/InputBox";
import "./AccountCreator.css"
import ShadowCard from "../../components/UI/ShadowCard/ShadowCard";

export default function AccountCreator() {
    const accProps: InputBoxProps = {
        type: "text",
        name: "acc",
        title: "Account"
    };

    return (
      <div className="AccountCreator">
        <ShadowCard>
          <LoginForm/>
        </ShadowCard>
      </div>
    );
  }