import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { BsChatLeftText } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";


// const bch=(event)=>{
// event.target.style.backgroundColor="blueviolet"
// event.target.style.height="3rem"
// event.target.style.width="9rem"
// event.target.style.color="#AAB3D9"
// event.target.style.borderRadius="0.5rem"
// }
// import SearchIcon from '@mui/icons-material/Search';
export default function Navbar


() {
//   let vc=document.querySelector(".coli")
//   const ses=()=>{
// vc.style.visibility="visible"
//   }
  return (
    <div className='coli'>
<div className='as'>
  <p className='ma'>خوش آمدید</p>
</div>
<div className='navi'>
{/* <SearchIcon/> */}
<div className='box'>
  <button className='saa'>
<IoIosSearch/>
</button>
<input type="text" placeholder="جستجو" className='sear' />
</div>
<div className='la'>
  <div className='xa'>
    <p className='nj'>حمید آفرینش فر</p>
    <p className='fa'>مدیر فنی</p>
    <div className='yi'>
      <div className='nz'>
        <p>دردسترس</p>
        <div className='cir'></div>
      </div>
    </div>

 
  </div>
  <img src="./48.png" alt="" className='dpal' />
</div>
<div className='nzl' >
  <Link to="/main">
  <p>صفحه اصلی</p>
  <span id='oa'>
<IoMdHome/>
</span>
  </Link>
</div>
<div className='nzl'>
<Link to="/edit-password">
  <p>تغییر رمز عبور</p>
  <span id='oa'>
<FaLock/>
  </span>
  </Link>
</div>
<div className='nzl'>
<Link to="/products">
  <p>محصولات</p>
  <span id="oa">
    <SlBasket/>
  </span>
  </Link>
</div>
<div className='nzl'>
<Link to="/chat">
  <p>چت</p>
  <span id="oa">
<BsChatLeftText/>
  </span>
  </Link>
</div>
<div className='nzl'>
<Link to="/edit-profile">
  <p className='vira'>ویرایش پروفایل</p>
  <span id="oas">
<FaEdit/>
  </span>
  </Link>
</div>
<div className='nzl'>
<Link to="/users">
  <p>کاربران</p>
  <span id="oa">
<FaUsers/>
  </span>
  </Link>
</div>
<div className='nzlf'>
<Link to="/takhfif">
  <p>تخفیفات</p>
  <span id="oa">
<CiDiscount1/>
  </span>
  </Link>
</div>
</div>

    </div>
  )
}
