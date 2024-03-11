import Key from "./Key.jsx";
import "./KeyPad.css";

function KeyPad({ addInput, setInput, delInput, resultCalculator }) {
  return (
    <div className="containerKeys">
      <div className="containerFileKeys">
        <Key setInput={() => setInput("0")}><span className="spanKey">AC</span></Key>
        <Key setInput={() => setInput(delInput)}><span className="spanKey">DEL</span></Key>
        <Key addInput={addInput}><span className="spanKey">%</span></Key>
        <Key addInput={addInput}><span className="spanKey">+/-</span></Key>
      </div>
      <div className="containerFileKeys">
        <Key addInput={addInput}><span className="spanKey">7</span></Key>
        <Key addInput={addInput}><span className="spanKey">8</span></Key>
        <Key addInput={addInput}><span className="spanKey">9</span></Key>
        <Key addInput={addInput}><span className="spanKey">*</span></Key>
        <Key addInput={addInput}><span className="spanKey">/</span></Key>
      </div>
      <div className="containerFileKeys">
        <Key addInput={addInput}><span className="spanKey">4</span></Key>
        <Key addInput={addInput}><span className="spanKey">5</span></Key>
        <Key addInput={addInput}><span className="spanKey">6</span></Key>
        <Key addInput={addInput}><span className="spanKey">-</span></Key>
        <Key addInput={addInput}><span className="spanKey">√</span></Key>
      </div>
      <div className="containerFileKeys">
        <Key addInput={addInput}><span className="spanKey">1</span></Key>
        <Key addInput={addInput}><span className="spanKey">2</span></Key>
        <Key addInput={addInput}><span className="spanKey">3</span></Key>
        <Key addInput={addInput}><span className="spanKey">+</span></Key>
        <Key addInput={addInput}><span className="spanKey">^</span></Key>
      </div>
      <div className="containerFileKeys lastFile">
        <Key addInput={addInput}><span className="spanKey">0</span></Key>
        <div className="containerDecCal">
          <Key addInput={addInput}><span className="spanKey">.</span></Key>
          <Key addInput={resultCalculator}><span className="spanKey">=</span></Key>
        </div>
      </div>
    </div>
  );
}

export default KeyPad;

/*
<div className="containerKeys">
      <div className="containerFileKeys">
        <Key setInput={setInput}><span className="spanKey">AC</span></Key>
        <Key addInput={addInput}><span className="spanKey">+/-</span></Key>
        <Key addInput={addInput}><span className="spanKey">%</span></Key>
        <Key addInput={addInput}><span className="spanKey">/</span></Key>
      </div>
      <div className="containerFileKeys">
        <Key addInput={addInput}><span className="spanKey">7</span></Key>
        <Key addInput={addInput}><span className="spanKey">8</span></Key>
        <Key addInput={addInput}><span className="spanKey">9</span></Key>
        <Key addInput={addInput}><span className="spanKey">*</span></Key>
      </div>
      <div className="containerFileKeys">
        <Key addInput={addInput}><span className="spanKey">4</span></Key>
        <Key addInput={addInput}><span className="spanKey">5</span></Key>
        <Key addInput={addInput}><span className="spanKey">6</span></Key>
        <Key addInput={addInput}><span className="spanKey">-</span></Key>
      </div>
      <div className="containerFileKeys">
        <Key addInput={addInput}><span className="spanKey">1</span></Key>
        <Key addInput={addInput}><span className="spanKey">2</span></Key>
        <Key addInput={addInput}><span className="spanKey">3</span></Key>
        <Key addInput={addInput}><span className="spanKey">+</span></Key>
      </div>
      <div className="containerFileKeys lastFile">
        <Key addInput={addInput}><span className="spanKey">0</span></Key>
        <div className="containerDecCal">
          <Key addInput={addInput}><span className="spanKey">.</span></Key>
          <Key addInput={resultCalculator}><span className="spanKey">=</span></Key>
        </div>
      </div>
    </div>
*/

