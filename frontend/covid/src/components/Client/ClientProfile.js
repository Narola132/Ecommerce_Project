import React from 'react'
import logo from '../../assets/images/logo.png'
import './clientProfile.css'
import {
    Link
} from "react-router-dom";
export default class ClientProfile extends React.Component {
    render() {
        return (
            <div>

                <div className='main2 uk-width-1-1'>
                    <h3 className="head">YOUR  PROFILE</h3>
                    <form className="form">
                        <div class="uk-child-width-1-2 uk-grid" uk-grid="true" style={{ width: "60vw", paddingLeft: "30px" }}>
                            <div>
                                <input className="inputTxt" type="text" placeholder="First Name" />
                            </div>
                            <div>
                                <input className="inputTxt" type="text" placeholder="Last Name" />
                            </div>
                            <div>
                                <input className="inputTxt" type="text" placeholder="Email Address" />
                            </div>
                            <div>
                                <input className="inputTxt" type="text" placeholder="Phone Number" />
                            </div>

                        </div>
                        <div class="uk-child-width-1-1 uk-grid" uk-grid="true" style={{ width: "60vw", paddingLeft: "30px" }}>

                            <div>
                                <Link to='/search'>
                                    <button style={{ width: "101%", backgroundColor: "#c64fa3",color:"white" ,fontSize:"12px"}} className="inputTxt">UPDATE PROFILE</button>
                                </Link>
                            </div>
                        </div>
                        <div class="uk-child-width-1-3 uk-grid" uk-grid="true" style={{ width: "100%", paddingLeft: "30px",paddingTop:"40px" }}>
                            <div>
                                <input className="inputTxt" type="text" placeholder="ENTER PASSWORD" />
                            </div>
                            <div>
                                <input className="inputTxt" type="text" placeholder="CONFIRM PASSWORD" />
                            </div>
                            <div>
                                <Link to='/'>
                                    <button style={{ width: "90%", backgroundColor: "#c64fa3",color:"white",fontSize:"12px" }} className="inputTxt">CHANGE PASSWORD</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}