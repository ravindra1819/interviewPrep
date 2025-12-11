import React, { useEffect, useState } from "react"

export default function Feature2({ gender, country, setGender, setCountry , valuechange }) {

  const handleSubmit = ()=>{
    valuechange("Data Saved");
  }

  return (
    <>
      <div className="m-4">
        <label >Gender : </label> <br />
          <input type="radio" name="gender" value="male" className="m-1" 
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
          /> Male
          <input type="radio" name="gender" value="female" className="m-1" 
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
          /> Female
          <input type="radio" name="gender" value="others" className="m-1" 
          checked={gender === "others"}
          onChange={(e)=> setGender(e.target.value)}
          /> Others
      </div>

      <div className="m-4">
        <label className="m-2"> Country :
          <select name="country" 
          value={country}
          onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select</option>
            <option value="India"> India </option>
            <option value="USA"> USA </option>
            <option value="Russia"> Russia </option>
            <option value="Africa"> Africa </option>
          </select>
        </label>
      </div>

        <button 
        className="bg-pink-300 hover:bg-pink-500 text-white font-medium px-4 py-2 m-3 rounded-lg shadow"
        onClick={handleSubmit}
        >Submit</button>

    </>
  )

}