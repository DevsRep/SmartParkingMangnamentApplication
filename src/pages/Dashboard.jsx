import QuickAccessBtns from "../quick-access-btns"
import { useOutletContext } from "react-router-dom"
import Cards from "../Cards"
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import WorkLogCards from "../WorkLogCards"

function Dashboard(){

    const navigate = useNavigate();
    const [userData] = useOutletContext()

    useEffect(()=>{
        // document.querySelector(".dashboard").style.filter="blur(10px)"
        const validateAdmin = async ()=>{
        // console.log("Validating admin")
        // console.log(userData)
        if(userData && !userData.isAdmin){
            alert("You dont have admin access :|");
            navigate("/home")
        }
        }

        validateAdmin()
    })

    return(

        <div className="dashboard">

            <div className="welcome-msg"><h3>Welcome, {userData ? userData.fullName : "Loading..."}</h3></div>

            <hr></hr>
            <h4>Admin Dashboard</h4>
                <div className="quick-parking-lot-info-cont">

                    
                    <Cards cardName = {"Lots Available"} cardVal={"00"} />
                    <Cards cardName = {"Lots Occupied"} cardVal={"00"} />
                    <Cards cardName = {"Reservations"} cardVal={"00"} />
                    <Cards cardName = {"Current Demand"} cardVal={"Low"} />
                    <Cards cardName = {"Revenue"} cardVal={"$00"} />
                    <Cards cardName = {"Total"} cardVal={"00"} />


                </div>



            <hr></hr>

            <div className="quick-access-cont">
            
            <h4>Quick access links</h4>
                <div className="quick-access">

                    <QuickAccessBtns icon={"🅿️"} desc={"Your Lot"} link={"/admin/lot"}/>             
                    <QuickAccessBtns icon={"🔃"} desc={"History"} />             
                    <QuickAccessBtns icon={"💵"} desc={"Payments"} />             
                    <QuickAccessBtns icon={"📄"} desc={"Logs"} />             
                    <QuickAccessBtns icon={"⚠️"} desc={"Alerts"} />             
                    <QuickAccessBtns icon={"🙍🏽‍♂️"} desc={"Users"} />             

                    
                </div>

            </div>

            <hr></hr>

            <h4>Recent Activities</h4>

            <div className="recent-log-acts-cont">
                
                <WorkLogCards logname={"Work log 1"} logid={"#00000"} logtime={"00:00"} />
                <WorkLogCards logname={"Work log 2"} logid={"#00000"} logtime={"00:00"} />
                <WorkLogCards logname={"Work log 3"} logid={"#00000"} logtime={"00:00"} />
                <WorkLogCards logname={"Work log 4"} logid={"#00000"} logtime={"00:00"} />
                <WorkLogCards logname={"Work log 5"} logid={"#00000"} logtime={"00:00"} />

            </div>
        </div>

    )

}

export default Dashboard