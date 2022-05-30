import React from 'react';
import { Link } from 'react-router-dom';
import RoutineCard from '../RoutineCard';
import Wrapper, { BigHeader } from '../StyledComponents/styledComponents';

const Routines = () => (
  <Wrapper className="routines-page">

    <BigHeader className="top">
      <Link to="/"><svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z" /></svg></Link>
      <h2> My Routines</h2>
    </BigHeader>

    <RoutineCard id={1} title="Routine 1" />
    <RoutineCard id={2} title="Routine 2" />
    <RoutineCard id={2} title="Routine 2" />

  </Wrapper>
);
export default Routines;
