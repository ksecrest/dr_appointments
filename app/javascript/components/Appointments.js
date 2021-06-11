import React from 'react';

const Appointments = ({ appointments, doctor }) => {
  const { errors } = appointments
  return(
    <>
      { errors && errors }
      <h1>Appointments</h1>
      <p><a href={`/`}>Back to {doctor}</a></p>
      <br />
      <a href={`/doctors/${doctor.id}/appointments/new`}>Create New Appointment</a>
      <br />
      {
        appointments.map ((a) => (
          <div key={a.id} className="appointment-card">
            <h3><a href={`/doctors/${doctor.id}/appointments/${a.id}`}>Appointment</a></h3>
            <h3><a href={`/doctors/${doctor.id}/appointments/${a.id}/edit`}>Edit Appointment</a></h3>
            <h3><a href={`/doctors/${doctor.id}/appointments/${a.id}`} data-method="delete">Remove Appointment</a></h3>
          </div>
        ))
      }
    </>
  )
}

export default Appointments;