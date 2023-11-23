import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {  Row  } from 'react-bootstrap'
import { Pie} from "react-chartjs-2"

import { Chart as ChartJS } from "chart.js/auto";

import { useGetTransactions } from '../../hooks/useGetTransactions'

const PieChart = () => {
  const { transactions,transactionsTotal} =useGetTransactions();
 
  const data= transactions.map((obj)=>{
    return{...obj ,balance:transactionsTotal.balance}
  })
    
  console.log(data)
 
  const userData={
    labels:data.map((data)=>data.description),
    datasets :[{
      label:"transactions Amount",
      data:data.map((data)=>data.transactionAmount),
      
    },{
    label:"balance",
    data:data.map((data)=>data.balance)
    
  }
  ]
}
  return (
    <div>
        <Row style={{padding:"50px 0px"}}>
          <Col>
              <Card >
                  <Card.Header style={{backgroundColor:"#FDD835"}}>
                    <h3>Add  Money</h3>
                    </Card.Header>
                       <Card.Body>
                          <h4>Piechart</h4>
                          <Pie  data={userData} />
                       </Card.Body>
              </Card>
         </Col>  
        </Row>
    </div>
  )
}

export default PieChart