import styled from "styled-components";
import { colors } from "../../utils/color";
import { ContainerProps } from "./types";

export const Container = styled.div<ContainerProps>`
  flex: 1;

  @media (min-width: 1500px) {
    flex: initial;
    width: 178px !important;
  }
  height: 107px;
  border: 1px solid ${({ color }) => color};
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  margin-right: ${({ marginRigth }) => marginRigth}px;
  margin-bottom: 14px;
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Footer = styled.div<ContainerProps>`
  height: 33px;
  color: ${({ color }) => color};
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  display: flex;
  font-size: 12px;
  align-items: flex-end;
  background-color: ${colors.darkBackGround};
`;

export const NumberView = styled.div`
  color: ${colors.white};
  font-weight: bold;
  font-size: 25px;
`;
export const IconView = styled.div`
  transform: scale(1.6);
`;
