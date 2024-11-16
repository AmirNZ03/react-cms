import React, { useState } from 'react'
import "./order.css"
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import products from "./sk"
// import {AiOutlineDollarCircle} from "react-icons"

import { MdOutlinePaid } from "react-icons/md";
export default function Order() {
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
            تعداد
          </th>
          <th className='gev'>
            قیمت
          </th>
          <th className='esm'>
            اسم
          </th>
          <th className='aux'>
            عکس
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
setProductName(product.name)
setProductCount(product.price)
setProductPrice(product.count)
          }}>ویرایش</button>
         </td>
            <td className='count'>{product.count}</td>
            <td className='price'>{product.price}</td>
            <td className='name'>{product.name}</td>
            <td><img src={product.img} alt="" className='aks' /></td>
          
          
          </tr>
))}
        
        </tbody>
     
      
    
      </table>
      {isShowModal && <DeleteModal submitAction={deleteact} cancelAction={deleteClos} msg={"آیا از حذف اطمینان دارید؟"}/>}
    
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
