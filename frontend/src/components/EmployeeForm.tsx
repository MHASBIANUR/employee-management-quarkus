import { useEffect, useState } from "react";
import type { Employee } from "../types/employee";

interface Props {
  initialData?: Employee;
  onSubmit: (employee: Employee) => void;
}

function EmployeeForm({ initialData, onSubmit }: Props) {

  const [employee, setEmployee] = useState<Employee>({
    id: 0,
    employeeCode: "",
    fullName: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    salary: 0,
    hireDate: "",
    status: "ACTIVE",
  });

  useEffect(() => {
    if (initialData) {
      setEmployee(initialData);
    }
  }, [initialData]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setEmployee({
      ...employee,
      [e.target.name]:
        e.target.name === "salary"
          ? Number(e.target.value)
          : e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(employee);
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit}>

      <label>Employee Code</label>
      <input
        name="employeeCode"
        value={employee.employeeCode}
        onChange={handleChange}
        required
      />

      <label>Full Name</label>
      <input
        name="fullName"
        value={employee.fullName}
        onChange={handleChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        required
      />

      <label>Phone</label>
      <input
        name="phone"
        value={employee.phone}
        onChange={handleChange}
      />

      <label>Department</label>
      <input
        name="department"
        value={employee.department}
        onChange={handleChange}
      />

      <label>Position</label>
      <input
        name="position"
        value={employee.position}
        onChange={handleChange}
      />

      <label>Salary</label>
      <input
        type="number"
        name="salary"
        value={employee.salary}
        onChange={handleChange}
      />

      <label>Hire Date</label>
      <input
        type="date"
        name="hireDate"
        value={employee.hireDate}
        onChange={handleChange}
      />

      <label>Status</label>
      <select
        name="status"
        value={employee.status}
        onChange={handleChange}
      >
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
      </select>

      <button type="submit">
        Save Employee
      </button>

    </form>
  );
}

export default EmployeeForm;