import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const Footer_friends_icon = ({ colors, activePage }: any) => (
  <Svg width='25' height='25' viewBox='0 0 25 25' fill='none'>
    <Path
      d='M18.5 7.66C18.44 7.65 18.37 7.65 18.31 7.66C16.93 7.61 15.83 6.48 15.83 5.08C15.83 3.65 16.98 2.5 18.41 2.5C19.84 2.5 20.99 3.66 20.99 5.08C20.98 6.48 19.88 7.61 18.5 7.66Z'
      stroke={activePage === 'Friends' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <Path
      d='M17.47 14.9402C18.84 15.1702 20.35 14.9302 21.41 14.2202C22.82 13.2802 22.82 11.7402 21.41 10.8002C20.34 10.0902 18.81 9.85016 17.44 10.0902'
      stroke={activePage === 'Friends' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <Path
      d='M6.46998 7.66C6.52998 7.65 6.59998 7.65 6.65998 7.66C8.03998 7.61 9.13998 6.48 9.13998 5.08C9.13998 3.65 7.98998 2.5 6.55998 2.5C5.12998 2.5 3.97998 3.66 3.97998 5.08C3.98998 6.48 5.08998 7.61 6.46998 7.66Z'
      stroke={activePage === 'Friends' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <Path
      d='M7.5 14.9402C6.13 15.1702 4.62 14.9302 3.56 14.2202C2.15 13.2802 2.15 11.7402 3.56 10.8002C4.63 10.0902 6.16 9.85016 7.53 10.0902'
      stroke={activePage === 'Friends' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <Path
      d='M12.5 15.1297C12.44 15.1197 12.37 15.1197 12.31 15.1297C10.93 15.0797 9.82996 13.9497 9.82996 12.5497C9.82996 11.1197 10.98 9.96973 12.41 9.96973C13.84 9.96973 14.99 11.1297 14.99 12.5497C14.98 13.9497 13.88 15.0897 12.5 15.1297Z'
      stroke={activePage === 'Friends' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <Path
      d='M9.58997 18.2794C8.17997 19.2194 8.17997 20.7594 9.58997 21.6994C11.19 22.7694 13.81 22.7694 15.41 21.6994C16.82 20.7594 16.82 19.2194 15.41 18.2794C13.82 17.2194 11.19 17.2194 9.58997 18.2794Z'
      stroke={activePage === 'Friends' ? colors : '#9DB2CE'}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)
export default Footer_friends_icon
