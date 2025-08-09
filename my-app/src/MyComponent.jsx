import React,{useState} from 'react'
function MyComponent(){
    /*const [name, setName]= useState('guest');
    const[age,setAge]=useState(0);
    const [isEmployeed,setFlag]=useState(false);
    const handleName=()=>{
        setName("henry")
    }
    const handleAge=()=>{
        setAge(age + 1)
    }
    const handleFlag=()=>{
        setFlag(!isEmployeed)
    }
*/
const [name,setName]=useState('guest')
const [qty,setQty]=useState(0)
const [cmnt,setComment]=useState('')
const [payment,setPayment]=useState('')
const[shipping,setShipping]=useState('')

function handleShipping(e){
    setShipping(e.target.value)
}

function handlePay(e){
    setPayment(e.target.value)
}

function handleComment(e){
    setComment(e.target.value)
}

function handleQty(e){
    setQty(e.target.value)
}
function handleNameChange(event){
    setName(event.target.value)
}
    return(
/*<div>
            <p> Name: {name}</p>
            <button onClick={handleName}>Set name</button>


            <p> Age: {age}</p>
            <button onClick={handleAge}>Set Age</button>

            
            <p> IsEmployeed:  {isEmployeed ? "Yes" : "No"}</p>
            <button onClick={handleFlag}>Set Employement</button>
            
        </div>*/

//onchnage->used with forms, triggers func when val is changed
<div>
    <input value={name} onChange={handleNameChange}/>
    <p>Name: {name}</p>

    <input value={qty} onChange={handleQty} type='number'/>
    <p>qty: {qty}</p>

    <textarea value={cmnt} onChange={handleComment} placeholder='enter delivery instruction'/>
    <p>leave a comment: {cmnt}</p>

    <select value={payment} onChange={handlePay}>
      <option value=''>Select an option</option>
      <option value='visa'>Visa</option>
      <option value='mastercard'>MasterCard</option>
      <option value='cod'>COD</option>

    </select>
    <p>Payment: {payment}</p>


   <label>
    <input type='radio' value='pickup' checked={shipping==='pickup'} onChange={handleShipping}></input>
    pickup
   </label><br/>
   <label>
   <input type='radio' value='delivery' checked={shipping==='delivery'} onChange={handleShipping}></input>
   delivery
   </label>
   <p>shipping: {shipping}</p>
</div>
       
    )
    


}
export default MyComponent