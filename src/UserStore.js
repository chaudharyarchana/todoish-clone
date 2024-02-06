import { makeObservable, observable, action } from "mobx";

class Doubler {
  value = [
    {
      task: "finish the react advance",
      description: "today i have to finish the react advance",
    },
  ];

  constructor() {
    makeObservable(this, {
      value: observable,
      addTodo: action,
      deleteTodo: action,
    });
    // autorun(()=>console.log(this.value))
  }

  addTodo(todo) {
    return this.value.unshift(todo);
  }
  deleteTodo(i) {
    let arr = this.value.filter((_, index) => index !== i);

    return (this.value = arr);
  }
}

export default Doubler;
