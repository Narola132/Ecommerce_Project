import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/counsellorSlots.css'
import calender from '../../assets/images/calender.png'
import Calendar from 'react-calendar'
import {
    Link
} from "react-router-dom";

export default class BookAppointment extends Component {


    render() {
        return (
            <div>

                <div className="main">
                    <h2 style={{ textAlign: 'center', fontSize: 25, fontWeight: 'lighter', paddingTop: "30px", color: "black" }}> AVAILABLITY CALENDER for counsellor JOHN DOE</h2>
                    <p className="" style={{ textAlign: "center", marginTop: "-10px", marginBottom: "60px", color: "black" }}>Click on a day in the calendar to edit/view the slots and then click on a slot to mark to make it available or unavailable</p>


                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <div style={{ height: "auto", width: "400px", backgroundColor: "", paddingLeft: "100px" }}>
                            <Calendar></Calendar>
                        </div>
                        <div className="slots">
                            
                                <button uk-toggle="target: #my-id" className="slotButtons">10:00 to 11:00</button>
                       
                            <button uk-toggle="target: #my-id" className="slotButtons">11:00 to 12:00</button>
                            <button uk-toggle="target: #my-id" className="slotButtons">12:00 to 01:00</button>
                            <button uk-toggle="target: #my-id" className="slotButtons">01:00 to 02:00</button>
                            <button uk-toggle="target: #my-id" className="slotButtons">02:00 to 03:00</button>
                        </div>
                    </div>
                    <div id="my-id" uk-modal="true">
                        <div class="uk-modal-dialog uk-modal-body">
                           <div style={{padding:"20px"}}>
                           <p className="details">COUNSELLOR NAME : John Doe</p>
                    <p className="details">APPOINTMENT DATE : Apr 29,2020</p>
                    <p className="details">APPOINTMENT SLOT : 11:00 am - 12:00 am</p>
                    <Link to='/bookingconfirm'><button  style={{border:"none",backgroundColor:"#BB599F",height:"30px",borderRadius:"3px",color:"white",marginLeft:'30px',fontSize:"10px",padding:"0px 30px"}} >
                   BOOK THIS SLOT </button></Link>
                           </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}