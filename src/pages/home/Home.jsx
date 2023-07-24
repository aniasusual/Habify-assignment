import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Subnav from '../../components/subnav/Subnav'
import Main from '../../components/main/Main'
import L1 from "../../assets/Logo.png"

import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import "./home.scss"

const Home = () => {
    return (

        <div>

            <div id="main">
                <Navbar />

                <div id="gray">
                    <Subnav />
                    <hr
                        style={{
                            marginTop: '1vh',
                            color: 'black',
                            width: '86vw',
                        }}
                    />
                    <Main />

                </div>
            </div>

            <footer>

                <div id="subfoot">
                    <img src={L1} alt="logo" />
                    <div><a>Support</a></div>
                    <div><a>About</a></div>
                    <div><a>Contact Us</a></div>
                    <div><a>The Team</a></div>
                </div>
                <hr
                    style={{
                        marginTop: '1vh',
                        color: 'black',
                        width: '86vw',
                    }}
                />

                {/* <footer> */}
                <div id="bottom">
                    <div id="left">
                        <div>©Emotional First Aid Academy</div>
                        <div><a href="">Terms</a></div>
                        <div><a href="">Privacy</a></div>
                        <div><a href="">Send Feedback</a></div>
                    </div>

                    <div id="links">
                        <a href=""><FaFacebookSquare /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaGooglePlusG /></a>
                        <a href=""><FaYoutube /></a>
                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Home
