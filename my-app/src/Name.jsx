function Name(){
    const nameList=['alice','bob','charles']
    const list=nameList.map(name=><li>{name}</li>)
    return(
        <ul>{list}</ul>

    )
}
export default Name