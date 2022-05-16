import React from 'react';
import RoutinesCard from '../RoutinesCard';
import TrainerCard from '../TrainerCard';
import UserCard from '../UserCard';

const MainPage = () => (
  <div className="main-page">
    <UserCard />
    <RoutinesCard />
    <TrainerCard />
  </div>
);

export default MainPage;
