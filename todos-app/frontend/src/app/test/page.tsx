import Magnet from '../ui/Magnet'
import ShapeBlur from '../ui/shapeBlur'
import './style.css'

export default function Test () {
  return (
    <div className='styles'>
   
        <ShapeBlur
          variation={0}
          pixelRatioProp={0.2}
          shapeSize={0.8}
          roundness={0.2}
          borderSize={0.005}
          circleSize={0.05}
          circleEdge={0.5}
        />
    </div>
  )
}