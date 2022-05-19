import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BigCard, BigCardButtons, BigCardInner, SecondaryButton, PrimaryButton,
} from './StyledComponents/styledComponents';

const UserCard = () => (
  <BigCard className="user-card">
    <BigCardInner className="top">
      <img className="profile-pic" src="https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png" alt="user" />
      <div className="user-info">
        <h2>USERNAME</h2>
        <h4>email@email.com</h4>
      </div>
    </BigCardInner>
    <BigCardButtons className="bottom">
      <NavLink to="profile"><PrimaryButton>Profile</PrimaryButton></NavLink>
      <NavLink to="config"><SecondaryButton>Configuration</SecondaryButton></NavLink>
    </BigCardButtons>
  </BigCard>
);

export default UserCard;
