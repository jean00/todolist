"use strict";

import { format } from "date-fns";
import { ui } from "../src/data";
import { storage } from "../src/storage";

const notes = () => {
  let collection = [];
  let i = 0;

  window.onload = () => {
    let localItems = "";
    localItems = storage.getItems();
    if (localItems != null) {
      for (i = 0; i < localItems.length; i++) {
        collection.push(localItems[i]);
        ui.HTMLelement(localItems[i], i);
      }
    } else {
      localItems = "";
    }
    i = i - 1;
  };

  const checkTitle = (title) => {
    if (title != "") {
      document.querySelector(".popup").style.display = "none";
      getInput();
    } else alert("You have to enter a title for your todo");
  };

  const getInput = () => {
    let todosdate = new Date(document.querySelector(".dateInput").valueAsDate);
    let obj = {
      title: document.querySelector(".title").value,
      description: document.querySelector(".notes").value,
      date: format(todosdate, "dd/MM/yyyy"),
    };
    collection.push(obj);
    ui.HTMLelement(obj, i);
    storage.storeItems(obj);
    i = i + 1;
  };

  const removeEl = (datavalue, obj) => {
    collection.splice(datavalue.value, 1);
    storage.removeItem(obj);
  };

  const modify = (obj, array2, notesta, titleta, date, divnotes) => {
    let oldTitle = storage.getOldTitle(obj);
    if (titleta.value !== "") {
      obj.title = titleta.value;
      array2[0].textContent = titleta.value;
    }

    if (notesta.value !== "") {
      obj.description = notesta.value;
      divnotes.textContent = notesta.value;
    }

    if (date.value !== "") {
      let newdate = new Date(date.valueAsDate);
      let formattedDate = format(newdate, "dd/MM/yyyy");
      obj.date = formattedDate;
      array2[1].textContent = formattedDate;
    }

    storage.modifyItem(obj, oldTitle);
  };

  const search = (e) => {
    const filteredtodos = e.target.value;
    displaytodo(filteredtodos);
  };

  const displaytodo = (filteredtodos) => {
    let maindiv = document.querySelectorAll(".maindiv");
    let titles = document.querySelectorAll(".divtitle");

    for (let i = 0; i < maindiv.length; i++) {
      if (titles[i].textContent !== filteredtodos) {
        maindiv[i].style.display = "none";
      } else {
        if (titles[i].textContent === filteredtodos)
          maindiv[i].style.display = "block";
      }
      if (titles[i].textContent.includes(filteredtodos))
        maindiv[i].style.display = "block";
      if (filteredtodos.length === 0) {
        for (let j = 0; j < maindiv.length; j++) {
          maindiv[i].style.display = "block";
        }
      }
    }
  };

  return { getInput, removeEl, modify, search, checkTitle };
};

const note = notes();
export { note };
