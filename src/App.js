import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//import bootstrap to all pages
import Home from './FrontendComponents/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import MenuPage from './FrontendComponents/Menus';
import Recipes from './FrontendComponents/Recipes';

import OpeningHours from './FrontendComponents/OpeningHours';
import FoodPantry from './FrontendComponents/FoodPantry';
import Day from './FrontendComponents/Day';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="Top">
        {/* create a navigation bar at the top of the page for going between the pages */}
       
          <Navbar expand="lg" className='NavigationBar'>
            <Container fluid>
              <Navbar.Brand href="/">
                <img
                  src="/homeLogo.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="home logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Menus">Menu</Nav.Link>
                  <Nav.Link href="/Recipes">Recipes</Nav.Link>
                  <Nav.Link href="/FoodPantry">Food Pantry</Nav.Link>
                  <Nav.Link href="/OpeningHours">Opening Hours</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>

            </Container>
          </Navbar>
        
        {/* Change the url  to the specific component*/}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Menus' element={<MenuPage></MenuPage>}></Route>
          <Route path='/Recipes' element={<Recipes></Recipes>}></Route>
          <Route path='/OpeningHours' element={<OpeningHours></OpeningHours>}></Route>
          <Route path='/FoodPantry' element={<FoodPantry></FoodPantry>}></Route>
          {/* this route is for the weekly menu days */}
          <Route path="/day/:day" element={<Day></Day>}></Route>
        
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
