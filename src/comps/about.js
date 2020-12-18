import { Fragment } from 'react';
import { Route, Switch, withRouter, Link, useHistory, BrowserRouter } from 'react-router-dom';
import '../styles/about.css'
import team1 from '../img/team1.jpg'
import team2 from '../img/team2.jpg'
import team3 from '../img/team3.jpg'
import walpaper from '../img/walpaper.jpg'


const AboutPage = withRouter(({history}) => {
    return <body>
        <div style={{backgroundImage:"url("+ walpaper + ")"}} class="about-section">
            <h1>ჩვენს შესახებ</h1>
            <p>ჩვენ ვართ პირველი ბარსელონას ქართული ოფიციალური ფან-კლუბი</p>
        </div>
    
        <h2 style={{textAlign:'center'}}>ჩვენი გუნდი</h2>

        <div class="row">
            <div class="column">
                <img src={team1} alt="Jane" style={{width:'100%'}}/>
                <div style={{color:'black'}} class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <p><button onClick={() => { history.push("/contact") }} class="button">დაკავშირება</button></p>
                </div>
            </div>

            <div class="column">
                <img src={team2} alt="Mike" style={{width:'100%'}}/>
                <div style={{color:'black'}} class="container">
                    <h2>Mike Ross</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button onClick={() => { history.push("/contact") }}  class="button">დაკავშირება</button></p>
                </div>
            </div>
        
            <div class="column">
                <img src={team3} alt="John" style={{width:'100%'}}/>
                <div style={{color:'black'}} class="container">
                    <h2>John Doe</h2>
                    <p class="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>john@example.com</p>
                    <p><button onClick={() => { history.push("/contact") }} class="button">დაკავშირება</button></p>
                </div>
            </div>
        </div>
        
        
    </body>
  })

export default AboutPage;