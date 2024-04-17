import React, { useContext,useRef, useEffect, useState } from 'react'
import noteContext from '../context/noteContext';
import Noteitem from './Noteitem';
import Alert from './Alert';
import { useNavigate } from "react-router-dom";
import Addnote from './Addnote';
import userContext from '../context/userContext';

export default function Home() {
  const {loginn,logoutUser}=useContext(userContext);
  const {updateNote}=useContext(noteContext)
  let navigate = useNavigate();
  


  const[edit,setEdit]=useState({"id":"","etitle":"","edescription":""})
  
  const ref= useRef(null); 
  const ref1= useRef(null); 
const {notes,getNotes,createNote}=useContext(noteContext);
  const handleO=(note)=>{
  setEdit({id:note._id,etitle:note.title,edescription:note.description})
  ref.current.click();
 

 } 
 const handleOnchange=(e)=>{
  setEdit({...edit,[e.target.name]:e.target.value})
}

 useEffect(()=>{
  if(localStorage.authtoken){
    getNotes();
  }
  else{
    navigate("/login")
  }
 
 },[])
  return (<><Addnote/>
<h1>Your Notes</h1><div className='row'>
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="form-group">
    <label for="exampleInputPasdsword1">Title</label>
    <input type="text" className="form-control" onChange={handleOnchange} value={edit.etitle} name="etitle" id="exampleInputPasdsword1"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword11">Description</label>
    <input type="text" className="form-control" onChange={handleOnchange} value={edit.edescription} name="edescription" id="exampleInputPassword11"/>
  </div>
      </div>
      <div class="modal-footer">
        <button ref={ref1}  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={()=>{
            updateNote(edit.id,edit.etitle,edit.edescription);
            ref1.current.click();
        }} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<a href="#" className='d-none' ref={ref}  data-bs-toggle="modal" data-bs-target="#exampleModal">open</a>
{notes.length!==0 ?notes.map((note)=>{ 
    return (<Noteitem note={note} updateNote={handleO} key={note._id}/>)
}):" "}
      </div>
    </>
  )
}
