// import { useState } from "react";
import React, { useState } from "react";
import "./estilo.css";

function Calculator() {
  const [number, setNumber] = useState(0);
  const [numberantigo, SetNumeroantigo] = useState(0);
  const [operador, setOperador] = useState();

  function Botao(e) {
    var input = e.target.value;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }
  function Limpar() {
    setNumber(0);
  }

  function Porcentagem() {
    setNumber(number / 100);
  }

  function Manipulador() {
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  }

  function valor(e) {
    var operadorInput = e.target.value;
    setOperador(operadorInput);
    SetNumeroantigo(number);
    setNumber(0);
  }

  function Calcular() {
    if (operador === "/") {
      setNumber(numberantigo / number);
    } else if (operador === "x") {
      setNumber(numberantigo * number);
    } else if (operador === "-") {
      setNumber(numberantigo - number);
    } else if (operador === "+") {
      setNumber(parseFloat(numberantigo) + parseFloat(number));
    }
  }

  return (
    <div className="container">
    <div className="calculadora">
      <div>
        <h1>Calculadora</h1>
      </div>
      <div className="result">
        <p> {number}</p>
      </div>
      <div className="botaoone">
        <button onClick={Limpar} className="red">
          C
        </button>
        <button className="green">()</button>
        <button className="green" onClick={Porcentagem} >
          %
        </button>
        <button className="green" onClick={valor} value="/" >
          ÷
        </button>
      </div>

      <div>
        <button onClick={Botao} value={7}>
          7
        </button>
        <button onClick={Botao} value={8}>
          8
        </button>
        <button onClick={Botao} value={9}>
          9
        </button>
        <button className="green" onClick={valor} value="x">
          X
        </button>
      </div>

      <div>
        <button onClick={Botao} value={4}>
          4
        </button>
        <button onClick={Botao} value={5}>
          5
        </button>
        <button onClick={Botao} value={6}>
          6
        </button>
        <button className="green" onClick={valor} value="-">
          -
        </button>
      </div>

      <div>
        <button onClick={Botao} value={1}>
          1
        </button>
        <button onClick={Botao} value={2}>
          2
        </button>
        <button onClick={Botao} value={3}>
          3
        </button>
        <button className="green" onClick={valor} value="+">
          +
        </button>
      </div>

      <div>
        <button onClick={Manipulador}>+/-</button>
        <button onClick={Botao} value={0}>
          0
        </button>
        <button onClick={Botao} value={","}>
          ,
        </button>
        <button className="green" onClick={Calcular}>
          =
        </button>
      </div>
      </div>
      </div>
  );
}

export default Calculator;
