import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user=false
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className='topListItem' >
              <Link to='/' className='link'>HOME</Link></li>
            <li className='topListItem'><Link to='/sidebar' className='link'>ABOUT</Link></li>
            <li className='topListItem'><Link to='/' className='link'>CONTACT</Link></li>
            <li className='topListItem'><Link to='/write' className='link'>WRITE</Link></li>
            <li className='topListItem'>
              {user && 'LOGOUT'}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ?(
            <img className='topImage'
        
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile-pic" />
    
          ):(
            <ul className='topList'>
              <li className="topListItem">
              <Link className= 'link' to ='/login' id='list'>
              Login
              </Link>
              <Link className='link' to ='/register'>
              Register
              </Link>
              </li>
            </ul>
          )
        }
        

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar
