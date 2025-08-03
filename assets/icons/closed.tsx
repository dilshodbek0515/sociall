import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const Closed = () => (
  <Svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
    <Path
      d='M11 1L1 11M1 1L11 11'
      stroke='#AAABAB'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)
export default Closed
