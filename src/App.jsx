import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Practice/home';
import Feature1 from './Practice/Feature1';
import Feature2 from './Practice/feature2';


function App() {
  const navigate = useNavigate();
  const [changedInput, setChangedInput] = useState('Manvitha'); 
  const inputChange = (inputValue)=> {
    setChangedInput(inputValue);
    navigate('/') 
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home changedInput = {changedInput}/>} />
        <Route path='/manvi' element={<Feature1 inputChange = {inputChange} changedInput = {changedInput}/>}/>
        <Route path='/srr' element={<Feature2/>}/>
      </Routes>
    </>
  )
}
export default App;
