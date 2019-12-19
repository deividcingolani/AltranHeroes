import React, { useEffect } from "react";
import useForm from "react-hook-form";
import Select from "react-select";
import { Button } from "react-bootstrap";
import { RHFInput } from "react-hook-form-input";
import "./GnomeFilter.scss";
import "./ButtonFilter.scss";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";

export const GnomeFilter = params => {
  const { handleSubmit, register, setValue } = useForm();
  const initialized = useSelector(state => state.gnomes.initialized);
  const gnomes = useSelector(state => state.gnomes.gnomes);
  const dispatch = useDispatch();

  /* This is for call to get data when the app is not inialized */
  useEffect(() => {
    if (!initialized) {
      dispatch(actions.initGnomes());
      params.setData(gnomes);
    }
  });

  /* Cities */
  const optionsCities = [
    { value: "0", label: "All" },
    { value: "1", label: "Brastlewark" }
  ];

  /*Gender  */
  const optionsGender = [
    { value: "0", label: "All" },
    { value: "1", label: "Male" },
    { value: "2", label: "Female" }
  ];

  /* Get min and Max  */
  /* Age*/
  let minAge, maxAge, minWeight, maxWeight, minHeight, maxHeight;
  if (gnomes && gnomes[0]) {
    minAge = gnomes.reduce(
      (min, gnome) => (gnome.age < min ? gnome.age : min),
      gnomes[0].age
    );
    maxAge = gnomes.reduce(
      (max, gnome) => (gnome.age > max ? gnome.age : max),
      gnomes[0].age
    );

    /* Weight*/
    minWeight = gnomes.reduce(
      (min, gnome) => (gnome.weight < min ? gnome.weight : min),
      gnomes[0].weight
    );
    maxWeight = gnomes.reduce(
      (max, gnome) => (gnome.weight > max ? gnome.weight : max),
      gnomes[0].weight
    );

    /* Height*/
    minHeight = gnomes.reduce(
      (min, gnome) =>
        Math.floor(gnome.height) < min ? Math.floor(gnome.height) : min,
      Math.floor(gnomes[0].height)
    );
    maxHeight = gnomes.reduce(
      (max, gnome) =>
        Math.ceil(gnome.height) > max ? Math.ceil(gnome.height) : max,
      Math.ceil(gnomes[0].height)
    );
  }
  /* Set default Value */

  let citySelected = optionsCities[0];
  let genderSelected = optionsGender[0];

  const onSubmit = values => {
    let gnomestoFilter = gnomes;
    if (values.city.value !== "0") {
      gnomestoFilter = gnomestoFilter.filter(
        gnome => gnome.city === values.city.label
      );
    }

    /* Filter by Gender */
    if (values.gender.value !== "0") {
      gnomestoFilter = gnomestoFilter.filter(
        gnome => gnome.gender === values.gender.label
      );
    }

    /* Filter by name */
    if (values.name.trim() !== "") {
      gnomestoFilter = gnomestoFilter.filter(
        gnome => gnome.name === values.name
      );
    }

    /* Filter by  Age */
    gnomestoFilter = gnomestoFilter.filter(gnome => gnome.age >= values.ageMin);
    gnomestoFilter = gnomestoFilter.filter(gnome => gnome.age <= values.ageMax);

    /* Filter by  Weight */
    gnomestoFilter = gnomestoFilter.filter(
      gnome => gnome.weight >= values.weightMin
    );

    gnomestoFilter = gnomestoFilter.filter(
      gnome => gnome.weight <= values.weightMax
    );

    /* Filter by  Height */
    let min = parseInt(values.heightMin, 10);
    let max = parseInt(values.heightMax, 10);
    gnomestoFilter = gnomestoFilter.filter(gnome => gnome.height >= min);
    gnomestoFilter = gnomestoFilter.filter(gnome => gnome.height <= max);

    /* Set Gnomes filter for show in table of gnomes */
    params.setData(gnomestoFilter);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row formFilter ">
      {/* Inputs Form */}
      <div className="inputsForm col-md-9 col-lg-8 col-xl-6">
        {/* First Line of Filter */}

        <div className={" row first-line col-md-12"}>
          {/* City */}
          <div className="form-group col-md-4">
            <label htmlFor="name">City</label>
            <RHFInput
              as={<Select name="city" options={optionsCities} />}
              rules={{ required: true }}
              name="city"
              register={register}
              setValue={setValue}
              defaultValue={citySelected}
            />
          </div>

          {/* Gender */}
          <div className="form-group gender col-md-3">
            <label htmlFor="gender">Gender</label>
            <RHFInput
              as={<Select options={optionsGender} />}
              rules={{ required: true }}
              name="gender"
              register={register}
              setValue={setValue}
              defaultValue={genderSelected}
            />
          </div>

          {/* Name */}
          <div className="form-group  col-md-5">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              className="form-control"
              type="text"
              ref={register}
            />
          </div>
        </div>

        {/* Second line */}
        <div className="row  second-line col-md-12">
          {/* Age  */}
          <div className="form-group col-md-4 form-group-age">
            <div className="labelAge">
              <label htmlFor="age">Age </label>
            </div>
            <div className="inputAge">
              <input
                name="ageMin"
                className="form-control filterInputNumber"
                type="number"
                ref={register}
                defaultValue={minAge}
                min={minAge}
                max={maxAge}
              />
              To
              <input
                name="ageMax"
                className="form-control filterInputNumber"
                type="number"
                ref={register}
                defaultValue={maxAge}
                min={minAge}
                max={maxAge}
              />
            </div>
          </div>

          {/* Weight */}
          <div className="form-group form-group-weight col-md-4">
            <div className="labelWeight">
              <label htmlFor="weight">Weight</label>
            </div>
            <div className="inputWeight">
              <input
                name="weightMin"
                className="form-control filterInputNumber"
                type="number"
                ref={register}
                defaultValue={minWeight}
                min={minWeight}
                max={maxWeight}
              />
              To
              <input
                name="weightMax"
                className="form-control filterInputNumber"
                type="number"
                ref={register}
                defaultValue={maxWeight}
                min={minWeight}
                max={maxWeight}
              />
            </div>
          </div>

          {/* Height */}
          <div className="form-group form-group-height col-md-4">
            <div className="labelHeight">
              <label htmlFor="weight">Height</label>
            </div>
            <div className="inputHeight">
              <input
                name="heightMin"
                className="form-control filterInputNumber"
                type="number"
                ref={register}
                defaultValue={minHeight}
                min={minHeight}
                max={maxHeight}
              />
              To
              <input
                name="heightMax"
                className="form-control filterInputNumber"
                type="number"
                ref={register}
                defaultValue={maxHeight}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="buttonSubmit col-sm-12 col-md-3 col-lg-3 col-xl-2">
        <Button
          type="submit"
          className="col-sm-12 col-lg-8 submitButtonFilter btn-text"
        >
          Apply Filter
        </Button>
      </div>
    </form>
  );
};
