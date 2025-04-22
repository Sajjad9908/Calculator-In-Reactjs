import React, { useState } from "react";
import "./Calculator.css";


const Calculator = () => {
 const[number1,setNumber1]=useState("")
 const[number2,setNumber2]=useState('')
 const[operator,setOperator]=useState('')
 const[display,setDisplay]=useState("")

 const generateValue=(event)=>{
 let value=event.target.value;
 if(operator===""){
  setNumber1((prev)=>prev+value)
 }
 else{
  setNumber2((prev)=>prev+value)
 }
 setDisplay((prev)=>prev+value)
 }
  const getOperator=(event)=>{
    if(number1 && !operator){
      setOperator(event.target.value)
      setDisplay((prev)=>prev+event.target.value)
    }
    else if(operator && !number2){
      setOperator(event.target.value)
      setDisplay((prev)=>prev.slice(0,-1)+event.target.value)
      
    }
  };
  const calculate=()=>{
    
    if(number1 && number2 && operator){
      let result;
      let num1=Number(number1)
      let num2=Number(number2)
      switch(operator){
        case "+":
          result=num1+num2
          break;
        case "-":
          result=num1-num2
          break;
          case "*":
            result=num1*num2;
            break;
            case "/":
             result= num2!=="0"?num1/num2:"error"
             break;
             case "%":
              result=num1%num2;
              break;
              default:
                return;
      }
      setDisplay(result.toString())
      setNumber1(result.toString())
      setNumber2("")
      setOperator("")
    }
  };
  const backval=()=>{


    if(number2){
      setNumber2((prev)=>prev.slice(0,-1))
     
  }
   else if(number1){
      setNumber1((prev)=>prev.slice(0,-1))
    }
    else if(operator){
      setOperator("")
    }
    setDisplay((prev)=>prev.slice(0,-1))
  }
  const clearAll=()=>{
    setDisplay("")
    setNumber1("")
    setNumber2("")
    setOperator("")

  }

  return (
    <div className="container">
      <div className="input1">
        <input type="text" placeholder="0" value={display} readOnly />
      </div>
      <div className="button">
        <button onClick={getOperator} value="*"> * </button>
        <button onClick={getOperator} value="/"> / </button>
        <button onClick={getOperator} value="+"> + </button>
        <button onClick={getOperator} value="-"> - </button>
        <button onClick={getOperator} value="%"> % </button>
        <button onClick={backval}> Back </button>
        <button onClick={clearAll}> AC </button>
        <button onClick={generateValue} value="0"> 0 </button>
        <button onClick={generateValue} value="1"> 1 </button>
        <button onClick={generateValue} value="2"> 2 </button>
        <button onClick={generateValue} value="3"> 3 </button>
        <button onClick={generateValue} value="4"> 4 </button>
        <button onClick={generateValue} value="5"> 5 </button>
        <button onClick={generateValue} value="6"> 6 </button>
        <button onClick={generateValue} value="7"> 7 </button>
        <button onClick={generateValue} value="8"> 8 </button>
        <button onClick={generateValue} value="9"> 9 </button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
