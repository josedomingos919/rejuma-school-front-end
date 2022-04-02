import styled from "styled-components";
import { colors } from "../utils/color";

export const GoldButtonContainer = styled.div`
  .css-sghohy-MuiButtonBase-root-MuiButton-root:hover {
    background-color: ${({ color = colors.golden }) => color} !important;
  }
  .css-sghohy-MuiButtonBase-root-MuiButton-root {
    background-color: ${({ color = colors.golden }) => color};
  }
`;
