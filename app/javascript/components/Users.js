

import React from 'react'
const Users = ({ users }) => {
  const { full_name, address, dob, email } = users
  return (
    <>
      <h1>Users</h1>
      <a href="/users/new">New User</a>
      <br />
      <h2>{ users.length <= 0 ? "No users" : ""}</h2>
      {
        users.map( (user) => (
          <div>
            <h3><a href={`/users/${user.id}`}>User's Page</a></h3>
            <h3><a href={`/users/${user.id}/edit`}>Edit this user</a></h3>
            <h3><a href={`/users/${user.id}`}>Delete this User</a></h3>
          </div>
        ))
      }
    </>
  )
}
export default Users;