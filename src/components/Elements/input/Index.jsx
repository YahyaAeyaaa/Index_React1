import Label from "./Label";
import Input from "./Input";

function Form (props) {
    const { name , type , placeholder , text} = props
    return (
        <div>
            <Label htmlFor={name} text={text} name={name} ></Label>
            <Input type={type} placeholder={placeholder} name={name} />
        </div>
    )
}

export default Form;