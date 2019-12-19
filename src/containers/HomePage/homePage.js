import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import { Gnomes, Gnome } from "../../components/index";

import "./homePage.scss";

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

      <Modal size="lg" show={openModalGnome} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title className="titleModalDetail col-md-6 col-xs-12">
            {" "}
            Profile of Gnome
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Gnome onCloseModal={closeModal} gnomeSelected={gnomeSelected} />
        </Modal.Body>
      </Modal>

      {/* List of Gnomes */}
      <Gnomes onClick={openModal} />
    </div>
  );
}
