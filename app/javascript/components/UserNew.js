import React from 'react';

const UserNew = ({ user }) => {
  const { full_name, dob, address, email, errors } = user;
  const defaultFull_name = full_name ? full_name : "";
  const defaultDob = dob ? dob : "";
  const defaultAddress = address ? address : "";
  const defaultEmail = email ? email : "";

  return (
    <>
      <h1>New User</h1>
      { errors && errors }
      <form action="/users" method="post">
        <input
          required
          placeholder="Full Name"
          type="text"
          defaultValue={defaultFull_name}
          name="user[full_name]"
        />
        <input
          required
          placeholder="dob"
          type="text"
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
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default UserNew;