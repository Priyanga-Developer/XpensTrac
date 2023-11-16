import {useGetUserInfo} from "../../hooks/useGetUserInfo"
import { Navigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const {isAuth } =useGetUserInfo();

    if(!isAuth){
       return <Navigate to="/" />
       
    }

   return children;
}

export default ProtectedRoute