import QuickAccessBtns from "../quick-access-btns"
import { useOutletContext } from "react-router-dom"

function Dashboard(){

    const [userData] = useOutletContext()

    return(

        <div className="dashboard">

            <div className="welcome-msg"><h3>Welcome, {userData ? userData.fullName : "Loading..."}</h3></div>

            <hr></hr>

                <div className="quick-parking-lot-info-cont">

                </div>



            <hr></hr>

            <div className="quick-access-cont">
            
            <h4>Quick access links</h4>
            <div className="quick-access">

                <QuickAccessBtns icon={"🅿️"} desc={"Your Lot"} />             
                <QuickAccessBtns icon={"🔃"} desc={"Parking History"} />             
                <QuickAccessBtns icon={"💵"} desc={"Payments"} />             
                <QuickAccessBtns icon={"📄"} desc={"Logs"} />             
                <QuickAccessBtns icon={"⚠️"} desc={"Alerts"} />             
                <QuickAccessBtns icon={"🙍🏽‍♂️"} desc={"Users"} />             

                
            </div>
        </div>
        </div>

    )

}

export default Dashboard