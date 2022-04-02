import {
  ButtonFooterContainer,
  Card,
  Container,
  Content,
  LabelForgetPasswordContainer,
  Image,
  LabelForgetPassword,
  CopyRightContainer,
  LogoCard,
  LogoContainer,
  Title,
} from "./styles";
import Logo from "./../../assets/icon/logo.jpg";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { GoldButtonContainer } from "../../styles";

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
          <Title>Colégio Rejuma</Title>

          <FormControl sx={{ m: 1, width: "100%" }}>
            <TextField focused label="Usuário" size="small" type="email" />
          </FormControl>

          <FormControl style={{ marginTop: 35 }} sx={{ m: 1, width: "100%" }}>
            <TextField focused label="Senha" size="small" type="password" />
          </FormControl>

          <ButtonFooterContainer style={{ marginTop: 35 }}>
            <GoldButtonContainer>
              <Button variant="contained" endIcon={<ArrowRightIcon />}>
                Entrar
              </Button>
            </GoldButtonContainer>

            <LabelForgetPasswordContainer>
              <LabelForgetPassword>Esqueceu a senha ?</LabelForgetPassword>
            </LabelForgetPasswordContainer>
          </ButtonFooterContainer>

          <CopyRightContainer>copyRight@2021</CopyRightContainer>
        </Content>
      </Card>
    </Container>
  );
};
