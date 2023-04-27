import "./Banner.css"


function Banner ({image, text}) {
    return (

        <div className="banner">
            <img className="banner-image" src={image} alt="banniere" />
            <h1 className="banner-text">{text}</h1>
        </div>
    )
}

export default Banner