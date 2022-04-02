import { Container, LeftContainer, RightContainer } from "./styles";
import { Props } from "./types";

export const MainLayout = ({ left = <></>, right = <></> }: Props) => {
  return (
    <Container>
      <LeftContainer key={1}>{left}</LeftContainer>
      <RightContainer key={2}>{right}</RightContainer>
    </Container>
  );
};
