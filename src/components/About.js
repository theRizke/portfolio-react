import pic from '../assets/avatar.png'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
    <section className="col-12">
        <div>
            <h1>About Me</h1>
        </div>
        <div className="d-flex flex-column flex-xl-row align-items-center">
            <div className="d-flex flex-column align-items-center justify-content-center justify-content-xl-left col-12 col-xl-2">
                <img className="home-avatar" src={pic} alt="avatar" width="150px" />
                <Button href="https://www.hackerrank.com/rizkemail" target="_blank" className="m-2" variant="info"><FontAwesomeIcon icon={faHackerrank} /> HackerRank</Button>
            </div>
            <div className="d-flex flex-column flex-xl-row col-12 col-xl-9 bg-success p-3 m-1 p-xl-4 m-xl-5 border border-5 border-info shadow-md about-me">
                <div className="col-12 col-xl-7 m-2 p-2 justify-content-between">
                    <div className="text-justify p-2" style={{ textAlign: "justify" }}>
                        Hi, my name is David. I am a passionate beginner in the field of frontend programming. 
                        My main programming languages are React.js and JavaScript. 
                        I am currently learning Backend Development, and i am open for an opportunity to learn and grow professionally in a company where I can be a valueable team member.
                    </div>
                    <div className="d-flex justify-content-center d-xl-block p-3">
                        <Button href="https://www.linkedin.com/in/d%C3%A1vid-riz-647506218/" target="_blank" className="home-button text-white m-1" variant="info">Linked <FontAwesomeIcon icon={faLinkedin} /></Button>
                        <Button href="https://davidriz.hu/cv.pdf" target="_blank" className="home-button text-white m-1" variant="danger">Download CV</Button>
                    </div>
                </div>
                <div className="col-11 col-xl-4 m-2 p-2 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column">
                        <div className="d-flex py-2 justify-content-between">
                            <div>Frontend</div>
                            <div>50%</div>
                        </div>
                        <div><ProgressBar variant="warning" now={50}></ProgressBar></div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex py-2 justify-content-between">
                            <div>Backend</div>
                            <div>50%</div>
                        </div>
                        <div><ProgressBar variant="danger" now={50}></ProgressBar></div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex py-2 justify-content-between">
                            <div>Passionate for Programming</div>
                            <div>100%</div>
                        </div>
                        <div><ProgressBar variant="secondary" now={100}></ProgressBar></div>
                    </div>


                </div>
            </div>
        </div>
    </section>)
}

export default About;