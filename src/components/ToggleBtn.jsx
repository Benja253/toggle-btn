import { useRef } from "react"

const ToggleBtn = () => {

  const circle = useRef()

  const handleClick = () => {
    circle.current.classList.toggle('right')
    
  }

  return (
    <div onClick={handleClick} className="toggle-container">
      <div ref={circle} className="toggle-circle"></div>
    </div>
  )
}

export default ToggleBtn