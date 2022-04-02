import {
  Card,
  Container,
  Content,
  Image,
  LogoCard,
  LogoContainer,
  Title,
} from "./styles";
import Logo from "./../../assets/icon/logo.jpg";

export const Login = () => {
  return (
    <Container>
      <Card>
        <LogoCard>
          <LogoContainer>
            <Image src={Logo} />
          </LogoContainer>
        </LogoCard>
        <Content>
          <Title>Login</Title>
        </Content>
      </Card>
    </Container>
  );
};
