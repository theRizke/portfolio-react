
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faPhp, faJava } from '@fortawesome/free-brands-svg-icons'
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal";


import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'


import f1react from '../assets/f1-react.jpg';
import f1js from '../assets/f1-js.jpg'
import valorant from '../assets/valorant.jpg'
import Logo from '../assets/logo.png'

const Works = () => {

    const workData = [
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
            name: "Todo Console Application",
            pic: faJava,
            tags: ["java"],
            description: "Simpe Todo Appliction for Console, written in Java 8",
            link: "",
            github: "https://github.com/theRizke/portfolio_java/tree/main/todo-app"
        },
        {
            name: "Wanderer Game",
            pic: faJava,
            tags: ["java"],
            description: "A hero based walking on tiles and killing monsters type of game. The hero is controlled in a maze using the keyboard. Heroes and monsters have levels and stats depending on their levels. The goal is reach the highest level by killing the monsters holding the keys to the next level.",
            link: "",
            github: "https://github.com/theRizke/portfolio_java/tree/main/wanderer-java"
        },
        {
            name: "Webshop",
            pic: faJava,
            tags: ["java", "spring", "thymeleaf"],
            description: "Simple webshop site, written in Java and Spring Boot.",
            link: "",
            github: "https://github.com/theRizke/portfolio_java/tree/main/webshop"
        },
        {
            name: "PHP tasks",
            pic: faPhp,
            tags: ["php", "bootstrap"],
            description: "Some PHP tasks for job interview. Task 1 is the Project Euler 753 solve, Task 2 is a results simulator for Euro 2020 (using OOP), Task 3 is an easy program for counting how many Sunday was the first day of the Month since the specified date.",
            link: "http://davidriz.hu/rendes",
            github: "https://github.com/theRizke/php-feladatok"
        }

    ]

    const [filters, setFilters] = useState([]);
    const [currentFilter, setCurrentFilter] = useState("everything")

    const [currentWork, setCurrentWork] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setFilters(setFilter(workData))
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

    const openModal = () => {
        return (
            <Modal className="m-0" size="lg" show={modalShow} onHide={() => { setModalShow(false) }}>
                <ModalHeader className="bg-secondary russo-text text-uppercase" closeButton>
                    <ModalTitle>
                        {workData[currentWork].name}
                    </ModalTitle>
                </ModalHeader>
                <ModalBody className="bg-info">
                    <div className="d-flex flex-column align-items-center">
                        <div className="m-2 col-10">
                            {typeof (workData[currentWork].pic) == "string" ?
                                (<img className="rounded-pill" src={workData[currentWork].pic} width="100%" />)
                                : <FontAwesomeIcon className="no-pic-work" icon={workData[currentWork].pic} />
                            }
                        </div>
                        <div className="text-justify bg-dark text-light fw-light p-5 col-10 rounded">{workData[currentWork].description}</div>
                        <div className="my-3">
                            <Button href={workData[currentWork].link.length < 1 ? "#" : workData[currentWork].link} className="text-light russo-text text-uppercase" variant="danger"
                            target="_blank" >Open Project</Button>
                        </div>
                        <div>
                            <Button className="text-light russo-text text-uppercase" variant="info" size="sm"
                                href={workData[currentWork].github.length < 1 ? "#" : workData[currentWork].github} target="_blank">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        )
    }
    return (
        <section className="d-flex flex-column">
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
            <div className="d-flex flex-row flex-wrap justify-content-around justify-content-xl-start  text-dark">
                {workData.map((work, index) => (
                    <div className={(currentFilter == "everything" || work.tags.includes(currentFilter) ? "d-flex" : "d-none") + (" m-1 col-12 col-md-5 col-xl-3 work-item d-flex flex-column justify-content-between align-items-center work-item")}
                        style={{ backgroundImage: `url(${work.pic})`, backgroundPosition: "center" }}
                        onClick={() => { setCurrentWork(index); setModalShow(true) }}>
                        <div className="d-flex work-tags col-12">
                            {work.tags.map(tag => (
                                <div className="text-white russo-text p-2 bg-danger work-tag"
                                    onClick={() => { setCurrentFilter(tag) }}>{tag}</div>
                            ))}
                        </div>
                        {typeof (work.pic) == "string" ? "" : (<div className="no-pic-work"><FontAwesomeIcon icon={work.pic}></FontAwesomeIcon></div>)}
                        <div className="h4 russo-text">{work.name}</div>

                    </div>
                ))}
            </div>
            {openModal()}
        </section>)
}

export default Works;