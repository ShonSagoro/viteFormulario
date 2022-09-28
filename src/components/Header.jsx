import logo from "../assets/img/formularios-de-google.png"
import "../assets/styles/header.css"

function Header() {
    return (  
        <header className="header">
            <a><img src={logo}></img></a>
            <ul>
                <li><a href="#">Home</a></li>
            </ul>
        </header>
    );
}

export default Header;