import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import './homePage.css';
import { connect } from 'react-redux';
import { getGnomes } from '../../axios/requests';
import Gnomes from '../../components/gnomes/gnomes'
import GnomeForm from '../../components/gnomes/gnome/gnome'


function HomePage() {
    const [openModalGnome, setOpenModalGnome] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [selectedGnome, setSelectedGnome] = useState({});
    const [gnomes, setGnomes] = useState([]);
    const [table, setTable] = useState([]);

    const openModal = (row) => {
        setOpenModalGnome(true);
        setSelectedGnome(row)

    }

    const closeModal = () => {
        setOpenModalGnome(false);
    }



    const getData = async () => {
        const response = await getGnomes();
        const gnomes = response.data.Brastlewark;
        const gnomesCustom = gnomes.map((g, i) =>
            g = {
                ...g,
                weight: (g.weight).toFixed(2),
                height: (g.height).toFixed(2),
                gender : (Math.random() > 0.5? 'Female':'Male')
            }
        )

        setGnomes(gnomesCustom);
        setInitialized(true);
    }

    const getTable = async () => {
        setTable(<Gnomes gnomes={gnomes} onClick={openModal} />)

    }

    useEffect(() => {
        if (!initialized) {
            getData();
            if (gnomes.length > 0) {
                getTable();
            }
        }
    })


    return (
        <div className="home-page">

           {/* MODAL  */}

            <Modal show={openModalGnome} onHide={closeModal} >
                <Modal.Header closeButton>
                    <Modal.Title> Detail of  Gnome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GnomeForm gnome={selectedGnome} onCloseModal={closeModal} />
                </Modal.Body>
            </Modal>

            <br />

            {/* List of Gnomes */}
            {table}
        </div>
    );
}



const mapStateToProps = state => {
    return {
        gnomes: state.gnomes,
    }
}

export default connect(
    mapStateToProps,
    null
)(HomePage);