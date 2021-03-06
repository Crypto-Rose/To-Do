import "./App.css";
import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import TaskOnly from "./compontents/TaskOnly";
import Tasks from "./compontents/Tasks";

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

  const handleSubmitSave = (values) => {
    values.status = "new";
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
          <TaskOnly handleSubmitSave={handleSubmitSave} />
        </Col>
        <Col span={10}>
          <Tasks form={form} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
