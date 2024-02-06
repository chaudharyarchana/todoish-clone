import { observer } from "mobx-react-lite"

const Alltodos = ({store}) =>{
    
    return (
        <>
        {store.value.map((ele)=>(
            <div className="border rounded-lg py-5 px-2 mt-4 flex" style={{width:"60vw"}}>
            <input type="radio" className="w-5"/>
            <div className="ml-4">
            <h1 className="text-sm ">{ele.task}</h1>
            <p className="text-xs text-gray-500">{ele.description}</p>

            </div>
        </div>
        ))}
        </>
        
    )
}

export default observer(Alltodos)