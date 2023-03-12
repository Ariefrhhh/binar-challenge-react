import React from "react"; 
import heroService from "../../assets/images/img_service.png"
import professional from "../../assets/images/icon_professional.png"
import complete from "../../assets/images/icon_complete.png"
import price from "../../assets/images/icon_price.png"
import time from "../../assets/images/icon_24hrs.png"
import star from "../../assets/images/Rate.png"
import right from "../../assets/images/Right button.png"
import left from "../../assets/images/Left button.png"
import man from "../../assets/images/img_photo1.png"
import woman1 from "../../assets/images/img_photo.png"
import woman2 from "../../assets/images/img_photo2.png"
import Button from "../../component/button";

const Home = (props) => {
    return(
          <>  
           <section className="d-flex hero2"> 
        <div className="row">
        <div className="col-md-6 text-center mb-5">
                        <img className="img-fit" src={heroService} alt="hero-service" />
                    </div>
    </div>
            <div className="d-flex flex-wrap gap-2">
                <h1>Best Car Rental for any kind of trip in Tangerang!</h1>
                <p className="paragraph-title my-4">Sewa mobil di 
Tangerang bersama Binar Car Rental jaminan harga lebih murah 
dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan 
terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul>
                  
                    <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                    <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                    <li>Sewa Mobil Jangka Panjang Bulanan</li>
                    <li>Gratis Antar - Jemput Mobil di Bandara</li>
                    <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
            </div>
    </section>
    <section className="whyus">
    <div>
        <div className="container-fluid">
          <div className="row mx-0">
            <div className="col-lg-6 col-md-6 col-sm-6 pt-5 pb-3 px-5">
              <h1 className="h1-title">Why Us?</h1>
              <p className="paragraph-title">Mengapa harus pilih Binar Car Rental?</p>
            </div>
          </div>
        <div className="container card-container1 d-flex gap-3 justify-content-center">
      <div className="card card-whyus col-lg-3 col-md-3 col-sm-3">
        <div className="card-body p-4">
          <img className='pb-3'src={complete} alt="group-pict"/>
          <h5 className="card-title">Mobil Lengkap</h5>
          <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
      </div>
      <div className="card card-whyus col-lg-3 col-md-3 col-sm-3">
        <div className="card-body p-4">
          <img className='pb-3' src={price} alt="group-pict"/>
          <h5 className="card-title">Mobil Lengkap</h5>
          <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
      </div>
      <div className="card card-whyus col-lg-3 col-md-3 col-sm-3">
        <div className="card-body p-4">
          <img className='pb-3' src={time} alt="group-pict"/>
          <h5 className="card-title">Mobil Lengkap</h5>
          <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
      </div>
      <div className="card card-whyus col-lg-3 col-md-3 col-sm-3">
        <div className="card-body p-4">
          <img className='pb-3' src={professional} alt="group-pict"/>
          <h5 className="card-title">Mobil Lengkap</h5>
          <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<section className="testimonial">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-5 pb-3 px-5">
              <h1 className="testimonial-title text-center">Testimonial</h1>
              <p className="testimonial-description text-center">Berbagai review positif dari para pelanggan kami</p>
            </div>
            <div className="card-container2 overflow-hidden justify-content-center gap-5 d-flex px-5">
              <div className="card d-none d-lg-block col-lg-4">
                <div className="card-body card-testimonial d-flex gap-4 align-items-center">
                  <div><img src={woman1} alt="group-pict"/></div>
                  <div className="card-testimonial-text d-flexrow">
                    <img src={star} alt="group-pict"/>
                    <p className="card-text">“Lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p className="testimonial-paragraph2">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="card card-testimonial col-lg-4">
                <div className="card-body d-flex gap-4 align-items-center">
                  <div><img src={man} alt="group-pict"/></div>
                  <div className="card-testimonial-text d-flexrow">
                    <img src={star}alt="group-pict"/>
                    <p className="card-text">“Lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p className="testimonial-paragraph2">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className="card d-none d-lg-block col-lg-4 card-testimonial custom-card-testimonial">
                <div className="card-body d-flex gap-4 align-items-center">
                  <div>
                    <img src={woman2} alt="group-pict"/>
                    </div>
                  <div className="card-testimonial-text d-flexrow">
                    <img src={star} alt="group-pict"/>
                    <p className="card-text">“Lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
 sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                    <p className="testimonial-paragraph2">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-button d-flex gap-4 justify-content-center mt-4">
          <img src={left} alt="group-pict"/>
          <img src={right} alt="group-pict"/>
        </div>
        </div>
        </section>
          <div className="container-fluid d-flex justify-content-center p-5 ">
            <div className="d-flex justify-content-center text-center col-lg-12 col-md-12 col-sm-12">
              <div className="title-sewamobil text-center">
              <h1 className="h1-title col-sm-12">Sewa Mobil di Tangerang Sekarang</h1>
              <p className="text-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Button className="btn btn-success custom-button1 mt-4">Mulai Sewa Mobil</Button>
              </div>
              </div>
              </div>
        <section className="FAQ">
            <div className="container d-flex FAQ-container my-5">
            <div className="FAQ-text m-5 px-5">
              <h1>Frequently Asked Question</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          <div className="row FAQ-ROW">
          <div className="w-straight-faq">
                            <ul className="list-unstyled d-flex flex-column gap-2 w-full">
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Apa saja syarat yang dibutuhkan?</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Berapa hari minimal sewa mobil lepas kunci?</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Berapa hari sebelumnya sabaiknya booking sewa mobil?</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Apakah Ada biaya antar-jemput?</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                                <li className="p-3 border-faq d-flex justify-content-between">
                                    <span>Bagaimana jika terjadi kecelakaan</span>
                                    <i className="fa fa-chevron-down"></i>
                                </li>
                            </ul>
                        </div> 
        </div>
      </div>
        </section>
    </>    
    )
}

export default Home