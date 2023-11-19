import React from 'react'
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Col, Row ,Button } from 'react-bootstrap';
const Transaction = ({transactions}) => {
  
  const {deleteTransaction} =useDeleteTransaction();
  
  const handleDelete= (id)=>{
    deleteTransaction(id);  
  }
  return (
    <Row  className='pt-4'>
      <Col>
    <Card className='transactions '>
    <Card.Header><h3>Transactions</h3></Card.Header>
    <Card.Body>
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
             
              <Badge bg="primary" pill>
              Rs.{transactionAmount}
              </Badge>
              <Button type='submit' onClick={()=>handleDelete(id)}variant="danger">Delete</Button>{' '}

            </ListGroup.Item>

             
            );

          })}
 

    </ListGroup>
    </Card.Body>
</Card>
</Col>
</Row>

  )
}

export default Transaction