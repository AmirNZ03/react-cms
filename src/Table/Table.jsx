import React from 'react'
import "./Table.css"
import { FaAngleUp } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
export default function Table() {

  return (
   
      <div className='mat'>
      <div className='qo'>
        <button className='ang'>
          <div className='up'>
<FaAngleUp/>
</div>
        </button>
        <p className='paf'>گفتگوی دو نفره</p>
        <div className='edt'>
<FaRegEdit/>
</div>
        
      </div>
      <div className='line'>

</div>
<div className='xpa'>
  <div className='rami'>
    <div className='mila'>
      <div className='xpa'>
        <p className='matn' >سلام. درخواست نصب مجدد قالب را دارم. لطفا بفرمائید شامل هزینه می شود یا خیر؟</p>
        <p className='mxa'>بهزاد ، 5 ساعت پیش</p>
      </div>
    </div>
    
    <img src="./customer.png" alt="" className='cust' />
  </div>
  <div className='rami'>
  <img src="./48.png" alt="" className='custz' />
    <div className='milan'>
  
      <div className='xpa'>
        <p className='matnu' >سلام وقت بخیر
        لطفا شماره پیگیری خود را ارسال کنید. در صورتی که قبلا قالب را خریداری کرده باشید شامل هزینه نمی شود.</p>

        <p className='mxa'> مدیر سایت ، 4 ساعت پیش</p>
     
      </div>
    </div>
    
    
  </div>
  <div className='rami'>
    <div className='milaq'>
      <div className='xpa'>
        <div className='xpa'>
        <p className='matn' >QWERTY2048</p>
        <p className='matn'>سپاس</p>
        </div>
        <p className='mxv'>بهزاد ، 5 ساعت پیش</p>
      </div>
    </div>
    
    <img src="./customer.png" alt="" className='cust' />
  </div>
  <div className='rami'>
  <img src="./48.png" alt="" className='custz' />
    <div className='bvc'>
  
      <div className='xpa'>
        <p className='matnu' >انجام شد. پیروز باشید
    </p>

        <p className='mxv'> مدیر سایت ، 4 ساعت پیش</p>
     
      </div>
    </div>
    
    
  </div>
  <textarea name="" id="lk" placeholder='بنویسید...'></textarea>
  <button id='face'>ارسال پیام
    <span id='sa'>
<SiMinutemailer/>
</span>
  </button>
</div>
      </div>
   
  )
}
