import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form  className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img 
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" />
                <div>
                <label htmlFor="fileInput">
                <i className=" settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                </div>
            </div>
            
            <label>Username</label>
            <input type="text"  placeholder='harshi'/>
            <label>Email</label>
            <input type="email"  placeholder='harshi@gmail.com'/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Settings
