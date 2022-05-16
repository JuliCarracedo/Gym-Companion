import React from 'react';
import { NavLink } from 'react-router-dom';
import UserCard from '../UserCard';

const MainPage = () => (
  <div className="main-page">
    <UserCard />
    <nav className="bottom">
      <NavLink> Profile </NavLink>
      <NavLink> Configuration </NavLink>
    </nav>
  </div>
);

export default MainPage;
