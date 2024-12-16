import Icons from '../../../IconLibrary';
import './Task.css';

const Task = ({taskData, onClick}) => {

    return ( 
        <div className="task-body" key={taskData.id} onClick={onClick}>
            <p className='task-title'>{taskData.name}</p>
            <p className='task-description'>{taskData.description}</p>
            <p className='task-due'>{taskData.dueDate}</p>
            <p className='task-status'>{taskData.status}</p>
            <button className='task-button'><img className='small-icon' src={Icons.DotsMenuLight} alt=""/></button>
            {/* TODO: Change menu button to checkbox */}
            
        </div>
     );
}
 
export default Task;






// {
//     id,
//     name,
//     description,
//     createdAt,
//     createdBy, 
//     dueDate,
//     dueHour,
//     priority,
//     color,
//     status,
//     progress,
//     tags: [same as for notes],
//     notes: [note ids],
//     project: [ids],
//     list: [ids],
//     subtasks: [{id, name, description, isCompleted}]
// }