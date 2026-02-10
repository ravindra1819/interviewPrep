import { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent(){
const [count, setCount] = useState(0);
const handleClick = useCallback(() => {
  console.log("clicked")
},[]);

return(
  <>
 <button onClick={()=> setCount(count+1)}>Increment</button>
 <Child onClick={handleClick}/> 
  </>
)}