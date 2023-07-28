import React from "react";
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email.svg";

export default function CardBody(){
    return(
        <div className="card-body">
            <div className="card-body-header flex-col">
                <h1 className="name">
                    Flou Ainan
                </h1>
                <h3 className="role">
                    Frontend Developer
                </h3>
                <a href="https://github.com/flou-ainan" className="website">
                    github.com/flou-ainan
                </a>
                <div className="card-buttons flex-row center">
                    <button className="email-button header-button">
                        <img src={emailIcon}/> e-mail
                    </button>
                    <button className="linkedin-button header-button">
                        <img src={linkedinIcon}/> Linkedin
                    </button>
                </div>
            </div>
            <div className="card-body-content flex-col center">
                <div className="card-about">
                    <h3>Sobre</h3>
                    <p>
                        Sou um desenvolvedor Frontend em formação. 
                        Desenvolvo software há mais de 6 anos e atualmente
                        estou me aprofundando em React.js
                    </p>
                </div>
                <div className="card-interests">
                    <h3>Interesses</h3>
                    <p>
                        Web Design, UX, Modern CSS, JavaScript, 
                        Python, NodeJS, Material UI, 
                        Processing,  3D Modeling.
                    </p>
                </div>
            </div>
        </div>
    )
}