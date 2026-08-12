import { useStudent } from "../context/StudentContext";

function StudentInfo() {
  const student = useStudent();

  return (
    <div className="student-info">
      <h3>Student Details</h3>
      <p>Name: {student.name}</p>
      <p>Department: {student.department}</p>
      <p>Semester: {student.semester}</p>
    </div>
  );
}

export default StudentInfo;