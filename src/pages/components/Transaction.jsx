import React from 'react'
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';

const Transaction = ({transactions}) => {
  
  const {deleteTransaction} =useDeleteTransaction();
  
  const handleDelete= (id)=>{
    deleteTransaction(id);  
  }
  return (
    <div className='transactions'>
        <h3>Transactions</h3>
        <ul>
          {transactions.map((transaction)=>{
            const {description, transactionAmount,transactionType,id}=transaction
            return(
             <li key={id}>
              <h4>{description}</h4>
              <p>Rs.{transactionAmount}. <label>{transactionType}</label></p>
              <button type='submit' onClick={()=>handleDelete(id)}>Delete</button>
             </li>
             
            );

          })}
        </ul>

    </div>
  )
}

export default Transaction