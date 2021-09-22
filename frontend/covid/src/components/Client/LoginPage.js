import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/RegisterPage.css'
import {    
    Link
  } from "react-router-dom";
export default class LoginPageClient extends React.Component {
    user2() {
        document.getElementById("user").style.display = "block";
        var i;
        var x = document.getElementsByClassName("field");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"
        }
    }
    render() {
        return (
            <div className="main">
                  
                <div className="uk-text-center">
                    <h3 style={{padding:"40px"}}> CLIENT LOGIN</h3>
                    <form className="regform uk-text-center" style={{alignContent:"center"}}>
                        <input type="text" placeholder="COUNSELLER EMAIL" style={{ textAlign: 'center',width:"200px",border:"1px solid rgba(0,0,0,.5)",borderRadius:"3px",fontSize:"12px",padding:"10px",marginBottom:"20px" }} /><br/>
                        <input type="text" placeholder="COUNSELLER PASSWORD" style={{ textAlign: 'center',width:"200px",border:"1px solid rgba(0,0,0,.5)",borderRadius:"3px",fontSize:"12px",padding:"10px",marginBottom:"30px" }} />
                    </form>
                    <Link to='/clientProfile'>
                    <button onClick={this.user2} style={{backgroundColor:"#c64fa3"}} className="buttonLogin uk-button ">LOGIN</button>
                    </Link>
                    <p style={{ textAlign: 'center', fontSize:"12px" }}>Not Registered yet?<Link to='/counsellorReg'><span style={{ textDecoration: 'underline' }}>Register Here</span></Link></p>

                </div>
            </div>

        )
    }
}