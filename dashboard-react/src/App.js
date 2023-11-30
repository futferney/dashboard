import { BrowserRouter as Router,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from '../src/pages/Home'
import Sales from '../src/pages/Sales'
import Client from '../src/pages/Clients'
import './App.scss'


function App() {
  return (
    <Router >
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <div className='content'>
          <Route path='/' exact={true} Component={Home}/>
          <Route path='/sales' exact={true} Component={Sales}/>
          <Route path='/clients' exact={true} Component={Client}/>
        </div>
      </div>
      
      
    </Router>
  );
}

export default App;
