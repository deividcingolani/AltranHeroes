import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './gnome.css'
import { FiHelpCircle } from "react-icons/fi";



function Gnome({
    onCloseModal,
    gnome,
    onClickFriends

}) {
    console.log(gnome)
    const data = gnome
    console.log('this is my data')
    console.log(data)
    /* console.log(data.prof) */
    return (
        <div className="form gnomeDetail row" readonly>
            <div class="form-group col-md-4">
                <img src={data.thumbnail} alt="Avatar of Gnome" className="img-thumbnail form-thumbnail" />
            </div>

            <div className="col-md-8">
                <div class="form-group ">
                    <label htmlFor="name" className="nameLabel">Name</label>
                        <input name="name" className="form-control" type="text" value={data.name} disabled />
                </div>
                <div class="form-group ">
                    <label htmlFor="id"># Identification</label>
                    <input name="id" className="form-control" type="text" value={data.id} disabled />
                </div>


            </div>
            <div class="form-group col-md-6 col-lg-4">
                <label htmlFor="id" className="label nameLabel">City</label>
                <input name="id" className="form-control" type="text" value={data.city} disabled />
            </div>
            <div class="form-group col-md-6 col-lg-4">
                <label htmlFor="age" className="label nameLabel">Age</label>
                <input name="age" className="form-control" type="text" value={data.age} disabled />
            </div>
            <div class="form-group col-md-6 col-lg-4">
                <label htmlFor="id" className="label nameLabel">Gender</label>
                <input name="id" className="form-control" type="text" value={data.gender} disabled />
            </div>
            <div class="form-group col-md-6 col-lg-4">
                <label htmlFor="hairColor" className="label nameLabel">Hair Color</label>
                <input name="hairColor" className="form-control" type="text" value={data.hair_color} disabled />
            </div>
            <div class="form-group col-md-6 col-lg-4">
                <label htmlFor="weight" className="label nameLabel">Weight</label>
                <input name="weight" className="form-control" type="text" value={data.weight} disabled />
            </div>
            <div class="form-group col-md-6 col-lg-4">
                <label htmlFor="height" className="label nameLabel">Height</label>
                <input name="height" className="form-control" type="text" value={data.height} disabled />
            </div>

            <div class="form-group col-md-6" >
                <label for="professions" className="label nameLabel">Professions</label>
                <select multiple className="form-control selectModal" id="professions" disabled>
                    {data.professions.map(profession => (<option>{profession}</option>))}
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="friends" className="nameLabel">Friends</label>

                {/* This is for user Help UI */}
                <OverlayTrigger overlay={
                    <Tooltip id="tooltip-disabled">If you want view a Friend, click in name of friend!</Tooltip>}>
                    <span className="d-inline-block">
                        <FiHelpCircle className="iconHelp" />

                    </span>
                </OverlayTrigger>


                <select multiple className="form-control selectModal" id="friends" >
                    {data.friends.map(friends => (<option onClick={onClickFriends} value={friends}>{friends}</option>))}
                </select>

            </div>
            <Button className="col-lg-6 col-md-12 buttonForm" variant="outline-secondary" onClick={onCloseModal}>CLOSE</Button>
        </div>

    );
}
export default Gnome
