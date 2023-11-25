import React from 'react'
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';
import { useGetTransactions } from '../../hooks/useGetTransactions'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Col, Row ,Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditTransaction from './EditTransaction';


const Transaction = () => {
  
  const {deleteTransaction} =useDeleteTransaction();
  const { transactions} =useGetTransactions();
  
  const notify=()=>toast.error("Your records are deleted")
  
  const handleDelete= (id)=>{
    deleteTransaction(id);
    notify();
  
  }
  return (
       <>
        <Row  className='pt-4'>
          <Col>
           <Card className='transactions '>
               <Card.Header style={{backgroundColor:"#8bbfe3"}}><h3>Records</h3></Card.Header>
                  <Card.Body>
                    {(transactions.length)?
                      <ListGroup as="ol" numbered>
                        {transactions.map((transaction)=>{
                              const {description, transactionAmount,transactionType,id}=transaction
                              return(
                                <ListGroup.Item
                                as="li" key={id}
                                className="d-flex justify-content-between align-items-start"
                              >
                                <div className="ms-2 me-auto">
                                  <div className="fw-bold">{description}</div>
                                  {transactionType}
                                </div>
                              
                                <Badge bg="primary" pill style={{marginRight:"20px"}}>
                                Rs.{transactionAmount}
                                </Badge>
                               
                                  <EditTransaction id={id} />
                                  <Button type='submit' 
                                onClick={()=>handleDelete(id)} variant="danger">
                                  Delete</Button>
                             
                              </ListGroup.Item>
                              );
                            })}
                      </ListGroup>
                      :<p>No Records.Tap add money to add new record!</p>}
                  </Card.Body>
           </Card>
          </Col>
      </Row>
      </>
  )
}

export default Transaction