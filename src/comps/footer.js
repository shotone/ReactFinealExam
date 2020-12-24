import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap";
import '../styles/main.css';



const Footer = () => {
    return <footer class="new_footer_area bg_color">
     <div class="new_footer_top">
        <div class="container">
           <div class="row">
              <div class="col-lg-3 col-md-6">
                 <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility:"visible", animationDelay:0.2, animationName:'fadeInLeft'}}>
                    <h3 class="f-title f_600 t_color f_size_18">სახელი და გვარი</h3>
                    <a href="#">შოთა ფირანაშვილი</a>
                    
                 </div>
              </div>
              <div class="col-lg-3 col-md-6">
                 <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility:"visible", animationDelay:0.4, animationName:'fadeInLeft'}}>
                    <h3 class="f-title f_600 t_color f_size_18">ასაკი</h3>
                    <ul class="list-unstyled f_list">
                       <li><a href="#">21 წელი</a></li>
                       
                    </ul>
                 </div>
              </div>
              <div class="col-lg-3 col-md-6">
                 <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility:"visible", animationDelay:0.6, animationName:'fadeInLeft'}}>
                    <h3 class="f-title f_600 t_color f_size_18">პროფესია</h3>
                    <ul class="list-unstyled f_list">
                       <li><a href="#">Software Engineer</a></li>
                      
                    </ul>
                 </div>
              </div>
              <div class="col-lg-3 col-md-6">
                 <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility:"visible", animationDelay:0.8, animationName:'fadeInLeft'}}>
                    <h3 class="f-title f_600 t_color f_size_18">ეროვნება</h3>
                    <ul class="list-unstyled f_list">
                       <li><a href="#">ქართველი</a></li>
                      
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div class="footer_bg">
           <div class="footer_bg_one"></div>
           <div class="footer_bg_two"></div>
        </div>
     </div>
     <div class="footer_bottom">
        <div class="container">
           <div class="row align-items-center">
              <div class="col-lg-6 col-sm-7">
                 <p class="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p>
              </div>
              <div class="col-lg-6 col-sm-5 text-right">
                 <p>Made with <i class="icon_heart"></i> in <a href="#">CakeCounter</a></p>
              </div>
           </div>
        </div>
     </div>
  </footer>
        
    

  }
  

  export default Footer;