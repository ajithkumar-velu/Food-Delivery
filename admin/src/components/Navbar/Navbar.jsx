import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>AGRI EQUIP</h1>
      <img className='profile' src={assets.img1} alt='' />
      
    </div>
  )
}

export default Navbar
