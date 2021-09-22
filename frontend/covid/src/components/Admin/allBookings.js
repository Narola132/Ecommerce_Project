import React from 'react'
import logo from '../../assets/images/logo.png'
import './clientUsers.css'
import {    
    Link
  } from "react-router-dom";

export default class AllBookings extends React.Component {
    render() {
        return (
            <div>
               
                <div className='main'>
                    <h2 className="appoint"style={{padding:"40px 0px"}}>All Bookings</h2>
                    <div className="appointment" style={{backgroundColor:"transparent",marginBottom:"-25px",padding:"0px",fontWeight:"600"}}>
                        <p >COUNSELLOR</p>
                        <p style={{margin:"0px"}}> CLIENT</p>

                        <p style={{margin:"0px 50% 0px 3%"}}>DATE</p>
                        
                    </div>
                    <div className="appointment">
                        <p > John Doe</p>
                        <p style={{margin:"0px"}}> John Doe</p>

                        <p style={{margin:"0px"}}>mark@john.com</p>
                     <button className="viewbooking">   <Link style={{color:"white"}} to='/'>View Booking </Link></button>
                    </div>
                    <div className="appointment">
                        <p > John Doe</p>
                        <p style={{margin:"0px"}}> John Doe</p>

                        <p style={{margin:"0px"}}>mark@john.com</p>
                        <button className="viewbooking">mark@john.com</button>
                    </div>
                    <div className="appointment">
                        <p >  John Doe</p>
                        <p style={{margin:"0px"}}> John Doe</p>

                        <p style={{margin:"0px"}}>mark@john.com</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                    <div className="appointment">
                        <p >  John Doe</p>
                        <p style={{margin:"0px"}}> John Doe</p>

                        <p style={{margin:"0px"}}>mark@john.com</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                </div>

            </div>

        )
    }
}