import { Link } from "react-router-dom"

function ParkingLotCard(props){
    return (
        <Link className="parking-lot-card" key={props.index} to={`/home/parkings/${props.data.id}`}>
            {/* <h5 className="parking-lot-name">{props.Name}</h5> */}
            {/* <p>Location: {parkingLot.admin}</p> */}
            {/* <p>Capacity: {props.capacity}</p> */}

            <div className="top-cont">
                <div>
                    <h4 className="parking-lot-name">{props.data.Name}</h4>
                    <p>{props.data.address}</p>
                </div>
                
                <div className="right">
                    <h4 className="ratings">⭐4.0</h4>
                    <div className="status"><div className="stat-indicator"></div><p>AVAILABLE</p></div>
                </div>
            </div>


        </Link>
    )
}

export default ParkingLotCard