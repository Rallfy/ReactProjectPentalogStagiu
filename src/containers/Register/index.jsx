import { Form, Layout, Checkbox, Input, Button } from "antd";
import React, { useState } from "react";
import {toast } from "react-toastify";
import {useNavigate } from "react-router-dom";
import "./index.css";


export default function Register() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";

    if (userName === null || userName === "") {
      isproceed = false;
      errormessage += "UserName "; 
    }

    if (password === null || password === "") {
      isproceed = false;
      errormessage += "Password ";
    }
    if (!isproceed) {
      toast.error(errormessage);
    }

    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { userName, password };
    if (isValidate()) {
      const API_URL = "http://localhost:3001";
      console.log(regobj);
      fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          //console.log("Register Succesfull");            
            toast.success("Registered successfully.");
            navigate("/Login")
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
          //console.log("Error!");
        });
    }
  };
  

  return (  
    <Layout>
      <h1>Welcome to register page!</h1>
      <Form onSubmitCapture={handlesubmit}>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your Username",
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
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          ></Input.Password>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="Button-register" type="primary" htmlType="submit">
            Register
          </Button>
          {/* <Link to={'/Login'}>Done</Link> */}
        </Form.Item>
      </Form>
    </Layout>
  );
}
