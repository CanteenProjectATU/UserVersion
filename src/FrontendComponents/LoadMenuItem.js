import MenuItems from "./MenuItem";


function LoadMenuItems(props){

    //map function - Reference: Martin Kenirons notes from Data Rep
    //map over the array of menu items and make a component for each one
    return props.myMenuItems.map(
        //pass the individual menu item
        (item)=>{
            return <MenuItems myMenuItem={item} key={item._id} Reload={()=>{props.ReloadData()}}></MenuItems>
        }
    );
}

export default LoadMenuItems;