import { Header } from "../../Header";
import { Container } from "./styles";
import { breadcrumbs } from "./util";

export const ViewsRegistration = () => {
  return (
    <Container>
      <Header breadcrumb={breadcrumbs} />
    </Container>
  );
};
