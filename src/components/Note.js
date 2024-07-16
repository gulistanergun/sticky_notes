import {useContext, useState} from 'react'
import MainContext from '../MainContext'
import Draggable from 'react-draggable';


 function Note(note,number) {

  const [visible ,setVisible] = useState(false)
  const [clickable, setClickable] = useState(true) // taşırken cliklenmesin diye
  const {setMode, notes, setNotes} = useContext(MainContext)
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note.note);
 

  const showNote = () => {
    if(clickable){
      setVisible (!visible)       
      
    }
  }

  const editNote = () => {
    setIsEditing(true);
    setVisible(true);
  };

  const saveEdit = () => {
    const updatedNotes = notes.map(n => 
      n.number === note.number ? { ...n, note: editedNote } : n
    );
    setNotes(updatedNotes);
    setIsEditing(false);
  };

  const deleteNote = () => {
    const updatedNotes = notes.filter(n => n.number !== note.number);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Güncelle
  };
  
  

  return (
    <Draggable onDrag={() => setClickable(false)} onStart={() => setClickable(true)}>
      <div onMouseEnter={() => setMode(false)} onMouseLeave={() => setMode(true)} className='note-container' style={{'--color': note.color, position: 'absolute', top: note.position.y, left: note.position.x}}>
        <span onClick={showNote} className="note-box-number">{note.number}</span>
        <div className='note' style={{display: visible ? 'flex' : 'none'}}>
        {isEditing ? (
            <div>
              <textarea 
                value={editedNote} 
                onChange={(e) => setEditedNote(e.target.value)} 
                cols="30" 
                rows="5"
              />
              <button className='buton'  onClick={saveEdit}>Kaydet</button>
            </div>
          ) : (
            <div>
              {note.note}
              <button className='buton' onClick={editNote}>Düzenle</button>
              <button className ='buton' onClick={deleteNote} >Sil</button>
            </div>
          )}
        </div>
      </div>
   </Draggable>
  )
}

export default Note