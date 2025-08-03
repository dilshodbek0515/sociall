import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const Footer_search_icon = ({ colors, activePage }: any) => (
  <Svg width='24' height='25' viewBox='0 0 24 25' fill='none'>
    <Path
      d='M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z'
      stroke={activePage === 'Search' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <Path
      d='M22 22.5L20 20.5'
      stroke={activePage === 'Search' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)
export default Footer_search_icon
