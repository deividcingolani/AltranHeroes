import React from "react";
import Select from 'react-select'
import { Button } from "react-bootstrap";
import { Formik, Field, Form } from 'formik';



const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};


const FilterGnomes = () => {

  /*   const [gnomes, setGnomes] = useState([]);
   */
  /*   const [name, setName] = useState([]);
    const [age, setAge] = useState([]);
    const [weight, setWeight] = useState([]);
    const [height, setHeight] = useState([]);
   */

  let name;
  let age;
  let weight;
  let height;
  let city;

  const onSubmit = () => console.log(name)

  const options = [
    { value: '0', label: 'All' },
    { value: '1', label: 'Brastlewark' },

  ]
  return (

    <form onSubmit={onSubmit}>
      <div class="form-group">
        <label htmlFor="name">City</label>
        <Select
          
          value={city}
          options={options}
          defaultValue={options[0]}
        >
        </Select>
      </div>
      <div class="form-group">
        <label htmlFor="name">Name</label>
        <input name="name" class="form-control" type="text" value={name} />
      </div>
      <div class="form-group">
        <label htmlFor="age">Age</label>
        <input name="age" class="form-control" type="text" value={age} />
      </div>
      <div class="form-group">
        <label htmlFor="weight">Weight</label>
        <input name="weight" class="form-control" type="text" value={weight} />
      </div>
      <div class="form-group">
        <label htmlFor="height">Height</label>
        <input name="height" class="form-control" type="text" value={height} />
      </div>
      <Button type="submit">Apply Filter</Button>
     
    </form>
  );
};

export default FilterGnomes;