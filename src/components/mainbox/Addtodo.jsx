import { Button } from "antd"
const Addtodo =({toggleAdd}) =>{
    return(
        <>
        <div className="mt-5 ">
        <form>
            <input placeholder="Task Name" className="block  focus:border-none outline-none p-2" style={{width:"60vw"}}/>
            <textarea placeholder="Description" className="text-xs block  focus:border-none outline-none  px-2 " style={{width:"60vw"}}/>
            <Button  className="bg-white text-pink-600" onClick={toggleAdd}>Add task</Button>
            <Button  className="bg-white text-red-500 ml-4" onClick={toggleAdd}>cancel</Button>
        </form>
        </div>
        </>
    )
}

export default Addtodo