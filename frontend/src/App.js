import axios from 'axios'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
function App() {

   return<>
      <Router>
         <Navbar/>
         <Routes>
               <Route path='/' element={<Home />} />
         </Routes>
      </Router>
      
   </>
}

export default App;
