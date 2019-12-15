import React from "react";
import useForm from "react-hook-form";

const FilterGnomes = () => {

  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  /*   <div className="form-group">
      <label htmlFor="team">{gettext('Equipo')}</label>
      <select className="form-control"
        name="team"
        multiple={false}
        ref={this.inTeam}
        value={this.state.card.team}
        onChange={this.handleInputChange}>
        {this.state.teams.map(
          team => (<option value={team.id} key={team.id}>{team.name}</option>)
        )}
      </select>
      <MessageError field="team" errors={this.state.errors} />
    </div>
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="lastName">Name</label>
      <input name="name" ref={register({ required: true, maxlength: 20 })} />


      <label htmlFor="age">Age</label>
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />


      <label htmlFor="weight">Weight</label>
      <input name="weight" type="number" ref={register({ min: 18, max: 99 })} />

      <label htmlFor="height">Height</label>
      <input name="height" type="number" ref={register({ min: 18, max: 99 })} />
      <label htmlFor="height">Gender</label>
      <input name="height" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
};

export default FilterGnomes;