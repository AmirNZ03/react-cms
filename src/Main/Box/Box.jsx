import React, { useEffect, useRef, useState } from 'react'
import "./Box.css";
import infor from "./Data";
import { FaUserFriends } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";


export default function Box() {
  // const [count,setCount]=useState(128)
  // const item=useRef(null)
  // item.current.datacol=

 
     

  //    item.current.innerHTML+=


 
  // const [counter,setCount]=useState(0)
  // const [count,setCount]=useState(0)
  // // v
  // let vc=document.querySelector(".nvc")
  // // useEffect(
    
    
  // window.addEventListener("load",(vc)=>{
  //   let xc=setInterval(() => {
  //     let ds=vc.innerHTML
  //     if(ds==count){
  //       clearInterval(xc)
  //     }
  //     ds++
  //   }, 0.5)
  // })  

  // )
  return (
    
    <>
    <div className='boxi'>
     
      <div className='saman'>
     

       
      {/* <span className='vmx'>
        <TiMessages/>
        </span> */}
       
        <div className='mesui'>
        <span id='ami'>
          <TiMessages/>
        </span>
          <p className='nvc' ></p>
          <p className='yas'>پیام</p>
        </div>
             
      </div>
     
    </div>
    <div className='boxi' >
     
    <div className='saman'>
   

     

     
      <div className='mesui'>
        <span id='amic'>
        <IoDiamondOutline/>
        </span>
        <p>512</p>
        <p className='yasx'>سفارش</p>
      </div>
           
    </div>
   
  </div>
   <div className='boxi' >
     
   <div className='saman'>
  

    

    
     <div className='mesui'>
     <span id='amicv'>
        <FiGift />
        </span>
       <p>1024</p>
       <p className='yas'>محصول</p>
     </div>
          
   </div>
  
 </div>
  <div className='boxi' >
     
  <div className='saman'>
 

   

   
    <div className='mesui'>
    <span id='amicv'>
        <FaUserFriends />
        </span>
      <p>2048</p>
      <p className='yas'>کاربر</p>
    </div>
         
  </div>
 
</div>
</>
  )
}
