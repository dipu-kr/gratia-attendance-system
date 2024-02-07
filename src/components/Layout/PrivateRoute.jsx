import React from 'react'
import Login from "../../pages/Login/Login"
import { useAuth } from '../../context/auth/authContext';

const PrivateRoute = (props) => {
    const { role, children } = props;
    const { userData, token } = useAuth();
    return (
        // <div>
        //     {userData.role === role ?
        //         <div>{children}</div>
        //         : <div style={{ widyj: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        //             <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        //                 <h1 style={{ color: "#6a5acd", fontSize: "200px", fontFamily: "monospace" }}>404</h1>
        //                 <h2 style={{ color: "gray" }}>You are not Authorised For This Page.</h2>
        //             </div>
        //         </div>}
        // </div>
        // -----------------added new code for solve logout issue---------------
        <div>
            {
                token && userData.role === role ? <div>{children}</div> : <Login />
            }
        </div>
    )
}

export default PrivateRoute