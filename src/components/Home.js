import pic from '../assets/avatar.png'

import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faHtml5, faCss3Alt, faSass, faBootstrap, faReact, faPhp, faJava, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <section className="content-home">

            <img className="home-avatar" src={pic} alt="avatar" width="120px" />

            <div className="name-and-typewriter">
                <h1 className="home-h1 russo-text">David Riz</h1>
                <div className="h5 m-0">
                    <Typewriter className="home-typewrite" options={{ autoStart: true, loop: true, deleteSpeed: 20 }} onInit={(typewriter) => {
                        typewriter
                            .typeString('I am a Junior Full-Stack Developer')
                            .pauseFor(1500)
                            .deleteChars(29)
                            .typeString('currently learning Back-End Developing')
                            .pauseFor(1500)
                            .start()
                    }} />
                </div>
            </div>

            <div className="h4 languages bg-primary shadow  rounded-2">
                <div className='h6'>Frontend</div>
                <div className='h2 languages-row'>
                    <FontAwesomeIcon icon={faHtml5} title="HTML5" />
                    <FontAwesomeIcon icon={faCss3Alt} title="CSS" />
                    <FontAwesomeIcon icon={faSass} title="Sass" />
                    <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" />
                    <FontAwesomeIcon icon={faJsSquare} title="JavaScript" />
                    <FontAwesomeIcon icon={faReact} title="React" />
                </div>
                <div className='h6'>Backend</div>
                <div className='h2 languages-row'>
                    <FontAwesomeIcon icon={faJava} title="Java + Spring" />
                    <FontAwesomeIcon icon={faDatabase} title="SQL & NoSQL" />
                    <FontAwesomeIcon icon={faPhp} title="PHP" />
                </div>
            </div>

            <div className='hire-section'>    
                <Link
                    to={"contact"}
                    smooth={"easeInOutQuad"}
                    duration={1000}
                    offset={-50}
                    spy={true}
                    containerId="fullcontent">
                    <Button className="home-button" variant="danger">Hire me</Button>
                </Link>
            </div>


            <div className="d-block d-xl-none h6 scroll-div">
                <p className="h3 scroll-anim"> <FontAwesomeIcon icon={faHandPointer} /><br /><span className="h6 russo-text">Scroll down</span></p>
            </div>

        </section>
    )
}

export default Home