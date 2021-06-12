import React from 'react';

const AppointmentNew = ({ appointment, doctor, users }) => {
  const { date, time, role, user_id } = appointment;
  const defaultDate = date ? date : "";
  const defaultTime = time ? time : "";
  const defaultUser = user_id ? user_id : "";
  const defaultRole = role ? role : "";
  return(
    <>
      <form action={`/doctors/${doctor.id}/appointments`} method="post" >
        <fieldset>
          <legend>Create new Appointment</legend>
        <h1>Date</h1>
        <input
        defaultValue = {defaultDate}
        name         = "appointment[date]"
        placeholder  = "MM/DD/YYYY"
        type         = "date"
        min          = "100"
        max          = "2400"
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
        <br />
        <label for="role">Choose a role:</label>
        <select name="appointment[role]" id="role" defaultValue={defaultRole}> {/*required>*/}
          <option value="doctor">Doctor</option>
          <option value="nurse">Nurse</option>
          <option value="patient">Patient</option>
        </select>
        <br />
        <label for="user_id">Choose a user:</label>
        <select name="appointment[user_id]" id="user_id" defaultValue={defaultUser}>
          { users.map((u) => (
            <option value={u.id}>{u.full_name}</option>
          ))}
        </select>
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