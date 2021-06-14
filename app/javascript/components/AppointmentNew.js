import React from 'react';

const AppointmentNew = ({ appointment, doctor, users }) => {
  const {schedule, point, role, user_id } = appointment;
  const defaultDate = schedule  ? schedule : "";
  const defaultTime = point ? point : "";
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
        name         = "appointment[schedule]"
        placeholder  = "MM/DD/YYYY"
        type         = "date"
        required
        />
        <br />
        <h1>Time</h1>
        <input
        defaultValue = {defaultTime}
        name         = "appointment[point]"
        placeholder  = "12:00 PM"
        type         = "time"
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