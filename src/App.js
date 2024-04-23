import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Index from './components/Body/index';
import About from './components/Body/About';
import Courses from './components/Body/Courses';
import Contact from './components/Body/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact Component={Index}/>
          <Route path="about" exact Component={About}/>
          <Route path="courses" exact Component={Courses}/>        
          <Route path="contact" exact Component={Contact}/>
        </Routes>
      </Router>
<Footer/>
    </div>
  );
}

export default App;
