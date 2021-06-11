import React from 'react';

const AppointmentNew = ({ appointment, doctor }) => {
  const { date, time } = appointment;
  const defaultDate = date ? date : "";
  const defaultTime = time ? time : "";
  return(
    <>
      <form action={`/doctor/${doctor.id}/appointments`} method="post" >
        <fieldset>
          <legend>Create new Appointment</legend>
        <h1>Date</h1>
        <input
        defaultValue = {defaultDate}
        name         = "appointment[date]"
        placeholder  = "MM/DD/YYYY"
        type         = "text"
        required
        />
        <br />
        <h1>Time</h1>
        <input
        defaultValue = {defaultTime}
        name         = "appointment[Time]"
        placeholder  = "0-24HRS"
        type         = "number"
        required
        />
        <br />
        <button type="submit">Submit</button>
        </fieldset>
      </form>
      <br />
      <a href={`/doctors/${doctor.id}/appointments`}>Back</a>
    </>
  );
}

export default AppointmentNew;