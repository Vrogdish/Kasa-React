import "./Footer.scss"
import logo from "../../assets/logo2.png"


function Footer () {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer