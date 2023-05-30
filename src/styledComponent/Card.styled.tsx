import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
  background-color: var(--buttonMor);
  display: flex;
  color: rgb(233, 233, 233);
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: var(--buttonMorHov);
  }

  li {
    width: 100%;
    padding: 30px;
  }

  button {
    width: 15%;
    display: grid;
    place-content: center;
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 3px;
    margin-left: 1rem;
  }

  button img {
    width: 100%;
  }
`;
