import { Button } from "antd";
import DashboardTable from "../components/Dashboard/DashboardTable";

const PatientsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      <p>Patient management page</p>
      <DashboardTable/>
    </div>
  );
};

export default PatientsPage;
