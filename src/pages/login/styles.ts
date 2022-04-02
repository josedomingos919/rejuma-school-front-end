import styled from "styled-components";
import { colors } from "../../utils/color";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-left: 35px;
  padding-right: 35px;

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${colors.dark};
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.dark};
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  height: 500px;
  background-color: ${colors.white};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoCard = styled.div`
  width: 125px;
  height: 125px;
  background-color: ${colors.white};
  border-radius: 125px;
  margin-top: -62px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1.3);
`;

export const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 125px;
`;

export const Title = styled.label`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 35px;
`;

export const ButtonFooterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LabelForgetPasswordContainer = styled.div``;
export const LabelForgetPassword = styled.label`
  color: ${colors.dark};
  :hover {
    cursor: pointer;
  }
`;

export const CopyRightContainer = styled.div`
  font-size: 9px;
  letter-spacing: 2px;
  margin-top: 70px;
  color: ${colors.dark};
`;
