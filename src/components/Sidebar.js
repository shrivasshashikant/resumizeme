import React from "react";
import { TfiAgenda } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaFolderClosed } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <ul>
        <li className="head">
          <img src={"./Resumizeme.svg"} alt="logo" />
        </li>
        <li>
        <img src={"./tamplate.svg"} alt="logo" />
          <span style={{ color: "black", fontWeight: "600" }}>
            My Templates
          </span>
        </li>
        <li>
        <img src={"/search.svg"} alt="logo" />
          <span style={{ color: "black", fontWeight: "600" }}>Search</span>
        </li>
        <li>
          <img src={"/star.png"} alt="" />
          <span>Software Engineer</span>
        </li>
        <li>
          <img src={"/star.png"} alt="" />
          <span>Computer Hardware Engineer</span>
        </li>
        <li>
          <img src={"/star.png"} alt="" />
          <span>Technical Support</span>
        </li>
        <li>
          <img src={"/star.png"} alt="" />
          <span>Network Administrator</span>
        </li>
        <li>
          <img src={"/star.png"} alt="" />
          <span>Management</span>
        </li>
        <li>
          <img src={"/star.png"} alt="" />
          <span>Data analysis</span>
        </li>
        <li>
          <img src={"/star.png"} alt="" />
          <span>Computer technician</span>
        </li>

        <li>
         <img src={"/clock.svg"} alt="" />
          <span>Past Search-1</span>
        </li>
        <li>
         <img src={"/clock.svg"} alt="" />
          <span>Past search-2</span>
        </li>
        <li>
         <img src={"/clock.svg"} alt="" />
          <span>Management</span>
        </li>
        <li>
         <img src={"/clock.svg"} alt="" />
          <span>Data analysis</span>
        </li>
        <li>
         <img src={"/clock.svg"} alt="" />
          <span>Computer technician</span>
        </li>
        <li>
         <img src={"/clock.svg"} alt="" />
          <span>Computer technician</span>
        </li>

        <li>
          <div className="boards">
          <img src={"/board.svg"} alt="" />
          <span style={{ color: "black", fontWeight: "600" }}>My boards</span>
          <img src={"/plus.svg"} alt="" className="my-board"/>
          </div>
        
        </li>

        <li>
          <img src={"/board.png"} alt="" />
          <span>Board-1</span>
        </li>
        <li>
          <img src={"/board.png"} alt="" />
          <span>Board-2</span>
        </li>
        <li>
          <img src={"/board.png"} alt="" />
          <span>Board-3</span>
        </li>
        <li>
         <img src={"/lock.png"} alt="" />
          <span>Board-agent-1</span>
        </li>
        <li>
         <img src={"/lock.png"} alt="" />
          <span>Board-agent-2</span>
        </li>
        <li>
         <img src={"/lock.png"} alt="" />
          <span>Board-agent-3</span>
        </li>
      </ul>

      <div className="border-nav"></div>
      <div className="footer-nav">
        <img src={"/img.png"} className="side-image" alt="" />
        <span className="name">Carla</span>
        <img src={"/settings.svg"} alt="" className="setting"/>
      </div>
    </div>
  );
};

export default Sidebar;
