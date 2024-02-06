import { makeObservable, observable, computed, action, autorun} from "mobx"

class Doubler {
    value = [{task:"finish the react advance" , description:"today i have to finish the react advance"}];

    

    constructor() {
        makeObservable(this, {
            value: observable,
            addTodo: action,
            
        })
        // autorun(()=>console.log(this.value))
    }

   

    addTodo(todo) {
        return this.value.unshift(todo)
    }
   

   
}

export default Doubler