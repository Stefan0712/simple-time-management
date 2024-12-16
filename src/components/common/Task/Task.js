import Icons from '../../../IconLibrary';

const Tasks = ({taskData}) => {
    return ( 
        <div className="task-body">
            <div className="task-header">
                <h3>Task Title</h3>
                <p>This is a description</p>
                <p>04.08.2025</p>
                <p>Started</p>
                <button><img src={Icons.DotsMenuLight} alt=""/></button>
            </div>
        </div>
     );
}
 
export default Tasks;






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