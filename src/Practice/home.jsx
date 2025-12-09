import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Feature1 from "./Feature1";

export default function Home( {changedInput} ) {
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  const inputValue = changedInput

  return (
    <div>
      <h1 className="flex justify-center items-center m-3">Hello Team!....</h1>
      <div>
        <button
        onClick={()=> navigate1("/manvi")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 m-3 rounded-lg shadow"
        >Go to {inputValue}</button>
      </div>
      <div>
        <button
        onClick={()=> navigate2("/srr")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 m-3 rounded-lg shadow"
        >Go to SRR</button>
      </div>
    </div>
  )

}