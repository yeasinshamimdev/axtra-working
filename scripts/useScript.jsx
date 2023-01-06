import { useEffect } from 'react'

const UseScript = ({ src }) => {
  useEffect(() => {
    src.map((scriptSrc) => {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    })
  }, [src])

  return null
}

export default UseScript;