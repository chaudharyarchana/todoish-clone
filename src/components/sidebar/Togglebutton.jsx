import { Button} from 'antd';
import {UnorderedListOutlined} from '@ant-design/icons'

const Togglebutton = ({
    toggleCollapsed,
    styles
}) =>{
    return(
        <Button
        type="primary"
        onClick={toggleCollapsed}
        className={ `bg-pink-600 w-5 ${styles}`}
        shape='circle'
        icon={<UnorderedListOutlined />}
      > 
      </Button>
    )
}

export default Togglebutton