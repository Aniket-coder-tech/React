import React, { useContext } from 'react'
import noteContext from '../context/noteContext'

export default function Alert(rops) {
  const{alert}=useContext(noteContext);
  return (
    
      <div class="alert alert-primary "style={{visibility:alert.visibility,display:"flex",alignItems:"center",paddingLeft:"20px",height:"6vh",padding:"0px"}}>
  {alert.msg}
</div>
    
  )
}
