import { Routes, Route, Navigate } from "react-router-dom";

import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees" />} />

      <Route path="/employees" element={<EmployeeList />} />

      <Route path="/employees/add" element={<AddEmployee />} />

      <Route
        path="/employees/edit/:id"
        element={<EditEmployee />}
      />
    </Routes>
  );
}

export default App;