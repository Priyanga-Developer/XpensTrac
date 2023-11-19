import React ,{useContext}from 'react'
import { Button ,Form ,Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DataContext from '../../hooks/DataContext'

const SignUpAuth = () => {
  const{setEmail,error, handleSignUpSubmit,setPassword,setDisplayName} =useContext(DataContext);
  
  return (
    <>
    <div className='main-box'>
      <div className="p-5  box">
        <h2 className="mb-1">Sign Up on <span >Xpenstrac</span></h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className='p-5' id="signUp" method="POST"onSubmit={(e)=>handleSignUpSubmit(e) }>
        <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e)=>setDisplayName(e.target.value)}
          />
          </Form.Group>
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

          <div className="d-grid gap-2">
            <Button variant="primary"  style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}}type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
       <p style={{ fontWeight:"500"}}>Already have an account? <Link to="/" style={{textDecoration:"none"}}>Log In</Link></p> 
      </div>
      </div>
    </>
  )
}

export default SignUpAuth