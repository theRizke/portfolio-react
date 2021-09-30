import { Link } from 'react-scroll'

import Logo from './logo.png'
import { HouseDoor, App, FilePerson, Trophy, Braces, Envelope } from 'react-bootstrap-icons';

const Sidebar = () => {
    return (
        <div className="d-flex py-5 px-2 h-100 flex-column justify-content-between">
            <div className="logo mx-auto">
                <div>
                    ...<img src={Logo} alt="logo" width="75px" />...
                </div>
            </div>

            <div className="russo-text">{Menu()}</div>
            <div className="copy">
                <p>davidriz.hu</p>
                <p>Developed in React</p>
                <p>Github</p>
            </div>

        </div>
    )
}

const Menu = () => {


    const Links = [
        {
            title: "Home",
            link: "home"
        },

        {
            title: "About",
            link: "about"
        },

        {
            title: "Experience",
            link: "experience"
        },

        {
            title: "Works",
            link: "works"
        },

        {
            title: "Contact",
            link: "contact"
        }
    ];

    const getIcon = (link) => {
        switch (link) {
            case "Home":
                return (<HouseDoor />)
                break;
            case "About":
                return (<FilePerson />)
                break;
            case "Experience":
                return (<Trophy />)
                break;
            case "Works":
                return (<Braces />)
                break;
            case "Contact":
                return (<Envelope />)
                break;
            default:
                return (<App />)
                break;
        }
    }





    return (
        <div className="menu">
            {Links.map(link => (
                <Link
                    to={link.link}
                    activeClass="link-active"
                    smooth={"easeInOutQuad"}
                    duration={1000}
                    offset={-50}
                    spy={true}
                    className="link-item m-1 p-1"
                    containerId="fullcontent"
                    >
                        <div className="link-icon mx-4">{getIcon(link.title)}</div>
                        <div className="d-none d-md-block">{link.title}</div>
                </Link>
            ))}
        </div>
    )
}



export default Sidebar;