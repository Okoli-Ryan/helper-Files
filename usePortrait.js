//Hook for orientation in react native

import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

function usePortrait() {
  const [portrait, setPortrait] = useState(null)

  useEffect(() => {
    function updateState() {
      const { height, width } = Dimensions.get('window')
      if (width < height) {
        setPortrait(true)
      } else {
        setPortrait(false)
      }
    }
    updateState()
    Dimensions.addEventListener('change', updateState)
    return () => Dimensions.removeEventListener('change', updateState)
  }, [])

  return portrait
}

export default usePortrait
