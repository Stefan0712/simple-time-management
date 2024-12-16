import { Link } from 'react-router-dom';
import './styles/Dashboard.css'
import {tasks} from '../../FakeTasks';
import Task from '../common/Task/Task';
import Note from '../common/Note/Note';
import {notes} from '../../FakeNotes';
import { useState } from 'react';
import PropertiesMenu from '../common/PropertiesMenu/PropertiesMenu';


const Dashboard = () => {

    const [propertyMenu, setPropertyMenu] = useState(null);

    const closeProperties = () =>{
        setPropertyMenu(null);
    }
    const openProperties = (type, properties) =>{
        console.log(type, properties)
        console.log(propertyMenu)
        setPropertyMenu(<PropertiesMenu properties={properties} type={type} closeProperties={closeProperties} />);
    }
    const mockShortTasks = (
        <div className="tasks-container">
            <div className='short-task'>
                <p className='title'>Take out the trash</p>    
                <input type='checkbox'></input>
            </div>             
            <div className='short-task'>
                <p className='title'>Respond to mail</p>    
                <input type='checkbox'></input>
            </div>             
            <div className='short-task'>
                <p className='title'>Merge feature</p>    
                <input type='checkbox'></input>
            </div>             
            <div className='short-task'>
                <p className='title'>Check feedback</p>    
                <input type='checkbox'></input>
            </div>             
        </div>
    )

    return ( 
        <div className="dashboard-page page">
            <h1>Dashboard</h1>
            <div className="dashboard-container">
                
                <div className="dashboard-quick-tasks">
                    <div className="small-container">
                        <div className='container-header'><p>Today</p></div>
                        {mockShortTasks}
                    </div>
                    <div className="small-container">
                        <div className='container-header'><p>This Week</p></div>
                        {mockShortTasks}
                    </div>
                    <div className="small-container">
                        <div className='container-header'><p>Pinned</p></div>
                        {mockShortTasks}
                    </div>
                    <div className="small-container">
                        <div className='container-header'><p>Due Tasks</p></div>
                        {mockShortTasks}
                    </div>
                </div>
                <div className="half-width-container">
                    <div className='container-header'><p>Recent Activity</p></div>
                    <div className="tasks-container">

                    </div>
                </div>
                <div className="half-width-container">
                    <div className='container-header'><p>Projects</p></div>
                    <div className="tasks-container">

                    </div>
                </div>
                <div className="full-width-container">
                    <div className="container-header">
                        <p>Recent Tasks</p>
                        <Link to={'/tasks'} className='header-button'>All Tasks</Link>
                    </div>
                    <div className="tasks-container">
                        {tasks.map((task)=>(
                            <Task taskData={task} key={task.id} onClick={()=>openProperties('task', task)}   />
                        ))}
                    </div>
                </div>
                <div className="full-width-container notes">
                    <div className="container-header">
                        <p>Recent Notes</p>
                        <Link to={'/notes'} className='header-button'>All Notes</Link>
                    </div>
                    <div className="notes-container">
                        {notes?.map((note, index)=>(
                            <Note noteData={note} key={'note'+ index} onClick={()=>openProperties('note', note)}/>
                        ))}
                    </div>
                </div>
            </div>
        
        {/*Menus and modals that are not initially rendered or shown */}

        {propertyMenu ? propertyMenu : ''}
        </div>
     );
}
 
export default Dashboard;