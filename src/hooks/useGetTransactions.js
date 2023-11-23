import { useState,useEffect } from "react";
import { query,collection, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config"
import {useGetUserInfo} from "./useGetUserInfo"


export const useGetTransactions =()=>{
    const [transactions,setTransactions]=useState([]);
    const [transactionsTotal,setTransactionsTotal]=useState({
      balance:0.0,
      income:0.0,
      expense:0.0
    });

    const {userID} =useGetUserInfo();
    
  

    useEffect (()=>{
      const transactionCollectionRef= collection(db,"transactions");
      const getTransactions =  async ()=>{
        
        let unsubscribe;
        try{
          const queryTransactions = query (transactionCollectionRef ,where("userID","==",userID),
          orderBy("createdAt")
          );

     unsubscribe =onSnapshot(queryTransactions,(snapshot)=>{
            let docs=[];
            let totalIncome=0;
            let totalExpense=0;
       
            snapshot.forEach((doc)=>{
               const data =doc.data();
               const id=doc.id;
              docs.push({...data,id});


              if(data.transactionType==="expense"){
                totalExpense +=Number(data.transactionAmount)
              }
              else{
                totalIncome +=Number(data.transactionAmount)
              }
            });
           
            setTransactions(docs);
     
            let balance=totalIncome-totalExpense
            setTransactionsTotal({
              balance,
              expense:totalExpense,
              income:totalIncome
            });

       
          })
        }
        catch (err){
            console.log(err.message)
        }
        return ()=>unsubscribe();
    }
          getTransactions();
    },[userID]);
    
    return { transactions ,transactionsTotal };
   
}