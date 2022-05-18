import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  BigCard, BigCardButtons, BigCardInner, SecondaryButton, PrimaryButton,
} from './StyledComponents/styledComponents';

const UnloggedCard = (props) => {
  const { login } = props;

  const handleLogin = (e) => {
    e.preventDefault();
    login(true);
  };
  return (
    <BigCard className="user-card">
      <BigCardInner className="top">
        <div className="user-info">
          <h1>WELCOME</h1>
          <h4>Please log in or sign up to continue</h4>
        </div>
      </BigCardInner>
      <BigCardButtons className="bottom">
        <NavLink to="login" onClick={(e) => { handleLogin(e); }}><PrimaryButton>Log in</PrimaryButton></NavLink>
        <NavLink to="signup" onClick={(e) => { handleLogin(e); }}><SecondaryButton>Sign up</SecondaryButton></NavLink>
      </BigCardButtons>
    </BigCard>
  );
};

UnloggedCard.propTypes = {
  login: PropTypes.func.isRequired,
};

export default UnloggedCard;
