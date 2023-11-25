import React, {useState } from 'react'
import { useAddTransaction } from "../../hooks/useAddTransaction"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button, Row  } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Addtransaction = () => {  
    const { addTransaction } =useAddTransaction();
    const [description,setDescription] =useState("");
    const [transactionAmount,setTransactionAmount] =useState(0);
    const [transactionType,setTransactionType] =useState("expense");
   const notify=()=>toast.success ("Your records are added successfully")

    const handleOnSubmitTransactions =(e)=>{
        e.preventDefault();

        addTransaction({
          description,
          transactionAmount ,
          transactionType
        });
       
        setDescription("");
        setTransactionAmount("");
        notify();
      }
      const [show, setShow] = useState(false);
  
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
     ;
  return (
    <>
    <Row style={{padding:"50px 0px"}}>
          <Col>
              <Card style={{height: "400px"}}>
                  <Card.Header style={{backgroundColor:"#FDD835"}}><h3>Add  Money</h3></Card.Header>
                       <Card.Body className='Addtransaction'>
                            <Button variant="primary" onClick={handleShow}>Click Here</Button>
                       <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Add your Records Here!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form  id="transaction-form" onSubmit={(e)=>handleOnSubmitTransactions(e)}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label style={{fontWeight:"500"}}>Description</Form.Label >
                                  <Form.Control
                                    type="text"
                                    placeholder="Eg:Shopping"
                                    value={description}
                                    required
                                    autoFocus
                                    onChange={(e)=>setDescription(e.target.value)}
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
                                    value={transactionAmount}
                                    required
                                    onChange={(e)=>setTransactionAmount(e.target.value)}
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
                                        checked={transactionType==="expense"}
                                        onChange={(e)=>setTransactionType(e.target.value)}
                                  />
                                <Form.Check 
                                  type="switch"
                                  label="Income"
                                  id="income" value="income"
                                  checked={transactionType==="income"} 
                                  onChange={(e)=>setTransactionType(e.target.value)}
                                />
                                </Form.Group>

                                <Button style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}} 
                                            type="Submit" onClick={handleClose} > Add Record</Button>
                             
                              </Form>
                            </Modal.Body>

                       </Modal>
                       </Card.Body>
              </Card>
         </Col>  
        </Row>
    </>
  )
}

export default Addtransaction