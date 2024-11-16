import React from 'react'
import "./sub.css"
import { useEffect } from 'react'

export default function Sub({onedx}) {
    useEffect(()=>{
        const close=()=>{
           
            if(window.addEventListener("click",()=>{
            onedx()
            })){
               
            }
            
        }
        window.addEventListener("click",close)
        return()=>window.removeEventListener("click",close)
    })
  return (
    <div>
        <div className='margh'>
            <div id='acx'>
                <div id='ca'>
                    <p id='czz'>شما 8 اعلان تازه دارید</p>
                </div>
                <div id='qp'>
                    <p id='clo'>21:30</p>
                    <div  id='acx'>
                        <p id='up'>عباس دوران</p>
                        <p id='ln'>بسته ارسالی شما دستم رسید</p>
                    </div>
                </div>
                <div id='mas'>

                </div>
               
                <div id='qp'>
                    <p id='clo'>20:30</p>
                    <div  id='acx'>
                        <p id='up'>حسن fgd</p>
                        <p id='lnx'>از محبت شما ممنونم</p>
                    </div>
                </div>
                <div id='mas'>

                </div>
               
                <div id='qp'>
                    <p id='clo'>19:30</p>
                    <div  id='acx'>
                        <p id='ups'>مدیر کل</p>
                        <p id='lnp'>سفارش شما ارسال گردید</p>
                    </div>
                </div>
                <div id='mas'>

</div>
               
                <div id='qp'>
                    <p id='clo'>18:30</p>
                    <div  id='acx'>
                        <p id='up'>مدیر مالی</p>
                        <p id='lnl'>درخواست فیش حقوقی</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
