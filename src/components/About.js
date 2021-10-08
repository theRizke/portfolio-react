import pic from '../avatar.png'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

const About = () => {
    return (<div className="col-12">
        <div>
            <h1>About Me</h1>
        </div>
        <div className="d-flex flex-column flex-xl-row align-items-center">
            <div className="d-flex justify-content-center justify-content-xl-left col-12 col-xl-2">
                <img className="home-avatar" src={pic} alt="avatar" width="150px" />
            </div>
            <div className="d-flex flex-column flex-xl-row col-12 col-xl-9 bg-success p-3 m-1 p-xl-4 m-xl-5 border border-5 border-info shadow-md about-me">
                <div className="col-12 col-xl-7 m-2 p-2 justify-content-between">
                    <div className="text-justify p-2" style={{ textAlign: "justify" }}>
                        Hi, my name is David. I am a passionate beginner in the field of frontend programming. 
                        My main programming languages are React.js and JavaScript. 
                        I am currently learning Backend Development, and i am open for an opportunity to learn and grow professionally in a company where I can be a valueable team member.
                    </div>
                    <div className="d-flex justify-content-center d-xl-block p-3">
                        <Button className="home-button text-white" variant="danger">Download CV</Button>
                    </div>
                </div>
                <div className="col-11 col-xl-4 m-2 p-2 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column">
                        <div className="d-flex py-2 justify-content-between">
                            <div>Frontend</div>
                            <div>75%</div>
                        </div>
                        <div><ProgressBar variant="warning" now={75}></ProgressBar></div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex py-2 justify-content-between">
                            <div>Backend</div>
                            <div>25%</div>
                        </div>
                        <div><ProgressBar variant="danger" now={25}></ProgressBar></div>
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
    </div>)
}

export default About;