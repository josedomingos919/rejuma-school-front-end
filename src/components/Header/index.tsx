import { Props } from "./types";
import { colors } from "../../utils/color";
import { BreadcrumbContainer, Container, ItemContainer, Label } from "./styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Header = ({ breadcrumb = [] }: Props) => {
  return (
    <Container>
      <BreadcrumbContainer>
        {breadcrumb?.map((title, index) => (
          <ItemContainer key={index * 0.1}>
            {index > 0 ? (
              <ArrowRightIcon
                key={index * 0.3}
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  color: colors.darkTitle,
                }}
              />
            ) : (
              <></>
            )}
            <Label key={index}>{title}</Label>
          </ItemContainer>
        ))}
      </BreadcrumbContainer>
    </Container>
  );
};
