import React from 'react'
import { useState } from 'react'
import { useEditTransaction } from "../../hooks/useEditTransaction"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap'


const EditTransaction = ({id}) => {
  console.log(id)
    const [newDescription,setNewDescription]=useState("");
    const [newTransactionAmount,setNewTransactionAmount]=useState(0);
    const [newTransactionType,setNewTransactionType]=useState("");
    const {editTransaction} =useEditTransaction();
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
    
      }
    
  return (
    <>
     <Button variant="primary" onClick={handleShow}>Click Here</Button>
                       <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Edit your transactions Here!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form  id="transaction-form" onSubmit={(e)=>e.preventDefault()}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                                  controlId="exampleForm.ControlNumber1"
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
                                  controlId="exampleForm.Controlradio1"
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
                                            type="Submit" onSubmit={()=>handleOnEditTransactions(id)} > Edit Transcation</Button>
                             
                              </Form>
                            </Modal.Body>

                       </Modal>
    </>
  )
}

export default EditTransaction