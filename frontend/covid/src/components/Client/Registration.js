import React from 'react'
import logo from '../../assets/images/logo.png'
import '../Counsellors/RegisterPage.css'

export default class RegisterPageClient extends React.Component {
    render() {
        return (
            <div>
                
                <div className="main">
                    <h3 className="regHead">CLIENT  REGISTRATION</h3>
                    <form className="regform uk-text-center">
                        <input className="inputBox" type="text" placeholder="FIRST NAME" style={{ textAlign: 'center' }} /><br/>
                        <input className="inputBox" type="text" placeholder="LAST NAME" style={{ textAlign: 'center' }} /><br/>
                        <input className="inputBox" type="text" placeholder="EMAIL ADDRESS" style={{ textAlign: 'center' }} /><br/>
                        <input className="inputBox" type="text" placeholder="CHOOSE A PASSWORD" style={{ textAlign: 'center' }} /><br/>
                        <input className="inputBox" type="text" placeholder="CONFIRM PASSWORD" style={{ textAlign: 'center' }} /><br/>
                    </form>
                </div>
            </div>

        )
    }
}