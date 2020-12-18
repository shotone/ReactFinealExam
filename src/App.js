import logo from './img/Logo.png';
import './App.css';
import { Route, Switch, withRouter, Link, useHistory, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap";
import MainPage from './comps/main';
import ContactPage from './comps/contact';
import AboutPage from './comps/about';
import './styles/product.css'

const NavBar = withRouter(({history}) => {
  
  return <nav class="site-header sticky-top py-1">
  <div class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2" style={{cursor:"pointer"}} title={"ბარსელონა"} onClick={() => { history.push("/") }}>
    <img src={logo} alt="Logo" style={{width:60, height:30}}/>
    </a>
    <a type="button" onClick={() => { history.push("/") }} class="nav-item nav-link active">მთავარი <span class="sr-only">(current)</span></a>
        <a type="button" onClick={() => { history.push("/contact") }} class="nav-item nav-link">კონტაქტი</a>
        <a type="button" onClick={() => { history.push("/about") }} class="nav-item nav-link">ჩვენს შესახებ</a>
  </div>
</nav>    
})


const Footer = () => {
  return  <footer class="bg-light text-center text-lg-start">
  <div class="text-center p-3" style={{backgroundColor:"rgba(0,0,0,0.2)"}}>
    <a class="text-dark" href="#">Barcelona.com</a>
  </div>
</footer>
}

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
