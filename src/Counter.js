import { useState } from "react";

function Counter (){
    const [counter, setCounter] = useState(10);
  return (
    <div className="w-full h-screen mt-40">
      <p className='text-4xl mb-10'>{counter}</p>
      <button
        type='button'
        className='w-[25%] h-[25%] border bg-blue-500 text-3xl'
        onClick={() => setCounter(counter + 100)}>
        Donate 100 taka
      </button>
      <button
        type='button'
        className='w-[25%] h-[25%] border bg-green-500 text-3xl'
        onClick={() => setCounter(counter + 500)}>
        Donate 500 taka
      </button>
      <button
        type='button'
        className='w-[25%] h-[25%] border bg-yellow-400 text-3xl'
        onClick={() => setCounter(counter - 100)}>
        Spend 100 taka
      </button>
    </div>
  );
}
export default Counter;