import MenuItems from "./MenuItem";


function LoadMenuItems(props){

    return props.myMenuItems.map(
        (item)=>{
            return <MenuItems myMenuItem={item} key={item._id} Reload={()=>{props.ReloadData()}}></MenuItems>
        }
    );
}

export default LoadMenuItems;