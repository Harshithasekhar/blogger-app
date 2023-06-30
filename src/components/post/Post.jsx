import './post.css'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg'
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
      alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            <Link to='./single' className='link'>Lorem, ipsum dolor sit amet</Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam porro voluptatum itaque, 
      excepturi sunt ab, ipsa eius tenetur optio accusamus facilis distinctio esse possimus 
      facere error explicabo sapiente amet inciduntLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam porro voluptatum itaque, 
      excepturi sunt ab, ipsa eius tenetur optio accusamus facilis distinctio esse possimus 
      facere error explicabo sapiente amet inciduntLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam porro voluptatum itaque, 
      excepturi sunt ab, ipsa eius tenetur optio accusamus facilis distinctio esse possimus 
      facere error explicabo sapiente amet inciduntLorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam porro voluptatum itaque, 
      excepturi sunt ab, ipsa eius tenetur optio accusamus facilis distinctio esse possimus 
      facere error explicabo sapiente amet incidunt.</p>
    </div>
  )
}

export default Post
