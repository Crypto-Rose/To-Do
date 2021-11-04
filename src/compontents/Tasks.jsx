import React, { useEffect, useState } from "react";
import { List, Collapse, Modal, message } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import success from "../images/success.jpg";
import EditTask from "./EditTask";
const { Panel } = Collapse;

export default function Tasks(props) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [formGeneral, setFormGeneral] = useState([]);
  const [indexTask, setIndexTask] = useState();

  useEffect(() => {
    setFormGeneral(props.form);
  }, [props]);

  const changeStatusModal = (status) => {
    setVisibleModal(status);
  };

  const selectTask = (index) => {
    changeStatusModal(true);
    setIndexTask(index);
  };

  const selectTaskSuccess = (index) => {
    Modal.success({
      title: "Congratulations!!!",
      content: (
        <div>
          <img src={success} alt="success" width="100%" />
        </div>
      ),
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const editTask = (title, description) => {
    formGeneral[indexTask].title = title;
    formGeneral[indexTask].description = description;
    setFormGeneral(formGeneral);
    setVisibleModal(false);
    localStorage.setItem("formData", JSON.stringify(formGeneral));
    message.success("The task was edited!");
  };

  return (
    <div>
      <List
        size="large"
        header={<div>Pending tasks</div>}
        dataSource={formGeneral}
        itemLayout="horizontal"
        style={{ textAlign: "initial", wordWrap: "break-word" }}
        renderItem={(item, index) => (
          <Collapse accordion ghost collapsible="header">
            <Panel
              header={item.title}
              extra={
                <>
                  <i
                    style={{
                      marginRight: "8px",
                    }}
                    onClick={() => selectTask(index)}
                  >
                    <FiXCircle
                      style={{
                        color: "red",
                        fontSize: "15px",
                      }}
                    />
                  </i>
                  <i
                    style={{
                      marginRight: "8px",
                    }}
                    onClick={() => selectTaskSuccess(index)}
                  >
                    <FiCheckCircle
                      style={{
                        color: "green",
                        fontSize: "15px",
                      }}
                    />
                  </i>
                  <i onClick={() => selectTaskSuccess(index)}>
                    <AiOutlineEdit />
                  </i>
                </>
              }
            >
              <List.Item>{item.description}</List.Item>
            </Panel>
          </Collapse>
        )}
      />
      <EditTask
        visible={visibleModal}
        tasks={formGeneral}
        id={indexTask}
        changeStatusModal={changeStatusModal}
        editTask={editTask}
      />
    </div>
  );
}
