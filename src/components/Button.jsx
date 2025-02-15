import "./Button.css";
function Button({text, onClick}){
    return (
        <button id="Btn"onClick={onClick}>
  {text}
</button>
    )
}

export default Button;