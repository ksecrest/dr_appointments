import React from 'react';

const Appointments = ({ doctor, doctors, nurses, patients, users, appointments }) => {

  const { role, schedule, point } = appointments
  const displayUser = (id) => {
    let fullName
    users.map((u) => {
      if (u.id === id) {
        fullName = u.full_name
      }
    })
    return fullName
  }
  return(
    <>
      <h1>{doctor.dr_name} 'Appointments</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
      <h2>Doctor</h2>
      { doctors.map( (d) => (
        <div>
          <p>{displayUser(d.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${d.id}/edit`}>Edit</a>
          <br />
          <a href={`/doctors/${doctor.id}/appointments/${d.id}`} data-method="delete">Delete</a>
        </div>
      ))}
      <h2>Nurses</h2>
      { nurses.map((nurse) => (
        <div>
          <p>{displayUser(nurse.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${nurse.id}/edit`}>Edit</a>
          <br />
          <a href={`/doctors/${doctor.id}/appointments/${nurse.id}`} data-method="delete">Delete</a>
        </div>
      ))}
      <h2>Patient</h2>
      { patients.map ((patient) => (
        <div>
          <p>{displayUser(patient.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${patient.id}/edit`}>Edit</a>
          <br />
          <a href={`/doctors/${doctor.id}/appointments/${patient.id}`} data-method="delete">Delete</a>
        </div>
      ))}
    </>
  );
}

export default Appointments; 

