import logo from './img/Logo.png';
import './App.css';
import { Route, Switch, withRouter, Link, useHistory, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap";
import MainPage from './comps/main';
import ContactPage from './comps/contact';
import AboutPage from './comps/about';
import Footer from './comps/footer';
import Movies from './comps/movies';


import './styles/product.css'
import { Fragment }  from 'react';
import { Component, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure()
const NavBar = withRouter(({history}) => {
  
  return <nav class="site-header sticky-top py-1">
  <div class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2" style={{cursor:"pointer"}} title={"ბარსელონა"} onClick={() => { history.push("/") }}>
    <img src={logo} alt="Logo" style={{width:60, height:30}}/>
    </a>
    <a type="button" onClick={() => { history.push("/") }} class="nav-item nav-link active">მთავარი <span class="sr-only">(current)</span></a>
        <a type="button" onClick={() => { history.push("/contact") }} class="nav-item nav-link">კონტაქტი</a>
        <a type="button" onClick={() => { history.push("/about") }} class="nav-item nav-link">ჩვენს შესახებ</a>
        <a type="button" onClick={() => { history.push("/movies") }} class="nav-item nav-link">ფილმები</a>
  </div>
</nav>    
})


// const Footer = () => {
//   return  <footer class="bg-light text-center text-lg-start">
//   <div class="text-center p-3" style={{backgroundColor:"rgba(0,0,0,0.2)"}}>
//     <a class="text-dark" href="#">Barcelona.com</a>
//   </div>
// </footer>
// }

const A = 65 // ASCII character code

class ParentComponent extends Component {

  letters = Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
  
  

  handleChange = () => {
    alert("Child handler called")
  }

  handleChangeWithArgs = (arg) => {
    

    var num = Math.floor(Math.random() * this.letters.length)
    if(this.letters[num] == "A"){

      // alert("მოიგეთ: " + this.letters[num])
      toast.success("მოიგეთ: " + this.letters[num], {position: toast.POSITION.TOP_CENTER})



    }else{
    toast.warning('კიდევ სცადეთ: ' + this.letters[num],{position: toast.POSITION.TOP_RIGHT});
    }
  }

  render() {
    return <Fragment>
        <MainPage onChange={this.handleChangeWithArgs}/>
    </Fragment>
  } 

}






function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={ParentComponent} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/movies" exact component={Movies} />
        </Switch>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
