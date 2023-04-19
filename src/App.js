
//1. Import Area

import { useReducer  } from "react";
import { ADDITION, CLEAR, DIVISION, MULTIPLICATION, NUMBER, RESULT, SUBSCRATION } from "./reducer/actions/Actions";



let oldState={
  result:0,
  leftvalue: '',
  operator: '',
  rightvalue: '',
  
}

let reducerFunction = (oldState,action)=>{
      let newState = oldState;
      console.log('oldstate----->',oldState)
      console.log('action----->',action)
      switch(action.type){
          case CLEAR:
         // alert('CLEAR');
         return {
          result:0,
          leftvalue: '',
          operator: '',
          rightvalue: ''
         }
            
          case DIVISION:
           // alert('DIVISION');
           return {
            ...newState,
            operator: '/'
           }
            
          case MULTIPLICATION:
           // alert('MULTIPLICATION');
           return {
            ...newState,
            operator:'*'
           }
            
          case SUBSCRATION:
           // alert('SUBSCRATION');

           return {
            ...newState,
            operator:'-'
           }
            
          case ADDITION:
           // alert('ADDITION');
           return {
            ...newState,
            operator: "+"
           }
            
          case RESULT:
            switch(newState.operator){
              case "+":
                  return {
                    ...newState,
                    result: parseFloat(newState.leftvalue) + parseFloat(newState.rightvalue)
                  }
              
              case "-":
                  return {
                    ...newState,
                    result: parseFloat(newState.leftvalue) - parseFloat(newState.rightvalue)
                  }
              
              case "/":
                  return {
                    ...newState,
                    result: parseFloat(newState.leftvalue) / parseFloat(newState.rightvalue)
                  }
              
              case "*":
                  return {
                    ...newState,
                    result:parseFloat(newState.leftvalue) * parseFloat(newState.rightvalue)
                  }
              
              default:
            }
           // alert('RESULT'); 
           return {
            ...newState,
            operator: "="
           }

            
          case NUMBER:
            if(newState.operator === ''){
              return {
                ...newState,
                leftvalue: newState.leftvalue +action.payload
              }
            }else{
              return {
                ...newState,
                  rightvalue: newState.rightvalue +action.payload
              }
            }
            
            
          default:
          }
      return newState;
}
//2. Defination Area



function App() {

    //2.1 Hooks area

    const [newState,dispatch] = useReducer(reducerFunction,oldState)

    //2.2 Defination area

    //2.3 Return area
  return (

    <>
      {console.log('newstate----->',newState)}
      <div className="container">
          <form action="true" name="calc" className="calculator">
            <input type="text" className="value" value={newState.result === 0? newState.leftvalue+newState.operator+newState.rightvalue : newState.result} readonly name="txt" />
            <span className="num clear" onClick={()=>{ dispatch({type:CLEAR}) }}><i>C</i></span>
            <span className="num" onClick={()=>{ dispatch({type:DIVISION}) }}><i>/</i></span>
            <span className="num" onClick={()=>{ dispatch({type:MULTIPLICATION}) }}><i>*</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:7}) }}><i>7</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:8}) }}><i>8</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:9}) }}><i>9</i></span>
            <span className="num" onClick={()=>{ dispatch({type:SUBSCRATION}) }}><i>-</i></span>
            <span onClick={()=>{ dispatch({type:NUMBER,payload:4}) }}><i>4</i></span>
            <span onClick={()=>{ dispatch({type:NUMBER,payload:5}) }}><i>5</i></span>
            <span onClick={()=>{ dispatch({type:NUMBER,payload:6}) }}><i>6</i></span>
            <span className="num plus" onClick={()=>{ dispatch({type:ADDITION}) }}><i>+</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:1}) }}><i>1</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:2}) }}><i>2</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:3}) }}><i>3</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:0}) }}><i>0</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:'00'}) }}><i>00</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:'.'}) }}><i>.</i></span>
            <span className="num equal" onClick={()=>{ dispatch({type:RESULT}) }}><i>=</i></span>
          </form>
      </div>
    </>
  );
}

//Export Area

export default App;
