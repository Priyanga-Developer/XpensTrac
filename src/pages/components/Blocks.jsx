import React from 'react'
import { useGetTransactions } from '../../hooks/useGetTransactions'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Row  } from 'react-bootstrap'


const Blocks = () => {
  const { transactionsTotal} =useGetTransactions();
  const { income,expense}=transactionsTotal;

  return (
    <>
              <Row className='container  gap-5 ' style={{textAlign:"center",padding:"70px"}}> 
              <Col sm>
                    <Card>
                       <Card.Header style={{backgroundColor:"#c5e1a5"}}>
                        <h3 >Income</h3></Card.Header>
                            <Card.Body>
                                <Card.Text style={{fontWeight:"500"}}>Rs.{income}</Card.Text>
                            </Card.Body>
                    </Card>
              </Col>  
              <Col sm>
                    <Card>
                      <Card.Header style={{backgroundColor:"#ef9a9a"}}>
                        <h3>Expenses</h3></Card.Header>
                            <Card.Body>
                                <Card.Text style={{fontWeight:"500"}}>Rs.{expense}</Card.Text>
                            </Card.Body>
                    </Card>
              </Col>         
        </Row>
    </>
  )
}

export default Blocks