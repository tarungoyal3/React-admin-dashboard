// import "./sidebar.scss"
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
// import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
// import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import InsertChartIcon from '@mui/icons-material/InsertChart';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import { Link } from "react-router-dom";
// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="top">
//         <Link to = "/">
//         <span className="logo">Admin</span>
//         </Link>
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <p className="title">Main</p>
//           <li>
//             <DashboardIcon className="icon"/>
//             <span>dashboard</span>
//           </li>
//           <p className="title">List</p>
//           <li>
//             <Person2OutlinedIcon className="icon"/>
//             <span>Users</span>
//           </li>
//           <li>
//             <Inventory2OutlinedIcon className="icon"/>
//             <span>Products</span>
//           </li>
//           <li>
//             <LocalGroceryStoreOutlinedIcon className="icon"/>
//             <span>Orders</span>
//           </li>
//           <li>
//             <LocalShippingIcon className="icon"/>
//             <span>Delievery</span>
//           </li>
//           <p className="title">Useful</p>
//           <li>
//             <InsertChartIcon className="icon"/>
//             <span>Stats</span>
//           </li>
//           <li>
//           <NotificationsNoneIcon className="icon" />
//             <span>Notificatoins</span>
//           </li>
//           <p className="title">Service</p>
//           <li>
//           <SettingsSystemDaydreamOutlinedIcon className="icon" />
//             <span>System Health</span>
//           </li>
//           <li>
//           <PsychologyOutlinedIcon className="icon" />
//             <span>Logs</span>
//           </li>
//           <li>
//            <SettingsApplicationsIcon className="icon" />
//             <span>Settings</span>
//           </li>
//           <p className="title">User</p>
//           <li>
//           <AccountCircleOutlinedIcon className="icon" />
//             <span>Profile</span>
//           </li>
//           <li>
//           <ExitToAppIcon className="icon" />
//             <span>Log Out</span>
//           </li>
//         </ul>
//       </div>
//       <div className="bottom">
//         <div className="colorOptions"></div>
//         <div className="colorOptions"></div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar



import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;