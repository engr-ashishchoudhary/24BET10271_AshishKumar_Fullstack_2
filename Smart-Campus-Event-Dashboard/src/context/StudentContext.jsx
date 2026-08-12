import { createContext, useContext } from "react";

const student = {
  name: "Riya",
  department: "Computer Science",
  semester: 6,
};

const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}