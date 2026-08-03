import type { Employee } from "../types/employee";

interface Props {
  employees: Employee[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function EmployeeTable({
  employees,
  onEdit,
  onDelete,
}: Props) {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Employee Code</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Status</th>
          <th style={{ width: "180px" }}>Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan={6} align="center">
              No employee found.
            </td>
          </tr>
        ) : (
          employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employeeCode}</td>
              <td>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.status}</td>

              <td>
                <button
                  className="btn-edit"
                  onClick={() => onEdit(employee.id)}
                >
                  Edit
                </button>

                <button
                  className="btn-delete"
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default EmployeeTable;