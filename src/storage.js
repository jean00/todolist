"use strict";

const saveTodos = () => {
  let array = [];

  const storeItems = (todo) => {
    array = JSON.parse(localStorage.getItem("todos")) || [];
    array.push(todo);
    localStorage.setItem("todos", JSON.stringify(array));
  };

  const getItems = () => {
    let items;
    if (localStorage.getItem("todos") !== null) {
      items = JSON.parse(localStorage.getItem("todos"));
    }
    return items;
  };

  const removeItem = (obj) => {
    let copy = getItems();
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].title == obj.title) {
        copy.splice(copy.indexOf(copy[i]), 1);
      }
    }
    localStorage.setItem("todos", JSON.stringify(copy));
  };

  const getOldTitle = (obj) => {
    return obj.title;
  };

  const getOldDesc = (obj) => {
    return obj.description;
  };

  const getOldDate = (obj) => {
    return obj.date;
  };

  const modifyItem = (obj, oldTitle, oldDesc, oldDate) => {
    let copy2 = getItems();
    for (let i = 0; i < copy2.length; i++) {
      if (copy2[i].title == oldTitle) {
        copy2[i].title = obj.title;
      }
      if (copy2[i].description == oldDesc) {
        copy2[i].description = obj.description;
      }
      if (copy2[i].date == oldDate) {
        copy2[i].date = obj.date;
      }
    }
    localStorage.setItem("todos", JSON.stringify(copy2));
  };

  return { storeItems, getItems, removeItem, modifyItem, getOldTitle, getOldDesc, getOldDate };
};

const storage = saveTodos();
export { storage };
