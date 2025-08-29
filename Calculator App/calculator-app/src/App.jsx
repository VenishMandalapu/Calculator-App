import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("⚠️ Please enter both numbers");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "❌ Cannot divide by zero";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  const clearFields = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h1>🔢 React Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => calculate("+")}>➕ Add</button>
        <button onClick={() => calculate("-")}>➖ Subtract</button>
        <button onClick={() => calculate("*")}>✖ Multiply</button>
        <button onClick={() => calculate("/")}>➗ Divide</button>
        <button className="clear" onClick={clearFields}>🧹 Clear</button>
      </div>

      <p className="result">
        {result !== "" ? `Result: ${result}` : "Result will appear here"}
      </p>
    </div>
  );
}
