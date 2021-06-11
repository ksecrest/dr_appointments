import React from "react";

const UserEdit = ({ user }) => {

  const { full_name , id } = user
  const defaultFull_name = full_name ? full_name : "";
  return (
    <>
      <h1>Editing {full_name} :User</h1>
      <form action={`/users/${id}`} method="post">
        <input type='hidden' name="_method" value="patch" />

        <input
          placeholder="Full Name"
          type="text"
          required
          defaultValue={defaultFull_name}
          name="user[full_name]"
        />

        <input
          placeholder="dob"
          type="text"
          required
          defaultValue={defaultDob}
          name="user[dob]"
        />
        
        <input
          required
          placeholder="address"
          type="text"
          defaultValue={defaultAddress}
          name="user[address]"
        />
        <input
          required
          placeholder="email"
          type="text"
          defaultValue={defaultEmail}
          name="user[email]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default UserEdit;