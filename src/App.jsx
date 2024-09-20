import {HashRouter as Router, Route, Routes } from 'react-router-dom'
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contacts from './pages/Contacts'
// Components
import Footer from './components/Footer'
import Header from './components/Header'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import CheckOut from './components/CheckOut'
function App() {

  return (
    <div className='overflow-hidden'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contacts' element={<Contacts/>} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/SignUp'  element={<SignUp/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/CheckOut' element={<CheckOut/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}
export default App
