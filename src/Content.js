import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";

const Content = () =>{
    return(
        <div className="container-fluid p-0">
            <div className="div100 home" id="home" ><Home /></div>
            <div className="about my-5 mx-2  p-2 m-xl-5 p-xl-5" id="about" ><About/></div>
            <div className="experience my-5 mx-2 m-xl-5 p-xl-5" id="experience" ><Experience/></div>
            <div className="works my-5 mx-2 m-xl-5 p-xl-5" id="works" ><Works/></div>
            <div className="div100 div100-2 contact my-5 mx-2 m-xl-5 p-xl-5" id="contact" ><Contact/></div>
        </div>
    )
}

export default Content;