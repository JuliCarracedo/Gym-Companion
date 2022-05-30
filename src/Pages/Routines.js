import React from 'react';
import { Link } from 'react-router-dom';

const Routines = () => (
  <div>
    <Link to={`/routine/${1}`}>
      <section>
        Routine 1
      </section>
    </Link>
    <Link to={`/routine/${2}`}>
      <section>
        Routine 2
      </section>
    </Link>
  </div>
);

export default Routines;
