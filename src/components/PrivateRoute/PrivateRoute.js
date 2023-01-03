import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const user = localStorage.getItem("user");
 
    if(!user)
        return <Navigate to="/" />
    
    const { token } = JSON.parse(user)

    if(!token)
       return <Navigate to="/" />

    return children;
}