import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [errorUserName, setErrorUseName] = useState("กรุณาป้อนชื่อผู้ใช้งาน จำนวน 8 ตัวอักษร");
  const [errorEmail, setErrorEmail] = useState("รูปแบบอีเมลไม่ถูกต้อง");
  const [errorPassword, setErrorPassword] = useState("รหัสผ่านต้องมีจำนวน 8 ตัวอักษร");
  const [errorRePassword, setErrorRePassword] = useState("รหัสผานไม่ตรงกัน");

  return (
    <div className="container">
      <form className="form">
        <h2>แบบฟอร์มลงทะเบียน</h2>
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <small> {errorUserName}</small>
        </div>

        <div className="form-control">
          <label>อีเมล</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small>{errorEmail}</small>
        </div>

        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small> {errorPassword}</small>
        </div>

        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            type="text"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <small> {errorRePassword}</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponent;
