import { Container, Content, Footer, IconView, NumberView } from "./styles";
import { Props } from "./types";

export const StatusCard = ({
  color,
  icon,
  total,
  title,
  marginRigth = 0,
}: Props) => {
  return (
    <Container marginRigth={marginRigth} color={color}>
      <Content>
        <IconView>{icon}</IconView>
        <NumberView>{total}</NumberView>
      </Content>
      <Footer color={color}>{title}</Footer>
    </Container>
  );
};
