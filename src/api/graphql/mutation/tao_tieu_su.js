import React, {useState} from "react";
import { gql } from "graphql";
import { useMutation } from "@apollo/client";
const TAO_TIEU_SU = gql`
mutation taoTieuSu($input: inputTieuSu!){
  taoTieuSu(input: $input) {
    ID
    tuNgay
    denNgay
    diaChi
    ngheNghiep
    noiLamViec
  }
}
`;

function TaoTieuSu(){
    const [ID, setID] = useState("");
    const [tuNgay, setTuNgay] = useState("");
    const [denNgay, setDenNgay] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [ngheNghiep, setNgheNghiep] = useState("");
    const [noiLamViec, setNoiLamViec] = useState("");

    const [createUser, { loading}] = useMutation(TAO_TIEU_SU)
if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }

  return(
      <div>
          <div>
          <input
              type="text"
              placeholder="ID"
              onChange={(event) => {
                setID(event.target.value);
              }}
            />
           <input
              type="text"
              placeholder="Từ ngày"
              onChange={(event) => {
                setTuNgay(event.target.value);
              }}
            /> 
           <input
              type="text"
              placeholder="Đến ngày"
              onChange={(event) => {
                setDenNgay(event.target.value);
              }}
            /> 
            <input
              type="text"
              placeholder="Địa chỉ"
              onChange={(event) => {
                setDiaChi(event.target.value);
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
              placeholder="Nơi làm việc"
              onChange={(event) => {
                setNoiLamViec(event.target.value);
              }}
            />
            <button
              onClick={() => {
                createUser({
                  variables: {
                    input: { ID, tuNgay, denNgay, diaChi, ngheNghiep, noiLamViec },
                  },
                });
    
               
              }}
            >
              Tạo tiểu sử
            </button>
          </div>
      </div>
  )
}
export default TaoTieuSu