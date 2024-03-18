import HourCards from "./HourCards";

function LoadOpeningHours(props){

    return props.myOpeningHours.map(
        (hour)=>{
            return <HourCards myOpeningHour={hour} key={hour._id} Reload={()=>{props.ReloadData()}}></HourCards>
        }
    );
}

export default LoadOpeningHours;