import { data, Navigate, Outlet, useNavigate} from "react-router-dom"
import NavBar from "../Navbar"
import { getDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../AuthContext";


function AdminDash(){

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const [userData, setUserData] = useState(null)

    const fetchUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setUserData(userData)
        return userDoc.data(); // Return user details
      } else {
        console.log("No user data found!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };



  
  useEffect(() => {
    if (user) {
      const fetchUser = async () => {
      const data = await fetchUserData(user.uid);
      setUserData(data);
      };
      fetchUser()
    }

    
  }, []);
  

    return(

        

        <div className="admin-page">
            
            <NavBar/>


            <div className="main-app-cont">
                <div className="main-app">

                    <Outlet context={[userData]}></Outlet>


                </div>
            </div>

        </div>




    )

}

export default AdminDash
