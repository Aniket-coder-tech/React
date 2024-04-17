import React, { useState ,useEffect,useContext} from 'react'
import noteContext from '../context/noteContext';

export default function Addnote() {
    const[note,setNote]=useState({title:"",description:""});
    const {notes,getNotes,createNote}=useContext(noteContext);

 useEffect(()=>{
  getNotes();
 },[])
  const handleOnchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value});
  }
  const handleClick=(e)=>{
      e.preventDefault();
      createNote(note);
      setNote({title:"",description:""})
  }
  return (
    <div className="container">
     
    <div className=' col-md-6'>
        <h1>Add a note</h1>
        <form>
        <div className="form-group">
    <label for="exampleInputPassword1">Title</label>
    <input type="text" className="form-control" onChange={handleOnchange} value={note.title} name="title" id="exampleInputPassword1"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" className="form-control" onChange={handleOnchange} value={note.description} name="description" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>  </div>
 </div>
  )
}
