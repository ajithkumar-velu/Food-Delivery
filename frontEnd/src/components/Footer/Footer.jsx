import './footer.css'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>Agri Equip.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus placeat corporis pariatur corrupti maxime itaque. Quaerat blanditiis eveniet illo temporibus.</p>
            <div className="footer-social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            </div>
        </div>
        <div className="footer-content-left">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-left">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>  
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyrught 2024 © Tomoto.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
