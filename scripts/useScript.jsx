import { useEffect } from 'react'

const UseScript = ({ src }) => {

  useEffect(() => {
    src.map((scriptSrc) => {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true

      if (src[11] === "assets/js/main.js") {
        setTimeout(() => {
          document.body.appendChild(script)
        }, 1000)
      } else {
        document.body.appendChild(script)
      }

      return () => {
        document.body.removeChild(script)
      }
    })
  }, [src])

  return null
}

export default UseScript;