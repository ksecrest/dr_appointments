import React from 'react';
const User = ({ user, doctors, full_name }) => {
  const { id } = user
  return(
    <>
      <h1>{full_name}</h1>
      <hr />
      <h5>Doctors</h5>
      <h6>{ doctors.length <= 0 ? "No Doctors" : "" }</h6>
      <ul>
        {
          doctors.map( (doctor) => (
            <li>
              <a href={`/doctors/${doctor.id}`}>{doctor.dr_name}</a>
            </li>
          ))
        }
      </ul>
      <a href={`/users/${id}`} data-method="delete">
        Delete user
      </a>
    </>
  )
}
export default User;