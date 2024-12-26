import React, { useState } from 'react';
import Counter from './Counter';
export default function App() {
  // let name = '';
  // state variable
  const [name,setName] = useState('Neha');
  const handleclick = ()=>{
    // name = 'Akash';
    // alert(name);
    setName('Akash');
   }
  return (
    <div>
      {/* <h1>Hello {name}</h1>
      <button onClick = {handleclick}>Click</button> */}
      <Counter/>
    </div>
  )
}
