import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label>Username</label>
        <input type="text" className='registerInput' placeholder='Enter Your username...'/>
        <label>Email</label>
        <input type="text" className='registerInput' placeholder='Enter Your email...'/>
        <label>Password</label>
        <input type="password" className='registerInput' placeholder='Enter Your password'/>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
      <Link to='/login' className='link'>Login</Link>
      </button>
    </div>
  )
}

export default Register
