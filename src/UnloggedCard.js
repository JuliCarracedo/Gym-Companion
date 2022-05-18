import React from "react";

const UnloggedCard = () =>{<BigCard className="user-card">
    <BigCardInner className="top">
      <div className="user-info">
        <h1>WELCOME</h1>
        <h4>Please log in or sign up to continue</h4>
      </div>
    </BigCardInner>
    <BigCardButtons className="bottom">
      <NavLink to="login"><PrimaryButton>Log in</PrimaryButton></NavLink>
      <NavLink to="signup"><SecondaryButton>Sign up</SecondaryButton></NavLink>
    </BigCardButtons>
  </BigCard>}

export default UnloggedCard;