import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePst from '../../components/singlePost/SinglePst'


const Single = () => {
  return (
    <div className='single'>
       <SinglePst/>
       <Sidebar/>
    </div>
  )
}

export default Single
