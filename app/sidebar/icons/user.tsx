import Svg, { Path } from 'react-native-svg'

const User = () => (
  <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <Path
      d='M12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5Z'
      stroke='#242323'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <Path
      d='M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14Z'
      stroke='#242323'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)
export default User
