import React from 'react';
import doctor_icon from "./images/doctor_icon.png"

const Navbar = () => {
  const cssBlock = 'drappmt-navbar';
  return (
    <div className={cssBlock} role='navigation'>
      <div className={`${cssBlock}_link ${cssBlock}_link--logo` }>
        <img src={doctor_icon} width="50" height="50" alt="medical symbol"/>
      </div>
      <a className={`${cssBlock}_link`} href="/users">All users</a>
      <a className={`${cssBlock}_link`} href="/users/new">New users</a>
      
      <a className={`${cssBlock}_link`} href="/doctors">All Doctors</a>
      <a className={`${cssBlock}_link`} href="/doctors/new">New Doctor</a>

  </div>
  )
}

// const Navbar = () => (
//   <nav>
//     <ul>
//       <li>
//         <a href="/users">All users</a>
//       </li>
//       <li>
//         <a href="/users/new">New users</a>
//       </li>
//       <li>
//         <a href="/doctors">All Doctors</a>
//       </li>
//       <li>
//         <a href="/doctors/new">New Doctor</a>
//       </li>
//     </ul>
//   </nav>
// )

export default Navbar;