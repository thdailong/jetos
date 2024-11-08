import AnalyticsIcon from "components/Icons/AnaLyticsIcon";
import DashboardIcon from "components/Icons/DashboardIcon";
import SettingsIcon from "components/Icons/SettingsIcon";
import SmsIcon from "components/Icons/SmsIcon";
import UserIcon from "components/Icons/UserIcon";
import WalletIcon from "components/Icons/WalletIcon";
import WalletMinusIcon from "components/Icons/WalletMinusIcon";
import Analytics from "page/Analytics";
import DashboardPage from "page/Dashboard";
import MessagePage from "page/Message";
import Personal from "page/Personal";
import SettingPage from "page/Setting";
import Transactions from "page/Transactions";
import Wallet from "page/Wallet";
import { Component } from "react";

export const NAVIGATES = [
  {
    label: "Dashboard",
    Icon: DashboardIcon,
    path: "/",
    Component: DashboardPage,
  },
  {
    label: "Transactions",
    Icon: WalletIcon,
    path: "/transactions",
    Component: Transactions,
  },
  {
    label: "Wallet",
    Icon: WalletMinusIcon,
    path: "/wallet",
    Component: Wallet,
  },
  {
    label: "Analytics",
    Icon: AnalyticsIcon,
    path: "/analytics",
    Component: Analytics,
  },
  {
    label: "Personal",
    Icon: UserIcon,
    path: "/personal",
    Component: Personal,
  },
  {
    label: "Message",
    Icon: SmsIcon,
    path: "/message",
    Component: MessagePage,
  },
  {
    label: "Setting",
    Icon: SettingsIcon,
    path: "/setting",
    Component: SettingPage,
  },
];
