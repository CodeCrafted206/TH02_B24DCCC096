
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setStudents(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📘 Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link to={`/student/${s.id}`}>
              {s.name} - {s.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;




