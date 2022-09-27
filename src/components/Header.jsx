import logo from "../assets/img/formularios-de-google.png"

function Header() {
    return (  
        <header>
            <a><img src={logo}></img></a>
            <ul>
                <li><a href="#">Home</a></li>
            </ul>
        </header>
    );
}

export default Header;