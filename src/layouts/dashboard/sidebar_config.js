import {
  PeopleOutline,
  PersonAddAlt,
  Home,
  Flag,
  CurrencyExchange,
} from "@mui/icons-material";
export const sidebar_config = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Home />,
  },
  {
    title: "Recent activity",
    path: "/activity",
    icon: <Flag />,
  },
  {
    title: "All expenses",
    path: "/expenses",
    icon: <CurrencyExchange />,
  },
  {
    title: "Friends",
    path: "/friends",
    icon: <PeopleOutline />,
  },
  {
    title: "Add Friend",
    path: "/add-friend",
    icon: <PersonAddAlt />,
  },
];
