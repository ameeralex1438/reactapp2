import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Map from '../Images/map.jpg';

function Contact() {
  return (
    <div>
      <div className='ab'>
        <span style={{marginTop:50}}>Contact US !</span>
      </div>

      <div>
        <Container>
        <img className='map' src={Map}/>
        </Container>
       

      </div>
      <div>
        <Container>
          <Row>
            <p className='get'>Get in Touch</p>
            <Col className='contactcol'>
            <Form>
            <textarea id="subject" name='subject' placeholder='write a message'></textarea>
            <br/>
            <input type='text' className='entername' placeholder='Enter your name'/>         
            <input type='text' className='entername1' placeholder='Email'/> 
            <br/>        
            <input type='text' className='entername2' placeholder='Enter subject'/> 

            <button className='conbtn'>Send</button>        
            </Form>

            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact