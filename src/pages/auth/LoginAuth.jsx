import React ,{useContext} from 'react'
import GoogleButton from 'react-google-button'
import DataContext from '../../hooks/DataContext'
import { Button ,Form,Alert } from 'react-bootstrap'
import { Link  } from 'react-router-dom'



const LoginAuth = () => {
  const{signInWithGoogle,setEmail,error, handleLogInSubmit,setPassword} =useContext(DataContext)

  return (
    <>
    <div className='main-box'>
    <div className=" box" >
    <h2 className="mb-1">Login on <span >Xpenstrac</span></h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form  className='p-4' method='POST' id="logIn" onSubmit={(e)=>handleLogInSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <div className="d-grid gap-1">
        <Button style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}} type="Submit">
          Log In
        </Button>
        <span style={{ fontWeight:"500"}} >OR</span>
        <hr/>
      </div>
    </Form>
    <div className=' googleBtn' >
    < GoogleButton className="g-btn"
    type="dark" style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}} onClick={()=>signInWithGoogle()}/>

    </div>
  </div>
 
  <div className="p-4 box mt-3 ">
   <p style={{ fontWeight:"500"}}> Don't have an account? <Link to="/signup" style={{textDecoration:"none"}}>Sign up</Link></p>
  </div>
  </div>
</>

  )
}

export default LoginAuth