function Label(props) {
    const { text = ".... " , className = "" , htmlFor = "" , name = "" } = props
    return (
                <label htmlFor={htmlFor} name={name} className={`block mb-1 ${className}`}>
        {text}
        </label>
    )
}

export default Label;