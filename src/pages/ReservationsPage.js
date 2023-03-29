import React from 'react';

import { Nav, Footer, BookingForm } from '../components';


function ReservationsPage( props ) {
  return (
    <>
      <Nav />
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
      <Footer/>
    </>
  );
}

export default ReservationsPage;