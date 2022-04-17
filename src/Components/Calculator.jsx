import React, { useState } from "react";
import "../App.css";

function Calculator() {
  const [result, setResult] = useState("");

  const changeHandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clearHandler = () => {
    setResult("");
  };
  const removeOneHandler = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult(error);
    }
  };
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" placeholder="0" value={result} readOnly />
        </form>
        <div className="keypad">
          <button onClick={clearHandler} id="clear" className="highlight">
            Clear
          </button>
          <button onClick={removeOneHandler} className="highlight">
            C
          </button>
          <button name="/" onClick={changeHandler} className="highlight">
            /
          </button>
          <button name="7" onClick={changeHandler}>
            7
          </button>
          <button name="8" onClick={changeHandler}>
            8
          </button>
          <button name="9" onClick={changeHandler}>
            9
          </button>
          <button name="*" onClick={changeHandler} className="highlight">
            *
          </button>
          <button name="4" onClick={changeHandler}>
            4
          </button>
          <button name="5" onClick={changeHandler}>
            5
          </button>
          <button name="6" onClick={changeHandler}>
            6
          </button>
          <button name="-" onClick={changeHandler} className="highlight">
            -
          </button>
          <button name="1" onClick={changeHandler}>
            1
          </button>
          <button name="2" onClick={changeHandler}>
            2
          </button>
          <button name="3" onClick={changeHandler}>
            3
          </button>
          <button name="+" onClick={changeHandler} className="highlight">
            +
          </button>
          <button name="0" onClick={changeHandler}>
            0
          </button>
          <button name="." onClick={changeHandler}>
            .
          </button>
          <button onClick={calculate} id="equal" className="highlight">
            {" "}
            ={" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
