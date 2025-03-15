import { use, useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"
import { collection, addDoc, doc} from "firebase/firestore"; 
import { db } from "../firebase";
import { useState } from "react";

function NewLotConfig(){

    const navigate = useNavigate()

    const [userData] = useOutletContext()
    const [parkingLotID, setParkingLotID] = useState(null)
    const [allowedVehicles, setAllowedVehicles] = useState({"Car":false,"Bike":false,"Bus":false,"Truck":false,"Mini-Truck":false})



    const handleChckChange = (blk)=>{
        const temp = document.querySelector("."+blk)
        if(temp.style.backgroundColor == "green"){
            temp.style.backgroundColor = "var(--main-bg-color-dark)"
        }else{
            temp.style.backgroundColor = "green"
        }
        console.log(allowedVehicles)
        if(blk=="Car"){
            setAllowedVehicles({...allowedVehicles,Car:!allowedVehicles.Car})
        }else if(blk=="Bike"){
            setAllowedVehicles({...allowedVehicles,Bike:!allowedVehicles.Bike})
        }else if(blk=="Bus"){
            setAllowedVehicles({...allowedVehicles,Bus:!allowedVehicles.Bus})
        }else if(blk=="Truck"){
            setAllowedVehicles({...allowedVehicles,Truck:!allowedVehicles.Truck})
        }else if(blk=="Mini-Truck"){
            setAllowedVehicles({...allowedVehicles,MiniTruck:!allowedVehicles.MiniTruck})
        }
    }

    const createParkingLot = async ()=>{
        const docRef = await addDoc(collection(db, "parking-lots"), {

          });

        setParkingLotID(docRef.id)
        return docRef.id
    }

    useEffect(()=>{
        if(userData && userData.parkingLotID){
            navigate("admin/lot")
        }
    },[])


    return(
        <div className="new-lot-config-cont">
            
            <h4>Create a new Parking Lot</h4>


            <hr></hr>


            <form className="new-parking-lot-form">

                <div className="form-group">
                    <h5>Enter your Parking Lots Name:</h5>
                    <input className="form-inp" type="text" placeholder="Name" />
                </div>

                <div className="form-group">
                    <h5>Enter your Parking Lots Address:</h5>
                    <input className="form-inp" type="text" placeholder="Address" />
                </div>

                <div className="form-group">
                    <h5>Enter your Parking Lots Capacity:</h5>
                    <input className="form-inp" type="number" placeholder="Capacity" />
                </div>

                <div className="form-group">
                    <h5>Parking Lot open Timings:</h5>
                    <div className="time-inp-cont">
                        <input className="form-inp" type="number"  placeholder="Open from 6:00am as 600"/>
                        <input className="form-inp" type="number"  placeholder="Closes at 10:00pm as 2000"/>
                    </div>
                </div>

                <div className="form-group">
                    
                    <h5>Allowed Vehicles:</h5>
                    {/* <div className="allowed-vehicles-cont">
                        <label htmlFor="vehicle-type-car">
                        <input name="vehicle-type" id="vehicle-type-car" type="checkbox" value={"Car"} onChange={(e)=>handleChckChange(e)}/> 
                        Cars</label>
                        <label htmlFor="vehicle-type-bike">
                        <input name="vehicle-type" id="vehicle-type-bike" type="checkbox" value={"Motorcycle"} onChange={(e)=>handleChckChange(e)} />
                        Motorcycle</label>
                        <label htmlFor="vehicle-type-car">
                        <input name="vehicle-type" id="vehicle-type-bus" type="checkbox" value={"Bus"} onChange={(e)=>handleChckChange(e)}/> 
                        Bus</label>
                        <label htmlFor="vehicle-type-car">
                        <input name="vehicle-type" id="vehicle-type-truck" type="checkbox" value={"Truck"} onChange={(e)=>handleChckChange(e)}/> 
                        Trucks</label>
                        <label htmlFor="vehicle-type-car">
                        <input name="vehicle-type" id="vehicle-type-mini-truck" type="checkbox" value={"Mini-Trucks"} onChange={(e)=>handleChckChange(e)}/> 
                        Mini-Trucks</label>
                    </div> */}

                    <div className="allowed-vehicles-cont">
                        <div className="allowed-vehicle Car" onClick={()=>handleChckChange("Car")}>
                            Car
                        </div>
                        <div className="allowed-vehicle Bike" onClick={()=>handleChckChange("Bike")}>
                            Bike
                        </div>
                        <div className="allowed-vehicle Truck" onClick={()=>handleChckChange("Truck")} >
                            Truck
                        </div>
                        <div className="allowed-vehicle Bus" onClick={()=>handleChckChange("Bus")}>
                            Bus
                        </div>
                        <div className="allowed-vehicle Mini-Truck" onClick={()=>handleChckChange("Mini-Truck")} >
                            Mini-Truck
                        </div>
                    </div>

                </div>

            </form>

        </div>
    )


}

export default NewLotConfig