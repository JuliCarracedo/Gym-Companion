import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BigCard, BigCardInner, BlueButton, RedButton,
} from './StyledComponents/styledComponents';

const UserCard = () => (
  <BigCard className="user-card">
    <BigCardInner className="top">
      <img className="profile-pic" src="https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png" alt="user" />
      <div className="user-info">
        <h1>USERNAME</h1>
        <h4>email@email.com</h4>
      </div>
    </BigCardInner>
    <nav className="bottom">
      <NavLink to="profile"><RedButton>Profile</RedButton></NavLink>
      <NavLink to="config"><BlueButton>Configuration</BlueButton></NavLink>
    </nav>
  </BigCard>
);

export default UserCard;
