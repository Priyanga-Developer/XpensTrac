import React , { useContext } from 'react'
import DataContext from '../../hooks/DataContext'
import { useGetTransactions } from '../../hooks/useGetTransactions'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Avatar from 'react-avatar';
import { Button, Row  } from 'react-bootstrap'

const Profile = () => {

    const {handleSignOut,displayName}=useContext(DataContext); 
    const { transactionsTotal} =useGetTransactions();
    const { name,profilePhoto }=useGetUserInfo();

    const { balance}=transactionsTotal;
    
  return (
   <>
           <Row style={{paddingBottom: "50px",
    paddingTop: "43px"}}>
              <Col className='profile'  sm>
                    <Card className="text-center" >
                      <Card.Header style={{backgroundColor:"#aa2479", color:"white",padding:"20px"}} > 
                      <h2> {name===null?displayName:name}'s XpensTrac</h2></Card.Header>
                          <Card.Body className='d-flex gap-3'>
              <Col sm>
                              <Card >
                                    <Card.Header ><h3>Current Balance</h3></Card.Header>
                                    <Card.Body>         
                                      {balance>=0?<Card.Text style={{fontWeight:"500"}}>Rs.{balance}</Card.Text>:<Card.Text style={{color:"red",fontWeight:"500"}}>-Rs.{balance*-1}</Card.Text>}
                                    </Card.Body>
                            </Card>
                            </Col>
            <Col className='d-grid justify-items-center align-middle ' style={{justifyContent:"center"}}>
          <Col xs={6} md={4} className='p-2'>
             {profilePhoto?<Image src={profilePhoto}roundedCircle  alt='profilepic'/>: <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'yellow', 'blue'])} name={name}  size="100" round={true} />}</Col>
          <Button style={{backgroundColor:"rgb(83, 2, 83)",borderColor:"rgb(83, 2, 83)"}} 
                            type="Submit"  onClick={()=>handleSignOut()}> Sign Out</Button>
                            </Col>
                          
                          </Card.Body>
                     </Card>       
              </Col> 
        </Row>
   </>
  )
}

export default Profile