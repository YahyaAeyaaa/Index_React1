function Button(props) {
  const { text = "...", 
    color = "bg-slate-400" , 
    className = "" , 
    onClick = () => {} , 
    type = "button",
        } = props;

  return (
    <button className={`h-10 p-2 px-6 font-semibold rounded-md ${color} text-white ${className}`}
      type = {type}
      onClick = {() => onClick()}
      >
      {text}
      
    </button>
  );
}

export default Button;
