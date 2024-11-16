import React from 'react'
import "./Chart.css"
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export default function Chart() {
  return (
    <div className='kds'>
      <div className='qo'>
        <button className='ang'>
          <div className='up'>
<FaAngleUp/>
</div>
        </button>
        <p className='paf'>ویرایش پروفایل</p>
        <div className='edt'>
<FaRegEdit/>
</div>
        
      </div>
      <div className='line'>

      </div>
      <div className='cma'>
        <p className='xam'>مدارک احراز هویت شما در حال بررسی می باشد. لطفا تا مشخص شدن وضعیت صبور باشید.</p>
        {/* <div className='madz'>
<IoIosNotificationsOutline/>
</div> */}
      </div>
      <div className='atri'>
        <div>
          <div className='rim'>
            <div className='mir'>
            <p>نام کاربری</p>
            <p>مدیر ارشد</p>
            <div className='yi'>
      <div className='nz'>
        <p className='mai'>دردسترس</p>
        <div className='cir'></div>
      </div>
    </div>
            </div>
        
    <img src="./48.png" alt="" className='hd' />
          </div>
          <input type="file" name="" id="" className='lasq' placeholder='برای آپلود کلیک کنید' />
          
          <div></div>
          <div className='line'>

</div>
          <div className='mxz'>
            <div className='alex'>
              <p className='lf'>نام خانوادگی</p>
            <input type="text" className='paqs' />
            </div>
            <div className='alex'>
              <p className='lfn'>نام</p>
            <input type="text" className='paqsx'  />
            </div>
          </div>
          <div className='alex'>
            <p className='lfl'>موبایل</p>
            <input type="text" className='lasq' placeholder='09---------' />
          </div>
          <div className='alex'>
            <p className='lfl'>ایمیل</p>
            <input type="text" className='lasq' />
          </div>
          <div className='alex'>
            <p className='lfl'>شماره شبا</p>
            <input type="text" className='lasq' placeholder='IR----------' />
          </div>
          <div className='alex'>
            <p className='lfl'>شماره کارت</p>
            <input type="text" className='lasq' />
          </div>
          <div className='mxz'>
          <div className='alex'>
            <p className='lf'>شهر</p>
           <select name="" id="" className='paqs' >
            <option value="">زنجان</option>
            <option value="">ابهر</option>
            <option value="">خرمدره</option>
            <option value="">خدابنده</option>
           </select>
          </div>
          <div className='alex'>
            <p className='lfn'>استان</p>
           <select name="" id="" className='paqsx' >
            <option value="">زنجان</option>
            <option value="">تهران</option>
            <option value="">فارس</option>
            <option value="">یزد</option>
           </select>
          </div>
          
          </div>
         
          <div id='ali'>
  <button className='baz'>بازگشت</button>
  <button className='zah'>ذخیره</button>
</div>
          
        </div>
      </div>
    </div>
  )
}
