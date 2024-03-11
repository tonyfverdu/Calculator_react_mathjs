import Image from "./Image.jsx";

import logoReact from '../assets/images/react.svg';
import "./HeaderMain.css";

function HeaderMain(props) {
  return (
    <div className="headerMain">

      <Image
        logo={logoReact}
        alt="Logo de React"
        width="100px"
        height="100px"
      />

      <h2 className="title">{props.title}</h2>
      <h5 className="subtitle">{props.subtitle}</h5>
    </div>
  )
}


export default HeaderMain;
