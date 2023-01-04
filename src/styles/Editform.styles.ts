import styled from "styled-components";
import { StyledDelBtn } from "./DeleteSelected.styles";

export const StyledForm = styled.form`
  font-family: inherit;
  padding: 0.2rem 0.5rem;

  input {
    font-size: 1.8rem;
    padding: 0.8rem 1.6rem;
    margin: 0.6rem 0.4rem;
  }
  .name,
  .email {
    width: 70%;
    margin-bottom: 0.8rem;
  }
  input:focus {
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
  }
  label {
    font-size: 1.9rem;
    letter-spacing: 0.05rem;
    margin-right: 1rem;
  }

  @media (max-width: 48.5em) {
  }
`;

export const StyledButton = styled(StyledDelBtn)`
  font-size: 1.8rem;
  letter-spacing: 0.04rem;
  padding: 0.8rem 2rem;
  margin-top: 1.5rem;
`;

export const StyledHeading = styled.p`
  text-transform: uppercase;
  margin-bottom: 1.3rem;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  border-bottom: 0.5px solid grey;
  padding-bottom: 1rem;
`;

type EditStyleProps = {
  position: string;
  width: number;
};

export const EditFormStyles = {
  position: "absolute",
  width: 500,
  backgroundColor: "white",
  boxShadow: "inset 0 0 0 3px #fff;",
  padding: "2rem",

  "@media (max-width: 48.5em)": {
    width: 400,
  },
  "@media (max-width: 37.5em)": {
    width: 200,
  },
};
