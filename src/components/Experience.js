import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Experience = () => {

    const Degree = [
        {
            title: "Junior Java-Backend Developer",
            year: "10.2021 -",
            description: "GreenFox Academy"
        },
        {
            title: "Technical Manager",
            year: "2016-20",
            description: "Obudai Egyetem - "
        },
        {
            title: "Computer Science Engineering*",
            year: "2013-14",
            description: "Obudai Egyetem  -  (4 semester)*"
        }
    ]

    const Jobs = [
        {
            title: "Project Manager Intern",
            year: "10.2020 - 01.2021",
            description: "OAM Ózdi Acélművek KFT."
        },
        {
            title: "Video Proccess Intern",
            year: "07.2018 - 03.2021",
            description: "Knorr-Bremse Vasúti Jármű Rendszerek Hungária Kft."
        }
    ]


    const experienceData = (data, icon) =>{
        return(
            <div className="d-flex flex-column bg-success exp-column col-11 m-2 col-xl-5 p-4 p-xl-4 rounded shadow">
            {data.map(data => (
                <div className="d-flex align-items-center">
                    <div className="d-flex h3 text-danger  h-100 p-3 align-items-center">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <div className="d-flex flex-column p-2 mx-2 border-start border-danger">
                        <div className="text-info m-1 fw-bold">{data.year}</div>
                        <div className="h4 russo-text">{data.title}</div>
                        <div>{data.description}</div>
                    </div>
                </div>
            ))}
        </div>

        )
    }

    return (<div className="d-flex flex-column">
        <div className="">
            <h1 className="h1">Experience</h1>
        </div>
        <div className="d-flex flex-column flex-xl-row justify-content-around align-items-center col-12 m-2 p-2">
            {experienceData(Degree, faGraduationCap)}
            {experienceData(Jobs, faBriefcase)}
        </div>
    </div>)
}

export default Experience;