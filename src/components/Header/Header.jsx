import './Header.scss'
import { Link } from 'react-router-dom'
import logo from"../../assets/logo.png"

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className='logo' />
      <nav className='navbar'>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
      
    </header>
  )
}

export default Header
