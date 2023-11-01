import DashboardNavbar from "../../components/Shared/DashboardNavbar";
import { FiLogOut } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div>
      <DashboardNavbar />
      <div style={{ backgroundColor: "#03353C" }}>
        <div className="text-white">
          <h4>Profile</h4>
          <button className="btn btn-accent">
            Logout <FiLogOut />
          </button>
        </div>
      </div>
    </div>
  );
}
