import React, { useEffect, useState } from "react"

export default function Feature2({ inputChange,changedInput }) {

  const[saveGender , setSaveGender] = useState("");
  const[saveCountry, setSaveCountry] = useState("");

  return (
    <>
      <div>
        <label for="gender">Gender : </label>
        <label for="gender">
          <input type="radio" name="gender" id="male" className="m-1" /> Male
          <input type="radio" name="gender" id="female" className="m-1" /> Female
          <input type="radio" name="gender" id="others" className="m-1" /> Others
        </label>
      </div>

      <div>
        <label for="country"> Country :
          <select name="country">
            <option value="india"> India </option>
            <option value="usa"> USA </option>
            <option value="russia"> Russia </option>
            <option value="africa"> Africa </option>
          </select>
        </label>
      </div>

        <button 
        className="bg-pink-300 hover:bg-pink-500 text-white font-medium px-4 py-2 m-3 rounded-lg shadow"
        >Submit</button>



    </>
  )

}