import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faJsSquare, faPhp } from '@fortawesome/free-brands-svg-icons'
import Button from "react-bootstrap/Button"
import Modal  from "react-bootstrap/Modal";
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

import php from '../php.jpg';
import f1react from '../f1-react.jpg';
import f1js from '../f1-js.jpg'
import valorant from '../valorant.jpg'
import Logo from '../logo.png'

const Works = () => {
    
    const WorkData = [
        {
            name: "Portfolio",
            pic: Logo,
            tags: ["react", "sass"],
            description: "My portfolio website.",
            link: "https://davidriz.hu",
            github: "https://github.com/theRizke/portfolio-react"
        },
        {
            name: "F1 TIP - REACT",
            pic: f1react,
            tags: ["react", "bootstrap", "sass", "firebase"],
            description: "Betting competition site for Formula 1 Series. Now written in ReactJS, and using Google Firebase Firestore instead of MySQL, and Google Auth implemented aswell.",
            link: "http://davidriz.hu/tipp",
            github: "https://github.com/theRizke/f1-react"
        },
        {
            name: "PHP tasks",
            pic: faPhp,
            tags: ["php", "bootstrap"],
            description: "Some PHP tasks for job interview. Task 1 is the Project Euler 753 solve, Task 2 is a results simulator for Euro 2020 (using OOP), Task 3 is an easy program for counting how many Sunday was the first day of the Month since the specified date.",
            link: "http://davidriz.hu/rendes",
            github: "https://github.com/theRizke/php-feladatok"
        },
        {
            name: "F1 TIP - JAVASCRIPT",
            pic: f1js,
            tags: ["javascript", "php", "mysql"],
            description: "Betting competition site for Formula 1 Series. Written in  vanilla JS, PHP and MySQL. For login: teszt/teszt",
            link: "http://davidriz.hu/f1_tipp",
            github: "https://github.com/theRizke/f1-js"
        },
        {
            name: "VALORANT",
            pic: valorant,
            tags: ["react"],
            description: "Valorant is a popular PC game, made by Riot. This site provides us to show every cosmetic item of the game via external API provider (valorant-api.con). The site's design tries to copy the actual game's look.",
            link: "http://davidriz.hu/valorant",
            github: "https://github.com/theRizke/valorant-site"
        },
        {
            name: "Tic-Tac-Toe",
            pic: faJsSquare,
            tags: ["javascript"],
            description: "Simple Tic-Tac-Toe game, written in vanilla Javascript. Made for job interview",
            link: "",
            github: "https://github.com/theRizke/tic-tac-toe"
        }
    ]

    const [filters, setFilters] = useState([]);
    const [currentFilter, setCurrentFilter] = useState("everything")

    const [currentWork, setCurrentWork] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setFilters(setFilter(WorkData))
    }, [])

    const setFilter = (data) => {
        const filters = ["everything"];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].tags.length; j++) {
                let tags = data[i].tags[j].split(", ")
                for (let k = 0; k < tags.length; k++) {
                    if (!filters.includes(tags[k])) {
                        filters.push(tags[k])
                    }
                }
            }
        }

        return filters;
    }

    const openModal = () =>{  
        return (
            <Modal className="m-0" size="lg" show={modalShow} onHide={()=>{setModalShow(false)}}>
                <ModalHeader className="bg-secondary russo-text text-uppercase" closeButton>
                    <ModalTitle>
                     {WorkData[currentWork].name}
                    </ModalTitle>
                </ModalHeader>
                <ModalBody className="bg-info">
                    <div className="d-flex flex-column align-items-center">
                    <div className="m-2 col-10">
                        { typeof(WorkData[currentWork].pic) == "string" ?
                        (<img className="rounded-pill" src={WorkData[currentWork].pic} width="100%"/>)
                        : <FontAwesomeIcon className="no-pic-work"icon={WorkData[currentWork].pic} />
                        }
                    </div>
                        <div className="text-justify bg-dark text-light fw-light p-5 col-10 rounded">{WorkData[currentWork].description}</div>
                        <div className="my-3"> 
                            <a href={WorkData[currentWork].link} target="_blank"> <Button className="text-light russo-text text-uppercase" variant="danger" 
                                disabled={WorkData[currentWork].link.length < 1 ? true : false }>Open Project</Button> </a>
                        </div>
                        <div>
                        <Button className="text-light russo-text text-uppercase" variant="info" size="sm" 
                                disabled={WorkData[currentWork].github.length < 1 ? true : false }>
                                    <FontAwesomeIcon icon={faGithub}/> Github
                                    </Button> 
                         </div>
                    </div>
                </ModalBody>
            </Modal>
        )
    }
    return (
        <div className="d-flex flex-column">
            <div>
                <h1>Recent Works</h1>
            </div>
            <div className="d-flex flex-row flex-wrap filters m-2">
                {filters.sort().map(filter => (
                    <p className={"m-2 russo-text h6 text-capitalize filter " + ((filter == currentFilter) ? "filter-selected" : "")}
                        onClick={() => { setCurrentFilter(filter) }}>
                        {filter}
                    </p>))}
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-around text-dark">
                {WorkData.map( (work, index) =>(
                    <div className={(currentFilter == "everything" || work.tags.includes(currentFilter) ? "d-flex" : "d-none") + (" m-1 col-12 col-md-5 col-xl-3 work-item d-flex flex-column justify-content-between align-items-center work-item")}
                            style={{backgroundImage: `url(${work.pic})`, backgroundPosition: "center"}}
                            onClick={()=>{ setCurrentWork(index); setModalShow(true)}}>
                        <div className="d-flex work-tags col-12">
                            {work.tags.map(tag =>(
                                <div className="text-white russo-text p-2 bg-danger work-tag"
                                onClick={()=>{setCurrentFilter(tag)}}>{tag}</div>
                            ))}
                        </div>
                        {typeof(work.pic)  == "string" ? "" : (<div className="no-pic-work"><FontAwesomeIcon icon={work.pic}></FontAwesomeIcon></div>)}
                        <div className="h4 russo-text">{work.name}</div>
                        
                    </div>
                ))}
            </div>
            {openModal()}
        </div>)
}

export default Works;