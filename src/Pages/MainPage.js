import React from 'react';
import { NavLink } from 'react-router-dom';
import RoutinesCard from '../RoutinesCard';
import UserCard from '../UserCard';

const MainPage = () => (
  <div className="main-page">
    <UserCard />
    <RoutinesCard />
  </div>
);

export default MainPage;
