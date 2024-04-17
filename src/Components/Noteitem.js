import React, { useContext, useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import noteContext from '../context/noteContext'
export default function Noteitem(props) {
  const {updateNote,deleteNote}=useContext(noteContext)
  const {note}=props

 
  return (<>
 <div className="col-md-3 my-3">
 
  <div className="card" >
 
  <div className="card-body">
    <h5 className="card-title">{props.note.title}</h5>
    <p className="card-text">{props.note.description}</p>
    <i className="fa-solid fa-trash mx-4" onClick={()=>{
      console.log("hellloioooo")
      deleteNote(props.note._id)
    }} ></i>
    <i className="fa-solid fa-pen-to-square" onClick={()=>{props.updateNote(props.note)} } ></i>
    </div>







</div></div>


</>
  )
}
