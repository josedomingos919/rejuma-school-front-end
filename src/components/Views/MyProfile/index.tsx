import { Header } from "../../Header";
import { Container } from "./styles";
import { breadcrumbs } from "./util";

export const ViewsMyProfile = () => {
  return (
    <Container>
      <Header breadcrumb={breadcrumbs} />
    </Container>
  );
};
