import React from 'react'
import "./message.css"
import { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { IoWalletSharp } from "react-icons/io5";
import { CiPower } from "react-icons/ci";
import { Link } from 'react-router-dom'

export default function Message({onsub}) {
    useEffect(()=>{
        const close=()=>{
           
            if(window.addEventListener("click",()=>{
            onsub()
            })){
               
            }
            
        }
        window.addEventListener("click",close)
        return()=>window.removeEventListener("click",close)
    })
  return (
    <div>
        <div className='marghm'>
            <div id='acx'>
            <Link to="/edit-profile">
               <div id='cxo'>
                <p>ویرایش پروفایل</p>
                <span id='far'>
<FaRegEdit/>
</span>
                </div>
                </Link> 
                <Link to="/edit-password">
                <div id='cxo'>
                <p>تغییر رمز عبور</p>
                <span id='far'>
< IoKeySharp/>
</span>
                </div> 
                </Link>
                <Link to="/chat">
                <div id='cxo'>
                
                <p id='wer'>تیکت های جدید</p>
                <span id='far'>
<FaEnvelope/>
</span>
                </div>
                </Link> 
                <Link to="/main">
                <div id='cxo'>
                <p id='vco'>کیف پول</p>
                <span id='far'>
<IoWalletSharp/>
</span>
                </div> 
                </Link>
               
                <div id='cxo'>
                <p id='nav'>خروج</p>
                <span id='far'>
<CiPower/>
</span>
                </div> 
              
            </div>
        </div>
    </div>
  )
}
