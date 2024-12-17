import "./styles/Tasks.css";
import Icons from "../../IconLibrary";
import { tasks } from "../../FakeTasks";
import Task from "../common/Task/Task";



const Tasks = () => {

    const firstProject = tasks.slice(0, 3);
    const secondProject = tasks.slice(3, 6); 
    const thirdProject = tasks.slice(6, 9);
    return ( 
        <div className="tasks-page page">
            <div className="project-container">
                <h3>Project 1</h3>
                {firstProject.map((task)=>(
                    <Task type={'task'} taskData={task} key={task.id} />
                ))}
            </div>
            <div className="project-container">
                <h3>Project 2</h3>
                {secondProject.map((task)=>(
                    <Task type={'task'} taskData={task} key={task.id} />
                ))}
            </div>
            <div className="project-container">
                <h3>Project 3</h3>
                {thirdProject.map((task)=>(
                    <Task type={'task'} taskData={task} key={task.id} />
                ))}
            </div>
        </div>
     );
}
 
export default Tasks;