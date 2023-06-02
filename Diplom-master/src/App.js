import './App.css';
import OrcsList from './components/pages/OrcsList'
import {Routes, Route, Link} from 'react-router-dom'
import GlobalLayout from  './components/globalLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoGraphics from './components/pages/infoGraph';
//import Analysis from './components/pages/Analysis ';
import AboutUs from './components/pages/aboutUs';


function App() {
  return (
    <Routes>
        <Route path='/' element={<GlobalLayout/>}>
        <Route index path='/' element={<AboutUs/>} ></Route>
        <Route path='InfoGraphics' element={<InfoGraphics/>}></Route>
        <Route path='orcsList' element={<OrcsList/>} ></Route>
        
    
      </Route>
    </Routes>
  );
}

export default App;
