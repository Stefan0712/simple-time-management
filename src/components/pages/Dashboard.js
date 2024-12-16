import './styles/Dashboard.css'


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
                    </div>
                    <div className="tasks-container">

                    </div>
                </div>
                <div className="full-width-container">
                    <div className="container-header">
                        <p>Recent Notes</p>
                    </div>
                    <div className="notes-container">

                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Dashboard;