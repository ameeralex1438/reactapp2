import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrGallery } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { MdVideoSettings } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdPerson4 } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiGraduateCap } from "react-icons/gi";
import { PiNotepadLight } from "react-icons/pi";
import Four from '../Images/04.jpg';
import Five from '../Images/05.jpg';
import six from '../Images/06.avif';
import Seven from '../Images/07.jpg';
import Eight from '../Images/08.avif';
import Nine from '../Images/09.jpg';
import { RiStarSFill } from "react-icons/ri";
import Ten from '../Images/10.jpg';
import Eleven from '../Images/11.jpg';

function About() {
  return (
    <div>
      <div className='ab'>
        <span style={{marginTop:50}}>About US !</span>
      </div>

      
       <div style={{paddingTop:80}}>
        <Container>
          <Row>
            <center><b style={{color:'#80A0FF',fontSize:20}}>Popular online courses</b>
            <br/><br/>
            <b style={{color:'#030431',fontSize:50}}>Lets Browse All Category !</b>
            </center>
            <Col className='c1'>
              
            <GrGallery   style={{fontSize:60,marginLeft:30}}/><br/>
            <h4  style={{paddingTop:50,}}>Web Design</h4>
            <p style={{marginTop:40,textAlign:'justify'}}>Our Website Builder Helps Bring Your Unique Vision To Life — Start 
              Building For Free. Build, Publish, And Sell From Your Website The term "web design" is normally used to describe
               the design process relating to the front-end (client side) design of a website including writing markup. Web 
               design partially overlaps web</p>
              <br/>
              <Link to='/' className="link2">Read More...</Link>
              
            </Col>

            <Col className='c1'>
            <IoPerson  style={{fontSize:60,marginLeft:30}}/><br/>
            <h4 style={{paddingTop:50}}>App Development</h4>
            <p style={{marginTop:40,textAlign:'justify'}}>Calculate your mobile app development cost accurately & effortlessly
               with our calculator! Just a few clicks and get real-time Estimation of your
                mobile app develop cost in second.
                iOS App Development Cost · Custom App Develop Cost · Android App Development</p>
                <br/><br/>
              <Link to='/' className="link2">Read More...</Link>
            </Col>

            <Col className='c1'>
            <MdVideoSettings style={{fontSize:60,marginLeft:30}}/><br/>
            <h4 style={{paddingTop:50}}>Video Editing</h4>
            <p style={{marginTop:40,textAlign:'justify'}}>Begin making awesome videos with our intuitive interface and a 
              collection of cool effects. Create spectacular videos, even if you
               don’t have any movie-making experience. Try it now!
              Intuitive Interface · Free Trial Version · Attentive Support Team · Detailed Tutorials</p>
              <br/><br/>
              <Link to='/' className="link2">Read More...</Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{paddingTop:80}}>
        <Container>
          <Row>          
            <Col className='c1' style={{marginTop:-30}}>
              
            <HiMiniComputerDesktop   style={{fontSize:60,marginLeft:30}}/><br/>
            <h4  style={{paddingTop:50,}}>Web Design</h4>
            <p style={{marginTop:40,textAlign:'justify'}}>Our Website Builder Helps Bring Your Unique Vision To Life — Start 
              Building For Free. Build, Publish, And Sell From Your Website The term "web design" is normally used to describe
               the design process relating to the front-end (client side) design of a website including writing markup. Web 
               design partially overlaps web</p>
              <br/>
              <Link to='/' className="link2">Read More...</Link>
              
            </Col>

            <Col className='c1'  style={{marginTop:-30}}>
            <GrNotes  style={{fontSize:60,marginLeft:30}}/><br/>
            <h4 style={{paddingTop:50}}>App Development</h4>
            <p style={{marginTop:40,textAlign:'justify'}}>Calculate your mobile app development cost accurately & effortlessly
               with our calculator! Just a few clicks and get real-time Estimation of your
                mobile app develop cost in second.
                iOS App Development Cost · Custom App Develop Cost · Android App Development</p>
                <br/><br/>
              <Link to='/' className="link2">Read More...</Link>
            </Col>

            <Col className='c1' style={{marginTop:-30}}>
            <FaRegLightbulb style={{fontSize:60,marginLeft:30}}/><br/>
            <h4 style={{paddingTop:50}}>Video Editing</h4>
            <p style={{marginTop:40,textAlign:'justify'}}>Begin making awesome videos with our intuitive interface and a 
              collection of cool effects. Create spectacular videos, even if you
               don’t have any movie-making experience. Try it now!
              Intuitive Interface · Free Trial Version · Attentive Support Team · Detailed Tutorials</p>
              <br/><br/>
              <Link to='/' className="link2">Read More...</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <center>
          <button className='b2'>Find More Courses</button>
        </center>
      </div>

      <div style={{paddingTop:100,backgroundColor:'#F6FBFF',paddingBottom:100}}>
        <Container>
          <Row >
            <Col>
            <center>
            <HiOutlineComputerDesktop style={{fontSize:100,color:'#0F9B74'}}/>
            <br/>
            <b style={{fontSize:30}}>950<span style={{fontSize:30}}>+</span>topic</b>
            </center>
            </Col>

            <Col>
            <center>
            <FaBookOpenReader style={{fontSize:100,color:'#2D3092'}}/>
            <br/>
            <b style={{fontSize:30}}>950<span style={{fontSize:30}}>+</span>topic</b>
            </center>
            </Col>

            <Col>
            <center>
            <GrNotes style={{fontSize:100,color:'#299B10'}}/>
            <br/>
            <b style={{fontSize:30}}>950<span style={{fontSize:30}}>+</span>topic</b>
            </center>
            </Col>

            <Col>
            <center>
            <MdPerson4 style={{fontSize:100,color:'#F05510'}}/>
            <br/>
            <b style={{fontSize:30}}>950<span style={{fontSize:30}}>+</span>topic</b>
            </center>
            </Col>
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
      </div>
    </div>
  )
}

export default About