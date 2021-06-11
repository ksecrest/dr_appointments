import React from 'react';

const AppointmentEdit = ({ appointment, doctor }) => {
  const { date, time, errors, id } = appointment;
  return(
    <>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments/${id}`} method="post">
        <fieldset>
          <legend>UPDATE Appointment:${id}ID</legend>
          <input type="hidden" name="_method" value="patch"/>
          <p>Date</p>
          <input
          defaultValue = {date}
          placeholder  = "MM/DD/YYYY"
          name         = "appointment[date]"
          type         = "text"
          />
          <br />
          <p>Time</p>
          <input
          defaultValue= {time}
          placeholder = "0-24HRS"
          name        = "appointment[time]"
          type        = "text"
          />
          <button type="submit">Update</button>
          <br />
        </fieldset>
      </form>
    </>
  )
}

export default AppointmentEdit;