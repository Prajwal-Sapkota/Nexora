
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollTopButton from './components/ScrollTopButton';
function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element ={<Home/>} />
    </Routes>
    <ScrollTopButton/>
   </Router>
  )
}

export default App
