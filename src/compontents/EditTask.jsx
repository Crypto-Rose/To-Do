import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

const EditTask = (props) => {
  useEffect(() => {
    console.log("props", props);
  });
  return (
    <Form className="login-form">
      <Form.Item
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Save task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditTask;
