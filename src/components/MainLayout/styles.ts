import styled from "styled-components";
import { colors } from "../../utils/color";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const LeftContainer = styled.div`
  height: 100vh;
  width: 270px;
`;

export const RightContainer = styled.div`
  height: 100vh;
  flex: 1;
  padding: 22px;
  background-color: ${colors.white};
`;
