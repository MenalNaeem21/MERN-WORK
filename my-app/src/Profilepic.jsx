function Profilepic(){
    const imageUrl='./src/assets/copy.jpeg'
    const handleClick=(e)=> e.target.style.display="none"
        return <img onClick={(e)=>handleClick(e)} src={imageUrl}></img>
    

}
export default Profilepic