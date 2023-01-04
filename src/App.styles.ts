import styled from "styled-components";

export const StyledAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* padding: 3rem 6rem; */
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .search-container {
    /* background-color: yellow; */
    margin-top: 1.5rem;
    display: flex;
    width: 100%;
    padding: 0 26%;
    /* min-width: 45.1%; */
    justify-content: center;
  }

  .grid-container {
    /* width: 100%; */
    /* width: auto;
    padding: 0 15rem; */
  }

  .footer-container {
    display: flex;
    justify-content: center;
    width: 100%;
    /* background-color: yellow; */
    align-items: center;
    margin-bottom: 2rem;
    /* gap: 20rem; */
    position: fixed;
    bottom: 0;
  }
  .del-btn-container {
    margin-right: 12rem;
    /* background-color: pink; */
  }
  .page-container {
    margin-left: 8rem;
    /* background-color: blue; */
  }
`;
