import { db } from "../firebase";
import { useAuth } from "../AuthContext";
import { useEffect, useState } from "react";    
import { getDocs, doc, collection } from "firebase/firestore";

import LoadingScreen from "./loading";
import ParkingLotCard from "../ParkinLotCard";
import { useOutletContext } from "react-router-dom";

function FindParking(){

    const [parkingLots] = useOutletContext()


    const { user, logout } = useAuth();
    // const [parkingLots, setParkingLots] = useState([]);
    const [loading, setLoading] = useState(false);

    // const getParkings = async () => {	
    //     setLoading(true);
        
    //     const querySnapshot = await getDocs(collection(db, "parking-lots"));
    
    //     // Transform documents into an array including id
    //     const parkingData = querySnapshot.docs.map(doc => ({
    //         id: doc.id,  // Store document ID
    //         ...doc.data() // Store document data
    //     }));
    
    //     setParkingLots(parkingData); // Update state with new array
        
    //     console.log("Parkings ", parkingData);
    //     setLoading(false);
    // };

    // useEffect(() =>{
    //     getParkings()
    // },[])

    // useEffect(() => {
    //     while(parkingLots.length === 0){

    //     }
    //     console.log("Pale :",parkingLots) 
    // },[])

    return(
        <div className="find-parking-cont">
            
            <h4 className="sub-head">Find Parking spaces:</h4>



            <div className="parking-filters">
                {/* <h4 className="sub-head">Filters:</h4> */}
                <select className="parking-lot-select">
                    <option value="loca">Select Location</option>
                    <option value="location1">Amrita AB1 Parking</option>
                    <option value="location2">Amrita AB2 Parking</option>
                    <option value="location3">Amrita AB3 Parking</option>
                    <option value="location4">Amrita ASB Parking</option>
                </select>

                <select className="parking-lot-select">
                    <option value="price-sel">Select Price</option>
                    <option value="low">Low</option>
                    <option value="High">High</option>
                </select>

                <select className="parking-lot-select">
                    <option value="any">Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>

                </select>

                <button className="search-btn">Apply</button>
            </div>

            <hr />

            <div className="parking-lot-cards-cont">
                <div>
            { loading ? "Loading..." : 
    
                // <div>
                // <ParkingLotCard key={2} Name={"Hello Parking"} capacity={30}/>
                // <ParkingLotCard key={3} Name={"Hello Parking"} capacity={30}/>
                // <ParkingLotCard key={4} Name={"Hello Parking"} capacity={30}/>
                // <ParkingLotCard key={5} Name={"Hello Parking"} capacity={30}/>
                // <ParkingLotCard key={6} Name={"Hello Parking"} capacity={30}/>
                // <ParkingLotCard key={7} Name={"Hello Parking"} capacity={30}/>
                // <ParkingLotCard key={8} Name={"Hello Parking"} capacity={30}/>

                // </div>
                
                parkingLots.map((parkingLot, index) => {
                    return(
                        console.log(parkingLot),
                        <ParkingLotCard key={index} data={parkingLot}/>
                    )
                })
            }
            </div>
            </div>
            
        

        </div>

    )

}


export default FindParking;