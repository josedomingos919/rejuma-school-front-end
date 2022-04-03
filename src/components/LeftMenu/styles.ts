import styled from "styled-components";
import { colors } from "../../utils/color";

export const Container = styled.div`
  background-color: ${colors.darkBackGround};
  height: 100%;
  height: 100vh;
  border-right: 1px solid ${colors.darkBorder};
  display: flex;
  flex-direction: column;
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

export const FooterConteiner = styled.div`
  padding: 10px;
  display: flex;
  align-items: flex-end;
  flex: 1;
`;

export const ImageContainer = styled.div`
  width: 100%;
  background-color: ${colors.darkHeader};
  border: 1px solid ${colors.darkBorder};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const ImageCard = styled.div`
  margin-right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 28px solid ${colors.darkBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    position: absolute;
    top: 7px;
    right: -29px;
    width: 10px;
    border-radius: 10px;
    color: transparent;
    height: 10px;
    border: 3px solid ${colors.darkBorder};
    background: green;
    content: "s";
  }
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelUserName = styled.label`
  color: ${colors.darkTitle};
  margin-bottom: 5px;
`;
export const LabelUserLevel = styled.label`
  font-size: 12px;
  color: #a7a6a7;
`;
export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
