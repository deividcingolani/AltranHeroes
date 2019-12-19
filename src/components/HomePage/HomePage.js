import React, { useState } from "react";
import { Gnomes, GnomeModal } from "../index";
import "./HomePage.scss";

export function HomePage() {
  const [openModalGnome, setOpenModalGnome] = useState(false);
  const [gnomeSelected, setGnomeSelected] = useState({});

  const openModal = row => {
    setGnomeSelected(row.original);
    toggleModal();
  };
  const toggleModal = () => {
    setOpenModalGnome(!openModalGnome);
  };

  return (
    <div className="home-page">
      {/* MODAL  */}
      <GnomeModal
        openModalGnome={openModalGnome}
        closeModal={toggleModal}
        gnomeSelected={gnomeSelected}
        className="gnomeModal"
      />

      {/* List of Gnomes */}
      <Gnomes className="gnomes" onClick={openModal} />
    </div>
  );
}
