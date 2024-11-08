import AnalyticsIcon from "components/Icons/AnaLyticsIcon";
import DashboardIcon from "components/Icons/DashboardIcon";
import SettingsIcon from "components/Icons/SettingsIcon";
import SmsIcon from "components/Icons/SmsIcon";
import UserIcon from "components/Icons/UserIcon";
import WalletIcon from "components/Icons/WalletIcon";
import WalletMinusIcon from "components/Icons/WalletMinusIcon";

export const NAVIGATES = [
  {
    label: "Dashboard",
    Icon: DashboardIcon,
    path: "/",
  },
  {
    label: "Transactions",
    Icon: WalletIcon,
    path: "/transactions",
  },
  {
    label: "Wallet",
    Icon: WalletMinusIcon,
    path: "/wallet",
  },
  {
    label: "Analytics",
    Icon: AnalyticsIcon,
    path: "/analytics",
  },
  {
    label: "Personal",
    Icon: UserIcon,
    path: "/users",
  },
  {
    label: "Message",
    Icon: SmsIcon,
    path: "/message",
  },
  {
    label: "Setting",
    Icon: SettingsIcon,
    path: "/setting",
  },
];
