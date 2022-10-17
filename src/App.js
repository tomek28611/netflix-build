import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from "./HomeScreen";
import {
BrowserRouter as Router,
Routes,
Switch,
Route
} from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {

        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
 
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
      <Routes>
           <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/" element={<HomeScreen />} />
      </Routes>
        )} 
      </Router>

    </div>
  );
}

export default App;
