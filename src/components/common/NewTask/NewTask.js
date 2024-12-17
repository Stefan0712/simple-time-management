import './NewTask.css';
import Icons from '../../../IconLibrary';

const NewTask = ({closeMenu}) => {
    return ( 
        <div className="new-task">
            <img className='close-icon' src={Icons.CloseLight} onClick={closeMenu} alt='close extended task'/>
            <p className='title'>New Task</p>
            <fieldset>
                <label>Title</label>
                <input type='text' name='title' id='title' required></input> 
            </fieldset>
            <fieldset>
                <label>Description</label>
                <input type='text' name='description' id='description'></input> 
            </fieldset>
            <fieldset>
                <label>Due At</label>
                <div className='due-inputs'>
                    <input type='date' name='dueDate' id='dueDate'></input> 
                    <input type='hour' name='dueHour' id='dueHour'></input> 
                </div>
            </fieldset>
            <fieldset>
                <label>Color</label>
                <input type='color' name='color' id='color'></input> 
            </fieldset>
            <fieldset>
                <label>Priority</label>
                <select id='priority' name='priority'>
                    <option value={'very-low'}>Very Low</option>
                    <option value={'low'}>Low</option>
                    <option value={'normal'}>Normal</option>
                    <option value={'high'}>High</option>
                    <option value={'very-high'}>Very High</option>
                </select>
            </fieldset>
            <fieldset>
                <label>Status</label>
                <select id='priority' name='priority'>
                    <option value={'not-started'}>Not Started</option>
                    <option value={'started'}>Started</option>
                    <option value={'in-progress'}>In Progress</option>
                    <option value={'reviewing'}>Reviewing</option>
                    <option value={'finished'}>Finished</option>
                    <option value={'dropped'}>Dropped</option>
                    <option value={'paused'}>Paused</option>
                    <option value={'revisioning'}>Revisioning</option>
                    <option value={'testing'}>Testing</option>
                </select>
            </fieldset>
            <fieldset>
                <label>Project</label>
                <select id='project' name='project'>
                    <option value={'id1'}>Fitness App</option>
                    <option value={'id2'}>Time Management App</option>
                    <option value={'id3'}>Portfolio</option>
                </select>
            </fieldset>
            {/*After project is selected, show the list dropdown list with that project's lists. If none are there, 
            let them create one with just name */}
            <fieldset>
                <label>List</label>
                <select id='list' name='list'>
                    <option value={'list1'}>List 1</option>
                    <option value={'list2'}>List 2</option>
                    <option value={'list3'}>List 3</option>
                </select>
            </fieldset>
            <fieldset>
                <label>Tags</label>
                <div className='tags-input'>
                    <div className='tag-color' style={{backgroundColor: 'green'}}></div>
                    <input type='text' id='name' name='name' required></input>
                    <button><img src={Icons.PlusLight} alt=''></img></button>
                </div>
                <div className='tags-container'>
                    <div className='tag-item'>
                        <div className='tag-color' style={{backgroundColor: 'green'}}></div>
                        <p>Tag 1</p>
                        <img src={Icons.CloseLight}></img>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <label><b>Subtasks</b></label>
                <div className='subtask-inputs'>
                    <input type='text' id='name' name='name' placeholder='Subtask Name' required></input>
                    <button><img src={Icons.PlusLight} alt=''></img></button>
                </div>
                <div className='subtask-container'>
                    <div className='short-task'>
                        <p>Task 1</p>
                        <img src={Icons.CloseLight}></img>
                    </div>
                </div>
            </fieldset>
            <button className='create-item-button'>Create Task</button>
        </div>
     );
}
 
export default NewTask;