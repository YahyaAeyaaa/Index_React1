function Input (props) {
    const { type , placeholder = "Example" , className = "" , name = ""} = props
    return (
        <input 
        type={type} 
        className={`border rounded 2-full py-3 text-sm p-3 text-slate-800 ${className}`}
        placeholder={placeholder}
        name={name}
        />
    );
};

export default Input;