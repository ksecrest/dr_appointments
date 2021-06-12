import React from 'react';
import Doctors from './Doctors';

const Doctor = ({ doctor }) => {
  const { dr_name, id } = doctor
  return(
    <>
      <h1>{dr_name}</h1>
      <hr />
      <a href={`/doctors/${id}/appointments`}>Appointments</a>
      <br />
      <a href={`/doctors/${id}`} data-method="delete">Delete Doctor</a>
    </>
  );
}

export default Doctor;