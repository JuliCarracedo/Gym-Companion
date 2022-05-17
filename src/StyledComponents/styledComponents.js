import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1em;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  font-size: 1rem;
`;

export const BigCard = styled.div`
    padding: 2rem;
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

export const RedButton = styled.button`
    padding: 1rem;
    margin: 0.5rem;
    background: red;
    border-radius: 10px;
    border-width: 0;
    width: 40%;
`;

export const BlueButton = styled.button`
    padding: 1rem;
    margin: 0.5rem;
    background: dodgerblue;
    border-radius: 10px;
    border-width: 0;
    width: 40%;
`;

export default Wrapper;
