import Logo from "../assets/img/formularios-de-google.png"
import "../assets/styles/footer.css"


function Footer() {
    return ( 
    <>
        <footer className="footer">

            <p >© 2022 ShonCompany, Inc</p>

            <a href="/"><img src={Logo}></img></a>
            <ul>
                <li ><a href="https://github.com/ShonSagoro/viteFormulario.git" target="_blank">Git_Hub</a></li>
            </ul>

        </footer>
    </>
    );
}

export default Footer;