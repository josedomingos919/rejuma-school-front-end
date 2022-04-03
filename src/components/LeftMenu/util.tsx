import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import SchoolIcon from "@mui/icons-material/School";
import { colors } from "../../utils/color";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { MenuItemsProps } from "./types";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { ViewsDashboard } from "../Views/Dashboard";
import { ViewsRegistration } from "../Views/Registration";
import { ViewsMyProfile } from "../Views/MyProfile";
import { ViewsStudents } from "../Views/Students";

const iconStyle = {
  color: colors.darkIcon,
};

export const menuItems: Array<MenuItemsProps> = [
  {
    title: "Dashboard",
    pathName: "/dashboard",
    icon: <HomeIcon style={iconStyle} fontSize="small" />,
    view: <ViewsDashboard />,
  },
  {
    title: "Matricula",
    pathName: "/dashboard/matricula",
    icon: <FileOpenIcon style={iconStyle} fontSize="small" />,
    view: <ViewsRegistration />,
  },
  {
    title: "Meu Perfil",
    icon: <AccountBoxIcon style={iconStyle} fontSize="small" />,
    pathName: "/dashboard/meu-perfil",
    view: <ViewsMyProfile />,
  },
  {
    title: "Entidades",
    icon: <PeopleIcon style={iconStyle} fontSize="small" />,
    pathName: "/dashboard/entidades",
    children: [
      {
        title: "Alunos",
        icon: <AssignmentIndIcon style={iconStyle} fontSize="small" />,
        pathName: "/dashboard/entidades/alunos",
        view: <ViewsStudents />,
      },
      {
        title: "Professores",
        icon: <SchoolIcon style={iconStyle} fontSize="small" />,
        pathName: "/dashboard/entidades/professores",
      },
      {
        title: "Outros Funcionários",
        icon: <PeopleAltIcon style={iconStyle} fontSize="small" />,
        pathName: "/dashboard/entidades/outros-funcionarios",
      },
    ],
  },
  {
    title: "Tabelas",
    icon: <CallToActionIcon style={iconStyle} fontSize="small" />,
    pathName: "/dashboard/tabelas",
    children: [
      {
        title: "Disciplinas",
        icon: <MenuBookIcon style={iconStyle} fontSize="small" />,
        pathName: "/dashboard/tabelas/disciplinas",
      },
      {
        title: "Classes",
        icon: <AlignVerticalBottomIcon style={iconStyle} fontSize="small" />,
        pathName: "/dashboard/tabelas/classes",
      },
      {
        title: "Turmas",
        icon: <CoPresentIcon style={iconStyle} fontSize="small" />,
        pathName: "/dashboard/tabelas/turmas",
      },
    ],
  },
  {
    title: "Ano Lectivo",
    icon: <CalendarMonthIcon style={iconStyle} fontSize="small" />,
    pathName: "/dashboard/ano-lectivos",
  },
  {
    title: "Sair",
    icon: <LogoutIcon style={iconStyle} fontSize="small" />,
    onClick: () => {
      window.location.href = "/";
    },
  },
];
