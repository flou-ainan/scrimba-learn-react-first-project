import React from "react";
import facebookIcon from "../assets/Facebook Icon.svg"
import telegramIcon from "../assets/Telegram Icon.svg"
import instagramIcon from "../assets/Instagram Icon.svg"
import githubIcon from "../assets/GitHub Icon.svg"

export default function CardFooter(){
    return(
        <div className="card-footer">
            <a href="" className="footer-button">
                <img src={telegramIcon}/>
            </a>
            <a href="" className="footer-button">
                <img src={facebookIcon}/>
            </a>
            <a href="" className="footer-button">
                <img src={instagramIcon}/>
            </a>
            <a href="" className="footer-button">
                <img src={githubIcon}/>
            </a>
        </div>
    )
}