import logoImage from '../assets/TTLogo.png'

const Navbar = (props) => {
    return (
      <div className="navbar">
        <img id="logo-img" src={logoImage} alt="logo" />
        <button type="button" id="logout-btn">Log out</button>
      </div>
    );
  }
  
export default Navbar;