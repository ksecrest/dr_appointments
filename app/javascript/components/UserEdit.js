import React from "react";

const UserEdit = ({ user }) => {

  const { full_name , id, address, email, dob } = user
  const defaultFull_name = full_name ? full_name : "";
  const defaultDob = dob ? dob : "";
  const defaultAddress = address ? address : "";
  const defaultEmail = email ? email : "";
  return (
    <>
      <h1>Editing {full_name}</h1>
      <form action={`/users/${id}`} method="post">
        <input type='hidden' name="_method" value="patch" />
        <br />
        <p>Full Name</p>
        <input
          placeholder="Full Name"
          type="text"
          required
          defaultValue={defaultFull_name}
          name="user[full_name]"
        />
        <br />
        <p>Date of Birth</p>
        <input
          placeholder="dob"
          type="text"
          required
          defaultValue={defaultDob}
          name="user[dob]"
        />
        <br />
        <p>Email</p>
        <input
          required
          placeholder="email"
          type="text"
          defaultValue={defaultEmail}
          name="user[email]"
        />
        <br />
        <p>Address</p>
        <input
          required
          placeholder="address"
          type="text"
          defaultValue={defaultAddress}
          name="user[address]"
        />
        <br />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default UserEdit;