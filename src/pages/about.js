import React from "react";

const About = () => {
    const info = [
        {
            key: "Name",
            value: "Đỗ Đức Long",
        },
        {
            key: "Age",
            value: "23y (23/10/1998)",
        },
        {
            key: "Phone",
            value: "0708-922-384",
        },
        {
            key: "Email",
            value: "dolong2310@gmail.com",
        },
        {
            key: "Github",
            value: "https://github.com/dolong2310",
        },
        {
            key: "Live in",
            value: "Tan Binh, Ho Chi Minh",
        },
    ];
    const skills = [
        {
            value: "html, css, js, scss",
        },
        {
            value: "reactjs, redux, mongodb",
        },
        {
            value: "git, english write/read basic",
        },
    ];
    const education = {
        value: "Aptech (8/2018 - 11/2020)",
    };
    const careerObjective = [
        {
            value:
                "I want to work in a professional working environment to learn more knowledge and get promotion in career",
        },
        {
            value:
                "Got new brothers and friends, create relationships and have a good spirit of working",
        },
    ];

    const interests = [
        {
            value: "Read newspapers to learn new technologies",
        },
        {
            value: "Aquatic shrimp farming",
        },
    ];

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="about">
                        <div className="box">
                            <div className="info">
                                <p className="about-label">My information</p>
                                {info.map((item, index) => (
                                    <p className="about-text" key={index}>
                                        {item.key}:<span>{item.value}</span>
                                    </p>
                                ))}
                            </div>

                            <div className="box-children">
                                <div className="skills">
                                    <p className="about-label">My skills</p>
                                    {skills.map((item, index) => (
                                        <p className="about-text" key={index}>
                                            {item.value}
                                        </p>
                                    ))}
                                </div>

                                <div className="education">
                                    <p className="about-label">Education</p>
                                    <p className="about-text">
                                        {education.value}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="career-objective">
                            <p className="about-label">Career Objective</p>
                            {careerObjective.map((item, index) => (
                                <p className="about-text" key={index}>
                                    {item.value}
                                </p>
                            ))}
                        </div>

                        <div className="interests">
                            <p className="about-label">Interests</p>
                            {interests.map((item, index) => (
                                <p className="about-text" key={index}>
                                    {item.value}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
