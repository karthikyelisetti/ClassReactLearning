import User from "../../context/Usercontext";
import { useContext } from "react";

export default function description() {
    const {user, setUser, age, setAge} = useContext(User)
    return (
        <>
            Description.js: {user} | {age}
            <br></br>
            <button onClick={() => setAge(21)}>Change Age</button>
            <button onClick={() => setUser("Mukund")}>Change Name</button><br></br>
        </>
    )
}