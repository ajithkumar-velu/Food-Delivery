import { useContext, useState } from "react"
import './Navbar.css'
import PropTypes from "prop-types"
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { assert } from "../../assets/assets";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token")
    setToken("");
    navigate("/")

  }

  return (
    <div className="navbar">
      <Link to='/'><div className="logo">AGRI EQUIP.</div></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("equipments")} className={menu === "equipments" ? "active" : ""}>Equipments</a>
        <a href="#" onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        
        <img src={assert.search} className="img-icons" alt="" />
        <div className="navbar-basket">
          <Link to='/cart'><img src={assert.bag_icon} className="img-icons" alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button> :
          <div className="navbar-profile" >
            <img className="user" src={assert.profile} alt="" />
            <ul className="nav-profile-dropdown" >
              <li onClick={()=>navigate('/myorders')}><img className="img-icons" src={assert.bag_icon} alt="" /><p>Order</p></li>
              <hr />
              <li onClick={logout} ><img src={assert.logout} /><p>Logout</p></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // Define category prop as required string
};

export default Navbar
