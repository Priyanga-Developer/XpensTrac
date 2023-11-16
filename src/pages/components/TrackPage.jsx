import React, { useState } from 'react'
import Transaction from './Transaction'
import { useAddTransaction } from "../../hooks/useAddTransaction"
import { useGetTransactions } from '../../hooks/useGetTransactions'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase-config'
import { useNavigate } from "react-router-dom"

const TrackPage = () => {
 
  const { addTransaction } =useAddTransaction();
  const {transactions ,transactionsTotal} =useGetTransactions();
  const {name,profilePhoto}=useGetUserInfo();
  const navigate=useNavigate();
  


  const [description,setDescription] =useState("");
  const [transactionAmount,setTransactionAmount] =useState(0);
  const [transactionType,setTransactionType] =useState("expense");
 
  const { balance,income,expense}=transactionsTotal;

  const handleOnSubmit =(e)=>{
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount ,
      transactionType
    });
    setDescription("");
    setTransactionAmount("");
  }
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
  return (
    <>
    <div className='expense-tracker'>
      <div className='container'>
        <h1> {name}'s Expense Tracker</h1>
          <div className='balance'>
            <h3>Your Balance </h3>
            {balance>=0?<h2>Rs{balance}</h2>:<h2>-Rs{balance*-1}</h2>}
          </div>
          <div className='summary'>
            <div className='income'>
              <h4>Income</h4>
              <p>Rs.{income}</p>
            </div>
            <div className='expenses'>
              <h4>Expenses</h4>
              <p>Rs.{expense}</p>
            </div>
          </div>
          <form className='add-transcation' onSubmit={(e)=>handleOnSubmit(e)}>
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
    </div>
    <div>
      {profilePhoto&&
       <div className='profile'>
        <img className='profilephoto' src={profilePhoto} alt='profilepic'/>
        </div>}
        <button type='button' onClick={()=>handleSignOut()}>Sign Out</button>
    </div>

     <Transaction transactions={transactions}/>
    </>
  )
}

export default TrackPage