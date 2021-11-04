import React from "react";
import { success } from "../images/success.jpg";

function TaskSuccess() {
  return (
    <Modal visible={props.visible} onOk={handleOk} onCancel={handleCancel}>
      <img src={success} alt="success" />
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
}

export default TaskSuccess;
