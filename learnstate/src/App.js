import React, { useState } from 'react';
import Counter from './Counter';
export default function App() {
  let name = 'Akash';
  const handleclick =()=> {
    name = 'neha';
  }
  // state variable
  // const [name,setName] = useState('Neha');
  // const handleclick = ()=>{
  //   // alert(name);
  //   setName('Akash');
  //  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick = {handleclick}>Click</button>
      <Counter/>
    </div>
  )
}
