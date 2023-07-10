import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/Fa";
import "./index.css";
import Modal from "./Modal";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <>
      <button type="button" className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button type="button" className="button" onClick={openModal}>
        Show Modal
      </button>
    </>
  );
};

export default Home;
