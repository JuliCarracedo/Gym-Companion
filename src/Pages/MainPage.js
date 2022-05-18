import React, { useState } from 'react';
import RoutinesCard from '../RoutinesCard';
import Wrapper from '../StyledComponents/styledComponents';
import TrainerCard from '../TrainerCard';
import UserCard from '../UserCard';
import UnloggedCard from '../UnloggedCard';

const MainPage = () => {
  const [logged, setLogged] = useState(false);

  return (
    <Wrapper className="main-page">
      {logged ? (
        <>
          <UserCard />
          <RoutinesCard />
          <TrainerCard />
        </>
      )
        : <UnloggedCard login={setLogged} />}
    </Wrapper>
  );
};

export default MainPage;
