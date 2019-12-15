import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import './homePage.css';
import { connect } from 'react-redux';
import { getGnomes, getUrlGnomes } from '../../axios/requests';
import Gnomes from '../../components/gnomes/gnomes'
import GnomeForm from '../../components/gnomes/gnome/gnome'


function HomePage() {
    const [openModalGnome, setOpenModalGnome] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [selectedGnome, setSelectedGnome] = useState({});
    const [gnomes, setGnomes] = useState([]);
    const [table, setTable] = useState([]);


    /* This is for call to get data when the app is not inialized */
    useEffect(() => {
        if (!initialized) {
            getData();
            if (gnomes.length > 0) {
                getTable();
            }
        }
    })


    /* Get data initial of gnomes */

    const getData = async () => {

        const city = 'Brastlewark';
        const url = getUrlGnomes(city)
        const response = await getGnomes(url);

        const gnomes = response.data.Brastlewark;
        const gnomesCustom = gnomes.map((g, i) =>
            g = {
                ...g,
                weight: (g.weight).toFixed(2),
                height: (g.height).toFixed(2),
                gender: (Math.random() > 0.7 ? 'Female' : 'Male'),
                city: city
            }
        )

        setGnomes(gnomesCustom);
        setInitialized(true);
    }

    /* List of Gnomes */
    const getTable = async () => {
        setTable(<Gnomes gnomes={gnomes} onClick={openModal} onClickFilter={openModalFilter} />)

    }


    const openModalFilter = () => {
        console.log('here is inside of my modal Filter')

    }
    const openModal = (row) => {
        console.log(row)
        setOpenModalGnome(true);
        setSelectedGnome(row.original)

    }

    const closeModal = () => {
        setOpenModalGnome(false);
    }


    const onClickFriends = (e) => {
        const gnomeFriend = gnomes.filter(gnome => (gnome.name === e.target.value))[0]
        console.log('inside of onclick FRiends')
        
        setSelectedGnome(gnomeFriend)
        
/*         e.preventDefault();
 */    }

    return (
        <div className="home-page">

            {/* MODAL  */}

            <Modal size="lg" show={openModalGnome} onHide={closeModal} >
                <Modal.Header row closeButton>
                    <Modal.Title className="titleModalDetail col-md-6"> Profile of  Gnome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GnomeForm gnome={selectedGnome} onCloseModal={closeModal} onClickFriends={onClickFriends} />
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