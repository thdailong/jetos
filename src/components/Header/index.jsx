import { Avatar, Badge, Input, Layout } from "antd";
import React from "react";
import classes from "./styles/index.module.css";
import clsx from "clsx";
import SearchIcon from "components/Icons/SearchIcon";
import NotificationsIcon from "components/Icons/NotificationsIcon";
import photoAvatar from "assets/img/Photo.png";
import { useLocation } from "react-router-dom";
import { NAVIGATES } from "lib/constants";

const Header = () => {
  const location = useLocation();
  const headerText = NAVIGATES.find((item) => item.path === location.pathname);
  return (
    <Layout.Header className={clsx(classes.layout, classes.container)}>
      <div className={classes["text-header"]}>{headerText?.label}</div>
      <div className={classes.container}>
        <Input placeholder="Search..." suffix={<SearchIcon />} />
        <Badge dot className={classes.icon} offset={[-6, 5]}>
          <NotificationsIcon />
        </Badge>
        <Avatar
          shape="square"
          size={35}
          src={photoAvatar}
          className={classes.avatar}
        />
      </div>
    </Layout.Header>
  );
};

export default Header;
