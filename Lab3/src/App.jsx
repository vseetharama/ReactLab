import { useState } from 'react'
const App=()=>{
  const[count,setCount]=useState(0);
  const [step,setStep]=useState(1);
  const increment=()=>{
    setCount(count+step);
  };
  const decrement=()=>{
    if(count-step>=0){
      setCount(count-step);
    }else{
      setCount(0);
    }
  };
  const reset=()=>{
    setCount(0);
  };
  return(
    <div style={style.container}>
      <h1>Counter Application</h1>
      <h2>Counter Value:{count}</h2>
      <div ><label>Step Value:</label>
       <input style={style.input} type='number' value={step} onChange={(e)=>setStep(Number(e.target.value))}
       />
       </div>
       <div>
        <button onClick={increment} style={style.button}>
          Increment
        </button>
        <button onClick={decrement} style={style.button}>
          Decrement
        </button>
        <button onClick={reset} style={style.resetButton}>
          Reset
        </button>
       </div>
    </div>
  );

};
const style={
  container:{ textAlign:'center', padding:'20px', fontFamily:'Arial'},
  input:{ marginLeft:'10px', padding:'5px', fontSize:'16px'},
  button:{ margin:'5px', padding:'5px', fontSize:'16px', cursor:'pointer'},
  resetButton:{ backgroundColor:'red', color:'white' ,cursor:'pointer',margin:'5px', padding:'5px', fontSize:'16px'}
};
export default App;
