import React from 'react'
import './Pishkhan.css'
import Box from '../Main/Box/Box'
import Cunsom from '../Main/Cunsom/Cunsom'
import Map from '../Main/Map/Map'
import Farm from './Farm/Farm'


export default function Pishkhan() {
  return (
    <div className='ls'>
  
    <div className='lox'>
    <Box/>
  
    </div>
    <div className='lox'>
    <Cunsom/>
    </div>
    {/* <div className='cac'>
 <Map/>
    </div> */}
    <>

    <Farm/>
    </>
        </div>
        
  )
}
