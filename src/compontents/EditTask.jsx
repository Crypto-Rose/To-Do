import React, { useEffect, useState } from "react";
import { Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const EditTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const { tasks, id } = props;
    if (id !== undefined && tasks !== undefined) {
      setTitle(tasks[id].title);
      setDescription(tasks[id].description);
    }
  }, [props]);

  const handleOk = () => {
    props.editTask(title, description);
  };

  const handleCancel = () => {
    props.changeStatusModal(false);
  };

  return (
    <Modal visible={props.visible} onOk={handleOk} onCancel={handleCancel}>
      <label>Title</label>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        prefix={<UserOutlined />}
      />
      <label>Description</label>
      <TextArea
        value={description}
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Modal>
  );
};

export default EditTask;
