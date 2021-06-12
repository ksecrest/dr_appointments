import React from 'react';

const DoctorNew = ({ doctor }) => {
  const { dr_name, id, errors } = doctor;
  const defaultName = dr_name ? dr_name : "";
  return(
    <>
      <form action="/doctors" method="post" >
        <fieldset>
          <legend>New Doctor</legend>
          <input
          placeholder  = "Doctor Name"
          text         = "text"
          defaultValue = {defaultName}
          name         = "doctor[dr_name]"
          required
          />
          <button type="submit">Add</button>
        </fieldset>
      </form>
    </>
  );
}

export default DoctorNew;