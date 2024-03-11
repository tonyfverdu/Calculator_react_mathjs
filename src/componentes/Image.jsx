import "./Image.css";

function Image(props) {
  return (
    <figure className="contFigure" style={{ ...props.style}}>
      <img
        className="logo"
        src={props.logo}
        alt={props.alt}
         />
    </figure>
  )
}

export default Image;
