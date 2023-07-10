import React from "react";
import { links, social } from "./data";
import { FaTimes } from "react-icons/Fa";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <h4 className="logo">Coding Addict</h4>
        <button className="close-btn" type="button" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links" style={{ listStyleType: "none" }}>
        {links.map((each) => (
          <li key={each.id}>
            {each.icon}
            <a href="#">{each.text}</a>
          </li>
        ))}
      </ul>
      <ul className="social-links" style={{ listStyleType: "none" }}>
        {social.map((each) => (
          <li key={each.id}>
            <a href={each.url}>{each.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
