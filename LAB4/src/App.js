import { Component } from 'react';
import './App.css';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import
{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';
import { Create } from './components/create';
import { Read } from './components/read';



class App extends Component{

  render(){
    return (
      <Router>
                <div className="App">
                    <Navbar bg="danger" expand="lg">
                        <Container>
                            <Navbar.Brand href="/"></Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/read">Read</Nav.Link>
                                <Nav.Link href="/create">Create</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
      <Routes>
      <Route path='/' element={<Content />}></Route>
                        <Route path='/read' element={<Read />}></Route>
                        <Route path='/create' element={<Create />}></Route>
           
          
      </Routes>
      </div>
      </Router>
    );
  }
    
  }


export default App;
