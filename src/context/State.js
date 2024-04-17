import { useState } from "react";
import NoteContext from "./noteContext";

 const NoteState=(props)=>{
      const host="http://localhost:5000"
      const [alert,setAlert]=useState({msg:"",visibility:"hidden"});
      const[notes,setNotes]=useState("");
      const alertt=(msg)=>{
        setAlert({msg,visibility:"visible"})
        setTimeout(()=>{
          setAlert({msg:"",visibility:"hidden"})
        },5000)
    }
     
      const deleteNote=async(id)=>{
        try {
          
          const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
              "authtoken":localStorage.getItem("authtoken")
            },
           
          });
      
          console.log("Hellooooooooooooooooooooooooooooooooo");
          setNotes(notes.filter((note)=>{
            return (note._id!==id);
          }));
          alertt("note deleted successfully");
        } catch (error) {
          console.error("Error:", error);
        }
      
      }
      const updateNote=async(id,title,description)=>{
        try {

          const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
              "authtoken":localStorage.getItem("authtoken")
            },
            body: JSON.stringify({title,description}),
           
          });
      
          
          setNotes(notes.map(note=>{
            if(note._id===id){
              note.title=title;
              note.description=description;
            }
            return note;
          }))
          alertt("note updated successfully");
        
        } catch (error) {
          console.error("Error:", error);
        }
      
      }
      
      const getNotes=async()=>{
        
        try {
          console.log(localStorage.getItem("authtoken"));
          const response = await fetch(`${host}/api/notes/`, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
              "authtoken":localStorage.getItem("authtoken")
            },
           
          });
          let data=await response.json();
          data=Array.from(data);
        
          setNotes(data);
      
        } catch (error) {
          console.error("Error:", error);
        }
      
      }
      const createNote=async(note)=>{
  
        try {
          const response = await fetch(`${host}/api/notes/createNote`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "authtoken":localStorage.getItem("authtoken")
            },
            body: JSON.stringify(note),
          });
          const note1=await response.json();
          setNotes(notes.concat(note1));
          alertt("note created successfully");
      
        } catch (error) {
          console.error("Error:", error);
        }
      
      }
    return(
        <NoteContext.Provider value={{notes,getNotes,deleteNote,updateNote,createNote,alert,alertt}}>
           {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;