import './Summary.scss'
import Tags from '../Tags/Tags'
import Rating from '../Rating/Rating'

function Summary({ card }) {



  return (
    <div className="summary">
      <div>
        <h1>{card.title}</h1>
        <p>{card.location}</p>
        <Tags card={card}/>
      </div>
      <div>
        <div className="host">
            <p>{card.host.name}</p>
            <img src={card.host.picture} alt={card.host.name} />
        </div>
        <Rating card={card}/>
      </div>
    </div>
  )
}

export default Summary
