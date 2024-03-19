import Property from "./Property";
import "./PropertyList.css";

function PropertyList({props})
  {
    console.log({props})
    return(
    <ul>
      {props.map((i) => (
        <Property key ={i.id} {...i} />
      )
      )}
    </ul>
    )
  }

export default PropertyList;