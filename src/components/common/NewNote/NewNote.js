import './NewNote.css';
import Icons from '../../../IconLibrary';



const showNewNote = ({closeMenu}) => {
    return ( 
        <div className="new-note new-items-menu">
            <img className='close-icon' src={Icons.CloseLight} onClick={closeMenu} alt='close extended task'/>
            <p className='title'>New Note</p>
            <fieldset>
                <label>Title</label>
                <input type='text' name='title' id='title' required></input> 
            </fieldset>
            <fieldset>
                <label>Content</label>
                <textarea name='content' id='content'></textarea> 
            </fieldset>
            <fieldset>
                <label>Importance</label>
                <select id='importance' name='importance'>
                    <option value={'very-low'}>Very Low</option>
                    <option value={'low'}>Low</option>
                    <option value={'normal'}>Normal</option>
                    <option value={'high'}>High</option>
                    <option value={'very-high'}>Very High</option>
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
            <button className='create-item-button'>Create Task</button>
        </div>
     );
}
 
export default showNewNote;