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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum efficitur interdum.
                        Donec eu augue in turpis condimentum facilisis. Mauris a egestas felis.
                        Vivamus tellus sem, egestas ac hendrerit quis, facilisis in nunc.
                    </div>
                    <div className="d-flex justify-content-center d-xl-block p-3">
                        <Button className="home-button text-white" variant="danger">Download CV</Button>
                    </div>
                </div>
                <div className="col-11 col-xl-4 m-2 p-2 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column">
                        <div className="d-flex py-2 justify-content-between">
                            <div>Development</div>
                            <div>75%</div>
                        </div>
                        <div><ProgressBar variant="warning" now={75}></ProgressBar></div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex py-2 justify-content-between">
                            <div>UI/UX</div>
                            <div>50%</div>
                        </div>
                        <div><ProgressBar variant="danger" now={50}></ProgressBar></div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex py-2 justify-content-between">
                            <div>Photography</div>
                            <div>20%</div>
                        </div>
                        <div><ProgressBar variant="secondary" now={20}></ProgressBar></div>
                    </div>


                </div>
            </div>
        </div>
    </div>)
}

export default About;