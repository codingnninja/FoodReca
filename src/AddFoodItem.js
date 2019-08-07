import React from 'react'

const AddFoodItem = props => {
  return (
    <form onSubmit={ props.addFoodItem }>
      <div className="form-group">
        <label>Food name</label>
        <input type="text" className="form-control" name="food" value={props.food} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Food cost</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
      </div>
      <button className="btn btn-success mt-2"> Add food item </button>
    </form>
  )
}

export default AddFoodItem;