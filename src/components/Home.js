import pic from '../avatar.png'

import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faHtml5, faCss3Alt, faSass, faBootstrap, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <div className="content-home">
            <img className="home-avatar" src={pic} alt="avatar" width="120px" />
            <div>
                <h1 className="home-h1 russo-text">David Riz</h1>
                <div className="h5 m-0">
                    <Typewriter className="home-typewrite" options={{ autoStart: true, loop: true, deleteSpeed: 20 }} onInit={(typewriter) => {
                        typewriter
                            .typeString('I am a Junior Front-End Developer')
                            .pauseFor(1500)
                            .deleteChars(28)
                            .typeString('currently learning Back-End Developing')
                            .pauseFor(1500)
                            .start()
                    }} />
                </div>
            </div>
            <div className="h4 languages">
                <FontAwesomeIcon icon={faHtml5} alt="HTML5" />
                <FontAwesomeIcon icon={faCss3Alt} />
                <FontAwesomeIcon icon={faSass} />
                <FontAwesomeIcon icon={faBootstrap} />
                <FontAwesomeIcon icon={faJsSquare} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faPhp} />
            </div>
            <Link
                to={"contact"}
                smooth={"easeInOutQuad"}
                duration={1000}
                offset={-50}
                spy={true}
                containerId="fullcontent">
                <Button className="home-button" variant="danger">Hire me</Button>
            </Link>

            <div className="d-block d-xl-none h6 scroll-div">
                <p className="h3 scroll-anim"> <FontAwesomeIcon icon={faHandPointer}/><br/><span className="h6 russo-text">Scroll down</span></p>
           </div>
        </div>
    )
}

export default Home