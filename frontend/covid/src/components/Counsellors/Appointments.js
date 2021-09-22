import React from 'react'
import logo from '../../assets/images/logo.png'
import './Appointments.css'
import {    
    Link
  } from "react-router-dom";

export default class Appointments extends React.Component {
    render() {
        return (
            <div>
               
                <div className='main uk-text-center' >
                    <h2 className="bookhead">BOOKINGS FOR YOUR APPOINTMENTS</h2>
                 <div className="uk-text-center">
                    <div className="appointment ">
                        <p > By John Doe</p>
                        <p style={{margin:"0px"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                     <button className="viewbooking">   <Link style={{color:"white"}} to='/bookingdetail'>View Booking </Link></button>
                    </div>
                    <div className="appointment">
                        <p > By John Doe</p>
                        <p style={{margin:"0px"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                    <div className="appointment">
                        <p > By John Doe</p>
                        <p style={{margin:"0px"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                    <div className="appointment">
                        <p > By John Doe</p>
                        <p style={{margin:"0px"}}>For 03 June 2020:10:00 AM to 11 AM</p>
                        <button className="viewbooking">View Booking</button>
                    </div>
                    </div>
                </div>

            </div>

        )
    }
}