import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const EditTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(props.dataTask.title);
    setTitle(props.dataTask.description);
  }, [props]);

  const handleSubmitEdit = () => {};

  return (
    <form onSubmit={handleSubmitEdit}>
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
    </form>
  );
};

export default EditTask;
