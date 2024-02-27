import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//import bootstrap to all pages
import Home from './FrontendComponents/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import MenuPage from './FrontendComponents/Menus';
import Recipes from './FrontendComponents/Recipes';

import OpeningHours from './FrontendComponents/OpeningHours';
import FoodPantry from './FrontendComponents/FoodPantry';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* create a navigation bar at the top of the page for going between the pages */}
      <Container>
        <Navbar className='NavigationBar'>
          <Container>
            <Navbar.Brand href="#home">ATU</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Menus">Menu</Nav.Link>
              <Nav.Link href="/Recipes">Recipes</Nav.Link>
              <Nav.Link href="/FoodPantry">Food Pantry</Nav.Link>
              <Nav.Link href="/OpeningHours">Opening Hours</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
      
        {/* Change the url  to the specific component*/}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Menus' element={<MenuPage></MenuPage>}></Route>
          <Route path='/Recipes' element={<Recipes></Recipes>}></Route>
         
          <Route path='/OpeningHours' element={<OpeningHours></OpeningHours>}></Route>
          <Route path='/FoodPantry' element={<FoodPantry></FoodPantry>}></Route>
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
