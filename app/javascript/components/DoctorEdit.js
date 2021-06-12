import React from 'react';

const DoctorEdit = ({ doctor }) => {
  const { dr_name, id } = doctor;
  const defaultName = dr_name ? dr_name : "";
  return(
    <>
      <form action={`/doctors/${id}`} method="post">
        <fieldset>
          <legend>Edit {dr_name}</legend>
          <input type="hidden" name="_method" value="patch"/> {/* Very important */}
          <input
          placeholder  = "dr_name"
          text         = "text"
          name         = "doctor[dr_name]"
          defaultValue = {defaultName}
          required
          />
          <button type="submit">Update</button>
        </fieldset>
      </form>
    </>
  );
}

export default DoctorEdit;