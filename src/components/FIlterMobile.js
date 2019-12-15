import React from 'react';
import { Button } from 'react-bootstrap';

function Gnome({
    onCloseModal,
    gnome,

}) {
    console.log('inside of gnome')
    const data = gnome.original
    console.log(data)
    return (
        <div className="form" readonly>
            <div class="form-group">
                <label htmlFor="id"># identification</label>
                <input name="id" class="form-control" type="text" value={data.id} />
            </div>
            <div class="form-group">
                <label htmlFor="name">Name</label>
                <input name="name" class="form-control" type="text" value={data.name} />
            </div>
            <div class="form-group">
                <label htmlFor="id">City</label>
                <input name="id" class="form-control" type="text" value={data.city} />
            </div>
            <div class="form-group">
                <label htmlFor="id">Gender</label>
                <input name="id" class="form-control" type="text" value={data.gender} />
            </div>
            <div class="form-group">
                <label htmlFor="age">Age</label>
                <input name="age" class="form-control" type="text" value={data.age} />
            </div>
            <div class="form-group">
                <label htmlFor="weight">Weight</label>
                <input name="weight" class="form-control" type="text" value={data.weight} />
            </div>
            <div class="form-group">
                <label htmlFor="height">Height</label>
                <input name="height" class="form-control" type="text" value={data.height} />
            </div>
            <div class="form-group">
                <label htmlFor="hairColor">Hair Color</label>
                <input name="hairColor" class="form-control" type="text" value={data.hair_color} />
            </div>
            <div class="form-group">
                <label for="professions">Professions</label>
                <select multiple class="form-control" id="professions">
                    {data.professions.map(profession => (<option>{profession}</option>))}
                </select>
            </div>
            <div class="form-group">
                <label for="friends">Friends</label>
                <select multiple class="form-control" id="friends" >
                    {data.friends.map(friends => (<option>{friends}</option>))}
                </select>
            </div>
            <Button variant="outline-secondary" onClick={onCloseModal}>CLOSE</Button>
        </div>

    );
}
export default Gnome
