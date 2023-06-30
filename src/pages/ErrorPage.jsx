// import { Link } from 'react-router-dom'
import './Error.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ErrorComponent from '../components/ErrorComponent/Error'



function ErrorPage() {
  return (
    <>
      <Header />
      {/* <div className="error-page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/"> Retourner sur la page d’accueil </Link>
      </div> */}
      <ErrorComponent/>
      <Footer />
    </>
  )
}

export default ErrorPage
