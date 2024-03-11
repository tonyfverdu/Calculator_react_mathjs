import "./Display.css";

function Display(props) {
  return (
    <div className="containerDisplay">
      <span>{props.input}</span>
    </div>
  )
}

export default Display;
