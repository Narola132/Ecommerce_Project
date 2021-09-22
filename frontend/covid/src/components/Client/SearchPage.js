import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/RegisterPage.css'
import {    
    Link
  } from "react-router-dom";
export default class SearchPage extends React.Component {
    render() {
        return (
            <div className="main" style={{paddingTop:"40px"}}>
                  
                <div className="uk-text-center">
                    <h3 style={{padding:"40px"}}>SEARCH FOR AN APPOINTMENT WITH THE COUNCELLOR</h3>
                    <form className="regform uk-text-center" style={{alignContent:"center"}}>
                        <input type="text" placeholder="ENTER KM RADIUS" style={{ textAlign: 'center',width:"200px",border:"1px solid rgba(0,0,0,.5)",borderRadius:"3px",fontSize:"12px",padding:"10px",marginBottom:"30px" }} />
                    </form>
                    <Link to='/searchresults'>
                    <button style={{backgroundColor:"#c64fa3"}} className="buttonLogin uk-button "><i style={{marginRight:"10px"}} class="fas fa-search-location"></i>SEARCH NOW</button>
                    </Link>

                </div>
            </div>

        )
    }
}