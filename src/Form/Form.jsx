import React from 'react'
import "./Form.css"
import { FaAngleUp } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { FaLock } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

export default function Form() {
  return (
    <div className='matmx'>
      <div className='qo'>
        <button className='ang'>
          <div className='up'>
<FaAngleUp/>
</div>
        </button>
        <p className='paf'>تغییر رمز عبور</p>
        <div className='edt'>
<FaLock/>
</div>
        
      </div>
      <div className='line'>

</div>
<div className='cmaz'>
        <p className='xam'>استفاده از کاراکترهای خاص جهت حفظ موارد امنیتی توصیه می گردد. همچنین رمز ورودی باید دست کم 5 کاراکتر باشد.</p>
        {/* <div className='madz'>
<IoIosNotificationsOutline/>
</div> */}
      </div>
<div className='xpa'>
<div className='marg'>
  <span id='cnz'>
<IoIosLock/>
  </span>
</div>
<div className='xpa'>
<p className='lfl'>رمز عبور پیشین</p>
<input type="password" className='lasq' />
</div>
<div className='xpa'>
<p className='lfl'>رمز عبور جدید</p>
<input type="password" className='lasq' />
</div>
<div id='ali'>
  <button className='baz'>بازگشت</button>
  <button className='zah'>ذخیره</button>
</div>
</div>

      </div>
  )
}
