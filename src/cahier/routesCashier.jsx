import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  ClipboardDocumentListIcon,
  BuildingStorefrontIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

import { Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

import { HomeCashier, Orders, Restaurant } from "@/pages/dashboardCaissier";
import ProfileCashier from "@/pages/dashboardCaissier/ProfileCashier";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routesCahier = [
  {
    layout: "dashboard-cashier",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <HomeCashier />,
      },
      {
        icon: <ClipboardDocumentListIcon {...icon} />,
        name: "Gestion des commandes",
        path: "/commande",
        element: <Orders />,
      },
      {
        icon: <BuildingStorefrontIcon {...icon} />,
        name: "Gestion du restaurant",
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <ProfileCashier />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routesCahier;
