import React from 'react';

import Routerfile from './router'
import WelcomePage from './components/WelcomePage'
import RegisterPageCounsellor from './components/Counsellors/RegisterPage'
import  LoginPage from './components/Counsellors/Login'
import  CounsellorProfile from './components/Counsellors/CounsellorProfile'
import BookingDetails from './components/Counsellors/BookingDetails'
import  Appointments from './components/Counsellors/Appointments'
import CounsellorSlots from './components/Counsellors/counsellorSlots'

import ClientProfile from './components/Client/ClientProfile'
import RegisterPageClient from './components/Client/Registration'
import LoginPageClient from './components/Client/LoginPage'
import SearchPage from './components/Client/SearchPage'
import CounsellorDetails from './components/Client/CounsellerDetailPage'
import BookingDetailsClient from './components/Client/BookingDetails'
import SearchResults from './components/Client/searchResults'
import BookingMade from './components/Client/bookingsMade'
import BookAppointment from './components/Client/bookAppointment'
import BookingConfirm from './components/Client/bookingConformation'

import LoginPageaAdmin from './components/Admin/LoginPage'
import ClientUsers from './components/Admin/clientUsers'
import CounsellorUsers from './components/Admin/counsellorUsers'
import AllBookings from './components/Admin/allBookings'


function App() {
  return (
   
      <div>
<Routerfile></Routerfile>
      </div>
   
  );
}

export default App;
  