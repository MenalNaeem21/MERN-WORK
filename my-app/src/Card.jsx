import profile from './assets/copy.jpeg'
function Card(){
    return(
        <div className="card">
<img  className="cardimg"src={profile} alt="no img found" />
<h2 className='card-title'> Menal</h2>
            <p className='card-text'>CS major, web developer</p>

        </div>
    )

}
export default Card