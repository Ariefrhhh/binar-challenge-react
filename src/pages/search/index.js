import React, {useCallback, useEffect, useState} from "react";
import { Col, Row } from "react-bootstrap";
import Input from '../../component/input';
import SelectBox from '../../component/Selectbox';
import Button from '../../component/button';
import Form from '../../component/form'
import Segment from "../../component/segment";
import { fetchApi } from "../../config/services";
import { useNavigate } from "react-router-dom";

const categoryData = [{
    value: "small",
    label: "2 - 4 Orang"
}, {
    value: "medium",
    label: "4 - 6 Orang"
}, {
    value: "large",
    label: "6 - 8 Orang"
}]

const priceData = [{
    value: 400000,
    label: "< Rp.400.000"},
    {
    value: 600000,
    label: " Rp.400.000-Rp.600.000"},
    {
    value: 400000,
    label: "> Rp.400.000"
}]

const statusData =[{
    value: true,
    label: "disewa"},
    { 
    value:false,
    label:"tidak disewa"
}  
]

const SearchCar = (props) => {
    const [value, setValue] = useState ({
        carName:"",
        kapasitas:"",
        harga:"",
        status:"",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [backDrop, setBackDrop] = useState(false)

 

    document.addEventListener("click", (e) => {
       if (e.target.id === "back-drop") {
        setBackDrop(false)
       }
    })

    const fetchingMobil = useCallback((params=null) => {
        fetchApi ('https://bootcamp-rent-cars.herokuapp.com/customer/v2/car',params).then(result=>{
           console.log(result); 
           setData(result.data.cars)
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchingMobil({
            name: value.carName,
            category: value.kapasitas,
            isRented: value.status,
            minPrice: value.harga,
            maxPrice: value.harga
        })
    }

    useEffect(() => {
        fetchingMobil()
    },[fetchingMobil])
    
    const formatNumber = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    return(
        <>
        <Segment className='col-sm-12 col-md-12 col-lg-12 position-absolute d-flexrow' style={{ top: "11rem"}}>
        <Segment className='contains-box w-100 d-grid align-items-center justify-content-center ' style={{ marginTop: "16rem" }}>
            {backDrop && <Segment id="back-drop" className='backDrop'></Segment>}
            <Form onSubmit={handleSubmit}>
            <Segment className='list-form d-flex gap-3 justify-content-evenly'>
                <Input
                  onFocus={()=> { setBackDrop(true) }}
                  onChange={handleChange}
                  placeholder="Masukan Nama/Tipe Mobil"
                  className="form-control"
                  name="carName"
                  label={"Nama Mobil"} />
                  <SelectBox
                        onFocus={()=> { setBackDrop(true) }}
                        onChange={handleChange}
                        name="kapasitas"
                        title="Masukan Kapasitas Mobil"
                        label="Kategori"
                        data={categoryData}
                    />
                    <SelectBox
                        onFocus={()=> { setBackDrop(true) }}
                        onChange={handleChange}
                        name="harga"
                        title="Masukan Harga Sewa"
                        label="Harga Sewa"
                        data={priceData}
                    />
                    <SelectBox
                        onFocus={()=> { setBackDrop(true) }}
                        onChange={handleChange}
                        name="status"
                        title="Masukan Status Mobil"
                        label="Status"
                        data={statusData}
                        />
                        <Segment className='d-flex align-items-center position-relative' style={{ top: "6px" }}>
                            <Button className="btn btn-success">Cari Mobil</Button>
                        </Segment>
                        </Segment>
                    </Form>
                </Segment>
                </Segment>
                <Segment className="contains-box contains-car">
                    <Row className="card-row">  
                    {
                    data.map((item, index) => {
                        return ( <Col key={index} md={4} className="ms-0 mx-0 ">
                        <Segment className="card list-car d-flex flex-column gap-3">
                                <Segment className="card-image-car">
                                  <img className="img-contain" src={item.image} alt="pict-car" />
                                </Segment>
                                <Segment className="card-content-desc">
                                    <p>{item.name}</p>
                                    <h6>{formatNumber(item.price)}/Hari</h6>
                                    <p className="car-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <Button onClick={()=>navigate(`/cari-mobil/${item.id}`)} type="button" className='btn btn-success w-100'> Pilih Mobil</Button>
                                </Segment>
                                {/* <Segment className="card-footer"></Segment> */}
                              </Segment>
                            </Col> 
                        );
                      })
                    }
                        
                    </Row>
                </Segment>
                
                </>
    )
}

export default SearchCar