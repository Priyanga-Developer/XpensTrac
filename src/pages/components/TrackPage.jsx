import React, { useContext ,useState } from 'react'
import Transaction from './Transaction'
import { Button, Container, Row  } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Avatar from 'react-avatar';
import DataContext from '../../hooks/DataContext'
import { useAddTransaction } from "../../hooks/useAddTransaction"
import { useGetTransactions } from '../../hooks/useGetTransactions'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'


import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
        <Container className='expense-tracker' style={{padding:"80px 20px"}}>
        <Row  >
              <Col className='profile' sm>
                    <Card className="text-center">
      <Card.Header style={{backgroundColor:"rgb(83, 2, 83)",color:"#fff"}} > <h2> {name===null?displayName:name}'s Expense Tracker</h2></Card.Header>
      <Card.Body className='d-flex '>
      <Col sm>
                           <Card>
                                <Card.Header style={{backgroundColor:"#e1bee7"}}><h3>Current Balance</h3></Card.Header>
                                <Card.Body>         
                                  {balance>=0?<Card.Text>Rs.{balance}</Card.Text>:<Card.Text>-Rs.{balance*-1}</Card.Text>}
                                </Card.Body>
                        </Card>
                        </Col>
        <Col className='d-grid justify-items-center align-middle ' style={{justifyContent:"center"}}>
      <Col xs={6} md={4} className='p-2'> {profilePhoto?<Image src={profilePhoto}roundedCircle  alt='profilepic'/>: <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'yellow', 'green'])} name={displayName}  size="100" round={true} />}</Col>
      <Button style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}} 
                        type="Submit"  onClick={()=>handleSignOut()}> Sign Out</Button>
                        </Col>
                       
      </Card.Body>

   
    </Card>
                       
                          
                              
                            
                      
              </Col> 
              </Row>
              <Row className='container  gap-5 ' style={{textAlign:"center",padding:"70px"}}> 
                    <Col sm>
                          <Card>
                                        <Card.Header style={{backgroundColor:"#c5e1a5"}}><h3>Income</h3></Card.Header>
                                        <Card.Body>
                                          <Card.Text>
                                          Rs.{income}
                                          </Card.Text>
                                        </Card.Body>
                          </Card>
                    </Col>  
                    <Col sm>
                         <Card>
                                          <Card.Header style={{backgroundColor:"#ef9a9a"}}><h3>Expenses</h3></Card.Header>
                                          <Card.Body>
                                            <Card.Text>
                                            Rs.{expense}
                                            </Card.Text>
                                          </Card.Body>
                         </Card>
                    </Col> 
                 
              </Row>

              
              <Row>
                <Col>
              <Card style={{    height: "400px"}}>
                  <Card.Header style={{backgroundColor:"#FDD835"}}><h3>Add Transcation</h3></Card.Header>
                       <Card.Body className='Addtransaction'>
                                          <Button variant="primary" onClick={handleShow}>Click Here</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your transactions Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  id="transaction-form" onSubmit={(e)=>handleOnSubmitTransactions (e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
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
              <Form.Label>Amount</Form.Label>
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
              <Form.Check // prettier-ignore
        type="switch"
        label="Expense"
        id="expense" value="expense" checked={transactionType==="expense"} onChange={(e)=>setTransactionType(e.target.value)}
      />
      <Form.Check // prettier-ignore
        type="switch"
        label="Income"
        id="income" value="income"
        checked={transactionType==="income"} onChange={(e)=>setTransactionType(e.target.value)}
      />
            
            </Form.Group>

            <Button style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}} 
                        type="Submit" onClick={handleClose} > Add Transcation</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
                                          </Card.Body>
                         </Card>
            
                         </Col>  

              </Row>
              <Transaction transactions={transactions}/>
        </Container>
        
    </>
  )
}

export default TrackPage