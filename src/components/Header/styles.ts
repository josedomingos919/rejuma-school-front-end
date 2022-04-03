import styled from "styled-components";
import { colors } from "../../utils/color";

export const Container = styled.div`
  width: 100%;
  padding-left: 5px;
  padding-bottom: 13px;
  border-bottom: 2px solid ${colors.darkBorder};
`;

export const BreadcrumbContainer = styled.div`
  display: flex;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.darkTitle};
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
