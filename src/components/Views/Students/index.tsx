import { Header } from "../../Header";
import { Container } from "./styles";
import { breadcrumbs } from "./util";

export const ViewsStudents = () => {
  return (
    <Container>
      <Header breadcrumb={breadcrumbs} />
    </Container>
  );
};
