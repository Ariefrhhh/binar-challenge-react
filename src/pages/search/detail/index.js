import React, {useCallback, useEffect, useState} from "react";
import { Row,Col,Spinner } from "react-bootstrap";
import Input from '../../../component/input';
import SelectBox from '../../../component/Selectbox';
// import Button from '../../../component/button';
import Segment from "../../../component/segment";
import { fetchApi } from "../../../config/services";
import { useParams } from "react-router-dom";

const DetailCar = (props) => {

    const carSize = {
        small: "2 - 4 Orang",
        medium: "4 - 6 Orang",
        large: "6 - 8 Orang"
    }
    

    const [data, setData] = useState(null)
    const{id} = useParams()
    const [loader, setloader] = useState("idle")

    const fetchingMobil = useCallback((params=null) => {
        setloader ("fetching")
        fetchApi(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`, params).then(result => {
            setData(result.data)
            setloader ("resolve")
        //    setData(result.data.cars)
        })
    },[id])

    useEffect(() => {
        fetchingMobil()
    },[fetchingMobil])

    console.log(data)
    
    const formatNumber = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    return(
        <Segment>
        <Segment className='col-sm-12 col-md-12 col-lg-12 position-relative d-flexrow' style={{ top: "-16rem", height: "14rem",background:"#F1F3FF"}}>
        <Segment className='contains-box-detail w-100 d-grid align-items-center justify-content-center ' style={{ marginTop: "16rem" }}>
            {/* {backDrop && <Segment id="back-drop" className='backDrop'></Segment>} */}
            <Segment className='list-form-detail d-flex gap-0 justify-content-evenly'>
                <Input
                disabled={true}
                  placeholder="Masukan Nama/Tipe Mobil"
                  className="form-control"
                  name="carName"
                  label={"Nama Mobil"} />
                  <SelectBox
                        disabled={true}            
                        name="kapasitas"
                        title="Masukan Kapasitas Mobil"
                        label="Kategori"
                    />
                    <SelectBox
                        disabled={true}      
                        name="harga"
                        title="Masukan Harga Sewa"
                        label="Harga Sewa"            
                    />
                    <SelectBox
                        disabled={true}              
                        name="status"
                        title="Masukan Status Mobil"
                        label="Status"                  
                        />
                        {/* <Segment className='d-flex align-items-center position-relative' style={{ top: "6px" }}>
                            <Button className="btn btn-success">Cari Mobil</Button>
                        </Segment> */}
                        </Segment>
                </Segment>
                </Segment>
                {loader !== "resolve" && <Segment className="text-center loader"><Spinner size="md" color='success'></Spinner></Segment>}
                {loader === "resolve" &&
                <Segment className="contains-box-detail contains-car-detail">
                <Row>
                     <Col md={7} >
                        <Segment className="card" style={{padding: "24px"}}>
                        <h5>Tentang Paket</h5>
                            <h6>Include</h6>
                            <ul>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>udah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>   
                            <h6>Exclude</h6>
                            <ul>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>   
                            <h6>Refund, Reschedule, Overtime</h6>
                            <ul>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>   
                        </Segment>
                        
                        </Col>   
                        <Col md={5}>
                            <Segment className="card">
                            <Segment className="card-image-car-detail">
                            <img className="img-contain-detail" src={data?.image} alt="pict-car" />
                            <Segment className="card-text-detail">
                                <Segment className="py-1" style={{ fontSize: "14px", fontWeight: 700 }}>{data?.name}</Segment>
                                <Segment className="py-1" style={{ fontSize: "10px", color: "#8A8A8A" }}>
                                    <i className='fa fa-users'></i> {carSize[data?.category]}
                                </Segment>
                                <Segment className="d-flex justify-content-between py-1">
                                    <Segment style={{ fontSize: "14px", fontWeight: 700 }}>Total</Segment>
                                    <Segment style={{ fontSize: "14px", fontWeight: 700 }}>{formatNumber(data?.price)}</Segment>
                                </Segment>
                            </Segment>  
                            </Segment>
                            </Segment>
                        </Col>
                </Row>

                </Segment>}
                        
                </Segment>
                    
    )
}

export default DetailCar