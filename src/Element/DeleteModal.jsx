import React from 'react'
import "./deletemodal.css"
import ReactDOM from 'react-dom'
export default function DeleteModal({submitAction,cancelAction,msg}) {
  return ReactDOM.createPortal (
    <div className='mod act'>
       <div className='aoc'>
        <h1>{msg}</h1>
        <div className='btns'>
            <button className='delete acce' onClick={()=>submitAction()}>بله</button>
            <button className='delete no' onClick={()=>cancelAction()}>خیر</button>
        </div>
        </div>
       </div>,document.getElementById('modal')
    
  )
}
