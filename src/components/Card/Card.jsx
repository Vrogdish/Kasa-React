
import "./Card.scss"

function Card ({title, cover}) {
   
    return (
        <div className="card">
             
            <div className="card-gradient"></div>
            <img className="card-cover" src={cover} alt={title} />
            <p className="card-title">{title}</p>
            
        </div>
    )
}

export default Card