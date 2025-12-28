import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"

export default function Home({ changedInput, gender, country, changedFrom }) {
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  const inputValue1 = changedInput;
  const [abcValue, setAbcValue] = useState('');

  useEffect(() => {
    setAbcValue(`${gender} ${country}`)
  }, [gender, country])

  return (
    <div>
      <h1 className="flex justify-center items-center m-3">Hello Team!.... Changes from {changedFrom}</h1>
      <div>
        <button
          onClick={() => navigate1("/manvi")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 m-3 rounded-lg shadow"
        >Go to {inputValue1}</button>
      </div>
      <div>
        <button
          onClick={() => navigate2("/srr")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 m-3 rounded-lg shadow"
        >Go to {abcValue}</button>
      </div>
    </div>
  )

}