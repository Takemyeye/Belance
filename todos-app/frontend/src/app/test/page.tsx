'use client'

import TextType from '../ui/textType'
import './style.css'

export default function Test () {

  return (
    <div className='styles'>
      <TextType
        text={["привет босс", "исправьте мой маккк", "отдайте деньги ментат"]}
        typingSpeed={100}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </div>
  )
}
