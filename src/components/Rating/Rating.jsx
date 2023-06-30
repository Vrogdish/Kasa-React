import './Rating.scss'
import star from '../../assets/star.png'
import noStar from '../../assets/no-star.png'

function Rating({ card }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className='rating'>
      {range.map((rating) =>
        card.rating >= rating ? (
          <img src={star} alt="étoile" key={rating.toString()} />
        ) : (
          <img src={noStar} alt="étoile grise" key={rating.toString()} />
        )
      )}
    </div>
  )
}

export default Rating
