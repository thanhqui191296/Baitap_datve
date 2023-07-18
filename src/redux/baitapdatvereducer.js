import { DAT_GHE, HUY_GHE } from "./baitapdatveconst"

const STATE_DEFAULT = {
    danhSachGheDangDat:[

    ]
}
const BaiTapDatVeReducer =(state =STATE_DEFAULT,action) =>{
    switch(action.type){
        case DAT_GHE:{
            let danhSachGheDangDatUpadte =[...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpadte.findIndex(gheDangDat => gheDangDat.soGhe === action.payload.soGhe)
            if (index !== -1){
                danhSachGheDangDatUpadte.splice(index,1)
            }else{
                danhSachGheDangDatUpadte.push(action.payload)
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpadte
            return {...state}
        }
        case HUY_GHE:{
            let danhSachGheDangDatUpadte =[...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpadte.findIndex(gheDangDat => gheDangDat.soGhe === action.payload)
            if (index !== -1){
                danhSachGheDangDatUpadte.splice(index,1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpadte
            return {...state}
        }
        default:
            return state
    }
}
export default BaiTapDatVeReducer