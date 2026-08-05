import { useCounter } from "react";
function useCounter() {
    const[count,setCount]=useState(10);

    const addElement =()=> {
        setCounter(counter+1);
    };
    const removeElement =()=> {
        setCounter(counter-1);
    };
    const reset =()=> {
     setCounter(0);
    };

  return (
    {count,addElement,removeElement,reset} = useCounter() 
    );
}
export default useCounter;