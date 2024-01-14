import React ,{ createContext ,useEffect,useState } from 'react'
import { auth,provider } from '../config/firebase-config'
import {signInWithPopup ,onAuthStateChanged ,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,updateProfile} from "firebase/auth"
import { useNavigate } from "react-router-dom"

const DataContext = createContext({});

export const DataContextProvider=({children})=>{
  
  const [user,setUser]=useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [displayName ,setDisplayName] =useState("");
  const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false);

  const handleSignUpSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try{
      const results= await createUserWithEmailAndPassword(auth,email,password);
      await updateProfile(results.user,{
        displayName: displayName
       })
      const authInfo={
       userID:results.user.uid,
       name:displayName,
       profilePhoto: results.user.photoURL,
       isAuth:true,
     };

     localStorage.setItem("auth",JSON.stringify(authInfo ||{}));
     navigate("/tracker");

    }
    catch(err){
      setError(err.message);
      setEmail("");
      setPassword("");
    }
    finally{
      setTimeout(()=>setIsLoading(false),3000)
    }
  }

   const handleLogInSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
     const results= await signInWithEmailAndPassword(auth,email,password);
  
     const authInfo={
      userID:results.user.uid,
      name:results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth:true,
    };

    localStorage.setItem("auth",JSON.stringify(authInfo||{}));
    navigate("/tracker");
    } catch (err) {
      setError(err.message);
      setEmail("");
      setPassword("");
    }
    finally{
      setTimeout(()=>setIsLoading(false),3000)
    }
  };
    const signInWithGoogle= async()=>{
      setIsLoading(true);
      try{
         const results=await signInWithPopup(auth,provider);
         const authInfo={
           userID:results.user.uid,
           name:results.user.displayName,
           profilePhoto: results.user.photoURL,
           isAuth:true,
         };
         localStorage.setItem("auth",JSON.stringify(authInfo||{}));
         navigate("/tracker");
      }
      catch(err){
        setError(err.message);
      }
      finally{
        setTimeout(()=>setIsLoading(false),3000)
      }

    }

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser) 
      })
      return ()=>{
        unsubscribe();
      }
    },[]);
    const handleSignOut =async()=>{
      try {
        await signOut(auth);
        localStorage.clear();
        navigate ("/")
      }
      catch(err){
        console.log(err.message)
      } 
    }
  

 
    return(
        <DataContext.Provider 
              value={{user,
                setUser,navigate,email,setEmail,password,setPassword
                ,error,setError,isLoading,setIsLoading,signInWithGoogle, handleLogInSubmit,displayName,setDisplayName,handleSignUpSubmit,handleSignOut}}
        >
           {children}
        </DataContext.Provider>
    )
}

export default DataContext