import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <i className="fa-solid fa-circle-plus"></i>
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <i className="fa-regular fa-square-check"></i>
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <i className="fa-regular fa-square-check"></i>
          <p>orders Items</p>
        </NavLink>
        
      </div>
    </div>
  )
}

export default Sidebar
