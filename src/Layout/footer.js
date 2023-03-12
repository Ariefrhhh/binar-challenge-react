import React from "react";
import facebook from '../assets/images/icon_facebook.png'
import instagram from '../assets/images/icon_instagram.png'
import twitter from '../assets/images/icon_twitter.png'
import mail from '../assets/images/icon_mail.png'
import twitch from '../assets/images/icon_twitch.png'
import rectangle from '../assets/images/Rectangle 74.png'
import Segment from "../component/segment"
const Footer = (props) => {
return (
<section className="footer container-fluid d-flex p-5">
    <Segment className="paragraph-title col-lg-2 m-5">
      <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
      <p>binarcarrental@gmail.com</p>
      <p>081-233-334-808</p>
    </Segment>
   
    <Segment className="paragraph-title m-5">
      <p>Our Services</p>
      <p>Why Us</p>
      <p>Testimonial</p>
      <p>FAQ</p>
    </Segment>
     <Segment className="paragraph-title col-lg-2 m-5">
      <p>Connect With Us</p>
        <img className='px-1' src={facebook} alt="pict-alt"/>
        <img className='px-1' src={instagram} alt="pict-alt"/>
        <img className='px-1' src={twitter} alt="pict-alt"/>
        <img className='px-1' src={mail} alt="pict-alt"/>
        <img className='px-1' src={twitch} alt="pict-alt"/>
      </Segment>
     <Segment className="copyright-footer col-lg-2 m-5">
      <p>Copyright Binar 2022</p>
      <img src={rectangle} alt="pict-alt"/>
     </Segment>
  </section>

)
}
export default Footer