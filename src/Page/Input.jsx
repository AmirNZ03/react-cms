import React from 'react'
import "./input.css"

export default function Input() {
  return ( 
    <div className='tie'>
    <div className='kx'>
      <div className='pqi'>
        <input type="file" className='cxc' placeholder='عکس محصول راوارد کنید'  />
        <input type="text" className='lpa' placeholder='موجودی محصول را بنویسید' />
      </div>
      <div className='pqil'>
        <input type="text" className='asx' placeholder='اسم محصول را بنویسید' />
        <input type="text" className='twe' placeholder='قیمت محصول را بنویسید' />
      </div>
    </div>
  </div>
  )
}
