import styled from "styled-components";

export const StyledSearch = styled.input`
  font-size: 2rem;
  width: 100%;
  height: 3.6rem;
  box-shadow: inset 0 0 0 1px #339af0;
  padding: 0.8rem;
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  color: rgba(0, 0, 0, 0.9);
  outline: none;
  border: none;

  @media (max-width: 48.5em) {
    font-size: 1.5rem;
  }
`;
