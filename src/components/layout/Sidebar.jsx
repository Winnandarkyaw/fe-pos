import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarBtn } from "./SidebarBtn";
import { AiOutlineDropbox, AiOutlineHome,AiOutlineAudit} from "react-icons/ai";


const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-[100px] bg-dark h-[100vh] fixed top-0 left-0 flex justify-center">
      <div className="w-fit pt-[40px] flex flex-col items-center space-y-[50px]">
        <SidebarBtn
          onClick={() => navigate("/")}
          isActive={location.pathname === "/"}
          icon={<AiOutlineHome />}
        />
        <SidebarBtn
          onClick={() => navigate("/table")}
          isActive={location.pathname === "/table"}
          icon={<AiOutlineAudit/>}
        />
        <SidebarBtn
          onClick={() => navigate("/category")}
          isActive={location.pathname === "/category"}
          icon={<AiOutlineDropbox />}
        />
      </div>
    </div>
  );
};

export default Sidebar;