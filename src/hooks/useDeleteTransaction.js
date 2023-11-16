import { deleteDoc,doc } from "firebase/firestore"
import { db } from "../config/firebase-config"


export const useDeleteTransaction=()=>{
   
    const deleteTransaction=async(id)=>{
        try{

            const transactionDoc=doc(db,"transactions",id);
            await deleteDoc(transactionDoc);
           
          }
          catch(err){
            console.log(err.message);
          }
    }
    return {deleteTransaction };
}