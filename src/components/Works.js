import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";


const Works = () => {

    const WorkData = [
        {
            name: "Project 1",
            pic: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
            tags: ["javascript", "bootstrap", "sass"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
        },
        {
            name: "Project 2",
            pic: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
            tags: ["react", "bootstrap", "sass"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
        },
        {
            name: "Project 3",
            pic: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
            tags: ["react", "api"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
        },
        {
            name: "Project 4",
            pic: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
            tags: ["php", "mysql"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
        },
        {
            name: "Project 5",
            pic: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
            tags: ["react", "firebase"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
        },
        {
            name: "Project 6",
            pic: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
            tags: ["react", "firebase"],
            description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto."
        }
    ]

    const [filters, setFilters] = useState([]);

    const [currentFilter, setCurrentFilter] = useState("everything")

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
                {WorkData.map(work =>(
                    <div className={(currentFilter == "everything" || work.tags.includes(currentFilter) ? "d-flex" : "d-none") + (" m-1 col-12 col-md-5 col-xl-3 work-item d-flex flex-column justify-content-between align-items-center")}
                            style={{backgroundImage: `url(${work.pic})`}}>
                        <div className="d-flex work-tags col-12">
                            {work.tags.map(tag =>(
                                <div className="text-white russo-text p-2 bg-danger work-tag"
                                onClick={()=>{setCurrentFilter(tag)}}>{tag}</div>
                            ))}
                        </div>
                        <div className="h4 russo-text">{work.name}</div>
                        <div className="m-2 text-success work-details-icon"> <FontAwesomeIcon icon={faInfoCircle}/></div>
                    </div>
                ))}
            </div>
        </div>)
}

export default Works;