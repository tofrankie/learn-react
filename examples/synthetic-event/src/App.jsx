import { useEffect, useRef } from 'react'
import './App.css'

export default function App() {
  const btnRef = useRef(null)

  useEffect(() => {
    const handler = () => {
      console.log('原生冒泡事件')
    }
    btnRef.current.addEventListener('click', handler)

    return () => {
      btnRef.current.removeEventListener('click', handler)
    }
  }, [])

  const handleClick = () => {
    console.log('合成冒泡事件')
  }

  const handleCaptureClick = () => {
    console.log('合成捕获事件')
  }

  return (
    <button ref={btnRef} onClick={handleClick} onClickCapture={handleCaptureClick}>
      点击
    </button>
  )
}

// React 19: 合成捕获事件 → 原生冒泡事件 → 合成冒泡事件 ✅ 符合原生事件流
// React 18: 合成捕获事件 → 原生冒泡事件 → 合成冒泡事件 ✅ 符合原生事件流
// React 17: 合成捕获事件 → 原生冒泡事件 → 合成冒泡事件 ✅ 符合原生事件流
// React 16: 原生冒泡事件 → 合成捕获事件 → 合成冒泡事件 ❌ 不符合原生事件流
