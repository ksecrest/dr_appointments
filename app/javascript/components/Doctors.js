import React from 'react';

const Doctors = ({ doctors }) => {
  const { dr_name, errors, cssBlock } = doctors;
  return (
    <>
      <h1 className={`${cssBlock}_dr_name`}> Doctors</h1>
      { errors && errors }
      <div className={`${cssBlock}_column`}>
      {doctors.map( (doctor) => (
        <div className={`${cssBlock}_doctor`}>
          <div>
            <a href={`/doctors/${doctor.id}`} 
            style={{ paddingLeft: "10px" }}> 
            {doctor.dr_name}
            </a>
            <a 
            href={`/doctors/${doctor.id}/edit`} 
            style={{ paddingLeft: "10px" }}> 
            Edit Doctor
            </a>
            <a 
            href={`/doctors/${doctor.id}`}  
            data-method="delete" 
            style={{ paddingLeft: "10px" }}>
            Delete Doctor
            </a>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default Doctors;