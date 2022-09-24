import { useState } from "react";

function Counter (){
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <p className='text-4xl'>{counter}</p>
      <button
        type='button'
        className='w-[25%] h-[25%] border bg-yellow-500'
        onClick={() => setCounter(counter + 10)}>
        donate 10 taka
      </button>
      <button
        type='button'
        className='w-[25%] h-[25%] border bg-yellow-500'
        onClick={() => setCounter(counter + 15)}>
        donate 15 taka
      </button>
      <button
        type='button'
        className='w-[25%] h-[25%] border bg-red-500'
        onClick={() => setCounter(counter - 50)}>
        spend 50 taka
      </button>
    </div>
  );
}
export default Counter;