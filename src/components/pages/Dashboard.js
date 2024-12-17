import { Link } from 'react-router-dom';
import './styles/Dashboard.css'
import {tasks} from '../../FakeTasks';
import Task from '../common/Task/Task';
import Note from '../common/Note/Note';
import {notes} from '../../FakeNotes';
import { useAppContext } from '../../AppContext';


const Dashboard = () => {

    const { openProperties, closeProperties } = useAppContext();
    
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
                    <div className="activity-container">
                        <p className='activity'><b>Added new task</b> in <b>Project 1</b> at <b>12:00</b> on <b>02.05.2024</b></p>
                        <p className='activity'><b>Added new task</b> in <b>Project 1</b> at <b>12:00</b> on <b>02.05.2024</b></p>
                        <p className='activity'><b>Added new task</b> in <b>Project 1</b> at <b>12:00</b> on <b>02.05.2024</b></p>
                        <p className='activity'><b>Added new task</b> in <b>Project 1</b> at <b>12:00</b> on <b>02.05.2024</b></p>
                    </div>
                </div>
                <div className="half-width-container">
                    <div className='container-header'><p>Projects</p></div>
                    <div className="projects-container">
                        <div className='project'>
                            <h4>Fitness App</h4>
                            <p>38 tasks</p>
                            <p>49% completion</p>
                        </div>
                        <div className='project'>
                            <h4>Time management app</h4>
                            <p>38 tasks</p>
                            <p>49% completion</p>
                        </div>
                        <div className='project'>
                            <h4>Portfolio</h4>
                            <p>38 tasks</p>
                            <p>49% completion</p>
                        </div>
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
        

        
        </div>
     );
}
 
export default Dashboard;