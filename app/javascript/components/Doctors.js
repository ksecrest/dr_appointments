import React from 'react';

const Doctors = ({ doctors }) => {
  const { dr_name, errors } = doctors
  return(
    <>
      { errors && errors }
      {
        doctors.map( (doctor) => (
          <h2><a href={`/doctors`}>{dr_name}</a></h2>
          // <h2><a href={`/doctors/${doctor.id}/edit`}>Edit Doctor</a></h2>
        ))
      }
    </>
  )
}

export default Doctors;