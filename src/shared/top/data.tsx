import { MdLocationOn } from 'react-icons/md'
import { FaTruck, FaPhoneAlt } from 'react-icons/fa'
import { BiLogIn, BiLogOut } from 'react-icons/bi'

export const navData: {
  name: string
  icon: any
  id: number
}[] = [
  {
    name: 'Select Location',
    icon: <MdLocationOn />,
    id: 1
  },
  {
    name: 'Track Order',
    icon: <FaTruck />,
    id: 2
  },
  {
    name: '+234 700-288-6243',
    icon: <FaPhoneAlt />,
    id: 3
  },
  {
    name: 'Login',
    icon: <BiLogIn />,
    id: 4
  },
  {
    name: 'Sign Up',
    icon: <BiLogOut />,
    id: 5
  }
]
