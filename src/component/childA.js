import {React,memo} from "react";
const childA = (learning,count) => {
    console.log("child componet");
    return(
        <div>

        </div>
    )
}
export default memo(childA);