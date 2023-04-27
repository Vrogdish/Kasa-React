import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';
import './Home.css';
import bannerImage from "../assets/image1.jpg"

function Home() {
  return (
    <div className="home">
     <Banner  image= {bannerImage} text = "Chez vous, partout et ailleurs"/>
     <Gallery/>
    </div>
  );
}

export default Home;


