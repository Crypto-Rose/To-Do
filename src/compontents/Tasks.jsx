import React from "react";
import { Form, Input, Button } from "antd";

function Tasks(props) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    props.handleSubmitSave(values);
    form.resetFields();
  };
  return (
    <Form form={form} className="login-form" onFinish={onFinish}>
      <h3>Write your task</h3>

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
}

export default Tasks;
