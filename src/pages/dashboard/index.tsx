import { LeftMenu } from "../../components/LeftMenu";
import { MainLayout } from "../../components/MainLayout";
import { Views } from "../../components/Views";

export const Dashboard = () => {
  return <MainLayout left={<LeftMenu />} right={<Views />} />;
};
