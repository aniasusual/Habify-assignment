import React from 'react'
import { Link } from 'react-router-dom'

import "./subnav.scss"

const Subnav = () => {
    return (
        <div id="mai">
            <div id="subnav">
                <div id="dropdown1">
                    <select>
                        <option value="value" selected>All the Categories</option>

                        <option value="male">Male</option>

                        <option value="female">Female</option>

                        <option value="other">Other</option>

                    </select>
                </div>

                <div id="dropdown2">
                    <select>
                        <option value="value" selected>Tags</option>

                        <option value="male">Male</option>

                        <option value="female">Female</option>

                        <option value="other">Other</option>

                    </select>
                </div>

                <div id="links">
                    <div><Link className="li"> Latest</Link></div>
                    <div><Link className="li"> Unread</Link></div>
                    <div><Link className="li"> Rising</Link></div>
                    <div><Link className="li"> Most Liked</Link></div>
                    <div><Link className="li"> Follow feed</Link></div>

                </div>

            </div>
            
        </div>
        


    )
}

export default Subnav
