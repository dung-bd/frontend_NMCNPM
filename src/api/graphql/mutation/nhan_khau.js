import React, {useState} from "react";
import { gql } from "graphql";
import { useMutation } from "@apollo/client";
const TAO_NHAN_KHAU = gql`
  mutation taoNhanKhau($input: inputTaoNhanKhau!) {
    taoNhanKhau(input: $input) {
      bietDanh
      bietTiengDanToc
      danToc
      hoTen
    }
  }
`;

function TaoNhanKhau(){
const [bietDanh, setBietDanh] = useState("");
const [maNhanKhau, setMaNhanKhau] = useState("");
const [noiSinh, setNoiSinh] = useState("");
const [noiThuongTru, setNoiThuongTru] = useState("");
const [bietTiengDanToc, setBietTiengDanToc] = useState("");
const [dantoc, setDanToc] = useState("");
const [diaChiHienNay, setDiaChiHienNay] = useState("");
const [diaChiMoi, setDiaChiMoi] = useState("");
const [gioiTinh, setGioiTinh] = useState("");
const [hoTen, setHoTen] = useState("");
const [idNguoiTao, setIdNguoiTao] = useState("");
const [lyDoChuyenDen, setLyDoChuyenDen] = useState("");
const [lyDoChuyenDi, setLyDoChuyenDi] = useState("");
const [namSinh, setNamSinh] = useState("");
const [ngayChuyenDen, setNgayChuyenDen] = useState("");
const [ngayChuyenDi, setNgayChuyenDi] = useState("");
const [ngayTao, setNgayTao] = useState("");
const [ngheNghiep, setNgheNghiep] = useState("");
const [nguyenQuan, setNguyenQuan] = useState("");
const [noiLamViec, setNoiLamViec] = useState("");
const [quocTich, setQuocTich] = useState("");
const [soHoChieu, setSoHoChieu] = useState("");
const [tienAn, setTienAn] = useState("");
const [tonGiao, setTonGiao] = useState("");
const [trinhDoChuyenMon, setTrinhDoChuyenMon] = useState("");
const [trinhDoHocVan, setTrinhDoHocVan] = useState("");
const [trinhDoNgoaiNgu, setTrinhDoNgoaiNgu] = useState("");

const [createUser, { loading}] = useMutation(TAO_NHAN_KHAU)
if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }
  
    return (
        <div>
          <div>
            <input
              type="text"
              placeholder="Biệt danh"
              onChange={(event) => {
                setBietDanh(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Mã Nhân Khẩu"
              onChange={(event) => {
                setMaNhanKhau(event.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Nơi Sinh"
              onChange={(event) => {
                setNoiSinh(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Nơi thường trú"
              onChange={(event) => {
                setNoiThuongTru(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Nơi thường trú"
              onChange={(event) => {
                setNoiThuongTru(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Biết tiếng dân tộc"
              onChange={(event) => {
                setBietTiengDanToc(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Dân tộc"
              onChange={(event) => {
                setDanToc(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Địa chỉ hiện nay"
              onChange={(event) => {
                setDiaChiHienNay(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Địa chỉ mới"
              onChange={(event) => {
                setDiaChiMoi(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Giới tính"
              onChange={(event) => {
                setGioiTinh(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Họ tên"
              onChange={(event) => {
                setHoTen(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="ID"
              onChange={(event) => {
                setIdNguoiTao(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Lý do chuyển đến"
              onChange={(event) => {
                setLyDoChuyenDen(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Lý do chuyển đi"
              onChange={(event) => {
                setLyDoChuyenDi(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Năm sinh"
              onChange={(event) => {
                setNamSinh(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Ngày chuyển đến"
              onChange={(event) => {
                setNgayChuyenDen(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Ngày chuyển đi"
              onChange={(event) => {
                setNgayChuyenDi(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Ngày tạo"
              onChange={(event) => {
                setNgayTao(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Nghề nghiệp"
              onChange={(event) => {
                setNgheNghiep(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Nguyên quán"
              onChange={(event) => {
                setNguyenQuan(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Nơi làm việc"
              onChange={(event) => {
                setNoiLamViec(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Quốc tịch"
              onChange={(event) => {
                setQuocTich(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Sổ hộ chiếu"
              onChange={(event) => {
                setSoHoChieu(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Tiền Án"
              onChange={(event) => {
                setTienAn(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Tôn giáo"
              onChange={(event) => {
                setTonGiao(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Trình độ chuyên môn"
              onChange={(event) => {
                setTrinhDoChuyenMon(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Trình độ học vấn"
              onChange={(event) => {
                setTrinhDoHocVan(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Trình độ ngoại ngữ"
              onChange={(event) => {
                setTrinhDoNgoaiNgu(event.target.value);
              }}
            />
            <button
              onClick={() => {
                createUser({
                  variables: {
                    input: { bietDanh, maNhanKhau, noiSinh, noiThuongTru, bietTiengDanToc, diaChiHienNay, dantoc, diaChiMoi, gioiTinh, hoTen, idNguoiTao, lyDoChuyenDen, lyDoChuyenDi, namSinh, ngayChuyenDen, ngayChuyenDi, ngayTao, ngheNghiep, nguyenQuan, noiLamViec, quocTich, soHoChieu, tienAn, tonGiao, trinhDoChuyenMon, trinhDoHocVan, trinhDoNgoaiNgu },
                  },
                });
    
               
              }}
            >
              Tạo nhân khẩu
            </button>
          </div>
          </div>
  )
            }
 
            export default TaoNhanKhau
            


