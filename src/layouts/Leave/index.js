/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";

// // Soft UI Dashboard React components
// import SoftBox from "components/SoftBox";
// import SoftAvatar from "components/SoftAvatar";
// import SoftTypography from "components/SoftTypography";
// import SoftButton from "components/SoftButton";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// VR dashboards components
// import BaseLayout from "layouts/virtual-reality/components/BaseLayout";

// VRInfo dashboards components
// import TodoList from "layouts/virtual-reality/components/TodoList";
// import TodoCard from "layouts/virtual-reality/components/TodoCard";
// import Emails from "layouts/virtual-reality/components/Emails";
// import MediaPlayer from "layouts/virtual-reality/components/MediaPlayer";
// import Messages from "layouts/virtual-reality/components/Messages";

// // Images
// import team1 from "assets/images/team-1.jpg";
// import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Cards } from "components/Cards"
import BasicTextFields from "examples/Form";


function Leave() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Cards />
      <br/>
      <BasicTextFields/>
    </DashboardLayout>
  );
}

export default Leave;
