import { observer } from "mobx-react-lite";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

const Alltodos = ({ store }) => {
  const [checked, setChecked] = useState(false);

  const handleDlt = (i) => {
    store.deleteTodo(i);
  };
  return (
    <>
      {store.value.map((ele, index) => (
        <div
          className="border rounded-lg py-5 px-2 mt-4 flex relative"
          style={{ width: "60vw" }}
          key={index}
        >
          <input
            type="checkbox"
            value={checked}
            onChange={() => setChecked(!checked)}
          />
          <div className="ml-4">
            <h1 className={`text-sm ${checked ? "line-through" : ""}`}>
              {ele.task}
            </h1>
            <p className="text-xs text-gray-500">{ele.description}</p>
          </div>
          <DeleteOutlined
            className="absolute right-5 top-7 text-red-500"
            onClick={() => handleDlt(index)}
          />
        </div>
      ))}
    </>
  );
};

export default observer(Alltodos);
