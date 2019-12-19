import React, { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiHelpCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./Gnome.scss";

export function Gnome({ onCloseModal, gnomeSelected }) {
  const [data, setData] = useState(gnomeSelected);

  const gnomes = useSelector(state => state.gnomes.gnomes);

  const onClickFriends = e => {
    const gnomeFriend = gnomes.filter(
      gnome => gnome.name === e.target.value
    )[0];
    setData(gnomeFriend);
  };
  return (
    <div className="form gnomeDetail row" readOnly>
      <div className="form-group col-md-4">
        <img
          src={data.thumbnail}
          alt="Avatar of Gnome"
          className="img-thumbnail form-thumbnail"
        />
      </div>

      <div className="col-md-8">
        <div className="form-group ">
          <label htmlFor="name" className="nameLabel">
            Name
          </label>
          <input
            name="name"
            className="form-control"
            type="text"
            value={data.name}
            disabled
          />
        </div>
        <div className="form-group ">
          <label htmlFor="id"># Identification</label>
          <input
            name="id"
            className="form-control"
            type="text"
            value={data.id}
            disabled
          />
        </div>
      </div>
      <div className="form-group col-md-6 col-lg-4">
        <label htmlFor="id" className="label nameLabel">
          City
        </label>
        <input
          name="id"
          className="form-control"
          type="text"
          value={data.city}
          disabled
        />
      </div>
      <div className="form-group col-md-6 col-lg-4">
        <label htmlFor="age" className="label nameLabel">
          Age
        </label>
        <input
          name="age"
          className="form-control"
          type="text"
          value={data.age}
          disabled
        />
      </div>
      <div className="form-group col-md-6 col-lg-4">
        <label htmlFor="id" className="label nameLabel">
          Gender
        </label>
        <input
          name="id"
          className="form-control"
          type="text"
          value={data.gender}
          disabled
        />
      </div>
      <div className="form-group col-md-6 col-lg-4">
        <label htmlFor="hairColor" className="label nameLabel">
          Hair Color
        </label>
        <input
          name="hairColor"
          className="form-control"
          type="text"
          value={data.hair_color}
          disabled
        />
      </div>
      <div className="form-group col-md-6 col-lg-4">
        <label htmlFor="weight" className="label nameLabel">
          Weight
        </label>
        <input
          name="weight"
          className="form-control"
          type="text"
          value={data.weight}
          disabled
        />
      </div>
      <div className="form-group col-md-6 col-lg-4">
        <label htmlFor="height" className="label nameLabel">
          Height
        </label>
        <input
          name="height"
          className="form-control"
          type="text"
          value={data.height}
          disabled
        />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="professions" className="label nameLabel">
          Professions
        </label>
        <select multiple className="form-control selectModal" id="professions">
          {data.professions.map((profession, i) => (
            <option key={i}>{profession}</option>
          ))}
        </select>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="friends" className="nameLabel">
          Friends
        </label>

        {/* This is for user Help UI */}
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">
              If you want view a Friend, click in name of friend!
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <FiHelpCircle className="iconHelp" />
          </span>
        </OverlayTrigger>

        <select multiple className="form-control selectModal" id="friends">
          {data.friends.map((friends, i) => (
            <option
              onClick={onClickFriends}
              onChange={onClickFriends}
              value={friends}
              key={i}
            >
              {friends}
            </option>
          ))}
        </select>
      </div>
      <Button
        className="col-lg-6 col-md-12 buttonForm"
        variant="outline-secondary"
        onClick={onCloseModal}
      >
        CLOSE
      </Button>
    </div>
  );
}
