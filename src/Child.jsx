import { useMemo } from "react";

const Child = useMemo(({onClick}) => {
  console.log('Child renderd')
  return <button onClick={onClick}>Click</button>
});

export default Child