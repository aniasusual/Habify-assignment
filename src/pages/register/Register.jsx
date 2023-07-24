import React, { useState, useEffect } from 'react'
import L1 from "../../assets/Logo.png"
import "./register.scss"

import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


import checboxData from '../../data/checboxData';
import { Link } from 'react-router-dom';
import Badge from "../../assets/badge1.png"


const Register = () => {

    const [users, setusers] = useState([]);

    useEffect(() => {
        setusers(checboxData);
    }, [])

    const handleChange = (e) => {
        const { name, checked } = e.target;

        if (name === "selectAll") {
            let tempUser = users.map((dat) =>{

                return {...dat, isChecked:checked}
            });
            setusers(tempUser);
        }
        else 
        {
            let tempUser = users.map((dat) =>
                dat.name === name ? { ...dat, isChecked: checked } : dat
            )
            console.log(users);
            setusers(tempUser);

        }
    };

    return (

        <div id="page">

            <div id="nav">
                <button>Sign In</button>
                <span>Already Have an account?</span>
            </div>

            <div className="register">

                <div className="cred">

                    <div id="top">
                        <img src={L1} alt="logo" />
                        <hr
                            style={{
                                // background: 'lime',
                                marginTop: '2vh',
                                color: 'gray',
                                width: '17vw',
                                opacity: '0.5'
                            }}
                        />
                        <h3>Create a Emotional First Aid- Enabler Account</h3>
                        <span>By signing up you can start posting, replaying to topics, earn badges, favourite vote topics and many more.</span>

                    </div>

                    <div id="info">
                        <div id="name">
                            <div>
                                <div>First Name</div>
                                <input type="text" />
                            </div>

                            <div>
                                <div>Last Name</div>
                                <input type="text" />
                            </div>
                        </div>

                        <div id="otherInfo">
                            <div>
                                <div>Username</div>
                                <input type="text" />
                            </div>
                            <div>
                                <div>Email Address</div>
                                <input type="email" />
                            </div>
                            <div>
                                <div>Password</div>
                                <input type="password" />
                            </div>
                        </div>

                        <div id="hr">
                            <span>Privacy Settings(OPTIONAL)</span>
                            <img src={Badge} alt="" />
                        </div>
                        <hr
                            style={{
                                marginTop: '5vh',
                                color: 'black',
                                width: '100%',
                            }}
                        />

                        <div id="privacy">
                            <div>Who can see my profile?</div>

                            <div id="content">
                                <div id="check">
                                    <input type="checkbox" id="c1" name="c1" value="Everyone" />
                                    <label htmlFor="c1"> Everyone</label>
                                </div>
                                <div id="check">
                                    <input type="checkbox" id="c2" name="c2" value="Friends" />
                                    <label htmlFor="c2"> Only Friends</label>
                                </div>
                                <div id="check">
                                    <input type="checkbox" id="c3" name="c3" value="invite" />
                                    <label htmlFor="c3"> Invite only</label>
                                </div>
                            </div>

                            <div>Automatically share my posts and replies on social Networks</div>

                            <div id="content">
                                <div id="check">
                                    <input type="checkbox" id="fb" name="fb" value="facebook" />
                                    <label htmlFor="fb"> <FaFacebookSquare /> Facebook</label>
                                </div>
                                <div id="check">
                                    <input type="checkbox" id="tw" name="tw" value="twitter" />
                                    <label htmlFor="tw"> <FaTwitter /> Twitter</label>
                                </div>
                                <div id="check">
                                    <input type="checkbox" id="goo" name="goo" value="google" />
                                    <label htmlFor="goo"> <FaGooglePlusG /> Google+</label>
                                </div>
                            </div>

                        </div>


                        <div id="hr">
                            <span>Small Survey(OPTIONAL)</span>
                            <img src={Badge} alt="" />
                        </div>
                        <hr
                            style={{
                                marginTop: '5vh',
                                color: 'black',
                                width: '100%',
                            }}
                        />

                        <div id="survey">
                            {/* <div>Link Social networks(OPTIONAL)</div> */}

                            <div>
                                <div>How old are you?</div>
                                <select>

                                    {[...Array(100)].map((elementInArray, index) => (
                                        <option value={index} >{index}</option>

                                    )
                                    )}

                                </select>
                            </div>

                            <div>
                                <div>Who are you?</div>
                                <select>

                                    <option value="male">Male</option>

                                    <option value="female">Female</option>

                                    <option value="other">Other</option>

                                </select>
                            </div>
                            <div>
                                <div>Will you be friendly here?</div>
                                <select>

                                    <option value="yes">yes</option>

                                    <option value="no">no</option>
                                </select>
                            </div>
                            <div>
                                <div>Where did you hear about us?</div>
                                <select>
                                    <option value="google">Google</option>

                                    <option value="newspaper">Newspaper</option>

                                    <option value="other">Other</option>

                                </select>
                            </div>

                        </div>




                        <div id="hr">
                            <span>Link Social networks(OPTIONAL)</span>
                            <img src={Badge} alt="" />
                        </div>
                        <hr
                            style={{
                                marginTop: '5vh',
                                color: 'black',
                                width: '100%',
                            }}
                        />

                        <div id="social">
                            {/* <div>Link Social networks(OPTIONAL)</div> */}

                            <div>
                                <div><FaFacebookSquare /> Facebook Url</div>
                                <input type="text" />
                            </div>
                            <div>
                                <div><FaTwitter /> Twitter Username</div>
                                <input type="text" />
                            </div>
                            <div>
                                <div><FaGooglePlusG /> Google+ Account ID</div>
                                <input type="text" />
                            </div>
                            <div>
                                <div><FaYoutube /> Youtube Channel Url</div>
                                <input type="text" />
                            </div>

                        </div>


                        <div id="hr">
                            <span>Interested Categories(OPTIONAL)</span>
                            <img src={Badge} alt="" />
                        </div>
                        <hr
                            style={{
                                marginTop: '5vh',
                                color: 'black',
                                width: '100%',
                            }}
                        />

                        <div id="privacy">
                            <div>Categories I am interested</div>


                            <div id="content">


                                <div id="check">
                                    <input type="checkbox" id="selectAll" name="selectAll" onChange={handleChange}/>
                                    <label htmlFor="selectAll"> Select All</label>
                                </div>

                                {users.map((dat) => (

                                    <div id="check">
                                        <input
                                            type="checkbox"
                                            id={dat.name}
                                            name={dat.name}
                                            checked={dat?.isChecked || false}
                                            onChange={handleChange}
                                        />

                                        <label htmlFor={dat.name}> {dat.val}</label>
                                    </div>
                                ))}

                            </div>

                        </div>

                        <hr
                            style={{
                                marginTop: '5vh',
                                color: 'black',
                                width: '100%',
                            }}
                        />


                        <div id="checkb">
                            <div>
                                <input type="checkbox" id="agree" name="agree" value="agree" />
                                <label htmlFor="agree"> I agree to terms and conditions</label>
                            </div>

                            <div>
                                <input type="checkbox" id="subscribe" name="subscribe" value="subscribe" />
                                <label htmlFor="subscribe"> Subscribe to news Letter</label>
                            </div>
                        </div>
                        {/* </div> */}

                    </div>

                    <button > <Link id="submit" to="/">Create new account</Link> </button>

                </div>

                <footer>
                    <div><a href="">Terms</a></div>
                    <div><a href="">Privacy</a></div>
                    <div><a href="">Send Feedback</a></div>

                    <div id="links">
                        <a href=""><FaFacebookSquare /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaGooglePlusG /></a>
                        <a href=""><FaYoutube /></a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Register
