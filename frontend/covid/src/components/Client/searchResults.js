
import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/Appointments.css'
import {    
    Link
  } from "react-router-dom";

export default class SearchResults extends React.Component {
    render() {
        return (
            <div>
               
                <div className='main' style={{paddingTop:"30px"}}>
                    <h2 className="bookhead">SEARCH RESULTS </h2>
                    <div className="appointment">
                        <p style={{fontWeight:"700"}}> John Doe@Holy Cross Vacination Center,12TH road sydney</p>
                     <button className="viewbooking">   <Link  style={{color:"white"}} to='/councellordetails'>View Slots </Link></button>
                    </div>
                    <div className="appointment">
                        <p style={{fontWeight:"700"}}> John Doe@Holy Cross Vacination Center,12TH road sydney</p>
                        <button className="viewbooking">View Slots</button>
                    </div>
                    <div className="appointment">
                        <p style={{fontWeight:"700"}}> John Doe@Holy Cross Vacination Center,12TH road sydney</p>
                        <button className="viewbooking">View Slots</button>
                    </div>
                   
                </div>

            </div>

        )
    }
}