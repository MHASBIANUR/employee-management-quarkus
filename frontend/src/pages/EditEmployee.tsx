import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EmployeeForm from "../components/EmployeeForm";

import {
    getEmployee,
    updateEmployee,
} from "../api/employeeApi";

import type { Employee } from "../types/employee";

function EditEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState<Employee>();

    useEffect(() => {
        loadEmployee();
    }, []);

    async function loadEmployee() {

        if (!id) return;

        const data = await getEmployee(Number(id));

        setEmployee(data);
    }

    async function handleSubmit(emp: Employee) {

        if (!id) return;

        await updateEmployee(Number(id), emp);

        navigate("/employees");
    }

    if (!employee) {

        return <h2>Loading...</h2>;
    }

    return (
        <div className="form-page">

            <div className="form-card">

                <button
                    className="btn-back"
                    onClick={() => navigate("/employees")}
                >
                    ← Back
                </button>
                
                <h1>Edit Employee</h1>

                <EmployeeForm
                    initialData={employee}
                    onSubmit={handleSubmit}
                />

            </div>

        </div>
    );
}

export default EditEmployee;