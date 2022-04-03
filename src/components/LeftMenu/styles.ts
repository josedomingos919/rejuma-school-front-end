import styled from "styled-components";
import { colors } from "../../utils/color";

export const Container = styled.div`
  background-color: ${colors.darkBackGround};
  height: 100%;
  width: 100%;
  border-right: 1px solid ${colors.darkBorder};
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 2px solid ${colors.darkBorder};
`;

export const Image = styled.img``;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const ContainerChildren = styled.div`
  padding-left: 20px;
`;
