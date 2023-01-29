import { Button, Form, Input, Layout } from "antd";
import React, { useState} from "react";
import { toast } from "react-toastify";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();


  const validate = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      console.log("usergol");
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch(" http://localhost:3001/users?userName=" + userName)
        .then((res) => {
          return res.json();
        })
        .then(([resp]) => {
          //console.log(resp)
          if (resp.password === password) {
            toast.success("Success");
            sessionStorage.setItem("username", userName);
            usenavigate("/Home");
          } else {
            toast.error("Please Enter valid credentials");
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  return (
    <Layout className="Layout-Login">
      <Layout.Content className="Layont-Content-Login">
        <Form onSubmitCapture={ProceedLogin}>
          <Form.Item
            label="Username"
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
            ></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            ></Input.Password>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="Button-login" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Layout.Content>
    </Layout>
  );
}
