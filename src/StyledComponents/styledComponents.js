import styled from 'styled-components';

const Wrapper = styled.div`
  color: whitesmoke;
  padding: 1em;
  height: max-content;
  background: #1a0315;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  font-size: 1em;
  height: 100%;
`;

export const BigCard = styled.div`
    padding: 1em;
    margin: 1em 0;
    background: #88d317;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-between;
`;

export const BigCardInner = styled.div`
    display: flex;
    flex-direction: row;
    color: black;
    font-size: 20px;
`;
export const BigCardButtons = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PrimaryButton = styled.button`
    font-size: 20px;
    padding: 1em;
    margin: 0.5em;
    color: whitesmoke;
    background: #6e3667;
    border-radius: 10px;
    border-width: 0;
    width: 35vw;
`;

export const SecondaryButton = styled.button`
font-size: 20px;

    padding: 1em;
    margin: 0.5em;
    color: whitesmoke;
    background: #535353;
    border-radius: 10px;
    border-width: 0;
    width: 35vw;
`;

export const SmallCard = styled.div`
    padding: 2em;
    margin: 1em 0;
    background: #6e3667;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    height: 10vh;
    justify-content: space-between;
    align-items: center
`;

export default Wrapper;
