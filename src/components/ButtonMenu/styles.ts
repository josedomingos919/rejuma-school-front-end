import styled from "styled-components";
import { colors } from "../../utils/color";
import { ButtonStyleProps } from "./types";

export const Container = styled.div`
  &,
  * {
    cursor: pointer;
  }
  background-color: ${colors.darkBackGround};
  width: 100%;
  border-bottom: 1px solid ${colors.darkBorder};
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  ${({ isDown = false }: ButtonStyleProps) =>
    isDown ? ` background-color: ${colors.darkFocus}; ` : ""}
  :hover {
    background-color: ${colors.darkFocus};
    transition: 0.4s;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RightIcon = styled.div`
  display: flex;
  ${({ isDown = false }: ButtonStyleProps) =>
    isDown
      ? `
  transform: rotate(-90deg);
  margin-top: -5px;`
      : ""}
`;

export const Label = styled.label`
  margin-left: 10px;
  display: flex;
  color: ${colors.darkTitle};
`;
