import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeTable from "../components/EmployeeTable";

import {
  getEmployees,
  deleteEmployee,
} from "../api/employeeApi";

import type { Employee } from "../types/employee";

function EmployeeList() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleAdd() {
    navigate("/employees/add");
  }

  function handleEdit(id: number) {
    navigate(`/employees/edit/${id}`);
  }

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Delete this employee?"
    );

    if (!confirmDelete) return;

    await deleteEmployee(id);

    loadEmployees();
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">

      <div className="page-header">

        <div>
          <h1>Employee Management</h1>
          <p className="page-subtitle">
            Manage all employee data in one place.
          </p>
        </div>

        <button
          className="btn-add"
          onClick={handleAdd}
        >
          + Add Employee
        </button>

      </div>

      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default EmployeeList;