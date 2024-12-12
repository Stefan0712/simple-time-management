import { notes } from "../../FakeNotes";
import Note from '../common/Note/Note.js';
import './styles/Notes.css';
const Notes = () => {
    return ( 
        <div className="notes-page page">
            <div className="notes-container">
                {notes?.map((note)=><Note noteData={note} />)}
            </div>
        </div>
     );
}
 
export default Notes;