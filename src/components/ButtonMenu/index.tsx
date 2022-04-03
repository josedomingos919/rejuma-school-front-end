import { Container, Label, RightIcon, TextContainer } from "./styles";
import { Props } from "./types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { colors } from "../../utils/color";

export const ButtonMenu = ({
  label,
  icon,
  hasChildren = false,
  isDown = false,
  onPress = () => {},
}: Props) => {
  return (
    <Container onClick={onPress} isDown={isDown}>
      <TextContainer>
        {icon}
        <Label>{label}</Label>
      </TextContainer>

      {hasChildren && (
        <RightIcon isDown={isDown}>
          <ArrowBackIosIcon
            style={{ color: colors.darkIcon }}
            fontSize="small"
          />
        </RightIcon>
      )}
    </Container>
  );
};
