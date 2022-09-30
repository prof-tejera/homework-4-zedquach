import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import style from "../style/Calculator.module.css"
import { useState } from "react";

const Calculator = () => {

  // STATE IS COMBINED TO MAKE SURE ALL STATE IS UPDATED BEFORE MODIFYING
  const [state, setState] = useState({
    isCalculated: true,
    currentTerm: "first",
    first: "",
    second: "",
    operator: "+",
    screenVal: "",
    equation: ""
  })

  const handleNumberClick = (digit) => {
    setState(prev => {
      if (prev.isCalculated) {
        return {
          isCalculated: false,
          currentTerm: "first",
          first: digit.toString(),
          second: "",
          operator: "+",
          screenVal: digit.toString(),
        }
      }
      else {
        return {...prev, [prev.currentTerm]: prev[prev.currentTerm] + digit, screenVal: prev.screenVal + digit }
      }
    })
  };

  const handleOperationClick = (operator) => {
    if(operator === "=") {
      console.log(state)
      setState(prev => {
        const res = calculate(prev.first, prev.second, prev.operator)
        return {
          ...prev,
          screenVal: res.toString(),
          equation: `${prev.first || 0} ${prev.operator} ${prev.second || 0} = `,
          first: res,
          isCalculated: true
        }
      })
    }
    else if(operator === "clear") {
      clear()
    }
    else {
      setState(prev => ({
        ...prev,
        currentTerm: "second",
        second: "",
        screenVal: "",
        isCalculated: false,
        operator,
        equation: `${prev.first || 0} ${operator}`
      }))
    }
  };

  const clear = () => {
    setState({
      isCalculated: true,
      currentTerm: "first",
      first: "",
      second: "",
      operator: "+",
      screenVal: "",
      equation: ""
    })
  }

  const calculate = (first, second, operator) => {
    first = first || 0
    second = second || 0
    switch (operator) {
      case "+":
        return parseFloat(first) + parseFloat(second)

      case "-":
        return parseFloat(first) - parseFloat(second)

      case "x":
        return parseFloat(first) * parseFloat(second)

      case "/":
        return parseFloat(first) / parseFloat(second)
    }
  }

  return (
    <div style={{flex: "flex", flexDirection: "column", width: "400px"}}>
      <Screen value={state.screenVal} equation={state.equation} />
      <div style={{ display: "flex", width: "100%", justifyContent:"space-between" }}>
        <div className={style.numberGroup}>
          <Number value={0} onClick={handleNumberClick} style={{flexBasis:"100%"}} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div className={style.operatorGroup}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
