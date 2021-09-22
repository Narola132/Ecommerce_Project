import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/Appointments.css'
import {    
    Link
  } from "react-router-dom";

export default class BookingMade extends React.Component {
    render() {
        return (
            <div>
               
                <div className='main'>
                    <h2 className="bookhead">BOOKINGS MADE BY YOU</h2>
                    <div className="appointment">
                        <p > With Counsellor John Doe</p>
                        <p style={{margin:"0px",fontStyle:"italic"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                     <button className="viewbooking">   <Link style={{color:"white"}} to='/bookingdetailclient'>View Booking </Link></button>
                    </div>
                    <div className="appointment">
                        <p > With Counsellor John Doe</p>
                        <p style={{margin:"0px",fontStyle:"italic"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                    <div className="appointment">
                        <p > With Counsellor John Doe</p>
                        <p style={{margin:"0px",fontStyle:"italic"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                    <div className="appointment">
                        <p > With Counsellor John Doe</p>
                        <p style={{margin:"0px",fontStyle:"italic"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                </div>

            </div>

        )
    }
}