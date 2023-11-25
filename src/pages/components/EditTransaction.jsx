import React from 'react'
import { useState } from 'react'
import { useEditTransaction } from "../../hooks/useEditTransaction"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditTransaction = ({id}) => {

    const [newDescription,setNewDescription]=useState("");
    const [newTransactionAmount,setNewTransactionAmount]=useState(0);
    const [newTransactionType,setNewTransactionType]=useState("");
    const {editTransaction} =useEditTransaction();
    const notify=()=>toast.success ("Your records are updated successfully")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleOnEditTransactions = async(id)=>{
        editTransaction({
            id,
            newDescription,
            newTransactionAmount ,
            newTransactionType
        });
       
        handleClose();
        notify();
    
      }
    
  return (
    <>
     <Button variant="warning" onClick={handleShow}>Edit</Button>
                       <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Edit your Records Here!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form  id="editTransaction-form" onSubmit={(e)=>e.preventDefault()}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1edit">
                                  <Form.Label style={{fontWeight:"500"}}>Description</Form.Label >
                                  <Form.Control
                                    type="text"
                                    placeholder="Eg:Shopping"
                                    value={newDescription}
                                    required
                                    autoFocus
                                    onChange={(e)=>setNewDescription(e.target.value)}
                                  />
                                </Form.Group>


                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlNumber1edit"
                                >
                                  <Form.Label style={{fontWeight:"500"}} >Amount</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Amount"
                                    value={newTransactionAmount}
                                    required
                                    onChange={(e)=>setNewTransactionAmount(e.target.value)}
                                  />
                                </Form.Group>

                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.Controlradio1edit1"
                                >
                                  <Form.Label>Transaction Type</Form.Label>
                                  <Form.Check 
                                        type="switch"
                                        label="Expense"
                                        id="expense" value="expense" 
                                        checked={newTransactionType==="expense"}
                                        onChange={(e)=>setNewTransactionType(e.target.value)}
                                  />
                                <Form.Check 
                                  type="switch"
                                  label="Income"
                                  id="income" value="income"
                                  checked={newTransactionType==="income"} 
                                  onChange={(e)=>setNewTransactionType(e.target.value)}
                                />
                                </Form.Group>

                                <Button style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}} 
                                            type="Submit" onClick={()=>handleOnEditTransactions(id)} >Submit</Button>
                             
                              </Form>
                            </Modal.Body>

                       </Modal>
    </>
  )
}

export default EditTransaction