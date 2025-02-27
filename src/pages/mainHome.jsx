import QuickAccessBtns from "../quick-access-btns"
import { useOutletContext } from "react-router-dom"

function MainHome(){

    const [userData] = useOutletContext()

    return(

        <div className="main-home-cont">
            
            <div className="welcome-msg"><h3>Welcome, {userData ? userData.fullName : "Loading..."}</h3></div>

            <hr></hr>
        
            <div className="quick-access-cont">
            
                <h4>Quick access links</h4>
                <div className="quick-access">

                    <QuickAccessBtns icon={"❓"} desc={"Find Parking"} />             
                    <QuickAccessBtns icon={"🔃"} desc={"Parking History"} />             
                    <QuickAccessBtns icon={"💵"} desc={"Payments"} />             
                    <QuickAccessBtns icon={"📄"} desc={"Reservations"} />             
                    <QuickAccessBtns icon={"⚠️"} desc={"Alerts"} />             
                    <QuickAccessBtns icon={"🙍🏽‍♂️"} desc={"Profile"} />             

                    
                </div>
            </div>

        </div>

    )

}

export default MainHome