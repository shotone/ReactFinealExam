import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap";
import { useEffect, useState } from 'react';


const MainPage = (props) => {
  return <body><div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="bg-dark col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 font-weight-normal">ბარსელონა</h1>
      <br/>
      <p style={{color:'red', fontWeight:'bolder'}} class="lead font-weight-normal">თქვენი მიზანია გამოიცნოთ ჩაფიქრებული ასო</p>
      <a onClick={props.onChange} class="btn btn-outline-secondary">დაკლიკე და მოიგე :)</a>
    </div>
    <div class="product-device box-shadow d-none d-md-block"></div>
    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
  </div>

  <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <a href="https://www.fcbarcelona.com/en/football/first-team/news" target="_blank"  style={{backgroundColor:"#A70042", cursor:"pointer"}} class="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">სიახლეები</h2>
        <p class="lead">აქ არის სიახლეები.</p>
      </div>
      <div class="bg-light box-shadow mx-auto" style={{width:"80%", height:"300", borderRadius:"21 0 0"}}></div>
    </a>
    <a href="https://www.fcbarcelona.com/en/football/first-team/photos" target="_blank" style={{backgroundColor:"#004C99", cursor:"pointer"}} class=" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">ფოტოები</h2>
        <p class="lead">აქ არის ფოტოები.</p>
      </div>
      <div class="bg-dark box-shadow mx-auto" style={{width:"80%", height:"300", borderRadius:"21 0 0"}}></div>
    </a>
  </div>
  
  <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <a href="https://www.fcbarcelona.com/en/football/first-team/players" target="_blank" style={{backgroundColor:"#DB002C", cursor:"pointer"}} class=" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">შემადგენლობა</h2>
        <p class="lead">აქ არის შემადგენლობა</p>
      </div>
      <div class="bg-dark box-shadow mx-auto" style={{width:"80%", height:"300", borderRadius:"21 0 0"}}></div>
    </a>
    <a href="https://www.fcbarcelona.com/en/football/first-team/schedule" target="_blank"  style={{backgroundColor:"#EDBC00", cursor:"pointer"}} class=" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">სეზონი</h2>
        <p class="lead">აქ არის სეზონის შესახებ ინფორმაცია</p>
      </div>
      <div class="bg-light box-shadow mx-auto" style={{width:"80%", height:"300", borderRadius:"21 0 0"}}></div>
    </a>
  </div>

</body>
}

export default MainPage;