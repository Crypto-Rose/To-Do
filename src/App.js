import "./App.css";
import { Row, Col, notification } from "antd";
import { useEffect, useState } from "react";
import Tasks from "./compontents/Tasks";
import Task from "./compontents/Task";

function App() {
  const [form, setForm] = useState();

  useEffect(() => {
    const verified = verifiedDataExistInLocal();

    if (verified !== undefined) {
      setForm(JSON.parse(verified));
    }
  }, []);

  const verifiedDataExistInLocal = () => {
    const dataInLocal = localStorage.getItem("formData");
    if (dataInLocal === null) {
      return;
    }
    return dataInLocal;
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Super #Amiguis",
      description: `The process is ${type}`,
    });
  };

  const handleSubmitSave = (values) => {
    let localParse = [];
    const verified = verifiedDataExistInLocal();

    if (verified !== undefined) {
      localParse = JSON.parse(verified);
      localParse.unshift(values);
    } else {
      localParse.push(values);
    }

    setForm(localParse);
    localStorage.setItem("formData", JSON.stringify(localParse));
  };

  return (
    <div className="App">
      <Row justify="space-around">
        <Col span={10}>
          <Tasks handleSubmitSave={handleSubmitSave} />
        </Col>
        <Col span={10}>
          <Task form={form} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
