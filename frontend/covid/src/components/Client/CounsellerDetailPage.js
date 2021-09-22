import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/BookingDetails.css'
import {    
    Link
  } from "react-router-dom";

export default class CounsellerDetails extends React.Component {
    render() {
        
        return (
            <div>
                
                <div className="main" style={{paddingLeft:"40px"}}>
                    <h2  className="detailshead">Counsellor #223</h2>
                    <p className="details">COUNSELLOR NAME:John Doe</p>
                    <p className="details">CENTER NAME:Apr 29,2020</p>
                    <p className="details">COUNSELLOR DETAILS:John Doe is an experienced medial counsellor at holy Cross Vacination Center</p>
                   <Link to='/availabilityCalendar'><button style={{border:"none",backgroundColor:"#c64fa3",height:"30px",borderRadius:"3px",color:"white",marginLeft:'30px',fontSize:"10px",padding:"0px 30px"}} >VIEW AVAILABLE CALENDER</button></Link>
                </div>
               
            </div>

        )
    }
}