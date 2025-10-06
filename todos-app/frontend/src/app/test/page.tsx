'use client'

import Magnet from '../ui/magnet'
import StarButton from '../ui/starButton'
import TextType from '../ui/textType'
import './style.css'

export default function Test () {

  return (
    <div className='styles'>
      <Magnet padding={50} disabled={false} magnetStrength={5}>
        <StarButton speed='5s' color='cyan'>
          Get Gulp
        </StarButton>
      </Magnet>
      {/* <TextType
        text={["привет босс", "исправьте мой маккк", "отдайте деньги ментат"]}
        typingSpeed={100}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      /> */}
    </div>
  )
}
