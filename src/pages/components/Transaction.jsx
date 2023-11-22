import React from 'react'
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';
import { useGetTransactions } from '../../hooks/useGetTransactions'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Col, Row ,Button } from 'react-bootstrap';
const Transaction = () => {
  
  const {deleteTransaction} =useDeleteTransaction();
  const { transactions} =useGetTransactions();
  
  const handleDelete= (id)=>{
    deleteTransaction(id);  
  }
  return (
       <>
        <Row  className='pt-4'>
          <Col>
           <Card className='transactions '>
               <Card.Header style={{backgroundColor:"#ffa93a"}}><h3>Transactions</h3></Card.Header>
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
                                <Button type='submit' 
                                onClick={()=>handleDelete(id)}variant="danger">
                                  Delete</Button>

                              </ListGroup.Item>
                              );
                            })}
                      </ListGroup>
                      :<p>Transactions are Empty,please add Transactions</p>}
                  </Card.Body>
           </Card>
          </Col>
      </Row>
      </>
  )
}

export default Transaction