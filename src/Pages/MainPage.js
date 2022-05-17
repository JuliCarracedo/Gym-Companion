import React from 'react';
import RoutinesCard from '../RoutinesCard';
import Wrapper from '../StyledComponents/styledComponents';
import TrainerCard from '../TrainerCard';
import UserCard from '../UserCard';

const MainPage = () => (
  <Wrapper className="main-page">
    <UserCard />
    <RoutinesCard />
    <TrainerCard />
  </Wrapper>
);

export default MainPage;
