
import './App.css';
import Navbar from './Components/Navbar';
import bgimgmainpage from './images/header-bg.png';
import Section1 from './Components/mainPage/Section1';
import Form1 from './Components/loginforms/Form1';


function App() {
  return (

    <>

      <div className="container-fluid">

        <div className="container">
          <Navbar />
        </div>
      
          <img className='bg-img' src={bgimgmainpage} alt="bgImg" />

        <Section1></Section1>

        <Form1></Form1>

      </div>



    </>

  );
}     

export default App;
