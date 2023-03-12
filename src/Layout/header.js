import React, {useState} from "react";
import heroBanner from '../assets/images/img_car.png'
import Button from '../component/button'
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from '../component/sidebar';



const Header = (props) =>{
    const Navigate = useNavigate()
    const location = useLocation()
    const [open, setOpen] = useState (false)
    console.log (location);

     const openSideBar = () => {
        setOpen(!open) 
     }

    const params = useLocation()
    return(
        <header>
        <div className="container-fluid header" style={{backgroundColor: '#F1F3FF'}}>
          <div className="row">                            
              <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-around">
                  <div className="title-header position-relative my-2"></div>
                  <nav className="navigation d-none d-lg-block d-xxl-block">
                      <ul className="d-flex gap-5 list-unstyled position-relative mt-3">
                          <li>Our Services</li>
                          <li>Why Us</li>
                          <li>Testimonial</li>
                          <li>FAQ</li>
                      </ul>
                  </nav>
                  <button 
                    onClick={openSideBar}
                    id="click-btn" className="btn d-lg-none d-xl-none"><i className="fa fa-bars"></i></button>
                  </div>
              </div>
          </div>
          {!params.pathname.split('/').filter(i => i !== "")[1] &&
          <section>
            <div  className="hero d-flex gap-5 justify-content-between">
              <div className="d-flexrow gap-2 my-5 mx-5 py-5 px-5">
              <h1 className="title">Sewa Rental Mobil Terbaik di kawasan Tangerang</h1>
              <p className="paragraph">Selamat datang di Binar Car Rental.
  Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu
  siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <Button type="button" onClick={() => Navigate ('/cari-mobil')} className="btn btn-success" >Mulai Sewa Mobil</Button>
               </div>
              
              <img src={heroBanner} className="img-fit" alt="pict-alert"/>
              </div>
          </section> }
          <SideBar open={open} close={openSideBar} />
     </header>
    )
} 

export default Header