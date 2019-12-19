import React from "react";
import Modal from "react-bootstrap/Modal";
import { Gnome } from "./Gnome";

export function GnomeModal({ openModalGnome, closeModal, gnomeSelected }) {
  return (
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
  );
}
