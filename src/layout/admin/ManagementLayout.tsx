import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { AiFillHome, AiFillShopping } from "react-icons/ai";
const { Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    label: <Link to="/">Home Page</Link>,
    key: "homepage",
    icon: <AiFillHome />,
  },
  {
    label: <Link to="/admin/products">All Products</Link>,
    key: "alipay",
    icon: <AiFillShopping />,
  },
];

const ManagementLayout: React.FC = () => {
  return (
    <Layout style={{ padding: "0", margin: "0" }}>
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100vh",
            borderRight: 0,
            background: "#9058cc",
            color: "#fff",
          }}
          items={items}
        />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ManagementLayout;
