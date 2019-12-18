import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import './homePage.css';
import { Gnomes, Gnome } from '../../components/index'

import {  useDispatch } from 'react-redux'
import * as actions from '../../store/actions/index'


export function HomePage() {
    const [openModalGnome, setOpenModalGnome] = useState(false);


    const dispatch = useDispatch()

    const openModal = (row) => {
        dispatch(actions.setGnomeSelected(row.original))
        setOpenModalGnome(true);

    }
    const closeModal = () => {
        setOpenModalGnome(false);
    }

    return (
        <div className="home-page">

            {/* MODAL  */}

            <Modal size="lg" show={openModalGnome} onHide={closeModal} >
                <Modal.Header closeButton>
                    <Modal.Title className="titleModalDetail col-md-6 col-xs-12"> Profile of Gnome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Gnome  onCloseModal={closeModal} />
                </Modal.Body>
            </Modal>


            {/* List of Gnomes */}
            <Gnomes onClick={openModal} />
        </div>
    );
}



