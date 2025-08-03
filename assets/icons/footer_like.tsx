import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const Footer_like_icon = ({ colors, activePage }: any) => (
  <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <Path
      d='M12.6201 20.8096C12.2801 20.9296 11.7201 20.9296 11.3801 20.8096C8.48012 19.8196 2.00012 15.6896 2.00012 8.68961C2.00012 5.59961 4.49012 3.09961 7.56012 3.09961C9.38012 3.09961 10.9901 3.97961 12.0001 5.33961C13.0101 3.97961 14.6301 3.09961 16.4401 3.09961C19.5101 3.09961 22.0001 5.59961 22.0001 8.68961C22.0001 15.6896 15.5201 19.8196 12.6201 20.8096Z'
      stroke={activePage === 'Likes' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)
export default Footer_like_icon
