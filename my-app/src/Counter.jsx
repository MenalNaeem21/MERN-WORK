import React,{useState} from 'react'
function Counter(){
    const[counter,setCounter]=useState(0);
    const IncCounter=()=>{
        setCounter(counter + 1)

    }


    const DecCounter=()=>{
        setCounter(counter - 1)

    }
    const resetCount=()=>{
        setCounter(0)
    }
    return(
        <div>
            <p>Count: {counter}</p>
            <button className='Increase-count' onClick={IncCounter}> increase Count</button>

           
            <button className='dec-count' onClick={DecCounter}> decrease Count</button>

            <button className='reset' onClick={resetCount}> reset Count</button>

        </div>
    )

}
export default Counter