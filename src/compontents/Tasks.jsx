import React, { useEffect, useState } from "react";
import { List, Collapse, Modal, Divider } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import EditTask from "./EditTask";
const { Panel } = Collapse;
const { confirm } = Modal;

export default function Tasks(props) {
  const [formIndividual, setFormIndividual] = useState();

  useEffect(() => {
    setFormIndividual(props.form);
  }, [props]);

  const editTask = (index) => {
    console.log(formIndividual, "formIndividual");
    confirm({
      title: <Divider orientation="left">Edita la tarea pendiente</Divider>,
      icon: <AiOutlineEdit />,
      content: <EditTask dataTask={formIndividual[index]} />,
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <div>
      <List
        size="large"
        header={<div>Pending tasks</div>}
        dataSource={formIndividual}
        itemLayout="horizontal"
        style={{ textAlign: "initial", wordWrap: "break-word" }}
        renderItem={(item, index) => (
          <Collapse accordion ghost collapsible="header">
            <Panel
              header={item.title}
              extra={
                <a onClick={() => editTask(index)}>
                  <AiOutlineEdit />
                </a>
              }
            >
              <List.Item>{item.description}</List.Item>
            </Panel>
          </Collapse>
        )}
      />
    </div>
  );
}
