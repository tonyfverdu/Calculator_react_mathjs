import { useState } from "react";
import Display from "./Display.jsx";
import KeyPad from "./KeyPad.jsx";
import OPTIONS from "./../assets/constants/constants.js";
import { evaluate } from 'mathjs';
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState('0');

  function addInput(parInput) {
    if (input === "Syntax error" || input === "0") {
      setInput(parInput);
    } else if (parInput === "." && (input.slice(-1) === "." || input.slice(-2).includes("."))) {
      return;
    } else if (parInput === '√') {
      setInput(Math.sqrt(input));
    } else if (OPTIONS.operators.includes(input.slice(-1)) && OPTIONS.operators.includes(parInput)) {
      setInput(input.slice(0, -1) + parInput);
    } else {
      setInput(input + parInput);
    }
  }

  function delInput() {
    if (input === "Syntax error" || input === "0") {
      return;
    } else {
      setInput(input.slice(0, -1));
    }
  }

  function resultCalculator() {
    if (input) {
      try {
        const result = evaluate(input);
        setInput(result);
      } catch (error) {
        setInput("Syntax error");
      }
    }
  }

  return (
    <div className="containerCalculator" >
      <Display
        input={input}
      />

      <KeyPad
        addInput={addInput}
        delInput={delInput}
        setInput={setInput}
        resultCalculator={resultCalculator}
      />
    </div >
  )
}

export default Calculator;

/*
        } else if (OPTIONS.operators.includes(input.slice(-1)) && OPTIONS.operators.includes(parInput)) {
*/
