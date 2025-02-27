import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>PahalwanDaDhaba is your go-to food delivery app, bringing you rich flavors and hearty meals inspired by classic dhaba cooking. Whether you're craving spicy curries, stuffed parathas, or indulgent desserts, we’ve got something for every food lover. Our focus is on quality, taste, and generous portions — all delivered fresh to your door. Good food, made with love, delivered with care.

</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 1234567890</li>
                    <li>pahalwandadhaba@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 &copy; PahalwanDaDhaba - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer