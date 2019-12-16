import React from "react";
import useForm from "react-hook-form";
import Select from 'react-select'
import { Button } from "react-bootstrap";
import { RHFInput } from 'react-hook-form-input';
import './gnomeFilter.css'
import classes from './test.module.css'

export const GnomeFilter = (params) => {
    const { handleSubmit, register, setValueCity, setValueGender } = useForm();


    const gnomes = params.gnomes

    /* Set options of Select in form */
    /* Cities */
    const optionsCities = [
        { value: '0', label: 'All' },
        { value: '1', label: 'Brastlewark' },
    ]

    /*Gender  */
    const optionsGender = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];


    /* Get min and Max  */
    /* Age*/
    const minAge = gnomes.reduce((min, gnome) => gnome.age < min ? gnome.age : min, gnomes[0].age);
    const maxAge = gnomes.reduce((max, gnome) => gnome.age > max ? gnome.age : max, gnomes[0].age);

    /* Weight*/
    const minWeight = gnomes.reduce((min, gnome) => gnome.weight < min ? gnome.weight : min, gnomes[0].weight);
    const maxWeight = gnomes.reduce((max, gnome) => gnome.weight > max ? gnome.weight : max, gnomes[0].weight);

    /* Height*/
    const minHeight = gnomes.reduce((min, gnome) => Math.round(gnome.height) < min ? Math.round(gnome.height) : min, Math.round(gnomes[0].height));
    const maxHeight = gnomes.reduce((max, gnome) => Math.round(gnome.height) > max ? Math.round(gnome.height) : max, Math.round(gnomes[0].height));




    const onSubmit = values => {
        console.log(values);
    };






    /* When is clicked Button Filter, Toggled Form */
    let styleShowForm;
    if (params.showFormFilter) {
        styleShowForm = classes.Open;
    } else {
        styleShowForm = classes.Closed;
    }



    console.log(params.setDataForm)
    return (
        <div className={styleShowForm}>
            <form onSubmit={handleSubmit(onSubmit)} className="row">

                {/* First Line of Filter */}

                <div className={"row col-12 first-line"} >

                    {/* City */}
                    <div className="form-group col-md-3">
                        <label htmlFor="name">City</label>
                        <RHFInput
                            as={<Select options={optionsCities} />}
                            rules={{ required: true }}
                            name="gender"
                            defaultValue={optionsCities[0]}
                            register={register}
                            setValue={setValueCity}
                        />
                    </div>


                    {/* Name */}
                    <div className="form-group  col-md-3">
                        <label htmlFor="name">Name</label>
                        <input name="name" className="form-control" type="text" ref={register} />
                    </div>

                    {/* Gender */}
                    <div className="form-group gender col-md-3">
                        <label htmlFor="gender">Gender</label>
                        <RHFInput
                            as={<Select options={optionsGender} />}
                            rules={{ required: true }}
                            name="gender"
                            register={register}
                            setValue={setValueGender}
                        />
                    </div>

                </div>

                <div className="row col-12 second-line">

                    {/* Age  */}
                    <div className="form-group col-md-2 form-group-age">
                        <div className="labelAge">
                            <label htmlFor="age">Age </label>
                        </div>
                        <div className="inputAge">
                            <input name="age" className="form-control filterInputNumber" type="number" ref={register}
                                defaultValue={minAge} min={minAge} max={maxAge} />to
                    <input name="age" className="form-control filterInputNumber" type="number" ref={register}
                                defaultValue={maxAge} min={minAge} max={maxAge} />
                        </div>
                    </div>


                    {/* Weight */}
                    <div className="form-group form-group-weight col-md-2">
                        <div className="labelWeight">
                            <label htmlFor="weight">Weight</label>
                        </div>
                        <div className="inputWeight">
                            <input name="weightMin" className="form-control filterInputNumber" type="number" ref={register}
                                defaultValue={minWeight} min={minWeight} max={maxWeight} />To
                    <input name="WeightMax" className="form-control filterInputNumber" type="number" ref={register}
                                defaultValue={maxWeight} min={minWeight} max={maxWeight} />
                        </div>
                    </div>


                    {/* Height */}
                    <div className="form-group form-group-height col-md-2">
                        <div className="labelHeight">
                            <label htmlFor="weight">Height</label>
                        </div >
                        <div className="inputHeight">
                            <input name="heightMin" className="form-control filterInputNumber" type="number" ref={register}
                                defaultValue={minHeight} min={minHeight} max={maxHeight} />To

                            <input name="heightMax" className="form-control filterInputNumber" type="number" ref={register}
                                defaultValue={maxHeight} min={minHeight} max={maxHeight} />
                        </div>
                    </div>
                    <Button type="submit" className="col-md-1 submitFilter">Apply Filter</Button>

                </div>


            </form>
        </div>
    );
};

