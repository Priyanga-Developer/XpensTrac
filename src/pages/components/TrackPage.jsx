import React from 'react'
import Transaction from './Transaction'
import { Container  } from 'react-bootstrap'
import Blocks from './Blocks'
import Addtransaction from './Addtransaction'
import Profile from './Profile'
import { ToastContainer } from 'react-toastify';



const TrackPage = () => {

  return (
    <>
        <Container className='expense-tracker' style={{padding:"80px 20px"}}>
              <Profile/>
              <Blocks/> 
              <Addtransaction/>
              <Transaction /> 
              <ToastContainer theme='dark'/>
        </Container> 
    </>
  )
}

export default TrackPage