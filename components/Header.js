import React from 'react'
import styled from 'styled-components'
import noelineImg from "../assets/noeline.png"


const HeaderStyle = styled.header`
    background: #FFFFFF;
    border-radius: 12px;
    padding: 16px;

    img {
        border-radius: 12px;
    }

    .biography {
        display: flex;
        flex-direction: column;

        strong {
            font-weight: 600;
            font-size: 24px;
            color: #4F4F4F;
            padding-bottom: 6px;
        }

        span {
            color: #828282;
            font-weight: 500;
            font-size: 18px;
        }
    }

    .contact {
        padding-top: 31px;
        padding-bottom: 34px;

        .contact-list {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: #4F4F4F;
            font-size: 18px;

            a {
                padding-bottom: 10px;
            }

            span {
                padding-left: 12px;
                word-break: break-all;
            }
        }
    }

    .info {
        font-weight: 500;
        font-size: 18px;
        color: #828282;
    }
`;

function Header() {
    return (
        <HeaderStyle>
            <h1>
                <img src={noelineImg} alt="Noeline Marie"/>
            </h1>
            <div>
                <div className="biography">
                    <strong>Noeline Marie</strong>
                    <span>Front-end developer</span>
                </div>
                <ul className="contact">
                    <li className="contact-list">
                        <a className="contact-list" href="mailto:noeline.onja@gmail.com">
                            <i className="ri-mail-fill"></i>
                            <span>noeline.onja@gmail.com</span>
                        </a>
                    </li>
                    <li className="contact-list">
                        <i className="ri-phone-fill"></i>
                        <span>(+261)345 142 810</span>
                    </li>
                </ul>
            </div>
            <div className="info">
                <p>
                    Looking forwards to build Looking forwards to build Looking forwards to build
                </p>
            </div>
        </HeaderStyle>
    )
}

export default Header
