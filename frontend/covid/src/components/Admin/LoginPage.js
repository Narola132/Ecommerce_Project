import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/RegisterPage.css'

import {    
    Link
  } from "react-router-dom";
export default class LoginPageAdmin extends React.Component {
    render() {
        return (
            <div className="main">
                  
                <div className="uk-text-center">
                    <h3 style={{padding:"40px"}}> ADMIN LOGIN</h3>
                    <form className="regform uk-text-center" style={{alignContent:"center"}}>
                        <input type="text" placeholder="COUNSELLER EMAIL" style={{ textAlign: 'center',width:"200px",border:"1px solid rgba(0,0,0,.5)",borderRadius:"3px",fontSize:"12px",padding:"10px",marginBottom:"20px" }} /><br/>
                        <input type="text" placeholder="COUNSELLER PASSWORD" style={{ textAlign: 'center',width:"200px",border:"1px solid rgba(0,0,0,.5)",borderRadius:"3px",fontSize:"12px",padding:"10px",marginBottom:"30px" }} />
                    </form>
                    <Link to='/clientusers'>
                    <button style={{backgroundColor:"deeppink"}} className="buttonLogin uk-button ">LOGIN</button>
                    </Link>

                </div>
            </div>

        )
    }
}