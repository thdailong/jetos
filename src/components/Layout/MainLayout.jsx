import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";
import Sidebar from "components/Sidebar";
import Header from "components/Header";

const MainLayout = () => {
  return (
    <Layout className={classes.layout}>
      <Layout.Sider width={220}>
        <Sidebar />
      </Layout.Sider>
      <Layout>
        <Header />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
