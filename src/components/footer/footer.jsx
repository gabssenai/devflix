//Para utilizar o componente crie o import que deseja
//Coloque o nome da pessoa entre <Footer>NomePessoa</Footer>
//Passe a informação dentro da tag Footer - LINK
//<Footer link={}>Gabs Alcaide</Footer>

import SocialLinks from "../social-Links/social-Links";
import "./footer.module.css"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"


const Footer = ({ children, link }) => {
    return (
        <footer>
            <p>
                Feito com <ion-icon name="heart" /> por {" "}
                <a href={link} target="_blank">{children} </a>
            </p>
                < SocialLinks icon={"logo-github"} href={"#"} />
                < SocialLinks icon={"logo-instagram"} href={"#"} />
                < SocialLinks icon={"logo-twitter"} href={"#"} />
                < SocialLinks icon={"logo-facebook"} href={"#"} />
                < SocialLinks icon={"logo-linkedin"} href={"#"} />
        </footer>
    );
};

export default Footer;