import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SmallCard } from './StyledComponents/styledComponents';

const RoutineCard = (props) => {
  const { id, title } = props;

  return (
    <Link to={`/routine/${id}`}>
      <SmallCard className="small-card">
        <h2>{title}</h2>
      </SmallCard>
    </Link>
  );
};

RoutineCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default RoutineCard;
