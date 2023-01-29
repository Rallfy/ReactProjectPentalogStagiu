import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const Root = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const usenavigate = useNavigate();

  const [displayusername, displayusernameupdate] = useState("");
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    } else {
      displayusernameupdate(username);
    }
    // }.then((res) => {
    //     return res.json();
    //   })
    //   .then((resp) => {
    //     listupdate(resp);
    //   })
    //   .catch((err) => {
    //     console.log(err.messsage);
    //   });
  }, []);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Profile",
            },
          ]}
        />
        <div>
          <span style={{ color: "white" }}>
            Welcome <b style={{ color: "white" }}>{displayusername}</b>
          </span>
          <br />
          <Link style={{ float: "left", color: "white" }} to={"/Login"}>
            Logout
          </Link>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "308.5px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default Root;
