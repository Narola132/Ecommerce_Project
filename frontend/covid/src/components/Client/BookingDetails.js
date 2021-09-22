import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/BookingDetails.css'


export default class BookingDetailsClient extends React.Component {
    render() {
        
        return (
            <div>
                
                <div className="main" style={{padding:"40px"}}>
                    <h2 className="detailshead">Booking #1234</h2>
                    <p className="details">BOOKING USER:John Doe</p>
                    <p className="details">APPOINTMENT DATE:Apr 29,2020</p>
                    <p className="details">APPOINTMENT SLOT:12:00 to 13:00</p>
                    <p className="details">CENTER NAME:Holy Cross Vacination Center</p>
                    <p className="details">BOOKING MADE AT:Apr 20,2020 at 12:45:00</p>

                </div>
               
            </div>

        )
    }
}