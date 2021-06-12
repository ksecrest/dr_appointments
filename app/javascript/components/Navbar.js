import React from 'react';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <a href="/users">All users</a>
      </li>
      <li>
        <a href="/users/new">New users</a>
      </li>
      <li>
        <a href="/doctors">All Doctors</a>
      </li>
      <li>
        <a href="/doctors/new">New Doctor</a>
      </li>
    </ul>
  </nav>
)

export default Navbar;