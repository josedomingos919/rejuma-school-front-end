import { colors } from "../../../utils/color";
import { Header } from "../../Header";
import { StatusCard } from "../../StatusCard";
import { CardStatusContainer, Container } from "./styles";
import { breadcrumbs } from "./util";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PaymentsIcon from "@mui/icons-material/Payments";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export const ViewsDashboard = () => {
  return (
    <Container>
      <Header breadcrumb={breadcrumbs} />
      <CardStatusContainer>
        <StatusCard
          marginRigth={25}
          color="#337AB7"
          title="Professores"
          total={200}
          icon={<SchoolIcon fontSize="large" style={{ color: colors.white }} />}
        />

        <StatusCard
          marginRigth={25}
          color="#5CB85C"
          title="Disciplinas"
          total={250}
          icon={
            <MenuBookIcon fontSize="large" style={{ color: colors.white }} />
          }
        />

        <StatusCard
          marginRigth={25}
          color="#D9534F"
          title="Pagamentos"
          total={80}
          icon={
            <PaymentsIcon fontSize="large" style={{ color: colors.white }} />
          }
        />

        <StatusCard
          marginRigth={25}
          color="#F0AD4E"
          title="Cursos"
          total={77}
          icon={
            <CardMembershipIcon
              fontSize="large"
              style={{ color: colors.white }}
            />
          }
        />

        <StatusCard
          color="#8E224B"
          title="Matíriculas"
          total={20}
          icon={
            <ReceiptLongIcon fontSize="large" style={{ color: colors.white }} />
          }
        />
      </CardStatusContainer>
    </Container>
  );
};
