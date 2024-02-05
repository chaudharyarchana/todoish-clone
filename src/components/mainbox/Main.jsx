import { useState } from "react"
import Addbutton from "./Addbutton"
import Addtodo from "./Addtodo"

const Main =()=>{
    const[addbtn,setAdd] = useState(true)

    const toggleAdd = () =>{
        setAdd(!addbtn)
    }
    return(
        <>
        <div className="mt-14 ml-32">
            <h1 className="font-bold text-3xl">Today</h1>
           
            {addbtn ?   <Addbutton toggleAdd={toggleAdd}/> : <Addtodo toggleAdd={toggleAdd} />   }
        </div>
        </>
    )
}
export default Main