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

const iconStyle = {
  color: colors.darkIcon,
};

export const menuItems: Array<MenuItemsProps> = [
  {
    title: "Dashboard",
    icon: <HomeIcon style={iconStyle} fontSize="small" />,
  },
  {
    title: "Matricula",
    icon: <FileOpenIcon style={iconStyle} fontSize="small" />,
  },
  {
    title: "Meu Perfil",
    icon: <AccountBoxIcon style={iconStyle} fontSize="small" />,
  },
  {
    title: "Entidades",
    icon: <PeopleIcon style={iconStyle} fontSize="small" />,
    children: [
      {
        title: "Alunos",
        icon: <AssignmentIndIcon style={iconStyle} fontSize="small" />,
      },
      {
        title: "Professores",
        icon: <SchoolIcon style={iconStyle} fontSize="small" />,
      },
      {
        title: "Outros Funcionários",
        icon: <PeopleAltIcon style={iconStyle} fontSize="small" />,
      },
    ],
  },
  {
    title: "Tabelas",
    icon: <CallToActionIcon style={iconStyle} fontSize="small" />,
    children: [
      {
        title: "Disciplinas",
        icon: <MenuBookIcon style={iconStyle} fontSize="small" />,
      },
      {
        title: "Classes",
        icon: <AlignVerticalBottomIcon style={iconStyle} fontSize="small" />,
      },
      {
        title: "Turmas",
        icon: <CoPresentIcon style={iconStyle} fontSize="small" />,
      },
    ],
  },
  {
    title: "Ano Lectivo",
    icon: <CalendarMonthIcon style={iconStyle} fontSize="small" />,
  },
  {
    title: "Sair",
    icon: <LogoutIcon style={iconStyle} fontSize="small" />,
    onClick: () => {
      window.location.href = "/";
    },
  },
];
