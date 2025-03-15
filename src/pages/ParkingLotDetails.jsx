import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Cards from "../Cards"
import { useNavigate } from "react-router-dom"
import LoadingScreen from "./loading"
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore"; 

function ParkingLotDetails(props){

    const navigate = useNavigate()
    const { pid } = useParams()
    const [bookings, setBookings] = useState([])

    const [parkingLotData, setParkingLotData] = useState(null)

    console.log(pid)

    const fetchParkingData = async (pid) => {
      try {
        const parkingDoc = await getDoc(doc(db, "parking-lots", pid));
        if (parkingDoc.exists()) {
          console.log("Parking lot data found!");
          setParkingLotData(parkingDoc.data());
          return parkingDoc.data(); // Return user details
        } else {
          alert("No such parking lot data found!");
          navigate("/home/parkings/find")
          return null;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    useEffect(() => {
      if (pid) {
        const getParkingData = async () => {
          await fetchParkingData(pid);
        }
        getParkingData()
        console.log("Lot data :", parkingLotData)
      }
    }, [])

      

    return (

        parkingLotData === null ? <LoadingScreen /> :

        <div className="ind-parking-lot-details-cont">
          
          <h3 className="parking-name">{parkingLotData.Name}</h3>
          <p className="parking-address">{parkingLotData.address}</p>

          <hr></hr>

          <div className="rating-veh-types-cont">

            <h5>Ratings(123) ⭐4.7</h5>
            <div className="veh-types">

              {
                parkingLotData.vehicleTypes.map((vehType, index) => {
                  return (
                    <div key={index} className="veh-type">{vehType}</div>
                  )
                })
              }

            </div>

          </div>

          <hr></hr>

          <div className="crnt-stats">
            <Cards cardName = {"Total Lots"} cardVal={parkingLotData.capacity} />
            <Cards cardName = {"Lots Available"} cardVal={"00"} />
            <Cards cardName = {"Registerd users"} cardVal={"00"} />
          </div>

          <div className="lot-pricing">
            <h4 className="sub-head">Lot Pricing</h4>
            <div className="pricing">
              <div className="pricing-card">
                <h5>2-Wheeler</h5>
                <p>₹20/hr</p>
              </div>
              <div className="pricing-card">
                <h5>4-Wheeler</h5>
                <p>₹40/hr</p>
              </div>
            </div>
          </div>

 
          {/* <div className="book-cont">
            <button className="book-btn">Book</button>
          </div> */}
          
        </div>
      );

}

export default ParkingLotDetails