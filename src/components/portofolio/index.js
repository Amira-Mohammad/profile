import React , {Component} from 'react';
import axios from 'axios';
import './style.css';
class portoflio extends Component {
    state = {
        skills : []
    }
    render(){
  return (
    <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML5</li>
                <li className="portfolio-item">CSS3</li>
                <li className="portfolio-item">JavaScript</li>
                <li className="portfolio-item">JQuery</li>
                <li className="portfolio-item">React JS</li>
            </ul>
            
            <div className="box">
                
                <div>
                    <img src="images/Portfolio/portfolio-img1.jpg" alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                 <div>
                    <img src="images/Portfolio/portfolio-img2.jpg" alt=""/>
                    <p class="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img3.jpg" alt=""/>
                    <p class="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img4.jpg" alt=""/>
                    <p class="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img5.jpg" alt=""/>
                    <p class="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img6.jpg" alt=""/>
                    <p class="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img7.jpg" alt=""/>
                    <p class="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src="images/Portfolio/portfolio-img8.jpg" alt=""/>
                    <p class="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                 
            </div>
            
        </div>
  );
}}

export default portoflio;
