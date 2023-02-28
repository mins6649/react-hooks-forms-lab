import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(e){
    setSearchFilter(e.target.value);
    console.log(searchFilter)
  }

  //FORM
  function handleName(e){
    setName(e.target.value);
  }
  function handleCategory(e){
    setCategory(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const grocery = {name, category, id: uuid()}
    // itemsToDisplay.push(grocery);
    console.log(itemsToDisplay)
  }


  const filterItems = items.filter((item)=>{
    if(searchFilter === "") return true;   
      return item.name.toLowerCase().includes(searchFilter)
  })
  const itemsToDisplay = filterItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  // setGroceryList(itemsToDisplay);
  // WE CANNOT RENDER info collected from submit. 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} onName={handleName} onCategory={handleCategory} />
      <Filter searchFilter={searchFilter} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
