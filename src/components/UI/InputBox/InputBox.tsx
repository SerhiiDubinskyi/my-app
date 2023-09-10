import "./InputBox.css"

export interface InputBoxProps {
    type: string;
    name: string;
    title: string
}

export default function InputBox({props}: {props: InputBoxProps}) {

    return (
      <div className="InputBox">
        <input type={props.type} name={props.name} required={true}/>
        <span>{props.title}</span>
      </div>
    );
  }