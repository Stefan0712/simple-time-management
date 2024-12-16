import { Link } from 'react-router-dom';
import './styles/Dashboard.css'
import tasks from '../../FakeTasks';


const Dashboard = () => {
    return ( 
        <div className="dashboard-page page">
            <h1>Dashboard</h1>
            <div className="dashboard-container">
                
                <div className="dashboard-quick-tasks">
                    <div className="small-container">
                        <div className='container-header'><p>Today</p></div>
                        <div className="tasks-container">
                            
                        </div>
                    </div>
                    <div className="small-container">
                        <div className='container-header'><p>This Week</p></div>
                        <div className="tasks-container">

                        </div>
                    </div>
                    <div className="small-container">
                        <div className='container-header'><p>Pinned</p></div>
                        <div className="tasks-container">

                        </div>
                    </div>
                    <div className="small-container">
                        <div className='container-header'><p>Due Tasks</p></div>
                        <div className="tasks-container">

                        </div>
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

                    </div>
                </div>
                <div className="full-width-container">
                    <div className="container-header">
                        <p>Recent Notes</p>
                        <Link to={'/notes'} className='header-button'>All Notes</Link>
                    </div>
                    <div className="notes-container">

                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Dashboard;