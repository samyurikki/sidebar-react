import React, { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

export const useGlobalContext = () => useContext(ContextProvider);

const AppContext = (props) => {
  const [isSidebarOpen, setSidebar] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ContextProvider.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default AppContext;
