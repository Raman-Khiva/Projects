import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets' ;

const Footer = () => {
  return (
    <footer>
        {/* <div className="footer-top">
            <h2>For Better Experience Download <br /> Tomato App</h2>
            <div className="footer-top-imgs">
                <a href="#"><img src={assets.play_store} alt="play_store" /></a>
                <a href="#"><img src={assets.app_store} alt="app_store" /></a>
            </div>
        </div> */}
        <div className="footer-bottom">
            <div className="footer-bottom-start">
                <img src={assets.logo} alt="logo" className='logo' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Praesentium consectetur possimus est pariatur ratione <br />quam similique debitis dolores quis aliquid. Illo quasi, dvitae <br /> doloremque mollitia laborum asperiores veniam labore minima.</p>
                <div className="footer-bottom-start-icons">
                    <a href='#'><img src={assets.facebook_icon} alt="facebook" /></a>
                    <a href='#'><img src={assets.twitter_icon} alt="twitter" /></a>
                    <a href='#'><img src={assets.linkedin_icon} alt="linkdin" /></a>
                </div>
            </div>


            <div className="footer-bottom-mid">
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Dilvery</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>


            <div className='footer-bottom-end'>
                <h3>GET IN TOUCH</h3>
                <ul>
                    <li><a href="#">+1-212-4560-7890</a></li>
                    <li><a href="#">contach@greatstack.dev</a></li>
                </ul>
                
                
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 c Tomato.com - All Right Reserved.</p>
    </footer>
  )
}

export default Footer
