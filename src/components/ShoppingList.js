import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, onSetItems}) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");


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
    console.log(e.target.value)
  }
  function handleCategory(e){
    setCategory(e.target.value);
    console.log(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    const grocery = {name, category, id: uuid()}
    const allItems = [...items, grocery] //items is a state var in PARENT component
    onSetItems(allItems)
    return grocery;
  }


  const filterItems = items.filter((item)=>{
    if(searchFilter === "") return true;   
      return item.name.toLowerCase().includes(searchFilter.toLowerCase())
  })
  const itemsToDisplay = filterItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} onName={handleName} onCategory={handleCategory} />
      <Filter search={searchFilter} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {/* {renderGroceryList()} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
