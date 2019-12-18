import React from "react";
import useForm from "react-hook-form";
import Select from 'react-select'
import { Button } from "react-bootstrap";
import { RHFInput } from 'react-hook-form-input';
import './gnomeFilter.css'
import './buttonFilter.css'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../store/actions/index'
import { useEffect } from 'react';

import classes from './toggleFilter.module.css'

export const GnomeFilter = (params) => {
    const { handleSubmit, register, setValue } = useForm();
    const initialized = useSelector(state => state.gnomes.initialized)

    /* This is for call to get data when the app is not inialized */
    useEffect(() => {
        if (!initialized) {
            dispatch(actions.initGnomes())

        }
    })

    let gnomes = useSelector(state => state.gnomes.gnomes)

    const dispatch = useDispatch()


    /* Cities */
    const optionsCities = [
        { value: '0', label: 'All' },
        { value: '1', label: 'Brastlewark' },
    ]

    /*Gender  */
    const optionsGender = [
        { value: '0', label: 'All' },
        { value: '1', label: 'Male' },
        { value: '2', label: 'Female' },
    ];


    /* Get min and Max  */
    /* Age*/
    let minAge, maxAge, minWeight, maxWeight, minHeight, maxHeight;
    if (gnomes && gnomes[0]) {
        minAge = gnomes.reduce((min, gnome) => gnome.age < min ? gnome.age : min, gnomes[0].age);
        maxAge = gnomes.reduce((max, gnome) => gnome.age > max ? gnome.age : max, gnomes[0].age);

        /* Weight*/
        minWeight = gnomes.reduce((min, gnome) => gnome.weight < min ? gnome.weight : min, gnomes[0].weight);
        maxWeight = gnomes.reduce((max, gnome) =>
            gnome.weight > max ? gnome.weight : max, gnomes[0].weight
        );

        /* Height*/
        minHeight = gnomes.reduce((min, gnome) => Math.round(gnome.height) < min ? Math.round(gnome.height) : min, Math.round(gnomes[0].height));
        maxHeight = gnomes.reduce((max, gnome) => Math.round(gnome.height) > max ? Math.round(gnome.height) : max, Math.round(gnomes[0].height));
    }


    /* When is clicked Button Filter, Toggled Form */
    let styleShowForm;
    if (params.showFormFilter) {
        styleShowForm = classes.Open;
    } else {
        styleShowForm = classes.Closed;
    }



    const onSubmit = values => {

        if (values.city.value !== "0") {
            gnomes = gnomes.filter(gnome => gnome.city === values.city.label);
        }

        /* Filter by name */
        if (values.name.trim() !== '') {
            gnomes = gnomes.filter(gnome => gnome.name === values.name);
        }

        /* Filter by Gender */
        if (values.gender.value !== "0") {
            gnomes = gnomes.filter(gnome => gnome.gender === values.gender.label);
        }

        /* Filter by  Age */
        gnomes = gnomes.filter(gnome => gnome.age >= values.ageMin);
        gnomes = gnomes.filter(gnome => gnome.age <= values.ageMax);


        /* Filter by  Weight */
        gnomes = gnomes.filter(gnome => gnome.weight >= values.weightMin);
        gnomes = gnomes.filter(gnome => gnome.weight <= values.weightMax);

        /* Filter by  Height */
        const min = parseInt(values.heightMin, 10);
        const max = parseInt(values.heightMax, 10);

        gnomes = gnomes.filter(gnome => gnome.height >= min);
        gnomes = gnomes.filter(gnome => gnome.height <= max);

        dispatch(actions.setGnomesFilter(gnomes))


    };






    /* Set default Value */

    let citySelected
    let genderSelected;
    citySelected = optionsCities[0]
    genderSelected = optionsGender[0]



    const onClickFriend = () => {
        console.log('here')
    }

    return (
        <div className={styleShowForm}>
            <form onSubmit={handleSubmit(onSubmit)} className="row formFilter ">
                {/* Inputs Form */}
                <div className="inputsForm col-md-9 col-lg-8 col-xl-6">
                    {/* First Line of Filter */}

                    <div className={" row first-line col-md-12"} >

                        {/* City */}
                        <div className="form-group col-md-4">
                            <label htmlFor="name">City</label>
                            <RHFInput
                                as={<Select options={optionsCities} />}
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
                            <input name="name" className="form-control" type="text" ref={register} />
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
                                <input name="ageMin" className="form-control filterInputNumber" type="number" ref={register}
                                    defaultValue={minAge} />To
                    <input name="ageMax" className="form-control filterInputNumber" type="number" ref={register}
                                    defaultValue={maxAge} />
                            </div>
                        </div>


                        {/* Weight */}
                        <div className="form-group form-group-weight col-md-4">
                            <div className="labelWeight">
                                <label htmlFor="weight">Weight</label>
                            </div>
                            <div className="inputWeight">
                                <input name="weightMin" className="form-control filterInputNumber" type="number" ref={register}
                                    defaultValue={minWeight} />To
                    <input name="weightMax" className="form-control filterInputNumber" type="number" ref={register}
                                    defaultValue={maxWeight} />
                            </div>
                        </div>


                        {/* Height */}
                        <div className="form-group form-group-height col-md-4">
                            <div className="labelHeight">
                                <label htmlFor="weight">Height</label>
                            </div >
                            <div className="inputHeight">
                                <input name="heightMin" className="form-control filterInputNumber" type="number" ref={register}
                                    defaultValue={minHeight} />To

                            <input name="heightMax" className="form-control filterInputNumber" type="number" ref={register}
                                    defaultValue={maxHeight} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="buttonSubmit col-sm-12 col-md-3 col-lg-3 col-xl-2">
                    <Button type="submit" className="col-sm-12 col-lg-8 submitButtonFilter btn-text" onClick={onClickFriend}>Apply Filter</Button>
                </div>

            </form>
        </div>
    );
};

