import React from 'react';

const User = ({ user, doctors }) => {
  const { id, full_name, dob, address, email, errors } = user;
  return(
    <>
      { errors && errors }
      <h1>{full_name}</h1>
      <h2>Date of Birth: {dob}</h2>
      <p>Email:<strong> { email }</strong></p>
      <p>Address: <strong>{ address }</strong></p>
      <h2>{ doctors.length <= 0 ? "No Doctors" : ""}</h2>
      {/* <h5>Doctors</h5> */}
      <ul>
        {
          doctors.map( (doctor) => (
            <li>
              <a href={`/doctors/${doctor.id}`}>{doctor.dr_name}</a>
            </li>
          ))
        }
      </ul>
      <a href={`/users/${id}/edit`}>Edit User</a>
      <br />
      <h2><a href={``}>View appointments</a></h2>
      <br />
      <a href={`/users`}>Back</a>
      <br />
      <br />
      <a href={`/users/${id}`} data-method="delete">Delete user</a>
    </>
  );
}
export default User;