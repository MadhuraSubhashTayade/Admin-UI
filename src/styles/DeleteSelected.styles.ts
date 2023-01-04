import styled from "styled-components";

export const StyledDelBtn = styled.button`
  height: 100%;
  padding: 1.2rem 1.6rem;
  font-size: 2rem;
  border-radius: 2.4rem;
  border: none;
  cursor: pointer;
  background-color: #fa5252;
  color: #fff5f5;

  :hover {
    background-color: #fff5f5;
    color: #fa5252;
    border: 1px solid #fa5252;
  }

  @media (max-width: 48.5em) {
    padding: 1rem 1.4rem;
    font-size: 1.8rem;
    margin-left: 2rem;
    /* width: 2rem; */
  }
  @media (max-width: 37.5em) {
    padding: 0.7rem 1rem;
    font-size: 1.6rem;
    margin-left: 10rem;
  }
`;
