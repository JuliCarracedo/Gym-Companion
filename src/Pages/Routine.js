import React from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper, { BigCard } from '../StyledComponents/styledComponents';

const Routine = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  return (
    <Wrapper>
      <BigCard>
        <h2>
          {`Routine ${id}`}
        </h2>
      </BigCard>
    </Wrapper>
  );
};

export default Routine;
