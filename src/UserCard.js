import React from 'react';
import { NavLink } from 'react-router-dom';

const UserCard = () => (
  <div className="user-card">
    <div className="top">
      <img className="profile-pic" src="https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png" alt="user" />
      <div className="user-info">
        <h1>USERNAME</h1>
        <h4>email@email.com</h4>
      </div>
    </div>
    <nav className="bottom">
      <NavLink to="profile"> Profile </NavLink>
      <NavLink to="config"> Configuration </NavLink>
    </nav>
  </div>
);

export default UserCard;
