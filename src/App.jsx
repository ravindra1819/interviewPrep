import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Practice/home';
import Feature1 from './Practice/Feature1';
import Feature2 from './Practice/feature2';


function App() {

  const navigate = useNavigate();

  const [changedInput, setChangedInput] = useState('Manvitha');
  const inputChange = (inputValue) => {
    setChangedInput(inputValue);
    navigate('/')
  }

  const [changeGenderCountry, setChangeGenderCountry] = useState("");
  const valuechange = (inputValue1)=>{
    setChangeGenderCountry(inputValue1)
    navigate('/')
  }
  const [gender, setGender] = useState(() => sessionStorage.getItem("gender") || "");
  const [country, setCountry] = useState(() => sessionStorage.getItem("country") || "");

  useEffect(() => {
    sessionStorage.setItem("gender", gender)
  }, [gender]);

  useEffect(() => {
    sessionStorage.setItem("country", country)
  }, [country]);



  return (
    <>
      <Routes>
        <Route path='/' element={<Home
          changedInput={changedInput}
          gender={gender}
          country={country} />} />
        
        <Route path='/manvi' element={<Feature1 inputChange={inputChange} changedInput={changedInput} />} />
        
        <Route path='/srr'
          element={<Feature2
            valuechange={valuechange}
            gender={gender}
            country={country}
            setGender={setGender}
            setCountry={setCountry}
          />} />
      </Routes>
    </>
  )
}
export default App;
