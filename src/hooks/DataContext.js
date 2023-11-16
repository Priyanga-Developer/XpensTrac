import React ,{ createContext  } from 'react'
import { auth,provider } from '../config/firebase-config'
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom"




const DataContext = createContext({});

export const DataContextProvider=({children})=>{
  
  
    const navigate=useNavigate();
   
    const signInWithGoogle= async()=>{
      try{
         const results=await signInWithPopup(auth,provider);
         const authInfo={
           userID:results.user.uid,
           name:results.user.displayName,
           profilePhoto: results.user.photoURL,
           isAuth:true,
         };
         localStorage.setItem("auth",JSON.stringify(authInfo));
         navigate("/tracker");
      }
      catch(err){
        console.log(err.message)
      }

    }

   
 
    return(
        <DataContext.Provider value={{signInWithGoogle }}>
           {children}
        </DataContext.Provider>
    )
}

export default DataContext