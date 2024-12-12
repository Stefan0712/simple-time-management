import './Note.css';
import Icons from '../../../IconLibrary';

const NoteDark = ({noteData}) => {
    return ( 
        <div className="note-body">
            <div className='note-header'>
                <p className='note-title'>{noteData?.title}</p>
                <p className='note-date'>{noteData?.date}</p>
            </div>
            <p className='note-content'>{noteData?.content}</p>
            <div className='note-properties'>
                <div className='note-tags'>
                    <img className='small-icon' src={Icons.TagLight}></img>
                    {noteData?.tags?.map((tag)=>(
                        <div className='tag'>
                            <div className='tag-color' style={{backgroundColor: tag.color}}></div>
                            <p>{tag.name}</p>
                        </div>
                    )
                    )}
                </div>
                <div className='note-buttons'>
                    <button><img src={Icons.CloseLight} alt='' /></button>
                    <button><img src={Icons.EditLight} alt='' /></button>
                </div>
            </div>
        </div>
     );
}
 
export default NoteDark;
//TODO: Add project, list, and task properties.

// {
//     date: "14.08.2024",
//     title: "Reaminder | none",
//     content: "Don't forget to implement a dark theme with those two colors saved into the Figma project file",
//     tags:[
//         {name: 'Reaminder', color: 'red'},
//         {name: 'Project', color: 'blue'}
//     ],
//     project: 'random-id-generated-with-uuid-goes-here | none',
//     importance: 'very-high | high | normal | low | very-low',
//     task: 'random-id-generated-with-uuid-goes-here | none',
//     list: 'random-id-generated-with-uuid-goes-here | none',
// }