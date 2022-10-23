import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Bollywood from './component/Bollywood';
import Technology from './component/Technology';
import Tourism from './component/Tourism';
import Fitness from './component/Fitness';
import Food from './component/Food';
import Error from './component/Error';
import Fulldata from './component/Fulldata';

function App() {
  return (
    <>
    <div className='main'>
      <p>The</p>
    </div>
    <h1 className='siren'>Siren</h1>
    <fetchData/>
    <Navbar />
    <Routes>
      <Route path='/' exact element = {<Home />} />
      <Route path='/Category/Bollywood' element = {<Bollywood />} />
      <Route path='/Category/Technology' element = {<Technology />} />
      <Route path='/Category/Tourism' element = {<Tourism />} />
      <Route path='/Category/Fitness' element = {<Fitness />} />
      <Route path='/Category/Food' element = {< Food />} />
      <Route path='/*' element  = { <Error />} />
      <Route path='/Bollywood/:id' element = {<Fulldata/>} />
      <Route path='/Technology/:id' element = {<Fulldata/>} />
      <Route path='/Tourism/:id' element = {<Fulldata/>} />
      <Route path='/Fitness/:id' element = {<Fulldata/>} />
      <Route path='/Food/:id' element = {<Fulldata/>} />
    </Routes>
    
    </>
  );
}

export default App;