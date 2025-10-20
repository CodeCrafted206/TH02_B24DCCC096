// src/StudentDetail.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data));
  }, [id]);

  if (!student) return <p>Đang tải...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧑 Chi tiết sinh viên</h2>
      <p>Họ tên: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Địa chỉ: {student.address.city}</p>
      <Link to="/">⬅️ Quay lại danh sách</Link>
    </div>
  );
};

export default StudentDetail;



