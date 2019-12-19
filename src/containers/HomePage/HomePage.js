import React, { useState } from "react";
import { Gnomes, GnomeModal } from "../../components/index";
import "./HomePage.scss";

export function HomePage() {
  const [openModalGnome, setOpenModalGnome] = useState(false);
  const [gnomeSelected, setGnomeSelected] = useState({});

  const openModal = row => {
    setGnomeSelected(row.original);
    setOpenModalGnome(true);
  };
  const closeModal = () => {
    setOpenModalGnome(false);
  };

  return (
    <div className="home-page">
      {/* MODAL  */}
      <GnomeModal
        openModalGnome={openModalGnome}
        closeModal={closeModal}
        gnomeSelected={gnomeSelected}
        className="gnomeModal"
      />

      {/* List of Gnomes */}
      <Gnomes className="gnomes" onClick={openModal} />
    </div>
  );
}
