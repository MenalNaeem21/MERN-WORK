function Animals({list}){

    const items=list.map(animal=>(<li key={animal.id}>
       {animal.name} </li>))
    return(
<ol>{items}</ol>
    )
}
export default Animals