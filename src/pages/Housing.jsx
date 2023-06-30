import { useParams } from 'react-router-dom'
import './Housing.scss'
import cardList from '../data/logements.json'
import Collapse from '../components/Collapse/Collapse'
import Carousel from '../components/Carousel/Carousel'
import Summary from '../components/Summary/Summary'

function Housing() {
  const { id } = useParams()

  const card = cardList.find((elem) => elem.id === id)

  return (
    <div className="housing">
      <Carousel pictures={card.pictures} title={card.title} />
      <Summary card={card} />
      <div className='collapses'>
        <Collapse title="Déscription" text={card.description} />
        <Collapse title="Equipements" text={card.equipments.map((elem,idx)=><li key={idx}>{elem}</li>)} />
      </div>
    </div>
  )
}

export default Housing
