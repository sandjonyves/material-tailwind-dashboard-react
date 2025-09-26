
import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCashierCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "commande en attente",
    value: "10",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "commande valider",
    value: "40",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "commande annuler",
    value: "00",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Total des ventes",
    value: "103430 xaf",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCashierCardsData;