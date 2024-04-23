import React from 'react';
import "./footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
    <div>

       <div style={{backgroundColor:"#0B0B1D"}}>
        <Container>
            <Row>
                <Col>
                <h1 style={{color:"white",fontSize:40,marginTop:100}}>Stay Updated</h1>
                <input type="text" placeholder="Email address" className="Email"></input><button className='subscribe'>Subscribe Now</button>
                </Col>

                <Col>
                <h1 style={{color:"white",fontSize:40,marginTop:100,marginLeft:150}}>Let's get Social media</h1>
                <br/>
                <span className="icons" style={{marginLeft:150,fontSize:70,marginRight:50}}>

                <FaSquareFacebook  style={{backgroundColor:"#3B5998",padding:15,color:"white",marginRight:10,borderRadius:10}}/>
                <FaSquareInstagram style={{backgroundColor:"#BB1500",padding:15,color:"white",marginRight:10,borderRadius:10}}/>
                <AiFillGoogleSquare style={{backgroundColor:"#DD4B39",padding:15,color:"white",marginRight:10,borderRadius:10}}/>
                <FaSquareTwitter style={{backgroundColor:"#1DA1F2",padding:15,color:"white",marginRight:10,borderRadius:10}}/>
                <FaYoutubeSquare style={{backgroundColor:"#2D3092",padding:15,color:"white",marginRight:10,borderRadius:10}}/>

                </span>
                </Col>
            </Row>
        </Container>
        
        </div> 

        <div style={{backgroundColor:"#0B0B1D",paddingTop:100}}>
            <Container>
                <Row>
                    <Col>
                         <h2 style={{color:"white"}}>About us</h2>
                         <br/><br/>
                         <ol class="footer">

                        <li><a href="">Online Learning</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Careers </a></li>
                        <li><a href="">Press center</a></li>
                        <li><a href="">Become An instructor</a></li>

                         </ol>
                    </Col>
                    
                    <Col>
                    <h2 style={{color:"white"}}>Campus</h2>
                         <br/><br/>
                         <ol class="footer">

                        <li><a href="">Our Plans</a></li>
                        <li><a href="">Free Trails</a></li>
                        <li><a href="">Acadamic solutions</a></li>
                        <li><a href="">Bussiness Solutions</a></li>
                        <li><a href="">Government Solutions</a></li>

                         </ol>
                    </Col>
                    <Col>
                    <h2 style={{color:"white"}}>Study</h2>
                         <br/><br/>
                         <ol class="footer">

                        <li><a href="">Admissions Policy</a></li>
                        <li><a href="">Get Started</a></li>
                        <li><a href="">Online Application </a></li>
                        <li><a href="">Visa Information</a></li>
                        <li><a href="">Tution Calculator</a></li>

                         </ol>
                    </Col>
                    <Col>
                    <h2 style={{color:"white"}}>Support</h2>
                         <br/><br/>
                         <ol class="footer">

                        <li><a href="">Support</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">System Requirements </a></li>
                        <li><a href="">Register Activation Key</a></li>
                        <li><a href="">Site Feedback</a></li>

                         </ol>
                    </Col>
                    
                </Row>
            </Container>
        </div>

       <div style={{backgroundColor:"#0B0B1D", paddingTop:100}}>
        <Container>
            <Row style={{paddingBottom:50}}>
                <hr style={{color:"white"}}/>
                <Col>
                <center>

                    <span style={{color:"white",fontSize:25}}>Copyright @2024  All rights reserved | This template is made with <FaHeart style={{color:"red"}}/> by AmeerAlex</span>
                </center>
                </Col>
            </Row>
        </Container>
       </div>
    </div>
  )
}

export default Footer