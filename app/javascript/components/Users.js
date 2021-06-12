

import React from 'react'
const Users = ({ users }) => {
  return (
    <>
      <h1>All Users</h1>
      <a href="/users/new">Add a new User</a>
      <br />
      <h2>{ users.length <= 0 ? "No Users" : ""}</h2>
      {
        users.map( (u) => (
          <div>
            <h2><a href={`/users/${u.id}`}>{u.full_name}</a></h2>
            <h3><a href={`/users/${u.id}/edit`}>Edit this user</a></h3>
            <h3><a href={`/users/${u.id}`} data-method="delete">Delete this User</a></h3>
          </div>
        ))
      }
    </>
  );
}
export default Users; 