import React ,{useContext} from 'react'
import GoogleButton from 'react-google-button'
import DataContext from '../../hooks/DataContext'



const LoginAuth = () => {
  
  
  const{signInWithGoogle} =useContext(DataContext)

 



  return (
    <div className='login-page'>
      <p>Sign In with Google to Continue</p>
         < GoogleButton className='google-btn' onClick={()=>signInWithGoogle()}/>
      </div>
  )
}

export default LoginAuth