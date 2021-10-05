import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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

const Works = () => {

    const WorkData = [
        {
            name: "PHP tasks",
            pic: php,
            tags: ["php", "bootstrap"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            link: "http://davidriz.hu/rendes",
            github: "https://github.com/theRizke/php-feladatok"
        },
        {
            name: "F1 TIP - REACT",
            pic: f1react,
            tags: ["reactJS", "bootstrap", "sass", "firebase"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            link: "http://davidriz.hu/tipp",
            github: ""
        },
        {
            name: "F1 TIP - JAVASCRIPT",
            pic: f1js,
            tags: ["javascript", "php", "mysql"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            link: "",
            github: ""
        },
        {
            name: "VALORANT",
            pic: valorant,
            tags: ["react"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            link: "##",
            github: ""
        },
        {
            name: "Project 5",
            pic: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
            tags: ["react", "mysql"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            link: "",
            github: ""
        },
        {
            name: "Project 6",
            pic: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
            tags: ["react", "firebase"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
            link: "",
            github: ""
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
                        <div className="m-2 col-10"><img className="rounded-pill" src={WorkData[currentWork].pic} width="100%"></img> </div>
                        <div className="text-center bg-light text-dark py-3 px-1 col-10 rounded">{WorkData[currentWork].description}</div>
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
                {filters.map(filter => (
                    <p className={"m-2 russo-text h6 text-capitalize filter " + ((filter == currentFilter) ? "filter-selected" : "")}
                        onClick={() => { setCurrentFilter(filter) }}>
                        {filter}
                    </p>))}
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-around text-dark">
                {WorkData.map( (work, index) =>(
                    <div className={(currentFilter == "everything" || work.tags.includes(currentFilter) ? "d-flex" : "d-none") + (" m-1 col-12 col-md-5 col-xl-3 work-item d-flex flex-column justify-content-between align-items-center")}
                            style={{backgroundImage: `url(${work.pic})`, backgroundPosition: "center"}}
                            onClick={()=>{ setCurrentWork(index); setModalShow(true)}}>
                        <div className="d-flex work-tags col-12">
                            {work.tags.map(tag =>(
                                <div className="text-white russo-text p-2 bg-danger work-tag"
                                onClick={()=>{setCurrentFilter(tag)}}>{tag}</div>
                            ))}
                        </div>
                        <div className="h4 russo-text">{work.name}</div>
                        
                    </div>
                ))}
            </div>
            {openModal()}
        </div>)
}

export default Works;