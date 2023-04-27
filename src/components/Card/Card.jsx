import "./Card.css"

function Card ({id, title, cover}) {
    return (
        <li className="card" key={id}>
            <div className="card-gradient"></div>
            <img className="card-cover" src={cover} alt={title} />
            <p className="card-title">{title}</p>
        </li>
    )
}

export default Card