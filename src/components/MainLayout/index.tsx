import { Container, LeftContainer, RightContainer } from "./styles";
import { Props } from "./types";

export const MainLayout = ({ left = <></>, right = <></> }: Props) => {
  return (
    <Container>
      <LeftContainer>{left}</LeftContainer>
      <RightContainer>{right}</RightContainer>
    </Container>
  );
};
