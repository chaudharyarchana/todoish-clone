import { Button } from "antd";
import { useState } from "react";

const Addtodo = ({ toggleAdd, store }) => {
  const [input, setInput] = useState({
    task: "",
    description: "",
  });

  const handleClick = () => {
    store.addTodo({ ...input });
    setInput({ task: "", description: "" });
  };

  return (
    <>
      <div className="mt-5 ">
        <form>
          <input
            placeholder="Task Name"
            className="block  focus:border-none outline-none p-2"
            style={{ width: "60vw" }}
            value={input.task}
            onChange={(e) => setInput({ ...input, task: e.target.value })}
          />
          <textarea
            placeholder="Description"
            className="text-xs block  focus:border-none outline-none  px-2 "
            style={{ width: "60vw" }}
            value={input.description}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          />
          <Button className="bg-white text-pink-600" onClick={handleClick}>
            Add task
          </Button>
          <Button className="bg-white text-red-500 ml-4" onClick={toggleAdd}>
            cancel
          </Button>
        </form>
      </div>
    </>
  );
};

export default Addtodo;
