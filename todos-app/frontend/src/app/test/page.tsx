'use client'

import Squares from '../ui/squares'
import './style.css'

export default function Test () {

  return (
    <div className='styles'>
      <Squares
        speed={0.2} 
        squareSize={75}
        direction='diagonal'
        borderColor='#ffffff3d'
        hoverFillColor='#2222229d'
        />
      
    </div>
  )
}
