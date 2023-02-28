import React from "react";
//import { v4 as uuid } from "uuid";

function ItemForm({onSubmit, onName, onCategory}) {

  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onCategory}>
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
