
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Education from './components/Education';


function App() {
  return (
    <div className='bg-black'>
      <NavBar/>
      <Home/>
      {/* <SocialLinks/> */}
      <About/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
