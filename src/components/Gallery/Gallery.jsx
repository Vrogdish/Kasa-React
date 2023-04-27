import Card from "../Card/Card"
import "./Gallery.css"
import cardList from "../../data/logements.json"

function Gallery() {

    return(
        <div>
            <ul className="gallery">
                {cardList.map( ({id, title, cover}) => {
                    return (
                        <Card  key={id} title={title} cover={cover}/>
                    )
                } )}

            </ul>
        </div>
    )
}

export default Gallery
