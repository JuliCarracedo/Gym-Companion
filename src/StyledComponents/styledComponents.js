import styled from 'styled-components';

const Wrapper = styled.div`
  color: whitesmoke;
  height: max-content;
  background: #f4aa43;
  background-size: cover;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  font-size: 1em;
  height: 100%;
`;

export const BigCard = styled.div`
    padding: 1em;
    background: #12b69a;
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: space-around;
    margin-bottom: 0.5em;
`;

export const BigCardInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const BigCardButtons = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PrimaryButton = styled.button`
    padding: 1em;
    margin: 0.5em;
    color: whitesmoke;
    background: #166650;
    border-radius: 10px;
    border-width: 0;
    width: 40vw;
`;

export const SecondaryButton = styled.button`
    padding: 1em;
    margin: 0.5em;
    color: whitesmoke;
    background: #225441;
    border-radius: 10px;
    border-width: 0;
    width: 40vw;
`;

export const SmallCard = styled.div`
    padding: 2em;
    margin: 0.5em 1em;
    background: #d9610c;
    display: flex;
    flex-direction: row;
    height: 10vh;
    justify-content: space-between;
    align-items: center
`;

export default Wrapper;
