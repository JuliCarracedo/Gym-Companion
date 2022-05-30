import React from 'react';
import RoutineCard from '../RoutineCard';
import Wrapper, { BigCard } from '../StyledComponents/styledComponents';

const Routines = () => (
  <Wrapper className="routines-page">

    <BigCard className="top">
      <h2> My Routines</h2>
    </BigCard>

    <RoutineCard id={1} title="Routine 1" />
    <RoutineCard id={2} title="Routine 2" />
    <RoutineCard id={2} title="Routine 2" />

  </Wrapper>
);
export default Routines;
