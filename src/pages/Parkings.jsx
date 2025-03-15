import { db } from "../firebase";
import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";    
import { getDocs, doc, collection } from "firebase/firestore";

import LoadingScreen from "./loading";
import ParkingLotCard from "../ParkinLotCard";
import { Outlet } from "react-router-dom";



function Parkings(){

    const { user, logout } = useAuth();
    const [parkingLots, setParkingLots] = useState([]);
    const [loading, setLoading] = useState(false);


    

   const getParkings = async () => {	
        setLoading(true);
        
        const querySnapshot = await getDocs(collection(db, "parking-lots"));
    
        // Transform documents into an array including id
        const parkingData = querySnapshot.docs.map(doc => ({
            id: doc.id,  // Store document ID
            ...doc.data() // Store document data
        }));
    
        setParkingLots(parkingData); // Update state with new array
        
        console.log("Parkings ", parkingData);
        setLoading(false);
    };

    useEffect(() =>{
        getParkings()
    },[])

    return(
        <Outlet context={[parkingLots]}/>

    )

}


export default Parkings;