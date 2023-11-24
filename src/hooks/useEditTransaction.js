import { updateDoc,doc } from "firebase/firestore"
import { db } from "../config/firebase-config"


export const useEditTransaction=()=>{
   
    const editTransaction=async({id,newDescription,newTransactionAmount,newTransactionType})=>{
      console.log(id)
        try{
          console.log(newDescription)
            const transactionDoc=doc(db,"transactions",id);
            console.log(transactionDoc)
            await updateDoc(transactionDoc,{
                description:newDescription,
                transactionAmount:newTransactionAmount,
                transactionType:newTransactionType
            })
          }
          catch(err){
            console.log(err.message);
          }
    }
    return {editTransaction};
}