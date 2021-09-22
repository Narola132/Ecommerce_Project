import React from 'react'
import logo from '../../assets/images/logo.png'
import './bookingConfirm.css'


export default class BookingConfirm extends React.Component {
    render() {

        return (
            <div>
               
                <div className="main uk-text-center" style={{padding:"50px 0px"}}>
                    <div className="bookingConfirm uk-align-center uk-text-left">
                        <h3>THANK YOU FOR BOOKING AN  APPOINTMENT VIA IS</h3>
                        <p className="confirmaddr">COUNSELLOR NAME:John Doe</p>
                        <p className="confirmaddr">APPOINTMENT DATE:20 MAY,2020</p>
                        <p className="confirmaddr">APPOINTMENT SLOT:02:00 to 03:00</p>
                        <p className="confirmaddr">CENTER NAME:Holy Cross Vaccination center</p>
                        <h3 style={{color:"#c454a2",paddingTop:"30px"}}>WISH YOU GOOD HEALTH</h3>
                    </div>
                </div>

            </div>

        )
    }
}