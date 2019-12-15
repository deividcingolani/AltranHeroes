import React from "react";
import useForm from "react-hook-form";
import Select from 'react-select'
import { Button } from "react-bootstrap";
import { RHFInput } from 'react-hook-form-input';



export const GnomeFilter = () => {
    const { handleSubmit, register, setValue } = useForm();

    const onSubmit = values => {
        console.log(values);
    };
    const options = [
        { value: '0', label: 'All' },
        { value: '1', label: 'Brastlewark' },

    ]

    const optionsGender = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="row"> 
            <div className="form-group col-md-2">
                <label htmlFor="name">City</label>
                <RHFInput
                    as={<Select options={options} />}
                    rules={{ required: true }}
                    name="gender"
                    register={register}
                    setValue={setValue}
                />
            </div>
            <div className="form-group name">
                <label htmlFor="name">Name</label>
                <input name="name" className="form-control" type="text" ref={register} />
            </div>

            <div className="form-group age">
                <label htmlFor="ageMax">Age Min</label>
                <input name="ageMin" className="form-control" type="number" ref={register} />
                <label htmlFor="ageMax">Age Max</label>
                <input name="ageMax" className="form-control" type="number" ref={register} />
            </div>

            <div className="form-group weight">
                <label htmlFor="weightMax">Weight Min</label>
                <input name="weightMin" className="form-control" type="number" ref={register} />
                <label htmlFor="weightMax">Weight Max</label>
                <input name="WeightMax" className="form-control" type="number" ref={register} />
            </div>
            <div className="form-group height">
                <label htmlFor="heightMax">Height Min</label>
                <input name="heightMin" className="form-control" type="number" ref={register} />
                <label htmlFor="heightMax">Height Max</label>
                <input name="heightMax" className="form-control" type="number" ref={register} />
            </div>

            <div className="form-group gender">
                <label htmlFor="gender">Gender</label>

                <RHFInput
                    as={<Select options={optionsGender} />}
                    rules={{ required: true }}
                    name="gender"
                    register={register}
                    setValue={setValue}
                />
            </div>

            <Button type="submit">Apply Filter</Button>
        </form>
    );
};

