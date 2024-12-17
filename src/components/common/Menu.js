import { Link } from "react-router-dom";
import Icons from "../../IconLibrary";
import { useState } from "react";
import NewTask from "./NewTask/NewTask";

const Menu = () => {

    const [selectedPage, setSelectedPage] = useState('dashboard');
    const [showNewTask, setShowNewTask] = useState(false);
    const [showNewNote, setShowNewNote] = useState(false);
    const [showNewProject, setShowNewProject] = useState(false);


    return ( 
        <div className="menu">
            <h2>Task App</h2>
            <div className="menu-links">
                <div className="menu-line"></div>
                <Link 
                    to={'/'} 
                    className={`menu-link ${selectedPage === 'dashboard' ? 'selected-menu-button' : ''}`} 
                    onClick={() => setSelectedPage('dashboard')}
                >
                    <img src={Icons.DashboardLight} className="menu-icon" alt="" />
                    <p>Dashboard</p>
                </Link>
                <Link 
                    to={'/planner'} 
                    className={`menu-link ${selectedPage === 'planner' ? 'selected-menu-button' : ''}`} 
                    onClick={() => setSelectedPage('planner')}
                >
                    <img src={Icons.CalendarLight} className="menu-icon" alt="" />
                    <p>Planner</p>
                </Link>
                <Link 
                    to={'/personal-space'} 
                    className={`menu-link ${selectedPage === 'personal' ? 'selected-menu-button' : ''}`} 
                    onClick={() => setSelectedPage('personal')}
                >
                    <img src={Icons.PersonLight} className="menu-icon" alt="" />
                    <p>Personal Space</p>
                </Link>
                <div className="menu-line"></div>
                <Link 
                    to={'/tasks'} 
                    className={`menu-link ${selectedPage === 'tasks' ? 'selected-menu-button' : ''}`} 
                    onClick={() => setSelectedPage('tasks')}
                >
                    <img src={Icons.TasksLight} className="menu-icon" alt="" />
                    <p>Tasks</p>
                </Link>
                <Link 
                    to={'/notes'} 
                    className={`menu-link ${selectedPage === 'notes' ? 'selected-menu-button' : ''}`} 
                    onClick={() => setSelectedPage('notes')}
                >
                    <img src={Icons.NoteLight} className="menu-icon" alt="" />
                    <p>Notes</p>
                </Link>
                <Link 
                    to={'/projects'} 
                    className={`menu-link ${selectedPage === 'projects' ? 'selected-menu-button' : ''}`} 
                    onClick={() => setSelectedPage('projects')}
                >
                    <img src={Icons.ProjectLight} className="menu-icon" alt="" />
                    <p>Projects</p>
                </Link>
                <div className="menu-projects-list">
                    <Link 
                        to={'/project/1/view'} 
                        className={`menu-link ${selectedPage === '1' ? 'selected-menu-button' : ''}`} 
                        onClick={() => setSelectedPage('1')}
                    >
                        <p>Fitness App</p>
                    </Link>
                    <Link 
                        to={'/project/2/view'} 
                        className={`menu-link ${selectedPage === '2' ? 'selected-menu-button' : ''}`} 
                        onClick={() => setSelectedPage('2')}
                    >
                        <p>Time Management App</p>
                    </Link>
                    <Link 
                        to={'/project/3/view'} 
                        className={`menu-link ${selectedPage === '3' ? 'selected-menu-button' : ''}`} 
                        onClick={() => setSelectedPage('3')}
                    >
                        <p>Portfolio</p>
                    </Link>
                </div>
            </div>
            <div className="quick-menus">
                <button onClick={()=>setShowNewTask(true)}>New Task</button>
                <button onClick={()=>setShowNewNote(true)}>New Note</button>
            </div>
            <div className="menu-line"></div>
            <Link 
                to={'/pomodoro'} 
                className={`menu-link ${selectedPage === 'pomodoro' ? 'selected-menu-button' : ''}`} 
                onClick={() => setSelectedPage('pomodoro')}
            >
                <img src={Icons.TimerLight} className="menu-icon" alt="" />
                <p>Pomodoro</p>
            </Link>
            <Link 
                to={'/settings'} 
                className={`menu-link ${selectedPage === 'settings' ? 'selected-menu-button' : ''}`} 
                onClick={() => setSelectedPage('settings')}
            >
                <img src={Icons.SettingsLight} className="menu-icon" alt="" />
                <p>Settings</p>
            </Link>


            {/* New Task, New Note, New Project menus */}
            {showNewTask && <NewTask closeMenu={()=>setShowNewTask(false)}/>}
            
    </div>
     );
}
 
export default Menu;