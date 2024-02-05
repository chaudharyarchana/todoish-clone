import {PlusOutlined} from '@ant-design/icons'


const Addbutton = ({toggleAdd}) =>{
    return(
        <>
        <div className='mt-5 flex cursor-pointer' onClick={toggleAdd}>
          <PlusOutlined className='text-pink-600 ' />
          <p className='text-gray-500 text-sm ml-2 hover:text-pink-600 '>Add task</p>
        </div>
        </>
    )
}

export default Addbutton