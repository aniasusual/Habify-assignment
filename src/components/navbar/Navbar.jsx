import React from 'react'
import L1 from "../../assets/Logo.png"
import Badge from "../../assets/badge1.png"

import { FiSearch } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdNotifications } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';


import "./navbar.scss"

const Navbar = () => {
    return (
        <nav>

            <div id="nav">

                <div className="logo"><img src={L1} alt="Logo" /></div>

                <div id="search">
                    <FiSearch/>
                    <input type="text" placeholder="Search all forums"/>
                    <div id="topics">
                        <span>Topics</span>
                        <div><RiArrowDropDownLine /></div>
                    </div>
                </div>

                <div id="ltopics">
                    <span>Latest Topics</span>
                    <div><RxHamburgerMenu /></div>
                    <div>
                        <MdNotifications />
                    </div>
                    <div><img src={Badge} alt="" /></div>
                    <div>azyrusmax</div>
                    <div><RiArrowDropDownLine /></div>
                </div>


                {/* <div id="user">
                </div> */}
            </div>


        </nav>
    )
}

export default Navbar
