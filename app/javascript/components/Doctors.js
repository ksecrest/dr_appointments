import React from 'react';

const Doctors = ({ doctors }) => {
  const { dr_name, errors } = doctors;
  return(
    <>
      <h1>All Doctors</h1>
      { errors && errors }
      {
        doctors.map( (doctor) => (
          <div>
            <h2><a href={`/doctors/${doctor.id}`}>{doctor.dr_name}</a></h2>
            <h4><a href={`/doctors/${doctor.id}/edit`}>Edit Doctor</a></h4>
            <h4><a href={`/doctors/${doctor.id}`} data-method="delete">Delete Doctor</a></h4>
          </div>
        ))
      }
    </>
  )
}

export default Doctors;