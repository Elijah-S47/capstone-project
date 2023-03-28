import React from 'react';

import { Nav, Footer, BookingForm } from '../components';


function ReservationsPage( props ) {
  return (
    <>
      <Nav />
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />
      <Footer/>
    </>
  );
}

export default ReservationsPage;