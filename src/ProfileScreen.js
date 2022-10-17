import React from 'react';
import "./ProfileScreen.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./PlansScreen.css"


function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
    <Nav />
    <div className="profileScreen__body">
    <h1>Edit Profile - DEMO Version</h1>
    <div className="profileScreen__info">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>

      <div className="profileScreen__details">
        <h2>{user.email}</h2>
        <div className="profileScreen__plans">
          <h3>Plans</h3>

            <div className="plansScreen__info">
              <div>
                  <h5>Premium-DEMO</h5>
                  <h6>4K HDMI</h6>
              </div>
        
              <button >Current Package</button>
              <br></br>
      
              <div>
                  <h5>Regular-DEMO</h5>     
                  <h6>1080p</h6>
                 
              </div>
              <button>Subscribe</button>
              <br></br>
              

              <div>
                  <h5>Basic-DEMO</h5>
                  <h6>720p</h6>
              </div>
           
              <button>Subscribe</button>


               </div>

    </div>
          <button onClick={() => auth.signOut()} className="profilescreen__signOut">Sign Out</button>
        </div>
      </div>
      </div>
     </div>
 
  )
}

export default ProfileScreen;