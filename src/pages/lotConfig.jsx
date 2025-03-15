import { use, useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"

function LotConfig(){

    const navigate = useNavigate()

    const [userData] = useOutletContext()

    useEffect(()=>{
        if(userData.parkingLotID==null){
            navigate("/admin/new-lot")
            console.log("No Parking Lot ID found")
        }
    },[])


    return(
        <div className="lot-config-cont">
            
        </div>
    )


}

export default LotConfig