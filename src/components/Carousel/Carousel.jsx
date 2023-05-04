import './Carousel.css'
import arrowLeft from '../../assets/vector-left.png'
import arrowRight from '../../assets/vector-right.png'
import { useState } from 'react'

function Carousel({ pictures, title }) {
  const [slideIndex, setSlideIndex] = useState(1)



  return pictures.length === 1 ? (
    <div className="slider">
      <img className="slide" src={pictures[slideIndex - 1]} alt={title} /> /
    </div>
  ) : (
    <div className="slider">
      <img className="slide" src={pictures[slideIndex - 1]} alt={title} />
      <div className="arrows">
        <img
          src={arrowLeft}
          alt="précédent"
          onClick={() => {
            slideIndex <= 1
              ? setSlideIndex(pictures.length)
              : setSlideIndex(slideIndex - 1)
          }}
        />
        <img
          src={arrowRight}
          alt="suivant"
          onClick={() => {
            slideIndex >= pictures.length
              ? setSlideIndex(1)
              : setSlideIndex(slideIndex + 1)
          }}
        />
      </div>
      <p>
        {slideIndex}/{pictures.length}
      </p>
    </div>
  )
}

export default Carousel
