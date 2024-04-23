import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdPerson4 } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiGraduateCap } from "react-icons/gi";
import { PiNotepadLight } from "react-icons/pi";
import One from '../Images/01.png';
import Two from '../Images/02.jpg';
import Three from '../Images/03.jpg';
import Four from '../Images/04.jpg';
import Five from '../Images/05.jpg';
import six from '../Images/06.avif';
import Seven from '../Images/07.jpg';
import Eight from '../Images/08.avif';
import Nine from '../Images/09.jpg';
import { RiStarSFill } from "react-icons/ri";
import Ten from '../Images/10.jpg';
import Eleven from '../Images/11.jpg';

function Courses() {
  return (
    <div>
         <div className='ab'>
        <span style={{marginTop:50}}>Courses US !</span>
      </div>

            <div style={{paddingTop:100}}>
        <Container>
          <Row>
            <center><b style={{fontSize:15,color:'#67BDFF'}}>Most Popular Course Of This Week</b>
            <br/><br/>
            <b style={{fontSize:50,color:'#030431'}}>Our Popular Courses</b>
            </center>
            
            <Col style={{marginTop:50}} className='c2'>
            
            <img src={One} width={423} height={350}/><br/><br/>
            <center>
            <b style={{fontSize:25,float:'left',paddingLeft:50}}>Graphic Designer</b>
            <br/>
            <span style={{float:'left',paddingLeft:80,color:'gold',fontSize:20,marginTop:10}}><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></span>
            <br/>
            <b style={{float:'right',marginRight:35}}>10k Reviews</b><br/>
            <br/><br/>
            <MdPerson4 style={{float:'left',marginLeft:30,}}/>
            <span style={{float:'left',marginTop:-5,marginLeft:10}}>600</span>
            <FaRegHeart style={{float:'left',marginLeft:30,}}/> <span style={{float:'left',marginTop:-5,marginLeft:10}}>600</span>
            <b style={{marginTop:-5,float:'right',marginRight:60}}>FREE</b><br/><br/>
            </center>
            </Col>

            <Col style={{marginTop:50}} className='c2'>
            
            <img src={Two} width={418} height={350}/><br/><br/>
            <center>
            <b style={{fontSize:25,float:'left',paddingLeft:50}}>Web Develpoment</b>
            <br/>
            <span style={{float:'left',paddingLeft:80,color:'gold',fontSize:20,marginTop:10}}><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></span>
            <br/>
            <b style={{float:'right',marginRight:35}}>10k Reviews</b><br/>
            <br/><br/>
            <MdPerson4 style={{float:'left',marginLeft:30,}}/>
            <span style={{float:'left',marginTop:-5,marginLeft:10}}>600</span>
            <FaRegHeart style={{float:'left',marginLeft:30,}}/> <span style={{float:'left',marginTop:-5,marginLeft:10}}>600</span>
            <b style={{marginTop:-5,float:'right',marginRight:60}}>FREE</b><br/><br/>
            </center>
            
            </Col>

            <Col style={{marginTop:50}} className='c2'>
            
            <img src={Three} width={418} height={350}/><br/><br/>
            <center>
            <b style={{fontSize:25,float:'left',paddingLeft:50}}>Digital Marketing</b>
            <br/>
            <span style={{float:'left',paddingLeft:80,color:'gold',fontSize:20,marginTop:10}}><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></span>
            <br/>
            <b style={{float:'right',marginRight:35}}>10k Reviews</b><br/>
            <br/><br/>
            <MdPerson4 style={{float:'left',marginLeft:30,}}/>
            <span style={{float:'left',marginTop:-5,marginLeft:10}}>600</span>
            <FaRegHeart style={{float:'left',marginLeft:30,}}/> <span style={{float:'left',marginTop:-5,marginLeft:10}}>600</span>
            <b style={{marginTop:-10,float:'right',marginRight:60}}>FREE</b><br/><br/>
            </center>
            </Col>
            <center>

            <button className='b2'>Find More Courses</button>
            </center>
          </Row>
        </Container>
      </div>

  <div style={{backgroundColor:'#2F2E95',paddingTop:100}}>
    <Container>
      <Row>
        <center><b style={{color:'#3BA0FF'}}>More About Our Faculty</b>
        <br/><br/>
          <b style={{color:'white',fontSize:50}}>Our Best Teachers</b>
          <br/><br/><br/>
          
        </center>

        <Col style={{backgroundColor:'white',width:300,marginRight:30}}>
        <img src={Four} width={270} height={300} style={{marginTop:10}}/>
        <br/>
        <br/>
        <center>
        <h1>John</h1>
        <h4>Professor</h4>
          </center>
          </Col>
          <Col style={{backgroundColor:'white',width:300,marginRight:30}}>
        <img src={Seven} width={275} height={300} style={{marginTop:10}}/>
        <br/>
        <br/>
        <center>
        <h1>Namratha</h1>
        <h4>Professor</h4>
          </center>
        </Col>
        
        <Col style={{backgroundColor:'white',width:300,marginRight:30}}>
        <img src={Five} width={275} height={300} style={{marginTop:10}}/>
        <br/>
        <br/>
        <center>
        <h1>Michael</h1>
        <h4>Professor</h4>
          </center>
        </Col>
        <Col style={{backgroundColor:'white',width:300,marginRight:30}}>
        <img src={six} width={275} height={300} style={{marginTop:10}}/>
        <br/>
        <br/>
        <center>
        <h1>Jahnavi</h1>
        <h4>Professor</h4>
          </center>
        </Col>
        <center>

          <button className="b3">View All Faculty</button>
        </center>
      </Row>
    </Container>
  </div>

  <div style={{backgroundColor:"#FFFFFF"}}>
    <Container>
      <Row>
        <Col style={{marginTop:200}}>
        <h4 style={{color:"#2D3092"}}>More About Our Company</h4>
        <br/><br/>
        <h1 style={{color:"#030431",fontSize:"50px"}}>WANT TO KNOW MORE?</h1>
        <br/><br/>
        <p style={{fontSize:"20px"}}>
        About Us Our mission Nurture each child’s passion, curiosity, optimism,
        and educational success. Philosophy Reach Our philosophy Proven learning
        approaches Teaching is one of the most.
        </p>
        <br/><br/>
        <HiOutlineLightBulb  style={{fontSize:"60px",color:"#2D3092"}}/><span style={{fontSize:"25px",marginLeft:30}}>Creative ideas</span><br/><br/>
        <MdPerson4 style={{fontSize:"60px",color:"#2D3092"}}/><span style={{fontSize:"25px",marginLeft:30}}>Student</span><br/><br/>
        <GiGraduateCap style={{fontSize:"60px",color:"#2D3092"}}/><span style={{fontSize:"25px",marginLeft:30}}>Graduated</span><br/><br/>
        <PiNotepadLight style={{fontSize:"60px",color:"#2D3092"}}/><span style={{fontSize:"25px",marginLeft:30}}>Randomised words</span><br/><br/>
       <br/>
       <br/><br/>
       <button className="b4">More About Us</button>
        </Col>

        <Col style={{marginTop:200}}>
        <img src={Eight} width={300} height={500} style={{marginRight:30}}/>
        <img src={Nine} width={300} height={500} style={{marginTop:150}}/>
        </Col>
        
      </Row>
    </Container>
  </div>

  <div style={{backgroundColor:"#303092",paddingBottom:100}}>
    
  <Carousel>
  <Carousel.Item>
  <center>
  <img src={Five} className='ca1'/>
  </center>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Carousel.Caption>
   
      <p style={{fontSize:30,color:"white",}}>You can't succeed if you just do what others do and follow<br/>
      the well-worn path.You need to create a new and original<br/>
      path for yourself.</p>
      <h3 style={{color:"white",fontSize:30}}>-Alex</h3>
      <br/><br/>
      <span style={{fontSize:30,color:"gold"}}><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <center>
  <img src={Five} className='ca1'/>
  </center>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <Carousel.Caption>
   
   <p style={{fontSize:30,color:"white",}}>You can't succeed if you just do what others do and follow<br/>
   the well-worn path.You need to create a new and original<br/>
   path for yourself.</p>
   <h3 style={{color:"white",fontSize:30}}>-Alex</h3>
   <br/><br/>
   <span style={{fontSize:30,color:"gold"}}><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
 </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <center>
  <img src={Five} className='ca1'/>
  </center>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <Carousel.Caption>
   
   <p style={{fontSize:30,color:"white",}}>You can't succeed if you just do what others do and follow<br/>
   the well-worn path.You need to create a new and original<br/>
   path for yourself.</p>
   <h3 style={{color:"white",fontSize:30}}>-Alex</h3>
   <br/><br/>
   <span style={{fontSize:30,color:"gold"}}><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
 </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
  <div>
    <Container>
      <Row>
       <center> 
        <p style={{marginTop:200,fontSize:20,color:"#3BA0FF"}}>Our Latest News From Our Blog</p>        
        <h1 style={{fontSize:60,color:"#030431"}}>Latest News From Blog</h1>
       </center>

        <Col>
        <img src={Ten}  className='blogimages'/>
        <div  className='box'>
          <p style={{padding:20,paddingLeft:40,color:"white",fontSize:30,textAlign:"justify"}}><b>24<br/>Mar</b></p>

        </div>
        </Col>
        <Col>
        <img src={Eleven}  className='blogimages'/>
        <div  className='box'>
          <p style={{padding:20,paddingLeft:40,color:"white",fontSize:30,textAlign:"justify"}}><b>24<br/>Mar</b></p>
          </div>
        </Col>
      </Row>
    </Container>
  </div></div>
  )
}

export default Courses