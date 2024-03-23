import HourCards from "./HourCards";

function LoadOpeningHours(props){

    //Map function - when this component is called it will make a card for each opening hour day
    //the reload function is attached to this aswell
    return props.myOpeningHours.map(
        (hour)=>{
            return <HourCards myOpeningHour={hour} key={hour._id} Reload={()=>{props.ReloadData()}}></HourCards>
        }
    );
}

export default LoadOpeningHours;