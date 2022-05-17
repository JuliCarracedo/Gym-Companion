import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1em;
  height: max-content;
  background: lightblue;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  font-size: 1em;
  height: 100%;
`;

export const BigCard = styled.div`
    padding: 1em;
    margin: 1em 0;
    background: lightskyblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-between;
`;

export const BigCardInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BigCardButtons = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const RedButton = styled.button`
    padding: 1em;
    margin: 0.5em;
    background: red;
    border-radius: 10px;
    border-width: 0;
    width: 35vw;
`;

export const BlueButton = styled.button`
    padding: 1em;
    margin: 0.5em;
    background: dodgerblue;
    border-radius: 10px;
    border-width: 0;
    width: 35vw;
`;

export const BlueSmallCard = styled.div`
    padding: 2em;
    margin: 1em 0;
    background: dodgerblue;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    height: 10vh;
    justify-content: space-between;
    align-items: center
`;

export const RedSmallCard = styled.div`
    padding: 2em;
    margin: 1em 0;
    background: red;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    height: 10vh;
    justify-content: space-between;
    align-items: center
`;

export default Wrapper;
