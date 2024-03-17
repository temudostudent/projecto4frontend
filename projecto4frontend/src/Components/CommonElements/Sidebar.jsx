import React , { useState, useEffect }  from 'react'
import { Button, Layout } from 'antd'
import FormTask from '../Forms/FormTask'
import { useActionsStore } from '../../Stores/ActionStore'
import { IoClose } from "react-icons/io5";
import { useTaskStore } from '../../Stores/TaskStore'
import './Sidebar.css'

const { Sider } = Layout;

function Sidebar({ formTitle, inputs, formSubmitTitle, onSubmit}) {

    const updateShowSidebar = useActionsStore((state) => state.updateShowSidebar);
    const showSidebar = useActionsStore((state) => state.showSidebar);
    const { selectedTask } = useTaskStore();
    const [initialValues, setInitialValues] = useState(selectedTask);


    useEffect(() => {
        setInitialValues(selectedTask);
    }, [selectedTask]);

      
    return (
        <Layout className='sidebar-container'>
            <Sider 
                width={300}
                style={{ height: '80vh', backgroundColor: '#f6f5f7'}}
                collapsed={showSidebar}
                collapsedWidth={0}
                collapsible
                trigger={null}
                className='sidebar'>
                <Button onClick={()=>updateShowSidebar(!showSidebar)} className="close-button">
                    <IoClose />
                </Button>
                <FormTask 
                    title={formTitle} 
                    inputs={inputs} 
                    buttonText={formSubmitTitle}
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                />
            </Sider>
        </Layout>
    );
}

export default Sidebar;