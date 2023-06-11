import Description from "./Description";
import User from "../../context/Usercontext";
import { useContext } from "react";

function Name() {
    const { user } = useContext(User);
    return(
        <>
            Name.js: {user} <br></br>
            <Description></Description>
        </>
    )
}

export default Name;