import React from 'react'
import noelineImg from "../assets/noeline.png"


function Header() {
    return (
        <header>
                <h1>
                    <img src={noelineImg} alt="Noeline Marie"/>
                </h1>
                <div>
                    <strong>Noeline Marie</strong>
                    <span>Front-end developer</span>
                </div>
                <ul>
                    <li>
                        <i className="ri-mail-fill"></i>
                        <a href="mailto:noeline.onja@gmail.com">Email</a>
                    </li>
                    <li>
                        <i className="ri-phone-fill"></i>
                        <span>(+261)345 142 810</span>
                    </li>
                </ul>
            </header>
    )
}

export default Header
