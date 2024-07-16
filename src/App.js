import {useEffect,useState, useRef} from 'react'
import './App.css';
import homepageimg from'./img/homapage.jpg'
import MainContext from './MainContext';
import LeaveCommentText from './components/LeaveCommentText';
import Note from './components/Note';
import NoteBox from './components/NoteBox';


function App() {

  const screen = useRef();
  const[mode,setMode] = useState(false)
  const [notes,setNotes] = useState(localStorage.notes && JSON.parse(localStorage.notes) || []) 
  const [position, setPosition] = useState({ x:0, y:0 })
  const [boxPosition,setBoxPosition] = useState({ x:0, y:0 })
  const [boxVisible,setBoxVisible] = useState(false)

  useEffect(() => {
    if (screen.current) {
      screen.current.focus();}
  },[])

 
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes] )

 

  //aktiflik durumunu state tutacaz  c ye basınca açık olup 
  //olmadığını test edebiliyoruz metot tanımı
  const handleKeyUp = (e) => {
      if( e.key === 'c'){
        setMode(!mode)
        setBoxVisible(false) /* aktif modda ise selectbox açılır*/
      }
      if( e.key === 'Escape'){
        setBoxVisible(false)
      }
}


  const handleClick = ()=>{
    if(mode){
      setBoxPosition(
        {x: position.x,
        y: position.y 
        })
      setBoxVisible(true)
      }
      }

        //mouse takip eder konumunu belirtir
      const handleMouseMove = (e) =>{
        //mouse haraket edince güncelle
        if(mode){
          setPosition({
            x:e.pageX,
            y: e.pageY
          })
        }
    
}

  const data = {
    position,
    boxPosition,
    setMode,
    setNotes,
    notes,
    setBoxVisible
  }
  console.log(notes)

  return (
    <MainContext.Provider value={data}>
        <div ref={screen} tabIndex={0} onClick={handleClick} onMouseMove={handleMouseMove} onKeyUp={ handleKeyUp} className={`screen ${mode &&  `editable`}`}>
        <img src={homepageimg} alt="" />
        {mode && <LeaveCommentText/>}
        {mode && (<div>Yorum modu aktif</div>)} //*  maouse kontrol edebiliyor*//
        {notes && notes.map(note => (
            <Note 
              key={note.number} 
              note={note.note} 
              number={note.number} 
              color={note.color} 
              position={note.position} 
            />)
          )}
        {boxVisible && <NoteBox/>}
        </div>
    </MainContext.Provider>
    
  );
}

export default App;
