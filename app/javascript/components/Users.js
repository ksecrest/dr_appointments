import React from 'react';

const Users = ({ users }) => {
  // const {full_name, email, address, dob} = users
  return(
    <>
      <h1>All Users</h1>
      {
        users.map ( (u) =>
          <div>
            <a href={`/users/${u.id}`}>{u.full_name}</a>
          </div>
      )}
    </>
  )
}

export default Users;