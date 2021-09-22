import React from 'react'
import logo from '../../assets/images/logo.png'
import './clientUsers.css'
import {    
    Link
  } from "react-router-dom";

export default class CounsellorUsers extends React.Component {
    render() {
        return (
            <div>
               
                <div className='main'>
                    <h2 className="appoint"style={{paddingTop:"40px"}}>Counsellor Users</h2>
                    <p className="appoint "style={{marginTop:"0px"}}>Click on view details to show more details in a box</p>
                    <div className="appointment">
                        <p > John Doe</p>
                        <p style={{margin:"0px"}}>mark@john.com</p>
                     <button className="viewbooking">   <Link style={{color:"white"}} to='/'>View Booking </Link></button>
                    </div>
                    <div className="appointment">
                        <p > John Doe</p>
                        <p style={{margin:"0px"}}>mark@john.com</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                    <div className="appointment">
                        <p >  John Doe</p>
                        <p style={{margin:"0px"}}>mark@john.com</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                    <div className="appointment">
                        <p >  John Doe</p>
                        <p style={{margin:"0px"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                </div>

            </div>

        )
    }
}