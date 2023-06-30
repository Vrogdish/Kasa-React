import Card from "../Card/Card"
import "./Gallery.scss"
import cardList from "../../data/logements.json"
import { Link } from "react-router-dom"



function Gallery() {

    return(
        <div>
            <ul className="gallery">
                {cardList.map( ({id, title, cover}) => {
                    const housing = "/housing/"+id
                    return (
                        <li key={id} >
                            <Link to = {housing}>
                            <Card  title={title} cover={cover}/>
                            </Link>
                        </li>
                    )
                } )}

            </ul>
        </div>
    )
}

export default Gallery
