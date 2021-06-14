import { userSetter } from 'core-js/fn/symbol';
import React from 'react';

const AppointmentEdit = ({ appointment, doctor, users }) => {
  const { schedule, point, role, errors, user_id, id } = appointment;
  const defaultSchedule = schedule ? schedule : "";
  const defaultPoint = point ? point : "";
  const defaultRole = role ? role : "";
  const defaultUser = user_id ? user_id : "";
  return(
    <>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments/${id}`} method="post">
        <fieldset>
          <legend>UPDATE Appointment:${id}ID</legend>
          <input type="hidden" name="_method" value="patch"/>
          <p>Date</p>
          <input
          defaultValue = {defaultSchedule}
          placeholder  = "MM/DD/YYYY"
          name         = "appointment[schedule]"
          type         = "date"
          />
          <br />
          <p>Time</p>
          <input
          defaultValue= {defaultPoint}
          placeholder = "12:00 P.M."
          name        = "appointment[point]"
          type        = "time"
          />
          <br />
          <select name="appointment[role" id="role" defaultValue={defaultRole} required>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="patient">Patient</option>
          </select>
          <br />
          <select name="appointment[user_id]" id="user_id" defaultValue={defaultUser} required>
            { users.map ( (u) => (
              <option value={u.id}>{u.full_name}</option>
            ))}
          </select>
          <button type="submit">Update</button>
        </fieldset>
      </form>
    </>
  );
}

export default AppointmentEdit;