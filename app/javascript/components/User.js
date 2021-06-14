import React from 'react';

const User = ({ user, doctor }) => {
  const { id, full_name, dob, address, email, errors } = user;
  return(
    <>
      { errors && errors }
      <h1>{full_name}</h1>
      <h2>Date of Birth: {dob}</h2>
      <p>Email:<strong> { email }</strong></p>
      <p>Address: <strong>{ address }</strong></p>
      <h2>{ user.length  <= 0 ? "No appointments with any Doctor" : ""}</h2>
      {/* <h5>Doctors</h5> */}
      <ul>
        {
          doctor.map( (doctor) => (
            <li>
              <a href={`/doctors/${doctor.id}`}>Appointment with: Dr. {doctor.dr_name}</a>
            </li>
          ))
        }
      </ul>
      <a href={`/users/${id}/edit`}>Edit User</a>
      <br />
      <a href={`/users`}>Back</a>
      <br />
      <br />
      <a href={`/users/${id}`} data-method="delete">Delete user</a>
    </>
  );
}
export default User; 