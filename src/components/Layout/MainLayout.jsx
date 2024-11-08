import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <Layout className={classes.layout}>
      <Layout.Sider>
        <div>sidebar</div>
      </Layout.Sider>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
