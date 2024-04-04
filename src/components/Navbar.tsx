import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar" role="navigation">
      <div>Bruce Graham</div>
      <div className="nav-link">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-link">
        <Link to="/About">About</Link>
      </div>
      <div className="nav-link">
        <Link to="/Resume">Resume</Link>
      </div>
      <div className="nav-link">
        <Link to="/Contact">Contact</Link>
      </div>
      <hr></hr>
    </nav>
  )
}

export default Navbar
