import React from "react";
//import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, onName, onCategory}) {

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" label="Name" onChange={onName}/>
      </label>

      <label>
        Category:
        <select name="category" label="Category" onChange={onCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
