
import HeaderMain from './componentes/HeaderMain.jsx';
import Calculator from './componentes/Calculator.jsx';
import OPTIONS from './assets/constants/constants.js';

import './App.css';

function App() {
 
  return (
    <div className="contCentral">

      <HeaderMain
        title={OPTIONS.title}
        subtitle={OPTIONS.subtitle}

        style={OPTIONS.styleHeaderMain}
      />
      <Calculator

      />

    </div>
  )
}

export default App;
