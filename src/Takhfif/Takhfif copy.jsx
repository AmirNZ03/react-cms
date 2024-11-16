import React, { useState } from 'react'
import "./Takhfif.css"
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import products from "./zk"
// import {AiOutlineDollarCircle} from "react-icons"

import { MdOutlinePaid } from "react-icons/md";
export default function Takhfif() {
    const[isShowModal,setIsShowModal]=useState(false)
    const[isShowEditModal,setIsShowEditModal]=useState(false)
    const[productID,setProductID]=useState(null)
    const[productName,setProductName]=useState(null)
    const[productPrice,setProductPrice]=useState(null)
    const[productCount,setProductCount]=useState(null)
    // const[isShowDet,setIsShowDet]=useState(false)
    const deleteact=()=>{
        console.log("بسته");
        
        setIsShowModal(false)
   
        
    }
    const deleteClos=()=>{
        console.log("باز");
        
        setIsShowModal(false)
    }
    const update=(event)=>{
      event.preventDefault();
      console.log("ویرایش");
   
    }

  return (
    <div>
        <div className="adg">
    
    <table className='sca'>
     

        <tr className='msa'>
          <th className='ked'>
            شماره تلفن
          </th>
          <th className='gev'>
            رمز عبور
          </th>
          <th className='esm'>
            نام کاربری
          </th>
          <th className='aux'>
            نام و نام خانوادگی
          </th>
        </tr>
 <tbody>
{products.map((product)=>(
  <tr key={product.id}>
          
          <td>
          <button className='hazf' onClick={()=>{setIsShowModal(true)
            setProductID(product.id)
          }}>حذف</button>
          <button className='edir' onClick={()=>{setIsShowEditModal(true)
setProductName(product.full)
setProductCount(product.username)
setProductPrice(product.password)
          }}>ویرایش</button>
         </td>
            <td className='count'>{product.phone}</td>
            <td className='price'>{product.password}</td>
            <td className='name'>{product.username}</td>
            <td className='aksx'>{product.full}</td>
          
          
          </tr>
))}
        
        </tbody>
     
      
    
      </table>
      {isShowModal && <DeleteModal submitAction={deleteact} cancelAction={deleteClos}/>}
    { isShowEditModal && <EditModal
      onClose={()=>setIsShowEditModal(false)}
      onSubmit={update}
      >
<div className='edit-product'>
  <span>
<MdOutlinePaid/>
  </span>
  <input type="text" placeholder='عنوان جدید را وارد کنید' className='edit-inp' value={productName}/>
</div>
<div className='edit-product'>
  <span>
  <MdOutlinePaid/>
  </span>
  <input type="text" placeholder='موجودی جدید را وارد کنید' className='edit-inp' value={productCount}/>
</div>
<div className='edit-product'>
  <span>
  <MdOutlinePaid/>
  </span>
  <input type="text" placeholder='قیمت جدید را وارد کنید' className='edit-inp' value={productPrice} onChange={(event)=>
    setProductPrice(event.target.value)
  }/>
</div>
</EditModal>}
 
    </div>
    </div>
  )
}
