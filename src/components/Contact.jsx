import React from 'react';
import { IoMdMail } from "react-icons/io";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='contact'>
            <h3>Contact Me</h3>
            <ul>
                <li>
                    <a href="https://github.com/ksyeon068" target="_blank"><BsArrowRightSquareFill className='contactIcon' /> GitHub: https://github.com/ksyeon068 </a>
                </li>
                <li>
                    <a href="mailto:ksyeon068@gmail.com"><IoMdMail className='contactIcon'/> Email: ksyeon068@gmail.com </a>
                </li>
                <li>
                    <a><FaSquarePhone className='contactIcon' /> Phone: 010-4132-7448</a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;