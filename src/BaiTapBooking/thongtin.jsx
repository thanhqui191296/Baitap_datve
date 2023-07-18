import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheCreator } from '../redux/baitapdatveaction'

 class ThongTin extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span className='text-light' style={{ fontSize: '20px' }}>Ghế đã đặt</span> <br />
                    <button className='gheDangChon'></button> <span className='text-light' style={{ fontSize: '20px' }}>Ghế đang chọn</span><br />
                    <button className='ghe' style={{ marginLeft: '0' }}></button> <span className='text-light' style={{ fontSize: '20px' }}>Ghế đang chọn</span>
                </div>
                <div className='mt-5'>
                    <table className='table table-bordered' border={2}>
                        <thead>
                            <tr className='text-light' style={{fontSize:'20px'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat,index) =>{
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><button onClick={()=>{
                                        this.props.dispatch(huyGheCreator(gheDangDat.soGhe))
                                    }} className='btn btn-danger'>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index) =>{
                                    return tongTien +=gheDangDat.gia
                                },0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) =>{
    return{
        danhSachGheDangDat : rootReducer.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps)(ThongTin)