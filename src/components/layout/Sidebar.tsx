import { Layout, Menu } from "antd";
import adminPaths from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.route";
import sidebarGenerator from "../../uitls/sidebarGenerator";

const { Sider } = Layout;

const userRoles = {
  ADMIN: "admin",
  STUDENT: "student",
  FACULTY: "faculty",
};

const Sidebar = () => {
  const role = "student";
  let sidebarItems;

  switch (role) {
    case userRoles.ADMIN:
      sidebarItems = sidebarGenerator(adminPaths, userRoles.ADMIN);
      break;
    case userRoles.FACULTY:
      sidebarItems = sidebarGenerator(facultyPaths, userRoles.FACULTY);
      break;
    case userRoles.STUDENT:
      sidebarItems = sidebarGenerator(studentPaths, userRoles.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Ph University</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
