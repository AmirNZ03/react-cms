import React, { useEffect, useState } from 'react'
import "./Element.css"
import products from "./sk";
import DeleteModal from './DeleteModal';
import Input from './Input';
import Order from './Order';

export default function Element() {

  return (

   
    
    <div className='maxj'>
         
   <Input/>
    <Order/>
    {/* <DeleteModal/> */}
    </div>
  
//     useEffect(()=>{
//       fetch("https://jsonplaceholder.typicode.com/comments")
//       .then(res=>res.json())
//       .then((datas)=>{
//         datas.map((data)=>{
// <p>{data.name}</p>
       
      // })
      // })
// <table>
// <tr>
//   <th>id</th>
//   <th>name</th>
//   <p>body</p>
// </tr>
// <tr>
//   <td>{data.id}</td>
//   <td>{data.name}</td>
//   <td>{data.body}</td>
// </tr>


// </table>

    //     })

    //   })
    // })


     

  )
}
