function Numbers({list}){
    const numList=[1,2,3,4,5,6,7,8]
    const item=numList.map(num=>(<li
    style={{color:num %2===0 ?'green':'blue'}}
    >{num}</li>))
    

    return(
        <b>{item}</b>
    )
}
export default Numbers
