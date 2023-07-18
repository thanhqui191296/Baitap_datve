import React, { Component } from 'react'
import "./style.css"
import ThongTin from './thongtin'
import danhSachGheData from '../data/danhSachGhe.json'
import DanhSachGhe from './danhsachghe'
export default class BaiTapBooking extends Component {
    renderHangGhe = () =>{
        return danhSachGheData.map((hangGhe,index) =>{
            return <div key={index} >
                    <DanhSachGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }
    render() {
        return (
            <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./images/booking/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <div className='text-warning display-6'> ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                                <div className='mt-3 text-light' style={{fontSize:'25px'}}>Màn Hình</div>
                                <div className='mt-2' style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                                    
                                <div className='screen'></div>
                                {this.renderHangGhe()}
                                </div>
                                
                            </div>
                            
                            <div className='col-4'>
                                <div className='text-light display-6 mt-2' style={{fontSize:'25px'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTin/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

