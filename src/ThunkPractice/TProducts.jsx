import { useDispatch , useSelector } from "react-redux";
import { fecthUsers } from "./tActionCreator";
import { useEffect } from "react";

export default function TProducts (){
  const dispacth = useDispatch();
  const {loading, products, error } = useSelector(state => state);

useEffect(()=> {
dispacth(fecthUsers());
},[])

return(
<>
{loading && <p>Loading...</p>}
{error && <p>{error}</p>}
{products.map(product=>(
  <p key={product.id}>{product.title}</p>
))}
</>
)
}