import React, { useEffect, useState } from "react";

export default function Feature1( {inputChange,changedInput} ) {

const [field , setField] = useState('');
const handleClick = ()=> {
  inputChange(field)
}

useEffect(()=> {
    setField(changedInput);
}, [changedInput]);

  return (
    <>
      <input 
      type="text"
      value = {field}
      onChange={(e) => setField(e.target.value)}
      className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 m-3 rounded-lg shadow"
      />
      <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 m-3 rounded-lg shadow"
      onClick= {handleClick}
      >Submit</button>
    </>
  )

}