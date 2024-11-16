import React, { useState } from 'react'
import "./Farm.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiTrash } from "react-icons/ci";
import {  MdFullscreen } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { LuClock } from "react-icons/lu";
import datas from './lk';
import Max from "./Max/Max"
import Min from "./Min"
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";

import DeleteModal from '../../Element/DeleteModal';


export default function Farm() {
  const[isShowModal,setIsShowModal]=useState(false)
const deleteact=()=>{
  console.log("بسته");
  
  setIsShowModal(false)

  
}
const deleteClos=()=>{
  console.log("باز");
  
  setIsShowModal(false)
}
  return (
    <div className='ldpa'>
      <div className='dagh'>
    <div className='asaa'>
        <div className='mx'>
        <button className='fx' onClick={()=>{setIsShowModal(true)}}>
            <div className='daa'>
<CiTrash/>
</div>
        </button>
    
        <p className='al'>نمونه فرم</p>
        <div className='dsc'>
        <MdFullscreen/>
        </div>
        
        </div>
        <div className='sa'>
          </div>
        <div className='ad'>
            <div className='pan'>نام</div>
        <input type="text" placeholder='نام' className='inp'
        
        />
         <div className='pan'>رمز عبور</div>
         <input type="text"  className='inp'
        
        />
        <div className='ob'>
          <div className='af'>
            <p className='cm'>بانو</p>
            <input type="radio" />
          </div>
          <div className='af'>
            <p className='cm'>آقا</p>
            <input type="radio" />
          </div>
        </div>
        <div className='pan' >ایمیل</div>
         <input type="text"  className='inp' placeholder='email@site.com'
        
        />
         <div className='pany' >(شمسی)تاریخ تولد</div>
         <input type="date"  className='inp' placeholder='email@site.com'
        
        />
         <div className='pan' >نشانی</div>
         <textarea name="" id="la" ></textarea>
         <button className='adm'>تایید و ذخیره


         </button>
        </div>
       
    </div>
    {isShowModal && <DeleteModal submitAction={deleteact} cancelAction={deleteClos} msg={"آیا از حذف اطمینان دارید؟"}/>}
    <div className='asaas'>
    <div className='mx'>
    <button className='fx'>
        <div className='daa'>
<CiTrash/>
</div>
    </button>

    <p className='alx'>گفتگو با کاربر</p>
    <div className='dsc'>
    <TbMessages/>
    </div>
    
    </div>
    <div className='sa'>
      </div>
    <div className='ad'>
      <div className='pqi'>
        <div className='boxw'>
          <div className='et'>
            <p className='sqq'>با سلام. آیا صفحات بطور کامل فارسی، راستچین و بهینه می باشد؟</p>
            <p className='cxq'>بهزاد ، 10:20
            </p>
          </div>
        </div>
        <img src="customer.png" alt="" className='ima' />
      </div>
      <div className='pqit'>
      <img src="48.png" alt="" className='imaz' />
        <div className='boxw'>
          <div className='et'>
            <p className='sqq'>با سلام. آیا صفحات بطور کامل فارسی، راستچین و بهینه می باشد؟</p>
            <p className='cxq'>پشتیبان قالب ، 10:21
            </p>
          </div>
        </div>
        
      </div>
      <div className='pqiz'>
        <div className='boxwz'>
          <div className='et'>
            <p className='sqq'>?پلاگین ها چطور</p>
            <p className='cxqq'>بهزاد ، 10:23
            </p>
          </div>
        </div>
        <img src="customer.png" alt="" className='ima' />
      </div>
      <div className='pqit'>
      <img src="48.png" alt="" className='imaz' />
        <div className='boxw'>
          <div className='et'>
            <p className='sqq'>بله، کلیه پلاگین ها هم با زبان فارسی و راستچین هستند</p>
            <p className='cxq'>پشتیبان قالب ، 10:24
            </p>
          </div>
        </div>
        
      </div>
     
   
     <div className='ali'>
      <button className='mil'>ارسال</button>
      <input type="text" className='amir' placeholder='پیام جدید' />
     </div>
    </div>
    
</div>
{isShowModal && <DeleteModal submitAction={deleteact} cancelAction={deleteClos} msg={"آیا از حذف اطمینان دارید؟"}/>}
</div>
<div className='asaasch'>
    <div className='mx'>
    <button className='fx'>
        <div className='daa'>
<CiTrash/>
</div>
    </button>

    <p className='alxp'>دیدگاه ها</p>
    <div className='dsc'>
    <TbMessages/>
    </div>
    
    </div>
    <div className='sa'>
      </div>
    <div className='ad'>
      
<div className='buttons'>
  <button className='pwqq'>همه دیدگاه ها</button>
  <div className='saap'>
  <button className='red'>ردشده</button>
  <button className='blue'>تایید شده</button>
  <button className='zwe'>خوانده نشده</button>
  </div>

</div>
<div className='sa'>
          </div>
           

        

        
          <div className='lock'>
            <LuClock/>
          <p className='tir'>15:50,3تیر</p>
          <p className='hamid'>حمید آفرینش فر</p>
          <img src="./48.png" alt="" className='iman' />
          </div>
          <p className='anj'>قالب مدیران یک قالب کاملا ایرانی و بومی است که تمام پروسه طراحی و پیاده سازی آن توسط متخصصان داخلی انجام شده است.</p>
        
      
   
<button className='test'>
  <CiTrash/>
</button>
          
<div className='sa'>
          </div>
          <div className='lock'>
            <LuClock/>
          <p className='tir'>15:55,3تیر</p>
          <p className='hamid'>بهزاد</p>
          <img src="./customer.png" alt="" className='iman' />
          </div>
          <p className='anj'> با سلام. آیا پلاگین های انتخاب تاریخ، شمسی شده اند؟</p>
        
      
   
<button className='test'>
  <CiTrash/>
</button>
          
<div className='sa'>
          </div>
          <div className='lock'>
            <LuClock/>
          <p className='tir'>16:10,3تیر</p>
          <p className='hamid'>حمید آفرینش فر</p>
          <img src="./48.png" alt="" className='iman' />
          </div>
          <p className='anj'>سلام. بله حتما. علاوه بر آن پلاگین ویرایش متن، نمایش نقشه ایران، نمودار ها و... هم فارسی و راستچین هستند.</p>
        
      
   
<button className='test'>
  <CiTrash/>
</button>
          
<div className='sa'>
          </div>

          
    </div>
   
</div>
<div className='daghb'>
<div className='asaasch2'>
    <div className='mx'>
    <button className='fx'>
        <div className='daa'>
<CiTrash/>
</div>
    </button>

    <p className='alxi'>تعداد کلیک ها</p>
    <div className='dsc'>
    <MdOutlineStackedLineChart/>
    </div>
    
    </div>
    <div className='sa'>
      </div>
   <Max/>
   
</div>
<div className='asaasch3'>
    <div className='mx'>
    <button className='fx'>
        <div className='daa'>
<CiTrash/>
</div>
    </button>

    <p className='alxo'>میزان فروش</p>
    <div className='dsc'>
    <FiPieChart/>
    </div>
    
    </div>
    <div className='sa'>
      </div>
     
    <Min/>
   
   
</div>
</div>
</div>

  )
}
