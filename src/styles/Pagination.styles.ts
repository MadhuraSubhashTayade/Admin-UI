import styled from "styled-components";

export const StyledPageBtn = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  border: none;
  border-radius: 50%;
  font-size: 2.2rem;
  cursor: pointer;

  /* background-color: none; */

  .icon,
  .left-icon,
  .right-icon {
    width: 3.2rem;
    height: 3.2rem;
    color: #339af0;
  }

  span {
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.4rem;
    border: none;
    border-radius: 50%;
    font-size: 2rem;
  }

  .active-btn {
    background-color: #339af0;
    color: #e7f5ff;
    :hover {
      cursor: pointer;
    }
  }
  .inactive-btn {
    color: #339af0;
    border: 2px solid #339af0;
    background-color: transparent;
  }

  .delete-icon {
    color: red;
    /* width: 2.4rem; */
  }

  @media (max-width: 68.3em) {
    width: 3.2rem;
    height: 3.2rem;
    font-size: 2rem;
    .icon,
    .left-icon,
    .right-icon {
      width: 3rem;
      height: 3rem;
    }
    span {
      font-size: 1.8rem;
      padding: 0.7rem 1.3rem;
    }
  }

  @media (max-width: 48.5em) {
    .icon,
    .left-icon,
    .right-icon {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  @media (max-width: 37.5em) {
    width: 2.8rem;
    height: 2.8rem;
    font-size: 2rem;
    .icon,
    .left-icon,
    .right-icon {
      width: 2rem;
      height: 2rem;
    }
    span {
      font-size: 1.7rem;
      padding: 0.6rem 1rem;
    }
  }
`;

export const StyledPageDiv = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 68.3em) {
    gap: 1.5rem;
  }
  @media (max-width: 48.5em) {
    gap: 1rem;
    padding-right: 2rem;
  }
  @media (max-width: 37.5em) {
    /* gap: 1rem; */
    padding-right: 8rem;
  }
`;
