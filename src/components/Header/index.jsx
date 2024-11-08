import { Avatar, Badge, Button, Drawer, Input, Layout } from "antd";
import React, { useState } from "react";
import classes from "./styles/index.module.css";
import clsx from "clsx";
import SearchIcon from "components/Icons/SearchIcon";
import NotificationsIcon from "components/Icons/NotificationsIcon";
import photoAvatar from "assets/img/Photo.png";
import { useLocation } from "react-router-dom";
import { NAVIGATES } from "lib/constants";
import Sidebar from "components/Sidebar";
import Logo from "assets/img/Logo.svg";
import ThreeLineIcon from "components/Icons/ThreeLineIcon";

const Header = () => {
  const location = useLocation();
  const headerText = NAVIGATES.find((item) => item.path === location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onHandleOpen = () => {
    setDrawerOpen(true);
  };

  const onHandleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Layout.Header className={clsx(classes.layout, classes.container)}>
      <Button
        onClick={onHandleOpen}
        icon={<ThreeLineIcon />}
        className={classes["drawer-btn"]}
        type="text"
      ></Button>
      <Drawer
        placement="left"
        title={
          <img
            src={Logo}
            alt="Logo"
            width={160}
            height={"auto"}
            className={classes.img}
          />
        }
        classNames={{
          content: classes.drawer,
        }}
        onClose={onHandleClose}
        open={drawerOpen}
        width={220}
        closeIcon={null}
      >
        <Sidebar showLogo={false} onClickItem={onHandleClose} />
      </Drawer>
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
