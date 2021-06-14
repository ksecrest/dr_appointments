import React from 'react';

const Appointment = ({ appointment, doctor }) => {
  const { date, time, errors, id } = appointment;
  const { dr_name } = doctor
  return(
    <>
      { errors && errors }
      <div className="appointment-card">
        <h1><strong>Date: {date}, Time: {time}</strong></h1>
        <p>Would you like to edit it ?</p>
        <a href={`/doctor/${doctor.id}/appointments/${id}/edit`}>Edit Appointment</a>
      </div>
      {/* <a href={``}>Back(Doesn't work)</a> */}
    </>
  )
}

export default Appointment;