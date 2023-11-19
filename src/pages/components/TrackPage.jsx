import React, { useContext ,useState } from 'react'
import Transaction from './Transaction'
import { Button  } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import DataContext from '../../hooks/DataContext'
import { useAddTransaction } from "../../hooks/useAddTransaction"
import { useGetTransactions } from '../../hooks/useGetTransactions'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'


const TrackPage = () => {
 
   const {handleSignOut,displayName}=useContext(DataContext);
    const { addTransaction } =useAddTransaction();
    const { transactions ,transactionsTotal} =useGetTransactions();
    const { name,profilePhoto }=useGetUserInfo();
  
    const [description,setDescription] =useState("");
    const [transactionAmount,setTransactionAmount] =useState(0);
    const [transactionType,setTransactionType] =useState("expense");
   
   
    const { balance,income,expense}=transactionsTotal;
  
    const handleOnSubmitTransactions =(e)=>{
      e.preventDefault();
      addTransaction({
        description,
        transactionAmount ,
        transactionType
      });
      setDescription("");
      setTransactionAmount("");
    }
  
  return (
    <>

    <div className='expense-tracker'>
  
      <div className='container d-flex gap-5 p-4' >   
            <Card>
              <Card.Header><h3>Current Balance</h3></Card.Header>
              <Card.Body>         
                {balance>=0?<Card.Text>Rs.{balance}</Card.Text>:<Card.Text>-Rs.{balance*-1}</Card.Text>}
              </Card.Body>
            </Card>

            <Card>
              <Card.Header><h3>Income</h3></Card.Header>
              <Card.Body>
                <Card.Text>
                Rs.{income}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header><h3>Expenses</h3></Card.Header>
              <Card.Body>
                <Card.Text>
                Rs.{expense}
                </Card.Text>
              </Card.Body>
            </Card>
        <div>
    
        
        <div className='profile'>
                <h2> {name===null?displayName:name}'s Expense Tracker</h2>
                {profilePhoto&&<img className='profilephoto' src={profilePhoto} alt='profilepic'/>}
          </div>
          <Button style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}} type="Submit"  onClick={()=>handleSignOut()}>
          Sign Out
        </Button>
        
      </div>
      </div>
          
          <form className='add-transcation' id="transaction-form" onSubmit={(e)=>handleOnSubmitTransactions (e)}>
             <input type='text' placeholder='Description' value={description} required onChange={(e)=>setDescription(e.target.value)}/>
             <input type='number' placeholder='Amount' value={transactionAmount} required onChange={(e)=>setTransactionAmount(e.target.value)}/>
             <input type='radio' id="expense" value="expense" checked={transactionType==="expense"} onChange={(e)=>setTransactionType(e.target.value)}/>
             <label htmlFor='expense'>Expense</label>
             <input type='radio' id="income" value="income"
             checked={transactionType==="income"} onChange={(e)=>setTransactionType(e.target.value)}/>
             <label htmlFor='income'>Income</label>
             <button type='submit'>Add Transcation</button>
          </form>
     
    </div>
     <Transaction transactions={transactions}/>
    </>
  )
}

export default TrackPage