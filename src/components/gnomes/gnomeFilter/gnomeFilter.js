import React from "react";
import useForm from "react-hook-form";
import Select from 'react-select'
import { Button } from "react-bootstrap";
import { RHFInput } from 'react-hook-form-input';
import './gnomeFilter.css'
import './buttonFilter.css'

import classes from './toggleFilter.module.css'
import { useState, useEffect } from 'react';

export const GnomeFilter = (params) => {
    const { handleSubmit, register, setValue } = useForm();
    const [initialized, setInitialized] = useState(false);

    /* This is for call to get data when the app is not inialized */
    useEffect(() => {
        if (!initialized) {
            setGnomesFilterInitial()
        }
    })




    const resetData = params.resetData

    /* Set gnomes*/
    const gnomes = params.gnomes

    /* Set options of Selects */

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
        let gnomesFilter = gnomes
        if (values.city.value !== "0") {
            gnomesFilter = gnomesFilter.filter(gnome => gnome.city === values.city.label);
        }

        /* Filter by name */
        if (values.name.trim() !== '') {
            gnomesFilter = gnomesFilter.filter(gnome => gnome.name === values.name);
        }

        /* Filter by Gender */
        if (values.gender.value !== "0") {
            gnomesFilter = gnomesFilter.filter(gnome => gnome.gender === values.gender.label);
        }

        /* Filter by  Age */
        gnomesFilter = gnomesFilter.filter(gnome => gnome.age >= values.ageMin);
        gnomesFilter = gnomesFilter.filter(gnome => gnome.age <= values.ageMax);


        /* Filter by  Weight */
        gnomesFilter = gnomesFilter.filter(gnome => gnome.weight >= values.weightMin);
        gnomesFilter = gnomesFilter.filter(gnome => gnome.weight <= values.weightMax);

        /* Filter by  Height */
        const min = parseInt(values.heightMin, 10);
        const max = parseInt(values.heightMax, 10);

        gnomesFilter = gnomesFilter.filter(gnome => gnome.height >= min);
        gnomesFilter = gnomesFilter.filter(gnome => gnome.height <= max);

        resetData(gnomesFilter)
        console.log(params)


    };



    const setGnomesFilterInitial = () => {
        setInitialized(true)

        params = params.paramsUrl
        let gnomesFilter = gnomes

        /* Filter by name */
        if (params.name && params.name.trim() !== '') {
            gnomesFilter = gnomesFilter.filter(gnome => gnome.name === params.name);
        }

        /* Filter by Gender */
        if (params.gender && params.gender !== "0") {
            gnomesFilter = gnomesFilter.filter(gnome => gnome.gender === params.gender);

        }



        resetData(gnomesFilter)
    };




    /* Set default Value */

    let citySelected
    let genderSelected;
    let name;


    /* Set  Initial Value  */
    if (!initialized) {

        /* Gender */
        if (params.paramsUrl && params.paramsUrl.city) {
            const index = optionsCities.filter(option => option.label.toLowerCase() === params.paramsUrl.city.toLowerCase())

            if (index && index[0]) {
                citySelected = optionsCities[index[0].value]
            } else {
                citySelected = optionsCities[0]
            }
        } else {
            citySelected = optionsCities[0]
        }


        /* Gender */
        if (params.paramsUrl && params.paramsUrl.gender) {
            const index = optionsGender.filter(option => option.label.toLowerCase() === params.paramsUrl.gender.toLowerCase())

            if (index && index[0]) {
                genderSelected = optionsGender[index[0].value]
            } else {
                genderSelected = optionsGender[0]
            }
        } else {
            genderSelected = optionsGender[0]
        }


        if (params.paramsUrl && params.paramsUrl.name && !initialized) {
            name = params.paramsUrl.name
        } else {
            name = ""
        }
    }

    return (
        <div className={styleShowForm}>
            <form onSubmit={handleSubmit(onSubmit)} className="row formFilter ">
                {/* Inputs Form */}
                <div class="inputsForm col-md-9 col-lg-8 col-xl-6">
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
                            <input name="name" className="form-control" type="text" ref={register} defaultValue={name} />
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
                <div class="buttonSubmit col-sm-12 col-md-3 col-lg-3 col-xl-2">
                    <Button type="submit" className="col-sm-12 col-lg-8 submitButtonFilter btn-text" onClick={params.onClick}>Apply Filter</Button>
                </div>

            </form>
        </div>
    );
};

