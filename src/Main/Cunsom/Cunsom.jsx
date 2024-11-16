import React from 'react'
import "./Cunsom.css"
import infor from "./box"
export default function Cunsom() {
  return (
    infor.map((user)=>(
<div className='fax' key={user.id}>
    <div className={user.clas}>
    <p className='text'>{user.title}</p>
    </div>
<p className='jn'>{user.sub}</p>
    </div>
    ))

  )
}
