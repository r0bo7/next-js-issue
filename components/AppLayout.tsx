import { Layout, Menu } from "antd";
import React from "react";
import Link from "next/link";

export default function AppLayout({
  children,
  selectedKey,
  openKey,
}: {
  selectedKey: string;
  openKey?: string;
  children: React.ReactNode;
}) {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <h1 style={{ color: "white" }}>Admin</h1>
        </div>
      </Header>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light">
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[selectedKey]}
            defaultOpenKeys={[openKey ?? ""]}
          >
            <SubMenu key="establishment" title="Establishment">
              <Menu.Item key="operation">
                <Link href="/">Operation</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{ margin: "0 16px", padding: 24, minHeight: 360 }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
