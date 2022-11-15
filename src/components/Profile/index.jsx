import './Profile.scss'
import LikedVideos from '../LikedVideos/index';
import { Link } from 'react-router-dom';
import { UserAuth } from "../Contexts/Authcontext";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
const Profile =()=>{
  const{logout}=UserAuth();
  const navigate=useNavigate()  
  const handlelogut=async()=>{
    try{
        await logout()
        navigate('/login')

    }catch(e){
console.log(e.message)
    }
}
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const photoURL = user.photoURL;
    console.log(user)
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    return(
      <div id="profile">
          <section className="h-100 gradient-custom-2">
<div className="container">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-12">
      <div className="card">
        <div className="rounded-top text-white d-flex flex-row b-cover" >
          <div className="ms-4 mt-5 d-flex flex-column  p-img " >
            <img src={'https://firebasestorage.googleapis.com/v0/b/kitopiaa.appspot.com/o/users%2Fktopia.png?alt=media&token=255b238b-2d1e-418c-837f-98d15705d951'}
              alt="Generic placeholder" className="img-fluid img-thumbnail mt-4 mb-2 h-100 "
              />
              
            <button type="button" className="btn btn-outline-dark mb-5 " data-mdb-ripple-color="dark"
               onClick={handlelogut}>
              log out
            </button>
            
          </div>
          <div className="ms-3 p-name" >
            <h5 className=''>{ displayName}</h5>
           
          </div>
        </div>
        
        <div className="card-body p-4 text-black mt-5 pt-5">
          {/* <div className="mb-5">
            <p className="lead fw-normal mb-1">About</p>
            <div className="p-4 p-about" >
              <p className="font-italic mb-1">age:</p>
              <p className="font-italic mb-1">Parent:</p>
              <p className="font-italic mb-0">Hobby:</p>
            </div>
          </div> */}
          <div className="d-flex justify-content-between align-items-center mb-4 mt-5 pt-5">
            <p className="lead fw-normal mb-0">Liked videos</p>
            <p className="mb-0"><Link to={'.gi./liked'} className="text-muted">Show all</Link></p>
          </div>
        <div className='row container'>
        <LikedVideos className='col-6'></LikedVideos>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

      </div>
  )
  } 
 else{
  navigate('/login')
 }
}
export default Profile