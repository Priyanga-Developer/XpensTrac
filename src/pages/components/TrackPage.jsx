import React from 'react'
import Transaction from './Transaction'
import { Container  } from 'react-bootstrap'
import Blocks from './Blocks'
import Addtransaction from './Addtransaction'
import Profile from './Profile'
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react'
import DataContext from '../../hooks/DataContext'
import SyncLoader from "react-spinners/SyncLoader";



const TrackPage = () => {
  const {isLoading}=useContext(DataContext)
  const override={
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    margin: " 100px auto",
  
  };
  
  
  return (
    <> {isLoading&&
    <SyncLoader

        color={"purple"}
       cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
       {!isLoading&& <Container className='expense-tracker' style={{padding:"80px 20px"}}>
              <Profile/>
              <Blocks/> 
              <Addtransaction/>
              <Transaction /> 
              <ToastContainer theme='dark'/>
        </Container> }
    </>
  )
}

export default TrackPage