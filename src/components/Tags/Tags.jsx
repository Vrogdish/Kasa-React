import "./Tags.scss"

function Tags ({card}) {
    return (
        <ul className="tags">
        {card.tags.map((tag) => {
          return (
            <li key={tag} className="tag">
              {tag}
            </li>
          )
        })}
      </ul>
    )
}

export default Tags