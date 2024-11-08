import CardIcon from "components/Icons/CardIcon";
import DollarCircleIcon from "components/Icons/DollarCircle";
import MoneyWallet from "components/Icons/MoneyWallet";
import Wallet3Icon from "components/Icons/Wallet3Icon";
import React from "react";
import classes from "./styles/index.module.css";
import { Col, Row } from "antd";
import DashboardCard from "components/Card/DashboardCard";

const ITEMS = [
  {
    label: "Balance",
    Icon: Wallet3Icon,
  },
  {
    label: "Income",
    Icon: MoneyWallet,
  },
  {
    label: "Expenses",
    Icon: CardIcon,
  },
  {
    label: "Savings",
    Icon: DollarCircleIcon,
  },
];

const DashboardPage = () => {
  return (
    <div className={classes.container}>
      <Row gutter={[16, 16]}>
        {ITEMS.map((item, index) => (
          <Col
            lg={{
              span: 6,
            }}
            sm={{
              span: 12,
            }}
            key={index}
          >
            <DashboardCard
              label={item.label}
              Icon={item.Icon}
              value={"$41,210"}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardPage;
