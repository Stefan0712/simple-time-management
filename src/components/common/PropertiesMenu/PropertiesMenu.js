import Icons from "../../../IconLibrary";
import './PropertiesMenu.css';

const PropertiesMenu = ({properties, closeProperties, type}) => {
    if(type==='task'){
        return ( 
            <div className="properties-menu">
                <img className='close-icon' src={Icons.CloseLight} onClick={closeProperties} alt='close extended task'/>
                <p className='title'>{properties.name}</p>
                <p className='description'>{properties.description}</p>
                <p className='property'> Due {properties.dueDate} at {properties.dueHour}</p>
                <p className='property'>Status: {properties.status}</p>
                <p className='property'>Created by {properties.createdBy}</p>
                <p className='property'>Created at {properties.createdAt}</p>
                <p className='property'>Priority: {properties.priority}</p>
                <p className='property'>Progress: {properties.progress}%</p>
                <div className="subtasks">
                    <b>Subtasks</b>
                    <div className="subtasks-container">
                        {properties.subtasks?.map((subtask)=>(
                            <div className="short-task">
                                <p>{subtask.name}</p>
                                <input type="checkbox" checked={subtask.isCompleted}></input>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='property-tags'>
                    <img className='small-icon' src={Icons.TagLight} alt=''></img>
                    {properties.tags?.map((tag,index)=>(
                        <div className='tag-body' key={"tag"+index}>
                            <div className='tag-color' style={{backgroundColor: tag.color}}></div>
                            <div className='tag-name'>{tag.name}</div>
                        </div>
                    ))}
                </div>
                <div className="properties-menu-buttons">
                    <button><img src={Icons.EditLight} alt=""></img></button>
                    <button><img src={Icons.CloseLight} alt=""></img></button>
                </div>
            </div>
         );
    }else if(type==='note'){
        return ( 
            <div className="properties-menu">
                <img className='close-icon' src={Icons.CloseLight} onClick={closeProperties} alt='close extended task'/>
                <p className='title'>{properties.title ? properties.title : 'Title not set'}</p>
                <p className='description'>{properties.content}</p>
                <p className='Date'> Created on {properties.date}</p>
                <p className='property'>Importance: {properties.importance}</p>
                <p className='property'>Project: {properties.project ? properties.project : 'None'}</p>
                <p className='property'>List {properties.list ? properties.list : 'None'}</p>
                <p className='property'>Task {properties.task ? properties.task : 'None'}</p>
                <div className='property-tags'>
                    <img className='small-icon' src={Icons.TagLight} alt=''></img>
                    {properties.tags?.map((tag,index)=>(
                        <div className='tag-body' key={"tag"+index}>
                            <div className='tag-color' style={{backgroundColor: tag.color}}></div>
                            <div className='tag-name'>{tag.name}</div>
                        </div>
                    ))}
                </div>
            </div>
         );
    }
    
}
 
export default PropertiesMenu;