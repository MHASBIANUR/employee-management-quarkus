import { useNavigate } from "react-router-dom";

import EmployeeForm from "../components/EmployeeForm";

import { createEmployee } from "../api/employeeApi";

import type { Employee } from "../types/employee";

function AddEmployee() {

    const navigate = useNavigate();

    async function handleSubmit(employee: Employee){

        await createEmployee(employee);

        navigate("/employees");
    }

    return(
        <div className="form-page">

            <div className="form-card">

                <button
                    className="btn-back"
                    onClick={() => navigate("/employees")}
                >
                    ← Back
                </button>

                <h1>Add Employee</h1>

                <EmployeeForm
                    onSubmit={handleSubmit}
                />

            </div>

        </div>
    );
}

export default AddEmployee;