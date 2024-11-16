import React, { useEffect } from 'react'
import "./editmodal.css"
export default function EditModal({children,onClose,onSubmit}) {
    useEffect(()=>{
        const check=(event)=>{
            console.log(event);
            if(event.keyCode===27){
                onClose();
            }
            
        }
        window.addEventListener("keydown",check)
        return()=>window.removeEventListener("keydown",check)
    })
  return (
    <div className='mod act'>
        <form action="" className='edit-modal'>
        <h1>اطلاعات جدید را وارد کنید</h1>
        {children}
        <button className='edit-sub' onClick={onSubmit}>ثبت اطلاعات جدید</button>
        </form>
    </div>
  )
}
